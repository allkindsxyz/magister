import type { Lang } from './utils';
import { PRICES, SHIPPING, formatPrice } from '../lib/pricing';

const price = (key: keyof typeof PRICES, lang: Lang): string => formatPrice(PRICES[key], lang);

/** Shop experiences. Card pick: apparel + prints. Personalization: all kinds. */
export type ProductKind = 'apparel' | 'prints' | 'deck' | 'album';

export const PRODUCT_KINDS_WITH_CARD_PICK: readonly ProductKind[] = ['apparel', 'prints'];

export function productHasCardPick(kind: ProductKind): boolean {
  return (PRODUCT_KINDS_WITH_CARD_PICK as readonly string[]).includes(kind);
}

export type MerchCopy = {
  meta_title: string;
  meta_description: string;
  back: string;
  label: string;
  /** Detail hero alt; falls back to next.*.image_alt when empty. */
  hero_image_alt: string;
  hero: {
    title: string;
    sub: string;
    body: string[];
    cta_create: string;
  };
  config: {
    title: string;
    body: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    product_hoodie: string;
    product_tee: string;
    card_tab_date: string;
    card_tab_browse: string;
    birth_month: string;
    birth_day: string;
    birth_cta: string;
    birth_choose: string;
    birth_joker: string;
    change_card: string;
    browse_cards: string;
    no_card: string;
    color: string;
    color_inspired: string;
    color_black: string;
    size: string;
    format: string;
    for_whom: string;
    for_self: string;
    for_gift: string;
    recipient: string;
    sender: string;
    message: string;
    message_optional: string;
    visibility: string;
    visibility_public: string;
    visibility_private: string;
    visibility_note: string;
    pin_label: string;
    pin_regen: string;
    pin_note: string;
    preview_title: string;
    preview_note: string;
    preview_badge: string;
    preview_created: string;
    preview_locked: string;
    preview_pin_prompt: string;
    preview_qr: string;
    read_more: string;
    read_less: string;
    ready: string;
    coming_soon: string;
  };
  outro: {
    line: string;
    secondary: string;
  };
  picker: {
    title: string;
    close: string;
    select: string;
    all: string;
  };
  months: string[];
};

