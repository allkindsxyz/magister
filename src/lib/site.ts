export const SITE_URL = String(
  import.meta.env.SITE_URL || 'https://magister.cards',
).replace(/\/$/, '');

export const CONTACT_EMAIL = 'hello@magister.cards';
export const SPIEL_ESSEN_URL = 'https://www.spiel-essen.de/en/';
export const BOOKING_URL =
  String(import.meta.env.PUBLIC_CALENDLY_URL || '').trim() ||
  'https://calendly.com/getakwa-info/30min';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function localizedAbsoluteUrl(lang: 'en' | 'ru', path = '/'): string {
  const suffix = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}/${lang}${suffix === '/' ? '/' : suffix}`;
}
