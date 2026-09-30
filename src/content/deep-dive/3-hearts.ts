import type { DeepDiveCard } from './types';

export const threeHearts: DeepDiveCard = {
  card_id: '3-hearts',
  locales: {
    en: {
      card_title: 'Leda and the swan',
      questions: [
        {
          level: 'Story',
          question: 'What happened that same night after the meeting by the river?',
          options: [
            {
              id: 'A',
              text: 'Leda returned to her husband and laid two eggs',
            },
            {
              id: 'B',
              text: 'Leda fled Sparta with the swan',
            },
            {
              id: 'C',
              text: 'Tyndareus hid the children from Zeus in a temple',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — that same night she returned to Tyndareus and laid two eggs.',
            detail:
              'By the river she stroked the swan’s neck, feeling safe — and Zeus took her. The children emerged human, from eggs. Flight from Sparta is not on the card.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Leda returned to her husband and laid two eggs.',
            why: 'She is wife to the Spartan king Tyndareus and that same night is on the marriage bed. He has no children yet to hide: they are not born.',
          },
          difficulty_rationale:
            'The plot hinge of two beds in one night. Easy to decide that after the deception she leaves her husband.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'How do the divine and the human meet in the children of that night?',
          options: [
            {
              id: 'A',
              text: 'All four are children of Zeus',
            },
            {
              id: 'B',
              text: 'Helen and Polydeuces are Zeus’s; Clytemnestra and Castor are Tyndareus’s',
            },
            {
              id: 'C',
              text: 'Only Helen is Zeus’s child; the other three are Tyndareus’s',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer:
              'Yes — two from Zeus, two from Tyndareus: Helen and Polydeuces / Clytemnestra and Castor.',
            detail:
              'The card notes: so the versions run. Both origins hold in one plot. Helen at the foot of the card is fruit of the union, but not the only one.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — Helen and Polydeuces from Zeus, Clytemnestra and Castor from Tyndareus.',
            why: 'The picture shows Helen from the egg, and from that the temptation to reduce all to her alone, or all four as Zeus’s. The text splits pair from pair.',
          },
          difficulty_rationale:
            'Four names collapse easily. Helen visible on the card tempts you to forget Polydeuces, Castor, and Clytemnestra.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'In darker readings, what does this story become?',
          options: [
            {
              id: 'A',
              text: 'A tale of mutual love',
            },
            {
              id: 'B',
              text: 'An act of divine violence: a fate imposed from without',
            },
            {
              id: 'C',
              text: 'A sacrifice Leda chose herself',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not so much love as violence; a fate that entered against the will.',
            detail:
              'Leda stroked the neck, feeling safe. The card first calls it seduction, then leaves no doubt: a human is helpless before the will of the gods.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — an act of divine violence, a fate imposed from without.',
            why: 'The text gives Leda no consent. “Love” is the first, lighter frame; the later one insists on an intrusion that sets the course of a life.',
          },
          difficulty_rationale:
            'A conclusion the card adds after the list of painters. Easy to stay with “seduction” and motherhood.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Леда и лебедь',
      questions: [
        {
          level: 'Story',
          question: 'Что произошло той же ночью после встречи у реки?',
          options: [
            {
              id: 'A',
              text: 'Леда вернулась к супругу и снесла два яйца',
            },
            {
              id: 'B',
              text: 'Леда бежала из Спарты вместе с лебедем',
            },
            {
              id: 'C',
              text: 'Тиндарей спрятал детей от Зевса в храме',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — той же ночью она вернулась к Тиндарею и снесла два яйца.',
            detail:
              'У реки она гладила шею лебедя, чувствуя себя в безопасности, — и Зевс ею овладел. Дети вышли человеческими, из яиц. Бегства из Спарты карта не даёт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Леда вернулась к супругу и снесла два яйца.',
            why: 'Она жена спартанского царя Тиндарея и той же ночью оказывается на семейном ложе. Прятать детей он в этом тексте не успевает: они ещё не родились.',
          },
          difficulty_rationale:
            'Сюжетный стык двух лож в одну ночь. Легко решить, что после обмана она покидает мужа.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Как в детях этой ночи сходятся божественное и человеческое?',
          options: [
            {
              id: 'A',
              text: 'Все четверо — дети Зевса',
            },
            {
              id: 'B',
              text: 'Елена и Полидевк — дети Зевса; Клитемнестра и Кастор — дети Тиндарея',
            },
            {
              id: 'C',
              text: 'Только Елена — дитя Зевса, остальные трое — Тиндарея',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — двое от Зевса, двое от Тиндарея: Елена и Полидевк / Клитемнестра и Кастор.',
            detail:
              'Карта оговаривает: так по разным версиям. В одном сюжете держатся оба начала. Елена внизу карты — плод союза, но не единственный.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer:
              'Ответ — Елена и Полидевк от Зевса, Клитемнестра и Кастор от Тиндарея.',
            why: 'Картина показывает Елену из яйца, и отсюда соблазн свести всё к ней одной или ко всем четверым как к детям Зевса. Текст делит пару на пару.',
          },
          difficulty_rationale:
            'Четыре имени легко схлопнуть. Видимая на карте Елена провоцирует забыть Полидевка, Кастора и Клитемнестру.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чем, в более мрачных трактовках, становится этот сюжет?',
          options: [
            {
              id: 'A',
              text: 'Историей взаимной любви',
            },
            {
              id: 'B',
              text: 'Актом божественного насилия: судьба навязана извне',
            },
            {
              id: 'C',
              text: 'Жертвой, на которую Леда согласилась сама',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — не столько любовь, сколько насилие; судьба, вторгшаяся помимо воли.',
            detail:
              'Леда гладила шею, чувствуя безопасность. Карта сначала зовёт это обольщением, затем не оставляет сомнения: человек беспомощен перед волей богов.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — акт божественного насилия, судьба, навязанная извне.',
            why: 'Согласия Леды текст не даёт. «Любовь» — первая, более светлая рамка; поздняя настаивает на вторжении, которое определяет ход жизни.',
          },
          difficulty_rationale:
            'Вывод, который карта дописывает после списка живописцев. Легко остаться на «обольщении» и материнстве.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Леда і лебедзь',
      questions: [
        {
          level: 'Story',
          question: 'Што здарылася той жа ноччу пасля сустрэчы ля ракі?',
          options: [
            {
              id: 'A',
              text: 'Леда вярнулася да мужа і знесла два яйкі',
            },
            {
              id: 'B',
              text: 'Леда ўцякла са Спарты разам з лебедзем',
            },
            {
              id: 'C',
              text: 'Тындарэй схаваў дзяцей ад Зеўса ў храме',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — той жа ноччу яна вярнулася да Тындарэя і знесла два яйкі.',
            detail:
              'Ля ракі яна гладзіла шыю лебедзя, адчуваючы сябе ў бяспецы, — і Зеўс авалодаў ёю. Дзеці выйшлі чалавечымі, з яек. Уцёкаў са Спарты карта не дае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Леда вярнулася да мужа і знесла два яйкі.',
            why: 'Яна жонка спартанскага цара Тындарэя і той жа ноччу апынаецца на сямейным ложы. Хаваць дзяцей ён у гэтым тэксце не паспявае: яны яшчэ не нарадзіліся.',
          },
          difficulty_rationale:
            'Сюжэтны стык двух ложаў у адну ноч. Лёгка вырашыць, што пасля падману яна пакідае мужа.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Як у дзецях гэтай ночы сходзяцца боскае і чалавечае?',
          options: [
            {
              id: 'A',
              text: 'Усе чацвёра — дзеці Зеўса',
            },
            {
              id: 'B',
              text: 'Алена і Палідэўк — дзеці Зеўса; Клітэмнестра і Кастор — дзеці Тындарэя',
            },
            {
              id: 'C',
              text: 'Толькі Алена — дзіця Зеўса, астатнія трое — Тындарэя',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — двое ад Зеўса, двое ад Тындарэя: Алена і Палідэўк / Клітэмнестра і Кастор.',
            detail:
              'Карта агаворвае: так паводле розных версій. У адным сюжэце трымаюцца абодва пачаткі. Алена ўнізе карты — плод саюзу, але не адзіны.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — Алена і Палідэўк ад Зеўса, Клітэмнестра і Кастор ад Тындарэя.',
            why: 'Карціна паказвае Алену з яйка, і адсюль спакуса звесці ўсё да яе адной або да ўсіх чатырох як да дзяцей Зеўса. Тэкст дзеліць пару на пару.',
          },
          difficulty_rationale:
            'Чатыры імёны лёгка схінуць. Бачная на карце Алена правакуе забыць Палідэўка, Кастора і Клітэмнестру.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чым, у больш змрочных трактоўках, становіцца гэты сюжэт?',
          options: [
            {
              id: 'A',
              text: 'Гісторыяй узаемнай любові',
            },
            {
              id: 'B',
              text: 'Актам боскага гвалту: лёс навязаны звонку',
            },
            {
              id: 'C',
              text: 'Ахвярай, на якую Леда згадзілася сама',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — не столькі любоў, колькі гвалт; лёс, што ўварваўся па-за воляй.',
            detail:
              'Леда гладзіла шыю, адчуваючы бяспеку. Карта спачатку кліча гэта звабленнем, потым не пакідае сумневу: чалавек бяссільны перад воляй багоў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — акт боскага гвалту, лёс, навязаны звонку.',
            why: 'Згоды Леды тэкст не дае. «Любоў» — першая, больш светлая рамка; пазнейшая настойвае на ўварванні, якое вызначае ход жыцця.',
          },
          difficulty_rationale:
            'Выснова, якую карта дапісвае пасля спісу жывапісцаў. Лёгка застацца на «звабленні» і мацярынстве.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '勒达与天鹅',
      questions: [
        {
          level: 'Story',
          question: '河畔相遇后，同一夜发生了什么？',
          options: [
            {
              id: 'A',
              text: '勒达回到丈夫身边，产下两枚卵',
            },
            {
              id: 'B',
              text: '勒达与天鹅一同逃离斯巴达',
            },
            {
              id: 'C',
              text: '廷达瑞俄斯把孩子藏进神庙，躲过宙斯',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 同一夜她回到廷达瑞俄斯身边，产下两枚卵。',
            detail:
              '她在河边抚摸天鹅的颈，自觉安全——宙斯便占有了她。孩子从卵中以人形而出。卡未写逃离斯巴达。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 勒达回到丈夫身边并产下两枚卵。',
            why: '她是斯巴达王廷达瑞俄斯之妻，同一夜又在婚床上。文中他尚无孩子可藏：他们还未出生。',
          },
          difficulty_rationale:
            '一夜双床的情节枢纽。容易认定受骗之后她便离开丈夫。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '神性与人性如何在那一夜的孩子身上交汇？',
          options: [
            {
              id: 'A',
              text: '四人皆为宙斯之子',
            },
            {
              id: 'B',
              text: '海伦与波吕丢刻斯属宙斯；克吕泰涅斯特拉与卡斯托尔属廷达瑞俄斯',
            },
            {
              id: 'C',
              text: '唯海伦为宙斯所出；其余三人属廷达瑞俄斯',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 宙斯二人，廷达瑞俄斯二人：海伦与波吕丢刻斯 / 克吕泰涅斯特拉与卡斯托尔。',
            detail:
              '卡注明：各版本如此。两种起源同在一情节中。卡底的海伦是结合的果实，却非唯一。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 海伦与波吕丢刻斯属宙斯，克吕泰涅斯特拉与卡斯托尔属廷达瑞俄斯。',
            why: '画面画出卵中海伦，由此易把一切缩成她一人，或四人皆宙斯所出。正文却是一对对分开。',
          },
          difficulty_rationale:
            '四个名字容易塌缩。卡上可见的海伦诱人忘掉波吕丢刻斯、卡斯托尔与克吕泰涅斯特拉。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '在更阴暗的解读里，这个故事变成什么？',
          options: [
            {
              id: 'A',
              text: '一段相互之爱',
            },
            {
              id: 'B',
              text: '神的暴行：从外部强加的命运',
            },
            {
              id: 'C',
              text: '勒达自己选择的牺牲',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 与其说是爱，不如说是暴力；违背意志闯入的命运。',
            detail:
              '勒达抚摸天鹅颈时自觉安全。卡先称之为诱惑，随后不容置疑：人在诸神意志前无力。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 神的暴行，从外部强加的命运。',
            why: '文中勒达并无同意。“爱”是第一层较轻的框架；后一层坚持闯入决定人生命途。',
          },
          difficulty_rationale:
            '卡在画家名单之后补上的结论。容易停在“诱惑”与母性。',
          needs_review: false,
        },
      ],
    },
  },
};
