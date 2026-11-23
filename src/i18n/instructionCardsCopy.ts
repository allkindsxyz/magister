import type { Lang } from './utils';

export type InstructionCardId = '1a' | '1b' | '2a' | '2b';

export type InstructionCardCopy =
  | {
      id: '1a';
      kicker: string;
      paragraphs: string[];
      flipHint: string;
    }
  | {
      id: '1b';
      kicker: string;
      highlight: string;
      subtitle: string;
      suits: { id: 'hearts' | 'diamonds' | 'clubs' | 'spades'; symbol: string; title: string; body: string }[];
      rankHint: string;
    }
  | {
      id: '2a';
      kicker: string;
      goalLabel: string;
      goalText: string;
      steps: string[];
    }
  | {
      id: '2b';
      kicker: string;
      players: string;
      goal: string;
      steps: string[];
      winText: string;
      footnote?: string;
    };

export type InstructionCardsCopy = {
  aria: string;
  prev: string;
  next: string;
  close: string;
  indexLabel: string;
  cards: InstructionCardCopy[];
};

const ru: InstructionCardsCopy = {
  aria: 'Инструкционные карты Magister',
  prev: 'Предыдущая карта',
  next: 'Следующая карта',
  close: 'Закрыть',
  indexLabel: 'Карта {n} из 4',
  cards: [
    {
      id: '1a',
      kicker: 'МАГИСТР',
      paragraphs: [
        'Магистр — авторская колода из 54 карт, созданная на основе классической четырёхмастной системы и включающая в себя символизм античной мифологии, средневековья и современной культуры.',
        'Каждая карта представляет собой образы и сцены, в которых зашифрованы их масть и ранг. Сами же масти и ранги на картах не обозначены, поэтому их нужно сначала разгадать.',
      ],
      flipHint: '',
    },
    {
      id: '1b',
      kicker: 'КЛЮЧ КОЛОДЫ',
      highlight: '54 карты. Четыре мира.',
      subtitle: 'Масть и номинал каждой карты зашифрованы в живописи.',
      suits: [
        { id: 'hearts', symbol: '♥', title: 'ОЛИМПИЙСКИЕ БОГИ', body: 'боги и герои античной мифологии' },
        { id: 'diamonds', symbol: '♦', title: 'НОСИТЕЛИ ТАЙН', body: 'мистические или экстравагантные персонажи без обуви' },
        { id: 'clubs', symbol: '♣', title: 'ТАМПЛИЕРЫ', body: 'рыцари и магистры ордена тамплиеров' },
        { id: 'spades', symbol: '♠', title: 'ЗНАМЕНИТОСТИ', body: 'известные личности и исторические деятели' },
      ],
      rankHint: 'Числовой номинал — это количество персонажей на карте. Пересчитай их, чтобы определить ранг.',
    },
    {
      id: '2a',
      kicker: 'ИГРА «ИНИЦИАЦИЯ»',
      goalLabel: 'Цель',
      goalText: 'разложить все карты по мастям, затем по номиналу внутри каждой масти.',
      steps: [
        'Выложите на стол всю колоду рубашкой вверх. Джокеры отложите в сторону.',
        'Открывайте карты и угадывайте масть по сюжету. Не уверены? Используйте оборот <strong>карты 1</strong> — ключ к мастям.',
        'Соберите четыре ряда: ♥ ♦ ♣ ♠.',
        'В каждом ряду выстройте карты по рангу — пересчитайте персонажей на картине.',
      ],
    },
    {
      id: '2b',
      kicker: 'ИГРА «МАГИСТР»',
      players: '2–6 игроков',
      goal: 'Цель — первым сбросить все карты',
      steps: [
        'Раздайте каждому по 8 карт. Одну карту из колоды откройте в центре стола.',
        'Игрок сбрасывает карту той же масти или ранга, что и открытая карта (джокер подходит к любой масти и может задать новую масть).',
        'Если подходящей карты нет — возьмите одну карту из колоды. Ход переходит к следующему игроку.',
        'Если колода закончилась — перетасуйте сброс, оставив верхнюю карту на столе.',
      ],
      winText: 'Первый игрок, избавившийся от всех карт, становится Магистром!',
    },
  ],
};

const en: InstructionCardsCopy = {
  aria: 'Magister instruction cards',
  prev: 'Previous card',
  next: 'Next card',
  close: 'Close',
  indexLabel: 'Card {n} of 4',
  cards: [
    {
      id: '1a',
      kicker: 'MAGISTER',
      paragraphs: [
        'Magister is an author deck of 54 cards built on the classic four-suit system, drawing on symbolism from classical myth, the Middle Ages, and modern culture.',
        'Each card is a scene in which suit and rank are hidden in the imagery. Suits and ranks are not marked on the faces — you must decode them first.',
      ],
      flipHint: '',
    },
    {
      id: '1b',
      kicker: 'DECK KEY',
      highlight: '54 cards. Four worlds.',
      subtitle: 'Every card’s suit and rank are hidden in the painting.',
      suits: [
        { id: 'hearts', symbol: '♥', title: 'OLYMPIC GODS', body: 'gods and heroes of classical myth' },
        { id: 'diamonds', symbol: '♦', title: 'BEARERS OF SECRETS', body: 'mystical or extravagant figures without shoes' },
        { id: 'clubs', symbol: '♣', title: 'TEMPLARS', body: 'knights and magisters of the Templar order' },
        { id: 'spades', symbol: '♠', title: 'CELEBRITIES', body: 'famous people and historical figures' },
      ],
      rankHint: 'A pip card’s rank is the number of figures on the scene. Count them to tell the rank.',
    },
    {
      id: '2a',
      kicker: 'INITIATION',
      goalLabel: 'Goal',
      goalText: 'sort every card by suit, then by rank within each suit.',
      steps: [
        'Lay out the full deck face down. Set the jokers aside.',
        'Turn cards up and guess the suit from the scene. Unsure? Use the back of <strong>card 1</strong> — the suit key.',
        'Build four rows: ♥ ♦ ♣ ♠.',
        'Within each row, order by rank — count the figures on the painting.',
      ],
    },
    {
      id: '2b',
      kicker: 'MAGISTER',
      players: '2–6 players',
      goal: 'Goal — be the first to empty your hand',
      steps: [
        'Deal 8 cards to each player. Turn one card from the deck face up in the centre.',
        'A player discards a card of the same suit or rank as the open card (a joker matches any suit and can set a new suit).',
        'If you have no matching card, draw one from the deck. Play passes to the next player.',
        'If the deck runs out, reshuffle the discard pile into a new deck, leaving the top card on the table.',
      ],
      winText: 'The first player to get rid of all cards becomes the Magister!',
    },
  ],
};

const be: InstructionCardsCopy = {
  ...ru,
  aria: 'Інструкцыйныя карты Magister',
  prev: 'Папярэдняя карта',
  next: 'Наступная карта',
  close: 'Закрыць',
  indexLabel: 'Карта {n} з 4',
  cards: ru.cards.map((card) => {
    if (card.id === '2a') {
      return { ...card, kicker: 'ГУЛЯ «ІНІЦЫЯЦЫЯ»' };
    }
    return card;
  }),
};

const zh: InstructionCardsCopy = {
  ...en,
  aria: 'Magister 说明卡',
  prev: '上一张',
  next: '下一张',
  close: '关闭',
  indexLabel: '第 {n} 张，共 4 张',
};

const copy: Record<Lang, InstructionCardsCopy> = { en, ru, be, zh };

export function instructionCardsCopy(lang: Lang): InstructionCardsCopy {
  return copy[lang] ?? copy.en;
}