const en: MerchCopy = {
  meta_title: 'Magister Apparel — Hoodies & Tees with Vasily Pochitsky’s Paintings',
  meta_description:
    'Hoodies and T-shirts featuring a painting from the Magister deck — your pick or your birth card — with a QR label that opens its story and your message.',
  back: 'Back to the shop',
  label: 'Apparel',
  hero_image_alt:
    'Black Magister hoodie with a QR neck label and a phone showing the card’s story page.',
  hero: {
    title: 'Wear Your Card',
    sub: 'Hoodies and tees with a painting from the deck — chosen by you or by your birthday.',
    body: [
      'Pick any painting from the deck, or let your date of birth choose it for you.',
      'A unique QR code on the label opens the story of the card and your personal message. That’s what turns a hoodie into a gift that means something.',
      'Made to order and delivered to the EU and the US in 10–14 days.',
    ],
    cta_create: 'Design yours',
  },
  config: {
    title: 'Design Your Piece',
    body: 'Piece, card, color, size and message. The preview updates as you go.',
    step1: '1. Piece',
    step2: '2. Card',
    step3: '3. Color & size',
    step4: '4. Message',
    product_hoodie: 'Hoodie',
    product_tee: 'T-shirt',
    card_tab_date: 'By birthday',
    card_tab_browse: 'All cards',
    birth_month: 'Month',
    birth_day: 'Day',
    birth_cta: 'Show my card',
    birth_choose: 'Choose this card',
    birth_joker:
      '31 December belongs to the Joker, who sits between the Ace of Hearts and the King of Spades. Pick the painting you want to wear.',
    change_card: 'Change card',
    browse_cards: 'Browse the cards',
    no_card: 'No card chosen yet',
    color: 'Color',
    color_inspired: 'Matched to the card',
    color_black: 'Black',
    size: 'Size',
    format: '',
    for_whom: 'Who is it for?',
    for_self: 'Me',
    for_gift: 'A gift',
    recipient: 'Recipient’s name',
    sender: 'Your name (optional)',
    message: 'Personal message',
    message_optional: 'Personal message (optional)',
    visibility: 'Who can read it?',
    visibility_public: 'Anyone who scans',
    visibility_private: 'Only with a PIN',
    visibility_note:
      'A public message shows to anyone who scans the QR code. A private one opens only with the PIN.',
    pin_label: 'Your PIN',
    pin_regen: 'New PIN',
    pin_note: 'Give this PIN to the recipient — without it, the message stays locked.',
    preview_title: 'Your Piece’s Story Page',
    preview_note: 'This is what the QR code on the label will open.',
    preview_badge: 'Preview',
    preview_created: 'Created',
    preview_locked: 'Private message',
    preview_pin_prompt: 'Enter PIN to read',
    preview_qr: 'Scan to open the story',
    read_more: 'Read the full story',
    read_less: 'Show less',
    ready: 'This is how your story page will look.',
    coming_soon: 'Checkout opens soon',
  },
  outro: {
    line: 'A card you wear. A story that stays.',
    secondary: 'See every card in the deck',
  },
  picker: {
    title: 'Choose a Card',
    close: 'Close',
    select: 'Select',
    all: 'All worlds',
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
};

const ru: MerchCopy = {
  meta_title: 'Одежда Magister — худи и футболки с картинами Почицкого',
  meta_description:
    'Худи и футболки с картиной из колоды Magister — на ваш выбор или по дате рождения. QR-код на бирке открывает историю карты и ваше послание.',
  back: 'Назад в магазин',
  label: 'Одежда',
  hero_image_alt: 'Чёрное худи Magister с QR-биркой и телефон со страницей истории карты.',
  hero: {
    title: 'Наденьте свою карту',
    sub: 'Худи и футболки с картиной из колоды — на ваш выбор или по дню рождения.',
    body: [
      'Выберите любую картину колоды — или доверьте выбор дате своего рождения.',
      'QR-код на бирке открывает историю карты и ваше личное послание. Так худи становится подарком со смыслом.',
      'Изготовим под заказ и доставим в EU и США за 10–14 дней.',
    ],
    cta_create: 'Собрать свою вещь',
  },
  config: {
    title: 'Соберите свою вещь',
    body: 'Вещь, карта, цвет, размер и послание. Превью обновляется сразу.',
    step1: '1. Вещь',
    step2: '2. Карта',
    step3: '3. Цвет и размер',
    step4: '4. Послание',
    product_hoodie: 'Худи',
    product_tee: 'Футболка',
    card_tab_date: 'По дню рождения',
    card_tab_browse: 'Все карты',
    birth_month: 'Месяц',
    birth_day: 'День',
    birth_cta: 'Показать мою карту',
    birth_choose: 'Выбрать эту карту',
    birth_joker:
      '31 декабря — день Джокера: он стоит между тузом червей и королём пик. Выберите картину, которую хотите носить.',
    change_card: 'Сменить карту',
    browse_cards: 'Смотреть карты',
    no_card: 'Карта пока не выбрана',
    color: 'Цвет',
    color_inspired: 'В тон карте',
    color_black: 'Чёрный',
    size: 'Размер',
    format: '',
    for_whom: 'Для кого?',
    for_self: 'Себе',
    for_gift: 'В подарок',
    recipient: 'Имя получателя',
    sender: 'Ваше имя (необязательно)',
    message: 'Личное послание',
    message_optional: 'Личное послание (необязательно)',
    visibility: 'Кто сможет прочитать?',
    visibility_public: 'Все, кто отсканирует',
    visibility_private: 'Только по PIN',
    visibility_note:
      'Публичное послание увидит любой, кто отсканирует QR-код. Приватное откроется только по PIN.',
    pin_label: 'Ваш PIN',
    pin_regen: 'Новый PIN',
    pin_note: 'Передайте PIN получателю — без него послание не открыть.',
    preview_title: 'Страница вашей вещи',
    preview_note: 'Её откроет QR-код на бирке.',
    preview_badge: 'Предпросмотр',
    preview_created: 'Создано',
    preview_locked: 'Приватное послание',
    preview_pin_prompt: 'Введите PIN',
    preview_qr: 'Отсканируйте — откроется история',
    read_more: 'Читать историю целиком',
    read_less: 'Свернуть',
    ready: 'Так будет выглядеть страница вашей вещи.',
    coming_soon: 'Оформление заказа — скоро',
  },
  outro: {
    line: 'Карта, которую носят. История, которая остаётся.',
    secondary: 'Смотреть все карты колоды',
  },
  picker: {
    title: 'Выберите карту',
    close: 'Закрыть',
    select: 'Выбрать',
    all: 'Все миры',
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
};

const be: MerchCopy = {
  meta_title: 'Адзенне Magister — худзі і футболкі з карцінамі Пачыцкага',
  meta_description:
    'Худзі і футболкі з карцінай з калоды Magister — на ваш выбар або па даце нараджэння. QR-код на бірцы адкрывае гісторыю карты і ваша пасланне.',
  back: 'Назад у краму',
  label: 'Адзенне',
  hero_image_alt: 'Чорнае худзі Magister з QR-біркай і тэлефон са старонкай гісторыі карты.',
  hero: {
    title: 'Апраніце сваю карту',
    sub: 'Худзі і футболкі з карцінай з калоды — на ваш выбар або па дні нараджэння.',
    body: [
      'Абярыце любую карціну калоды — або даверце выбар даце свайго нараджэння.',
      'QR-код на бірцы адкрывае гісторыю карты і ваша асабістае пасланне. Так худзі становіцца падарункам з сэнсам.',
      'Вырабім пад заказ і даставім у EU і ЗША за 10–14 дзён.',
    ],
    cta_create: 'Сабраць сваю рэч',
  },
  config: {
    title: 'Збярыце сваю рэч',
    body: 'Рэч, карта, колер, памер і пасланне. Прэв’ю абнаўляецца адразу.',
    step1: '1. Рэч',
    step2: '2. Карта',
    step3: '3. Колер і памер',
    step4: '4. Пасланне',
    product_hoodie: 'Худзі',
    product_tee: 'Футболка',
    card_tab_date: 'Па дні нараджэння',
    card_tab_browse: 'Усе карты',
    birth_month: 'Месяц',
    birth_day: 'Дзень',
    birth_cta: 'Паказаць маю карту',
    birth_choose: 'Абраць гэту карту',
    birth_joker:
      '31 снежня — дзень Джокера: ён стаіць паміж тузам чэрваў і каралём пік. Абярыце карціну, якую хочаце насіць.',
    change_card: 'Змяніць карту',
    browse_cards: 'Глядзець карты',
    no_card: 'Карта пакуль не абрана',
    color: 'Колер',
    color_inspired: 'У тон карце',
    color_black: 'Чорны',
    size: 'Памер',
    format: '',
    for_whom: 'Для каго?',
    for_self: 'Сабе',
    for_gift: 'У падарунак',
    recipient: 'Імя атрымальніка',
    sender: 'Ваша імя (неабавязкова)',
    message: 'Асабістае пасланне',
    message_optional: 'Асабістае пасланне (неабавязкова)',
    visibility: 'Хто зможа прачытаць?',
    visibility_public: 'Усе, хто адсканіруе',
    visibility_private: 'Толькі па PIN',
    visibility_note:
      'Публічнае пасланне ўбачыць кожны, хто адсканіруе QR-код. Прыватнае адкрыецца толькі па PIN.',
    pin_label: 'Ваш PIN',
    pin_regen: 'Новы PIN',
    pin_note: 'Перадайце PIN атрымальніку — без яго пасланне не адкрыць.',
    preview_title: 'Старонка вашай рэчы',
    preview_note: 'Яе адкрые QR-код на бірцы.',
    preview_badge: 'Прэв’ю',
    preview_created: 'Створана',
    preview_locked: 'Прыватнае пасланне',
    preview_pin_prompt: 'Увядзіце PIN',
    preview_qr: 'Адсканіруйце — адкрыецца гісторыя',
    read_more: 'Чытаць гісторыю цалкам',
    read_less: 'Згарнуць',
    ready: 'Так будзе выглядаць старонка вашай рэчы.',
    coming_soon: 'Афармленне заказу — хутка',
  },
  outro: {
    line: 'Карта, якую носяць. Гісторыя, якая застаецца.',
    secondary: 'Глядзець усе карты калоды',
  },
  picker: {
    title: 'Абярыце карту',
    close: 'Закрыць',
    select: 'Абраць',
    all: 'Усе светы',
  },
  months: [
    'Студзень',
    'Люты',
    'Сакавік',
    'Красавік',
    'Май',
    'Чэрвень',
    'Ліпень',
    'Жнівень',
    'Верасень',
    'Кастрычнік',
    'Лістапад',
    'Снежань',
  ],
};

const zh: MerchCopy = {
  meta_title: 'Magister 服装 — 印有瓦西里·波奇茨基画作的连帽衫与 T 恤',
  meta_description:
    '印有 Magister 牌组画作的连帽衫与 T 恤——由你挑选，或由你的生日决定。领标上的二维码可打开这张牌的故事与你的留言。',
  back: '返回商店',
  label: '服装',
  hero_image_alt: '带有二维码领标的黑色 Magister 连帽衫，手机上显示这张牌的故事页。',
  hero: {
    title: '把你的牌穿在身上',
    sub: '印有牌组画作的连帽衫与 T 恤——由你挑选，或由你的生日决定。',
    body: [
      '从牌组中任选一幅画，或让你的出生日期替你选择。',
      '领标上独一无二的二维码，会打开这张牌的故事与你的个人留言。一件连帽衫，就此成为有意义的礼物。',
      '按单制作，10–14 天送达欧盟与美国。',
    ],
    cta_create: '设计你的单品',
  },
  config: {
    title: '设计你的单品',
    body: '单品、牌、颜色、尺码与留言。预览会即时更新。',
    step1: '1. 单品',
    step2: '2. 牌',
    step3: '3. 颜色与尺码',
    step4: '4. 留言',
    product_hoodie: '连帽衫',
    product_tee: 'T 恤',
    card_tab_date: '按生日',
    card_tab_browse: '全部牌',
    birth_month: '月',
    birth_day: '日',
    birth_cta: '显示我的牌',
    birth_choose: '选择这张牌',
    birth_joker: '12 月 31 日属于小丑牌，它位于红心 A 与黑桃 K 之间。选择你想穿上的画作。',
    change_card: '更换牌',
    browse_cards: '浏览牌组',
    no_card: '尚未选择牌',
    color: '颜色',
    color_inspired: '随牌配色',
    color_black: '黑色',
    size: '尺码',
    format: '',
    for_whom: '为谁准备？',
    for_self: '给自己',
    for_gift: '作为礼物',
    recipient: '收礼人姓名',
    sender: '你的名字（可选）',
    message: '个人留言',
    message_optional: '个人留言（可选）',
    visibility: '谁可以阅读？',
    visibility_public: '任何扫码的人',
    visibility_private: '仅凭 PIN',
    visibility_note: '公开留言对任何扫描二维码的人可见；私密留言只有输入 PIN 才能打开。',
    pin_label: '你的 PIN',
    pin_regen: '新 PIN',
    pin_note: '请把 PIN 交给收礼人——没有它，留言无法打开。',
    preview_title: '你的单品故事页',
    preview_note: '领标上的二维码将打开这一页。',
    preview_badge: '预览',
    preview_created: '创建于',
    preview_locked: '私密留言',
    preview_pin_prompt: '输入 PIN 查看',
    preview_qr: '扫码打开故事',
    read_more: '阅读完整故事',
    read_less: '收起',
    ready: '你的故事页将是这个样子。',
    coming_soon: '即将开放下单',
  },
  outro: {
    line: '穿在身上的牌。留下来的故事。',
    secondary: '浏览牌组中的每一张牌',
  },
  picker: {
    title: '选择一张牌',
    close: '关闭',
    select: '选择',
    all: '全部世界',
  },
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

export const merchCopy: Record<Lang, MerchCopy> = { en, ru, be, zh };

const printsEn: MerchCopy = {
  ...en,
  meta_title: 'Magister Prints — Pochitsky’s Paintings at Original Size',
  meta_description:
    'A print of any painting from the Magister deck at its original 60 × 40 cm size. Pick it yourself or by birthday — with a QR code and a personal message.',
  label: 'Prints',
  hero_image_alt: 'Original Magister painting prepared as an art print.',
  hero: {
    title: 'A Painting from the Deck, on Your Wall',
    sub: 'At original size: 60 × 40 cm.',
    body: [
      'Each print reproduces Vasily Pochitsky’s painting at its true size. Details you can barely see on a card come through in full.',
      'Choose the painting yourself — or by date of birth, for a gift with personal meaning.',
      'A unique QR code opens the painting’s story and your message. Printed to order and delivered in 10–14 days.',
    ],
    cta_create: 'Choose a painting',
  },
  config: {
    ...en.config,
    title: 'Design Your Print',
    body: 'Painting and message. The preview updates as you go.',
    step1: '',
    step2: '1. Painting',
    step3: '',
    step4: '2. Message',
    format: '60 × 40 cm',
    birth_joker:
      '31 December belongs to the Joker, who sits between the Ace of Hearts and the King of Spades. Pick the painting you want as a print.',
    preview_title: 'Your Print’s Story Page',
    preview_note: 'This is what the QR code on the print will open.',
    ready: 'This is how your print’s page will look.',
  },
  outro: {
    line: 'A painting to keep. A story that stays.',
    secondary: 'See every card in the deck',
  },
};

const printsRu: MerchCopy = {
  ...ru,
  meta_title: 'Принты Magister — картины Почицкого в размере оригинала',
  meta_description:
    'Принт любой картины из колоды Magister в размере оригинала, 60 × 40 см. Выберите сами или по дате рождения — с QR-кодом и личным посланием.',
  label: 'Принты',
  hero_image_alt: 'Оригинальная картина Magister, подготовленная к печати.',
  hero: {
    title: 'Картина из колоды — на вашей стене',
    sub: 'В размере оригинала: 60 × 40 см.',
    body: [
      'Каждый принт повторяет картину Василия Почицкого в её настоящем размере. Детали, которые на карте едва различимы, здесь видны целиком.',
      'Выберите картину сами — или по дате рождения: так получается подарок с личным смыслом.',
      'Уникальный QR-код откроет историю картины и ваше послание. Напечатаем под заказ и доставим за 10–14 дней.',
    ],
    cta_create: 'Выбрать картину',
  },
  config: {
    ...ru.config,
    title: 'Соберите свой принт',
    body: 'Картина и послание. Превью обновляется сразу.',
    step1: '',
    step2: '1. Картина',
    step3: '',
    step4: '2. Послание',
    format: '60 × 40 см',
    birth_joker:
      '31 декабря — день Джокера: он стоит между тузом червей и королём пик. Выберите картину для принта.',
    preview_title: 'Страница вашего принта',
    preview_note: 'Её откроет QR-код на принте.',
    ready: 'Так будет выглядеть страница вашего принта.',
  },
  outro: {
    line: 'Картина, которую хранят. История, которая остаётся.',
    secondary: 'Смотреть все карты колоды',
  },
};

const printsBe: MerchCopy = {
  ...be,
  meta_title: 'Прынты Magister — карціны Пачыцкага ў памеры арыгінала',
  meta_description:
    'Прынт любой карціны з калоды Magister у памеры арыгінала, 60 × 40 см. Абярыце самі або па даце нараджэння — з QR-кодам і асабістым пасланнем.',
  label: 'Прынты',
  hero_image_alt: 'Арыгінальная карціна Magister, падрыхтаваная да друку.',
  hero: {
    title: 'Карціна з калоды — на вашай сцяне',
    sub: 'У памеры арыгінала: 60 × 40 см.',
    body: [
      'Кожны прынт паўтарае карціну Васіля Пачыцкага ў яе сапраўдным памеры. Дэталі, якія на карце ледзь бачныя, тут відаць цалкам.',
      'Абярыце карціну самі — або па даце нараджэння: так атрымліваецца падарунак з асабістым сэнсам.',
      'Унікальны QR-код адкрые гісторыю карціны і ваша пасланне. Надрукуем пад заказ і даставім за 10–14 дзён.',
    ],
    cta_create: 'Абраць карціну',
  },
  config: {
    ...be.config,
    title: 'Збярыце свой прынт',
    body: 'Карціна і пасланне. Прэв’ю абнаўляецца адразу.',
    step1: '',
    step2: '1. Карціна',
    step3: '',
    step4: '2. Пасланне',
    format: '60 × 40 см',
    birth_joker:
      '31 снежня — дзень Джокера: ён стаіць паміж тузам чэрваў і каралём пік. Абярыце карціну для прынта.',
    preview_title: 'Старонка вашага прынта',
    preview_note: 'Яе адкрые QR-код на прынце.',
    ready: 'Так будзе выглядаць старонка вашага прынта.',
  },
  outro: {
    line: 'Карціна, якую захоўваюць. Гісторыя, якая застаецца.',
    secondary: 'Глядзець усе карты калоды',
  },
};

const printsZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister 版画 — 原作尺寸的波奇茨基画作',
  meta_description: '牌组中任意一幅画的版画，原作尺寸 60 × 40 cm。由你挑选或按生日选择，附二维码与个人留言。',
  label: '版画',
  hero_image_alt: '为印制版画准备的 Magister 原作。',
  hero: {
    title: '牌组里的一幅画，挂上你的墙',
    sub: '原作尺寸：60 × 40 cm。',
    body: [
      '每一幅版画都按真实尺寸复制瓦西里·波奇茨基的原作。牌面上几乎看不清的细节，在这里一览无余。',
      '自己挑选画作——或按出生日期选择，成为一份有个人意义的礼物。',
      '独一无二的二维码会打开这幅画的故事与你的留言。按单印制，10–14 天送达。',
    ],
    cta_create: '选择画作',
  },
  config: {
    ...zh.config,
    title: '设计你的版画',
    body: '画作与留言。预览会即时更新。',
    step1: '',
    step2: '1. 画作',
    step3: '',
    step4: '2. 留言',
    format: '60 × 40 cm',
    birth_joker: '12 月 31 日属于小丑牌，它位于红心 A 与黑桃 K 之间。选择你想印成版画的画作。',
    preview_title: '你的版画故事页',
    preview_note: '版画上的二维码将打开这一页。',
    ready: '你的版画页面将是这个样子。',
  },
  outro: {
    line: '一幅可留存的画。一段留下来的故事。',
    secondary: '浏览牌组中的每一张牌',
  },
};

export const printsCopy: Record<Lang, MerchCopy> = {
  en: printsEn,
  ru: printsRu,
  be: printsBe,
  zh: printsZh,
};

const deckEn: MerchCopy = {
  ...en,
  meta_title: 'Magister Deck — 54 Paintings by Vasily Pochitsky | First Edition',
  meta_description:
    `An art deck of 54 cards where suit and rank hide inside each painting. XL 70 × 120 mm — ${price('xl', 'en')}, standard 50 × 80 mm — ${price('standard', 'en')}. Key booklet included. EU & US delivery in 10–14 days.`,
  label: 'The Deck',
  hero_image_alt: '',
  hero: {
    title: 'A Deck You Decode First',
    sub: '54 paintings by Vasily Pochitsky. The suit and rank of every card hide inside its scene.',
    body: [
      'Hearts are the Olympic Gods, Diamonds the Bearers of Secrets, Clubs the Templars, Spades the Celebrities. The key to the symbols is in the booklet inside the box — and every card is online too.',
      `Two formats: XL 70 × 120 mm (${price('xl', 'en')}) for looking at the paintings, standard 50 × 80 mm (${price('standard', 'en')}) for playing. First edition: 500 XL and 100 standard decks. Delivery to the EU and the US takes 10–14 days.`,
      'Giving it as a gift? Add a personal message — it opens from the QR code on your copy.',
    ],
    cta_create: 'Add a message',
  },
  config: {
    ...en.config,
    title: 'Sign Your Deck',
    body: 'Your message opens from the QR code on your copy. The preview updates as you go.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Message',
    format: `XL ${price('xl', 'en')} · Standard ${price('standard', 'en')}`,
    preview_title: 'Your Deck’s Story Page',
    preview_note: 'This is what the QR code on your copy will open.',
    ready: 'This is how your deck’s page will look.',
  },
  outro: {
    line: 'Decode it. Play it. Give it.',
    secondary: 'See every card in the deck',
  },
};

const deckRu: MerchCopy = {
  ...ru,
  meta_title: 'Колода Magister — 54 картины Василия Почицкого | Первый тираж',
  meta_description:
    `Арт-колода из 54 карт: масть и ранг спрятаны в сюжете картины. XL 70 × 120 мм — ${price('xl', 'ru')}, стандартная 50 × 80 мм — ${price('standard', 'ru')}. Буклет-ключ в коробке. Доставка в EU и US за 10–14 дней.`,
  label: 'Колода',
  hero_image_alt: '',
  hero: {
    title: 'Колода, которую сначала разгадывают',
    sub: '54 картины Василия Почицкого. Масть и ранг каждой карты спрятаны в сюжете.',
    body: [
      'Червы — олимпийские боги, бубны — носители тайн, трефы — тамплиеры, пики — знаменитости. Ключ к символам — в буклете внутри коробки, а все карты можно рассмотреть на сайте.',
      `Два формата: XL 70 × 120 мм (${price('xl', 'ru')}) — чтобы рассматривать картины, стандартный 50 × 80 мм (${price('standard', 'ru')}) — чтобы играть. Первый тираж: 500 XL и 100 стандартных колод. Доставка в EU и США — 10–14 дней.`,
      'Колода в подарок? Добавьте личное послание — оно откроется по QR-коду на вашем экземпляре.',
    ],
    cta_create: 'Добавить послание',
  },
  config: {
    ...ru.config,
    title: 'Подпишите колоду',
    body: 'Послание откроется по QR-коду на вашем экземпляре. Превью обновляется сразу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Послание',
    format: `XL ${price('xl', 'ru')} · стандартная ${price('standard', 'ru')}`,
    preview_title: 'Страница вашей колоды',
    preview_note: 'Её откроет QR-код на вашем экземпляре.',
    ready: 'Так будет выглядеть страница вашей колоды.',
  },
  outro: {
    line: 'Сначала разгадать. Потом сыграть. Потом подарить.',
    secondary: 'Смотреть все карты колоды',
  },
};

const deckBe: MerchCopy = {
  ...be,
  meta_title: 'Калода Magister — 54 карціны Васіля Пачыцкага | Першы наклад',
  meta_description:
    `Арт-калода з 54 карт: масць і ранг схаваныя ў сюжэце карціны. XL 70 × 120 мм — ${price('xl', 'be')}, стандартная 50 × 80 мм — ${price('standard', 'be')}. Буклет-ключ у каробцы. Дастаўка ў EU і US за 10–14 дзён.`,
  label: 'Калода',
  hero_image_alt: '',
  hero: {
    title: 'Калода, якую спачатку разгадваюць',
    sub: '54 карціны Васіля Пачыцкага. Масць і ранг кожнай карты схаваныя ў сюжэце.',
    body: [
      'Чэрвы — алімпійскія багі, бубны — носьбіты таямніц, трэфы — тампліеры, пікі — знакамітасці. Ключ да сімвалаў — у буклеце ўнутры каробкі, а ўсе карты можна разгледзець на сайце.',
      `Два фарматы: XL 70 × 120 мм (${price('xl', 'be')}) — каб разглядаць карціны, стандартны 50 × 80 мм (${price('standard', 'be')}) — каб гуляць. Першы наклад: 500 XL і 100 стандартных калод. Дастаўка ў EU і ЗША — 10–14 дзён.`,
      'Калода ў падарунак? Дадайце асабістае пасланне — яно адкрыецца па QR-кодзе на вашым асобніку.',
    ],
    cta_create: 'Дадаць пасланне',
  },
  config: {
    ...be.config,
    title: 'Падпішыце калоду',
    body: 'Пасланне адкрыецца па QR-кодзе на вашым асобніку. Прэв’ю абнаўляецца адразу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Пасланне',
    format: `XL ${price('xl', 'be')} · стандартная ${price('standard', 'be')}`,
    preview_title: 'Старонка вашай калоды',
    preview_note: 'Яе адкрые QR-код на вашым асобніку.',
    ready: 'Так будзе выглядаць старонка вашай калоды.',
  },
  outro: {
    line: 'Спачатку разгадаць. Потым згуляць. Потым падарыць.',
    secondary: 'Глядзець усе карты калоды',
  },
};

const deckZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister 牌组 — 瓦西里·波奇茨基的 54 幅画作 | 首版',
  meta_description: `一副 54 张的艺术扑克牌，花色与点数藏在每幅画里。XL 70 × 120 mm ${price('xl', 'zh')}，标准 50 × 80 mm ${price('standard', 'zh')}。盒内附解读小册子。发货至欧盟与美国，10–14 天送达。`,
  label: '牌组',
  hero_image_alt: '',
  hero: {
    title: '一副要先解读的牌',
    sub: '瓦西里·波奇茨基的 54 幅画。每张牌的花色与点数都藏在画面里。',
    body: [
      '红心是奥林匹斯诸神，方块是秘密承载者，梅花是圣殿骑士，黑桃是名流。解读符号的钥匙在盒内的小册子里，所有牌也都能在网站上细看。',
      `两种尺寸：XL 70 × 120 mm（${price('xl', 'zh')}）适合细看画作，标准 50 × 80 mm（${price('standard', 'zh')}）适合打牌。首版：XL 500 副，标准尺寸 100 副。发货至欧盟与美国，10–14 天送达。`,
      '要送人？加一段个人留言——扫描你这副牌上的二维码即可打开。',
    ],
    cta_create: '添加留言',
  },
  config: {
    ...zh.config,
    title: '为你的牌组留言',
    body: '扫描你这副牌上的二维码即可打开留言。预览会即时更新。',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. 留言',
    format: `XL ${price('xl', 'zh')} · 标准 ${price('standard', 'zh')}`,
    preview_title: '你的牌组故事页',
    preview_note: '你这副牌上的二维码将打开这一页。',
    ready: '你的牌组页面将是这个样子。',
  },
  outro: {
    line: '先解读，再对局，然后赠予。',
    secondary: '浏览牌组中的每一张牌',
  },
};

export const deckCopy: Record<Lang, MerchCopy> = {
  en: deckEn,
  ru: deckRu,
  be: deckBe,
  zh: deckZh,
};

const albumEn: MerchCopy = {
  ...en,
  meta_title: 'Magister Art Album — 152 Pages Beyond the Deck',
  meta_description:
    'The Magister art album: Vasily Pochitsky’s paintings at full scale, the stories of their characters, and how the cycle was made. 152 pages. Coming soon.',
  label: 'Art Album',
  hero_image_alt: '',
  hero: {
    title: 'Everything That Didn’t Fit in the Deck',
    sub: '152 pages on the paintings, characters and world of Magister.',
    body: [
      'Vasily Pochitsky’s paintings at full scale, the stories of their characters, and how the cycle came to be.',
      'The album is coming soon. You can prepare a message now — it will open from the QR code in your copy.',
    ],
    cta_create: 'Prepare a message',
  },
  config: {
    ...en.config,
    title: 'Sign Your Album',
    body: 'Your message opens from the QR code in your copy. The preview updates as you go.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Message',
    format: '152 pages',
    preview_title: 'Your Album’s Story Page',
    preview_note: 'This is what the QR code in the album will open.',
    ready: 'This is how your album’s page will look.',
    coming_soon: 'Album coming soon',
  },
  outro: {
    line: 'A book to keep. A story that stays.',
    secondary: 'See every card in the deck',
  },
};

const albumRu: MerchCopy = {
  ...ru,
  meta_title: 'Арт-альбом Magister — 152 страницы о мире колоды',
  meta_description:
    'Арт-альбом Magister: картины Василия Почицкого крупно, истории героев и то, как создавался цикл. 152 страницы. Скоро.',
  label: 'Арт-альбом',
  hero_image_alt: '',
  hero: {
    title: 'Всё, что не поместилось в колоду',
    sub: '152 страницы о картинах, героях и мире Magister.',
    body: [
      'Картины Василия Почицкого крупно, истории персонажей и то, как создавался цикл.',
      'Альбом скоро выйдет. Послание можно подготовить уже сейчас — оно откроется по QR-коду в вашем экземпляре.',
    ],
    cta_create: 'Подготовить послание',
  },
  config: {
    ...ru.config,
    title: 'Подпишите альбом',
    body: 'Послание откроется по QR-коду в вашем экземпляре. Превью обновляется сразу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Послание',
    format: '152 страницы',
    preview_title: 'Страница вашего альбома',
    preview_note: 'Её откроет QR-код в альбоме.',
    ready: 'Так будет выглядеть страница вашего альбома.',
    coming_soon: 'Альбом скоро выйдет',
  },
  outro: {
    line: 'Книга, которую хранят. История, которая остаётся.',
    secondary: 'Смотреть все карты колоды',
  },
};

const albumBe: MerchCopy = {
  ...be,
  meta_title: 'Арт-альбом Magister — 152 старонкі пра свет калоды',
  meta_description:
    'Арт-альбом Magister: карціны Васіля Пачыцкага буйна, гісторыі герояў і тое, як ствараўся цыкл. 152 старонкі. Хутка.',
  label: 'Арт-альбом',
  hero_image_alt: '',
  hero: {
    title: 'Усё, што не змясцілася ў калоду',
    sub: '152 старонкі пра карціны, герояў і свет Magister.',
    body: [
      'Карціны Васіля Пачыцкага буйна, гісторыі персанажаў і тое, як ствараўся цыкл.',
      'Альбом хутка выйдзе. Пасланне можна падрыхтаваць ужо цяпер — яно адкрыецца па QR-кодзе ў вашым асобніку.',
    ],
    cta_create: 'Падрыхтаваць пасланне',
  },
  config: {
    ...be.config,
    title: 'Падпішыце альбом',
    body: 'Пасланне адкрыецца па QR-кодзе ў вашым асобніку. Прэв’ю абнаўляецца адразу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Пасланне',
    format: '152 старонкі',
    preview_title: 'Старонка вашага альбома',
    preview_note: 'Яе адкрые QR-код у альбоме.',
    ready: 'Так будзе выглядаць старонка вашага альбома.',
    coming_soon: 'Альбом хутка выйдзе',
  },
  outro: {
    line: 'Кніга, якую захоўваюць. Гісторыя, якая застаецца.',
    secondary: 'Глядзець усе карты калоды',
  },
};

const albumZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister 艺术画册 — 牌组之外的 152 页',
  meta_description: 'Magister 艺术画册：瓦西里·波奇茨基画作的大幅呈现、角色故事与系列诞生的过程。152 页，即将推出。',
  label: '艺术画册',
  hero_image_alt: '',
  hero: {
    title: '牌组里装不下的一切',
    sub: '152 页，关于画作、角色与 Magister 的世界。',
    body: [
      '瓦西里·波奇茨基画作的大幅呈现、角色的故事，以及这个系列如何诞生。',
      '画册即将推出。你现在就可以准备留言——扫描画册中的二维码即可打开。',
    ],
    cta_create: '准备留言',
  },
  config: {
    ...zh.config,
    title: '为你的画册留言',
    body: '扫描你这本画册中的二维码即可打开留言。预览会即时更新。',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. 留言',
    format: '152 页',
    preview_title: '你的画册故事页',
    preview_note: '画册中的二维码将打开这一页。',
    ready: '你的画册页面将是这个样子。',
    coming_soon: '画册即将推出',
  },
  outro: {
    line: '一本可留存的书。一段留下来的故事。',
    secondary: '浏览牌组中的每一张牌',
  },
};

