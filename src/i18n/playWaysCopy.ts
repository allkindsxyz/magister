import type { Lang } from './utils';

export type PlayWay = {
  id: 'play' | 'oracle' | 'stories';
  card: string;
  title: string;
  format: string;
  body: string;
  items: string[];
  soon?: boolean;
  cta?: { href: string; label: string };
};

export type PlayWaysCopy = {
  label: string;
  title: string;
  lead: string;
  soon: string;
  ways: PlayWay[];
};

export const playWaysCopy: Partial<Record<Lang, PlayWaysCopy>> = {
  ru: {
    label: 'За столом',
    title: 'Как играть картами Магистр',
    lead:
      'Одни картины — в двух форматах. Стандарт ложится в руку как обычная колода. XL держат, чтобы видеть сюжет. Настолка с персонажами и книжкой описаний ещё впереди.',
    soon: 'Скоро',
    ways: [
      {
        id: 'play',
        card: '6-clubs',
        title: 'Классические игры',
        format: 'Игральные карты',
        body: 'Правила не меняются. Меняется только то, как узнаёте карту: сначала смотрите на картину, потом ходите. Стандартный формат — как любые игральные карты.',
        items: ['Дурак', 'Верю — не верю', 'Пьяница', 'Покер', 'Рамми', 'Очко'],
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Гадания и\u00a0предсказания',
        format: 'Карты XL',
        body: 'Одна карта на вопрос, карта дня, карта по дате рождения. Крупный формат — чтобы читать картину, а не углы. Тот же взгляд, что в игре «Вопрос Магистру».',
        items: ['Одна карта', 'Карта дня', 'Карта рождения'],
        cta: { href: '#play', label: 'Спросить Магистра онлайн' },
      },
      {
        id: 'stories',
        card: 'king-spades',
        title: 'Настольные игры',
        format: 'XL и книжка с описаниями',
        body: 'Персонажи, сюжеты, описание каждой карты. Этого продукта ещё нет — но XL и буклет уже собирают для него материал.',
        items: ['Персонажи', 'Истории карт', 'Книжка описаний'],
        soon: true,
      },
    ],
  },
};
