import { getCollection } from 'astro:content';
import { pickLocalized, useTranslations, type Lang } from '../i18n/utils';
import { validateCreateInput, type CreatePieceInput } from './piecesStore';

const LANGS: ReadonlySet<string> = new Set(['en', 'ru', 'be', 'zh']);
const SYMBOLS: Record<string, string> = { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' };

async function cardFields(id: string | null, lang: Lang) {
  const none = {
    cardId: null,
    cardTitle: null,
    cardSummary: null,
    cardDescription: null,
    cardImage: null,
    cardWorld: null,
    cardSuit: null,
    cardValue: null,
    cardSuitSymbol: null,
  };
  if (!id) return none;
  const cards = await getCollection('cards');
  const card = cards.find((c) => c.data.id === id && !c.data.back);
  if (!card) return null;
  const suit = card.data.suit ?? null;
  const t = useTranslations(lang);
  return {
    cardId: card.data.id,
    cardTitle: pickLocalized(card.data.title, lang),
    cardSummary: pickLocalized(card.data.summary, lang),
    cardDescription: pickLocalized(card.data.description, lang),
    cardImage: card.data.image ?? null,
    cardWorld: suit ? t(`worlds.${suit}.name`) : null,
    cardSuit: suit,
    cardValue: card.data.value ?? null,
    cardSuitSymbol: suit ? (SYMBOLS[suit] ?? null) : null,
  };
}

/**
 * Builds a piece from untrusted client fields. Card data is always resolved on the server.
 * Used by both the preview API and checkout, so a preview and its order compare field by field.
 */
export async function buildPieceInput(
  body: Record<string, unknown>,
): Promise<{ ok: true; value: CreatePieceInput } | { ok: false; error: string }> {
  const lang = typeof body.lang === 'string' && LANGS.has(body.lang) ? (body.lang as Lang) : null;
  if (!lang) return { ok: false, error: 'lang' };

  const cardId = typeof body.cardId === 'string' && body.cardId.trim() ? body.cardId.trim().slice(0, 64) : null;
  const card = await cardFields(cardId, lang);
  if (!card) return { ok: false, error: 'card' };

  const message = typeof body.message === 'string' ? body.message : '';
  const recipient = typeof body.recipient === 'string' ? body.recipient : '';
  return validateCreateInput({
    lang,
    product: body.product,
    size: body.size,
    color: body.color,
    recipient,
    sender: body.sender,
    message,
    visibility: body.visibility,
    pin: body.pin,
    audience: recipient.trim() && message.trim() ? 'gift' : 'self',
    ...card,
  });
}
