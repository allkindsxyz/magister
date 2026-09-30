import type { DeepDiveCard } from './types';

export const queenDiamonds: DeepDiveCard = {
  card_id: 'queen-diamonds',
  locales: {
    en: {
      card_title: 'The Maiden with Pitchers',
      questions: [
        {
          level: 'Story',
          question: 'What does she do with the pitchers?',
          options: [
            {
              id: 'A',
              text: 'Calls others to follow and pours wine for a feast',
            },
            {
              id: 'B',
              text: 'Offers: the vessels are containers of passage, a chance to alter perception',
            },
            {
              id: 'C',
              text: 'Gathers water to wash the initiates',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — she neither goes nor calls; she offers.',
            detail:
              'In each pitcher not substance as such, but a chance to shift perception. The image is still; the action is within.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — she offers vessels of passage, not wine and not water for washing.',
            why: 'The card sharply separates the pitchers from an earthly feast. She is neither a guide by step nor a servant of ablution.',
          },
          difficulty_rationale:
            'Function of the priestess at the vessels. Pitchers pull toward wine, water, feast — the card cuts that away.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What does the kykeon give a participant of the mystery?',
          options: [
            {
              id: 'A',
              text: 'Quenching of thirst and forgetting of pain',
            },
            {
              id: 'B',
              text: 'Not knowledge of the truth, but the capacity to live it — another level of perception',
            },
            {
              id: 'C',
              text: 'Immortality of the body and easy happiness',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — tasting, a person does not learn the truth but becomes able to live it.',
            detail:
              'The mixture is bound to the rites of Demeter. It does not close thirst: it opens what lies beyond ordinary consciousness.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — not knowledge of the truth, but the capacity to live it.',
            why: 'The drink is not for thirst. Immortality of the body and easy happiness the card expressly forbids her to promise.',
          },
          difficulty_rationale:
            'A sacred drink is easy to take for comfort or elixir. Text: experience, not information and not a gift of flesh.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What hope does she carry?',
          options: [
            {
              id: 'A',
              text: 'Hope that denies pain and promises ease',
            },
            {
              id: 'B',
              text: 'Hope that does not deny pain: beyond the last door there may be continuation of the path, not emptiness',
            },
            {
              id: 'C',
              text: 'A promise that death is the end, and this must be accepted without light',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — hope is born inside the secret, not against it.',
            detail:
              'Accept bitterness to gain clarity; pass through darkness to see light otherwise. The rose wreath — a circle where life and death are not enemies.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — hope that does not deny pain and does not promise emptiness beyond the last door.',
            why: 'This is neither comfort in the ordinary sense nor a sermon of an end without continuation. She remained at the temple after her own loss.',
          },
          difficulty_rationale:
            'A priestess of “bright hopes” tempts smoothing into easy comfort or dry ending. The card’s formula — hope without denial of pain.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Девушка с кувшинами',
      questions: [
        {
          level: 'Story',
          question: 'Что она делает с кувшинами?',
          options: [
            {
              id: 'A',
              text: 'Зовёт за собой и разливает вино для пира',
            },
            {
              id: 'B',
              text: 'Предлагает: сосуды — вместилища перехода, возможность изменить восприятие',
            },
            {
              id: 'C',
              text: 'Собирает воду, чтобы омыть посвящаемых',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — она не идёт и не зовёт, а предлагает.',
            detail:
              'В каждом кувшине не вещество как таковое, а возможность сдвинуть восприятие. Образ неподвижен, действие — внутри.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — предлагает вместилища перехода, а не вино и не воду для омовения.',
            why: 'Карта прямо отделяет кувшины от земного застолья. Это не проводница шагом и не служительница умывания.',
          },
          difficulty_rationale:
            'Функция жрицы у сосудов. Кувшины тянут к вину, воде, пиру — карта это отсекает.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что даёт кикеон участнику мистерии?',
          options: [
            {
              id: 'A',
              text: 'Утоление жажды и забвение боли',
            },
            {
              id: 'B',
              text: 'Не знание истины, а способность её пережить — иной уровень восприятия',
            },
            {
              id: 'C',
              text: 'Бессмертие тела и лёгкое счастье',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — вкушая, человек не узнаёт истину, а становится способен её пережить.',
            detail:
              'Смесь связана с обрядами Деметры. Жажду она не закрывает: открывает то, что за обычным сознанием.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — не знание истины, а способность её пережить.',
            why: 'Напиток не для жажды. Бессмертие тела и лёгкое счастье карта ей прямо запрещает обещать.',
          },
          difficulty_rationale:
            'Священный напиток легко принять за утешение или эликсир. Текст: переживание, не информация и не дар плоти.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Какую надежду она несёт?',
          options: [
            {
              id: 'A',
              text: 'Надежду, которая отрицает боль и обещает лёгкость',
            },
            {
              id: 'B',
              text: 'Надежду, не отрицающую боли: за последней дверью может быть продолжение пути, не пустота',
            },
            {
              id: 'C',
              text: 'Обещание, что смерть — конец, и это надо принять без света',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — надежда рождается внутри тайны, не вопреки ей.',
            detail:
              'Принять горечь, чтобы обрести ясность; пройти мрак, чтобы иначе увидеть свет. Венок роз — круг, где жизнь и смерть не враги.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — надежда, которая не отрицает боль и не сулит пустоту за последней дверью.',
            why: 'Это не утешение в привычном смысле и не проповедь конца без продолжения. Она осталась при храме после собственной утраты.',
          },
          difficulty_rationale:
            'Жрицу «светлых надежд» тянет сгладить в лёгкое утешение или в сухой конец. Формула карты — надежда без отрицания боли.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Дзяўчына з збанамі',
      questions: [
        {
          level: 'Story',
          question: 'Што яна робіць са збанамі?',
          options: [
            {
              id: 'A',
              text: 'Кліча за сабой і налівае віно для піру',
            },
            {
              id: 'B',
              text: 'Прапануе: пасудзіны — умяшчальні пераходу, магчымасць змяніць успрыманне',
            },
            {
              id: 'C',
              text: 'Збірае ваду, каб абмыць пасвячаных',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яна не ідзе і не кліча, а прапануе.',
            detail:
              'У кожным збане не рэчыва як такое, а магчымасць зрушыць успрыманне. Вобраз нерухомы, дзеянне — унутры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — прапануе умяшчальні пераходу, а не віно і не ваду для абмывання.',
            why: 'Карта проста аддзяляе збаны ад зямнога застолля. Гэта не правадніца крокам і не служніца ўмывання.',
          },
          difficulty_rationale:
            'Функцыя жрыцы ля пасудзін. Збаны цягнуць да віна, вады, піру — карта гэта адсякае.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што дае кікеон удзельніку містэрыі?',
          options: [
            {
              id: 'A',
              text: 'Уталенне смагі і забыццё болю',
            },
            {
              id: 'B',
              text: 'Не веданне ісціны, а здольнасць яе перажыць — іншы ўзровень успрымання',
            },
            {
              id: 'C',
              text: 'Бессмяротнасць цела і лёгкае шчасце',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — каштуючы, чалавек не даведваецца ісціну, а становіцца здольны яе перажыць.',
            detail:
              'Сумесь звязана з абрадамі Дэметры. Смагу яна не закрывае: адкрывае тое, што за звычайнай свядомасцю.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — не веданне ісціны, а здольнасць яе перажыць.',
            why: 'Напітак не для смагі. Бессмяротнасць цела і лёгкае шчасце карта ёй проста забараняе абяцаць.',
          },
          difficulty_rationale:
            'Сакральны напітак лёгка прыняць за суцяшэнне ці эліксір. Тэкст: перажыванне, не інфармацыя і не дар плоці.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Якую надзею яна нясе?',
          options: [
            {
              id: 'A',
              text: 'Надзею, якая адмаўляе боль і абяцае лёгкасць',
            },
            {
              id: 'B',
              text: 'Надзею, што не адмаўляе болю: за апошняй дзвярыма можа быць працяг шляху, не пустата',
            },
            {
              id: 'C',
              text: 'Абяцанне, што смерць — канец, і гэта трэба прыняць без святла',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — надзея нараджаецца ўнутры таямніцы, не насуперак ёй.',
            detail:
              'Прыняць горыч, каб здабыць яснасць; прайсці змрок, каб інакш убачыць святло. Вянок руж — круг, дзе жыццё і смерць не ворагі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — надзея, якая не адмаўляе боль і не суліць пустату за апошняй дзвярыма.',
            why: 'Гэта не суцяшэнне ў звыклым сэнсе і не пропаведзь канца без працягу. Яна засталася пры храме пасля ўласнай страты.',
          },
          difficulty_rationale:
            'Жрыцу «светлых надзей» цягне згладзіць у лёгкае суцяшэнне ці ў сухі канец. Формула карты — надзея без адмаўлення болю.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '持罐少女',
      questions: [
        {
          level: 'Story',
          question: '她拿陶罐做什么？',
          options: [
            {
              id: 'A',
              text: '招呼人跟随，并为宴席斟酒',
            },
            {
              id: 'B',
              text: '提出：器皿是过渡之容器，是改变感知的机缘',
            },
            {
              id: 'C',
              text: '取水来洗净入会者',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 她既不前行，也不召唤；她提出。',
            detail:
              '每个罐里不是物质本身，而是推移感知的机缘。形象静止，行动在内。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她提出过渡之器，不是酒，也不是净礼之水。',
            why: '此卡明确把陶罐与尘世宴席分开。她既非以步引领的向导，也非盥洗的侍奉者。',
          },
          difficulty_rationale:
            '祭司在器皿旁的功能。罐诱人想到酒、水、宴——此卡切断这些。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '基克翁给秘仪参与者什么？',
          options: [
            {
              id: 'A',
              text: '解渴与遗忘痛苦',
            },
            {
              id: 'B',
              text: '不是真理的知识，而是活出它的能力——另一层感知',
            },
            {
              id: 'C',
              text: '身体的不朽与轻易的幸福',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 品尝时，人并不得知真理，而变得能够活出它。',
            detail:
              '这混合物与得墨忒耳的仪式相连。它不解渴：它打开寻常意识之外的东西。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 不是真理的知识，而是活出它的能力。',
            why: '饮品不是为解渴。身体的不朽与轻易的幸福，此卡明确禁止她许诺。',
          },
          difficulty_rationale:
            '神圣饮品易被当成安慰或灵药。文本：体验，不是信息，也不是肉体的赠礼。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '她承载怎样的希望？',
          options: [
            {
              id: 'A',
              text: '否定痛苦、许诺轻易的希望',
            },
            {
              id: 'B',
              text: '不否定痛苦的希望：最后一道门外可能是路的延续，不是空虚',
            },
            {
              id: 'C',
              text: '许诺死亡即终结，且须无光接受',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 希望生于秘密之内，而非与之相抗。',
            detail:
              '接受苦涩以得澄明；穿过黑暗，好以另一种方式看见光。玫瑰花冠——生命与死亡并非仇敌的圆。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 不否定痛苦、也不许诺最后一道门外是空虚的希望。',
            why: '这既非寻常意义上的安慰，也非无延续的终结布道。她在自身的丧失之后仍留在神殿。',
          },
          difficulty_rationale:
            '「光明希望」的女祭司诱人抹成轻易安慰或干硬结局。此卡的公式——不否定痛苦的希望。',
          needs_review: false,
        },
      ],
    },
  },
};
