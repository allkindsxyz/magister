import type { APIRoute } from 'astro';
import { createPiece, toPublicPiece, validateCreateInput } from '../../lib/piecesStore';
import { absoluteUrl } from '../../lib/site';

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

export const POST: APIRoute = async ({ request, clientAddress }) => {
  if (tooMany(clientAddress || 'unknown')) return json({ ok: false, error: 'rate' }, 429);

  const raw = await request.text();
  if (raw.length > 20_000) return json({ ok: false, error: 'bad_json' }, 400);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const parsed = validateCreateInput(body);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);

  const piece = await createPiece(parsed.value);
  const path = `/${piece.lang}/s/${piece.id}`;
  const url = absoluteUrl(path);

  return json({
    ok: true,
    id: piece.id,
    path,
    url,
    piece: toPublicPiece(piece, true),
  });
};
