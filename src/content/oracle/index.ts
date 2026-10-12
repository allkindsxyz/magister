import be from './be.json';
import en from './en.json';
import ru from './ru.json';
import zh from './zh.json';

/** Internal balance axis for editors; never shown to the player. */
export type OracleEnergy = 'move' | 'check' | 'pause' | 'release';

export type OracleEntry = {
  id: string;
  energy: OracleEnergy;
  message: string;
};

export type OracleReading = Pick<OracleEntry, 'id' | 'message'>;

type OracleLang = 'en' | 'ru' | 'be' | 'zh';

const ENERGIES = new Set<string>(['move', 'check', 'pause', 'release']);

/** Languages without a written oracle fall back to the "soon" screen instead of a literal translation. */
const decks: Partial<Record<OracleLang, unknown>> = { en, ru, be, zh };

function readEntry(raw: unknown, lang: OracleLang, index: number): OracleEntry {
  const fail = (why: string): never => {
    throw new Error(`oracle/${lang}.json #${index}: ${why}`);
  };
  if (!raw || typeof raw !== 'object') fail('not an object');
  const entry = raw as Record<string, unknown>;
  const text = (key: string): string => {
    const value = entry[key];
    if (typeof value !== 'string' || !value.trim()) fail(`empty ${key}`);
    return (value as string).trim();
  };
  const energy = entry.energy;
  if (typeof energy !== 'string' || !ENERGIES.has(energy)) fail(`unknown energy ${String(energy)}`);
  return {
    id: text('id'),
    energy: energy as OracleEnergy,
    message: text('message'),
  };
}

/**
 * Oracle texts for the given deck, or null when the language has none yet.
 * Throws at build time on a broken file so a card can never be drawn without its answer.
 */
export function resolveOracle(lang: OracleLang, cardIds: readonly string[]): OracleReading[] | null {
  const raw = decks[lang];
  if (!raw) return null;
  if (!Array.isArray(raw)) throw new Error(`oracle/${lang}.json: expected an array`);
  const byId = new Map<string, OracleEntry>();
  raw.forEach((item, index) => {
    const entry = readEntry(item, lang, index);
    if (byId.has(entry.id)) throw new Error(`oracle/${lang}.json: duplicate ${entry.id}`);
    byId.set(entry.id, entry);
  });
  const missing = cardIds.filter((id) => !byId.has(id));
  if (missing.length) throw new Error(`oracle/${lang}.json: no reading for ${missing.join(', ')}`);
  return cardIds.map((id) => ({ id, message: (byId.get(id) as OracleEntry).message }));
}
