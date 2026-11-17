const AGE_COOKIE = 'magister_age_14';
const AGE_MAX_AGE = 60 * 60 * 24 * 365 * 2;
const BOOT_MIN_MS = 1200;
import { HUB_DETAIL_SEP } from '../i18n/appCopy';
import { mountAppGuide, type GuideGoTarget, type GuideViewId } from './app-guide';
import { parseRoomFromLocation } from './online-table';

const SAVE_KEY = 'magister-play-v1';

type AppSave = { worlds?: boolean; birthday?: boolean };

function worldsCleared(): boolean {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw) as AppSave;
    return data.worlds === true || data.birthday === true;
  } catch {
    return false;
  }
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAge: number): void {
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${secure}`;
}

function hasAgeGate(): boolean {
  return readCookie(AGE_COOKIE) === '1';
}

function preload(urls: string[]): Promise<void> {
  const tasks = urls.map(
    (url) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = url;
      }),
  );
  return Promise.all(tasks).then(() => undefined);
}

export function mountAppShell(): void {
  const root = document.querySelector<HTMLElement>('[data-app]');
  if (!root || root.dataset.ready === '1') return;
  root.dataset.ready = '1';

  const boot = root.querySelector<HTMLElement>('[data-app-boot]');
  const ageGate = root.querySelector<HTMLElement>('[data-app-age]');
  const ageBlocked = root.querySelector<HTMLElement>('[data-app-age-blocked]');
  const hub = root.querySelector<HTMLElement>('[data-app-hub]');
  const lockSheet = root.querySelector<HTMLElement>('[data-app-lock]');
  const track = root.querySelector<HTMLElement>('[data-carousel-track]');
  const dotsHost = root.querySelector<HTMLElement>('[data-carousel-dots]');
  const langMenu = root.querySelector<HTMLElement>('[data-lang-menu]');
  const intro = root.querySelector<HTMLElement>('[data-app-intro]');
  const caption = root.querySelector<HTMLElement>('[data-app-caption]');
  const activeTitle = root.querySelector<HTMLElement>('[data-active-title]');
  const activeBlurb = root.querySelector<HTMLElement>('[data-active-blurb]');
  const activeDetail = root.querySelector<HTMLElement>('[data-active-detail]');
  const activeLock = root.querySelector<HTMLElement>('[data-active-lock]');
  const activeCta = root.querySelector<HTMLButtonElement>('[data-active-cta]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const panels = {
    cards: root.querySelector<HTMLElement>('[data-panel="cards"]'),
    play: root.querySelector<HTMLElement>('[data-panel="play"]'),
    guide: root.querySelector<HTMLElement>('[data-panel="guide"]'),
    online: root.querySelector<HTMLElement>('[data-panel="online"]'),
    buy: root.querySelector<HTMLElement>('[data-panel="buy"]'),
  };

  const guideRoot = root.querySelector<HTMLElement>('[data-guide-root]');
  const guideTitles = guideRoot
    ? {
        hub: guideRoot.dataset.titleHub ?? '',
        worlds: guideRoot.dataset.titleWorlds ?? '',
        rank: guideRoot.dataset.titleRank ?? '',
        path: guideRoot.dataset.titlePath ?? '',
        history: guideRoot.dataset.titleHistory ?? '',
      }
    : { hub: '', worlds: '', rank: '', path: '', history: '' };

  const guide = mountAppGuide(guideRoot, {
    getBarTitle: (view: GuideViewId) => guideTitles[view] || guideTitles.hub,
    onBackToAppHub: () => showHub(),
    onBackToHub: () => {},
    onOpenLock: () => openLock(),
    worldsCleared,
    onGo: (target: GuideGoTarget) => {
      if (target === 'cards') showPanel('cards');
      else openGame(target);
    },
  });

  document.documentElement.classList.add('mag-app-active');
  document.body.classList.add('mag-app-body');

  const slides = track ? [...track.querySelectorAll<HTMLElement>('[data-door]')] : [];
  let index = 0;

  let dragX = 0;
  let startX = 0;
  let dragging = false;
  let dragged = false;
  let dragCapturing = false;
  let doorTapGuard = false;
  const DRAG_SLOP_PX = 10;

  function paintLocks(): void {
    const open = worldsCleared();
    root.querySelectorAll<HTMLElement>('[data-door][data-locked-until="worlds"]').forEach((door) => {
      door.classList.toggle('is-locked', !open);
      door.toggleAttribute('aria-disabled', !open);
    });
    paintActiveMeta();
  }

  let metaSwapTimer: ReturnType<typeof setTimeout> | undefined;

  function carouselDurationMs(): number {
    const raw = getComputedStyle(root).getPropertyValue('--carousel-dur').trim();
    const match = raw.match(/^([\d.]+)m?s$/);
    if (!match) return 520;
    const value = Number(match[1]);
    return raw.endsWith('s') && !raw.endsWith('ms') ? value * 1000 : value;
  }

  function clearChromeFade(): void {
    intro?.classList.remove('is-chrome-fade');
    caption?.classList.remove('is-chrome-fade');
  }

  function applyActiveMeta(): void {
    const slide = slides[index];
    if (!slide) return;
    const locked =
      slide.dataset.lockedUntil === 'worlds' &&
      (slide.classList.contains('is-locked') || slide.getAttribute('aria-disabled') === 'true');
    const soon = slide.dataset.soon === '1';
    if (activeTitle) activeTitle.textContent = slide.dataset.title ?? '';
    if (activeBlurb) activeBlurb.textContent = slide.dataset.blurb ?? '';
    if (activeDetail) {
      const parts = (slide.dataset.detail ?? '').split(HUB_DETAIL_SEP).filter(Boolean);
      activeDetail.replaceChildren(
        ...parts.map((text) => {
          const p = document.createElement('p');
          p.textContent = text;
          return p;
        }),
      );
      activeDetail.hidden = parts.length === 0;
    }
    if (activeCta) activeCta.textContent = slide.dataset.cta ?? activeCta.textContent;
    if (activeLock) {
      const lockText = locked ? (slide.dataset.lockText ?? '') : soon ? (slide.dataset.soonText ?? '') : '';
      activeLock.textContent = lockText;
      activeLock.classList.toggle('is-empty', !lockText);
    }
  }

  function paintActiveMeta(animate = false): void {
    const slide = slides[index];
    if (!slide) return;
    const nextTitle = slide.dataset.title ?? '';
    const nextBlurb = slide.dataset.blurb ?? '';
    const nextDetail = slide.dataset.detail ?? '';
    const nextCta = slide.dataset.cta ?? '';
    const titleChanged = Boolean(activeTitle && activeTitle.textContent !== nextTitle);
    const blurbChanged = Boolean(activeBlurb && activeBlurb.textContent !== nextBlurb);
    const detailChanged = Boolean(
      activeDetail &&
        (activeDetail.hidden
          ? nextDetail.length > 0
          : [...activeDetail.querySelectorAll('p')].map((p) => p.textContent).join(HUB_DETAIL_SEP) !== nextDetail),
    );
    const ctaChanged = Boolean(activeCta && activeCta.textContent !== nextCta);
    const anyChanged = titleChanged || blurbChanged || detailChanged || ctaChanged;

    if (metaSwapTimer !== undefined) {
      clearTimeout(metaSwapTimer);
      metaSwapTimer = undefined;
    }

    if (!animate || reduceMotion || !anyChanged) {
      clearChromeFade();
      applyActiveMeta();
      return;
    }

    const half = carouselDurationMs() / 2;
    intro?.classList.add('is-chrome-fade');
    caption?.classList.add('is-chrome-fade');

    metaSwapTimer = window.setTimeout(() => {
      applyActiveMeta();
      intro?.classList.remove('is-chrome-fade');
      caption?.classList.remove('is-chrome-fade');
      metaSwapTimer = undefined;
    }, half);
  }

  function wrapIndex(value: number): number {
    const n = slides.length;
    if (n <= 0) return 0;
    return ((value % n) + n) % n;
  }

  function circularOffset(i: number, active: number): number {
    const n = slides.length;
    if (n <= 0) return 0;
    let offset = i - active;
    if (offset > n / 2) offset -= n;
    if (offset < -n / 2) offset += n;
    return offset;
  }

  function syncHubCoverMotion(): void {
    slides.forEach((slide) => {
      const img = slide.querySelector<HTMLImageElement>('img[data-hub-art]');
      if (!img) return;
      const still = img.dataset.artStill;
      const motion = img.dataset.artMotion;
      if (!still || !motion) return;
      const playMotion = slide.classList.contains('is-active') && !reduceMotion;
      const next = playMotion ? motion : still;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });
  }

  function paintCarousel(animate = true): void {
    if (!track || !slides.length) return;
    index = wrapIndex(index);
    const motion = animate && !reduceMotion;
    track.classList.toggle('is-instant', !motion);
    track.style.setProperty('--carousel-drag', `${dragX}px`);
    slides.forEach((slide, i) => {
      const offset = circularOffset(i, index);
      const visual = Math.max(-2, Math.min(2, offset));
      slide.style.setProperty('--ring-offset', String(offset));
      slide.dataset.offset = String(visual);
      slide.classList.toggle('is-active', offset === 0);
      slide.classList.toggle('is-far', Math.abs(offset) > 2);
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
      slide.tabIndex = offset === 0 ? 0 : -1;
    });
    if (dotsHost) {
      dotsHost.querySelectorAll<HTMLButtonElement>('[data-carousel-dot]').forEach((dot, i) => {
        const on = i === index;
        dot.classList.toggle('is-active', on);
        dot.setAttribute('aria-current', on ? 'true' : 'false');
      });
    }
    const prevBtn = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const nextBtn = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
    if (prevBtn) prevBtn.disabled = slides.length <= 1;
    if (nextBtn) nextBtn.disabled = slides.length <= 1;
    syncHubCoverMotion();
    paintActiveMeta(motion);
  }

  function goTo(next: number, animate = true): void {
    index = wrapIndex(next);
    dragX = 0;
    paintCarousel(animate);
  }

  function step(delta: number): void {
    if (!slides.length) return;
    goTo(index + delta);
  }

  function hidePanels(): void {
    Object.values(panels).forEach((panel) => {
      if (panel) panel.hidden = true;
    });
  }

  function showHub(): void {
    if (ageGate) ageGate.hidden = true;
    if (ageBlocked) ageBlocked.hidden = true;
    hidePanels();
    if (hub) hub.hidden = false;
    paintLocks();
    paintCarousel(false);
  }

  function showPanel(name: keyof typeof panels): void {
    if (hub) hub.hidden = true;
    hidePanels();
    const panel = panels[name];
    if (panel) panel.hidden = false;
  }

  function openLock(): void {
    if (!lockSheet) return;
    lockSheet.hidden = false;
    lockSheet.querySelector<HTMLElement>('[data-app-lock-title]')?.focus({ preventScroll: true });
  }

  function closeLock(): void {
    if (lockSheet) lockSheet.hidden = true;
  }

  function closeLangMenu(): void {
    if (!langMenu) return;
    langMenu.hidden = true;
    root.querySelector<HTMLButtonElement>('[data-lang-toggle]')?.setAttribute('aria-expanded', 'false');
  }

  function toggleLangMenu(): void {
    if (!langMenu) return;
    const open = langMenu.hidden;
    langMenu.hidden = !open;
    root.querySelector<HTMLButtonElement>('[data-lang-toggle]')?.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  function openGame(game: string): void {
    showPanel('play');
    window.dispatchEvent(new CustomEvent('magister:open-game', { detail: { game } }));
  }

  function activateDoor(door: HTMLElement): void {
    const action = door.dataset.door;
    const locked = door.classList.contains('is-locked') || door.getAttribute('aria-disabled') === 'true';
    if (locked && door.dataset.lockedUntil === 'worlds') {
      openLock();
      return;
    }
    if (action === 'deck') {
      guide.showGuide();
      showPanel('guide');
      return;
    }
    if (action === 'cards') showPanel('cards');
    else if (action === 'online') {
      showPanel('online');
      panels.online?.dispatchEvent(new CustomEvent('magister:online-resume'));
    }
    else if (action === 'buy') {
      const href = root.dataset.shopLink;
      if (href) window.location.assign(href);
      return;
    }
    else if (action === 'learn' || action === 'lore' || action === 'birthday' || action === 'oracle') {
      openGame(action);
    }
  }

  function onDoorClick(door: HTMLElement): void {
    const slideIndex = slides.indexOf(door);
    if (slideIndex >= 0 && slideIndex !== index) {
      goTo(slideIndex);
      return;
    }
    activateDoor(door);
  }

  function invokeDoorTap(door: HTMLElement): void {
    doorTapGuard = true;
    onDoorClick(door);
    window.setTimeout(() => {
      doorTapGuard = false;
    }, 320);
  }

  function openOnlineFromInviteLink(): void {
    const roomCode = parseRoomFromLocation();
    if (roomCode) {
      showPanel('online');
      panels.online?.dispatchEvent(new CustomEvent('magister:online-resume'));
    }
  }

  function confirmAge(): void {
    writeCookie(AGE_COOKIE, '1', AGE_MAX_AGE);
    showHub();
    openOnlineFromInviteLink();
  }

  function denyAge(): void {
    if (ageGate) ageGate.hidden = true;
    if (ageBlocked) ageBlocked.hidden = false;
  }

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (doorTapGuard) return;

    const langToggle = target.closest<HTMLElement>('[data-lang-toggle]');
    if (langToggle && root.contains(langToggle)) {
      event.preventDefault();
      toggleLangMenu();
      return;
    }

    if (langMenu && !langMenu.hidden && !target.closest('[data-lang-menu], [data-lang-toggle]')) {
      closeLangMenu();
    }

    const dot = target.closest<HTMLElement>('[data-carousel-dot]');
    if (dot && root.contains(dot)) {
      const i = Number(dot.dataset.carouselDot);
      if (Number.isFinite(i)) goTo(i);
      return;
    }

    if (target.closest('[data-carousel-prev]')) {
      step(-1);
      return;
    }
    if (target.closest('[data-carousel-next]')) {
      step(1);
      return;
    }

    const door = target.closest<HTMLElement>('[data-door]');
    if (door && root.contains(door)) {
      event.preventDefault();
      invokeDoorTap(door);
      return;
    }

    if (target.closest('[data-active-cta]')) {
      const active = slides[index];
      if (active) activateDoor(active);
      return;
    }

    const actionEl = target.closest<HTMLElement>('[data-app-action]');
    if (!actionEl || !root.contains(actionEl)) return;
    const action = actionEl.dataset.appAction;
    if (action === 'age-yes') {
      confirmAge();
      return;
    }
    if (action === 'age-no') {
      denyAge();
      return;
    }
    if (action === 'back') {
      if (panels.guide && !panels.guide.hidden) guide.resetGuide();
      if (panels.online && !panels.online.hidden) {
        panels.online.dispatchEvent(new CustomEvent('magister:online-stop'));
      }
      showHub();
      return;
    }
    if (action === 'lock-close') {
      closeLock();
      return;
    }
    if (action === 'lock-play') {
      closeLock();
      openGame('learn');
    }
  });

  if (track) {
    const onPointerDown = (event: PointerEvent): void => {
      if (event.button !== 0 && event.pointerType === 'mouse') return;
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('[data-carousel-prev], [data-carousel-next], [data-carousel-dot]')) return;
      if (!event.target.closest('[data-door]')) return;
      dragging = true;
      dragged = false;
      dragCapturing = false;
      startX = event.clientX;
      dragX = 0;
    };

    const onPointerMove = (event: PointerEvent): void => {
      if (!dragging) return;
      dragX = event.clientX - startX;
      if (!dragCapturing && Math.abs(dragX) >= DRAG_SLOP_PX) {
        dragged = true;
        dragCapturing = true;
        track.setPointerCapture(event.pointerId);
        track.classList.add('is-dragging');
      }
      if (dragCapturing) paintCarousel(false);
    };

    const endPointerDrag = (event: PointerEvent): void => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');

      if (dragCapturing) {
        dragCapturing = false;
        try {
          track.releasePointerCapture(event.pointerId);
        } catch {
          /* already released */
        }
        const threshold = Math.min(120, track.clientWidth * 0.18);
        if (dragX <= -threshold) step(1);
        else if (dragX >= threshold) step(-1);
        else {
          dragX = 0;
          paintCarousel(true);
        }
        dragged = false;
        return;
      }

      const hit = document.elementFromPoint(event.clientX, event.clientY);
      const door = hit?.closest<HTMLElement>('[data-door]');
      if (door && root.contains(door)) invokeDoorTap(door);
      dragX = 0;
      dragged = false;
      paintCarousel(true);
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', endPointerDrag);
    track.addEventListener('pointercancel', endPointerDrag);
  }

  window.addEventListener('magister:play-closed', () => {
    showHub();
  });

  window.addEventListener('magister:worlds-unlocked', () => {
    paintLocks();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (langMenu && !langMenu.hidden) {
        event.preventDefault();
        closeLangMenu();
        return;
      }
      if (lockSheet && !lockSheet.hidden) {
        event.preventDefault();
        closeLock();
        return;
      }
      const openPanel = Object.values(panels).find((panel) => panel && !panel.hidden);
      if (openPanel && openPanel !== panels.play) {
        event.preventDefault();
        if (openPanel === panels.guide) guide.resetGuide();
        showHub();
      }
      return;
    }

    const hubOpen = hub && !hub.hidden;
    if (!hubOpen) return;
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      step(-1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      step(1);
    } else if ((event.key === 'Enter' || event.key === ' ') && event.target === slides[index]) {
      event.preventDefault();
      activateDoor(slides[index]);
    }
  });

  paintCarousel(false);

  const assets = (root.dataset.preload ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const started = performance.now();
  void preload(assets).then(async () => {
    const wait = Math.max(0, BOOT_MIN_MS - (performance.now() - started));
    if (wait > 0 && !reduceMotion) await new Promise((resolve) => window.setTimeout(resolve, wait));
    if (boot) {
      boot.classList.add('is-done');
      window.setTimeout(() => {
        boot.hidden = true;
      }, reduceMotion ? 0 : 420);
    }
    if (hasAgeGate()) {
      showHub();
      openOnlineFromInviteLink();
    } else if (ageGate) {
      ageGate.hidden = false;
    }
    paintLocks();
    paintCarousel(false);
  });
}
