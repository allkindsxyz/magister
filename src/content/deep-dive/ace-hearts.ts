import type { DeepDiveCard } from './types';

export const aceHearts: DeepDiveCard = {
  card_id: 'ace-hearts',
  locales: {
    en: {
      card_title: 'Zeus and Mnemosyne',
      questions: [
        {
          level: 'Story',
          question: 'What was born of Zeus’s nine nights with Mnemosyne?',
          options: [
            {
              id: 'A',
              text: 'Nine daughters — the Muses, patrons of the arts and of knowledge',
            },
            {
              id: 'B',
              text: 'The eagle — Zeus’s favourite bird and companion',
            },
            {
              id: 'C',
              text: 'Memory itself, which did not yet exist before the union',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — nine nights, nine Muses.',
            detail:
              'Zeus came as a shepherd and hid his splendour. The union was gradual, not a flash. The eagle on the card is Zeus’s companion, not a child of that night.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — nine daughters, the Muses, each over her art or knowledge.',
            why: 'Mnemosyne was already the Titaness of memory. The eagle is Zeus’s favourite bird, not the fruit of the union. Nine nights in a row gave nine Muses.',
          },
          difficulty_rationale:
            'The card’s plot: nine nights → nine Muses. The eagle from the short description is easy to take for the outcome of the union.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What set this union apart among the myths?',
          options: [
            {
              id: 'A',
              text: 'It is chiefly about the power and passion of the supreme god',
            },
            {
              id: 'B',
              text: 'It is bound to the birth of knowledge and art',
            },
            {
              id: 'C',
              text: 'It established the eagle as the sign of rule over the Universe',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not power, not passion, but the birth of knowledge and art.',
            detail:
              'Memory here is the ground of thought and experience — and, in an oral world, the foundation of culture. Zeus’s force in this myth serves consciousness, not the other way round.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the union is bound to the birth of knowledge and art.',
            why: 'The card expressly sets this plot apart from power and passion. The eagle is the ruler’s companion, not the meaning of the union with Mnemosyne.',
          },
          difficulty_rationale:
            'Hold the card’s formula; do not reduce everything to Zeus the sovereign. The short note on the eagle and the Universe pulls the wrong way.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where, on this card, does art come from?',
          options: [
            {
              id: 'A',
              text: 'From nothing — as a flash of chance',
            },
            {
              id: 'B',
              text: 'From what has been kept and made sense of',
            },
            {
              id: 'C',
              text: 'From Zeus’s command to the Muses',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — art is born of what is kept and made sense of.',
            detail:
              'Without memory there is neither knowledge nor art. Inspiration here is not accident but inner work upon memory and experience. The Muses are its conductors, not a source from the void.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — from what has been kept and made sense of.',
            why: 'The card insists: art is not made from nothing. Chance and Zeus’s command are precisely what the myth sets aside.',
          },
          difficulty_rationale:
            'A conclusion, not the opening. Easy to remember the nine Muses and miss that memory is the condition of creation, not ornament to the union.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Зевс и Мнемозина',
      questions: [
        {
          level: 'Story',
          question: 'Что родилось от девяти ночей Зевса с Мнемозиной?',
          options: [
            {
              id: 'A',
              text: 'Девять дочерей — музы, покровительницы искусств и знания',
            },
            {
              id: 'B',
              text: 'Орёл — любимая птица и помощник Зевса',
            },
            {
              id: 'C',
              text: 'Сама память, которой до союза ещё не было',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — девять ночей, девять муз.',
            detail:
              'Зевс пришёл в образе пастуха и скрывал величие. Союз был постепенным, не вспышкой. Орёл в карте — спутник Зевса, не дитя этой ночи.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — девять дочерей-муз, каждая над своим искусством или знанием.',
            why: 'Мнемозина уже титанида памяти. Орёл — любимая птица Зевса, не плод союза. Девять ночей подряд дали девять муз.',
          },
          difficulty_rationale:
            'Сюжет карты: девять ночей → девять муз. Орёл из краткого описания легко принять за исход союза.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чем этот союз занял особое место среди мифов?',
          options: [
            {
              id: 'A',
              text: 'Он прежде всего про власть и страсть верховного бога',
            },
            {
              id: 'B',
              text: 'Он связан с рождением знания и искусства',
            },
            {
              id: 'C',
              text: 'Он утвердил орла как знак правления Вселенной',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — не власть и не страсть, а рождение знания и искусства.',
            detail:
              'Память здесь — основа мышления и опыта, в устном мире ещё и фундамент культуры. Сила Зевса в этом мифе служит сознанию, а не наоборот.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — союз связан с рождением знания и искусства.',
            why: 'Карта прямо отделяет этот сюжет от власти и страсти. Орёл — спутник правителя, не смысл соединения с Мнемозиной.',
          },
          difficulty_rationale:
            'Нужно удержать формулу карты, а не свести всё к Зевсу-владыке. Краткое описание про орла и Вселенную тянет не туда.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Откуда, по этой карте, берётся искусство?',
          options: [
            {
              id: 'A',
              text: 'Из ничего — как вспышка случая',
            },
            {
              id: 'B',
              text: 'Из того, что сохранено и осмыслено',
            },
            {
              id: 'C',
              text: 'Из повеления Зевса музам',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — искусство рождается из сохранённого и осмысленного.',
            detail:
              'Без памяти нет ни знания, ни искусства. Вдохновение здесь не случайность, а внутренняя работа на памяти и опыте. Музы — проводники этого, не источник из пустоты.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — из того, что сохранено и осмыслено.',
            why: 'Карта настаивает: искусство не создаётся из ничего. Случай и приказ Зевса как раз то, что миф снимает.',
          },
          difficulty_rationale:
            'Вывод, а не завязка. Легко запомнить девять муз и пропустить, что память — условие творчества, а не украшение союза.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Зеўс і Мнемазіна',
      questions: [
        {
          level: 'Story',
          question: 'Што нарадзілася ад дзевяці начэй Зеўса з Мнемазінай?',
          options: [
            {
              id: 'A',
              text: 'Дзевяць дачок — музы, заступніцы мастацтваў і ведання',
            },
            {
              id: 'B',
              text: 'Арол — улюбёная птушка і памочнік Зеўса',
            },
            {
              id: 'C',
              text: 'Сама памяць, якой да саюзу яшчэ не было',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — дзевяць начэй, дзевяць муз.',
            detail:
              'Зеўс прыйшоў у абліччы пастуха і хаваў веліч. Саюз быў паступовым, не ўспышкай. Арол на карце — спадарожнік Зеўса, не дзіця гэтай ночы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — дзевяць дачок-муз, кожная над сваім мастацтвам ці веданнем.',
            why: 'Мнемазіна ўжо тытаніда памяці. Арол — улюбёная птушка Зеўса, не плод саюзу. Дзевяць начэй запар далі дзевяць муз.',
          },
          difficulty_rationale:
            'Сюжэт карты: дзевяць начэй → дзевяць муз. Арла з кароткага апісання лёгка прыняць за вынік саюзу.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чым гэты саюз заняў асаблівае месца сярод міфаў?',
          options: [
            {
              id: 'A',
              text: 'Ён найперш пра ўладу і страсць вярхоўнага бога',
            },
            {
              id: 'B',
              text: 'Ён звязаны з нараджэннем ведання і мастацтва',
            },
            {
              id: 'C',
              text: 'Ён сцвердзіў арла як знак панавання Сусвету',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — не ўлада і не страсць, а нараджэнне ведання і мастацтва.',
            detail:
              'Памяць тут — аснова мыслення і досведу, у вусным свеце яшчэ і фундамент культуры. Сіла Зеўса ў гэтым міфе служыць свядомасці, а не наадварот.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — саюз звязаны з нараджэннем ведання і мастацтва.',
            why: 'Карта проста аддзяляе гэты сюжэт ад улады і страсці. Арол — спадарожнік уладара, не сэнс злучэння з Мнемазінай.',
          },
          difficulty_rationale:
            'Трэба ўтрымаць формулу карты, а не звесці ўсё да Зеўса-ўладара. Кароткае апісанне пра арла і Сусвет цягне не туды.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Адкуль, па гэтай карце, бярэцца мастацтва?',
          options: [
            {
              id: 'A',
              text: 'З нічога — як успышка выпадку',
            },
            {
              id: 'B',
              text: 'З таго, што захавана і асэнсавана',
            },
            {
              id: 'C',
              text: 'З загаду Зеўса музам',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — мастацтва нараджаецца з захаванага і асэнсаванага.',
            detail:
              'Без памяці няма ні ведання, ні мастацтва. Натхненне тут не выпадковасць, а ўнутраная праца на памяці і досведзе. Музы — праваднікі гэтага, не крыніца з пустаты.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — з таго, што захавана і асэнсавана.',
            why: 'Карта настойвае: мастацтва не ствараецца з нічога. Выпадак і загад Зеўса якраз тое, што міф здымае.',
          },
          difficulty_rationale:
            'Выснова, а не завязка. Лёгка запомніць дзевяць муз і прапусціць, што памяць — умова творчасці, а не ўпрыгожанне саюзу.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '宙斯与谏涅摩叙涅',
      questions: [
        {
          level: 'Story',
          question: '宙斯与谟涅摩叙涅共度九夜，生下了什么？',
          options: [
            {
              id: 'A',
              text: '九个女儿——缪斯，艺术与知识的守护者',
            },
            {
              id: 'B',
              text: '鹰——宙斯心爱的鸟与同伴',
            },
            {
              id: 'C',
              text: '记忆本身——结合之前它尚不存在',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 九夜，九位缪斯。',
            detail:
              '宙斯以牧人形象前来，隐去光辉。这段结合是渐进的，不是一闪而过。卡上的鹰是宙斯的同伴，不是那一夜所出。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 九个女儿，缪斯，各自掌管一门艺术或知识。',
            why: '谟涅摩叙涅本已是记忆的提坦女神。鹰是宙斯心爱的鸟，并非结合的果实。连续九夜生下九位缪斯。',
          },
          difficulty_rationale:
            '卡的情节：九夜→九缪斯。短述里的鹰容易被当成结合的结果。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '这段结合在诸神话中何以特别？',
          options: [
            {
              id: 'A',
              text: '它主要关乎至高之神的权力与情欲',
            },
            {
              id: 'B',
              text: '它与知识与艺术的诞生相连',
            },
            {
              id: 'C',
              text: '它确立了鹰作为统御宇宙的象征',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 不是权力，不是情欲，而是知识与艺术的诞生。',
            detail:
              '记忆在此是思想与经验的根基——在口传世界里，也是文化的基石。宙斯的力量在此神话中服务于意识，而非相反。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 这段结合与知识与艺术的诞生相连。',
            why: '卡明确把此情节与权力、情欲分开。鹰是统治者的同伴，不是与谟涅摩叙涅结合的意义。',
          },
          difficulty_rationale:
            '要守住卡的表述，勿把一切缩成宙斯为王。关于鹰与宇宙的短注会把你拉偏。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '在这张卡上，艺术从何而来？',
          options: [
            {
              id: 'A',
              text: '从虚无——如偶然的一闪',
            },
            {
              id: 'B',
              text: '从被保存并被领会之物',
            },
            {
              id: 'C',
              text: '从宙斯对缪斯的命令',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 艺术生于被保存并被领会之物。',
            detail:
              '没有记忆，便既无知识也无艺术。灵感在此不是偶然，而是对记忆与经验的内在劳作。缪斯是其传导者，不是凭空的源头。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 从被保存并被领会之物。',
            why: '卡坚持：艺术并非从无中造出。偶然与宙斯的命令，正是神话所摒弃的。',
          },
          difficulty_rationale:
            '这是结论，不是开端。容易只记住九缪斯，而错过：记忆是创造的条件，不是结合的点缀。',
          needs_review: false,
        },
      ],
    },
  },
};
