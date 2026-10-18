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
  headline: '«Магистр» (2 и более игроков)',
  paragraphs: [
    'Каждому игроку сдаётся по 8 закрытых карт. В центр стола кладётся одна карта из колоды. За ход игрок кладёт на неё карту того же ранга или той же масти.',
    'Но восемь героев колоды живут сразу в двух мирах. Это карты Магистра: они подходят к картам обеих своих мастей, потому что связаны с другим миром не цветом, а историей. Заметить такую связь может только тот, кто знает сюжеты карт. Побеждает тот, кто первым избавится от всех своих карт.',
  ],
  conditionsTitle: 'Условия',
  conditions: [
    'Если у игрока нет подходящей карты, он берёт одну из колоды. Если и она не подходит, игрок пропускает ход.',
    'Джокер может стать любой картой: игрок сам назначает его масть и ранг.',
    'Когда колода заканчивается, сыгранные карты тасуются и снова становятся колодой.',
    'Карту Магистра можно положить на карту любой из двух её мастей, а на неё можно положить карту любой из двух её мастей.',
  ],
  bridgesTitle: 'Карты Магистра и их вторые миры',
  bridges: [
    { mark: '10♥', name: 'Персефона — хозяйка мистерий', suits: '♥ и ♦' },
    { mark: 'A♥', name: 'Зевс и Мнемозина — мать муз, покровительниц творцов', suits: '♥ и ♠' },
    { mark: 'A♦', name: 'Диоген — мудрец, вошедший в историю', suits: '♦ и ♠' },
    { mark: 'Q♦', name: 'Девушка с кувшинами — жрица Деметры', suits: '♦ и ♥' },
    { mark: 'Q♣', name: 'Жак де Моле — последний Великий Магистр, легенда истории', suits: '♣ и ♠' },
    { mark: '8♣', name: 'Восьмой день свадьбы Розенкрейца — тайное знание', suits: '♣ и ♦' },
    { mark: '8♠', name: 'Восьмой сонет Шекспира — тайна автора', suits: '♠ и ♦' },
    { mark: 'K♠', name: 'Тайная история монголов — Великий хан, как Великий Магистр', suits: '♠ и ♣' },
  ],
};

const magisterDetailsEn: PlayWayDetails = {
  toggle: 'Read more',
  toggleClose: 'Show less',
  headline: 'Magister (2 or more players)',
  paragraphs: [
    'Each player is dealt 8 face-down cards. One card from the deck is placed in the centre of the table. On your turn, play a card of the same rank or the same suit on top of it.',
    'But eight heroes of the deck live in two worlds at once. These are the Magister cards: they match either of their suits, because they are bound to another world not by colour, but by story. Only someone who knows the plots can see that link. The first to empty their hand wins.',
  ],
  conditionsTitle: 'Rules',
  conditions: [
    'If you have no matching card, draw one from the deck. If that card also does not match, you skip the turn.',
    'A joker can become any card: the player names its suit and rank.',
    'When the draw pile runs out, the played cards are shuffled and become the deck again.',
    'A Magister card may be played on either of its two suits, and any card of either of those suits may be played on it.',
  ],
  bridgesTitle: 'Magister cards and their second worlds',
  bridges: [
    { mark: '10♥', name: 'Persephone — mistress of the mysteries', suits: '♥ and ♦' },
    { mark: 'A♥', name: 'Zeus and Mnemosyne — mother of the Muses, patrons of creators', suits: '♥ and ♠' },
    { mark: 'A♦', name: 'Diogenes — the sage who entered history', suits: '♦ and ♠' },
    { mark: 'Q♦', name: 'The Girl with the Jars — priestess of Demeter', suits: '♦ and ♥' },
    { mark: 'Q♣', name: 'Jacques de Molay — the last Grand Master, a legend of history', suits: '♣ and ♠' },
    { mark: '8♣', name: 'The Eighth Day of Rosenkreutz’s Wedding — secret knowledge', suits: '♣ and ♦' },
    { mark: '8♠', name: 'Shakespeare’s Eighth Sonnet — the author’s secret', suits: '♠ and ♦' },
    { mark: 'K♠', name: 'The Secret History of the Mongols — the Great Khan as Grand Master', suits: '♠ and ♣' },
  ],
};

