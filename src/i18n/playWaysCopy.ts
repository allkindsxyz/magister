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

export const playWaysCopy: Record<Lang, PlayWaysCopy> = {
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
  en: {
    label: 'At the table',
    title: 'How to play Magister cards',
    lead:
      'The same paintings, two formats. Standard sits in the hand like any deck. XL is held so you can see the scene. A tabletop game of characters and a book of descriptions is still ahead.',
    soon: 'Coming soon',
    ways: [
      {
        id: 'play',
        card: '6-clubs',
        title: 'Classic games',
        format: 'Playing cards',
        body: 'The rules stay the same. What changes is how you read the card: first the painting, then the play. Standard format — like any playing cards.',
        items: ['Poker', 'Rummy', 'Blackjack', 'Bridge', 'Hearts', 'Solitaire'],
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Fortune-telling and\u00a0predictions',
        format: 'XL cards',
        body: 'One card for a question, a card of the day, a card for a birthday. The large format is for reading the painting, not the corners. The same eye as in Ask the Magister.',
        items: ['One card', 'Card of the day', 'Birth card'],
        cta: { href: '#play', label: 'Ask the Magister online' },
      },
      {
        id: 'stories',
        card: 'king-spades',
        title: 'Board games',
        format: 'XL and a book of descriptions',
        body: 'Characters, plots, a description of every card. That product does not exist yet — but the XL deck and the booklet are already gathering material for it.',
        items: ['Characters', 'Card stories', 'Book of descriptions'],
        soon: true,
      },
    ],
  },
  be: {
    label: 'За сталом',
    title: 'Як гуляць картамі Магістр',
    lead:
      'Адны карціны — у двух фарматах. Стандарт кладзецца ў руку як звычайная калода. XL трымаюць, каб бачыць сюжэт. Настолка з персанажамі і кніжкай апісанняў яшчэ наперадзе.',
    soon: 'Хутка',
    ways: [
      {
        id: 'play',
        card: '6-clubs',
        title: 'Класічныя гульні',
        format: 'Гульнявыя карты',
        body: 'Правілы не мяняюцца. Мяняецца толькі тое, як пазнаеце карту: спачатку глядзіце на карціну, потым ходзіце. Стандартны фармат — як любыя гульнявыя карты.',
        items: ['Дурань', 'Веру — не веру', 'П’яніца', 'Покер', 'Рамі', 'Вочка'],
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Варажба і\u00a0прадказанні',
        format: 'Карты XL',
        body: 'Адна карта на пытанне, карта дня, карта па даце нараджэння. Буйны фармат — каб чытаць карціну, а не вуглы. Той самы погляд, што ў гульні «Пытанне Магістру».',
        items: ['Адна карта', 'Карта дня', 'Карта нараджэння'],
        cta: { href: '#play', label: 'Спытаць Магістра анлайн' },
      },
      {
        id: 'stories',
        card: 'king-spades',
        title: 'Настольныя гульні',
        format: 'XL і кніжка з апісаннямі',
        body: 'Персанажы, сюжэты, апісанне кожнай карты. Гэтага прадукту яшчэ няма — але XL і буклет ужо збіраюць для яго матэрыял.',
        items: ['Персанажы', 'Гісторыі карт', 'Кніжка апісанняў'],
        soon: true,
      },
    ],
  },
  zh: {
    label: '牌桌上',
    title: '如何用 Magister 打牌',
    lead:
      '同一批画作，两种规格。标准牌握在手里，和普通扑克一样。XL 为了看清画面。角色与故事的桌游，外加图鉴册，还在前面。',
    soon: '即将推出',
    ways: [
      {
        id: 'play',
        card: '6-clubs',
        title: '经典玩法',
        format: '扑克牌',
        body: '规则不变。变的是认牌的方式：先看画，再出牌。标准规格——和任何扑克一样。',
        items: ['斗地主', '升级', '扑克', '21点', '桥牌', '拉米'],
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: '占卜与预言',
        format: 'XL 牌',
        body: '一问一牌、每日一牌、生日牌。大规格是为了读画，而不是读角标。目光与「问 Magister」相同。',
        items: ['单张牌', '每日一牌', '生日牌'],
        cta: { href: '#play', label: '在线问 Magister' },
      },
      {
        id: 'stories',
        card: 'king-spades',
        title: '桌游',
        format: 'XL 与图鉴册',
        body: '角色、情节、每张牌的解说。这个产品还不存在——但 XL 与图册已经在为它积累材料。',
        items: ['角色', '牌的故事', '图鉴册'],
        soon: true,
      },
    ],
  },
};
