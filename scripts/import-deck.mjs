/**
 * Import 52-card deck from import/doc-snapshot.txt + import/cardsimages.zip
 * → public/cards/{id}.webp + src/content/cards/{id}.json
 */
import sharp from 'sharp';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import {
  mkdir,
  readdir,
  readFile,
  rm,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const importDir = path.join(root, 'import');
const docPath = path.join(importDir, 'doc-snapshot.txt');
const zipPath = path.join(importDir, 'cardsimages.zip');
const rawDir = path.join(importDir, 'raw-cards');
const cardsJsonDir = path.join(root, 'src/content/cards');
const cardsPublicDir = path.join(root, 'public/cards');
const reportDir = path.join(importDir, 'reports');

const FEATURED_IDS = new Set([
  'ten-hearts',
  'jack-hearts',
  'queen-hearts',
  'jack-spades',
  'queen-clubs',
  'king-spades',
]);

const WORLD_CATEGORY = {
  hearts: { en: 'Olympian gods', ru: 'Олимпийские боги' },
  diamonds: { en: 'Bearers of secrets', ru: 'Носители тайн' },
  clubs: { en: 'Templars', ru: 'Тамплиеры' },
  spades: { en: 'Celebrities', ru: 'Знаменитости' },
};

const RU_RANK = {
  туз: 'A',
  король: 'K',
  дама: 'Q',
  валет: 'J',
};

const RU_SUIT = [
  ['черв', 'hearts'],
  ['буб', 'diamonds'],
  ['крест', 'clubs'],
  ['пик', 'spades'],
];

const EN_SUIT = {
  hearts: 'hearts',
  diamonds: 'diamonds',
  clubs: 'clubs',
  spades: 'spades',
};

function rankToIdValue(rank) {
  if (rank === 'A') return { idPart: 'ace', value: 'A' };
  if (rank === 'K') return { idPart: 'king', value: 'K' };
  if (rank === 'Q') return { idPart: 'queen', value: 'Q' };
  if (rank === 'J') return { idPart: 'jack', value: 'J' };
  return { idPart: String(rank), value: String(rank) };
}

function cardKey(suit, rank) {
  return `${rank}-${suit}`;
}

function parseRuHeader(line) {
  const t = line.trim();
  if (t.length > 72) return null;
  const m = t.match(
    /^(\d+|10|туз|король|дама|валет)\s+(черв(?:ей|и|ы|а)?|буб(?:ей|ей|ён|ы|а|и|ен)?|крест(?:ей|и|ы|а)?|пик(?:ей|и|ы|а)?)(?:\s|$|:|—|–|-)(.*)$/iu,
  );
  if (!m) return null;
  let rankRaw = m[1].toLowerCase();
  const suitRaw = m[2].toLowerCase();
  let rank = RU_RANK[rankRaw] ?? rankRaw.toUpperCase();
  if (/^\d+$/.test(rankRaw)) rank = rankRaw;
  let suit = null;
  for (const [prefix, id] of RU_SUIT) {
    if (suitRaw.startsWith(prefix)) {
      suit = id;
      break;
    }
  }
  if (!suit) return null;
  let titleTail = (m[3] ?? '').trim();
  titleTail = titleTail.replace(/^[\s:—–\-]+/, '').trim();
  titleTail = titleTail.replace(/^«|»$/g, '').trim();
  return { suit, rank, titleFromHeader: titleTail || null };
}

function isRuCardHeader(line) {
  return parseRuHeader(line) !== null;
}

function isBelarusianBlockLine(line) {
  const t = line.trim();
  if (/^(кароткае|падрабязнае)\s/i.test(t)) return true;
  if (/^\d+\s+чырва/i.test(t)) return true;
  if (/^(туз|король|дама|валет)\s+чырва/i.test(t)) return true;
  if (/^\d+\s+буб/i.test(t)) return true;
  if (/^\d+\s+крэст/i.test(t)) return true;
  if (/^\d+\s+пік/i.test(t)) return true;
  if (/^(\d+|10|туз|король|дама|валет)\s+(чырва|буб|крэст|пік)/iu.test(t) && t.length < 72) return true;
  return false;
}

function parseEnHeader(line) {
  const t = line.trim();
  const m = t.match(/^(\d+|10|jack|queen|king|ace)\s+of\s+(hearts|diamonds|clubs|spades)\s*[—:\-]\s*(.+)$/iu);
  if (!m) return null;
  const rankWord = m[1].toLowerCase();
  const suit = EN_SUIT[m[2].toLowerCase()];
  let rank;
  if (rankWord === 'ace') rank = 'A';
  else if (rankWord === 'king') rank = 'K';
  else if (rankWord === 'queen') rank = 'Q';
  else if (rankWord === 'jack') rank = 'J';
  else rank = rankWord;
  let title = m[3].trim().replace(/^["'«]|["'»]$/g, '');
  return { suit, rank, title };
}

function isEnCardHeader(line) {
  return parseEnHeader(line) !== null;
}

function extractTitleFromLine(line, header) {
  const t = line.trim();
  const rankWord = header.rank === 'A' ? 'туз' : header.rank === 'K' ? 'король' : header.rank === 'Q' ? 'дама' : header.rank === 'J' ? 'валет' : header.rank;
  const suitPatterns = {
    hearts: 'черв',
    diamonds: 'буб',
    clubs: 'крест',
    spades: 'пик',
  };
  const sp = suitPatterns[header.suit];
  const re = new RegExp(`^(${rankWord}|${header.rank}|\\d+|10)\\s+${sp}[^:—–\\-]*[:—–\\-]\\s*["'«]?(.+?)["'»]?\\s*$`, 'iu');
  const m = t.match(re);
  if (m) return m[2].trim();
  return null;
}

function collectUntil(lines, start, stopFns) {
  const parts = [];
  for (let i = start; i < lines.length; i++) {
    const raw = lines[i];
    const t = raw.trim();
    if (!t) {
      if (parts.length) parts.push('');
      continue;
    }
    if (stopFns.some((fn) => fn(t, raw))) break;
    parts.push(t);
  }
  return parts.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function parseRuCards(text) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l) => /^ЧИРВЫ\s*$/i.test(l.trim()));
  const scanFrom = start >= 0 ? start : 0;
  const headers = [];
  for (let i = scanFrom; i < lines.length; i++) {
    const h = parseRuHeader(lines[i]);
    if (!h) continue;
    const prev = i > 0 ? parseRuHeader(lines[i - 1]) : null;
    if (prev && prev.rank === h.rank && prev.suit === h.suit && h.titleFromHeader) continue;
    headers.push({ index: i, ...h });
  }

  const cards = new Map();
  for (let h = 0; h < headers.length; h++) {
    const cur = headers[h];
    const nextIndex = headers[h + 1]?.index ?? lines.length;
    const block = lines.slice(cur.index, nextIndex);

    let title = cur.titleFromHeader;
    if (!title && block[1]) {
      title = extractTitleFromLine(block[1], cur) ?? block[1].trim();
    }
    title = (title ?? '').replace(/^["'«]|["'»]$/g, '').trim();

    const stopDetailed = (t) =>
      isBelarusianBlockLine(t) ||
      isEnCardHeader(t) ||
      isRuCardHeader(t) ||
      /^Краткое описание$/i.test(t);

    let summary = '';
    let description = '';
    const shortIdx = block.findIndex((l) => /^Краткое описание$/i.test(l.trim()));
    const longIdx = block.findIndex((l) => /^Подробное описание$/i.test(l.trim()));

    if (shortIdx >= 0) {
      const stopShort = (t) => /^Подробное описание$/i.test(t) || isBelarusianBlockLine(t) || isEnCardHeader(t);
      summary = collectUntil(block, shortIdx + 1, [stopShort]);
    }
    if (longIdx >= 0) {
      description = collectUntil(block, longIdx + 1, [stopDetailed]);
    }
    if (!description && summary) description = summary;

    const key = cardKey(cur.suit, cur.rank);
    cards.set(key, {
      suit: cur.suit,
      rank: cur.rank,
      titleRu: title,
      summaryRu: summary,
      descriptionRu: description,
    });
  }
  return cards;
}

function parseEnCards(text) {
  const lines = text.split(/\r?\n/);
  const cards = new Map();
  for (let i = 0; i < lines.length; i++) {
    const h = parseEnHeader(lines[i]);
    if (!h) continue;
    const block = [];
    for (let j = i + 1; j < lines.length; j++) {
      const t = lines[j].trim();
      if (isEnCardHeader(t) || isRuCardHeader(t) || /^ЧИРВЫ|КРЕСТИ|БУБЫ|ПИКИ$/i.test(t)) break;
      if (isBelarusianBlockLine(t)) continue;
      block.push(lines[j]);
    }

    let summary = '';
    let description = '';
    const shortIdx = block.findIndex((l) => /^Short [Dd]escription$/i.test(l.trim()));
    const longIdx = block.findIndex((l) => /^Detailed [Dd]escription$/i.test(l.trim()));
    if (shortIdx >= 0) {
      summary = collectUntil(block, shortIdx + 1, [(t) => /^Detailed Description$/i.test(t)]);
    }
    if (longIdx >= 0) {
      description = collectUntil(block, longIdx + 1, [(t) => isEnCardHeader(t) || isRuCardHeader(t)]);
    }
    if (!summary && longIdx > 0 && shortIdx < 0) {
      summary = collectUntil(block, 0, [(t) => /^Detailed Description$/i.test(t) || /^Short Description$/i.test(t)]);
    }

    const key = cardKey(h.suit, h.rank);
    cards.set(key, {
      titleEn: h.title || cards.get(key)?.titleEn,
      summaryEn: summary,
      descriptionEn: description,
    });
  }
  return cards;
}

function parseImageBasename(name) {
  const base = path.basename(name, path.extname(name)).trim();
  const m = base.match(/^(\d+|10|jack|queen|king|ace)\s+of\s+(hearts|diamonds|clubs|spades)$/iu);
  if (!m) return null;
  const rankWord = m[1].toLowerCase();
  const suit = EN_SUIT[m[2].toLowerCase()];
  let rank;
  if (rankWord === 'ace') rank = 'A';
  else if (rankWord === 'king') rank = 'K';
  else if (rankWord === 'queen') rank = 'Q';
  else if (rankWord === 'jack') rank = 'J';
  else rank = rankWord;
  return { suit, rank, key: cardKey(suit, rank) };
}

async function ensureRawImages() {
  if (!existsSync(zipPath)) throw new Error(`Missing ${zipPath}`);
  await mkdir(rawDir, { recursive: true });
  execSync(`unzip -j -o ${JSON.stringify(zipPath)} -d ${JSON.stringify(rawDir)}`, {
    stdio: 'pipe',
  });
  const files = await readdir(rawDir);
  let kept = 0;
  for (const f of files) {
    if (/epson/i.test(f) || !parseImageBasename(f)) {
      await rm(path.join(rawDir, f), { force: true });
      continue;
    }
    kept++;
  }
  return kept;
}

async function buildImageMap() {
  const files = await readdir(rawDir);
  const map = new Map();
  for (const f of files) {
    const parsed = parseImageBasename(f);
    if (!parsed) continue;
    map.set(parsed.key, path.join(rawDir, f));
  }
  return map;
}

async function writeWebp(srcPath, destPath) {
  await mkdir(path.dirname(destPath), { recursive: true });
  await sharp(srcPath)
    .rotate()
    .resize({ width: 920, height: 1320, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toFile(destPath);
}

async function main() {
  const doc = await readFile(docPath, 'utf8');
  const ruCards = parseRuCards(doc);
  const enCards = parseEnCards(doc);
  const enOverridesPath = path.join(importDir, 'en-translations.json');
  let enOverrides = {};
  if (existsSync(enOverridesPath)) {
    enOverrides = JSON.parse(await readFile(enOverridesPath, 'utf8'));
  }

  console.log(`Parsed RU: ${ruCards.size} cards, EN blocks: ${enCards.size}`);

  const extracted = await ensureRawImages();
  console.log(`Extracted ${extracted} card images to ${path.relative(root, rawDir)}`);

  const imageMap = await buildImageMap();
  await mkdir(cardsPublicDir, { recursive: true });
  await mkdir(reportDir, { recursive: true });

  const missingImages = [];
  const missingEn = [];
  const missingRu = [];

  const deckOrder = [];
  for (const suit of ['hearts', 'diamonds', 'clubs', 'spades']) {
    for (const rank of ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']) {
      deckOrder.push(cardKey(suit, rank));
    }
  }

  const existingJson = await readdir(cardsJsonDir).catch(() => []);
  for (const f of existingJson.filter((n) => n.endsWith('.json'))) {
    await rm(path.join(cardsJsonDir, f));
  }

  let written = 0;
  for (const key of deckOrder) {
    const ru = ruCards.get(key);
    if (!ru) {
      missingRu.push(key);
      continue;
    }
    const en = enCards.get(key);
    const { idPart, value } = rankToIdValue(ru.rank);
    const id = `${idPart}-${ru.suit}`;
    const srcImage = imageMap.get(key);
    if (!srcImage) {
      missingImages.push(key);
      continue;
    }

    const webpName = `${id}.webp`;
    await writeWebp(srcImage, path.join(cardsPublicDir, webpName));

    const titleRu = ru.titleRu || id;
    const summaryRu = ru.summaryRu || '';
    const descriptionRu = ru.descriptionRu || summaryRu;

    const override = enOverrides[id];
    const titleEn = override?.title || en?.titleEn || titleRu;
    const summaryEn = override?.summary || en?.summaryEn || '';
    const descriptionEn = override?.description || en?.descriptionEn || '';
    const enIncomplete = !descriptionEn.trim();
    if (enIncomplete) missingEn.push({ id, key, titleRu });

    const category = WORLD_CATEGORY[ru.suit];
    const payload = {
      id,
      suit: ru.suit,
      value,
      category: { en: category.en, ru: category.ru },
      title: { en: titleEn, ru: titleRu },
      summary: {
        en: summaryEn || (enIncomplete ? summaryRu : ''),
        ru: summaryRu,
      },
      description: {
        en: descriptionEn || (enIncomplete ? descriptionRu : ''),
        ru: descriptionRu,
      },
      image: `/cards/${webpName}`,
      featured: FEATURED_IDS.has(id),
    };

    await writeFile(path.join(cardsJsonDir, `${id}.json`), `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    written++;
  }

  await writeFile(
    path.join(reportDir, 'missing-en.json'),
    `${JSON.stringify(missingEn, null, 2)}\n`,
    'utf8',
  );
  await writeFile(
    path.join(reportDir, 'missing-images.json'),
    `${JSON.stringify(missingImages, null, 2)}\n`,
    'utf8',
  );
  await writeFile(
    path.join(reportDir, 'missing-ru.json'),
    `${JSON.stringify(missingRu, null, 2)}\n`,
    'utf8',
  );

  console.log(`Wrote ${written} card JSON + webp.`);
  console.log(`Missing EN copy: ${missingEn.length}, missing images: ${missingImages.length}, missing RU: ${missingRu.length}`);
  console.log(`Reports in ${path.relative(root, reportDir)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
