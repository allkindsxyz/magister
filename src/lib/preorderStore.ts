import { randomBytes } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import {
  APPAREL_SIZES,
  SKUS,
  isSkuId,
  skuPrice,
  type ApparelColor,
  type SkuId,
} from './catalog';
import type { Lang } from '../i18n/utils';

/** Point at a Railway volume, e.g. PREORDERS_FILE=/data/preorders.json */
const FILE = process.env.PREORDERS_FILE
  ? path.resolve(process.env.PREORDERS_FILE)
  : path.join(process.cwd(), 'data', 'preorders.json');

const LANGS: ReadonlySet<string> = new Set(['en', 'ru', 'be', 'zh']);
const MAX_LINES = 30;
const MAX_NOTE = 400;
const MAX_NAME = 80;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type PreorderStatus = 'new' | 'contacted' | 'converted' | 'cancelled';

export type PreorderMessage = {
  recipient: string;
  sender: string;
  text: string;
  visibility: 'public' | 'private';
  /** Needed later to fulfil a private gift; stored only for staff. */
  pin: string | null;
};

export type PreorderLine = {
  sku: SkuId;
  qty: number;
  cardId: string | null;
  cardTitle: string | null;
  image: string | null;
  color: ApparelColor | null;
  size: string | null;
  message: PreorderMessage | null;
  previewId: string | null;
  lang: Lang;
  unitPrice: number;
  lineTotal: number;
};

export type Preorder = {
  id: string;
  createdAt: string;
  email: string;
  name: string | null;
  note: string | null;
  lang: Lang;
  currency: 'EUR';
  subtotal: number;
  lines: PreorderLine[];
  status: PreorderStatus;
  source: 'cart';
};

type DB = { orders: Preorder[] };

let queue: Promise<unknown> = Promise.resolve();

function empty(): DB {
  return { orders: [] };
}

async function load(): Promise<DB> {
  try {
    const raw = await readFile(FILE, 'utf8');
    const data = JSON.parse(raw) as Partial<DB>;
    if (!data || !Array.isArray(data.orders)) {
      await backupCorrupt();
      return empty();
    }
    return { orders: data.orders };
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
  await writeFile(tmp, JSON.stringify(db, null, 0), 'utf8');
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

function cleanText(raw: unknown, max: number): string {
  if (typeof raw !== 'string') return '';
  return raw
    .normalize('NFKC')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function safePath(value: unknown): string | null {
  const s = cleanText(value, 300);
  return s && s.startsWith('/') && !s.startsWith('//') ? s : null;
}

function parseMessage(raw: unknown): PreorderMessage | null {
  if (!raw || typeof raw !== 'object') return null;
  const m = raw as Record<string, unknown>;
  const text = cleanText(m.text, 400);
  const recipient = cleanText(m.recipient, 48);
  const sender = cleanText(m.sender, 48);
  if (!text && !recipient && !sender) return null;
  const pin = typeof m.pin === 'string' && /^\d{4}$/.test(m.pin) ? m.pin : null;
  const visibility: 'public' | 'private' = m.visibility === 'private' && text && pin ? 'private' : 'public';
  return { text, recipient, sender, visibility, pin: visibility === 'private' ? pin : null };
}

function parseLine(raw: unknown): PreorderLine | null {
  if (!raw || typeof raw !== 'object') return null;
  const b = raw as Record<string, unknown>;
  if (!isSkuId(b.sku)) return null;
  const sku = b.sku;
  const qty = Math.floor(Number(b.qty));
  if (!Number.isFinite(qty) || qty < 1 || qty > 10) return null;

  const message = parseMessage(b.message);
  const effectiveQty = message ? 1 : qty;
  const meta = SKUS[sku];

  let color: ApparelColor | null = null;
  if (meta.needsFit && (b.color === 'black' || b.color === 'inspired')) color = b.color;

  let size: string | null = null;
  if (meta.needsFit) {
    const rawSize = cleanText(b.size, 24);
    if ((APPAREL_SIZES as readonly string[]).includes(rawSize)) size = rawSize;
  }

  const lang: Lang =
    typeof b.lang === 'string' && LANGS.has(b.lang) ? (b.lang as Lang) : 'en';

  const unitPrice = skuPrice(sku);
  return {
    sku,
    qty: effectiveQty,
    cardId: cleanText(b.cardId, 64) || null,
    cardTitle: cleanText(b.cardTitle, 120) || null,
    image: safePath(b.image),
    color,
    size,
    message,
    previewId: typeof b.previewId === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(b.previewId) ? b.previewId : null,
    lang,
    unitPrice,
    lineTotal: unitPrice * effectiveQty,
  };
}

export type CreatePreorderInput = {
  email: string;
  name: string | null;
  note: string | null;
  lang: Lang;
  lines: PreorderLine[];
};

export function validatePreorderBody(body: unknown):
  | { ok: true; value: CreatePreorderInput }
  | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'bad_json' };
  const b = body as Record<string, unknown>;

  const email = cleanText(b.email, 254).toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) return { ok: false, error: 'email' };

  if (typeof b.lang !== 'string' || !LANGS.has(b.lang)) return { ok: false, error: 'lang' };
  const lang = b.lang as Lang;

  if (!Array.isArray(b.lines) || b.lines.length < 1 || b.lines.length > MAX_LINES) {
    return { ok: false, error: 'lines' };
  }

  const lines: PreorderLine[] = [];
  for (const item of b.lines) {
    const line = parseLine(item);
    if (!line) return { ok: false, error: 'line' };
    lines.push(line);
  }

  return {
    ok: true,
    value: {
      email,
      name: cleanText(b.name, MAX_NAME) || null,
      note: cleanText(b.note, MAX_NOTE) || null,
      lang,
      lines,
    },
  };
}

function newId(): string {
  return `po_${randomBytes(9).toString('base64url')}`;
}

export async function createPreorder(input: CreatePreorderInput): Promise<Preorder> {
  const order: Preorder = {
    id: newId(),
    createdAt: new Date().toISOString(),
    email: input.email,
    name: input.name,
    note: input.note,
    lang: input.lang,
    currency: 'EUR',
    subtotal: input.lines.reduce((sum, line) => sum + line.lineTotal, 0),
    lines: input.lines,
    status: 'new',
    source: 'cart',
  };

  await update((db) => {
    db.orders.push(order);
    return order;
  });

  return order;
}

export async function listPreorders(): Promise<Preorder[]> {
  const db = await load();
  return [...db.orders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
