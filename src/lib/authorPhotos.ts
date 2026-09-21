import { existsSync } from 'node:fs';
import path from 'node:path';

const EXTS = ['jpg', 'jpeg', 'png', 'webp'] as const;

/** Resolves a file dropped into public/images/authors/{basename}.{ext} */
export function authorPhotoSrc(basename: string): string | null {
  const dir = path.resolve('./public/images/authors');
  for (const ext of EXTS) {
    if (existsSync(path.join(dir, `${basename}.${ext}`))) {
      return `/images/authors/${basename}.${ext}`;
    }
  }
  return null;
}
