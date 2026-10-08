import type { APIRoute } from 'astro';
import { buildPieceInput } from '../../lib/pieceInput';
import { upsertPreview } from '../../lib/previewStore';

export const prerender = false;

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 120;
const hits = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, list] of hits) {
      if (!list.some((at) => now - at < WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (tooMany(clientAddress || 'unknown')) return json({ ok: false, error: 'rate' }, 429);

  const raw = await request.text();
  if (raw.length > 4000) return json({ ok: false, error: 'bad_json' }, 400);

  let body: Record<string, unknown>;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object') throw new Error('shape');
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const nonce = typeof body.nonce === 'string' && /^[A-Za-z0-9_-]{16,64}$/.test(body.nonce) ? body.nonce : null;
  if (!nonce) return json({ ok: false, error: 'nonce' }, 400);

  const built = await buildPieceInput(body);
  if (!built.ok) return json({ ok: false, error: built.error }, 400);

  const piece = upsertPreview(built.value, nonce);
  return json({ ok: true, id: piece.id, path: `/${piece.lang}/s/${piece.id}` });
};
