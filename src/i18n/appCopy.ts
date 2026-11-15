import type { Lang } from './utils';

export type HubDoorId = 'cards' | 'learn' | 'lore' | 'birthday' | 'oracle' | 'online' | 'buy';

export type AppCopy = {
  meta_title: string;
  meta_description: string;
  boot_cue: string;
  welcome: string;
  welcome_lead: string;
  enter: string;
  age_title: string;
  age_body: string;
  age_confirm: string;
  age_deny: string;
  age_blocked: string;
  hub_kicker: string;
  hub_lead: string;
  footer_more: string;
  cta_open: string;
  cta_play: string;
  cta_start: string;
  cta_find: string;
  cta_ask: string;
  cta_soon: string;
  cta_buy: string;
  prev: string;
  next_slide: string;
  back: string;
  lock_title: string;
  lock_body: string;
  lock_cta: string;
  soon_title: string;
  soon_body: string;
  online_title: string;
  online_blurb: string;
  online_stub_title: string;
  online_stub_body: string;
  next_title: string;
  next_blurb: string;
  buy_title: string;
  buy_blurb: string;
  buy_cta: string;
  buy_back: string;
  nav_cards: string;
  nav_cards_blurb: string;
  hub_blurbs: Record<HubDoorId, string>;
  lang_label: string;
  site: string;
};

const en: AppCopy = {
  meta_title: 'Magister — Play',
  meta_description: 'Enter the Magister deck: explore the cards, play the Four Worlds, and open what comes next.',
  boot_cue: 'Shuffling the deck…',
  welcome: 'Welcome to Magister cards',
  welcome_lead: 'Four worlds. Fifty-four stories. One hall.',
  enter: 'Enter the hall',
  age_title: 'Are you 14 or older?',
  age_body: 'Magister is for players aged 14 and up. Confirm your age to enter the hall.',
  age_confirm: 'I am 14+',
  age_deny: 'I am under 14',
  age_blocked: 'Come back when you are 14.',
  hub_kicker: 'Choose your path',
  hub_lead: 'Explore the cards. Discover their stories. Test what you know.',
  footer_more: 'Learn more',
  cta_open: 'Open',
  cta_play: 'Play',
  cta_start: 'Begin',
  cta_find: 'Discover',
  cta_ask: 'Ask',
  cta_soon: 'Soon',
  cta_buy: 'Buy',
  prev: 'Previous',
  next_slide: 'Next',
  back: 'Back',
  lock_title: 'Still closed',
  lock_body: 'Complete The Four Worlds to open this path.',
  lock_cta: 'Play The Four Worlds',
  soon_title: 'Coming soon',
  soon_body: 'The next game is being prepared. The hall will open it when it is ready.',
  online_title: 'Play online',
  online_blurb: 'Create a table, share a link, play Magister together.',
  online_stub_title: 'Tables are almost ready',
  online_stub_body:
    'Soon you will create a room, send a link, and play Magister with others. For now the hall holds this door open as a promise.',
  next_title: 'Next game',
  next_blurb: 'A new path is sealed for now.',
  buy_title: 'Physical deck',
  buy_blurb: '54 paintings. Four worlds. In your hands.',
  buy_cta: 'Buy the deck',
  buy_back: 'Back to the hall',
  nav_cards: 'Card Navigator',
  nav_cards_blurb: 'Browse every face of the deck.',
  hub_blurbs: {
    cards: 'All fifty-four faces. One deck.',
    learn: 'Four suits — learn to read every scene.',
    lore: 'Scene to symbol. How deep do you look?',
    birthday: 'Your birth date reveals your card.',
    oracle: 'When you need a hint — ask the Magister.',
    online: 'A table, a link, play together.',
    buy: 'Fifty-four paintings in your hands.',
  },
  lang_label: 'Language',
  site: 'Site',
};

