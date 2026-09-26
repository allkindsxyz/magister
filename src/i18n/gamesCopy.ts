export type SuitName = 'hearts' | 'diamonds' | 'clubs' | 'spades';

export type GamesCopy = {
  kicker: string;
  title: string;
  lead: string;
  cta: string;
  back: string;
  confirm: string;
  next: string;
  retry: string;
  card_alt: string;
  zoom: string;
  zoom_close: string;
  menu: {
    learn_title: string;
    learn_blurb: string;
    birth_title: string;
    birth_blurb: string;
    birth_lock: string;
    destiny_title: string;
    destiny_blurb: string;
    destiny_lock: string;
  };
  learn: {
    threshold: string;
    enter: string;
    worlds_lead: string;
    worlds_meet: string;
    play: string;
    know: Record<'hearts' | 'diamonds' | 'clubs' | 'spades', string>;
    continue: string;
    study_more: string;
    read_story: string;
    fold_story: string;
    who: string;
    seen: string[];
    missed: string[];
    count_pip_title: string;
    count_pip_body: string;
    count_pip_zoom: string;
    count_pip_zoom_touch: string;
    count_court_title: string;
    count_court_body: string;
    first_reading: string;
    second_reading: string;
    pip_ask: string;
    court_ask: string;
    last_reading: string;
    patient: string;
    not_quite: string;
    look_again: string;
    spread_kicker: string;
    spread_learned: string;
    spread_body: string;
    spread_best: string;
    spread_begin: string;
    candle_choice: string;
    keep_spread: string;
    start_over: string;
    other_world: string;
    reading_done: string;
    save_record: string;
    not_now: string;
    record: string;
    laid: string;
    candle_out: string;
    result_line: string;
    guessed: string;
    errors: string;
    time_up: string;
    result_done: string;
    result_true: string;
    result_tally: string;
    board_ready: string;
    board_need: string;
    place_kicker: string;
    place_no: string;
    place_of: string;
    chronicle: string;
    save_name: string;
    again_climb: string;
    open_chronicle: string;
    unlock_in_time: string;
    try_again: string;
    rank_stranger: string;
    rank_known: string;
    rank_initiate: string;
    rank_expert: string;
    again: string;
    name_label: string;
    name_placeholder: string;
    name_invalid: string;
    save: string;
    saved: string;
    kept: string;
    board_full: string;
    board_error: string;
    local_best: string;
    open_birthday: string;
    birthday_open: string;
  };
  birthday: {
    intro: string;
    month: string;
    day: string;
    show: string;
    another: string;
    open_destiny: string;
    joker_title: string;
    joker_body: string;
    missing: string;
    date_line: string;
    spheres: Record<SuitName, string>;
  };
  destiny: {
    title: string;
    prompt_label: string;
    prompt_placeholder: string;
    hold: string;
    hints: string[];
    shuffle: string;
    shuffling: string;
    draw: string;
    again: string;
    you_asked: string;
  };
  locked: {
    to_learn: string;
    to_birthday: string;
  };
  soon: {
    title: string;
    body: string;
  };
  board: {
    title: string;
    empty: string;
    name: string;
    errors: string;
    time: string;
  };
  ranks: Record<string, string>;
  /** Nominative labels for the month menu. */
  months: string[];
  /** Form used after the day number: “29 November”, “29 ноября”. */
  dateMonths: string[];
};

