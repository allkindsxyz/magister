import { PRICES, SHIPPING } from './pricing';

export type SkuKind = 'deck' | 'apparel' | 'prints';

export type Sku = {
  kind: SkuKind;
  price: number;
  /** Fallback thumbnail when a cart line carries no image of its own. */
  image: string;
  /** Requires a card from the deck (apparel, prints). */
  needsCard: boolean;
  /** Requires size and color (apparel). */
  needsFit: boolean;
};

export const SKUS = {
  deck_xl: { kind: 'deck', price: PRICES.xl, image: '/media/pack.webp', needsCard: false, needsFit: false },
  deck_standard: { kind: 'deck', price: PRICES.standard, image: '/media/pack.webp', needsCard: false, needsFit: false },
  deck_set: { kind: 'deck', price: PRICES.set, image: '/media/pack.webp', needsCard: false, needsFit: false },
  deck_two_xl: { kind: 'deck', price: PRICES.two_xl, image: '/media/pack.webp', needsCard: false, needsFit: false },
  hoodie: { kind: 'apparel', price: PRICES.hoodie, image: '/media/merch-hoodie-black.jpg?v=2', needsCard: true, needsFit: true },
  tee: { kind: 'apparel', price: PRICES.tee, image: '/media/merch-tee-black.jpg?v=2', needsCard: true, needsFit: true },
  print: { kind: 'prints', price: PRICES.print, image: '/media/prints-detail-hero.jpg', needsCard: true, needsFit: false },
} as const satisfies Record<string, Sku>;

export type SkuId = keyof typeof SKUS;

export const DECK_SKUS = ['deck_xl', 'deck_standard', 'deck_set', 'deck_two_xl'] as const satisfies readonly SkuId[];
export type DeckSkuId = (typeof DECK_SKUS)[number];

export const APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
export const APPAREL_COLORS = ['black', 'inspired'] as const;
export type ApparelColor = (typeof APPAREL_COLORS)[number];

export function isSkuId(value: unknown): value is SkuId {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(SKUS, value);
}

/** Product type of the message page (`/s/[id]`); all deck formats share one. */
export function skuPieceProduct(id: SkuId): 'deck' | 'hoodie' | 'tee' | 'print' {
  if (id === 'hoodie' || id === 'tee' || id === 'print') return id;
  return 'deck';
}

export function skuPrice(id: SkuId): number {
  return SKUS[id].price;
}

/** What a bundle saves against buying its parts separately (0 when it is not a bundle). */
export function bundleSaving(id: SkuId): number {
  if (id === 'deck_set') return PRICES.xl + PRICES.standard - PRICES.set;
  if (id === 'deck_two_xl') return PRICES.xl * 2 - PRICES.two_xl;
  return 0;
}

export function qualifiesForFreeShipping(subtotal: number): boolean {
  return subtotal >= SHIPPING.free_from;
}

export function freeShippingRemaining(subtotal: number): number {
  return Math.max(0, SHIPPING.free_from - subtotal);
}
