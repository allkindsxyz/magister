import type { DeepDiveCard } from './types';

export const fourClubs: DeepDiveCard = {
  card_id: '4-clubs',
  locales: {
    en: {
      card_title: 'Hunt for the White Lion',
      questions: [
        {
          level: 'Story',
          question: 'How does the white lion differ from the golden or the red?',
          options: [
            {
              id: 'A',
              text: 'It signifies the ruler’s strength and power',
            },
            {
              id: 'B',
              text: 'It embodies purity, nobility, and the highest justice',
            },
            {
              id: 'C',
              text: 'It marks divine right of rule without a moral measure',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — purity, nobility, the highest justice.',
            detail:
              'White draws the lion away from dominion toward light, innocence, and divine favor. Power remains — but it is not the main claim.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — it embodies purity, nobility, and the highest justice.',
            why: 'Strength and power belong to the golden or the red lion. Divine right in the text is bound to justice, not set in its place.',
          },
          difficulty_rationale:
            'The central thesis: white against the “ordinary” lion. Easy to leave the beast only strength — which the text precisely removes.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Of what did the white lion become a sign for the knight?',
          options: [
            {
              id: 'A',
              text: 'The chosenness of a warrior fighting for higher ideals',
            },
            {
              id: 'B',
              text: 'The exclusivity of a noble house’s arms',
            },
            {
              id: 'C',
              text: 'The divine right of a ruler’s power',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the mark of Christ’s chosen warrior.',
            detail:
              'Heavenly force granted, not seized. The rarity of the white lion in heraldry only sharpens the exception: honor under trial, not a trophy.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the mark of a warrior’s chosenness, fighting in the name of higher ideals.',
            why: 'A house’s arms and divine right are neighboring heraldic senses. For the knight of this card the lion is election, honor, and restraint.',
          },
          difficulty_rationale:
            'The Order sense of the hunt: not the beast as quarry, but the gift of heavenly force. The hunt is easy to read literally.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What choice stands behind the white lion, if not mere dominion?',
          options: [
            {
              id: 'A',
              text: 'Refusal of power for the sake of contemplation',
            },
            {
              id: 'B',
              text: 'The right of the strong without responsibility',
            },
            {
              id: 'C',
              text: 'A conscious and just choice',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not dominion, but a conscious just choice.',
            detail:
              'Might and mildness, power and responsibility meet in the figure. Inner light against darkness — the formula missed behind the hunt.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a conscious and just choice, not mere dominion.',
            why: 'The card calls neither to renounce power nor to license. Both poles are given the lion — force and measure.',
          },
          difficulty_rationale:
            'The last paragraph is easy not to finish: the lion as light and responsibility, not as a crown.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Охота на белого льва',
      questions: [
        {
          level: 'Story',
          question: 'Чем белый лев отличается от золотого или красного?',
          options: [
            {
              id: 'A',
              text: 'Он означает силу и власть правителя',
            },
            {
              id: 'B',
              text: 'Он олицетворяет чистоту, благородство и высшую справедливость',
            },
            {
              id: 'C',
              text: 'Он знаменует божественное право власти без моральной меры',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — чистота, благородство, высшая справедливость.',
            detail:
              'Белый цвет уводит от господства к свету, непорочности и божественному покровительству. Мощь здесь есть, но она не главный тезис.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он олицетворяет чистоту, благородство и высшую справедливость.',
            why: 'Сила и власть — поле золотого или красного льва. Божественное право в тексте связано со справедливостью, не вместо неё.',
          },
          difficulty_rationale:
            'Центральный тезис: белый против «обычного» льва. Легко оставить льву только силу, которую текст как раз снимает.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Знаком чего белый лев становился для рыцаря?',
          options: [
            {
              id: 'A',
              text: 'Избранности воина, бьющегося во имя высших идеалов',
            },
            {
              id: 'B',
              text: 'Исключительности герба знатного рода',
            },
            {
              id: 'C',
              text: 'Божественного права власти правителя',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — знак избранного воина Христа.',
            detail:
              'Небесная сила, дарованная, а не захваченная. Редкость белого льва в гербах только усиливает исключительность: честь в испытании, не трофей.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — знак избранности воина, который сражается во имя высших идеалов.',
            why: 'Герб рода и божественное право — соседние геральдические смыслы. Для рыцаря карты лев — избранность, честь и сдержанность.',
          },
          difficulty_rationale:
            'Орденский смысл охоты: не зверь как добыча, а дар небесной силы. Охоту легко прочитать буквально.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Какой выбор стоит за белым львом, если не просто господство?',
          options: [
            {
              id: 'A',
              text: 'Отказ от власти ради созерцания',
            },
            {
              id: 'B',
              text: 'Право сильного без ответственности',
            },
            {
              id: 'C',
              text: 'Осознанный и справедливый выбор',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — не господство, а осознанный справедливый выбор.',
            detail:
              'В образе сходятся мощь и мягкость, власть и ответственность. Внутренний свет против тьмы — формула, которую за охотой не замечают.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — осознанный и справедливый выбор, а не просто господство.',
            why: 'Карта не зовёт ни к отказу от власти, ни к своеволию. Льву даны оба полюса — сила и мера.',
          },
          difficulty_rationale:
            'Последний абзац легко не дочитать: лев как свет и ответственность, не как корона.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Паляванне на белага льва',
      questions: [
        {
          level: 'Story',
          question: 'Чым белы леў адрозніваецца ад залатога ці чырвонага?',
          options: [
            {
              id: 'A',
              text: 'Ён азначае сілу і ўладу кіраўніка',
            },
            {
              id: 'B',
              text: 'Ён увасабляе чысціню, шляхецтва і вышэйшую справядлівасць',
            },
            {
              id: 'C',
              text: 'Ён знаменуе боскае права ўлады без маральнай меры',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — чысціня, шляхецтва, вышэйшая справядлівасць.',
            detail:
              'Белы колер адводзіць ад панавання да святла, бязгрэшнасці і боскага заступніцтва. Моц тут ёсць, але яна не галоўны тэзіс.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён увасабляе чысціню, шляхецтва і вышэйшую справядлівасць.',
            why: 'Сіла і ўлада — поле залатога ці чырвонага льва. Боскае права ў тэксце звязана са справядлівасцю, не замест яе.',
          },
          difficulty_rationale:
            'Цэнтральны тэзіс: белы супраць «звычайнага» льва. Лёгка пакінуць льву толькі сілу, якую тэкст якраз здымае.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Знакам чаго белы леў станавіўся для рыцара?',
          options: [
            {
              id: 'A',
              text: 'Абранасці воіна, які б’ецца ў імя вышэйшых ідэалаў',
            },
            {
              id: 'B',
              text: 'Выключнасці герба знатнага роду',
            },
            {
              id: 'C',
              text: 'Боскага права ўлады кіраўніка',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — знак абранага воіна Хрыста.',
            detail:
              'Нябесная сіла, дараваная, а не захопленая. Рэдкасць белага льва ў гербах толькі ўзмацняе выключнасць: гонар у выпрабаванні, не трафей.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — знак абранасці воіна, які змагаецца ў імя вышэйшых ідэалаў.',
            why: 'Герб роду і боскае права — суседнія геральдычныя сэнсы. Для рыцара карты леў — абранасць, гонар і стрыманасць.',
          },
          difficulty_rationale:
            'Ордэнскі сэнс палявання: не звер як здабыча, а дар нябеснай сілы. Паляванне лёгка прачытаць літаральна.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Які выбар стаіць за белым львом, калі не проста панаванне?',
          options: [
            {
              id: 'A',
              text: 'Адмова ад улады дзеля сузірання',
            },
            {
              id: 'B',
              text: 'Права моцнага без адказнасці',
            },
            {
              id: 'C',
              text: 'Усвядомлены і справядлівы выбар',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — не панаванне, а ўсвядомлены справядлівы выбар.',
            detail:
              'У вобразе сыходзяцца моц і мяккасць, улада і адказнасць. Унутранае святло супраць цемры — формула, якую за паляваннем не заўважаюць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — усвядомлены і справядлівы выбар, а не проста панаванне.',
            why: 'Карта не кліча ні да адмовы ад улады, ні да свавольства. Льву дадзены абодва полюсы — сіла і мера.',
          },
          difficulty_rationale:
            'Апошні абзац лёгка не дачытаць: леў як святло і адказнасць, не як карона.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '猎白狮',
      questions: [
        {
          level: 'Story',
          question: '白狮与金狮或红狮有何不同？',
          options: [
            {
              id: 'A',
              text: '它意味统治者的力量与权势',
            },
            {
              id: 'B',
              text: '它体现纯洁、高贵与最高的正义',
            },
            {
              id: 'C',
              text: '它标志无道德尺度的神授统治权',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 纯洁、高贵、最高的正义。',
            detail:
              '白色把狮子从统治引向光明、无瑕与神恩。力量仍在——但不是主要论点。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 它体现纯洁、高贵与最高的正义。',
            why: '力量与权势属于金狮或红狮。文本中的神授权与正义相连，而非取而代之。',
          },
          difficulty_rationale:
            '中心论点：白对「寻常」之狮。容易只留给野兽力量——而这正是文本要拿掉的。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '对骑士而言，白狮成为何种标记？',
          options: [
            {
              id: 'A',
              text: '为更高理想而战的战士之蒙选',
            },
            {
              id: 'B',
              text: '贵族纹章的排他性',
            },
            {
              id: 'C',
              text: '统治者的神授权力',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 基督蒙选战士的标记。',
            detail:
              '上天所赐而非夺取的力量。纹章中白狮之稀有只是锐化例外：考验中的荣誉，而非战利品。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 为更高理想而战的战士之蒙选标记。',
            why: '族徽与神授权是邻近的纹章含义。对本卡骑士而言，狮子是拣选、荣誉与克制。',
          },
          difficulty_rationale:
            '狩猎的骑士团意味：非猎物之兽，而是天力之赐。狩猎容易被字面读解。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '若非单纯统治，白狮背后是何种抉择？',
          options: [
            {
              id: 'A',
              text: '为沉思而拒绝权力',
            },
            {
              id: 'B',
              text: '强者无权责的权利',
            },
            {
              id: 'C',
              text: '自觉而公正的抉择',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 非统治，而是自觉公正的抉择。',
            detail:
              '刚与柔、权与责在形象中相遇。内在之光对抗黑暗——这是狩猎背后被错过的公式。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 自觉而公正的抉择，而非单纯统治。',
            why: '卡片既不号召弃权，也不放任强权。狮子被赋予两极——力量与尺度。',
          },
          difficulty_rationale:
            '末段容易读不完：狮子是光与责任，不是王冠。',
          needs_review: false,
        },
      ],
    },
  },
};