const en: GamesCopy = {
  kicker: 'Play',
  title: 'Enter the world of Magister.',
  lead: 'Three games. One deck.',
  cta: 'Play',
  back: 'Back',
  confirm: 'Got it',
  next: 'Next card',
  retry: 'Start this level again',
  card_alt: 'Card',
  zoom: 'Enlarge',
  zoom_close: 'Close',
  menu: {
    learn_title: 'The Four Worlds',
    learn_blurb: 'Four suits — four worlds. Study the cards inside each world, find the links between heroes and events, and open the hidden stories of Magister.',
    birth_title: 'Card of Destiny',
    birth_blurb: 'Every birthday has its card. Enter your date of birth and find the card that has followed you since the day you were born.',
    birth_lock: 'Opens if you lay the deck out in five minutes or less.',
    destiny_title: 'The Oracle',
    destiny_blurb: 'When the odds are even, ask the deck. Think of what troubles you. Draw one card. Let Magister answer.',
    destiny_lock: 'Opens after your birthday card.',
  },
  learn: {
    threshold:
      'The suits and the numbers of every card are not decoration. They are a code — written into four worlds of the Magister universe. Look at the faces before you. Learn to see them.',
    enter: 'Start',
    worlds_lead: 'Four suits — four worlds',
    worlds_meet: 'Each with its own heroes, stories, and symbols. Open them one by one.',
    play: 'Play',
    know: {
      hearts: 'Know the gods',
      diamonds: 'Know the bearers',
      clubs: 'Know the Templars',
      spades: 'Know the celebrities',
    },
    continue: 'Continue',
    study_more: 'Study more',
    read_story: "Read the card's full story",
    fold_story: 'Fold',
    who: 'Who stands before you?',
    seen: [
      'Yes. You are right.',
      'Go on.',
      'All true.',
    ],
    missed: [
      'Not this time.',
      'Look closer.',
      'Another face.',
    ],
    count_pip_title: 'Card ranks',
    count_pip_body: 'Count every figure on the card. Their number is its rank.',
    count_pip_zoom: 'Hover over the card to look at the details.',
    count_pip_zoom_touch: 'Tap the card to enlarge it.',
    count_court_title: 'Face cards',
    count_court_body: 'Ace, Jack, Queen, King — these are never a crowd. Each is one figure, known by face, not tallied. The sovereigns of each world are recognized, not counted.',
    first_reading: 'The first reading. Which world?',
    second_reading: 'The second reading. How many?',
    pip_ask: 'Which number is this?',
    court_ask: 'Which face is this?',
    last_reading: 'Read the whole card.',
    patient: 'One misstep is allowed. The worlds are patient — but only once.',
    not_quite: 'Not quite — this is {what}.',
    look_again: 'Look again from the start.',
    spread_kicker: 'The spread',
    spread_learned: 'Five minutes for the whole deck.',
    spread_body: 'Name every card: first the world, then the rank. A card cannot be skipped. A miss does not dismiss it. It costs time.',
    spread_best: 'The best result in the chronicle is {time}. Can you go faster?',
    spread_begin: 'Begin',
    candle_choice: 'The candle burned down.',
    keep_spread: 'Continue the spread',
    start_over: 'Start again',
    other_world: 'Another world',
    reading_done: 'Your reading is complete. Save it to the table?',
    save_record: 'Save to the record',
    not_now: 'Not now',
    record: 'The Record',
    laid: 'You opened every card. The next game is open.',
    candle_out: 'The candle burned down. {true} read true. Try the reading again?',
    result_line: '{time} · {true} of 52 read true',
    guessed: 'Guessed {true} of 52',
    errors: 'Errors: {errors}',
    time_up: 'Time is up',
    result_done: 'The spread is complete.',
    result_true: 'You read the deck true.',
    result_tally: '{true} of 52 · {errors} missed',
    board_ready: 'Five cards read true.',
    board_need: 'To reach the record, name five cards within five minutes.',
    place_kicker: 'Place in the chronicle',
    place_no: '№{place}',
    place_of: 'of {total}',
    chronicle: 'Enter your name in the chronicle',
    save_name: 'Save',
    again_climb: 'Play again — take a higher place',
    open_chronicle: 'Open the chronicle of records',
    unlock_in_time: 'To open the next game, finish within five minutes.',
    try_again: 'Try again',
    rank_stranger: 'Stranger',
    rank_known: 'Acquaintance',
    rank_initiate: 'Initiate',
    rank_expert: 'Expert',
    again: 'Lay it again — beat the record',
    name_label: 'Name on the record',
    name_placeholder: 'Your name',
    name_invalid: 'Use a name of up to 24 characters.',
    save: 'Save to the record',
    saved: 'The record holds your reading.',
    kept: 'An earlier time under this name was faster. That one stays.',
    board_full: 'The record is full of faster readings.',
    board_error: 'The record did not take this reading. The time stays on this device.',
    local_best: 'Your fastest reading on this device: {time}',
    open_birthday: 'Open the birthday card',
    birthday_open: 'The card of your birthday is open.',
  },
  birthday: {
    intro:
      'Camp’s calendar maps each day of the year to a playing card: 52 cards for 52 weeks, four suits for the four seasons, thirteen ranks for the thirteen lunar months. Ace counts as 1, jack 11, queen 12, king 13 — the deck sums to 364. 31 December is the Joker, the 365th day. The card below is Camp’s solar card for that day. The painting and the story are Magister’s.',
    month: 'Month',
    day: 'Day',
    show: 'Show my card',
    another: 'Another date',
    open_destiny: 'Card of destiny',
    joker_title: '31 December — the Joker',
    joker_body:
      'This is the day that brings the count to 365. Camp sets it between the Ace of Hearts and the King of Spades. Both paintings are open below.',
    missing: 'This day is the {rank} of {suit}. That painting is not in the deck yet.',
    date_line: '{date}',
    spheres: {
      hearts: 'Spring — feelings, relationships, love, family, childhood.',
      clubs: 'Summer — intellect, knowledge, conversation, study.',
      diamonds: 'Autumn — value, money, the material world, business.',
      spades: 'Winter — work, inner growth, trials, will, wisdom.',
    },
  },
  destiny: {
    title: 'Card of destiny',
    prompt_label: 'What do you want a hint about?',
    prompt_placeholder: 'One question. It stays on this page.',
    hold: 'Hold the question',
    hints: [
      'What do you want a hint about?',
      'Hold one question, not a list.',
      'Let the picture answer sideways.',
      'Don’t reach for the card yet.',
      'When the ring closes, shuffle.',
    ],
    shuffle: 'Shuffle',
    shuffling: 'Shuffling',
    draw: 'Draw a card',
    again: 'Ask again',
    you_asked: 'You asked',
  },
  locked: {
    to_learn: 'Learn the deck',
    to_birthday: 'Open the birthday card',
  },
  soon: {
    title: 'Magic in progress.',
    body: 'Stay tuned',
  },
  board: {
    title: 'Records',
    empty: 'The record is still empty.',
    name: 'Name',
    errors: 'Errors',
    time: 'Time',
  },
  ranks: {
    A: 'Ace',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    J: 'Jack',
    Q: 'Queen',
    K: 'King',
  },
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  dateMonths: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const ru: GamesCopy = {
  kicker: 'Игра',
  title: 'Войдите в мир Magister.',
  lead: 'Три игры. Одна колода.',
  cta: 'Играть',
  back: 'Назад',
  confirm: 'Понятно',
  next: 'Следующая карта',
  retry: 'Начать уровень заново',
  card_alt: 'Карта',
  zoom: 'Увеличить',
  zoom_close: 'Закрыть',
  menu: {
    learn_title: 'Четыре мира',
    learn_blurb: 'Четыре масти — четыре мира. Изучайте карты внутри каждого мира, находите связи между героями и событиями и открывайте скрытые истории Magister.',
    birth_title: 'Карта судьбы',
    birth_blurb: 'У каждого дня рождения есть своя карта. Введите дату и найдите карту, которая идёт за вами с самого рождения.',
    birth_lock: 'Откроется, если разложить колоду за пять минут или быстрее.',
    destiny_title: 'Оракул',
    destiny_blurb: 'Когда шансы равны, спросите колоду. Подумайте о том, что тревожит. Вытяните одну карту. Пусть Magister ответит.',
    destiny_lock: 'Откроется после карты рождения.',
  },
  learn: {
    threshold:
      'Масти и числа на картах — не украшение. Это код, вписанный в четыре мира вселенной Magister. Смотрите на лица перед вами. Учитесь их видеть.',
    enter: 'Начать',
    worlds_lead: 'Четыре масти — четыре мира',
    worlds_meet: 'Каждый со своими героями, историями и символами. Откройте их один за другим.',
    play: 'Играть',
    know: {
      hearts: 'Узнай богов',
      diamonds: 'Узнай носителей тайн',
      clubs: 'Узнай тамплиеров',
      spades: 'Узнай знаменитостей',
    },
    continue: 'Дальше',
    study_more: 'Изучить больше',
    read_story: 'Читать полную историю карты',
    fold_story: 'Свернуть',
    who: 'Кто стоит перед вами?',
    seen: [
      'Да, ты прав.',
      'Продолжай.',
      'Все верно.',
    ],
    missed: [
      'Не в этот раз.',
      'Присмотрись.',
      'Другое лицо.',
    ],
    count_pip_title: 'Номинал карт',
    count_pip_body: 'Сосчитай всех персонажей на карте. Их количество — её номинал.',
    count_pip_zoom: 'Наведи курсор на карту, чтобы рассмотреть детали.',
    count_pip_zoom_touch: 'Нажми на карту для увеличения.',
    count_court_title: 'Старшие карты',
    count_court_body: 'Туз, валет, дама, король — это никогда не толпа. Каждый один, и его узнают в лицо, а не пересчитывают. Государей каждого мира узнают, не считают.',
    first_reading: 'Первое чтение. Какой мир?',
    second_reading: 'Второе чтение. Сколько?',
    pip_ask: 'Какая это цифра?',
    court_ask: 'Какая это старшая карта?',
    last_reading: 'Прочтите карту целиком.',
    patient: 'Один неверный шаг позволен. Миры терпеливы — но лишь однажды.',
    not_quite: 'Не совсем — это {what}.',
    look_again: 'Смотрите снова, с начала.',
    spread_kicker: 'Расклад',
    spread_learned: 'Пять минут на всю колоду.',
    spread_body: 'Назовите каждую карту: сначала мир, затем номинал. Карту нельзя пропустить. Ошибка не отменяет её — она забирает время.',
    spread_best: 'Лучший результат в летописи — {time}. Успеешь быстрее?',
    spread_begin: 'Начать',
    candle_choice: 'Свеча догорела.',
    keep_spread: 'Продолжить расклад',
    start_over: 'Начать сначала',
    other_world: 'Другой мир',
    reading_done: 'Чтение завершено. Сохранить его на столе?',
    save_record: 'Сохранить в записи',
    not_now: 'Не сейчас',
    record: 'Запись',
    laid: 'Вы открыли все карты. Следующая игра открыта.',
    candle_out: 'Свеча догорела. Верно прочитано: {true}. Попробовать чтение снова?',
    result_line: '{time} · верно {true} из 52',
    guessed: 'Угадано {true} из 52',
    errors: 'Ошибок: {errors}',
    time_up: 'Время вышло',
    result_done: 'Расклад завершён.',
    result_true: 'Вы прочли колоду верно.',
    result_tally: '{true} из 52 · {errors} неверно',
    board_ready: 'Пять карт угаданы.',
    board_need: 'Чтобы попасть в запись, угадайте пять карт за пять минут.',
    place_kicker: 'Место в летописи',
    place_no: '№{place}',
    place_of: 'из {total}',
    chronicle: 'Внести имя в летопись',
    save_name: 'Сохранить',
    again_climb: 'Играть снова — занять место выше',
    open_chronicle: 'Открыть летопись рекордов',
    unlock_in_time: 'Чтобы открыть следующую игру, уложитесь в пять минут.',
    try_again: 'Попробовать снова',
    rank_stranger: 'Незнакомец',
    rank_known: 'Знакомый',
    rank_initiate: 'Посвящённый',
    rank_expert: 'Эксперт',
    again: 'Разложить снова — побить запись',
    name_label: 'Имя в записи',
    name_placeholder: 'Ваше имя',
    name_invalid: 'Имя — до 24 символов.',
    save: 'Сохранить в записи',
    saved: 'Запись хранит это чтение.',
    kept: 'Под этим именем уже есть более быстрое время. Оно и остаётся.',
    board_full: 'Запись заполнена более быстрыми чтениями.',
    board_error: 'Запись не приняла это чтение. Время остаётся на этом устройстве.',
    local_best: 'Ваше быстрейшее чтение на этом устройстве: {time}',
    open_birthday: 'Открыть карту рождения',
    birthday_open: 'Карта вашего рождения открыта.',
  },
  birthday: {
    intro:
      'Календарь Кэмпа связывает каждый день года с картой: 52 карты — 52 недели, четыре масти — четыре сезона, тринадцать рангов — тринадцать лунных месяцев. Туз считается за 1, валет за 11, дама за 12, король за 13: сумма колоды — 364. 31 декабря — джокер, 365-й день. Ниже — солнечная карта этого дня по Кэмпу. Картина и история — Magister.',
    month: 'Месяц',
    day: 'День',
    show: 'Показать карту',
    another: 'Другая дата',
    open_destiny: 'Карта судьбы',
    joker_title: '31 декабря — джокер',
    joker_body:
      'Этот день доводит счёт до 365. У Кэмпа он стоит между тузом червей и королём пик. Обе картины открыты ниже.',
    missing: 'Этот день — {rank} {suit}. Такой картины в колоде пока нет.',
    date_line: '{date}',
    spheres: {
      hearts: 'Весна — чувства, отношения, любовь, семья, детство.',
      clubs: 'Лето — интеллект, знание, разговор, учёба.',
      diamonds: 'Осень — ценность, деньги, материальный мир, дело.',
      spades: 'Зима — работа, внутренний рост, испытания, воля, мудрость.',
    },
  },
  destiny: {
    title: 'Карта судьбы',
    prompt_label: 'О чём вы хотите подсказку?',
    prompt_placeholder: 'Один вопрос. Он останется на этой странице.',
    hold: 'Держать вопрос',
    hints: [
      'О чём вы хотите подсказку?',
      'Один вопрос, не список.',
      'Пусть картина ответит сбоку.',
      'Пока не тяните карту.',
      'Когда кольцо закроется — шафл.',
    ],
    shuffle: 'Шафл',
    shuffling: 'Тасуем',
    draw: 'Вытянуть карту',
    again: 'Спросить снова',
    you_asked: 'Вы спросили',
  },
  locked: {
    to_learn: 'Узнать колоду',
    to_birthday: 'Открыть карту рождения',
  },
  soon: {
    title: 'Волшебство происходит,',
    body: 'игра скоро выйдет.',
  },
  board: {
    title: 'Рекорды',
    empty: 'Запись пока пуста.',
    name: 'Имя',
    errors: 'Ошибки',
    time: 'Время',
  },
  ranks: {
    A: 'Туз',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    J: 'Валет',
    Q: 'Дама',
    K: 'Король',
  },
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  dateMonths: [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ],
};

const zh: GamesCopy = {
  kicker: '试玩',
  title: '进入 Magister 的世界。',
  lead: '三场游戏。一副牌。',
  cta: '开始',
  back: '返回',
  confirm: '明白了',
  next: '下一张',
  retry: '重来这一关',
  card_alt: '牌',
  zoom: '放大',
  zoom_close: '关闭',
  menu: {
    learn_title: '四个世界',
    learn_blurb: '四种花色——四个世界。研究每个世界里的牌，找出英雄与事件之间的联系，打开 Magister 隐藏的故事。',
    birth_title: '命运之牌',
    birth_blurb: '每个生日都有自己的牌。输入出生日，找出从你出生那天起就跟着你的那一张。',
    birth_lock: '在五分钟内排完牌组后开启。',
    destiny_title: '神谕',
    destiny_blurb: '胜负难分时，去问这副牌。想着困扰你的事。抽一张。让 Magister 回答。',
    destiny_lock: '打开命运之牌之后开启。',
  },
  learn: {
    threshold: '每张牌上的花色与数字都不是装饰。它们是写进 Magister 四个世界里的密码。看着面前这些面孔。学会看见它们。',
    enter: '开始',
    worlds_lead: '四种花色——四个世界',
    worlds_meet: '每一种都有自己的英雄、故事和符号。一个一个地打开它们。',
    play: '开始玩',
    know: {
      hearts: '认识诸神',
      diamonds: '认识秘使',
      clubs: '认识圣殿骑士',
      spades: '认识名流',
    },
    continue: '继续',
    study_more: '再学一些',
    read_story: '阅读这张卡的完整故事',
    fold_story: '收起',
    who: '站在你面前的是谁？',
    seen: [
      '是的，你看对了。',
      '继续。',
      '完全正确。',
    ],
    missed: [
      '这一次不是。',
      '再看仔细。',
      '另一张面孔。',
    ],
    count_pip_title: '牌点',
    count_pip_body: '数清牌上的所有人物。人数就是点数。',
    count_pip_zoom: '把光标移到牌上，查看细节。',
    count_pip_zoom_touch: '点按这张牌来放大。',
    count_court_title: '人头牌',
    count_court_body: 'A、J、Q、K 从不是一群人。每一个都是单独的面孔，靠相认，不靠清点。每个世界的君主被认出，而不是被数出。',
    first_reading: '第一次阅读。哪个世界？',
    second_reading: '第二次阅读。多少？',
    pip_ask: '这是哪个点数？',
    court_ask: '这是哪张人头牌？',
    last_reading: '读完整张牌。',
    patient: '允许一步偏差。世界是耐心的——但只有一次。',
    not_quite: '还不完全——这是{what}。',
    look_again: '从头再看。',
    spread_kicker: '牌阵',
    spread_learned: '整副牌，五分钟。',
    spread_body: '说出每一张牌：先是世界，再是点数。牌不能跳过。猜错不会取消它，只会花掉时间。',
    spread_best: '编年中的最好成绩是 {time}。你能更快吗？',
    spread_begin: '开始',
    candle_choice: '蜡烛燃尽了。',
    keep_spread: '继续牌阵',
    start_over: '从头再来',
    other_world: '另一个世界',
    reading_done: '这次阅读完成了。把它留在桌上？',
    save_record: '记入记录',
    not_now: '现在不',
    record: '记录',
    laid: '你打开了全部的牌。下一场游戏已开启。',
    candle_out: '蜡烛燃尽了。读对了 {true}。再读一次？',
    result_line: '{time} · 52 张中读对 {true}',
    guessed: '已猜中 {true} / 52',
    errors: '错误：{errors}',
    time_up: '时间到了',
    result_done: '牌阵完成了。',
    result_true: '你读对了整副牌。',
    result_tally: '{true} / 52 · 错误 {errors}',
    board_ready: '已猜中五张。',
    board_need: '要进入记录，需在五分钟内猜中五张。',
    place_kicker: '编年中的名次',
    place_no: '第{place}',
    place_of: '共 {total}',
    chronicle: '把名字写入编年',
    save_name: '保存',
    again_climb: '再玩一次 — 占据更高的名次',
    open_chronicle: '打开纪录编年',
    unlock_in_time: '要打开下一场游戏，需在五分钟内完成。',
    try_again: '再试一次',
    rank_stranger: '陌生人',
    rank_known: '相识',
    rank_initiate: '入门者',
    rank_expert: '行家',
    again: '再摊一次 — 打破记录',
    name_label: '记录上的名字',
    name_placeholder: '你的名字',
    name_invalid: '名字不超过 24 个字符。',
    save: '记入记录',
    saved: '记录收下了这次阅读。',
    kept: '这个名字已有更快的时间，保留那一次。',
    board_full: '记录已满，都是更快的阅读。',
    board_error: '记录没有收下这次阅读。时间留在这台设备上。',
    local_best: '这台设备上最快的阅读：{time}',
    open_birthday: '打开生日牌',
    birthday_open: '你的生日牌已经打开。',
  },
  birthday: {
    intro:
      '坎普的历法把一年中的每一天对应到一张牌：52 张牌对应 52 周，四种花色对应四季，十三档点数对应十三个太阴月。A 记为 1，J 为 11，Q 为 12，K 为 13，全副相加是 364。12 月 31 日是鬼牌，第 365 天。下面是这一天的太阳牌。画与故事属于 Magister。',
    month: '月',
    day: '日',
    show: '出示我的牌',
    another: '另一个日期',
    open_destiny: '命运牌',
    joker_title: '12 月 31 日 — 鬼牌',
    joker_body: '这一天把计数补成 365。坎普把它放在红桃 A 与黑桃 K 之间。两幅画都在下面。',
    missing: '这一天是{suit}{rank}。这幅画还没有收入牌组。',
    date_line: '{date}',
    spheres: {
      hearts: '春 — 情感、关系、爱、家庭、童年。',
      clubs: '夏 — 智力、知识、交谈、学习。',
      diamonds: '秋 — 价值、金钱、物质世界、事务。',
      spades: '冬 — 工作、内在成长、考验、意志、智慧。',
    },
  },
  destiny: {
    title: '命运牌',
    prompt_label: '你想要关于什么的提示？',
    prompt_placeholder: '一个问题。它只留在这个页面上。',
    hold: '握住这个问题',
    hints: [
      '你想要关于什么的提示？',
      '一个问题，不要一串。',
      '让画面从侧面回答。',
      '先不要抽牌。',
      '环合上之后，再洗牌。',
    ],
    shuffle: '洗牌',
    shuffling: '正在洗牌',
    draw: '抽一张',
    again: '再问一次',
    you_asked: '你问的是',
  },
  locked: {
    to_learn: '认识牌组',
    to_birthday: '打开生日牌',
  },
  soon: {
    title: '魔法正在发生。',
    body: '敬请期待',
  },
  board: {
    title: '纪录',
    empty: '记录还是空的。',
    name: '姓名',
    errors: '错误',
    time: '时间',
  },
  ranks: {
    A: 'A',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    J: 'J',
    Q: 'Q',
    K: 'K',
  },
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  dateMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

export const gamesCopy: Record<'en' | 'ru' | 'zh', GamesCopy> = { en, ru, zh };
