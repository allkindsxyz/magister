const DEFAULT_SITE_URL = 'https://magister.cards';

function isNonPublicHost(hostname: string): boolean {
  if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
    return true;
  }
  if (hostname.endsWith('.internal') || hostname.endsWith('.local')) {
    return true;
  }
  return false;
}

function sanitizeSiteUrl(raw: string | undefined): string | null {
  const trimmed = String(raw || '').trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed.includes('://') ? trimmed : `https://${trimmed}`);
    if (isNonPublicHost(url.hostname)) return null;

    if (url.hostname === 'magister.cards' || url.hostname.endsWith('.magister.cards')) {
      return DEFAULT_SITE_URL;
    }

    if (url.protocol !== 'https:' && url.protocol !== 'http:') return null;
    return url.origin;
  } catch {
    return null;
  }
}

/** Canonical / OG base URL — ignores localhost and internal hosts from deploy env. */
export function getSiteUrl(): string {
  const candidates = [
    typeof process !== 'undefined' ? process.env.SITE_URL : undefined,
    typeof process !== 'undefined' ? process.env.PUBLIC_SITE_URL : undefined,
    import.meta.env.PUBLIC_SITE_URL,
    import.meta.env.SITE_URL,
    import.meta.env.SITE,
  ];

  for (const candidate of candidates) {
    const resolved = sanitizeSiteUrl(candidate);
    if (resolved) return resolved;
  }

  return DEFAULT_SITE_URL;
}

export const SITE_URL = getSiteUrl();

export const CONTACT_EMAIL = 'hello@magister.cards';
export const PARTNERSHIP_EMAIL = 'partnership@magister.cards';
export const SPIEL_ESSEN_URL = 'https://www.spiel-essen.de/en/';
export const BOOKING_URL =
  String(import.meta.env.PUBLIC_CALENDLY_URL || '').trim() ||
  'https://calendly.com/getakwa-info/30min';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}${normalized}`;
}

export function localizedAbsoluteUrl(lang: 'en' | 'ru' | 'zh', path = '/'): string {
  const suffix = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return `${getSiteUrl()}/${lang}${suffix === '/' ? '/' : suffix}`;
}
