import { createHmac, randomBytes } from 'node:crypto';
import { createPiece, getPiece, hashPin, type CreatePieceInput, type Piece } from './piecesStore';
import { isPreviewId, PREVIEW_PREFIX } from './previewId';

/**
 * Short-lived, in-memory message previews for the product page QR.
 * At checkout a preview is promoted to a stored piece under the same id,
 * so the link the buyer already scanned becomes the permanent one.
 */
const TTL_MS = 24 * 60 * 60 * 1000;
const MAX_ENTRIES = 2000;

const salt = randomBytes(16);
const store = new Map<string, { piece: Piece; expiresAt: number }>();

function sweep(now: number): void {
  for (const [id, entry] of store) {
    if (entry.expiresAt <= now) store.delete(id);
  }
  // Map keeps insertion order, so the oldest entries go first.
  while (store.size >= MAX_ENTRIES) {
    const oldest = store.keys().next().value;
    if (oldest === undefined) break;
    store.delete(oldest);
  }
}

/**
 * Identical input from the same browser session yields the same id, so retyping does not grow the store.
 * The session nonce keeps two buyers with identical messages from sharing one link.
 */
export function upsertPreview(input: CreatePieceInput, nonce: string): Piece {
  const now = Date.now();
  const digest = createHmac('sha256', salt)
    .update(nonce)
    .update('\u0000')
    .update(JSON.stringify(input))
    .digest('base64url')
    .slice(0, 16);
  const id = `${PREVIEW_PREFIX}${digest}`;

  const existing = store.get(id);
  if (existing) {
    store.delete(id);
    existing.expiresAt = now + TTL_MS;
    store.set(id, existing);
    return existing.piece;
  }

  sweep(now);
  const piece: Piece = {
    id,
    createdAt: new Date(now).toISOString(),
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
    // Previews must never offer the "claim your own PIN" flow.
    pinClaimedAt: new Date(now).toISOString(),
    status: 'ordered',
  };
  store.set(id, { piece, expiresAt: now + TTL_MS });
  return piece;
}

export function getPreview(id: string): Piece | null {
  if (!isPreviewId(id)) return null;
  const entry = store.get(id);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    store.delete(id);
    return null;
  }
  return entry.piece;
}

/** Everything the recipient sees must match; size and color do not change the message page. */
function sameContent(preview: Piece, input: CreatePieceInput): boolean {
  return (
    preview.lang === input.lang &&
    preview.product === input.product &&
    preview.cardId === input.cardId &&
    preview.recipient === input.recipient &&
    preview.sender === input.sender &&
    preview.message === input.message &&
    preview.visibility === input.visibility &&
    preview.pinHash === (input.pin ? hashPin(input.pin, preview.id) : null)
  );
}

export type PromoteResult = { piece: Piece; reusedPreview: boolean };

/**
 * Checkout entry point: stores the order's piece, reusing the preview id when the preview is
 * still alive, matches the ordered content, and the id is not taken yet. Otherwise a fresh id is used,
 * so a stale or tampered preview id can never attach an order to someone else's link.
 * `input` must come from server-side validation of the order, never from the preview itself.
 */
export async function createPieceFromPreview(
  input: CreatePieceInput,
  previewId: string | null,
): Promise<PromoteResult> {
  const preview = previewId ? getPreview(previewId) : null;
  const reusable = Boolean(preview && sameContent(preview, input) && !(await getPiece(preview.id)));
  const piece = await createPiece(input, reusable && preview ? preview.id : undefined);
  const reusedPreview = Boolean(preview && piece.id === preview.id);
  if (reusedPreview && preview) store.delete(preview.id);
  return { piece, reusedPreview };
}