const ru: AppCopy = {
  meta_title: 'Magister — Играть',
  meta_description: 'Войдите в колоду Магистр: навигатор карт, Четыре мира и то, что откроется после.',
  boot_cue: 'Тасуем колоду…',
  welcome: 'Добро пожаловать в карты Магистр',
  welcome_lead: 'Четыре мира. Пятьдесят четыре истории. Один зал.',
  enter: 'Войти в зал',
  age_title: 'Вам уже есть 14 лет?',
  age_body: 'Magister — для игроков от 14 лет. Подтвердите возраст, чтобы войти в зал.',
  age_confirm: 'Мне есть 14+',
  age_deny: 'Мне нет 14',
  age_blocked: 'Возвращайтесь, когда вам исполнится 14.',
  hub_kicker: 'Выберите путь',
  hub_lead: 'Изучайте карты. Открывайте их истории. Проверьте, что вы знаете.',
  footer_more: 'Узнать больше',
  cta_open: 'Открыть',
  cta_play: 'Играть',
  cta_start: 'Начать',
  cta_find: 'Узнать',
  cta_ask: 'Спросить',
  cta_soon: 'Скоро',
  cta_buy: 'Купить',
  prev: 'Назад',
  next_slide: 'Дальше',
  back: 'Назад',
  lock_title: 'Ещё закрыто',
  lock_body: 'Пройдите «Четыре мира», чтобы открыть этот путь.',
  lock_cta: 'Играть в Четыре мира',
  soon_title: 'Скоро',
  soon_body: 'Следующая игра готовится. Зал откроет её, когда всё будет готово.',
  online_title: 'Игра онлайн',
  online_blurb: 'Создайте стол, скиньте ссылку и играйте в Магистр вместе.',
  online_stub_title: 'Столы почти готовы',
  online_stub_body:
    'Скоро здесь можно будет создать комнату, отправить ссылку и сыграть в Магистр с другими. Пока эта дверь — обещание.',
  next_title: 'Следующая игра',
  next_blurb: 'Новый путь пока запечатан.',
  buy_title: 'Физическая колода',
  buy_blurb: '54 картины. Четыре мира. В ваших руках.',
  buy_cta: 'Купить колоду',
  buy_back: 'В зал',
  nav_cards: 'Навигатор карт',
  nav_cards_blurb: 'Листайте все лица колоды.',
  hub_blurbs: {
    cards: 'Все 54 карты. Одна колода.',
    learn: 'Четыре масти — учитесь читать сюжет.',
    lore: 'От сюжета к символу. Насколько глубоко смотрите?',
    birthday: 'Дата рождения открывает вашу карту.',
    oracle: 'Нужна подсказка — спросите Магистра.',
    online: 'Стол, ссылка, игра вместе.',
    buy: '54 картины — в ваших руках.',
  },
  lang_label: 'Язык',
  site: 'Сайт',
};

const be: AppCopy = {
  meta_title: 'Magister — Гуляць',
  meta_description: 'Увайдзіце ў калоду Магістр: навігатар карт, Чатыры светы і тое, што адкрыецца пасля.',
  boot_cue: 'Тасуем калоду…',
  welcome: 'Сардэчна запрашаем у карты Магістр',
  welcome_lead: 'Чатыры светы. Пяцьдзясят чатыры гісторыі. Адна зала.',
  enter: 'Увайсці ў залу',
  age_title: 'Вам ужо ёсць 14 гадоў?',
  age_body: 'Magister — для гульцоў ад 14 гадоў. Пацвердзіце ўзрост, каб увайсці ў залу.',
  age_confirm: 'Мне ёсць 14+',
  age_deny: 'Мне няма 14',
  age_blocked: 'Вярніцеся, калі вам споўніцца 14.',
  hub_kicker: 'Абярыце шлях',
  hub_lead: 'Даследуйце карты. Адкрывайце іх гісторыі. Праверце, што вы ведаеце.',
  footer_more: 'Даведацца больш',
  cta_open: 'Адкрыць',
  cta_play: 'Гуляць',
  cta_start: 'Пачаць',
  cta_find: 'Даведацца',
  cta_ask: 'Спытаць',
  cta_soon: 'Хутка',
  cta_buy: 'Купіць',
  prev: 'Назад',
  next_slide: 'Далей',
  back: 'Назад',
  lock_title: 'Яшчэ закрыта',
  lock_body: 'Прайдзіце «Чатыры светы», каб адкрыць гэты шлях.',
  lock_cta: 'Гуляць у Чатыры светы',
  soon_title: 'Хутка',
  soon_body: 'Наступная гульня рыхтуецца. Зала адкрые яе, калі ўсё будзе гатова.',
  online_title: 'Гульня анлайн',
  online_blurb: 'Стварыце стол, дашліце спасылку і гуляйце ў Магістр разам.',
  online_stub_title: 'Сталы амаль гатовыя',
  online_stub_body:
    'Хутка тут можна будзе стварыць пакой, даслаць спасылку і згуляць у Магістр з іншымі. Пакуль гэтыя дзверы — абяцанне.',
  next_title: 'Наступная гульня',
  next_blurb: 'Новы шлях пакуль запячатаны.',
  buy_title: 'Фізічная калода',
  buy_blurb: '54 карціны. Чатыры светы. У вашых руках.',
  buy_cta: 'Купіць калоду',
  buy_back: 'У залу',
  nav_cards: 'Навігатар карт',
  nav_cards_blurb: 'Гартайце ўсе твары калоды.',
  hub_blurbs: {
    cards: 'Усе 54 карты. Адна калода.',
    learn: 'Чатыры масці — вучыцеся чытаць сюжэт.',
    lore: 'Ад сюжэта да сімвала. Наколькі глыбока глядзіце?',
    birthday: 'Дата нараджэння адкрывае вашу карту.',
    oracle: 'Патрэбная падказка — спытайце Магістра.',
    online: 'Стол, спасылка, гульня разам.',
    buy: '54 карціны — у вашых руках.',
  },
  lang_label: 'Мова',
  site: 'Сайт',
};

