import { createHash, randomBytes, timingSafeEqual } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import type { Lang } from '../i18n/utils';

/** Point at a Railway volume, e.g. PIECES_FILE=/data/pieces.json */
const FILE = process.env.PIECES_FILE
  ? path.resolve(process.env.PIECES_FILE)
  : path.join(process.cwd(), 'data', 'pieces.json');

export type PieceProduct = 'hoodie' | 'tee' | 'print' | 'deck' | 'album';
export type PieceAudience = 'self' | 'gift';
export type PieceVisibility = 'public' | 'private';
export type PieceColor = 'inspired' | 'black';

export type Piece = {
  id: string;
  createdAt: string;
  lang: Lang;
  product: PieceProduct;
  cardId: string | null;
  cardTitle: string | null;
  cardSummary: string | null;
  cardDescription: string | null;
  cardImage: string | null;
  cardWorld: string | null;
  cardSuit: string | null;
  cardValue: string | null;
  cardSuitSymbol: string | null;
  size: string;
  color: PieceColor | null;
  audience: PieceAudience;
  recipient: string;
  sender: string;
  message: string;
  visibility: PieceVisibility;
  pinHash: string | null;
  /** Set when recipient claims a new PIN (printed PIN from pack no longer works). */
  pinClaimedAt: string | null;
  status: 'ordered';
};

/** Safe payload for story page / clients (never includes pinHash). */
export type PublicPiece = Omit<Piece, 'pinHash' | 'message'> & {
  message: string | null;
  hasMessage: boolean;
  messageLocked: boolean;
  /** True until recipient replaces the printed PIN with their own. */
  canClaimPin: boolean;
};

export type CreatePieceInput = {
  lang: Lang;
  product: PieceProduct;
  cardId: string | null;
  cardTitle: string | null;
  cardSummary: string | null;
  cardDescription: string | null;
  cardImage: string | null;
  cardWorld: string | null;
  cardSuit: string | null;
  cardValue: string | null;
  cardSuitSymbol: string | null;
  size: string;
  color: PieceColor | null;
  audience: PieceAudience;
  recipient: string;
  sender: string;
  message: string;
  visibility: PieceVisibility;
  pin: string | null;
};

type DB = { pieces: Piece[] };

let queue: Promise<unknown> = Promise.resolve();

function empty(): DB {
  return { pieces: [] };
}

async function load(): Promise<DB> {
  try {
    const raw = await readFile(FILE, 'utf8');
    const data = JSON.parse(raw) as Partial<DB>;
    if (!data || !Array.isArray(data.pieces)) {
      await backupCorrupt();
      return empty();
    }
    return { pieces: data.pieces };
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return empty();
    await backupCorrupt();
    return empty();
  }
}

async function backupCorrupt(): Promise<void> {
  try {
    await rename(FILE, `${FILE}.corrupt-${Date.now()}`);
  } catch {
    /* nothing to move */
  }
}

async function save(db: DB): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(db), 'utf8');
  await rename(tmp, FILE);
}

function update<T>(fn: (db: DB) => T): Promise<T> {
  const run = queue.then(async () => {
    const db = await load();
    const result = fn(db);
    await save(db);
    return result;
  });
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

function newId(): string {
  return randomBytes(9).toString('base64url');
}

export function hashPin(pin: string, id: string): string {
  return createHash('sha256').update(`magister-piece:${id}:${pin}`).digest('hex');
}

export function verifyPin(pin: string, id: string, pinHash: string | null): boolean {
  if (!pinHash || !/^\d{4}$/.test(pin)) return false;
  const next = Buffer.from(hashPin(pin, id));
  const prev = Buffer.from(pinHash);
  if (next.length !== prev.length) return false;
  return timingSafeEqual(next, prev);
}

function cleanText(raw: unknown, max: number): string {
  if (typeof raw !== 'string') return '';
  return raw
    .normalize('NFKC')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

const PRODUCTS: ReadonlySet<string> = new Set(['hoodie', 'tee', 'print', 'deck', 'album']);
const LANGS: ReadonlySet<string> = new Set(['en', 'ru', 'be', 'zh']);

export function validateCreateInput(body: unknown):
  | { ok: true; value: CreatePieceInput }
  | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'bad_json' };
  const b = body as Record<string, unknown>;

  if (typeof b.lang !== 'string' || !LANGS.has(b.lang)) return { ok: false, error: 'lang' };
  if (typeof b.product !== 'string' || !PRODUCTS.has(b.product)) return { ok: false, error: 'product' };

  const needsCard = b.product === 'hoodie' || b.product === 'tee' || b.product === 'print';
  const cardId = typeof b.cardId === 'string' && b.cardId.trim() ? b.cardId.trim().slice(0, 64) : null;
  if (needsCard && !cardId) return { ok: false, error: 'card' };

  const audience: PieceAudience = b.audience === 'gift' ? 'gift' : 'self';
  const visibility: PieceVisibility = b.visibility === 'private' ? 'private' : 'public';
  const recipient = cleanText(b.recipient, 48);
  const sender = cleanText(b.sender, 48);
  const message = cleanText(b.message, 400);

  if (audience === 'gift') {
    if (!recipient) return { ok: false, error: 'recipient' };
    if (!message) return { ok: false, error: 'message' };
  }

  let pin: string | null = null;
  if (visibility === 'private') {
    if (typeof b.pin !== 'string' || !/^\d{4}$/.test(b.pin)) return { ok: false, error: 'pin' };
    pin = b.pin;
    if (!message) return { ok: false, error: 'message' };
  }

  const color: PieceColor | null =
    b.product === 'hoodie' || b.product === 'tee'
      ? b.color === 'inspired'
        ? 'inspired'
        : 'black'
      : null;

  const size = cleanText(b.size, 24) || 'M';

  const optStr = (v: unknown, max: number): string | null => {
    const s = cleanText(v, max);
    return s || null;
  };

  return {
    ok: true,
    value: {
      lang: b.lang as Lang,
      product: b.product as PieceProduct,
      cardId,
      cardTitle: optStr(b.cardTitle, 120),
      cardSummary: optStr(b.cardSummary, 600),
      cardDescription: optStr(b.cardDescription, 4000),
      cardImage: optStr(b.cardImage, 300),
      cardWorld: optStr(b.cardWorld, 80),
      cardSuit: optStr(b.cardSuit, 16),
      cardValue: optStr(b.cardValue, 8),
      cardSuitSymbol: optStr(b.cardSuitSymbol, 4),
      size,
      color,
      audience,
      recipient,
      sender,
      message,
      visibility,
      pin,
    },
  };
}

