/**
 * Builds lightweight card faces for online play (~220px wide). Run after changing public/cards/*.webp.
 *
 *   npm run cards:play
 */
import sharp from 'sharp';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const cardsDir = path.join(root, 'public/cards');
const playDir = path.join(cardsDir, 'play');

const PLAY_WIDTH = 220;
const WEBP_QUALITY = 78;

async function main() {
  await mkdir(playDir, { recursive: true });
  const names = (await readdir(cardsDir)).filter((n) => n.endsWith('.webp'));
  let wrote = 0;
  for (const name of names) {
    const src = path.join(cardsDir, name);
    const dest = path.join(playDir, name);
    const info = await stat(src);
    if (!info.isFile()) continue;
    await sharp(src)
      .rotate()
      .resize(PLAY_WIDTH, Math.round(PLAY_WIDTH * 1.4), {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(dest);
    wrote += 1;
  }
  console.log(`Wrote ${wrote} play cards to ${path.relative(root, playDir)}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});