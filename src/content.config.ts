import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedString = z.object({
  en: z.string(),
  ru: z.string(),
});

const cards = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cards' }),
  schema: z.object({
    id: z.string(),
    suit: z.enum(['spades', 'hearts', 'diamonds', 'clubs']),
    value: z.string(),
    category: localizedString,
    title: localizedString,
    description: localizedString,
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/games' }),
  schema: z.object({
    id: z.string(),
    number: z.string(),
    title: localizedString,
    description: localizedString,
    players: z.string(),
    duration: localizedString,
  }),
});

export const collections = { cards, games };
