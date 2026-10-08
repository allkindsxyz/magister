import { birthCard, daysInMonth } from '../lib/birthCard';
import { addToCart, genPin, OPEN_EVENT, pieceBody, type CartMessage } from '../lib/cart';
import { SKUS, isSkuId, type ApparelColor, type SkuId } from '../lib/catalog';
import { formatPrice } from '../lib/pricing';
import { encode } from 'uqr';
import type { Lang } from '../i18n/utils';

export type MerchCard = {
  id: string;
  title: string;
  summary: string;
  suit: string;
  value: string;
  image: string;
  world: string;
  suitSymbol: string;
};

type ProductKind = 'apparel' | 'prints' | 'deck' | 'album';

type MerchUi = {
  thumb: string;
  add: string;
  added: string;
  hoodie: string;
  tee: string;
  color_black: string;
  color_inspired: string;
  birth_choose: string;
  birth_joker: string;
  garmentPhotos: Record<string, string>;
};

const reducedMotion = (): boolean => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function readJson<T>(root: ParentNode, selector: string, fallback: T): T {
  try {
    return JSON.parse(root.querySelector(selector)?.textContent || '') as T;
  } catch {
    return fallback;
  }
}

function asKind(value: string | undefined): ProductKind {
  return value === 'prints' || value === 'deck' || value === 'album' ? value : 'apparel';
}

function asLang(value: string | undefined): Lang {
  return value === 'ru' || value === 'be' || value === 'zh' ? value : 'en';
}

/** Pure black on white with a 2-module quiet zone: phone cameras fail on low-contrast or tinted codes. */
function drawQr(canvas: HTMLCanvasElement, text: string): void {
  const qr = encode(text, { ecc: 'M', border: 2 });
  const scale = 8;
  canvas.width = qr.size * scale;
  canvas.height = qr.size * scale;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  qr.data.forEach((row, y) => {
    row.forEach((dark, x) => {
      if (dark) ctx.fillRect(x * scale, y * scale, scale, scale);
    });
  });
}

/** Per-tab id mixed into preview ids, so identical messages from different buyers never share a link. */
function previewNonce(): string {
  const key = 'magister.preview.nonce';
  try {
    const saved = window.sessionStorage.getItem(key);
    if (saved && /^[A-Za-z0-9_-]{22}$/.test(saved)) return saved;
  } catch {
    /* storage unavailable */
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  const nonce = btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  try {
    window.sessionStorage.setItem(key, nonce);
  } catch {
    /* keep it for this page only */
  }
  return nonce;
}

type Gallery = {
  goTo: (key: string) => void;
  update: (key: string, patch: { src?: string; alt?: string; caption?: string }) => void;
};

function mountGallery(root: HTMLElement): Gallery {
  const track = root.querySelector<HTMLElement>('[data-gallery-track]');
  const caption = root.querySelector<HTMLElement>('[data-gallery-caption]');
  const slides = track ? Array.from(track.querySelectorAll<HTMLElement>('[data-slide]')) : [];
  const thumbs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-thumb]'));
  let active = 0;

  const setActive = (index: number): void => {
    if (index === active && caption?.textContent === (slides[index]?.dataset.caption ?? '')) return;
    active = index;
    thumbs.forEach((thumb, i) => {
      if (i === index) thumb.setAttribute('aria-current', 'true');
      else thumb.removeAttribute('aria-current');
    });
    if (caption) caption.textContent = slides[index]?.dataset.caption ?? '';
  };

  const slideLeft = (index: number): number => (slides[index]?.offsetLeft ?? 0) - (slides[0]?.offsetLeft ?? 0);

  // While a programmatic scroll runs, intermediate scroll positions must not move the active slide.
  let targetIndex: number | null = null;
  let settleTimer = 0;

  const scrollToIndex = (index: number): void => {
    if (!track || !slides.length) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    targetIndex = clamped;
    window.clearTimeout(settleTimer);
    settleTimer = window.setTimeout(() => {
      targetIndex = null;
    }, 700);
    track.scrollTo({ left: slideLeft(clamped), behavior: reducedMotion() ? 'auto' : 'smooth' });
    setActive(clamped);
  };

  let frame = 0;
  track?.addEventListener(
    'scroll',
    () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const width = slides[0]?.getBoundingClientRect().width ?? 0;
        if (!width) return;
        const index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / width)));
        if (targetIndex !== null) {
          if (index === targetIndex) targetIndex = null;
          return;
        }
        setActive(index);
      });
    },
    { passive: true },
  );

  track?.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToIndex(active + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToIndex(active - 1);
    }
  });

  thumbs.forEach((thumb, index) => thumb.addEventListener('click', () => scrollToIndex(index)));

  // Keep the current slide aligned when the column width changes; snapping is paused so it cannot fight the jump.
  if (track && 'ResizeObserver' in window) {
    let lastWidth = track.clientWidth;
    new ResizeObserver(() => {
      if (track.clientWidth === lastWidth) return;
      lastWidth = track.clientWidth;
      track.style.scrollSnapType = 'none';
      track.scrollLeft = slideLeft(active);
      requestAnimationFrame(() => {
        track.style.scrollSnapType = '';
      });
    }).observe(track);
  }

  return {
    goTo(key) {
      const index = slides.findIndex((s) => s.dataset.slide === key);
      if (index >= 0 && index !== active) scrollToIndex(index);
    },
    update(key, patch) {
      const index = slides.findIndex((s) => s.dataset.slide === key);
      const slide = slides[index];
      if (!slide) return;
      const image = slide.querySelector<HTMLImageElement>('[data-slide-img]');
      if (image && patch.src && image.getAttribute('src') !== patch.src) image.src = patch.src;
      if (image && patch.alt !== undefined) image.alt = patch.alt;
      const thumbImg = thumbs[index]?.querySelector<HTMLImageElement>('[data-thumb-img]');
      if (thumbImg && patch.src && thumbImg.getAttribute('src') !== patch.src) thumbImg.src = patch.src;
      if (patch.caption !== undefined) {
        slide.dataset.caption = patch.caption;
        if (index === active && caption) caption.textContent = patch.caption;
      }
    },
  };
}

