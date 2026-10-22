import type { APIRoute } from 'astro';
import { createPreorder, validatePreorderBody } from '../../lib/preorderStore';

export const prerender = false;

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 12;
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
  if (raw.length > 48_000) return json({ ok: false, error: 'bad_json' }, 400);

  let body: unknown;
  try {
    body = JSON.parse(raw) as unknown;
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400);
  }

  const parsed = validatePreorderBody(body);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);

  try {
    const order = await createPreorder(parsed.value);
    return json({ ok: true, id: order.id });
  } catch {
    return json({ ok: false, error: 'store' }, 500);
  }
};
