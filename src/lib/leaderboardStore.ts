import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { DATABASE_URL, getPool, hasDatabase } from './db';

/** File fallback when no Postgres URL. */
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

type FileDB = {
  entries: BoardEntry[];
  sessions: Session[];
};

let fileQueue: Promise<unknown> = Promise.resolve();
let schemaReady: Promise<void> | null = null;

export function leaderboardBackend(): 'postgres' | 'file' {
  return hasDatabase() ? 'postgres' : 'file';
}

async function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = (async () => {
      await getPool().query(`
        CREATE TABLE IF NOT EXISTS leaderboard_entries (
          name_key TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          ms INTEGER NOT NULL CHECK (ms > 0),
          errors INTEGER,
          at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        );
        CREATE INDEX IF NOT EXISTS leaderboard_entries_ms_idx
          ON leaderboard_entries (ms ASC, at ASC);

        CREATE TABLE IF NOT EXISTS leaderboard_sessions (
          id UUID PRIMARY KEY,
          started_at TIMESTAMPTZ NOT NULL,
          completed_at TIMESTAMPTZ,
          ms INTEGER,
          errors INTEGER,
          claimed BOOLEAN NOT NULL DEFAULT FALSE
        );
        CREATE INDEX IF NOT EXISTS leaderboard_sessions_started_idx
          ON leaderboard_sessions (started_at DESC);
      `);
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }
  await schemaReady;
}

function emptyFile(): FileDB {
  return { entries: [], sessions: [] };
}

async function loadFile(): Promise<FileDB> {
  try {
    const raw = await readFile(FILE, 'utf8');
    const data = JSON.parse(raw) as Partial<FileDB>;
    if (!data || !Array.isArray(data.entries) || !Array.isArray(data.sessions)) {
      await backupCorrupt();
      return emptyFile();
    }
    return { entries: data.entries, sessions: data.sessions };
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === 'ENOENT') return emptyFile();
    await backupCorrupt();
    return emptyFile();
  }
}

async function backupCorrupt(): Promise<void> {
  try {
    await rename(FILE, `${FILE}.corrupt-${Date.now()}`);
  } catch {
    /* nothing to move */
  }
}

async function saveFile(db: FileDB): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  const tmp = `${FILE}.${process.pid}.tmp`;
  await writeFile(tmp, JSON.stringify(db), 'utf8');
  await rename(tmp, FILE);
}

