import type { Lang } from './utils';

export type DeckIntroCopy = {
  title: string;
  paragraphs: string[];
  signoff: string;
};

export type HubDoorId = 'deck' | 'cards' | 'learn' | 'lore' | 'birthday' | 'oracle' | 'online' | 'buy';

export type HubDoorCopy = {
  title: string;
  blurb: string;
  detail: string[];
  cta: string;
};

/** Paragraph separator for `data-detail` on hub slides (not user-facing). */
export const HUB_DETAIL_SEP = '\u001e';

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
  hub_doors: Record<HubDoorId, HubDoorCopy>;
  deck_intro: DeckIntroCopy;
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
  nav_cards: 'The deck',
  nav_cards_blurb: 'Browse every face of the deck.',
  deck_intro: {
    title: 'MAGISTER',
    paragraphs: [
      'You see the cards. But do you see what is hidden in them?',
      'Each card holds its own riddle. Images, symbols, and details guard secrets that do not lie on the surface. There are no familiar suit marks or ranks here — they are hidden directly in the pictures.',
      'Some will see only pictures. Others — stories and symbols. Only those who decipher the hidden language of the cards can master the game.',
      'The cards do not reveal their secrets to everyone. To become a Magister, you must understand them.',
    ],
    signoff: 'Dr. Klein’s author deck',
  },
  hub_doors: {
    deck: {
      title: 'MAGISTER',
      blurb: 'The hidden language of the cards. Dr. Klein’s author deck.',
      detail: [],
      cta: 'Discover',
    },
    cards: {
      title: 'The deck',
      blurb: '54 cards. 54 stories of their own.',
      detail: [
        'The full MAGISTER deck is before you. Study the images, notice the details, and uncover the story hidden in each card.',
        'Learn what lies behind the pictures and symbols, and try to decipher the language of the deck.',
      ],
      cta: 'Open the deck',
    },
    lore: {
      title: 'Initiation',
      blurb: 'Look closely. Seek what is hidden. Solve the cards.',
      detail: [
        'Every card holds more than meets the eye.',
        'Answer questions about characters, scenes, and details in the art. Test your observation and gradually uncover the deck’s hidden meanings.',
        'How deeply can you look?',
      ],
      cta: 'Begin',
    },
    learn: {
      title: 'The Four Worlds',
      blurb: 'Four suits. Four worlds. Learn the language of the deck.',
      detail: [
        'Behind each MAGISTER suit lies its own world — with its heroes, stories, and symbols.',
        'Meet the characters of the four worlds, see how the deck is built, and learn to read suits and ranks from the pictures alone.',
        'Can you learn to read the cards without familiar marks?',
      ],
      cta: 'Explore',
    },
    birthday: {
      title: 'Birthday Card',
      blurb: 'Find which card belongs to your birthday.',
      detail: [
        'Enter your birth date and find the card linked to that day.',
        'Open its image, discover its story and symbols. You may find something meant for you alone.',
      ],
      cta: 'Find your card',
    },
    oracle: {
      title: 'Ask the Magister',
      blurb: 'Question about a card? Ask the Magister.',
      detail: [
        'Not every secret opens at first glance.',
        'Ask the Magister about a character, a scene, or hidden symbols. Get a hint and continue your own journey through the cards.',
      ],
      cta: 'Ask',
    },
    online: {
      title: 'Play online',
      blurb: 'Gather friends. Open a table. Play together.',
      detail: [
        'MAGISTER is richer when explored together.',
        'Invite friends, create a table, and see who has mastered the hidden language of the cards.',
      ],
      cta: 'Soon',
    },
    buy: {
      title: 'Physical deck',
      blurb: '54 original paintings. One uncommon deck.',
      detail: [
        'Discover MAGISTER beyond the screen.',
        'Dr. Klein’s physical deck is 54 original images where suits, ranks, and stories are all concealed.',
        'Study every detail, uncover new meanings, and play with friends.',
      ],
      cta: 'Order the deck',
    },
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
  nav_cards: 'Колода',
  nav_cards_blurb: 'Листайте все карты колоды.',
  deck_intro: {
    title: 'МАГИСТР',
    paragraphs: [
      'Ты видишь карты. Но видишь ли ты то, что скрыто в них?',
      'В каждой карте — своя загадка. Образы, символы и детали хранят секреты, которые не лежат на поверхности. Здесь нет привычных обозначений мастей и рангов — они спрятаны непосредственно в изображениях.',
      'Одни увидят картины. Другие — истории и символы. И только тот, кто сумеет разгадать скрытый язык карт, сможет овладеть игрой.',
      'Карты открывают свои тайны не каждому. Чтобы стать Магистром, их нужно понять.',
    ],
    signoff: 'Авторская колода Dr. Klein',
  },
  hub_doors: {
    deck: {
      title: 'МАГИСТР',
      blurb: 'Скрытый язык карт. Авторская колода Dr. Klein.',
      detail: [],
      cta: 'Познакомиться',
    },
    cards: {
      title: 'Колода',
      blurb: '54 карты. 54 самостоятельные истории.',
      detail: [
        'Перед тобой вся колода MAGISTER. Рассматривай изображения, изучай детали и открывай истории, скрытые в каждой карте.',
        'Узнай, что стоит за образами и символами, и попробуй разгадать язык колоды.',
      ],
      cta: 'Открыть колоду',
    },
    lore: {
      title: 'Посвящение',
      blurb: 'Внимательно смотри. Ищи скрытое. Разгадывай карты.',
      detail: [
        'Каждая карта хранит больше, чем кажется на первый взгляд.',
        'Отвечай на вопросы о персонажах, сюжетах и деталях изображений. Проверяй свою наблюдательность и постепенно открывай скрытые смыслы колоды.',
        'Насколько глубоко ты умеешь смотреть?',
      ],
      cta: 'Начать',
    },
    learn: {
      title: 'Четыре мира',
      blurb: 'Четыре масти. Четыре мира. Изучи язык колоды.',
      detail: [
        'За каждой мастью MAGISTER стоит свой мир, со своими героями, историями и символами.',
        'Познакомься с персонажами четырёх миров, узнай, как устроена колода, и научись определять масти и ранги по изображениям.',
        'Сможешь ли ты научиться читать карты без привычных обозначений?',
      ],
      cta: 'Исследовать',
    },
    birthday: {
      title: 'Карта рождения',
      blurb: 'Узнай, какая карта принадлежит твоему дню рождения.',
      detail: [
        'Введи дату рождения и найди карту, связанную с этим днём.',
        'Открой её изображение, познакомься с историей и символами. Возможно, ты обнаружишь в ней что-то особенное для себя.',
      ],
      cta: 'Найти свою карту',
    },
    oracle: {
      title: 'Вопрос Магистру',
      blurb: 'Есть вопрос о карте? Спроси Магистра.',
      detail: [
        'Не все тайны открываются с первого взгляда.',
        'Задай Магистру вопрос о персонаже, сюжете или скрытых символах. Получи подсказку и продолжи собственное исследование карт.',
      ],
      cta: 'Спросить',
    },
    online: {
      title: 'Игра онлайн',
      blurb: 'Собери друзей. Открой игровой стол. Играй вместе.',
      detail: [
        'MAGISTER интереснее исследовать вместе.',
        'Приглашай друзей, создавай игровой стол и проверьте, кто лучше освоил скрытый язык карт.',
      ],
      cta: 'Скоро',
    },
    buy: {
      title: 'Физическая колода',
      blurb: '54 авторские картины. Одна необычная колода.',
      detail: [
        'Открой мир MAGISTER за пределами экрана.',
        'Физическая колода Dr. Klein — это 54 оригинальных изображения, в которых скрыты масти, ранги и истории.',
        'Рассматривай каждую деталь, открывай новые смыслы и играй с друзьями.',
      ],
      cta: 'Заказать колоду',
    },
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
  nav_cards: 'Калода',
  nav_cards_blurb: 'Гартайце ўсе карты калоды.',
  deck_intro: {
    title: 'МАГІСТР',
    paragraphs: [
      'Ты бачыш карты. Але ці бачыш ты тое, што схавана ў іх?',
      'У кожнай карце — свая загадка. Вобразы, сімвалы і дэталі захоўваюць сакрэты, якія не ляжаць на паверхні. Тут няма звычайных абазначэнняў мастоў і рангаў — яны схаваны непасрэдна ў выявах.',
      'Адні ўбачаць карціны. Іншыя — гісторыі і сімвалы. І толькі той, хто зможа разгадаць схаваную мову карт, авалодае гульнёй.',
      'Карты адкрываюць свае тайны не кожнаму. Каб стаць Магістрам, іх трэба зразумець.',
    ],
    signoff: 'Аўтарская калода Dr. Klein',
  },
  hub_doors: {
    deck: {
      title: 'МАГІСТР',
      blurb: 'Схаваная мова карт. Аўтарская калода Dr. Klein.',
      detail: [],
      cta: 'Пазнаёміцца',
    },
    cards: {
      title: 'Калода',
      blurb: '54 карты. 54 самастойныя гісторыі.',
      detail: [
        'Перад табой уся калода MAGISTER. Разглядай выявы, вывучай дэталі і адкрывай гісторыі, схаваныя ў кожнай карце.',
        'Даведайся, што стаіць за вобразамі і сімваламі, і паспрабуй разгадаць мову калоды.',
      ],
      cta: 'Адкрыць калоду',
    },
    lore: {
      title: 'Пасвячэнне',
      blurb: 'Уважліва глядзі. Шукай схаванае. Разгадай карты.',
      detail: [
        'Кожная карта захоўвае больш, чым здаецца на першы погляд.',
        'Адказвай на пытанні пра персанажаў, сюжэты і дэталі выяў. Правярай сваю назіральнасць і паступова адкрывай схаваныя сэнсы калоды.',
        'Наколькі глыбока ты ўмееш глядзець?',
      ],
      cta: 'Пачаць',
    },
    learn: {
      title: 'Чатыры светы',
      blurb: 'Чатыры масті. Чатыры светы. Вывучы мову калоды.',
      detail: [
        'За кожнай мастцю MAGISTER стаіць свой свет — са сваімі героямі, гісторыямі і сімваламі.',
        'Пазнаёмся з персанажамі чатырох светаў, даведайся, як улаштавана калода, і навучыся вызначаць масті і рангі па выявах.',
        'Ці зможаш ты навучыцца чытаць карты без звычайных абазначэнняў?',
      ],
      cta: 'Даследваць',
    },
    birthday: {
      title: 'Карта нараджэння',
      blurb: 'Даведайся, якая карта належыць тваему дню нараджэння.',
      detail: [
        'Увядзі дату нараджэння і знайдзі карту, звязаную з гэтым днём.',
        'Адкрый яе выяву, пазнаёмся з гісторыяй і сімваламі. Магчыма, ты знойдзеш у ёй нешта асаблівае для сябе.',
      ],
      cta: 'Знайсці сваю карту',
    },
    oracle: {
      title: 'Пытанне Магістру',
      blurb: 'Ёсць пытанне пра карту? Спытаць Магістра.',
      detail: [
        'Не ўсе тайны адкрываюцца з першага погляду.',
        'Задай Магістру пытанне пра персанажа, сюжэт або схаваныя сімвалы. Атрымай падказку і працягні ўласнае даследаванне карт.',
      ],
      cta: 'Спытаць',
    },
    online: {
      title: 'Гульня анлайн',
      blurb: 'Сабяры сяброў. Адкрый гульнявы стол. Гуляйце разам.',
      detail: [
        'MAGISTER цікавей даследаваць разам.',
        'Запрашай сяброў, стварай гульнявы стол і праверце, хто лепш авалодзе схаванай мовай карт.',
      ],
      cta: 'Хутка',
    },
    buy: {
      title: 'Фізічная калода',
      blurb: '54 аўтарскія карціны. Адна незвычайная калода.',
      detail: [
        'Адкрый свет MAGISTER за межамі экрана.',
        'Фізічная калода Dr. Klein — гэта 54 арыгінальныя выявы, у якіх схаваны масті, рангі і гісторыі.',
        'Разглядай кожную дэталь, адкрывай новыя сэнсы і гуляй з сябрамі.',
      ],
      cta: 'Замовіць калоду',
    },
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
  nav_cards: '牌组',
  nav_cards_blurb: '浏览牌组每一张牌。',
  deck_intro: {
    title: 'MAGISTER',
    paragraphs: [
      '你看见卡牌。但你是否看见其中隐藏的东西？',
      '每一张牌都有自己的谜。形象、符号与细节守护着不浮于表面的秘密。这里没有惯常的花色与点数——它们就藏在画面里。',
      '有人只会看见画面。有人会看见故事与符号。唯有能破译卡牌隐秘语言的人，才能驾驭这场游戏。',
      '卡牌不会向所有人敞开秘密。要成为 Magister，必须先理解它们。',
    ],
    signoff: 'Dr. Klein 亲笔牌组',
  },
  hub_doors: {
    deck: {
      title: 'MAGISTER',
      blurb: '卡牌的隐秘语言。Dr. Klein 亲笔牌组。',
      detail: [],
      cta: '了解',
    },
    cards: {
      title: '牌组',
      blurb: '54 张牌。54 个独立故事。',
      detail: [
        '完整的 MAGISTER 牌组就在眼前。细观画面、琢磨细节，揭开每张牌里隐藏的故事。',
        '弄清形象与符号背后的意义，试着破译这副牌的语言。',
      ],
      cta: '打开牌组',
    },
    lore: {
      title: '授礼',
      blurb: '仔细看。寻找隐藏之物。解开盘上的谜。',
      detail: [
        '每张牌所藏不止一眼所见。',
        '回答关于人物、情节与画面细节的问题。检验观察力，逐步揭开牌组的隐秘含义。',
        '你能看得多深？',
      ],
      cta: '开始',
    },
    learn: {
      title: '四个世界',
      blurb: '四种花色。四个世界。学习牌组的语言。',
      detail: [
        'MAGISTER 的每种花色背后都是一个世界——各有英雄、故事与符号。',
        '认识四界人物，了解牌组结构，学会仅凭画面辨认花色与点数。',
        '你能否在没有惯常标记的情况下读懂卡牌？',
      ],
      cta: '探索',
    },
    birthday: {
      title: '生日牌',
      blurb: '找出属于你生日的那张牌。',
      detail: [
        '输入生日，找到与那一天相连的牌。',
        '打开画面，了解它的故事与符号。也许你会在其中发现只属于自己的意义。',
      ],
      cta: '找到你的牌',
    },
    oracle: {
      title: '问 Magister',
      blurb: '关于某张牌有疑问？问 Magister。',
      detail: [
        '并非每个秘密一眼就能看见。',
        '向 Magister 询问人物、情节或隐秘符号。获取提示，继续你自己的探索。',
      ],
      cta: '提问',
    },
    online: {
      title: '在线对局',
      blurb: '召集朋友。开一张牌桌。一起游玩。',
      detail: [
        'MAGISTER 一起探索更有趣。',
        '邀请朋友、创建牌桌，看看谁更懂卡牌的隐秘语言。',
      ],
      cta: '即将推出',
    },
    buy: {
      title: '实体牌组',
      blurb: '54 幅原创画作。一副不寻常的牌。',
      detail: [
        '在屏幕之外走进 MAGISTER。',
        'Dr. Klein 实体牌组包含 54 幅原创画面，花色、点数与故事皆隐藏其中。',
        '细看每一处细节，发现新的含义，与朋友同玩。',
      ],
      cta: '订购牌组',
    },
  },
  lang_label: '语言',
  site: '网站',
};

export const appCopy: Record<Lang, AppCopy> = { en, ru, be, zh };