function isPinClaimed(piece: Piece): boolean {
  return Boolean(piece.pinClaimedAt);
}

export function toPublicPiece(piece: Piece, unlocked = false): PublicPiece {
  const hasMessage = Boolean(piece.message.trim());
  const locked = piece.visibility === 'private' && hasMessage && !unlocked;
  const canClaimPin =
    piece.visibility === 'private' && Boolean(piece.pinHash) && !isPinClaimed(piece);
  return {
    id: piece.id,
    createdAt: piece.createdAt,
    lang: piece.lang,
    product: piece.product,
    cardId: piece.cardId,
    cardTitle: piece.cardTitle,
    cardSummary: piece.cardSummary,
    cardDescription: piece.cardDescription,
    cardImage: piece.cardImage,
    cardWorld: piece.cardWorld,
    cardSuit: piece.cardSuit,
    cardValue: piece.cardValue,
    cardSuitSymbol: piece.cardSuitSymbol,
    size: piece.size,
    color: piece.color,
    audience: piece.audience,
    recipient: piece.recipient,
    sender: piece.sender,
    visibility: piece.visibility,
    pinClaimedAt: piece.pinClaimedAt ?? null,
    status: piece.status,
    hasMessage,
    messageLocked: locked,
    message: locked ? null : piece.message || null,
    canClaimPin,
  };
}

/** `preferredId` is honored only if unused; the check runs inside the write queue to stay race-free. */
export function createPiece(input: CreatePieceInput, preferredId?: string): Promise<Piece> {
  return update((db) => {
    const id = preferredId && !db.pieces.some((p) => p.id === preferredId) ? preferredId : newId();
    const piece: Piece = {
      id,
      createdAt: new Date().toISOString(),
      lang: input.lang,
      product: input.product,
      cardId: input.cardId,
      cardTitle: input.cardTitle,
      cardSummary: input.cardSummary,
      cardDescription: input.cardDescription,
      cardImage: input.cardImage,
      cardWorld: input.cardWorld,
      cardSuit: input.cardSuit,
      cardValue: input.cardValue,
      cardSuitSymbol: input.cardSuitSymbol,
      size: input.size,
      color: input.color,
      audience: input.audience,
      recipient: input.recipient,
      sender: input.sender,
      message: input.message,
      visibility: input.visibility,
      pinHash: input.pin ? hashPin(input.pin, id) : null,
      pinClaimedAt: null,
      status: 'ordered',
    };
    db.pieces.push(piece);
    return piece;
  });
}

export async function getPiece(id: string): Promise<Piece | null> {
  const db = await load();
  return db.pieces.find((p) => p.id === id) ?? null;
}

export type ChangePinResult =
  | { ok: true; piece: Piece }
  | { ok: false; error: 'missing' | 'pin' | 'same' | 'claimed' | 'no_pin' };

/** Replace printed PIN with recipient's own. Requires current PIN. One-shot claim. */
export function changePiecePin(
  id: string,
  currentPin: string,
  newPin: string,
): Promise<ChangePinResult> {
  return update((db) => {
    const piece = db.pieces.find((p) => p.id === id);
    if (!piece) return { ok: false as const, error: 'missing' as const };
    if (!piece.pinHash || piece.visibility !== 'private') {
      return { ok: false as const, error: 'no_pin' as const };
    }
    if (isPinClaimed(piece)) return { ok: false as const, error: 'claimed' as const };
    if (!verifyPin(currentPin, piece.id, piece.pinHash)) {
      return { ok: false as const, error: 'pin' as const };
    }
    if (!/^\d{4}$/.test(newPin)) return { ok: false as const, error: 'pin' as const };
    if (currentPin === newPin) return { ok: false as const, error: 'same' as const };

    piece.pinHash = hashPin(newPin, piece.id);
    piece.pinClaimedAt = new Date().toISOString();
    return { ok: true as const, piece };
  });
}
