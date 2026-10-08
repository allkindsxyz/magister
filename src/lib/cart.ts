import {
  APPAREL_COLORS,
  APPAREL_SIZES,
  SKUS,
  isSkuId,
  skuPieceProduct,
  skuPrice,
  type ApparelColor,
  type SkuId,
} from './catalog';
import { isPreviewId } from './previewId';
import type { Lang } from '../i18n/utils';

export type CartVisibility = 'public' | 'private';

export type CartMessage = {
  recipient: string;
  sender: string;
  text: string;
  visibility: CartVisibility;
  /** Present only for private messages. */
  pin: string | null;
};

export type CartLine = {
  id: string;
  sku: SkuId;
  qty: number;
  cardId: string | null;
  cardTitle: string | null;
  image: string | null;
  color: ApparelColor | null;
  size: string | null;
  message: CartMessage | null;
  /** Language of the message page; the card story is shown in it. */
  lang: Lang;
  /** Preview the buyer saw via QR; checkout promotes it so that link stays valid. Message lines only. */
  previewId: string | null;
  addedAt: number;
};

export type CartLineInput = Omit<CartLine, 'id' | 'qty' | 'addedAt'> & { qty?: number };

const STORAGE_KEY = 'magister.cart.v1';
const CHANGE_EVENT = 'magister:cart-change';
export const OPEN_EVENT = 'magister:cart-open';

export const MAX_QTY = 10;
const MAX_LINES = 30;
const LIMITS = { name: 48, text: 400, title: 120, id: 64 } as const;

let memory: CartLine[] = [];
/** Set once localStorage refuses a write (quota, privacy mode); the cart then lives in memory. */
let memoryOnly = false;

function storage(): Storage | null {
  if (memoryOnly) return null;
  try {
    const store = window.localStorage;
    const probe = '__magister_probe__';
    store.setItem(probe, '1');
    store.removeItem(probe);
    return store;
  } catch {
    return null;
  }
}

function str(value: unknown, max: number): string {
  return typeof value === 'string' ? value.slice(0, max) : '';
}

function nullableStr(value: unknown, max: number): string | null {
  const s = str(value, max).trim();
  return s ? s : null;
}

/** Only same-origin paths are allowed into <img src>. */
function safePath(value: unknown): string | null {
  const s = nullableStr(value, 300);
  return s && s.startsWith('/') && !s.startsWith('//') ? s : null;
}

function clampQty(value: unknown): number {
  const n = Math.floor(Number(value));
  if (!Number.isFinite(n) || n < 1) return 1;
  return Math.min(n, MAX_QTY);
}

function parseMessage(raw: unknown): CartMessage | null {
  if (!raw || typeof raw !== 'object') return null;
  const m = raw as Record<string, unknown>;
  const text = str(m.text, LIMITS.text).trim();
  const recipient = str(m.recipient, LIMITS.name).trim();
  const sender = str(m.sender, LIMITS.name).trim();
  if (!text && !recipient && !sender) return null;
  const pin = typeof m.pin === 'string' && /^\d{4}$/.test(m.pin) ? m.pin : null;
  const visibility: CartVisibility = m.visibility === 'private' && text && pin ? 'private' : 'public';
  return { text, recipient, sender, visibility, pin: visibility === 'private' ? pin : null };
}

function parseLine(raw: unknown): CartLine | null {
  if (!raw || typeof raw !== 'object') return null;
  const l = raw as Record<string, unknown>;
  if (!isSkuId(l.sku)) return null;
  const sku = SKUS[l.sku];
  const id = nullableStr(l.id, LIMITS.id);
  if (!id) return null;

  const cardId = nullableStr(l.cardId, LIMITS.id);
  if (sku.needsCard && !cardId) return null;

  const size = sku.needsFit && (APPAREL_SIZES as readonly string[]).includes(String(l.size)) ? String(l.size) : null;
  const color =
    sku.needsFit && (APPAREL_COLORS as readonly string[]).includes(String(l.color)) ? (l.color as ApparelColor) : null;
  if (sku.needsFit && (!size || !color)) return null;

  const message = parseMessage(l.message);
  const lang: Lang = l.lang === 'ru' || l.lang === 'be' || l.lang === 'zh' ? l.lang : 'en';
  return {
    id,
    sku: l.sku,
    // Every personalized copy carries its own QR page, so it is always a single item.
    qty: message ? 1 : clampQty(l.qty),
    cardId: sku.needsCard ? cardId : null,
    cardTitle: sku.needsCard ? nullableStr(l.cardTitle, LIMITS.title) : null,
    image: safePath(l.image),
    color,
    size,
    message,
    lang,
    previewId: message && isPreviewId(l.previewId) ? l.previewId : null,
    addedAt: Number.isFinite(Number(l.addedAt)) ? Number(l.addedAt) : Date.now(),
  };
}

