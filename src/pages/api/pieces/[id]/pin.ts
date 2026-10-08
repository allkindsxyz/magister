import type { APIRoute } from 'astro';
import { changePiecePin, toPublicPiece } from '../../../../lib/piecesStore';

export const prerender = false;

const hits = new Map<string, number[]>();

function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((at) => now - at < 10 * 60 * 1000);
  if (recent.length >= 20) {
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

  let body: { currentPin?: unknown; newPin?: unknown };
  try {
    body = JSON.parse(raw) as { currentPin?: unknown; newPin?: unknown };
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const currentPin = typeof body.currentPin === 'string' ? body.currentPin.trim() : '';
  const newPin = typeof body.newPin === 'string' ? body.newPin.trim() : '';

  const result = await changePiecePin(id, currentPin, newPin);
  if (!result.ok) {
    const status =
      result.error === 'missing' ? 404 : result.error === 'claimed' ? 409 : 403;
    return json({ ok: false, error: result.error }, status);
  }

  return json({ ok: true, piece: toPublicPiece(result.piece, true) });
};
