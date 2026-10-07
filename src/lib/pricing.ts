import type { Lang } from '../i18n/utils';

export const CURRENCY = 'EUR';

/** Retail prices, VAT included. */
export const PRICES = {
  xl: 45,
  standard: 29,
  set: 65,
  two_xl: 80,
} as const;

export const SHIPPING = {
  eu: 7,
  us: 14,
  free_from: 80,
} as const;

export function formatPrice(amount: number, lang: Lang): string {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: CURRENCY,
    maximumFractionDigits: 0,
  }).format(amount);
}

const TOKENS: Record<string, number> = {
  xl: PRICES.xl,
  standard: PRICES.standard,
  set: PRICES.set,
  two_xl: PRICES.two_xl,
  ship_eu: SHIPPING.eu,
  ship_us: SHIPPING.us,
  free_from: SHIPPING.free_from,
};

/** Replaces {xl}, {standard}, {set}, {two_xl}, {ship_eu}, {ship_us}, {free_from} with localized prices. */
export function fillPrices(text: string, lang: Lang): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in TOKENS ? formatPrice(TOKENS[key], lang) : match,
  );
}

type DeckOfferInput = {
  url: string;
  image: string;
  description: string;
  xlName: string;
  standardName: string;
};

export function deckProductJsonLd({ url, image, description, xlName, standardName }: DeckOfferInput): string {
  const offer = (name: string, price: number, sku: string) => ({
    '@type': 'Offer',
    name,
    sku,
    price: price.toFixed(2),
    priceCurrency: CURRENCY,
    availability: 'https://schema.org/InStock',
    url,
  });
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Magister — art playing cards by Vasily Pochitsky',
    brand: { '@type': 'Brand', name: 'Magister Cards' },
    image,
    description,
    offers: [
      offer(xlName, PRICES.xl, 'MAGISTER-XL'),
      offer(standardName, PRICES.standard, 'MAGISTER-STD'),
    ],
  };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
