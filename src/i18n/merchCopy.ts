import type { Lang } from './utils';
import { PRICES, formatPrice } from '../lib/pricing';

const price = (key: keyof typeof PRICES, lang: Lang): string => formatPrice(PRICES[key], lang);

export type ProductKind = 'apparel' | 'prints' | 'deck' | 'album';

export const PRODUCT_KINDS_WITH_CARD_PICK: readonly ProductKind[] = ['apparel', 'prints'];

export function productHasCardPick(kind: ProductKind): boolean {
  return (PRODUCT_KINDS_WITH_CARD_PICK as readonly string[]).includes(kind);
}

export type SlideCopy = { alt: string; caption: string };

/** Per-product copy. Gallery slides that follow the configurator (garment, card) are captioned at runtime. */
export type MerchCopy = {
  meta_title: string;
  meta_description: string;
  label: string;
  title: string;
  sub: string;
  /** Availability line under the buy button. */
  ships: string;
  about_title: string;
  about: string[];
  /** Where the personal message opens; empty when the product takes no message. */
  message_hint: string;
  slides: Record<string, SlideCopy>;
};

/** Configurator, picker and gallery strings shared by every product page. */
export type PdpUi = {
  back: string;
  gallery_aria: string;
  thumb: string;
  format: string;
  piece: string;
  card: string;
  color: string;
  size: string;
  hoodie: string;
  tee: string;
  color_black: string;
  color_inspired: string;
  set_name: string;
  set_spec: string;
  two_xl_name: string;
  two_xl_spec: string;
  save: string;
  free_shipping: string;
  change_card: string;
  by_birthday: string;
  birth_month: string;
  birth_day: string;
  birth_cta: string;
  birth_choose: string;
  birth_joker: string;
  message_add: string;
  message_free: string;
  message_remove: string;
  recipient: string;
  sender: string;
  optional: string;
  message: string;
  private: string;
  pin_label: string;
  pin_regen: string;
  pin_note: string;
  qr_caption: string;
  qr_locked: string;
  qr_open: string;
  qr_error: string;
  add: string;
  added: string;
  shipping: string;
  all_cards: string;
  box_title: string;
  coming_soon: string;
  notify: string;
  picker_title: string;
  picker_close: string;
  picker_all: string;
  months: string[];
};