function updateFile<T>(fn: (db: FileDB) => T): Promise<T> {
  const run = fileQueue.then(async () => {
    const db = await loadFile();
    const result = fn(db);
    await saveFile(db);
    return result;
  });
  fileQueue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

function pruneFile(db: FileDB, now: number): void {
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

function placeFor(entries: BoardEntry[], ms: number): { place: number; total: number } {
  const faster = entries.filter((entry) => entry.ms < ms).length;
  return { place: faster + 1, total: entries.length + 1 };
}

function sortEntries(entries: BoardEntry[]): BoardEntry[] {
  return [...entries].sort((a, b) => a.ms - b.ms || a.at.localeCompare(b.at));
}

async function pruneSessionsPg(now: Date): Promise<void> {
  const cutoff = new Date(now.getTime() - SESSION_TTL_MS);
  await getPool().query(`DELETE FROM leaderboard_sessions WHERE started_at < $1`, [cutoff]);
}

async function listEntriesPg(): Promise<BoardEntry[]> {
  const result = await getPool().query(
    `SELECT name, ms, errors, at
     FROM leaderboard_entries
     ORDER BY ms ASC, at ASC
     LIMIT $1`,
    [MAX_ENTRIES],
  );
  return result.rows.map((row) =>
    published({
      name: String(row.name),
      ms: Number(row.ms),
      errors: row.errors == null ? null : Number(row.errors),
      at: new Date(row.at).toISOString(),
    }),
  );
}

export async function listBoard(): Promise<BoardEntry[]> {
  if (!hasDatabase()) {
    return updateFile((db) => {
      pruneFile(db, Date.now());
      db.entries.sort((a, b) => a.ms - b.ms || a.at.localeCompare(b.at));
      return db.entries.slice(0, 10).map(published);
    });
  }

  await ensureSchema();
  await pruneSessionsPg(new Date());
  const entries = await listEntriesPg();
  return entries.slice(0, 10);
}

export async function startRun(): Promise<{ id: string }> {
  if (!hasDatabase()) {
    return updateFile((db) => {
      const now = Date.now();
      pruneFile(db, now);
      const id = randomUUID();
      db.sessions.push({ id, startedAt: now });
      return { id };
    });
  }

  await ensureSchema();
  const now = new Date();
  await pruneSessionsPg(now);
  const id = randomUUID();
  await getPool().query(`INSERT INTO leaderboard_sessions (id, started_at) VALUES ($1, $2)`, [id, now]);
  return { id };
}

export type CompleteResult =
  | { ok: true; ms: number; place: number; total: number }
  | { ok: false; error: 'missing' | 'too_fast' | 'expired' };

export async function completeRun(id: unknown, errorsRaw: unknown): Promise<CompleteResult> {
  if (!hasDatabase()) {
    return updateFile((db) => {
      const now = Date.now();
      pruneFile(db, now);
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

  await ensureSchema();
  if (typeof id !== 'string') return { ok: false, error: 'missing' };
  const now = new Date();
  await pruneSessionsPg(now);

  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    const found = await client.query(
      `SELECT id, started_at, completed_at, ms, errors, claimed
       FROM leaderboard_sessions WHERE id = $1 FOR UPDATE`,
      [id],
    );
    if (!found.rowCount) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'missing' };
    }
    const session = found.rows[0];
    if (session.completed_at && session.ms != null) {
      const entries = await listEntriesPg();
      await client.query('COMMIT');
      return { ok: true, ms: Number(session.ms), ...placeFor(entries, Number(session.ms)) };
    }

    const startedAt = new Date(session.started_at).getTime();
    const ms = now.getTime() - startedAt;
    if (ms < MIN_RUN_MS) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'too_fast' };
    }
    if (now.getTime() - startedAt > SESSION_TTL_MS) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'expired' };
    }

    const errors = cleanErrors(errorsRaw);
    await client.query(
      `UPDATE leaderboard_sessions
       SET completed_at = $2, ms = $3, errors = $4
       WHERE id = $1`,
      [id, now, ms, errors],
    );
    await client.query('COMMIT');
    const entries = await listEntriesPg();
    return { ok: true, ms, ...placeFor(entries, ms) };
  } catch (error) {
    try {
      await client.query('ROLLBACK');
    } catch {
      /* ignore */
    }
    throw error;
  } finally {
    client.release();
  }
}

export type ClaimResult =
  | {
      ok: true;
      reason: 'added' | 'improved' | 'kept' | 'full';
      entries: BoardEntry[];
    }
  | { ok: false; error: 'missing' | 'name' | 'expired' | 'claimed' };

