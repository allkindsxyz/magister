/** Shared between the browser cart and the server preview store. */
export const PREVIEW_PREFIX = 'pv';
export const PREVIEW_ID_LENGTH = PREVIEW_PREFIX.length + 16;
const PREVIEW_ID_RE = /^pv[A-Za-z0-9_-]{16}$/;

export function isPreviewId(value: unknown): value is string {
  return typeof value === 'string' && PREVIEW_ID_RE.test(value);
}
