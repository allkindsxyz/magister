import type { Lang } from './utils';

export type PlayWayBridge = {
  mark: string;
  name: string;
  suits: string;
};

export type PlayWayDetails = {
  toggle: string;
  toggleClose: string;
  headline: string;
  paragraphs: string[];
  conditionsTitle: string;
  conditions: string[];
  bridgesTitle: string;
  bridges: PlayWayBridge[];
};

export type PlayWay = {
  id: 'magister' | 'classic' | 'oracle' | 'lore';
  card: string;
  title: string;
  body: string;
  cta?: { href: string; label: string };
  details?: PlayWayDetails;
};

export type PlayWaysCopy = {
  label: string;
  title: string;
  lead: string;
  ways: PlayWay[];
};

const magisterDetailsRu: PlayWayDetails = {
  toggle: 'Подробнее',
  toggleClose: 'Свернуть',
  headline: 'ИГРА «МАГИСТР» (2–6 игроков)',
  paragraphs: [
    'Цель — первым сбросить все карты.',
    'Колода подходит и для других классических карточных игр.',
  ],
  conditionsTitle: 'Как играть',
  conditions: [
    'Раздайте каждому по 8 карт. Одну карту из колоды откройте в центре стола.',
    'Игрок сбрасывает карту той же масти или ранга, что и открытая карта (джокер подходит к любой масти и может задать новую масть).',
    'Если подходящей карты нет — возьмите одну карту из колоды. Ход переходит к следующему игроку.',
    'Если колода закончилась — перетасуйте сброс, оставив верхнюю карту на столе.',
    'Первый игрок, избавившийся от всех карт, становится Магистром!',
  ],
  bridgesTitle: '',
  bridges: [],
};

const magisterDetailsEn: PlayWayDetails = {
  toggle: 'Read more',
  toggleClose: 'Show less',
  headline: 'MAGISTER (2–6 players)',
  paragraphs: [
    'Goal — be the first to empty your hand.',
    'The deck works for other classic card games too.',
  ],
  conditionsTitle: 'How to play',
  conditions: [
    'Deal 8 cards to each player. Turn one card from the deck face up in the centre.',
    'A player discards a card of the same suit or rank as the open card (a joker matches any suit and can set a new suit).',
    'If you have no matching card, draw one from the deck. Play passes to the next player.',
    'If the deck runs out, reshuffle the discard pile into a new deck, leaving the top card on the table.',
    'The first player to get rid of all cards becomes the Magister!',
  ],
  bridgesTitle: '',
  bridges: [],
};

const magisterDetailsBe: PlayWayDetails = {
  toggle: 'Падрабязней',
  toggleClose: 'Згарнуць',
  headline: 'ГУЛЯ «МАГІСТР» (2–6 гульцоў)',
  paragraphs: [
    'Мэта — першым скінуць усе карты.',
    'Калода падыходзіць і для іншых класічных картачных гульняў.',
  ],
  conditionsTitle: 'Як гуляць',
  conditions: [
    'Раздайце кожнаму па 8 карт. Адну карту з калоды адкрыйце ў цэнтры стала.',
    'Гулец скідае карту той жа масці або рангу, што і адкрытая карта (джокер падыходзіць да любой масці і можа задаць новую масць).',
    'Калі падыходнай карты няма — возьмеце адну карту з калоды. Ход пераходзіць да наступнага гульца.',
    'Калі калода скончылася — ператасуйце скід, пакінуўшы верхнюю карту на стале.',
    'Першы гулец, які пазбавіўся ад усіх карт, становіцца Магістрам!',
  ],
  bridgesTitle: '',
  bridges: [],
};

const magisterDetailsZh: PlayWayDetails = {
  toggle: '了解详情',
  toggleClose: '收起',
  headline: '「Magister」游戏（2–6 人）',
  paragraphs: [
    '目标——率先出完手牌。',
    '这副牌也可用于其他经典纸牌游戏。',
  ],
  conditionsTitle: '玩法',
  conditions: [
    '每位玩家发 8 张牌。从牌堆翻开一张放在桌中央。',
    '玩家打出与明牌相同花色或点数的牌（小丑可匹配任意花色并可设定新花色）。',
    '没有可出的牌——从牌堆摸一张；回合交给下一位玩家。',
    '牌堆用尽时——洗混弃牌堆组成新牌堆，最上面一张留在桌上。',
    '第一个出完手牌的玩家成为 Magister！',
  ],
  bridgesTitle: '',
  bridges: [],
};