const magisterDetailsBe: PlayWayDetails = {
  toggle: 'Падрабязней',
  toggleClose: 'Згарнуць',
  headline: '«Магістр» (2 і больш гульцоў)',
  paragraphs: [
    'Кожнаму гульцу здаецца па 8 закрытых карт. У цэнтр стала кладзецца адна карта з калоды. За ход гулец кладзе на яе карту таго ж рангу ці той жа масці.',
    'Але восем герояў калоды жывуць адразу ў двух светах. Гэта карты Магістра: яны падыходзяць да карт абедзвюх сваіх масцей, бо звязаныя з іншым светам не колерам, а гісторыяй. Заўважыць такую сувязь можа толькі той, хто ведае сюжэты карт. Перамагае той, хто першым пазбавіцца ад усіх сваіх карт.',
  ],
  conditionsTitle: 'Умовы',
  conditions: [
    'Калі ў гульца няма падыходнай карты, ён бярэ адну з калоды. Калі і яна не падыходзіць, гулец прапускае ход.',
    'Джокер можа стаць любой картай: гулец сам прызначае яго масць і ранг.',
    'Калі калода заканчваецца, згуляныя карты тасуюцца і зноў становяцца калодай.',
    'Карту Магістра можна пакласці на карту любой з двух яе масцей, а на яе можна пакласці карту любой з двух яе масцей.',
  ],
  bridgesTitle: 'Карты Магістра і іх другія светы',
  bridges: [
    { mark: '10♥', name: 'Персефона — гаспадыня містэрый', suits: '♥ і ♦' },
    { mark: 'A♥', name: 'Зеўс і Мнемазіна — маці муз, апякунак творцаў', suits: '♥ і ♠' },
    { mark: 'A♦', name: 'Дыяген — мудрэц, які ўвайшоў у гісторыю', suits: '♦ і ♠' },
    { mark: 'Q♦', name: 'Дзяўчына з збанамі — жрыца Дземетры', suits: '♦ і ♥' },
    { mark: 'Q♣', name: 'Жак дэ Моле — апошні Вялікі Магістр, легенда гісторыі', suits: '♣ і ♠' },
    { mark: '8♣', name: 'Восьмы дзень вяселля Розенкрайца — таемнае веданне', suits: '♣ і ♦' },
    { mark: '8♠', name: 'Восьмы санет Шэкспіра — тайна аўтара', suits: '♠ і ♦' },
    { mark: 'K♠', name: 'Таемная гісторыя манголаў — Вялікі хан, як Вялікі Магістр', suits: '♠ і ♣' },
  ],
};

const magisterDetailsZh: PlayWayDetails = {
  toggle: '了解详情',
  toggleClose: '收起',
  headline: '「Magister」（2 人及以上）',
  paragraphs: [
    '每位玩家发 8 张暗牌。从牌堆翻一张放到桌中央。轮到你时，打出与之同点数或同花色的牌压上。',
    '但牌组中有八位英雄同时生活在两个世界。这些是 Magister 牌：它们可匹配自己的两种花色，因为与另一个世界相连的不是颜色，而是故事。只有熟悉牌面情节的人才能看出这层联系。最先出完手牌者获胜。',
  ],
  conditionsTitle: '细则',
  conditions: [
    '若没有可出的牌，从牌堆摸一张；若仍无法打出，则跳过本回合。',
    '小丑牌可当作任意牌：由玩家自行指定花色与点数。',
    '牌堆用尽时，将已打出的牌洗混，重新作为牌堆。',
    'Magister 牌可打在其两种花色中的任意一种上；同样，这两种花色中的任意牌也可压在它上面。',
  ],
  bridgesTitle: 'Magister 牌及其第二世界',
  bridges: [
    { mark: '10♥', name: '珀耳塞福涅 — 秘仪女主人', suits: '♥ 与 ♦' },
    { mark: 'A♥', name: '宙斯与谟涅摩叙涅 — 缪斯之母、创作者的庇护者', suits: '♥ 与 ♠' },
    { mark: 'A♦', name: '第欧根尼 — 载入史册的智者', suits: '♦ 与 ♠' },
    { mark: 'Q♦', name: '持罐少女 — 得墨忒耳的女祭司', suits: '♦ 与 ♥' },
    { mark: 'Q♣', name: '雅克·德·莫莱 — 末任大宗师，历史传奇', suits: '♣ 与 ♠' },
    { mark: '8♣', name: '罗森克鲁兹婚礼第八日 — 隐秘之知', suits: '♣ 与 ♦' },
    { mark: '8♠', name: '莎士比亚第 8 首十四行诗 — 作者之谜', suits: '♠ 与 ♦' },
    { mark: 'K♠', name: '蒙古秘史 — 大汗有如大宗师', suits: '♠ 与 ♣' },
  ],
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
        body: 'Правило простое: кладите карту того же ранга или масти. Но восемь карт Магистра живут сразу в двух мирах и открывают неожиданные ходы. Избавьтесь первым от всех карт — и вы… Магистр!',
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
        body: 'The rule is simple: play a card of the same rank or suit. But eight Magister cards live in two worlds at once and open unexpected moves. Be first to empty your hand — and you are… the Magister!',
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
        body: 'Правіла простае: кладзіце карту таго ж рангу ці масці. Але восем карт Магістра жывуць адразу ў двух светах і адкрываюць нечаканыя хады. Пазбаўцеся першым ад усіх карт — і вы… Магістр!',
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
        body: '规则很简单：打出同点数或同花色的牌。但有八张 Magister 牌同时属于两个世界，会打开意想不到的走法。先出完手牌的人——就是 Magister！',
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