export const pdpUi: Record<Lang, PdpUi> = {
  en: {
    back: 'Back to the shop',
    gallery_aria: 'Product photos',
    thumb: 'Photo {n} of {total}',
    format: 'Format',
    piece: 'Piece',
    card: 'Painting',
    color: 'Color',
    size: 'Size',
    hoodie: 'Hoodie',
    tee: 'T-shirt',
    color_black: 'Black',
    color_inspired: 'Matched to the card',
    set_name: 'XL + standard',
    set_spec: 'One to look at, one to play',
    two_xl_name: 'Two XL',
    two_xl_spec: 'One for you, one to give',
    save: 'Save {amount}',
    free_shipping: 'Free shipping',
    change_card: 'Change',
    by_birthday: 'By birthday',
    birth_month: 'Month',
    birth_day: 'Day',
    birth_cta: 'Show my card',
    birth_choose: 'Choose this card',
    birth_joker: '31 December belongs to the Joker, who sits between the Ace of Hearts and the King of Spades. Pick one of the two.',
    message_add: 'Add a personal message',
    message_free: 'free',
    message_remove: 'Remove the message',
    recipient: 'To',
    sender: 'From',
    optional: 'optional',
    message: 'Message',
    private: 'Open only with a PIN',
    pin_label: 'PIN',
    pin_regen: 'New PIN',
    pin_note: 'Give this PIN to the recipient — without it, the message stays locked.',
    qr_caption: 'Scan — your message opens',
    qr_locked: 'Opens with the PIN',
    qr_open: 'Open the message preview',
    qr_error: 'Preview is unavailable — edit the message to retry',
    add: 'Add to cart',
    added: 'Added',
    shipping: 'Shipping: EU {ship_eu}, US {ship_us}, free from {free_from} · 10–14 days',
    all_cards: 'See every card in the deck',
    box_title: 'What’s in the box',
    coming_soon: 'Coming soon',
    notify: 'Notify me on release',
    picker_title: 'Choose a Card',
    picker_close: 'Close',
    picker_all: 'All worlds',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  ru: {
    back: 'Назад в магазин',
    gallery_aria: 'Фотографии товара',
    thumb: 'Фото {n} из {total}',
    format: 'Формат',
    piece: 'Вещь',
    card: 'Картина',
    color: 'Цвет',
    size: 'Размер',
    hoodie: 'Худи',
    tee: 'Футболка',
    color_black: 'Чёрный',
    color_inspired: 'В тон карте',
    set_name: 'XL + стандартная',
    set_spec: 'Одну рассматривать, другой играть',
    two_xl_name: 'Две XL',
    two_xl_spec: 'Себе и в подарок',
    save: 'Экономия {amount}',
    free_shipping: 'Бесплатная доставка',
    change_card: 'Сменить',
    by_birthday: 'По дню рождения',
    birth_month: 'Месяц',
    birth_day: 'День',
    birth_cta: 'Показать мою карту',
    birth_choose: 'Выбрать эту карту',
    birth_joker: '31 декабря — день Джокера: он стоит между тузом червей и королём пик. Выберите одну из двух.',
    message_add: 'Добавить личное послание',
    message_free: 'бесплатно',
    message_remove: 'Убрать послание',
    recipient: 'Кому',
    sender: 'От кого',
    optional: 'необязательно',
    message: 'Послание',
    private: 'Открывать только по PIN',
    pin_label: 'PIN',
    pin_regen: 'Новый PIN',
    pin_note: 'Передайте PIN получателю — без него послание не открыть.',
    qr_caption: 'Отсканируйте — откроется послание',
    qr_locked: 'Откроется по PIN',
    qr_open: 'Открыть предпросмотр послания',
    qr_error: 'Предпросмотр недоступен — измените текст, чтобы повторить',
    add: 'В корзину',
    added: 'Добавлено',
    shipping: 'Доставка: EU — {ship_eu}, США — {ship_us}, бесплатно от {free_from} · 10–14 дней',
    all_cards: 'Смотреть все карты колоды',
    box_title: 'Что в коробке',
    coming_soon: 'Скоро',
    notify: 'Сообщить о выходе',
    picker_title: 'Выберите карту',
    picker_close: 'Закрыть',
    picker_all: 'Все миры',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  },
  be: {
    back: 'Назад у краму',
    gallery_aria: 'Фотаздымкі тавару',
    thumb: 'Фота {n} з {total}',
    format: 'Фармат',
    piece: 'Рэч',
    card: 'Карціна',
    color: 'Колер',
    size: 'Памер',
    hoodie: 'Худзі',
    tee: 'Футболка',
    color_black: 'Чорны',
    color_inspired: 'У тон карце',
    set_name: 'XL + стандартная',
    set_spec: 'Адну разглядаць, другой гуляць',
    two_xl_name: 'Дзве XL',
    two_xl_spec: 'Сабе і ў падарунак',
    save: 'Эканомія {amount}',
    free_shipping: 'Бясплатная дастаўка',
    change_card: 'Змяніць',
    by_birthday: 'Па дні нараджэння',
    birth_month: 'Месяц',
    birth_day: 'Дзень',
    birth_cta: 'Паказаць маю карту',
    birth_choose: 'Абраць гэту карту',
    birth_joker: '31 снежня — дзень Джокера: ён стаіць паміж тузам чэрваў і каралём пік. Абярыце адну з дзвюх.',
    message_add: 'Дадаць асабістае пасланне',
    message_free: 'бясплатна',
    message_remove: 'Прыбраць пасланне',
    recipient: 'Каму',
    sender: 'Ад каго',
    optional: 'неабавязкова',
    message: 'Пасланне',
    private: 'Адкрываць толькі па PIN',
    pin_label: 'PIN',
    pin_regen: 'Новы PIN',
    pin_note: 'Перадайце PIN атрымальніку — без яго пасланне не адкрыць.',
    qr_caption: 'Адсканіруйце — адкрыецца пасланне',
    qr_locked: 'Адкрыецца па PIN',
    qr_open: 'Адкрыць папярэдні прагляд паслання',
    qr_error: 'Прагляд недаступны — змяніце тэкст, каб паўтарыць',
    add: 'У кошык',
    added: 'Дададзена',
    shipping: 'Дастаўка: EU — {ship_eu}, ЗША — {ship_us}, бясплатна ад {free_from} · 10–14 дзён',
    all_cards: 'Глядзець усе карты калоды',
    box_title: 'Што ў каробцы',
    coming_soon: 'Хутка',
    notify: 'Паведаміць пра выхад',
    picker_title: 'Абярыце карту',
    picker_close: 'Закрыць',
    picker_all: 'Усе светы',
    months: ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'],
  },
  zh: {
    back: '返回商店',
    gallery_aria: '商品图片',
    thumb: '第 {n} 张，共 {total} 张',
    format: '规格',
    piece: '单品',
    card: '画作',
    color: '颜色',
    size: '尺码',
    hoodie: '连帽衫',
    tee: 'T 恤',
    color_black: '黑色',
    color_inspired: '随牌配色',
    set_name: 'XL + 标准',
    set_spec: '一副细看，一副对局',
    two_xl_name: '两副 XL',
    two_xl_spec: '自用一副，送人一副',
    save: '省 {amount}',
    free_shipping: '免运费',
    change_card: '更换',
    by_birthday: '按生日',
    birth_month: '月',
    birth_day: '日',
    birth_cta: '显示我的牌',
    birth_choose: '选择这张牌',
    birth_joker: '12 月 31 日属于小丑牌，它位于红心 A 与黑桃 K 之间。请从两张中选一张。',
    message_add: '添加个人留言',
    message_free: '免费',
    message_remove: '移除留言',
    recipient: '致',
    sender: '来自',
    optional: '可选',
    message: '留言',
    private: '仅凭 PIN 打开',
    pin_label: 'PIN',
    pin_regen: '新 PIN',
    pin_note: '请把 PIN 交给收礼人——没有它，留言无法打开。',
    qr_caption: '扫码即可打开留言',
    qr_locked: '凭 PIN 打开',
    qr_open: '打开留言预览',
    qr_error: '预览暂不可用 — 修改留言后重试',
    add: '加入购物车',
    added: '已加入',
    shipping: '运费：欧盟 {ship_eu}，美国 {ship_us}，满 {free_from} 包邮 · 10–14 天送达',
    all_cards: '浏览牌组中的每一张牌',
    box_title: '盒中有什么',
    coming_soon: '即将推出',
    notify: '上市时通知我',
    picker_title: '选择一张牌',
    picker_close: '关闭',
    picker_all: '全部世界',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  },
};

const apparel: Record<Lang, MerchCopy> = {
  en: {
    meta_title: 'Magister Apparel — Hoodies & Tees with Vasily Pochitsky’s Paintings',
    meta_description: `Hoodies (${price('hoodie', 'en')}) and T-shirts (${price('tee', 'en')}) featuring a painting from the Magister deck — your pick or your birth card — with a QR label that opens its story and your message.`,
    label: 'Apparel',
    title: 'Wear Your Card',
    sub: 'Hoodies and tees with a painting from the deck — chosen by you or by your birthday.',
    ships: 'Made to order.',
    about_title: 'About the piece',
    about: [
      'Pick any painting from the deck, or let your date of birth choose it for you.',
      'A unique QR code on the label opens the story of the card and your personal message. That’s what turns a hoodie into a gift that means something.',
    ],
    message_hint: 'It opens from the QR code on the label, together with the card’s story.',
    slides: {
      label: {
        alt: 'Black Magister hoodie with a QR neck label and a phone showing the card’s story page.',
        caption: 'The QR code on the label opens the card’s story and your message.',
      },
    },
  },
  ru: {
    meta_title: 'Одежда Magister — худи и футболки с картинами Почицкого',
    meta_description: `Худи (${price('hoodie', 'ru')}) и футболки (${price('tee', 'ru')}) с картиной из колоды Magister — на ваш выбор или по дате рождения. QR-код на бирке открывает историю карты и ваше послание.`,
    label: 'Одежда',
    title: 'Наденьте свою карту',
    sub: 'Худи и футболки с картиной из колоды — на ваш выбор или по дню рождения.',
    ships: 'Изготовим под заказ.',
    about_title: 'О вещи',
    about: [
      'Выберите любую картину колоды — или доверьте выбор дате своего рождения.',
      'QR-код на бирке открывает историю карты и ваше личное послание. Так худи становится подарком со смыслом.',
    ],
    message_hint: 'Откроется по QR-коду на бирке вместе с историей карты.',
    slides: {
      label: {
        alt: 'Чёрное худи Magister с QR-биркой и телефон со страницей истории карты.',
        caption: 'QR-код на бирке открывает историю карты и ваше послание.',
      },
    },
  },
  be: {
    meta_title: 'Адзенне Magister — худзі і футболкі з карцінамі Пачыцкага',
    meta_description: `Худзі (${price('hoodie', 'be')}) і футболкі (${price('tee', 'be')}) з карцінай з калоды Magister — на ваш выбар або па даце нараджэння. QR-код на бірцы адкрывае гісторыю карты і ваша пасланне.`,
    label: 'Адзенне',
    title: 'Апраніце сваю карту',
    sub: 'Худзі і футболкі з карцінай з калоды — на ваш выбар або па дні нараджэння.',
    ships: 'Вырабім пад заказ.',
    about_title: 'Пра рэч',
    about: [
      'Абярыце любую карціну калоды — або даверце выбар даце свайго нараджэння.',
      'QR-код на бірцы адкрывае гісторыю карты і ваша асабістае пасланне. Так худзі становіцца падарункам з сэнсам.',
    ],
    message_hint: 'Адкрыецца па QR-кодзе на бірцы разам з гісторыяй карты.',
    slides: {
      label: {
        alt: 'Чорнае худзі Magister з QR-біркай і тэлефон са старонкай гісторыі карты.',
        caption: 'QR-код на бірцы адкрывае гісторыю карты і ваша пасланне.',
      },
    },
  },
  zh: {
    meta_title: 'Magister 服装 — 印有瓦西里·波奇茨基画作的连帽衫与 T 恤',
    meta_description: `印有 Magister 牌组画作的连帽衫（${price('hoodie', 'zh')}）与 T 恤（${price('tee', 'zh')}）——由你挑选，或由你的生日决定。领标上的二维码可打开这张牌的故事与你的留言。`,
    label: '服装',
    title: '把你的牌穿在身上',
    sub: '印有牌组画作的连帽衫与 T 恤——由你挑选，或由你的生日决定。',
    ships: '按单制作。',
    about_title: '关于单品',
    about: [
      '从牌组中任选一幅画，或让你的出生日期替你选择。',
      '领标上独一无二的二维码，会打开这张牌的故事与你的个人留言。一件连帽衫，就此成为有意义的礼物。',
    ],
    message_hint: '扫描领标上的二维码，即可与这张牌的故事一同打开。',
    slides: {
      label: {
        alt: '带有二维码领标的黑色 Magister 连帽衫，手机上显示这张牌的故事页。',
        caption: '领标上的二维码会打开这张牌的故事与你的留言。',
      },
    },
  },
};

const prints: Record<Lang, MerchCopy> = {
  en: {
    meta_title: 'Magister Prints — Pochitsky’s Paintings at Original Size',
    meta_description: `A print of any painting from the Magister deck at its original 60 × 40 cm size, ${price('print', 'en')}. Pick it yourself or by birthday — with a QR code and a personal message.`,
    label: 'Prints',
    title: 'A Painting from the Deck, on Your Wall',
    sub: 'At original size: 60 × 40 cm.',
    ships: 'Printed to order.',
    about_title: 'About the print',
    about: [
      'Each print reproduces Vasily Pochitsky’s painting at its true size. Details you can barely see on a card come through in full.',
      'Choose the painting yourself — or by date of birth, for a gift with personal meaning.',
    ],
    message_hint: 'It opens from the QR code on the print, together with the painting’s story.',
    slides: {
      wall: { alt: 'Framed Magister print on a wall', caption: 'A print at home.' },
      detail: {
        alt: 'Original Magister painting prepared as an art print',
        caption: 'Details you can barely see on a card come through in full.',
      },
    },
  },
  ru: {
    meta_title: 'Принты Magister — картины Почицкого в размере оригинала',
    meta_description: `Принт любой картины из колоды Magister в размере оригинала, 60 × 40 см, — ${price('print', 'ru')}. Выберите сами или по дате рождения — с QR-кодом и личным посланием.`,
    label: 'Принты',
    title: 'Картина из колоды — на вашей стене',
    sub: 'В размере оригинала: 60 × 40 см.',
    ships: 'Напечатаем под заказ.',
    about_title: 'О принте',
    about: [
      'Каждый принт повторяет картину Василия Почицкого в её настоящем размере. Детали, которые на карте едва различимы, здесь видны целиком.',
      'Выберите картину сами — или по дате рождения: так получается подарок с личным смыслом.',
    ],
    message_hint: 'Откроется по QR-коду на принте вместе с историей картины.',
    slides: {
      wall: { alt: 'Принт Magister в раме на стене', caption: 'Принт в интерьере.' },
      detail: {
        alt: 'Оригинальная картина Magister, подготовленная к печати',
        caption: 'Детали, которые на карте едва различимы, на принте видны целиком.',
      },
    },
  },
  be: {
    meta_title: 'Прынты Magister — карціны Пачыцкага ў памеры арыгінала',
    meta_description: `Прынт любой карціны з калоды Magister у памеры арыгінала, 60 × 40 см, — ${price('print', 'be')}. Абярыце самі або па даце нараджэння — з QR-кодам і асабістым пасланнем.`,
    label: 'Прынты',
    title: 'Карціна з калоды — на вашай сцяне',
    sub: 'У памеры арыгінала: 60 × 40 см.',
    ships: 'Надрукуем пад заказ.',
    about_title: 'Пра прынт',
    about: [
      'Кожны прынт паўтарае карціну Васіля Пачыцкага ў яе сапраўдным памеры. Дэталі, якія на карце ледзь бачныя, тут відаць цалкам.',
      'Абярыце карціну самі — або па даце нараджэння: так атрымліваецца падарунак з асабістым сэнсам.',
    ],
    message_hint: 'Адкрыецца па QR-кодзе на прынце разам з гісторыяй карціны.',
    slides: {
      wall: { alt: 'Прынт Magister у раме на сцяне', caption: 'Прынт у інтэр’еры.' },
      detail: {
        alt: 'Арыгінальная карціна Magister, падрыхтаваная да друку',
        caption: 'Дэталі, якія на карце ледзь бачныя, на прынце відаць цалкам.',
      },
    },
  },
  zh: {
    meta_title: 'Magister 版画 — 原作尺寸的波奇茨基画作',
    meta_description: `牌组中任意一幅画的版画，原作尺寸 60 × 40 cm，${price('print', 'zh')}。由你挑选或按生日选择，附二维码与个人留言。`,
    label: '版画',
    title: '牌组里的一幅画，挂上你的墙',
    sub: '原作尺寸：60 × 40 cm。',
    ships: '按单印制。',
    about_title: '关于版画',
    about: [
      '每一幅版画都按真实尺寸复制瓦西里·波奇茨基的原作。牌面上几乎看不清的细节，在这里一览无余。',
      '自己挑选画作——或按出生日期选择，成为一份有个人意义的礼物。',
    ],
    message_hint: '扫描版画上的二维码，即可与画作的故事一同打开。',
    slides: {
      wall: { alt: '挂在墙上的 Magister 装框版画', caption: '版画挂在家中的样子。' },
      detail: { alt: '为印制版画准备的 Magister 原作', caption: '牌面上几乎看不清的细节，在版画上一览无余。' },
    },
  },
};

const deck: Record<Lang, MerchCopy> = {
  en: {
    meta_title: 'Magister Deck — 54 Paintings by Vasily Pochitsky | First Edition',
    meta_description: `An art deck of 54 cards where suit and rank hide inside each painting. XL 70 × 120 mm — ${price('xl', 'en')}, standard 50 × 80 mm — ${price('standard', 'en')}. Key booklet included. EU & US delivery in 10–14 days.`,
    label: 'The Deck',
    title: 'A Deck You Decode First',
    sub: '54 paintings by Vasily Pochitsky. The suit and rank of every card hide inside its scene.',
    ships: 'In stock: the edition is already printed.',
    about_title: 'About the deck',
    about: [
      'Hearts are the Olympic Gods, Diamonds the Bearers of Secrets, Clubs the Templars, Spades the Celebrities. The key to the symbols is in the booklet inside the box — and every card is online too.',
    ],
    message_hint: 'It opens from the QR code on your copy.',
    slides: {
      lifestyle: { alt: 'Magister XL deck on a wooden table', caption: 'XL deck: 54 cards and the key booklet in the box.' },
      pack: {
        alt: 'Magister deck box',
        caption: 'The QR code on the box opens card descriptions, character backstories and game rules.',
      },
      scale: { alt: '', caption: 'XL and standard, in proportion to each other.' },
      faces: { alt: 'Three cards from the Magister deck', caption: '54 paintings. Suit and rank hide inside each scene.' },
      back: { alt: 'Back of a Magister card', caption: 'The card back.' },
    },
  },
  ru: {
    meta_title: 'Колода Magister — 54 картины Василия Почицкого | Первый тираж',
    meta_description: `Арт-колода из 54 карт: масть и ранг спрятаны в сюжете картины. XL 70 × 120 мм — ${price('xl', 'ru')}, стандартная 50 × 80 мм — ${price('standard', 'ru')}. Буклет-ключ в коробке. Доставка в EU и US за 10–14 дней.`,
    label: 'Колода',
    title: 'Колода, которую сначала разгадывают',
    sub: '54 картины Василия Почицкого. Масть и ранг каждой карты спрятаны в сюжете.',
    ships: 'В наличии: тираж уже напечатан.',
    about_title: 'О колоде',
    about: [
      'Червы — олимпийские боги, бубны — носители тайн, трефы — тамплиеры, пики — знаменитости. Ключ к символам — в буклете внутри коробки, а все карты можно рассмотреть на сайте.',
    ],
    message_hint: 'Откроется по QR-коду на вашем экземпляре.',
    slides: {
      lifestyle: { alt: 'Колода Magister XL на деревянном столе', caption: 'Колода XL: 54 карты и буклет-ключ в коробке.' },
      pack: {
        alt: 'Коробка колоды Magister',
        caption: 'QR-код на коробке открывает описания карт, истории героев и правила игр.',
      },
      scale: { alt: '', caption: 'XL и стандартная — в пропорции друг к другу.' },
      faces: { alt: 'Три карты колоды Magister', caption: '54 картины. Масть и ранг спрятаны в сюжете.' },
      back: { alt: 'Рубашка карты Magister', caption: 'Рубашка карты.' },
    },
  },
  be: {
    meta_title: 'Калода Magister — 54 карціны Васіля Пачыцкага | Першы наклад',
    meta_description: `Арт-калода з 54 карт: масць і ранг схаваныя ў сюжэце карціны. XL 70 × 120 мм — ${price('xl', 'be')}, стандартная 50 × 80 мм — ${price('standard', 'be')}. Буклет-ключ у каробцы. Дастаўка ў EU і US за 10–14 дзён.`,
    label: 'Калода',
    title: 'Калода, якую спачатку разгадваюць',
    sub: '54 карціны Васіля Пачыцкага. Масць і ранг кожнай карты схаваныя ў сюжэце.',
    ships: 'У наяўнасці: наклад ужо надрукаваны.',
    about_title: 'Пра калоду',
    about: [
      'Чэрвы — алімпійскія багі, бубны — носьбіты таямніц, трэфы — тампліеры, пікі — знакамітасці. Ключ да сімвалаў — у буклеце ўнутры каробкі, а ўсе карты можна разгледзець на сайце.',
    ],
    message_hint: 'Адкрыецца па QR-кодзе на вашым асобніку.',
    slides: {
      lifestyle: { alt: 'Калода Magister XL на драўляным стале', caption: 'Калода XL: 54 карты і буклет-ключ у каробцы.' },
      pack: {
        alt: 'Каробка калоды Magister',
        caption: 'QR-код на каробцы адкрывае апісанні карт, гісторыі герояў і правілы гульняў.',
      },
      scale: { alt: '', caption: 'XL і стандартная — у прапорцыі адна да адной.' },
      faces: { alt: 'Тры карты калоды Magister', caption: '54 карціны. Масць і ранг схаваныя ў сюжэце.' },
      back: { alt: 'Кашуля карты Magister', caption: 'Кашуля карты.' },
    },
  },
  zh: {
    meta_title: 'Magister 牌组 — 瓦西里·波奇茨基的 54 幅画作 | 首版',
    meta_description: `一副 54 张的艺术扑克牌，花色与点数藏在每幅画里。XL 70 × 120 mm ${price('xl', 'zh')}，标准 50 × 80 mm ${price('standard', 'zh')}。盒内附解读小册子。发货至欧盟与美国，10–14 天送达。`,
    label: '牌组',
    title: '一副要先解读的牌',
    sub: '瓦西里·波奇茨基的 54 幅画。每张牌的花色与点数都藏在画面里。',
    ships: '现货：首版已印制完成。',
    about_title: '关于牌组',
    about: [
      '红心是奥林匹斯诸神，方块是秘密承载者，梅花是圣殿骑士，黑桃是名流。解读符号的钥匙在盒内的小册子里，所有牌也都能在网站上细看。',
    ],
    message_hint: '扫描你这副牌上的二维码即可打开。',
    slides: {
      lifestyle: { alt: '木桌上的 Magister XL 牌组', caption: 'XL 牌组：盒内 54 张牌与解读小册子。' },
      pack: { alt: 'Magister 牌盒', caption: '牌盒上的二维码可打开牌面说明、角色故事与游戏规则。' },
      scale: { alt: '', caption: 'XL 与标准尺寸的比例对照。' },
      faces: { alt: 'Magister 牌组中的三张牌', caption: '54 幅画。花色与点数藏在画面里。' },
      back: { alt: 'Magister 牌背', caption: '牌背。' },
    },
  },
};

const album: Record<Lang, MerchCopy> = {
  en: {
    meta_title: 'Magister Art Album — 152 Pages Beyond the Deck',
    meta_description:
      'The Magister art album: Vasily Pochitsky’s paintings at full scale, the stories of their characters, and how the cycle was made. 152 pages. Coming soon.',
    label: 'Art Album',
    title: 'Everything That Didn’t Fit in the Deck',
    sub: '152 pages on the paintings, characters and world of Magister.',
    ships: 'The album is coming soon.',
    about_title: 'About the album',
    about: ['Vasily Pochitsky’s paintings at full scale, the stories of their characters, and how the cycle came to be.'],
    message_hint: '',
    slides: {
      cover: { alt: 'Cover of the Magister art album', caption: '152 pages on the paintings, characters and world of Magister.' },
      spread: { alt: 'Spread from the Magister art album', caption: 'Paintings at full scale and the stories behind them.' },
    },
  },
  ru: {
    meta_title: 'Арт-альбом Magister — 152 страницы о мире колоды',
    meta_description:
      'Арт-альбом Magister: картины Василия Почицкого крупно, истории героев и то, как создавался цикл. 152 страницы. Скоро.',
    label: 'Арт-альбом',
    title: 'Всё, что не поместилось в колоду',
    sub: '152 страницы о картинах, героях и мире Magister.',
    ships: 'Альбом скоро выйдет.',
    about_title: 'Об альбоме',
    about: ['Картины Василия Почицкого крупно, истории персонажей и то, как создавался цикл.'],
    message_hint: '',
    slides: {
      cover: { alt: 'Обложка арт-альбома Magister', caption: '152 страницы о картинах, героях и мире Magister.' },
      spread: { alt: 'Разворот арт-альбома Magister', caption: 'Картины крупно и истории за ними.' },
    },
  },
  be: {
    meta_title: 'Арт-альбом Magister — 152 старонкі пра свет калоды',
    meta_description:
      'Арт-альбом Magister: карціны Васіля Пачыцкага буйна, гісторыі герояў і тое, як ствараўся цыкл. 152 старонкі. Хутка.',
    label: 'Арт-альбом',
    title: 'Усё, што не змясцілася ў калоду',
    sub: '152 старонкі пра карціны, герояў і свет Magister.',
    ships: 'Альбом хутка выйдзе.',
    about_title: 'Пра альбом',
    about: ['Карціны Васіля Пачыцкага буйна, гісторыі персанажаў і тое, як ствараўся цыкл.'],
    message_hint: '',
    slides: {
      cover: { alt: 'Вокладка арт-альбома Magister', caption: '152 старонкі пра карціны, герояў і свет Magister.' },
      spread: { alt: 'Разварот арт-альбома Magister', caption: 'Карціны буйна і гісторыі за імі.' },
    },
  },
  zh: {
    meta_title: 'Magister 艺术画册 — 牌组之外的 152 页',
    meta_description: 'Magister 艺术画册：瓦西里·波奇茨基画作的大幅呈现、角色故事与系列诞生的过程。152 页，即将推出。',
    label: '艺术画册',
    title: '牌组里装不下的一切',
    sub: '152 页，关于画作、角色与 Magister 的世界。',
    ships: '画册即将推出。',
    about_title: '关于画册',
    about: ['瓦西里·波奇茨基画作的大幅呈现、角色的故事，以及这个系列如何诞生。'],
    message_hint: '',
    slides: {
      cover: { alt: 'Magister 艺术画册封面', caption: '152 页，关于画作、角色与 Magister 的世界。' },
      spread: { alt: 'Magister 艺术画册内页', caption: '大幅画作与背后的故事。' },
    },
  },
};

export type DeckBoxCopy = ReadonlyArray<{ label: string; value: string }>;

export const deckBoxCopy: Record<Lang, DeckBoxCopy> = {
  en: [
    { label: 'Cards', value: '54 cards, each one a painting by Vasily Pochitsky' },
    { label: 'Key', value: 'A booklet that explains the symbols of every suit and rank' },
    { label: 'XL', value: '70 × 120 mm · edition of 500' },
    { label: 'Standard', value: '50 × 80 mm · edition of 100' },
  ],
  ru: [
    { label: 'Карты', value: '54 карты — каждая картина Василия Почицкого' },
    { label: 'Ключ', value: 'Буклет с расшифровкой символов каждой масти и ранга' },
    { label: 'XL', value: '70 × 120 мм · тираж 500' },
    { label: 'Стандартная', value: '50 × 80 мм · тираж 100' },
  ],
  be: [
    { label: 'Карты', value: '54 карты — кожная карціна Васіля Пачыцкага' },
    { label: 'Ключ', value: 'Буклет з расшыфроўкай сімвалаў кожнай масці і рангу' },
    { label: 'XL', value: '70 × 120 мм · наклад 500' },
    { label: 'Стандартная', value: '50 × 80 мм · наклад 100' },
  ],
  zh: [
    { label: '牌', value: '54 张牌，每一张都是瓦西里·波奇茨基的画作' },
    { label: '解读', value: '一本手册，解释每种花色与点数的符号' },
    { label: 'XL', value: '70 × 120 毫米 · 限量 500 副' },
    { label: '标准版', value: '50 × 80 毫米 · 限量 100 副' },
  ],
};

export const productCopy: Record<ProductKind, Record<Lang, MerchCopy>> = { apparel, prints, deck, album };
