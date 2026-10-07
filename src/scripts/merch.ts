import { birthCard, daysInMonth } from '../lib/birthCard';

export type MerchCard = {
  id: string;
  title: string;
  summary: string;
  description: string;
  suit: string;
  value: string;
  image: string;
  world: string;
  suitSymbol: string;
};

type ProductKind = 'apparel' | 'prints' | 'deck' | 'album';
type Product = 'hoodie' | 'tee' | 'print' | 'deck' | 'album';
type Color = 'inspired' | 'black';
type Audience = 'self' | 'gift';
type Visibility = 'public' | 'private';

type MerchState = {
  product: Product;
  cardId: string | null;
  size: string;
  color: Color;
  audience: Audience;
  recipient: string;
  sender: string;
  message: string;
  visibility: Visibility;
  pin: string;
  pinUnlocked: boolean;
};

type MerchUiCopy = {
  no_card: string;
  preview_created: string;
  preview_locked: string;
  preview_pin_prompt: string;
  birth_joker: string;
  read_more: string;
  read_less: string;
  format: string;
  product_title: string;
  product_lead: string;
  product_desc: string;
};

function must<T extends Element>(root: ParentNode, sel: string): T {
  const el = root.querySelector<T>(sel);
  if (!el) throw new Error(`Missing ${sel}`);
  return el;
}

function opt<T extends Element>(root: ParentNode, sel: string): T | null {
  return root.querySelector<T>(sel);
}

function genPin(): string {
  return String(Math.floor(1000 + Math.random() * 9000));
}

function fillDays(select: HTMLSelectElement, month: number, keepDay: number): void {
  const max = daysInMonth(month) || 31;
  const day = Math.min(keepDay || 1, max);
  select.replaceChildren();
  for (let d = 1; d <= max; d += 1) {
    const optEl = document.createElement('option');
    optEl.value = String(d);
    optEl.textContent = String(d);
    if (d === day) optEl.selected = true;
    select.append(optEl);
  }
}

function paintQr(canvas: HTMLCanvasElement, seed: string): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const n = 21;
  const size = canvas.width;
  const cell = size / n;
  ctx.fillStyle = '#f3f0e8';
  ctx.fillRect(0, 0, size, size);
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 33 + seed.charCodeAt(i)) >>> 0;
  const rnd = (): number => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 0xffffffff;
  };
  ctx.fillStyle = '#171714';
  const finder = (x: number, y: number): void => {
    ctx.fillRect(x * cell, y * cell, 7 * cell, 7 * cell);
    ctx.fillStyle = '#f3f0e8';
    ctx.fillRect((x + 1) * cell, (y + 1) * cell, 5 * cell, 5 * cell);
    ctx.fillStyle = '#171714';
    ctx.fillRect((x + 2) * cell, (y + 2) * cell, 3 * cell, 3 * cell);
  };
  finder(0, 0);
  finder(n - 7, 0);
  finder(0, n - 7);
  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      const inFinder =
        (x < 8 && y < 8) || (x >= n - 8 && y < 8) || (x < 8 && y >= n - 8);
      if (inFinder) continue;
      if (rnd() > 0.55) ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }
}

function resolveKind(value: string | undefined): ProductKind {
  if (value === 'prints' || value === 'deck' || value === 'album') return value;
  return 'apparel';
}

