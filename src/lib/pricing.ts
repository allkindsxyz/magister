import type { Lang } from '../i18n/utils';

export const CURRENCY = 'EUR';

/** Retail prices, VAT included. */
export const PRICES = {
  xl: 45,
  standard: 29,
  set: 65,
  two_xl: 80,
  hoodie: 59,
  tee: 29,
  print: 19,
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
  ...PRICES,
  ship_eu: SHIPPING.eu,
  ship_us: SHIPPING.us,
  free_from: SHIPPING.free_from,
};

/** Replaces {xl}, {standard}, {set}, {two_xl}, {hoodie}, {tee}, {print}, {ship_eu}, {ship_us}, {free_from} with localized prices. */
export function fillPrices(text: string, lang: Lang): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in TOKENS ? formatPrice(TOKENS[key], lang) : match,
  );
}

export type JsonLdOffer = { name: string; price: number; sku: string };

type ProductJsonLdInput = {
  name: string;
  url: string;
  image: string | string[];
  description: string;
  offers: JsonLdOffer[];
};

export function productJsonLd({ name, url, image, description, offers }: ProductJsonLdInput): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    brand: { '@type': 'Brand', name: 'Magister Cards' },
    image,
    description,
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      name: offer.name,
      sku: offer.sku,
      price: offer.price.toFixed(2),
      priceCurrency: CURRENCY,
      availability: 'https://schema.org/InStock',
      url,
    })),
  };
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

type DeckOfferInput = {
  url: string;
  image: string | string[];
  description: string;
  xlName: string;
  standardName: string;
  setName: string;
  twoXlName: string;
};

export function deckProductJsonLd({ url, image, description, xlName, standardName, setName, twoXlName }: DeckOfferInput): string {
  return productJsonLd({
    name: 'Magister — art playing cards by Dr. Klein',
    url,
    image,
    description,
    offers: [
      { name: xlName, price: PRICES.xl, sku: 'MAGISTER-XL' },
      { name: standardName, price: PRICES.standard, sku: 'MAGISTER-STD' },
      { name: setName, price: PRICES.set, sku: 'MAGISTER-SET' },
      { name: twoXlName, price: PRICES.two_xl, sku: 'MAGISTER-2XL' },
    ],
  });
}
