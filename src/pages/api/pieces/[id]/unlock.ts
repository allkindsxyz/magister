import type { APIRoute } from 'astro';
import { getPiece, toPublicPiece, verifyPin } from '../../../../lib/piecesStore';
import { getPreview } from '../../../../lib/previewStore';

export const prerender = false;

const hits = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < 10 * 60 * 1000);
  if (recent.length >= 40) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
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

export const POST: APIRoute = async ({ params, request, clientAddress }) => {
  if (tooMany(clientAddress || 'unknown')) return json({ ok: false, error: 'rate' }, 429);

  const id = params.id;
  if (!id || typeof id !== 'string' || id.length > 32) {
    return json({ ok: false, error: 'missing' }, 404);
  }

  const raw = await request.text();
  if (raw.length > 500) return json({ ok: false, error: 'bad_json' }, 400);

  let body: { pin?: unknown };
  try {
    body = JSON.parse(raw) as { pin?: unknown };
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const piece = (await getPiece(id)) ?? getPreview(id);
  if (!piece) return json({ ok: false, error: 'missing' }, 404);

  const pin = typeof body.pin === 'string' ? body.pin.trim() : '';
  if (!verifyPin(pin, piece.id, piece.pinHash)) {
    return json({ ok: false, error: 'pin' }, 403);
  }

  return json({ ok: true, piece: toPublicPiece(piece, true) });
};
