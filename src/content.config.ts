import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localizedString = z.object({
  en: z.string(),
  ru: z.string(),
  zh: z.string().optional(),
});

const cards = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/cards' }),
  schema: z.object({
    id: z.string(),
    suit: z.enum(['spades', 'hearts', 'diamonds', 'clubs']),
    value: z.string(),
    category: localizedString,
    title: localizedString,
    summary: localizedString,
    description: localizedString,
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { cards };
