const AGE_COOKIE = 'magister_age_14';
const AGE_MAX_AGE = 60 * 60 * 24 * 365 * 2;
const BOOT_MIN_MS = 1200;
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
  const activeLock = root.querySelector<HTMLElement>('[data-active-lock]');
  const activeCta = root.querySelector<HTMLElement>('[data-active-cta]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const panels = {
    cards: root.querySelector<HTMLElement>('[data-panel="cards"]'),
    play: root.querySelector<HTMLElement>('[data-panel="play"]'),
    online: root.querySelector<HTMLElement>('[data-panel="online"]'),
    buy: root.querySelector<HTMLElement>('[data-panel="buy"]'),
  };

  document.documentElement.classList.add('mag-app-active');
  document.body.classList.add('mag-app-body');

  const slides = track ? [...track.querySelectorAll<HTMLElement>('[data-door]')] : [];
  let index = 0;

  let dragX = 0;
  let startX = 0;
  let dragging = false;
  let dragged = false;

  function paintLocks(): void {
    const open = worldsCleared();
    root.querySelectorAll<HTMLElement>('[data-door][data-locked-until="worlds"]').forEach((door) => {
      door.classList.toggle('is-locked', !open);
      door.toggleAttribute('aria-disabled', !open);
    });
    paintActiveMeta();
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
    if (activeLock) {
      const lockText = locked ? (slide.dataset.lockText ?? '') : soon ? (slide.dataset.soonText ?? '') : '';
      activeLock.textContent = lockText;
      activeLock.hidden = !lockText;
    }
  }

  function paintActiveMeta(animate = false): void {
    const slide = slides[index];
    if (!slide) return;
    const nextTitle = slide.dataset.title ?? '';
    const nextBlurb = slide.dataset.blurb ?? '';
    const titleChanged = Boolean(activeTitle && activeTitle.textContent !== nextTitle);
    const blurbChanged = Boolean(activeBlurb && activeBlurb.textContent !== nextBlurb);
    if (!animate || reduceMotion || (!titleChanged && !blurbChanged)) {
      applyActiveMeta();
      return;
    }
    if (titleChanged) intro?.classList.add('is-swap');
    caption?.classList.add('is-swap');
    window.setTimeout(() => {
      applyActiveMeta();
      intro?.classList.remove('is-swap');
      caption?.classList.remove('is-swap');
    }, 100);
  }

  function paintCarousel(animate = true): void {
    if (!track || !slides.length) return;
    index = Math.max(0, Math.min(slides.length - 1, index));
    track.classList.toggle('is-instant', !animate || reduceMotion);
    track.style.setProperty('--carousel-index', String(index));
    track.style.setProperty('--carousel-drag', `${dragX}px`);
    slides.forEach((slide, i) => {
      const offset = i - index;
      slide.dataset.offset = String(offset);
      slide.classList.toggle('is-active', offset === 0);
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
    if (prevBtn) prevBtn.disabled = index <= 0;
    if (nextBtn) nextBtn.disabled = index >= slides.length - 1;
    paintActiveMeta(animate);
  }

  function goTo(next: number, animate = true): void {
    index = next;
    dragX = 0;
    paintCarousel(animate);
  }

  function step(delta: number): void {
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
    if (action === 'cards') showPanel('cards');
    else if (action === 'online') showPanel('online');
    else if (action === 'buy') showPanel('buy');
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

  function confirmAge(): void {
    writeCookie(AGE_COOKIE, '1', AGE_MAX_AGE);
    showHub();
  }

  function denyAge(): void {
    if (ageGate) ageGate.hidden = true;
    if (ageBlocked) ageBlocked.hidden = false;
  }

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    if (dragged) {
      dragged = false;
      return;
    }

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
      onDoorClick(door);
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
      dragging = true;
      dragged = false;
      startX = event.clientX;
      dragX = 0;
      track.setPointerCapture(event.pointerId);
      track.classList.add('is-dragging');
    };

    const onPointerMove = (event: PointerEvent): void => {
      if (!dragging) return;
      dragX = event.clientX - startX;
      if (Math.abs(dragX) > 8) dragged = true;
      paintCarousel(false);
    };

    const onPointerUp = (event: PointerEvent): void => {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('is-dragging');
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
      window.setTimeout(() => {
        dragged = false;
      }, 40);
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);
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
    } else if (ageGate) {
      ageGate.hidden = false;
    }
    paintLocks();
    paintCarousel(false);
  });
}
