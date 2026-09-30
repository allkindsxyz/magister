import type { DeepDiveCard } from './types';

export const queenSpades: DeepDiveCard = {
  card_id: 'queen-spades',
  locales: {
    en: {
      card_title: 'Anna and the Scarab',
      questions: [
        {
          level: 'Story',
          question: 'Which number became her artistic calling card?',
          options: [
            {
              id: 'A',
              text: 'The miniature The Dying Swan',
            },
            {
              id: 'B',
              text: 'A court hymn of the Imperial School',
            },
            {
              id: 'C',
              text: 'Refusal of solo parts in favor of the corps de ballet',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — The Dying Swan became her mark.',
            detail:
              'Leading ballerina of the Mariinsky Theatre: technique plus emotion. A fragile build the card does not treat as a sentence — persistence and expressiveness overrode it.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the miniature The Dying Swan.',
            why: 'She rose to leading roles; she did not dissolve into the corps. The school is training, not a repertoire number.',
          },
          difficulty_rationale:
            'The main scene of the art. The swan is familiar, but easy to confuse with the institutions she passed through.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What does the scarab mean in this pair?',
          options: [
            {
              id: 'A',
              text: 'Death and burial — a rhyme to the dying swan',
            },
            {
              id: 'B',
              text: 'A symbol of the sun and of return',
            },
            {
              id: 'C',
              text: 'Heavy earth to which the dance is chained',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the scarab is sun and return, not the grave.',
            detail:
              'The swan in the repertoire dies. The beetle beside it is the reverse sign: cycle, light, coming back. The pair holds both poles; it does not fold them into one burial.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the scarab is a symbol of the sun and of return.',
            why: 'The Dying Swan tempts you to read the beetle as death. The card sets another meaning: sun and return, not grave soil.',
          },
          difficulty_rationale:
            'A classic suit trap: the visible death-dance against the summary formula of the sun.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What, according to the card, did her tours with the ballet do?',
          options: [
            {
              id: 'A',
              text: 'Left it exclusively a court art',
            },
            {
              id: 'B',
              text: 'Reduced it to one number watched only in Petersburg',
            },
            {
              id: 'C',
              text: 'Brought classical ballet to a wide audience in many countries',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — ballet ceased to be only a court art.',
            detail:
              'Her own company and the world. After 1931 the name remained a sign of grace and feeling carried by movement. Not a cage of the Mariinsky Theatre.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — her performances made ballet available to a wide audience.',
            why: 'The card expressly lifts the exclusivity of the court. The swan is a calling card, not the limit of geography.',
          },
          difficulty_rationale:
            'The imperial school and one famous number overshadow the thesis: she opened ballet outward.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Анна и скарабей',
      questions: [
        {
          level: 'Story',
          question: 'Какой номер стал её творческой визитной карточкой?',
          options: [
            {
              id: 'A',
              text: 'Миниатюра «Умирающий лебедь»',
            },
            {
              id: 'B',
              text: 'Придворный гимн Императорского училища',
            },
            {
              id: 'C',
              text: 'Отказ от сольных партий в пользу кордебалета',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — «Умирающий лебедь» стал её знаком.',
            detail:
              'Ведущая балерина Мариинского театра: техника плюс эмоциональность. Хрупкое телосложение карта не делает приговором — его перекрыли упорство и выразительность.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — миниатюра «Умирающий лебедь».',
            why: 'Она как раз вышла в ведущие, не растворилась в кордебалете. Училище — школа, не репертуарный номер.',
          },
          difficulty_rationale:
            'Главная сцена творчества. Лебедь на слуху, но его легко спутать с институциями, через которые она прошла.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что означает скарабей в этой паре?',
          options: [
            {
              id: 'A',
              text: 'Смерть и погребение — рифма к умирающему лебедю',
            },
            {
              id: 'B',
              text: 'Символ солнца и возвращения',
            },
            {
              id: 'C',
              text: 'Тяжёлую землю, к которой прикован танец',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — скарабей про солнце и возвращение, не про могилу.',
            detail:
              'Лебедь в репертуаре умирает. Жук рядом — обратный знак: цикл, свет, приход обратно. Пара держит оба полюса, не складывает их в одно погребение.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — скарабей это символ солнца и возвращения.',
            why: '«Умирающий лебедь» провоцирует прочесть жука как смерть. Карта задаёт другое: солнце и возврат, а не грунт могилы.',
          },
          difficulty_rationale:
            'Классическая ловушка масти: видимый предсмертный танец против формулы summary про солнце.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что, по карте, сделали её гастроли с балетом?',
          options: [
            {
              id: 'A',
              text: 'Оставили его исключительно придворным искусством',
            },
            {
              id: 'B',
              text: 'Свели его к одному номеру, который смотрели только в Петербурге',
            },
            {
              id: 'C',
              text: 'Вывели классический балет к широкой аудитории разных стран',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — балет перестал быть только придворным.',
            detail:
              'Собственная труппа и мир. Имя после 1931-го осталось знаком грации и чувства, переданного движением. Не клетка Мариинского театра.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — её выступления сделали балет доступным широкой аудитории.',
            why: 'Карта прямо снимает исключительность двора. Лебедь — визитка, не предел географии.',
          },
          difficulty_rationale:
            'Имперская школа и один знаменитый номер заслоняют тезис: она разомкнула балет вовне.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Ганна і скарабей',
      questions: [
        {
          level: 'Story',
          question: 'Які нумар стаў яе творчай візітоўкай?',
          options: [
            {
              id: 'A',
              text: 'Мініяцюра «Паміраючы лебедзь»',
            },
            {
              id: 'B',
              text: 'Прыдворны гімн Імператарскага вучылішча',
            },
            {
              id: 'C',
              text: 'Адмова ад сольных партый на карысць кардэбалета',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — «Паміраючы лебедзь» стаў яе знакам.',
            detail:
              'Вядучая балерына Марыінскага тэатра: тэхніка плюс эмацыйнасць. Крохкае целасклад карта не робіць прысудам — яго перакрылі ўпартасць і выразнасць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — мініяцюра «Паміраючы лебедзь».',
            why: 'Яна якраз выйшла ў вядучыя, не растварылася ў кардэбалеце. Вучылішча — школа, не рэпертуарны нумар.',
          },
          difficulty_rationale:
            'Галоўная сцэна творчасці. Лебедзь на слыху, але яго лёгка зблытаць з інстытуцыямі, праз якія яна прайшла.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што азначае скарабей у гэтай пары?',
          options: [
            {
              id: 'A',
              text: 'Смерць і пахаванне — рыфма да паміраючага лебедзя',
            },
            {
              id: 'B',
              text: 'Сімвал сонца і вяртання',
            },
            {
              id: 'C',
              text: 'Цяжкую зямлю, да якой прыкуты танец',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — скарабей пра сонца і вяртанне, не пра магілу.',
            detail:
              'Лебедзь у рэпертуары памірае. Жук побач — адваротны знак: цыкл, святло, прыход назад. Пара трымае абодва полюсы, не складае іх у адно пахаванне.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — скарабей гэта сімвал сонца і вяртання.',
            why: '«Паміраючы лебедзь» правакуе прачытаць жука як смерць. Карта задае іншае: сонца і вяртанне, а не грунт магілы.',
          },
          difficulty_rationale:
            'Класічная пастка масці: бачны перадсмяротны танец супраць формулы summary пра сонца.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што, паводле карты, зрабілі яе гастролі з балетам?',
          options: [
            {
              id: 'A',
              text: 'Пакінулі яго выключна прыдворным мастацтвам',
            },
            {
              id: 'B',
              text: 'Звялі яго да аднаго нумара, які глядзелі толькі ў Пецярбургу',
            },
            {
              id: 'C',
              text: 'Вывелі класічны балет да шырокай аўдыторыі розных краін',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — балет перастаў быць толькі прыдворным.',
            detail:
              'Уласная трупа і свет. Імя пасля 1931-га засталося знакам грацыі і пачуцця, перададзенага рухам. Не клетка Марыінскага тэатра.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яе выступы зрабілі балет даступным шырокай аўдыторыі.',
            why: 'Карта проста здымае выключнасць двара. Лебедзь — візітоўка, не мяжа геаграфіі.',
          },
          difficulty_rationale:
            'Імперская школа і адзін знакаміты нумар засланяюць тэзіс: яна размыкнула балет вонкі.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '安娜与圣甲虫',
      questions: [
        {
          level: 'Story',
          question: '哪个节目成了她的艺术名片？',
          options: [
            {
              id: 'A',
              text: '小品《垂死的天鹅》',
            },
            {
              id: 'B',
              text: '帝国学校的宫廷赞歌',
            },
            {
              id: 'C',
              text: '放弃独舞、融入群舞',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 《垂死的天鹅》成了她的标记。',
            detail:
              '马林斯基剧院的首席女芭蕾舞者：技术加情感。脆弱体格卡片不视为判决——坚持与表现力盖过它。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 小品《垂死的天鹅》。',
            why: '她正是升至首席，并未溶入群舞。学校是训练，不是剧目节目。',
          },
          difficulty_rationale:
            '艺术的主场景。天鹅为人熟知，却易与她所经机构混淆。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '在这一对中，圣甲虫意指什么？',
          options: [
            {
              id: 'A',
              text: '死亡与安葬——与垂死天鹅押韵',
            },
            {
              id: 'B',
              text: '太阳与归来的象征',
            },
            {
              id: 'C',
              text: '舞蹈被锁住的沉重泥土',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 圣甲虫是太阳与归来，不是坟墓。',
            detail:
              '剧目中的天鹅死去。身旁甲虫是反向记号：循环、光、归来。这一对守住两极，不把它们叠成同一葬礼。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 圣甲虫是太阳与归来的象征。',
            why: '《垂死的天鹅》诱使把甲虫读成死亡。卡片给出另一义：太阳与归来，不是坟土。',
          },
          difficulty_rationale:
            '花色经典陷阱：可见的临终之舞对抗摘要中太阳的公式。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '依卡片，她的芭蕾巡演做了什么？',
          options: [
            {
              id: 'A',
              text: '使它仍是专属的宫廷艺术',
            },
            {
              id: 'B',
              text: '把它缩成只在彼得堡观看的一个节目',
            },
            {
              id: 'C',
              text: '把古典芭蕾带到多国广大观众面前',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 芭蕾不再只是宫廷艺术。',
            detail:
              '自己的剧团与世界。一九三一年后，名字仍是由动作传达的优雅与情感的记号。不是马林斯基剧院的囚笼。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她的演出使芭蕾面向广大观众。',
            why: '卡片明确解除宫廷的排他性。天鹅是名片，不是地理的边界。',
          },
          difficulty_rationale:
            '帝国学校与一个名节目掩盖论点：她把芭蕾向外打开。',
          needs_review: false,
        },
      ],
    },
  },
};
