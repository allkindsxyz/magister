import type { Lang } from './utils';

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
  meta_title: 'Magister Merch — A Card. A Story. A Memory.',
  meta_description:
    'Wearable Magister art with a personal digital story. Choose a card, make it yours, and give it a memory that stays.',
  back: 'Back to Artifacts',
  label: 'Magister Merch',
  hero_image_alt:
    'Black Magister hoodie with a QR neck label and a phone showing the personal digital story.',
  hero: {
    title: 'A Card. A Story. A Memory.',
    sub: 'Wearable art with a story of its own.',
    body: [
      'A Magister card is more than an image. Every card belongs to one of four worlds and carries its own mythology, characters, and meaning.',
      'We bring these stories into the physical world. Choose the artwork you connect with. Wear it, give it, or keep it as a reminder of a person, a moment, or an idea.',
      'And every piece comes with something more: its own digital story, accessible through a unique QR code.',
    ],
    cta_create: 'Create Your Piece',
  },
  config: {
    title: 'Make It Yours',
    body: 'Choose the piece, the artwork, and a personal message. The preview updates as you go.',
    step1: '1. Choose Your Piece',
    step2: '2. Choose Your Card',
    step3: '3. Choose Your Style',
    step4: '4. Make It Personal',
    product_hoodie: 'Hoodie',
    product_tee: 'T-shirt',
    card_tab_date: 'Your date',
    card_tab_browse: 'Browse 54',
    birth_month: 'Month',
    birth_day: 'Day',
    birth_cta: 'Discover My Card',
    birth_choose: 'Choose This Card',
    birth_joker:
      '31 December is the Joker in Camp’s calendar — between the Ace of Hearts and the King of Spades. Choose the painting you want to wear.',
    change_card: 'Change Card',
    browse_cards: 'Explore the Cards',
    no_card: 'No card selected yet',
    color: 'Color',
    color_inspired: 'Card-inspired',
    color_black: 'Black',
    size: 'Size',
    format: '',
    for_whom: 'Who Is It For?',
    for_self: 'For Myself',
    for_gift: 'It’s a Gift',
    recipient: 'Recipient’s name',
    sender: 'Sender’s name (optional)',
    message: 'Personal message',
    message_optional: 'Personal message (optional)',
    visibility: 'Message visibility',
    visibility_public: 'Public',
    visibility_private: 'Private (PIN protected)',
    visibility_note:
      'Your message can be part of the public story or kept private, accessible only with a PIN.',
    pin_label: 'Your PIN',
    pin_regen: 'Regenerate',
    pin_note: 'You will need this PIN to read a private message on the digital story page.',
    preview_title: 'Every Piece Has a Story',
    preview_note: 'Later, a unique QR on the piece opens this story again.',
    preview_badge: 'Preview',
    preview_created: 'Created',
    preview_locked: 'Private message',
    preview_pin_prompt: 'Enter PIN to read',
    preview_qr: 'Scan to Discover the Story',
    read_more: 'Read full description',
    read_less: 'Show less',
    ready: 'Your Magister piece is ready to be imagined.',
    coming_soon: 'Coming Soon — Personal Orders',
  },
  outro: {
    line: 'A card you wear. A story that stays.',
    secondary: 'Explore the Magister Universe',
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
  ...en,
  meta_title: 'Magister Merch — Карта. История. Память.',
  meta_description:
    'Носимое искусство Magister с личной цифровой историей. Выберите карту, сделайте её своей и сохраните память.',
  back: 'Назад к артефактам',
  hero_image_alt:
    'Чёрное худи Magister с QR-биркой и телефон с личной цифровой историей.',
  hero: {
    title: 'Карта. История. Память.',
    sub: 'Носимое искусство со своей историей.',
    body: [
      'Карта Magister — больше, чем изображение. Каждая принадлежит одному из четырёх миров и несёт свою мифологию, героев и смысл.',
      'Мы переносим эти истории в физический мир. Выберите работу, которая откликается. Носите её, подарите или сохраните как напоминание о человеке, моменте или идее.',
      'И у каждой вещи есть ещё кое-что: собственная цифровая история, доступная по уникальному QR-коду.',
    ],
    cta_create: 'Создать свою вещь',
  },
  config: {
    ...en.config,
    title: 'Сделайте её своей',
    body: 'Выберите вещь, карту и личное послание. Превью обновляется по ходу.',
    step1: '1. Выберите вещь',
    step2: '2. Выберите карту',
    step3: '3. Выберите стиль',
    step4: '4. Сделайте личной',
    product_hoodie: 'Худи',
    product_tee: 'Футболка',
    card_tab_date: 'По дате',
    card_tab_browse: '54 карты',
    birth_month: 'Месяц',
    birth_day: 'День',
    birth_cta: 'Открыть мою карту',
    birth_choose: 'Выбрать эту карту',
    birth_joker:
      '31 декабря в календаре Кэмпа — джокер, между тузом червей и королём пик. Выберите картину, которую хотите носить.',
    change_card: 'Сменить карту',
    browse_cards: 'Смотреть карты',
    no_card: 'Карта ещё не выбрана',
    color: 'Цвет',
    color_inspired: 'В тоне карты',
    color_black: 'Чёрный',
    size: 'Размер',
    format: '',
    for_whom: 'Для кого?',
    for_self: 'Для себя',
    for_gift: 'Это подарок',
    recipient: 'Имя получателя',
    sender: 'Имя отправителя (необязательно)',
    message: 'Личное послание',
    message_optional: 'Личное послание (необязательно)',
    visibility: 'Видимость послания',
    visibility_public: 'Публичное',
    visibility_private: 'Приватное (PIN)',
    visibility_note:
      'Послание может быть частью публичной истории или остаться приватным — только по PIN.',
    pin_label: 'Ваш PIN',
    pin_regen: 'Сгенерировать снова',
    pin_note: 'PIN понадобится, чтобы прочитать приватное послание на странице истории.',
    preview_title: 'У каждой вещи есть история',
    preview_note: 'Позже уникальный QR на вещи снова откроет эту историю.',
    preview_badge: 'Предпросмотр',
    preview_created: 'Создано',
    preview_locked: 'Приватное послание',
    preview_pin_prompt: 'Введите PIN',
    preview_qr: 'Отсканируйте, чтобы открыть историю',
    read_more: 'Читать полное описание',
    read_less: 'Свернуть',
    ready: 'Ваша вещь Magister готова к воображению.',
    coming_soon: 'Скоро — персональные заказы',
  },
  outro: {
    line: 'Карта, которую носят. История, которая остаётся.',
    secondary: 'Исследовать вселенную Magister',
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
  ...ru,
  meta_title: 'Magister Merch — Карта. Гісторыя. Памяць.',
  meta_description:
    'Носнае мастацтва Magister з асабістай лічбавай гісторыяй. Абярыце карту, зрабіце яе сваёй і захавайце памяць.',
  back: 'Назад да артэфактаў',
  hero_image_alt:
    'Чорнае худзі Magister з QR-біркай і тэлефон з асабістай лічбавай гісторыяй.',
  hero: {
    title: 'Карта. Гісторыя. Памяць.',
    sub: 'Носнае мастацтва са сваёй гісторыяй.',
    body: [
      'Карта Magister — больш, чым выява. Кожная належыць аднаму з чатырох светаў і нясе сваю міфалогію, герояў і сэнс.',
      'Мы пераносім гэтыя гісторыі ў фізічны свет. Абярыце працу, якая адгукаецца. Насіце яе, падарыце ці захавайце як напамін пра чалавека, момант ці ідэю.',
      'І ў кожнай рэчы ёсць яшчэ нешта: уласная лічбавая гісторыя праз унікальны QR-код.',
    ],
    cta_create: 'Стварыць сваю рэч',
  },
  config: {
    ...ru.config,
    title: 'Зрабіце яе сваёй',
    body: 'Абярыце рэч, карту і асабістае пасланне. Прэв’ю абнаўляецца па ходзе.',
    card_tab_date: 'Па даце',
    card_tab_browse: '54 карты',
    birth_month: 'Месяц',
    birth_day: 'Дзень',
    birth_cta: 'Адкрыць маю карту',
    birth_choose: 'Абраць гэту карту',
    birth_joker:
      '31 снежня ў календары Кэмпа — джокер, паміж тузам чэрваў і каралём пік. Абярыце карціну, якую хочаце насіць.',
    change_card: 'Змяніць карту',
    browse_cards: 'Глядзець карты',
    no_card: 'Карта яшчэ не абрана',
    for_self: 'Для сябе',
    for_gift: 'Гэта падарунак',
    recipient: 'Імя атрымальніка',
    sender: 'Імя адпраўніка (неабавязкова)',
    message: 'Асабістае пасланне',
    message_optional: 'Асабістае пасланне (неабавязкова)',
    preview_note: 'Пазней унікальны QR на рэчы зноў адкрые гэту гісторыю.',
    read_more: 'Чытаць поўнае апісанне',
    read_less: 'Згарнуць',
    ready: 'Ваша рэч Magister гатова да ўяўлення.',
    coming_soon: 'Хутка — персанальныя заказы',
  },
  outro: {
    line: 'Карта, якую носяць. Гісторыя, якая застаецца.',
    secondary: 'Даследаваць сусвет Magister',
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
  ...en,
  meta_title: 'Magister Merch — 一张牌。一个故事。一份记忆。',
  meta_description: '可穿戴的 Magister 艺术，附带个人数字故事。选择一张牌，让它成为你的，留下一份记忆。',
  back: '返回藏品',
  hero_image_alt: '带有 QR 领标的黑色 Magister 连帽衫，手机上显示个人数字故事。',
  hero: {
    title: '一张牌。一个故事。一份记忆。',
    sub: '自带故事的可穿戴艺术。',
    body: [
      'Magister 的牌远不止图像。每张牌属于四个世界之一，承载自己的神话、角色与意义。',
      '我们把这些故事带入现实世界。选择与你共鸣的作品。穿上它、赠予它，或把它当作对某人、某刻、某念的提醒。',
      '每一件还有更多：专属的数字故事，通过独一无二的二维码开启。',
    ],
    cta_create: '创作你的单品',
  },
  config: {
    ...en.config,
    title: '让它成为你的',
    body: '选择单品、作品与个人留言。预览会随选择更新。',
    step1: '1. 选择单品',
    step2: '2. 选择牌',
    step3: '3. 选择风格',
    step4: '4. 个性化',
    product_hoodie: '连帽衫',
    product_tee: 'T 恤',
    card_tab_date: '按日期',
    card_tab_browse: '浏览 54 张',
    birth_month: '月',
    birth_day: '日',
    birth_cta: '发现我的牌',
    birth_choose: '选择这张牌',
    birth_joker: '在 Camp 历法中，12 月 31 日是小丑牌——位于红心 A 与黑桃 K 之间。选择你想穿上的画作。',
    change_card: '更换牌',
    browse_cards: '浏览牌组',
    no_card: '尚未选择牌',
    color: '颜色',
    color_inspired: '随牌配色',
    color_black: '黑色',
    size: '尺码',
    format: '',
    for_whom: '为谁而作？',
    for_self: '给我自己',
    for_gift: '作为礼物',
    recipient: '收件人姓名',
    sender: '寄件人姓名（可选）',
    message: '个人留言',
    message_optional: '个人留言（可选）',
    visibility: '留言可见性',
    visibility_public: '公开',
    visibility_private: '私密（PIN）',
    visibility_note: '留言可以成为公开故事的一部分，或设为私密，仅凭 PIN 查看。',
    pin_label: '你的 PIN',
    pin_regen: '重新生成',
    pin_note: '在数字故事页阅读私密留言时需要此 PIN。',
    preview_title: '每件作品都有故事',
    preview_note: '之后，单品上的专属二维码会再次打开这个故事。',
    preview_badge: '预览',
    preview_created: '创建于',
    preview_locked: '私密留言',
    preview_pin_prompt: '输入 PIN 查看',
    preview_qr: '扫码发现故事',
    read_more: '阅读完整描述',
    read_less: '收起',
    ready: '你的 Magister 单品已准备好被想象。',
    coming_soon: '即将推出 — 个人订购',
  },
  outro: {
    line: '穿在身上的牌。留下来的故事。',
    secondary: '探索 Magister 宇宙',
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
  meta_title: 'Magister Art Prints — A World. On Your Wall.',
  meta_description:
    'Museum-quality Magister art prints in the original 60 × 40 cm format, with a personal digital story.',
  label: 'Art Prints',
  hero_image_alt: '',
  hero: {
    title: 'A World. On Your Wall.',
    sub: 'A true copy in the original format.',
    body: [
      'Each Magister print is a faithful copy of Vasily Pochitsky’s original painting, produced in its original size: 60 × 40 cm.',
      'Choose the artwork that speaks to you. Keep it, gift it, or hang it as a lasting reminder of a person, a moment, or an idea.',
      'And every print comes with something more: its own digital story, accessible through a unique QR code.',
    ],
    cta_create: 'Create Your Print',
  },
  config: {
    ...en.config,
    title: 'Make It Yours',
    body: 'Choose the artwork and add a personal message. The preview updates as you go.',
    step1: '',
    step2: '1. Choose Your Artwork',
    step3: '',
    step4: '2. Make It Personal',
    format: '60 × 40 cm',
    birth_joker:
      '31 December is the Joker in Camp’s calendar — between the Ace of Hearts and the King of Spades. Choose the painting you want as a print.',
    ready: 'Your Magister print is ready to be imagined.',
    coming_soon: 'Coming Soon — Personal Orders',
  },
  outro: {
    line: 'A painting to keep. A story that stays.',
    secondary: 'Explore the Magister Universe',
  },
};

const printsRu: MerchCopy = {
  ...ru,
  meta_title: 'Magister Art Prints — Мир. На вашей стене.',
  meta_description:
    'Художественные принты Magister в оригинальном формате 60 × 40 см с личной цифровой историей.',
  label: 'Арт-принты',
  hero_image_alt: '',
  hero: {
    title: 'Мир. На вашей стене.',
    sub: 'Точная копия в оригинальном формате.',
    body: [
      'Каждый принт Magister — точная копия оригинальной картины Василия Почицкого в её исходном размере: 60 × 40 см.',
      'Выберите работу, которая откликается. Оставьте себе, подарите или повесьте как напоминание о человеке, моменте или идее.',
      'И у каждого принта есть ещё кое-что: собственная цифровая история, доступная по уникальному QR-коду.',
    ],
    cta_create: 'Создать свой принт',
  },
  config: {
    ...ru.config,
    title: 'Сделайте его своим',
    body: 'Выберите работу и добавьте личное послание. Превью обновляется по ходу.',
    step1: '',
    step2: '1. Выберите работу',
    step3: '',
    step4: '2. Сделайте личным',
    format: '60 × 40 см',
    birth_joker:
      '31 декабря в календаре Кэмпа — джокер, между тузом червей и королём пик. Выберите картину для принта.',
    ready: 'Ваш принт Magister готов к воображению.',
    coming_soon: 'Скоро — персональные заказы',
  },
  outro: {
    line: 'Картина, которую хранят. История, которая остаётся.',
    secondary: 'Исследовать вселенную Magister',
  },
};

const printsBe: MerchCopy = {
  ...be,
  meta_title: 'Magister Art Prints — Свет. На вашай сцяне.',
  meta_description:
    'Мастацкія прынта Magister у арыгінальным фармаце 60 × 40 см з асабістай лічбавай гісторыяй.',
  label: 'Арт-прынта',
  hero_image_alt: '',
  hero: {
    title: 'Свет. На вашай сцяне.',
    sub: 'Дакладная копія ў арыгінальным фармаце.',
    body: [
      'Кожны прынт Magister — дакладная копія арыгінальнай карціны Васіля Пачыцкага ў яе зыходным памеры: 60 × 40 см.',
      'Абярыце працу, якая адгукаецца. Пакіньце сабе, падарыце ці павесьце як напамін пра чалавека, момант ці ідэю.',
      'І ў кожнага прынта ёсць яшчэ нешта: уласная лічбавая гісторыя праз унікальны QR-код.',
    ],
    cta_create: 'Стварыць свой прынт',
  },
  config: {
    ...be.config,
    title: 'Зрабіце яго сваім',
    body: 'Абярыце працу і дадайце асабістае пасланне. Прэв’ю абнаўляецца па ходзе.',
    step1: '',
    step2: '1. Абярыце працу',
    step3: '',
    step4: '2. Зрабіце асабістым',
    format: '60 × 40 см',
    birth_joker:
      '31 снежня ў календары Кэмпа — джокер, паміж тузам чэрваў і каралём пік. Абярыце карціну для прынта.',
    ready: 'Ваш прынт Magister гатовы да ўяўлення.',
    coming_soon: 'Хутка — персанальныя заказы',
  },
  outro: {
    line: 'Карціна, якую захоўваюць. Гісторыя, якая застаецца.',
    secondary: 'Даследаваць сусвет Magister',
  },
};

const printsZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister Art Prints — 一个世界。挂在你的墙上。',
  meta_description: 'Magister 艺术版画，原作尺寸 60 × 40 cm，附带个人数字故事。',
  label: '艺术版画',
  hero_image_alt: '',
  hero: {
    title: '一个世界。挂在你的墙上。',
    sub: '原作尺寸的忠实复制。',
    body: [
      '每一幅 Magister 版画，都是 Vasily Pochitsky 原作的忠实复制，尺寸与原画一致：60 × 40 cm。',
      '选择与你共鸣的作品。收藏它、赠予它，或把它挂起，作为对某人、某刻、某念的长久存提醒。',
      '每一幅还有更多：专属的数字故事，通过独一无二的二维码开启。',
    ],
    cta_create: '创作你的版画',
  },
  config: {
    ...zh.config,
    title: '让它成为你的',
    body: '选择作品并写下个人留言。预览会随选择更新。',
    step1: '',
    step2: '1. 选择作品',
    step3: '',
    step4: '2. 个性化',
    format: '60 × 40 cm',
    birth_joker: '在 Camp 历法中，12 月 31 日是小丑牌——位于红心 A 与黑桃 K 之间。选择你想印成版画的画作。',
    ready: '你的 Magister 版画已准备好被想象。',
    coming_soon: '即将推出 — 个人订购',
  },
  outro: {
    line: '一幅可留存的画。一段留下来的故事。',
    secondary: '探索 Magister 宇宙',
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
  meta_title: 'Magister Deck — 54 Cards. 4 Worlds. One Universe.',
  meta_description:
    'An original Magister deck of 54 cards — with a personal digital story attached to your copy.',
  label: 'The Deck',
  hero_image_alt: '',
  hero: {
    title: '54 Cards. 4 Worlds. One Universe.',
    sub: 'An original deck made to be explored and played.',
    body: [
      'An original deck of 54 cards in regular and XL size. Artworks, characters and stories come together in a deck made to be explored and played.',
      'Keep it, gift it, or deal the first hand — each copy can carry a personal message through a unique QR code.',
      'The paintings stay with you. The story opens again whenever you scan.',
    ],
    cta_create: 'Personalize Your Deck',
  },
  config: {
    ...en.config,
    title: 'Make It Yours',
    body: 'Add a personal message to your deck. The preview updates as you go.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Make It Personal',
    format: 'Regular · XL',
    ready: 'Your Magister deck is ready to be imagined.',
    coming_soon: 'Coming Soon — Personal Orders',
  },
  outro: {
    line: 'A deck to play. A story that stays.',
    secondary: 'Explore the Magister Universe',
  },
};

const deckRu: MerchCopy = {
  ...ru,
  meta_title: 'Magister Deck — 54 карты. 4 мира. Одна вселенная.',
  meta_description:
    'Оригинальная колода Magister из 54 карт — с личной цифровой историей для вашего экземпляра.',
  label: 'Колода',
  hero_image_alt: '',
  hero: {
    title: '54 карты. 4 мира. Одна вселенная.',
    sub: 'Оригинальная колода, которую хочется изучать и разыгрывать.',
    body: [
      'Оригинальная колода из 54 карт — обычный и XL размер. Картины, персонажи и истории сходятся в колоде, которую хочется изучать и разыгрывать.',
      'Оставьте себе, подарите или сдайте первую раздачу — каждый экземпляр может нести личное послание через уникальный QR-код.',
      'Картины остаются с вами. История открывается снова при каждом скане.',
    ],
    cta_create: 'Персонализировать колоду',
  },
  config: {
    ...ru.config,
    title: 'Сделайте её своей',
    body: 'Добавьте личное послание к колоде. Превью обновляется по ходу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Сделайте личным',
    format: 'Обычный · XL',
    ready: 'Ваша колода Magister готова к воображению.',
    coming_soon: 'Скоро — персональные заказы',
  },
  outro: {
    line: 'Колода для игры. История, которая остаётся.',
    secondary: 'Исследовать вселенную Magister',
  },
};

const deckBe: MerchCopy = {
  ...be,
  meta_title: 'Magister Deck — 54 карты. 4 светы. Адзін сусвет.',
  meta_description:
    'Арыгінальная калода Magister з 54 карт — з асабістай лічбавай гісторыяй для вашага асобніка.',
  label: 'Калода',
  hero_image_alt: '',
  hero: {
    title: '54 карты. 4 светы. Адзін сусвет.',
    sub: 'Арыгінальная калода, якую хочацца вывучаць і разыгрываць.',
    body: [
      'Арыгінальная калода з 54 карт — звычайны і XL памер. Карціны, персанажы і гісторыі сыходзяцца ў калодзе, якую хочацца вывучаць і разыгрываць.',
      'Пакіньце сабе, падарыце ці здасце першую раздачу — кожны асобнік можа несці асабістае пасланне праз унікальны QR-код.',
      'Карціны застаюцца з вамі. Гісторыя адкрываецца зноў пры кожным скане.',
    ],
    cta_create: 'Персаналізаваць калоду',
  },
  config: {
    ...be.config,
    title: 'Зрабіце яе сваёй',
    body: 'Дадайце асабістае пасланне да калоды. Прэв’ю абнаўляецца па ходзе.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Зрабіце асабістым',
    format: 'Звычайны · XL',
    ready: 'Ваша калода Magister гатова да ўяўлення.',
    coming_soon: 'Хутка — персанальныя заказы',
  },
  outro: {
    line: 'Калода для гульні. Гісторыя, якая застаецца.',
    secondary: 'Даследаваць сусвет Magister',
  },
};

const deckZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister Deck — 54 张牌。4 个世界。一个宇宙。',
  meta_description: '原作 Magister 54 张牌组——可为你的那一副附上个人数字故事。',
  label: '牌组',
  hero_image_alt: '',
  hero: {
    title: '54 张牌。4 个世界。一个宇宙。',
    sub: '一副值得探索与对局的原作牌组。',
    body: [
      '原作 54 张牌组，提供常规与 XL 尺寸。画作、角色与故事汇于一副可探索、可对局的牌中。',
      '收藏它、赠予它，或发出第一手牌——每一副都可通过独特二维码承载个人留言。',
      '画作留在身边。故事在每次扫码时再次开启。',
    ],
    cta_create: '个性化你的牌组',
  },
  config: {
    ...zh.config,
    title: '让它成为你的',
    body: '为牌组写下个人留言。预览会随选择更新。',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. 个性化',
    format: '常规 · XL',
    ready: '你的 Magister 牌组已准备好被想象。',
    coming_soon: '即将推出 — 个人订购',
  },
  outro: {
    line: '一副可对局的牌。一段留下来的故事。',
    secondary: '探索 Magister 宇宙',
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
  meta_title: 'Magister Art Album — The Cards. The Stories. The Universe.',
  meta_description:
    'The Magister art album — 152 pages through the original artworks, characters and stories, with a personal digital message.',
  label: 'Art Album',
  hero_image_alt: '',
  hero: {
    title: 'The Cards. The Stories. The Universe.',
    sub: 'The world of Magister in 152 pages.',
    body: [
      'A visual journey through the original artworks, characters and stories behind the cards. An album dedicated to the art and creation of Magister.',
      'A gateway into an alternative mythology where alchemy, history and modernity intertwine.',
      'Keep it, gift it, or leave it open on the table — each copy can carry a personal message through a unique QR code.',
    ],
    cta_create: 'Personalize Your Album',
  },
  config: {
    ...en.config,
    title: 'Make It Yours',
    body: 'Add a personal message to your album. The preview updates as you go.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Make It Personal',
    format: '152 pages',
    ready: 'Your Magister album is ready to be imagined.',
    coming_soon: 'Coming Soon — Personal Orders',
  },
  outro: {
    line: 'A book to keep. A story that stays.',
    secondary: 'Explore the Magister Universe',
  },
};

const albumRu: MerchCopy = {
  ...ru,
  meta_title: 'Magister Art Album — Карты. Истории. Вселенная.',
  meta_description:
    'Арт-альбом Magister — 152 страницы оригинальных работ, персонажей и историй с личным цифровым посланием.',
  label: 'Арт-альбом',
  hero_image_alt: '',
  hero: {
    title: 'Карты. Истории. Вселенная.',
    sub: 'Мир Magister на 152 страницах.',
    body: [
      'Визуальное путешествие по оригинальным работам, персонажам и историям за картами. Альбом об искусстве и создании Magister.',
      'Врата в альтернативную мифологию, где алхимия, история и современность переплетаются.',
      'Оставьте себе, подарите или оставьте раскрытым на столе — каждый экземпляр может нести личное послание через уникальный QR-код.',
    ],
    cta_create: 'Персонализировать альбом',
  },
  config: {
    ...ru.config,
    title: 'Сделайте его своим',
    body: 'Добавьте личное послание к альбому. Превью обновляется по ходу.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Сделайте личным',
    format: '152 страницы',
    ready: 'Ваш альбом Magister готов к воображению.',
    coming_soon: 'Скоро — персональные заказы',
  },
  outro: {
    line: 'Книга, которую хранят. История, которая остаётся.',
    secondary: 'Исследовать вселенную Magister',
  },
};

const albumBe: MerchCopy = {
  ...be,
  meta_title: 'Magister Art Album — Карты. Гісторыі. Сусвет.',
  meta_description:
    'Арт-альбом Magister — 152 старонкі арыгінальных прац, персанажаў і гісторый з асабістым лічбавым пасланнем.',
  label: 'Арт-альбом',
  hero_image_alt: '',
  hero: {
    title: 'Карты. Гісторыі. Сусвет.',
    sub: 'Свет Magister на 152 старонках.',
    body: [
      'Візуальнае падарожжа па арыгінальных працах, персанажах і гісторыях за картамі. Альбом пра мастацтва і стварэнне Magister.',
      'Брама ў альтэрнатыўную міфалогію, дзе алхімія, гісторыя і сучаснасць пераплятаюцца.',
      'Пакіньце сабе, падарыце ці пакіньце раскрытым на стале — кожны асобнік можа несці асабістае пасланне праз унікальны QR-код.',
    ],
    cta_create: 'Персаналізаваць альбом',
  },
  config: {
    ...be.config,
    title: 'Зрабіце яго сваім',
    body: 'Дадайце асабістае пасланне да альбома. Прэв’ю абнаўляецца па ходзе.',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. Зрабіце асабістым',
    format: '152 старонкі',
    ready: 'Ваш альбом Magister гатовы да ўяўлення.',
    coming_soon: 'Хутка — персанальныя заказы',
  },
  outro: {
    line: 'Кніга, якую захоўваюць. Гісторыя, якая застаецца.',
    secondary: 'Даследаваць сусвет Magister',
  },
};

const albumZh: MerchCopy = {
  ...zh,
  meta_title: 'Magister Art Album — 牌。故事。宇宙。',
  meta_description: 'Magister 艺术画册——152 页原作、角色与故事，并可附上个人数字留言。',
  label: '艺术画册',
  hero_image_alt: '',
  hero: {
    title: '牌。故事。宇宙。',
    sub: '152 页中的 Magister 世界。',
    body: [
      '一次穿越原作、角色与牌背故事的视觉旅程。一本献给 Magister 艺术与创作的画册。',
      '通往另类神话的门径——炼金、历史与现代在此交织。',
      '收藏它、赠予它，或让它摊开在桌上——每一册都可通过独特二维码承载个人留言。',
    ],
    cta_create: '个性化你的画册',
  },
  config: {
    ...zh.config,
    title: '让它成为你的',
    body: '为画册写下个人留言。预览会随选择更新。',
    step1: '',
    step2: '',
    step3: '',
    step4: '1. 个性化',
    format: '152 页',
    ready: '你的 Magister 画册已准备好被想象。',
    coming_soon: '即将推出 — 个人订购',
  },
  outro: {
    line: '一本可留存的书。一段留下来的故事。',
    secondary: '探索 Magister 宇宙',
  },
};

export const albumCopy: Record<Lang, MerchCopy> = {
  en: albumEn,
  ru: albumRu,
  be: albumBe,
  zh: albumZh,
};

export const productCopy: Record<ProductKind, Record<Lang, MerchCopy>> = {
  apparel: merchCopy,
  prints: printsCopy,
  deck: deckCopy,
  album: albumCopy,
};
