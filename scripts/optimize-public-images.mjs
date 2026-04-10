/**
 * One-time / maintenance: moves PNGs from public/cards and public/images to
 * public/_originals/{cards,images}/, then writes resized + recompressed PNGs
 * back to the same public paths (URLs unchanged). If the new file is not
 * smaller than the original, keeps the original bytes.
 *
 * Re-run only on a clean tree (public/cards must not already be empty).
 */
import sharp from 'sharp';
import { copyFile, mkdir, readdir, rename, stat, unlink } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const JOBS = [
  {
    publicDir: path.join(root, 'public/cards'),
    originalsDir: path.join(root, 'public/_originals/cards'),
    maxWidth: 920,
    maxHeight: 1320,
  },
  {
    publicDir: path.join(root, 'public/images'),
    originalsDir: path.join(root, 'public/_originals/images'),
    maxWidth: 1100,
    maxHeight: 1650,
  },
];

const PNG = /\.png$/i;

async function moveOriginals(publicDir, originalsDir) {
  await mkdir(originalsDir, { recursive: true });
  const already = await readdir(originalsDir);
  if (already.some((n) => PNG.test(n))) {
    console.warn(`Skip move into ${path.relative(root, originalsDir)} — folder already has PNGs.`);
    return;
  }
  const names = await readdir(publicDir);
  for (const name of names) {
    if (!PNG.test(name)) continue;
    await rename(path.join(publicDir, name), path.join(originalsDir, name));
  }
}

async function writeSmallerPng(src, dest, maxWidth, maxHeight) {
  const tmp = `${dest}.tmp-opt.png`;
  await sharp(src)
    .rotate()
    .resize(maxWidth, maxHeight, { fit: 'inside', withoutEnlargement: true })
    .png({
      compressionLevel: 9,
      effort: 10,
      adaptiveFiltering: true,
    })
    .toFile(tmp);

  const [origSize, newSize] = await Promise.all([stat(src), stat(tmp)]);
  if (newSize.size < origSize.size) {
    await rename(tmp, dest);
  } else {
    await copyFile(src, dest);
    await unlink(tmp);
  }
}

async function processDir(originalsDir, publicDir, maxWidth, maxHeight) {
  const names = await readdir(originalsDir);
  for (const name of names) {
    if (!PNG.test(name)) continue;
    const src = path.join(originalsDir, name);
    const dest = path.join(publicDir, name);
    await writeSmallerPng(src, dest, maxWidth, maxHeight);
  }
}

for (const job of JOBS) {
  await moveOriginals(job.publicDir, job.originalsDir);
  await processDir(job.originalsDir, job.publicDir, job.maxWidth, job.maxHeight);
}

console.log('Done: originals → public/_originals/, public/*.png = smaller of (original, optimized).');