export const albumCopy: Record<Lang, MerchCopy> = {
  en: albumEn,
  ru: albumRu,
  be: albumBe,
  zh: albumZh,
};

export type DeckBoxCopy = {
  title: string;
  rows: ReadonlyArray<{ label: string; value: string }>;
  note: string;
};

const ship = (key: keyof typeof SHIPPING, lang: Lang): string => formatPrice(SHIPPING[key], lang);

export const deckBoxCopy: Record<Lang, DeckBoxCopy> = {
  en: {
    title: 'What’s in the box',
    rows: [
      { label: 'Cards', value: '54 cards, each one a painting by Vasily Pochitsky' },
      { label: 'Key', value: 'A booklet that explains the symbols of every suit and rank' },
      { label: 'XL', value: `70 × 120 mm · edition of 500 · ${price('xl', 'en')}` },
      { label: 'Standard', value: `50 × 80 mm · edition of 100 · ${price('standard', 'en')}` },
      { label: 'Shipping', value: `EU ${ship('eu', 'en')}, US ${ship('us', 'en')}, free from ${ship('free_from', 'en')}` },
      { label: 'Timing', value: '10–14 days from order to your door' },
    ],
    note: 'The edition is already printed — this is not a pre-order.',
  },
  ru: {
    title: 'Что в коробке',
    rows: [
      { label: 'Карты', value: '54 карты — каждая картина Василия Почицкого' },
      { label: 'Ключ', value: 'Буклет с расшифровкой символов каждой масти и ранга' },
      { label: 'XL', value: `70 × 120 мм · тираж 500 · ${price('xl', 'ru')}` },
      { label: 'Стандартная', value: `50 × 80 мм · тираж 100 · ${price('standard', 'ru')}` },
      { label: 'Доставка', value: `EU — ${ship('eu', 'ru')}, США — ${ship('us', 'ru')}, бесплатно от ${ship('free_from', 'ru')}` },
      { label: 'Сроки', value: '10–14 дней от заказа до двери' },
    ],
    note: 'Тираж уже напечатан — это не предзаказ.',
  },
  be: {
    title: 'Што ў каробцы',
    rows: [
      { label: 'Карты', value: '54 карты — кожная карціна Васіля Пачыцкага' },
      { label: 'Ключ', value: 'Буклет з расшыфроўкай сімвалаў кожнай масці і рангу' },
      { label: 'XL', value: `70 × 120 мм · наклад 500 · ${price('xl', 'be')}` },
      { label: 'Стандартная', value: `50 × 80 мм · наклад 100 · ${price('standard', 'be')}` },
      { label: 'Дастаўка', value: `EU — ${ship('eu', 'be')}, ЗША — ${ship('us', 'be')}, бясплатна ад ${ship('free_from', 'be')}` },
      { label: 'Тэрміны', value: '10–14 дзён ад замовы да дзвярэй' },
    ],
    note: 'Наклад ужо надрукаваны — гэта не перадзамова.',
  },
  zh: {
    title: '盒中有什么',
    rows: [
      { label: '牌', value: '54 张牌，每一张都是瓦西里·波奇茨基的画作' },
      { label: '解读', value: '一本手册，解释每种花色与点数的符号' },
      { label: 'XL', value: `70 × 120 毫米 · 限量 500 副 · ${price('xl', 'zh')}` },
      { label: '标准版', value: `50 × 80 毫米 · 限量 100 副 · ${price('standard', 'zh')}` },
      { label: '配送', value: `欧盟 ${ship('eu', 'zh')}，美国 ${ship('us', 'zh')}，满 ${ship('free_from', 'zh')} 包邮` },
      { label: '时效', value: '下单至送达 10–14 天' },
    ],
    note: '首版已印制完成——并非预售。',
  },
};

export const productCopy: Record<ProductKind, Record<Lang, MerchCopy>> = {
  apparel: merchCopy,
  prints: printsCopy,
  deck: deckCopy,
  album: albumCopy,
};