export async function claimRun(id: unknown, nameRaw: unknown): Promise<ClaimResult> {
  if (!hasDatabase()) {
    return updateFile((db) => {
      const now = Date.now();
      pruneFile(db, now);
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

  await ensureSchema();
  if (typeof id !== 'string') return { ok: false, error: 'missing' };
  const name = cleanName(nameRaw);
  if (!name) return { ok: false, error: 'name' };
  const now = new Date();
  await pruneSessionsPg(now);

  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    const found = await client.query(
      `SELECT id, started_at, completed_at, ms, errors, claimed
       FROM leaderboard_sessions WHERE id = $1 FOR UPDATE`,
      [id],
    );
    if (!found.rowCount) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'missing' };
    }
    const session = found.rows[0];
    if (session.ms == null || !session.completed_at) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'missing' };
    }
    if (session.claimed) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'claimed' };
    }
    if (now.getTime() - new Date(session.completed_at).getTime() > CLAIM_WINDOW_MS) {
      await client.query('ROLLBACK');
      return { ok: false, error: 'expired' };
    }

    const ms = Number(session.ms);
    const errors = session.errors == null ? null : Number(session.errors);
    const nameKey = name.toLocaleLowerCase();

    const existing = await client.query(
      `SELECT name_key, name, ms, errors, at FROM leaderboard_entries WHERE name_key = $1 FOR UPDATE`,
      [nameKey],
    );

    let reason: 'added' | 'improved' | 'kept' | 'full';
    if (existing.rowCount) {
      const row = existing.rows[0];
      if (ms < Number(row.ms)) {
        await client.query(
          `UPDATE leaderboard_entries
           SET name = $2, ms = $3, errors = $4, at = $5
           WHERE name_key = $1`,
          [nameKey, name, ms, errors, now],
        );
        reason = 'improved';
      } else {
        reason = 'kept';
      }
    } else {
      const countRes = await client.query(`SELECT COUNT(*)::int AS n FROM leaderboard_entries`);
      const count = Number(countRes.rows[0].n);
      const slowestRes = await client.query(
        `SELECT name_key, ms FROM leaderboard_entries ORDER BY ms DESC, at DESC LIMIT 1 FOR UPDATE`,
      );
      const slowest = slowestRes.rows[0];
      const room = count < MAX_ENTRIES;
      if (room || !slowest || ms < Number(slowest.ms)) {
        await client.query(
          `INSERT INTO leaderboard_entries (name_key, name, ms, errors, at)
           VALUES ($1, $2, $3, $4, $5)`,
          [nameKey, name, ms, errors, now],
        );
        reason = 'added';
        await client.query(
          `DELETE FROM leaderboard_entries
           WHERE name_key NOT IN (
             SELECT name_key FROM leaderboard_entries
             ORDER BY ms ASC, at ASC
             LIMIT $1
           )`,
          [MAX_ENTRIES],
        );
      } else {
        reason = 'full';
      }
    }

    await client.query(`UPDATE leaderboard_sessions SET claimed = TRUE WHERE id = $1`, [id]);
    await client.query('COMMIT');

    const entries = (await listEntriesPg()).slice(0, 10);
    return { ok: true, reason, entries };
  } catch (error) {
    try {
      await client.query('ROLLBACK');
    } catch {
      /* ignore */
    }
    throw error;
  } finally {
    client.release();
  }
}

/** Import entries from a legacy JSON file into Postgres (idempotent upsert by name_key). */
export async function importEntriesFromFile(filePath = FILE): Promise<{ imported: number; path: string }> {
  if (!DATABASE_URL) throw new Error('DATABASE_URL required for import');
  await ensureSchema();
  const raw = await readFile(filePath, 'utf8');
  const data = JSON.parse(raw) as Partial<FileDB>;
  const entries = Array.isArray(data.entries) ? data.entries : [];
  let imported = 0;
  for (const entry of sortEntries(entries)) {
    const name = cleanName(entry.name);
    if (!name || typeof entry.ms !== 'number' || !Number.isFinite(entry.ms) || entry.ms <= 0) continue;
    const nameKey = name.toLocaleLowerCase();
    const at = entry.at && !Number.isNaN(Date.parse(entry.at)) ? new Date(entry.at) : new Date();
    const errors = cleanErrors(entry.errors);
    await getPool().query(
      `INSERT INTO leaderboard_entries (name_key, name, ms, errors, at)
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (name_key) DO UPDATE SET
         name = EXCLUDED.name,
         ms = LEAST(leaderboard_entries.ms, EXCLUDED.ms),
         errors = CASE
           WHEN EXCLUDED.ms < leaderboard_entries.ms THEN EXCLUDED.errors
           ELSE leaderboard_entries.errors
         END,
         at = CASE
           WHEN EXCLUDED.ms < leaderboard_entries.ms THEN EXCLUDED.at
           ELSE leaderboard_entries.at
         END`,
      [nameKey, name, Math.round(entry.ms), errors, at],
    );
    imported += 1;
  }

  // Keep top MAX_ENTRIES only.
  await getPool().query(
    `DELETE FROM leaderboard_entries
     WHERE name_key NOT IN (
       SELECT name_key FROM leaderboard_entries
       ORDER BY ms ASC, at ASC
       LIMIT $1
     )`,
    [MAX_ENTRIES],
  );

  return { imported, path: filePath };
}
