import en from './en.json';
import ru from './ru.json';
import zh from './zh.json';

export type Lang = 'en' | 'ru' | 'zh';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, ru, zh };

export const LOCALE_LINKS: ReadonlyArray<{ code: Lang; label: string }> = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'zh', label: '中文' },
];

export type LocalizedField = { en: string; ru: string; zh?: string };

export function pickLocalized(field: LocalizedField, lang: Lang): string {
  if (lang === 'zh') return field.zh ?? field.en;
  if (lang === 'ru') return field.ru;
  return field.en;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ru') return 'ru';
  if (lang === 'zh') return 'zh';
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
  if (lang === 'en') return 'ru';
  if (lang === 'ru') return 'zh';
  return 'en';
}