export const playWaysCopy: Record<Lang, PlayWaysCopy> = {
  ru: {
    label: '2 колоды: стандарт и XL',
    title: 'Как играть картами Магистр',
    lead: 'Четыре мира, 54 карты и сотни историй. Играйте, гадайте и узнавайте новое: выберите свой способ.',
    ways: [
      {
        id: 'magister',
        card: 'jack-hearts',
        title: 'Фирменная игра «Магистр»',
        body: '2–6 игроков. Кладите на открытую карту ту же масть или ранг (джокер подходит к любой масти). Нет карты — возьмите одну из колоды. Первый без карт — Магистр!',
        cta: { href: '__deck__', label: 'Купить колоду' },
        details: magisterDetailsRu,
      },
      {
        id: 'classic',
        card: '6-clubs',
        title: 'Классические игры',
        body: 'Играйте в классические карточные игры, но зашифрованными картами с мифами и историей.',
        cta: { href: '#play-learn', label: 'Изучите колоду' },
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Карты предсказаний',
        body: 'Задайте «Вопрос Магистру»: подумайте о нём, вытяните карту и получите подсказку. Узнайте свою «Карту судьбы» по дате рождения или попробуйте классические гадания.',
        cta: { href: '#play-oracle', label: 'Попробуйте онлайн' },
      },
      {
        id: 'lore',
        card: 'king-spades',
        title: 'История и мифология',
        body: 'За каждой картой стоит герой или сюжет, от Зевса и сирен до тамплиеров и Эйнштейна. Проверьте знания в квизе по миру колоды.',
        cta: { href: '#play-lore', label: 'Узнайте глубину карт Магистр' },
      },
    ],
  },
  en: {
    label: '2 decks: standard & XL',
    title: 'How to play Magister cards',
    lead: 'Four worlds, 54 cards and hundreds of stories. Play, divine and discover — choose your way.',
    ways: [
      {
        id: 'magister',
        card: 'jack-hearts',
        title: 'The Magister game',
        body: '2–6 players. Play a card matching the open centre card by suit or rank (a joker matches any suit). No match — draw one. First to empty your hand becomes the Magister!',
        cta: { href: '__deck__', label: 'Buy the deck' },
        details: magisterDetailsEn,
      },
      {
        id: 'classic',
        card: '6-clubs',
        title: 'Classic games',
        body: 'Play the classic card games you already know — on an encrypted deck of myth and history.',
        cta: { href: '#play-learn', label: 'Learn the deck' },
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Fortune cards',
        body: 'Ask the Magister a question: hold it in mind, draw a card, take the hint. Find your Destiny Card by birth date, or try classic readings.',
        cta: { href: '#play-oracle', label: 'Try it online' },
      },
      {
        id: 'lore',
        card: 'king-spades',
        title: 'History and mythology',
        body: 'Behind every card stands a hero or a plot — from Zeus and the sirens to Templars and Einstein. Test yourself in a quiz of the deck’s world.',
        cta: { href: '#play-lore', label: 'Discover the depth of Magister cards' },
      },
    ],
  },
  be: {
    label: '2 калоды: стандарт і XL',
    title: 'Як гуляць картамі Магістр',
    lead: 'Чатыры светы, 54 карты і сотні гісторый. Гуляйце, варажыце і адкрывайце новае: абярыце свой спосаб.',
    ways: [
      {
        id: 'magister',
        card: 'jack-hearts',
        title: 'Фірмовая гульня «Магістр»',
        body: '2–6 гульцоў. Кладзіце на адкрытую карту тую ж масць або ранг (джокер падыходзіць да любой масці). Няма карты — возьмеце адну з калоды. Першы без карт — Магістр!',
        cta: { href: '__deck__', label: 'Купіць калоду' },
        details: magisterDetailsBe,
      },
      {
        id: 'classic',
        card: '6-clubs',
        title: 'Класічныя гульні',
        body: 'Гуляйце ў класічныя картачныя гульні, але на зашыфраваных картах з міфамі і гісторыяй.',
        cta: { href: '#play-learn', label: 'Вывучыце калоду' },
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: 'Карты прадказанняў',
        body: 'Задайце «Пытанне Магістру»: падумайце пра яго, выцягніце карту і атрымайце падказку. Даведайцеся сваю «Карту лёсу» па даце нараджэння або паспрабуйце класічныя варажбы.',
        cta: { href: '#play-oracle', label: 'Паспрабуйце анлайн' },
      },
      {
        id: 'lore',
        card: 'king-spades',
        title: 'Гісторыя і міфалогія',
        body: 'За кожнай картай стаіць герой ці сюжэт — ад Зеўса і сірэн да тампліераў і Эйнштэйна. Праверце веды ў квізе па свеце калоды.',
        cta: { href: '#play-lore', label: 'Даведайцеся глыбіню карт Магістр' },
      },
    ],
  },
  zh: {
    label: '两种牌组：标准与 XL',
    title: '如何用 Magister 打牌',
    lead: '四个世界、54 张牌、成百上千个故事。打牌、占卜、发现新知：选一种方式。',
    ways: [
      {
        id: 'magister',
        card: 'jack-hearts',
        title: '招牌玩法「Magister」',
        body: '2–6 人。打出与中央明牌相同花色或点数的牌（小丑可匹配任意花色）。没有可出的牌则摸一张。先出完手牌者成为 Magister！',
        cta: { href: '__deck__', label: '购买牌组' },
        details: magisterDetailsZh,
      },
      {
        id: 'classic',
        card: '6-clubs',
        title: '经典玩法',
        body: '用你熟悉的经典牌戏来玩——只不过牌面是加密的神话与历史。',
        cta: { href: '#play-learn', label: '认识牌组' },
      },
      {
        id: 'oracle',
        card: 'ace-diamonds',
        title: '预言牌',
        body: '向 Magister 提问：把问题放在心里，抽一张牌，得到提示。按生日查你的「命运牌」，或尝试经典占卜。',
        cta: { href: '#play-oracle', label: '在线试试' },
      },
      {
        id: 'lore',
        card: 'king-spades',
        title: '历史与神话',
        body: '每张牌背后都有英雄或情节——从宙斯与塞壬，到圣殿骑士与爱因斯坦。用牌组世界的问答检验你的了解。',
        cta: { href: '#play-lore', label: '探索 Magister 牌的深度' },
      },
    ],
  },
};