export function mountMerch(root: HTMLElement): void {
  const cards = JSON.parse(must<HTMLScriptElement>(root, '#merch-cards').textContent || '[]') as MerchCard[];
  const ui = JSON.parse(must<HTMLScriptElement>(root, '#merch-ui').textContent || '{}') as MerchUiCopy;
  const byId = new Map(cards.map((c) => [c.id, c]));
  const kind = resolveKind(root.dataset.kind);
  const isPrints = kind === 'prints';
  const isDeck = kind === 'deck';
  const isAlbum = kind === 'album';
  const hasCardPick = kind === 'apparel' || kind === 'prints';

  const state: MerchState = {
    product: isAlbum ? 'album' : isDeck ? 'deck' : isPrints ? 'print' : 'hoodie',
    cardId: hasCardPick ? (cards.find((c) => c.id === 'ace-hearts')?.id ?? cards[0]?.id ?? null) : null,
    size: isAlbum ? '152' : isDeck ? 'regular-xl' : isPrints ? '60x40' : 'M',
    color: 'black',
    audience: 'self',
    recipient: '',
    sender: '',
    message: '',
    visibility: 'public',
    pin: genPin(),
    pinUnlocked: false,
  };

  const garment = must(root, '#merch-garment');
  const garmentPhoto = must<HTMLImageElement>(root, '#merch-garment-photo');
  const garmentLabel = must(root, '#merch-garment-label');
  const selectedArt = opt<HTMLImageElement>(root, '#merch-selected-art');
  const selectedTitle = opt(root, '#merch-selected-title');
  const selectedSuit = opt(root, '#merch-selected-suit');
  const selectedWorld = opt(root, '#merch-selected-world');
  const selectedEmpty = opt(root, '#merch-selected-empty');
  const selectedCard = opt(root, '#merch-selected-card');
  const giftFields = must(root, '#merch-gift-fields');
  const messageLabel = must(root, '#merch-message-label');
  const pinBlock = must(root, '#merch-pin-block');
  const pinValue = must(root, '#merch-pin-value');
  const previewArt = must<HTMLImageElement>(root, '#merch-preview-art');
  const previewSuit = must(root, '#merch-preview-suit');
  const previewTitle = must(root, '#merch-preview-title');
  const previewWorld = must(root, '#merch-preview-world');
  const previewDesc = must(root, '#merch-preview-desc');
  const previewMore = must<HTMLButtonElement>(root, '#merch-preview-more');
  const previewCreated = must(root, '#merch-preview-created');
  const previewPeople = must(root, '#merch-preview-people');
  const previewMessage = must(root, '#merch-preview-message');
  const previewLocked = must(root, '#merch-preview-locked');
  const previewPinInput = must<HTMLInputElement>(root, '#merch-preview-pin');
  const qrCanvas = must<HTMLCanvasElement>(root, '#merch-qr');
  const birthResult = opt(root, '#merch-birth-result');
  const browsePanel = opt(root, '#merch-card-browse');
  const datePanel = opt(root, '#merch-card-date');
  const picker = opt(root, '#merch-picker');
  const pickerGrid = opt(root, '#merch-picker-grid');
  const monthSelect = opt<HTMLSelectElement>(root, '#merch-month');
  const daySelect = opt<HTMLSelectElement>(root, '#merch-day');
  const messageInput = must<HTMLTextAreaElement>(root, '#merch-message');
  const recipientInput = must<HTMLInputElement>(root, '#merch-recipient');
  const senderInput = must<HTMLInputElement>(root, '#merch-sender');

  let cardMethod: 'browse' | 'date' = 'browse';
  let descExpanded = false;

  const paintSuit = (el: HTMLElement, card: MerchCard | null): void => {
    if (!card) {
      el.textContent = '';
      delete el.dataset.suit;
      return;
    }
    el.dataset.suit = card.suit;
    el.replaceChildren();
    const symbol = document.createElement('span');
    symbol.className = 'merch-suit-symbol';
    symbol.setAttribute('aria-hidden', 'true');
    symbol.textContent = card.suitSymbol;
    const rank = document.createElement('span');
    rank.className = 'merch-suit-rank';
    rank.textContent = card.value;
    el.append(symbol, rank);
  };

  const currentCard = (): MerchCard | null => (state.cardId ? byId.get(state.cardId) ?? null : null);

  const productLabels: Record<Product, string> = {
    hoodie: root.querySelector('[data-product="hoodie"]')?.textContent?.trim() || 'Hoodie',
    tee: root.querySelector('[data-product="tee"]')?.textContent?.trim() || 'T-shirt',
    print: ui.format || 'Print',
    deck: ui.format || ui.product_title || 'Deck',
    album: ui.format || ui.product_title || 'Album',
  };

  const garmentPhotoSrc = (): string => {
    if (isAlbum) return garment.dataset.photoStage || garment.dataset.photoPlaceholder || '/media/album-spread.jpg';
    if (isDeck) return garment.dataset.photoPlaceholder || '/media/pack.png';
    if (isPrints) {
      const card = currentCard();
      return card?.image || garment.dataset.photoPlaceholder || '';
    }
    const byKey: Record<string, string | undefined> = {
      'hoodie-black': garment.dataset.photoHoodieBlack,
      'hoodie-inspired': garment.dataset.photoHoodieInspired,
      'tee-black': garment.dataset.photoTeeBlack,
      'tee-inspired': garment.dataset.photoTeeInspired,
    };
    return byKey[`${state.product}-${state.color}`] || '/media/merch-hoodie-black.jpg?v=2';
  };

  const syncGarment = (): void => {
    garment.dataset.product = state.product;
    if (kind === 'apparel') garment.dataset.color = state.color;
    const card = currentCard();
    garmentLabel.textContent =
      isDeck || isPrints || isAlbum
        ? ui.format || productLabels[state.product]
        : productLabels[state.product];
    const src = garmentPhotoSrc();
    if (src && garmentPhoto.getAttribute('src') !== src) {
      garmentPhoto.src = src;
    }
    if (isDeck || isAlbum) {
      garmentPhoto.alt = ui.product_title || productLabels[state.product];
    } else if (isPrints) {
      garmentPhoto.alt = card?.title || '';
    } else {
      garmentPhoto.alt = `${productLabels[state.product]} — ${state.color === 'inspired' ? 'card-inspired' : 'black'}`;
    }
  };

  const syncSelectedCard = (): void => {
    if (!hasCardPick || !selectedArt || !selectedTitle || !selectedSuit || !selectedWorld || !selectedEmpty || !selectedCard) {
      return;
    }
    const card = currentCard();
    if (!card) {
      selectedCard.hidden = true;
      selectedEmpty.hidden = false;
      paintSuit(selectedSuit, null);
      return;
    }
    selectedEmpty.hidden = true;
    selectedCard.hidden = false;
    selectedArt.src = card.image;
    selectedArt.alt = card.title;
    paintSuit(selectedSuit, card);
    selectedTitle.textContent = card.title;
    selectedWorld.textContent = card.world;
  };

  const syncAudience = (): void => {
    const gift = state.audience === 'gift';
    giftFields.hidden = !gift;
    messageLabel.textContent = gift
      ? messageLabel.dataset.required || messageLabel.textContent
      : messageLabel.dataset.optional || messageLabel.textContent;
  };

  const syncPin = (): void => {
    pinBlock.hidden = state.visibility !== 'private';
    pinValue.textContent = state.pin;
  };

  const syncCardMethod = (): void => {
    if (!browsePanel || !datePanel) return;
    const browse = cardMethod === 'browse';
    browsePanel.hidden = !browse;
    datePanel.hidden = browse;
    root.querySelectorAll<HTMLElement>('[data-card-method]').forEach((el) => {
      const active = el.dataset.cardMethod === cardMethod;
      el.classList.toggle('is-active', active);
      if (el instanceof HTMLButtonElement) el.setAttribute('aria-pressed', String(active));
    });
  };

  const syncPreview = (): void => {
    const card = currentCard();
    const created = new Date();
    created.setDate(created.getDate() - 3);
    previewCreated.textContent = `${ui.preview_created} ${created.toLocaleDateString(document.documentElement.lang || undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })}`;

    if (hasCardPick && card) {
      previewArt.src = card.image;
      previewArt.alt = card.title;
      paintSuit(previewSuit, card);
      previewTitle.textContent = card.title;
      previewWorld.textContent = card.world;
      const summary = card.summary.trim();
      const full = card.description.trim();
      const hasFull = Boolean(full && full !== summary);
      previewDesc.textContent = descExpanded && hasFull ? full : summary || full;
      previewMore.hidden = !hasFull;
      previewMore.textContent = descExpanded ? ui.read_less : ui.read_more;
      previewMore.setAttribute('aria-expanded', String(descExpanded && hasFull));
    } else if (!hasCardPick) {
      const productShot =
        garment.dataset.photoPlaceholder ||
        (isAlbum ? '/media/album-cover.jpg' : '/media/pack.png');
      previewArt.src = productShot;
      previewArt.alt = ui.product_title || '';
      paintSuit(previewSuit, null);
      previewTitle.textContent = ui.product_title || '';
      previewWorld.textContent = '';
      const summary = (ui.product_lead || '').trim();
      const full = (ui.product_desc || '').trim();
      // Deck/album: no expand toggle; deck shows full copy immediately.
      previewDesc.textContent = isDeck ? full || summary : summary || full;
      previewMore.hidden = true;
      previewMore.removeAttribute('aria-expanded');
    } else {
      paintSuit(previewSuit, null);
      previewTitle.textContent = ui.no_card;
      previewWorld.textContent = '';
      previewDesc.textContent = '';
      previewMore.hidden = true;
    }

    const people: string[] = [];
    if (state.audience === 'gift' && state.recipient.trim()) people.push(state.recipient.trim());
    if (state.sender.trim()) people.push(state.sender.trim());
    previewPeople.textContent = people.join(' · ');
    previewPeople.hidden = people.length === 0;

    const msg = state.message.trim();
    const privateMsg = state.visibility === 'private';
    if (!msg) {
      previewMessage.hidden = true;
      previewLocked.hidden = true;
    } else if (privateMsg && !state.pinUnlocked) {
      previewMessage.hidden = true;
      previewLocked.hidden = false;
    } else {
      previewLocked.hidden = true;
      previewMessage.hidden = false;
      previewMessage.textContent = msg;
    }

    paintQr(
      qrCanvas,
      [state.product, state.cardId, state.size, state.color, state.recipient, state.message, state.pin].join('|')
    );
  };

  const render = (): void => {
    root.querySelectorAll<HTMLElement>('[data-product]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.product === state.product);
      if (el instanceof HTMLButtonElement) el.setAttribute('aria-pressed', String(el.dataset.product === state.product));
    });
    root.querySelectorAll<HTMLElement>('[data-color]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.color === state.color);
      if (el instanceof HTMLButtonElement) el.setAttribute('aria-pressed', String(el.dataset.color === state.color));
    });
    root.querySelectorAll<HTMLElement>('[data-size]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.size === state.size);
      if (el instanceof HTMLButtonElement) el.setAttribute('aria-pressed', String(el.dataset.size === state.size));
    });
    root.querySelectorAll<HTMLElement>('[data-audience]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.audience === state.audience);
      if (el instanceof HTMLButtonElement) el.setAttribute('aria-pressed', String(el.dataset.audience === state.audience));
    });
    root.querySelectorAll<HTMLElement>('[data-visibility]').forEach((el) => {
      el.classList.toggle('is-active', el.dataset.visibility === state.visibility);
      if (el instanceof HTMLButtonElement)
        el.setAttribute('aria-pressed', String(el.dataset.visibility === state.visibility));
    });
    syncGarment();
    syncSelectedCard();
    syncCardMethod();
    syncAudience();
    syncPin();
    syncPreview();
  };

  const closePicker = (): void => {
    if (!picker) return;
    picker.hidden = true;
    picker.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('dialog-open');
  };

  const setCard = (id: string): void => {
    if (!hasCardPick) return;
    state.cardId = id;
    state.pinUnlocked = false;
    descExpanded = false;
    cardMethod = 'browse';
    closePicker();
    render();
  };

  const openPicker = (suit = ''): void => {
    if (!picker || !pickerGrid) return;
    picker.hidden = false;
    picker.setAttribute('aria-hidden', 'false');
    document.body.classList.add('dialog-open');
    root.querySelectorAll<HTMLButtonElement>('[data-picker-suit]').forEach((btn) => {
      btn.classList.toggle('is-active', (btn.dataset.pickerSuit || '') === suit);
    });
    const list = suit ? cards.filter((c) => c.suit === suit) : cards;
    pickerGrid.replaceChildren();
    list.forEach((card) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'merch-picker__card';
      btn.dataset.cardId = card.id;
      const img = document.createElement('img');
      img.src = card.image;
      img.alt = '';
      img.width = 280;
      img.height = 400;
      img.loading = 'lazy';
      const label = document.createElement('span');
      label.textContent = card.title;
      btn.append(img, label);
      if (card.id === state.cardId) btn.classList.add('is-selected');
      pickerGrid.append(btn);
    });
  };

  const birthCardEl = (card: MerchCard): HTMLElement => {
    const wrap = document.createElement('article');
    wrap.className = 'merch-birth__card';

    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;
    img.width = 280;
    img.height = 400;

    const body = document.createElement('div');
    const suit = document.createElement('p');
    suit.className = 'merch-suit-val';
    paintSuit(suit, card);
    const title = document.createElement('h4');
    title.textContent = card.title;
    const world = document.createElement('p');
    world.className = 'merch-world-line';
    world.textContent = card.world;
    const summary = document.createElement('p');
    summary.className = 'merch-birth__summary';
    summary.textContent = card.summary;
    const choose = document.createElement('button');
    choose.type = 'button';
    choose.className = 'btn btn-accent';
    choose.dataset.chooseCard = card.id;
    choose.textContent = opt(root, '#merch-birth-choose-label')?.textContent || 'Choose';

    body.append(suit, title, world, summary, choose);
    wrap.append(img, body);
    return wrap;
  };

  const showBirth = (): void => {
    if (!monthSelect || !daySelect || !birthResult) return;
    const month = Number(monthSelect.value);
    const day = Number(daySelect.value);
    const result = birthCard(month, day);
    birthResult.replaceChildren();
    birthResult.hidden = false;

    if (!result) return;

    if (result.kind === 'joker') {
      const note = document.createElement('p');
      note.className = 'merch-birth__note';
      note.textContent = ui.birth_joker;
      birthResult.append(note);
      ['ace-hearts', 'king-spades'].forEach((id) => {
        const card = byId.get(id);
        if (!card) return;
        birthResult.append(birthCardEl(card));
      });
      return;
    }

    const card = byId.get(result.id);
    if (card) birthResult.append(birthCardEl(card));
  };

  if (monthSelect && daySelect) {
    fillDays(daySelect, Number(monthSelect.value) || 1, Number(daySelect.value) || 1);
    monthSelect.addEventListener('change', () => {
      fillDays(daySelect, Number(monthSelect.value), Number(daySelect.value));
    });
  }

  root.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>(
      '[data-product], [data-color], [data-size], [data-audience], [data-visibility], [data-card-method], [data-action], [data-picker-suit], [data-card-id], [data-choose-card]'
    );
    if (!target) return;

    if (target.dataset.product) {
      state.product = target.dataset.product as Product;
      render();
      return;
    }
    if (target.dataset.color) {
      state.color = target.dataset.color as Color;
      render();
      return;
    }
    if (target.dataset.size) {
      state.size = target.dataset.size;
      render();
      return;
    }
    if (target.dataset.audience) {
      state.audience = target.dataset.audience as Audience;
      render();
      return;
    }
    if (target.dataset.visibility) {
      state.visibility = target.dataset.visibility as Visibility;
      state.pinUnlocked = false;
      if (state.visibility === 'private' && !state.pin) state.pin = genPin();
      render();
      return;
    }
    if (target.dataset.cardMethod) {
      cardMethod = target.dataset.cardMethod === 'date' ? 'date' : 'browse';
      syncCardMethod();
      return;
    }
    if (target.dataset.chooseCard) {
      setCard(target.dataset.chooseCard);
      return;
    }
    if (target.dataset.cardId && target.closest('#merch-picker-grid')) {
      setCard(target.dataset.cardId);
      return;
    }
    if (target.dataset.pickerSuit !== undefined) {
      openPicker(target.dataset.pickerSuit || '');
      return;
    }

    const action = target.dataset.action;
    if (action === 'scroll-config') {
      must(root, '#merch-config').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (action === 'open-picker') {
      cardMethod = 'browse';
      syncCardMethod();
      openPicker();
    } else if (action === 'close-picker') {
      closePicker();
    } else if (action === 'birth-submit') {
      showBirth();
    } else if (action === 'regen-pin') {
      state.pin = genPin();
      state.pinUnlocked = false;
      render();
    } else if (action === 'toggle-desc') {
      descExpanded = !descExpanded;
      syncPreview();
    }
  });

  messageInput.addEventListener('input', () => {
    state.message = messageInput.value;
    state.pinUnlocked = false;
    syncPreview();
  });
  recipientInput.addEventListener('input', () => {
    state.recipient = recipientInput.value;
    syncPreview();
  });
  senderInput.addEventListener('input', () => {
    state.sender = senderInput.value;
    syncPreview();
  });
  previewPinInput.addEventListener('input', () => {
    state.pinUnlocked = previewPinInput.value.trim() === state.pin;
    syncPreview();
  });

  if (picker) {
    picker.addEventListener('click', (event) => {
      if (event.target === picker) closePicker();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && picker.getAttribute('aria-hidden') !== 'true') closePicker();
    });
  }

  render();
}