const zh: AppCopy = {
  meta_title: 'Magister — 游玩',
  meta_description: '进入 Magister 牌组：浏览卡牌、游玩四个世界，并解锁此后之路。',
  boot_cue: '正在洗牌…',
  welcome: '欢迎来到 Magister 卡牌',
  welcome_lead: '四个世界。五十四个故事。一座厅堂。',
  enter: '进入厅堂',
  age_title: '你已满 14 岁吗？',
  age_body: 'Magister 面向 14 岁及以上玩家。请确认年龄后再进入厅堂。',
  age_confirm: '我已满 14+',
  age_deny: '我未满 14',
  age_blocked: '满 14 岁后再来吧。',
  hub_kicker: '选择道路',
  hub_lead: '浏览卡牌。发现它们的故事。检验你所知。',
  footer_more: '了解更多',
  cta_open: '打开',
  cta_play: '游玩',
  cta_start: '开始',
  cta_find: '发现',
  cta_ask: '询问',
  cta_soon: '即将',
  cta_buy: '购买',
  prev: '上一张',
  next_slide: '下一张',
  back: '返回',
  lock_title: '尚未开启',
  lock_body: '完成「四个世界」以开启此路。',
  lock_cta: '游玩四个世界',
  soon_title: '即将到来',
  soon_body: '下一款游戏正在筹备。厅堂会在准备就绪时打开它。',
  online_title: '在线对局',
  online_blurb: '创建牌桌、分享链接，一起游玩 Magister。',
  online_stub_title: '牌桌即将就绪',
  online_stub_body: '很快你可以创建房间、发送链接，与他人游玩 Magister。此刻这扇门是一份承诺。',
  next_title: '下一款游戏',
  next_blurb: '新的道路暂时封印。',
  buy_title: '实体牌组',
  buy_blurb: '54 幅画。四个世界。握在手中。',
  buy_cta: '购买牌组',
  buy_back: '返回厅堂',
  nav_cards: '卡牌导航',
  nav_cards_blurb: '浏览牌组每一张面孔。',
  hub_blurbs: {
    cards: '五十四张牌，一副牌组。',
    learn: '四种花色——学会读懂每一幕。',
    lore: '从画面到符号。你看得多深？',
    birthday: '生日揭示属于你的牌。',
    oracle: '需要提示——问 Magister。',
    online: '牌桌、链接，一起游玩。',
    buy: '五十四幅画，握在手中。',
  },
  lang_label: '语言',
  site: '网站',
};

export const appCopy: Record<Lang, AppCopy> = { en, ru, be, zh };