export function mountMerch(root: HTMLElement): void {
  const kind = asKind(root.dataset.kind);
  const lang = asLang(root.dataset.lang);
  const cards = readJson<MerchCard[]>(root, '#merch-cards', []);
  const ui = readJson<MerchUi>(root, '#merch-ui', {} as MerchUi);
  const byId = new Map(cards.map((c) => [c.id, c]));
  const gallery = mountGallery(root);
  const form = root.querySelector<HTMLFormElement>('[data-pdp-form]');
  if (!form) return;

  const isApparel = kind === 'apparel';
  const isDeck = kind === 'deck';
  const hasCardPick = kind === 'apparel' || kind === 'prints';

  let cardId: string | null = hasCardPick ? (byId.has('ace-hearts') ? 'ace-hearts' : (cards[0]?.id ?? null)) : null;
  let pin = genPin();
  let messageOpen = false;
  let doneTimer = 0;

  const field = <T extends Element>(selector: string): T | null => form.querySelector<T>(selector);
  const recipientInput = field<HTMLInputElement>('input[name="recipient"]');
  const senderInput = field<HTMLInputElement>('input[name="sender"]');
  const messageInput = field<HTMLTextAreaElement>('textarea[name="message"]');
  const privateInput = field<HTMLInputElement>('input[name="private"]');
  const msgToggle = field<HTMLButtonElement>('[data-action="toggle-message"]');
  const msgToggleLabel = field<HTMLElement>('[data-msg-toggle-label]');
  const msgFree = field<HTMLElement>('[data-msg-free]');
  const msgPanel = root.querySelector<HTMLElement>('#pdp-msg-panel');
  const msgCount = field<HTMLOutputElement>('[data-msg-count]');
  const pinBlock = field<HTMLElement>('[data-pin-block]');
  const pinValue = field<HTMLElement>('[data-pin-value]');
  const qrBlocks = Array.from(root.querySelectorAll<HTMLElement>('[data-qr]'));
  const qrCanvases = Array.from(root.querySelectorAll<HTMLCanvasElement>('[data-qr-canvas]'));
  const qrLocks = Array.from(root.querySelectorAll<HTMLElement>('[data-qr-lock]'));
  const qrLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-qr-link]'));
  const qrErrors = Array.from(root.querySelectorAll<HTMLElement>('[data-qr-error]'));
  const priceEls = Array.from(root.querySelectorAll<HTMLElement>('[data-price]'));
  const addBtn = field<HTMLButtonElement>('[data-add]');
  const addLabel = field<HTMLElement>('[data-add-label]');
  const scale = root.querySelector<HTMLElement>('[data-scale-pick]');
  const bar = root.querySelector<HTMLElement>('[data-bar]');

  const selected = (name: string): string | null => {
    const input = form.elements.namedItem(name);
    if (input instanceof RadioNodeList) return input.value || null;
    if (input instanceof HTMLInputElement) return input.value || null;
    return null;
  };

  const currentSku = (): SkuId | null => {
    const value = selected('sku');
    return isSkuId(value) ? value : null;
  };

  const currentColor = (): ApparelColor => (selected('color') === 'inspired' ? 'inspired' : 'black');
  const currentSize = (): string => selected('size') || 'M';
  const currentCard = (): MerchCard | null => (cardId ? (byId.get(cardId) ?? null) : null);

  const garmentSrc = (): string => {
    const product = currentSku() === 'tee' ? 'tee' : 'hoodie';
    return ui.garmentPhotos?.[`${product}-${currentColor()}`] || SKUS.hoodie.image;
  };

  const syncPrice = (): void => {
    const sku = currentSku();
    if (!sku) return;
    const text = formatPrice(SKUS[sku].price, lang);
    priceEls.forEach((el) => {
      el.textContent = text;
    });
  };

  const syncGarment = (): void => {
    if (!isApparel) return;
    const piece = currentSku() === 'tee' ? ui.tee : ui.hoodie;
    const color = currentColor() === 'inspired' ? ui.color_inspired : ui.color_black;
    gallery.update('garment', { src: garmentSrc(), alt: `${piece} — ${color}`, caption: `${piece} · ${color}` });
  };

  const syncScale = (): void => {
    if (!scale) return;
    const sku = currentSku();
    scale.dataset.scalePick = sku === 'deck_standard' ? 'standard' : sku === 'deck_set' ? 'both' : 'xl';
  };

  const syncCard = (): void => {
    if (!hasCardPick) return;
    const card = currentCard();
    if (!card) return;
    const art = root.querySelector<HTMLImageElement>('[data-card-art]');
    const suit = root.querySelector<HTMLElement>('[data-card-suit]');
    const title = root.querySelector<HTMLElement>('[data-card-title]');
    const world = root.querySelector<HTMLElement>('[data-card-world]');
    if (art && art.getAttribute('src') !== card.image) art.src = card.image;
    if (suit) {
      suit.dataset.suit = card.suit;
      const symbol = document.createElement('span');
      symbol.setAttribute('aria-hidden', 'true');
      symbol.textContent = card.suitSymbol;
      suit.replaceChildren(symbol, document.createTextNode(` ${card.value}`));
    }
    if (title) title.textContent = card.title;
    if (world) world.textContent = card.world;
    gallery.update('card', { src: card.image, alt: card.title, caption: `${card.title} · ${card.world}` });
  };

  const messageDraft = (): CartMessage | null => {
    if (!messageOpen) return null;
    const text = (messageInput?.value ?? '').trim();
    const recipient = (recipientInput?.value ?? '').trim();
    const sender = (senderInput?.value ?? '').trim();
    if (!text && !recipient && !sender) return null;
    const isPrivate = Boolean(privateInput?.checked && text);
    return { text, recipient, sender, visibility: isPrivate ? 'private' : 'public', pin: isPrivate ? pin : null };
  };

  const syncMessage = (): void => {
    if (msgToggle) {
      msgToggle.setAttribute('aria-expanded', String(messageOpen));
      if (msgToggleLabel) {
        msgToggleLabel.textContent = (messageOpen ? msgToggle.dataset.labelRemove : msgToggle.dataset.labelAdd) || '';
      }
    }
    if (msgFree) msgFree.hidden = messageOpen;
    if (msgPanel) msgPanel.hidden = !messageOpen;
    if (msgCount && messageInput) msgCount.textContent = `${messageInput.value.length} / ${messageInput.maxLength}`;

    const isPrivate = Boolean(privateInput?.checked);
    if (pinBlock) pinBlock.hidden = !isPrivate;
    if (pinValue) pinValue.textContent = pin;

    qrBlocks.forEach((block) => {
      block.hidden = !messageOpen;
    });
    qrLocks.forEach((lock) => {
      lock.hidden = !isPrivate;
    });
    schedulePreview();
  };

  // Live QR: points at a server-side preview of the exact page the recipient will open.
  let previewKey = '';
  let previewTimer = 0;
  let previewAbort: AbortController | null = null;
  let previewUrl = '';
  let previewId: string | null = null;
  let previewInFlight: Promise<void> | null = null;
  const nonce = previewNonce();

  const setQrState = (state: 'pending' | 'ready' | 'error', url?: string): void => {
    qrBlocks.forEach((block) => block.classList.toggle('is-pending', state !== 'ready'));
    qrErrors.forEach((el) => {
      el.hidden = state !== 'error';
    });
    qrLinks.forEach((link) => {
      if (state === 'ready' && url) link.href = url;
      else link.removeAttribute('href');
    });
    if (state === 'ready' && url) qrCanvases.forEach((canvas) => drawQr(canvas, url));
  };

  const previewPayload = (): Record<string, unknown> | null => {
    const sku = currentSku();
    if (!sku) return null;
    const body = pieceBody({
      sku,
      cardId,
      color: currentColor(),
      size: currentSize(),
      message: messageDraft(),
      lang,
    });
    return { ...body, nonce };
  };

  const requestPreview = (key: string): Promise<void> => {
    const run = fetchPreview(key);
    previewInFlight = run;
    void run.finally(() => {
      if (previewInFlight === run) previewInFlight = null;
    });
    return run;
  };

  /** Resolves the preview id for the current form state, waiting for an in-flight or debounced request. */
  const ensurePreview = async (): Promise<string | null> => {
    const payload = previewPayload();
    if (!payload) return null;
    const key = JSON.stringify(payload);
    if (key === previewKey) return previewId;
    window.clearTimeout(previewTimer);
    const pending = previewInFlight ?? requestPreview(key);
    const timeout = new Promise<void>((resolve) => window.setTimeout(resolve, 3000));
    await Promise.race([pending, timeout]);
    if (key !== previewKey) {
      await Promise.race([requestPreview(key), timeout]);
    }
    return key === previewKey ? previewId : null;
  };

  const fetchPreview = async (key: string): Promise<void> => {
    previewAbort?.abort();
    const controller = new AbortController();
    previewAbort = controller;
    try {
      const res = await fetch('/api/previews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: key,
        signal: controller.signal,
      });
      const data = (await res.json()) as { ok?: boolean; id?: string; path?: string };
      if (controller.signal.aborted) return;
      if (!res.ok || !data.ok || !data.id || !data.path?.startsWith('/')) throw new Error('preview');
      previewKey = key;
      previewId = data.id;
      previewUrl = new URL(data.path, window.location.origin).href;
      setQrState('ready', previewUrl);
    } catch {
      if (controller.signal.aborted) return;
      previewKey = '';
      previewId = null;
      setQrState('error');
    }
  };

  function schedulePreview(): void {
    window.clearTimeout(previewTimer);
    if (!messageOpen) {
      previewAbort?.abort();
      return;
    }
    const payload = previewPayload();
    if (!payload) return;
    const key = JSON.stringify(payload);
    if (key === previewKey) {
      previewAbort?.abort();
      setQrState('ready', previewUrl);
      return;
    }
    setQrState('pending');
    previewTimer = window.setTimeout(() => void requestPreview(key), 600);
  }

  const resetMessage = (): void => {
    if (recipientInput) recipientInput.value = '';
    if (senderInput) senderInput.value = '';
    if (messageInput) messageInput.value = '';
    if (privateInput) privateInput.checked = false;
    pin = genPin();
    messageOpen = false;
    syncMessage();
  };

  const renderAll = (): void => {
    syncPrice();
    syncGarment();
    syncScale();
    syncCard();
    syncMessage();
  };

  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    syncPrice();
    if (target.name === 'sku' || target.name === 'color') {
      syncGarment();
      syncScale();
      if (isApparel) gallery.goTo('garment');
      if (isDeck) gallery.goTo(target.value === 'deck_two_xl' ? 'lifestyle' : 'scale');
    }
    if (target.name === 'private') syncMessage();
    else schedulePreview();
  });

  form.addEventListener('input', (event) => {
    const target = event.target as HTMLElement;
    if (target === messageInput || target === recipientInput || target === senderInput) syncMessage();
  });

  const flashAdded = (): void => {
    if (!addBtn || !addLabel) return;
    window.clearTimeout(doneTimer);
    addBtn.classList.add('is-done');
    addLabel.textContent = ui.added;
    doneTimer = window.setTimeout(() => {
      addBtn.classList.remove('is-done');
      addLabel.textContent = ui.add;
    }, 1800);
  };

  let submitting = false;
  const addButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-add], [data-action="bar-add"]'));

  const submit = async (): Promise<void> => {
    if (submitting) return;
    const sku = currentSku();
    if (!sku) return;
    const def = SKUS[sku];
    const card = currentCard();
    if (def.needsCard && !card) {
      root.querySelector<HTMLElement>('[data-action="open-picker"]')?.focus();
      return;
    }
    const message = messageDraft();
    let linePreviewId: string | null = null;
    if (message) {
      submitting = true;
      addButtons.forEach((btn) => btn.setAttribute('aria-busy', 'true'));
      try {
        // Without an id checkout simply creates a fresh link; the order itself never depends on it.
        linePreviewId = await ensurePreview();
      } finally {
        submitting = false;
        addButtons.forEach((btn) => btn.removeAttribute('aria-busy'));
      }
    }
    const image = def.kind === 'apparel' ? garmentSrc() : def.kind === 'prints' ? (card?.image ?? def.image) : def.image;
    const result = addToCart({
      sku,
      cardId: def.needsCard ? (card?.id ?? null) : null,
      cardTitle: def.needsCard ? (card?.title ?? null) : null,
      image,
      color: def.needsFit ? currentColor() : null,
      size: def.needsFit ? currentSize() : null,
      message,
      lang,
      previewId: linePreviewId,
    });
    if (!result.ok) {
      window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { status: result.reason === 'full' ? 'full' : undefined } }));
      return;
    }
    flashAdded();
    if (result.line.message) resetMessage();
    window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { status: 'added' } }));
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    void submit();
  });

  // Card picker
  const picker = root.querySelector<HTMLElement>('#merch-picker');
  const pickerGrid = root.querySelector<HTMLElement>('[data-picker-grid]');
  let pickerOpener: HTMLElement | null = null;

  const renderPicker = (suit: string): void => {
    if (!pickerGrid) return;
    root.querySelectorAll<HTMLButtonElement>('[data-picker-suit]').forEach((btn) => {
      const active = (btn.dataset.pickerSuit || '') === suit;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    const list = suit ? cards.filter((c) => c.suit === suit) : cards;
    pickerGrid.replaceChildren(
      ...list.map((card) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'merch-picker__card';
        btn.dataset.cardId = card.id;
        btn.setAttribute('aria-pressed', String(card.id === cardId));
        if (card.id === cardId) btn.classList.add('is-selected');
        const image = document.createElement('img');
        image.src = card.image;
        image.alt = '';
        image.width = 280;
        image.height = 400;
        image.loading = 'lazy';
        image.decoding = 'async';
        const label = document.createElement('span');
        label.textContent = `${card.suitSymbol} ${card.value} · ${card.title}`;
        btn.append(image, label);
        return btn;
      }),
    );
  };

  const openPicker = (opener: HTMLElement | null): void => {
    if (!picker) return;
    pickerOpener = opener;
    renderPicker('');
    picker.hidden = false;
    document.body.classList.add('dialog-open');
    (pickerGrid?.querySelector<HTMLElement>('.is-selected') ?? picker.querySelector<HTMLElement>('[data-action="close-picker"]'))?.focus();
  };

  const closePicker = (): void => {
    if (!picker || picker.hidden) return;
    picker.hidden = true;
    document.body.classList.remove('dialog-open');
    pickerOpener?.focus({ preventScroll: true });
    pickerOpener = null;
  };

  const chooseCard = (id: string): void => {
    if (!byId.has(id)) return;
    cardId = id;
    syncCard();
    syncMessage();
    gallery.goTo('card');
  };

  // Birthday
  const birthPanel = root.querySelector<HTMLElement>('#pdp-birth');
  const birthToggle = root.querySelector<HTMLButtonElement>('[data-action="toggle-birth"]');
  const monthSelect = root.querySelector<HTMLSelectElement>('[data-birth-month]');
  const daySelect = root.querySelector<HTMLSelectElement>('[data-birth-day]');
  const birthResult = root.querySelector<HTMLElement>('[data-birth-result]');

  const fillDays = (): void => {
    if (!monthSelect || !daySelect) return;
    const max = daysInMonth(Number(monthSelect.value)) || 31;
    const keep = Math.min(Number(daySelect.value) || 1, max);
    daySelect.replaceChildren(
      ...Array.from({ length: max }, (_, i) => {
        const option = document.createElement('option');
        option.value = String(i + 1);
        option.textContent = String(i + 1);
        option.selected = i + 1 === keep;
        return option;
      }),
    );
  };

  const birthCardRow = (card: MerchCard): HTMLElement => {
    const row = document.createElement('div');
    row.className = 'pdp-birth__card';
    const image = document.createElement('img');
    image.src = card.image;
    image.alt = '';
    image.width = 280;
    image.height = 400;
    const title = document.createElement('p');
    title.textContent = `${card.suitSymbol} ${card.value} · ${card.title}`;
    const choose = document.createElement('button');
    choose.type = 'button';
    choose.className = 'btn btn-accent';
    choose.dataset.chooseCard = card.id;
    choose.textContent = ui.birth_choose;
    row.append(image, title, choose);
    return row;
  };

  const showBirth = (): void => {
    if (!monthSelect || !daySelect || !birthResult) return;
    const result = birthCard(Number(monthSelect.value), Number(daySelect.value));
    birthResult.replaceChildren();
    if (!result) return;
    if (result.kind === 'joker') {
      const note = document.createElement('p');
      note.className = 'pdp-birth__note';
      note.textContent = ui.birth_joker;
      birthResult.append(note);
      ['ace-hearts', 'king-spades'].forEach((id) => {
        const card = byId.get(id);
        if (card) birthResult.append(birthCardRow(card));
      });
      return;
    }
    const card = byId.get(result.id);
    if (card) birthResult.append(birthCardRow(card));
  };

  const setBirthOpen = (open: boolean): void => {
    if (!birthPanel || !birthToggle) return;
    birthPanel.hidden = !open;
    birthToggle.setAttribute('aria-expanded', String(open));
    if (open) monthSelect?.focus();
  };

  if (monthSelect) {
    fillDays();
    monthSelect.addEventListener('change', fillDays);
  }

  root.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(
      '[data-action], [data-picker-suit], [data-card-id], [data-choose-card]',
    );
    if (!target) return;

    if (target.dataset.chooseCard) {
      chooseCard(target.dataset.chooseCard);
      setBirthOpen(false);
      if (birthResult) birthResult.replaceChildren();
      birthToggle?.focus();
      return;
    }
    if (target.dataset.cardId && pickerGrid?.contains(target)) {
      chooseCard(target.dataset.cardId);
      closePicker();
      return;
    }
    if (target.dataset.pickerSuit !== undefined) {
      renderPicker(target.dataset.pickerSuit || '');
      return;
    }

    switch (target.dataset.action) {
      case 'toggle-message':
        messageOpen = !messageOpen;
        syncMessage();
        if (messageOpen) messageInput?.focus();
        break;
      case 'regen-pin':
        pin = genPin();
        syncMessage();
        break;
      case 'open-picker':
        openPicker(target);
        break;
      case 'close-picker':
        closePicker();
        break;
      case 'toggle-birth':
        setBirthOpen(birthPanel?.hidden ?? false);
        break;
      case 'birth-submit':
        showBirth();
        break;
      case 'bar-add':
        void submit();
        break;
    }
  });

  if (picker) {
    picker.addEventListener('click', (event) => {
      if (event.target === picker) closePicker();
    });
    picker.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closePicker();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = Array.from(picker.querySelectorAll<HTMLElement>('button:not([disabled])'));
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  // Sticky bar on small screens: shown while the main buy button is off-screen.
  if (bar && addBtn && 'IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entry]) => {
        bar.hidden = entry.isIntersecting;
      },
      { rootMargin: '0px 0px -8px 0px' },
    ).observe(addBtn);
  }

  renderAll();
}