type PieceSource = Pick<CartLine, 'sku' | 'cardId' | 'color' | 'size' | 'message' | 'lang'>;

/**
 * Request body for the piece behind a line. The product page preview and checkout both use it,
 * so the server can confirm the ordered content is exactly what the buyer previewed.
 */
export function pieceBody(source: PieceSource): Record<string, unknown> {
  const def = SKUS[source.sku];
  const m = source.message;
  return {
    lang: source.lang,
    product: skuPieceProduct(source.sku),
    cardId: def.needsCard ? source.cardId : null,
    color: def.needsFit ? source.color : null,
    size: def.needsFit ? source.size : null,
    recipient: m?.recipient ?? '',
    sender: m?.sender ?? '',
    message: m?.text ?? '',
    visibility: m?.visibility ?? 'public',
    pin: m?.visibility === 'private' ? m.pin : null,
  };
}

export function readCart(): CartLine[] {
  const store = storage();
  if (!store) return memory.slice();
  try {
    const raw = JSON.parse(store.getItem(STORAGE_KEY) || '[]');
    if (!Array.isArray(raw)) return [];
    const seen = new Set<string>();
    const lines: CartLine[] = [];
    for (const item of raw) {
      const line = parseLine(item);
      if (!line || seen.has(line.id)) continue;
      seen.add(line.id);
      lines.push(line);
      if (lines.length >= MAX_LINES) break;
    }
    return lines;
  } catch {
    return [];
  }
}

function writeCart(lines: CartLine[]): void {
  const next = lines.slice(0, MAX_LINES);
  const store = storage();
  if (store) {
    try {
      store.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      memoryOnly = true;
      memory = next;
    }
  } else {
    memory = next;
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT));
}

function newId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

function sameOptions(a: CartLine, b: CartLine): boolean {
  return a.sku === b.sku && a.cardId === b.cardId && a.color === b.color && a.size === b.size;
}

export type AddResult = { ok: true; line: CartLine } | { ok: false; reason: 'invalid' | 'full' };

/** Adds a line; identical non-personalized items are merged into one line. */
export function addToCart(input: CartLineInput): AddResult {
  const candidate = parseLine({ ...input, id: newId(), addedAt: Date.now() });
  if (!candidate) return { ok: false, reason: 'invalid' };
  const lines = readCart();

  if (!candidate.message) {
    const existing = lines.find((line) => !line.message && sameOptions(line, candidate));
    if (existing) {
      existing.qty = Math.min(MAX_QTY, existing.qty + candidate.qty);
      writeCart(lines);
      return { ok: true, line: existing };
    }
  }

  if (lines.length >= MAX_LINES) return { ok: false, reason: 'full' };
  lines.push(candidate);
  writeCart(lines);
  return { ok: true, line: candidate };
}

export function setLineQty(id: string, qty: number): void {
  const lines = readCart();
  const line = lines.find((l) => l.id === id);
  if (!line || line.message) return;
  if (qty < 1) {
    writeCart(lines.filter((l) => l.id !== id));
    return;
  }
  line.qty = clampQty(qty);
  writeCart(lines);
}

export function removeLine(id: string): void {
  writeCart(readCart().filter((l) => l.id !== id));
}

export function cartCount(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}

export function lineTotal(line: CartLine): number {
  return skuPrice(line.sku) * line.qty;
}

export function cartSubtotal(lines: CartLine[]): number {
  return lines.reduce((sum, line) => sum + lineTotal(line), 0);
}

/** Fires on changes from this tab and from other tabs. Returns an unsubscribe function. */
export function onCartChange(listener: (lines: CartLine[]) => void): () => void {
  const local = (): void => listener(readCart());
  const remote = (event: StorageEvent): void => {
    if (event.key === null || event.key === STORAGE_KEY) listener(readCart());
  };
  window.addEventListener(CHANGE_EVENT, local);
  window.addEventListener('storage', remote);
  return () => {
    window.removeEventListener(CHANGE_EVENT, local);
    window.removeEventListener('storage', remote);
  };
}

export function openCart(): void {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export function genPin(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    return String(1000 + (buf[0] % 9000));
  }
  return String(Math.floor(1000 + Math.random() * 9000));
}
