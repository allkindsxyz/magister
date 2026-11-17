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
      howTitle: string;
      steps: string[];
    }
  | {
      id: '2b';
      kicker: string;
      players: string;
      goal: string;
      deal: string;
      turnTitle: string;
      turnBody: string;
      drawTitle: string;
      drawBody: string;
      specialTitle: string;
      specialItems: string[];
      winTitle: string;
      winBody: string;
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
        'Ты видишь карты. Но видишь ли ты то, что в них скрыто?',
        'В каждой карте скрыта своя загадка. Образы, символы и детали хранят секреты, которые не лежат на поверхности. Здесь нет привычных обозначений мастей и рангов. Их предстоит найти самому.',
        'Одни увидят лишь картины. Другие — истории и символы. И только тот, кто сумеет разгадать скрытый язык карт, сможет овладеть игрой.',
        'Карты открывают свои тайны не каждому. Чтобы стать Магистром, их нужно понять.',
        'Авторская колода Dr. Klein',
      ],
      flipHint: 'Переверни карту — ключ к мастям и рангам',
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
      howTitle: 'КАК ИГРАТЬ',
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
      deal: 'Раздайте каждому по 8 карт. Одну карту из колоды откройте в центре стола.',
      turnTitle: 'ВАШ ХОД',
      turnBody: 'Положите на верхнюю карту сброса карту той же масти или ранга.',
      drawTitle: 'ЕСЛИ НЕТ ПОДХОДЯЩЕЙ КАРТЫ',
      drawBody: 'Возьмите одну карту из колоды. Если она не подходит — пропустите ход.',
      specialTitle: 'ОСОБЫЕ ПРАВИЛА',
      specialItems: [
        'Джокер подходит к любой карте. Сыграв его, назовите масть.',
        'Колода закончилась? Перетасуйте сброс, оставив верхнюю карту на столе.',
      ],
      winTitle: 'ПОБЕДА',
      winBody: 'Первый игрок, избавившийся от всех карт, становится Магистром!',
      footnote: 'Колода подходит и для других классических карточных игр.',
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
        'You see the cards. But do you see what is hidden in them?',
        'Each card holds its own riddle. Images, symbols and details guard secrets that do not lie on the surface. There are no familiar suit and rank marks — you must find them yourself.',
        'Some will see only paintings. Others — stories and symbols. Only those who decode the hidden language of the cards can master the game.',
        'The cards do not reveal their secrets to everyone. To become a Magister, you must understand them.',
        'Dr. Klein’s author deck',
      ],
      flipHint: 'Flip the card — the key to suits and ranks',
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
      howTitle: 'HOW TO PLAY',
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
      deal: 'Deal 8 cards to each player. Turn one card from the deck face up in the centre.',
      turnTitle: 'YOUR TURN',
      turnBody: 'Play a card of the same suit or rank on top of the discard pile.',
      drawTitle: 'IF YOU HAVE NO MATCH',
      drawBody: 'Draw one card from the deck. If it still does not match, skip your turn.',
      specialTitle: 'SPECIAL RULES',
      specialItems: [
        'A joker matches any card. When you play it, name the suit.',
        'Deck empty? Shuffle the discard pile into a new deck, leaving the top card on the table.',
      ],
      winTitle: 'WIN',
      winBody: 'The first player to get rid of all cards becomes the Magister!',
      footnote: 'The deck works for other classic card games too.',
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