import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

/** Point this at a Railway volume, e.g. LEADERBOARD_FILE=/data/leaderboard.json. The container disk is wiped on every deploy. */
const FILE = process.env.LEADERBOARD_FILE
  ? path.resolve(process.env.LEADERBOARD_FILE)
  : path.join(process.cwd(), 'data', 'leaderboard.json');
const MAX_ENTRIES = 50;
const MAX_SESSIONS = 400;
const SESSION_TTL_MS = 3 * 60 * 60 * 1000;
const CLAIM_WINDOW_MS = 30 * 60 * 1000;
/** Faster than this is not a played round of five named cards. */
const MIN_RUN_MS = 4_000;

export type BoardEntry = {
  name: string;
  ms: number;
  /** Wrong suit or rank taps in the timed spread. Null on rows saved before this field existed. */
  errors: number | null;
  at: string;
};

type Session = {
  id: string;
  startedAt: number;
  completedAt?: number;
  ms?: number;
  errors?: number | null;
  claimed?: boolean;
};

type DB = {
  entries: BoardEntry[];
  sessions: Session[];
};

let queue: Promise<unknown> = Promise.resolve();

function empty(): DB {
  return { entries: [], sessions: [] };
}

async function load(): Promise<DB> {
  try {
    const raw = await readFile(FILE, 'utf8');
    const data = JSON.parse(raw) as Partial<DB>;
    if (!data || !Array.isArray(data.entries) || !Array.isArray(data.sessions)) {
      await backupCorrupt();
      return empty();
    }
    return { entries: data.entries, sessions: data.sessions };
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

function prune(db: DB, now: number): void {
  db.sessions = db.sessions
    .filter((session) => now - session.startedAt < SESSION_TTL_MS)
    .slice(-MAX_SESSIONS);
}

export function cleanErrors(raw: unknown): number | null {
  if (typeof raw !== 'number' || !Number.isInteger(raw)) return null;
  if (raw < 0 || raw > 999) return null;
  return raw;
}

function published(entry: BoardEntry): BoardEntry {
  return {
    name: entry.name,
    ms: entry.ms,
    at: entry.at,
    errors: cleanErrors(entry.errors),
  };
}

export function cleanName(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  const name = raw
    .normalize('NFKC')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (name.length < 1 || name.length > 24) return null;
  if (/[<>]/.test(name)) return null;
  if (!/[\p{L}\p{N}]/u.test(name)) return null;
  return name;
}

export function listBoard(): Promise<BoardEntry[]> {
  return update((db) => {
    prune(db, Date.now());
    db.entries.sort((a, b) => a.ms - b.ms || a.at.localeCompare(b.at));
    return db.entries.slice(0, 10).map(published);
  });
}

export function startRun(): Promise<{ id: string }> {
  return update((db) => {
    const now = Date.now();
    prune(db, now);
    const id = randomUUID();
    db.sessions.push({ id, startedAt: now });
    return { id };
  });
}

export type CompleteResult =
  | { ok: true; ms: number; place: number; total: number }
  | { ok: false; error: 'missing' | 'too_fast' | 'expired' };

function placeFor(entries: BoardEntry[], ms: number): { place: number; total: number } {
  const faster = entries.filter((entry) => entry.ms < ms).length;
  return { place: faster + 1, total: entries.length + 1 };
}

export function completeRun(id: unknown, errorsRaw: unknown): Promise<CompleteResult> {
  return update((db) => {
    const now = Date.now();
    prune(db, now);
    if (typeof id !== 'string') return { ok: false, error: 'missing' };
    const session = db.sessions.find((item) => item.id === id);
    if (!session) return { ok: false, error: 'missing' };
    if (session.completedAt && session.ms) return { ok: true, ms: session.ms, ...placeFor(db.entries, session.ms) };
    const ms = now - session.startedAt;
    if (ms < MIN_RUN_MS) return { ok: false, error: 'too_fast' };
    if (now - session.startedAt > SESSION_TTL_MS) return { ok: false, error: 'expired' };
    session.completedAt = now;
    session.ms = ms;
    session.errors = cleanErrors(errorsRaw);
    return { ok: true, ms, ...placeFor(db.entries, ms) };
  });
}

export type ClaimResult =
  | {
      ok: true;
      reason: 'added' | 'improved' | 'kept' | 'full';
      entries: BoardEntry[];
    }
  | { ok: false; error: 'missing' | 'name' | 'expired' | 'claimed' };

export function claimRun(id: unknown, nameRaw: unknown): Promise<ClaimResult> {
  return update((db) => {
    const now = Date.now();
    prune(db, now);
    if (typeof id !== 'string') return { ok: false, error: 'missing' };
    const session = db.sessions.find((item) => item.id === id);
    if (!session?.ms || !session.completedAt) return { ok: false, error: 'missing' };
    if (session.claimed) return { ok: false, error: 'claimed' };
    if (now - session.completedAt > CLAIM_WINDOW_MS) return { ok: false, error: 'expired' };
    const name = cleanName(nameRaw);
    if (!name) return { ok: false, error: 'name' };

    db.entries.sort((a, b) => a.ms - b.ms || a.at.localeCompare(b.at));
    const key = name.toLocaleLowerCase();
    const existing = db.entries.find((entry) => entry.name.toLocaleLowerCase() === key);
    let reason: 'added' | 'improved' | 'kept' | 'full';
    if (existing) {
      if (session.ms < existing.ms) {
        existing.ms = session.ms;
        existing.errors = session.errors ?? null;
        existing.at = new Date(now).toISOString();
        existing.name = name;
        reason = 'improved';
      } else {
        reason = 'kept';
      }
    } else {
      const slowest = db.entries[db.entries.length - 1];
      const room = db.entries.length < MAX_ENTRIES;
      if (room || !slowest || session.ms < slowest.ms) {
        db.entries.push({
          name,
          ms: session.ms,
          errors: session.errors ?? null,
          at: new Date(now).toISOString(),
        });
        reason = 'added';
      } else {
        reason = 'full';
      }
    }
    db.entries.sort((a, b) => a.ms - b.ms || a.at.localeCompare(b.at));
    if (db.entries.length > MAX_ENTRIES) db.entries.length = MAX_ENTRIES;
    session.claimed = true;
    return {
      ok: true,
      reason,
      entries: db.entries.slice(0, 10).map(published),
    };
  });
}
