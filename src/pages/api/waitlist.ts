import type { APIRoute } from 'astro';
import { createWaitlist, validateWaitlistBody } from '../../lib/preorderStore';

export const prerender = false;

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 8;
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

function redirect(request: Request, code: string): Response {
  const target = new URL('/new/', request.url);
  target.searchParams.set('waitlist', code);
  target.hash = 'editions';
  return Response.redirect(target, 303);
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const wantsJson = (request.headers.get('content-type') || '').includes('application/json');
  const fail = (error: string, status: number) =>
    wantsJson ? json({ ok: false, error }, status) : redirect(request, error);

  if (tooMany(clientAddress || 'unknown')) return fail('rate', 429);

  let body: unknown;
  try {
    if (wantsJson) {
      const raw = await request.text();
      if (raw.length > 8_000) return fail('bad_json', 400);
      body = JSON.parse(raw) as unknown;
    } else {
      const form = await request.formData();
      body = {
        email: form.get('email'),
        twoDeck: form.get('twoDeck'),
        company: form.get('company'),
        lang: 'en',
      };
    }
  } catch {
    return fail('bad_json', 400);
  }

  if (body && typeof body === 'object' && cleanCompany((body as { company?: unknown }).company)) {
    return wantsJson ? json({ ok: true }) : redirect(request, '1');
  }

  const parsed = validateWaitlistBody(body);
  if (!parsed.ok) return fail(parsed.error, 400);

  try {
    await createWaitlist(parsed.value);
  } catch {
    return fail('store', 500);
  }

  return wantsJson ? json({ ok: true }) : redirect(request, '1');
};

function cleanCompany(value: unknown): boolean {
  return typeof value === 'string' && value.trim().length > 0;
}
