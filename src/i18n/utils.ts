import en from './en.json';
import ru from './ru.json';

export type Lang = 'en' | 'ru';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, ru };

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ru') return 'ru';
  return 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[lang];
    for (const k of keys) {
      value = value?.[k];
    }
    if (typeof value === 'string') return value;
    // Fallback to English
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let fallback: any = translations['en'];
    for (const k of keys) {
      fallback = fallback?.[k];
    }
    return typeof fallback === 'string' ? fallback : key;
  };
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'en' ? 'ru' : 'en';
}
