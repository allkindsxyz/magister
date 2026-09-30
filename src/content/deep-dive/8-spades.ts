import type { DeepDiveCard } from './types';

export const eightSpades: DeepDiveCard = {
  card_id: '8-spades',
  locales: {
    en: {
      card_title: 'Shakespeare’s Eighth Sonnet',
      questions: [
        {
          level: 'Story',
          question: 'What is reliably known about his London work?',
          options: [
            {
              id: 'A',
              text: 'He served as a court chronicler to the crown and never took the stage',
            },
            {
              id: 'B',
              text: 'He worked as actor and playwright in the Lord Chamberlain’s Men',
            },
            {
              id: 'C',
              text: 'His biography survives complete, day by day',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — actor and playwright of a London company.',
            detail:
              'Exact facts of the life are few. Birth in Stratford-upon-Avon the card names; a detailed diary — no. Plays and sonnets — tragedies, comedies, histories.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he was actor and playwright with the Lord Chamberlain’s Men.',
            why: 'The card says outright: exact facts are scarce. He did take the stage. It does not make him a chronicler to the crown.',
          },
          difficulty_rationale:
            'A biographical frame against a legend of omniscience. The name is vast — facts in the text are few, and that is part of the plot.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why is he astride a spider?',
          options: [
            {
              id: 'A',
              text: 'The spider is a metaphorical demiurge: with the pen he wove whole worlds',
            },
            {
              id: 'B',
              text: 'The spider is a death-trap, because Yorick’s skulls stand nearby',
            },
            {
              id: 'C',
              text: 'The spider is the poison of intrigue with which he struck Lancasters and Yorks',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the spider here is a maker, not an executioner.',
            detail:
              'Yorick’s dead heads and the roses of two houses are his creations, not a cage he fell into. A demiurge weaves the world’s net; he does not catch himself.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the spider is a demiurge weaving worlds with the pen.',
            why: 'Skulls and the roses of two houses stand in the same picture. Easy to take them for the spider’s prey. The card gives him the role of maker of those worlds.',
          },
          difficulty_rationale:
            'The summary’s allegory against memento mori on the same picture. The skull pulls toward death; the text — toward the weaving of worlds.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the card leave unresolved?',
          options: [
            {
              id: 'A',
              text: 'Whether this was one person or a whole group of authors',
            },
            {
              id: 'B',
              text: 'Whether he wrote only sonnets, without plays',
            },
            {
              id: 'C',
              text: 'Whether the English language knew his own verse',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — whether one author or a group remains unknown.',
            detail:
              'The legacy shapes theatre and literature; the phrases became quotations in any culture. The name may still be a mask. The card does not close that gap.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — it is unknown whether this was one person or a group of authors.',
            why: 'Plays and sonnets the card names together. Language is precisely his force. The unclarity is elsewhere: the integrity of the figure, not genre and not vocabulary.',
          },
          difficulty_rationale:
            'The text’s last sentence. Behind the greatness of the name it is easy to miss — and it breaks the certainty that the portrait equals one body.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Восьмой сонет Шекспира',
      questions: [
        {
          level: 'Story',
          question: 'Что достоверно известно о его лондонской работе?',
          options: [
            {
              id: 'A',
              text: 'Он служил придворным летописцем короны и не выходил на сцену',
            },
            {
              id: 'B',
              text: 'Он работал актёром и драматургом в труппе «Слуги лорда-камергера»',
            },
            {
              id: 'C',
              text: 'Его биография сохранилась целиком, день за днём',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — актёр и драматург лондонской труппы.',
            detail:
              'Точных сведений о жизни мало. Рождение в Стратфорде-на-Эйвоне карта называет; подробный дневник — нет. Пьесы и сонеты — трагедии, комедии, хроники.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он был актёром и драматургом у «Слуг лорда-камергера».',
            why: 'Карта прямо говорит: точных фактов мало. На сцену он как раз выходил. Летописцем короны его не делают.',
          },
          difficulty_rationale:
            'Биографический каркас против легенды всеведения. Имя огромно — фактов в тексте мало, и это часть сюжета.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему он верхом на пауке?',
          options: [
            {
              id: 'A',
              text: 'Паук — метафорический демиург: пером он плёл целые миры',
            },
            {
              id: 'B',
              text: 'Паук — западня смерти, потому что рядом черепа Йорика',
            },
            {
              id: 'C',
              text: 'Паук — яд интриги, которым он травил Ланкастеров и Йорков',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — паук здесь творец, не палач.',
            detail:
              'Мёртвые головы Йорика и розы двух домов — его создания, не клетка, в которую он попал. Демиург плетёт сеть мира, а не ловит себя.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — паук это демиург, плетущий миры пером.',
            why: 'Черепа и розы двух домов стоят на той же картине. Их легко принять за жертв паука. Карта отдаёт ему роль создателя этих миров.',
          },
          difficulty_rationale:
            'Аллегория summary против memento mori на той же картине. Череп тянет к смерти; текст — к ткачеству миров.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что карта оставляет нерешённым?',
          options: [
            {
              id: 'A',
              text: 'Был ли это один человек или целая группа авторов',
            },
            {
              id: 'B',
              text: 'Писал ли он только сонеты, без пьес',
            },
            {
              id: 'C',
              text: 'Знал ли английский язык его собственный стих',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — один автор это или группа, до сих пор неизвестно.',
            detail:
              'Наследие формирует театр и литературу; выражения стали цитатами любой культуры. Имя при этом может быть маской. Карта не закрывает этот зазор.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — неизвестно, один это человек или группа авторов.',
            why: 'Пьесы и сонеты карта называет вместе. Язык — как раз его сила. Неясность в другом: целостность фигуры, не жанр и не словарь.',
          },
          difficulty_rationale:
            'Последняя фраза текста. За величием имени её пропускают — а она ломает уверенность, что портрет равен одному телу.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Восьмы санет Шэкспіра',
      questions: [
        {
          level: 'Story',
          question: 'Што дакладна вядома пра яго лонданскую працу?',
          options: [
            {
              id: 'A',
              text: 'Ён служыў прыдворным летапісцам кароны і не выходзіў на сцэну',
            },
            {
              id: 'B',
              text: 'Ён працаваў акцёрам і драматургам у трупе «Слугі лорда-камергера»',
            },
            {
              id: 'C',
              text: 'Яго біяграфія захавалася цалкам, дзень за днём',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — акцёр і драматург лонданскай трупы.',
            detail:
              'Дакладных звестак пра жыццё мала. Нараджэнне ў Стратфардзе-на-Эйване карта называе; падрабязны дзённік — не. П’есы і санеты — трагедыі, камедыі, хронікі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён быў акцёрам і драматургам у «Слуг лорда-камергера».',
            why: 'Карта проста кажа: дакладных фактаў мала. На сцэну ён якраз выходзіў. Летапісцам кароны яго не робяць.',
          },
          difficulty_rationale:
            'Біяграфічны каркас супраць легенды ўсеведання. Імя велізарнае — фактаў у тэксце мала, і гэта частка сюжэту.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму ён верхам на павуку?',
          options: [
            {
              id: 'A',
              text: 'Павук — метафарычны дэміург: пяром ён плёў цэлыя светы',
            },
            {
              id: 'B',
              text: 'Павук — пастка смерці, бо побач чэрапы Ёрыка',
            },
            {
              id: 'C',
              text: 'Павук — яд інтрыгі, якім ён цкаваў Ланкастэраў і Ёркаў',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — павук тут творац, не кат.',
            detail:
              'Мёртвыя галовы Ёрыка і ружы двух дамоў — яго стварэнні, не клетка, у якую ён трапіў. Дэміург пляце сетку свету, а не ловіць сябе.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — павук гэта дэміург, які пляце светы пяром.',
            why: 'Чэрапы і ружы двух дамоў стаяць на той жа карціне. Іх лёгка прыняць за ахвяр павука. Карта аддае яму ролю стваральніка гэтых светаў.',
          },
          difficulty_rationale:
            'Алегорыя summary супраць memento mori на той жа карціне. Чэрап цягне да смерці; тэкст — да ткацтва светаў.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што карта пакідае нявырашаным?',
          options: [
            {
              id: 'A',
              text: 'Ці быў гэта адзін чалавек або цэлая група аўтараў',
            },
            {
              id: 'B',
              text: 'Ці пісаў ён толькі санеты, без п’ес',
            },
            {
              id: 'C',
              text: 'Ці ведала англійская мова яго ўласны верш',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — адзін аўтар гэта ці група, дасюль невядома.',
            detail:
              'Спадчына фармуе тэатр і літаратуру; выразы сталі цытатамі любой культуры. Імя пры гэтым можа быць маскай. Карта не закрывае гэты зазор.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — невядома, адзін гэта чалавек ці група аўтараў.',
            why: 'П’есы і санеты карта называе разам. Мова — якраз яго сіла. Неяснасць у іншым: цэласнасць фігуры, не жанр і не слоўнік.',
          },
          difficulty_rationale:
            'Апошняя фраза тэксту. За веліччу імя яе прапускаюць — а яна ламае ўпэўненасць, што партрэт роўны аднаму целу.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '莎士比亚的第八首十四行诗',
      questions: [
        {
          level: 'Story',
          question: '关于他在伦敦的工作，确知什么？',
          options: [
            {
              id: 'A',
              text: '他任王室宫廷史官，从未登台',
            },
            {
              id: 'B',
              text: '他在宫内大臣供奉剧团任演员与剧作家',
            },
            {
              id: 'C',
              text: '他的传记逐日完整保存',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 伦敦剧团的演员与剧作家。',
            detail:
              '生平确切事实很少。卡片点出斯特拉特福出生；详尽日记——没有。戏剧与十四行诗——悲剧、喜剧、历史剧。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他是宫内大臣供奉剧团的演员与剧作家。',
            why: '卡片直言：确切事实稀少。他确曾登台。并未把他写成王室史官。',
          },
          difficulty_rationale:
            '传记框架对抗全知传说。名字巨大——文中事实很少，而这正是情节的一部分。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '他为何骑在蜘蛛上？',
          options: [
            {
              id: 'A',
              text: '蜘蛛是隐喻的造物主：他以笔织出整座世界',
            },
            {
              id: 'B',
              text: '蜘蛛是死亡陷阱，因旁有约里克的头骨',
            },
            {
              id: 'C',
              text: '蜘蛛是阴谋之毒，他用以对付兰开斯特与约克',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处蜘蛛是造物者，不是刽子手。',
            detail:
              '约里克的死颅与两家玫瑰是他的造物，不是困住他的囚笼。造物主编织世界之网，而非自投其中。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 蜘蛛是以笔织世界的造物主。',
            why: '头骨与两家玫瑰同在一画。易把它们当成蜘蛛猎物。卡片给他的是创造那些世界的角色。',
          },
          difficulty_rationale:
            '摘要寓言对抗同画上的 memento mori。头骨拉向死亡；正文——拉向织世界。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片留下什么未决？',
          options: [
            {
              id: 'A',
              text: '这是一人，还是一整群作者',
            },
            {
              id: 'B',
              text: '他是否只写十四行诗、不写戏剧',
            },
            {
              id: 'C',
              text: '英语是否认得他自己的诗行',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 一人抑或群体，至今未知。',
            detail:
              '遗产塑造戏剧与文学；句子成为任何文化中的引言。名字仍可能是面具。卡片不弥合这道缝隙。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 未知这是一人还是一群作者。',
            why: '戏剧与十四行诗卡片并提。语言正是他的力量。不明之处在别处：人物是否完整，不在体裁与词汇。',
          },
          difficulty_rationale:
            '正文末句。名字的伟大下易被掠过——而它打破「肖像等于一具身体」的确信。',
          needs_review: false,
        },
      ],
    },
  },
};
