import type { DeepDiveCard } from './types';

export const sevenClubs: DeepDiveCard = {
  card_id: '7-clubs',
  locales: {
    en: {
      card_title: 'Return of the Relic',
      questions: [
        {
          level: 'Story',
          question: 'What did Everard des Barres do when high office grew too narrow for him?',
          options: [
            {
              id: 'A',
              text: 'Voluntarily laid down the Master’s powers and withdrew to Clairvaux',
            },
            {
              id: 'B',
              text: 'Led the Second Crusade in place of Louis VII',
            },
            {
              id: 'C',
              text: 'Moved the Order’s authority to Burgundy',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he laid down the office and entered Cistercian Clairvaux.',
            detail:
              'In 1147 he became Master and led the Order in the Second Crusade, accompanying the king. In 1151 he left of his own will — a step almost unheard of for the head of such an Order.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he voluntarily laid down the Grand Master’s powers and withdrew to the monastery of Clairvaux.',
            why: 'He accompanied the king; he did not replace him. Burgundy is his lineage, not a new capital of the Order. The rarity of the gesture lies in the refusal of power.',
          },
          difficulty_rationale:
            'The card’s main event. The title speaks of a relic the text never shows — only the withdrawal.',
          needs_review: true,
          needs_review_reason:
            'The title is “Return of the Relic”; the text has no relic — only the refusal of office and withdrawal to Clairvaux.',
        },
        {
          level: 'Context',
          question: 'What did his withdrawal into a Cistercian monastery speak of?',
          options: [
            {
              id: 'A',
              text: 'A break with Bernard of Clairvaux',
            },
            {
              id: 'B',
              text: 'A striving toward a stricter spiritual life',
            },
            {
              id: 'C',
              text: 'The Order’s fall after the Second Crusade',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a stricter spiritual life, not the Order’s ruin.',
            detail:
              'He was kin to Bernard and from youth stood between knighthood and the Church. Clairvaux is no revenge on the bloodline, but a return into the same ascesis, harder.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a striving toward a stricter spiritual life.',
            why: 'Bernard is kin and milieu, not an enemy. The card does not bury the Order after his leaving: it buries only his own power.',
          },
          difficulty_rationale:
            'Why a Master breaks a career. Kinship with Bernard is easy to invert into conflict.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What turn does the card take as the essence of this life?',
          options: [
            {
              id: 'A',
              text: 'From power and responsibility — to solitude and spiritual search',
            },
            {
              id: 'B',
              text: 'From monastic life — to war for the Holy Sepulchre',
            },
            {
              id: 'C',
              text: 'From service to the king — to the Order’s banking',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — from power to solitude and search.',
            detail:
              'The remaining years — outside war and politics. The figure’s depth is not in the crusade, but in that the head of the Order could leave it alive.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — from power and responsibility to solitude and spiritual search.',
            why: 'The direction runs the other way: not into war and not into the treasury, but out of office. The “relic” here is the turn itself, if anything.',
          },
          difficulty_rationale:
            'The formula of the last paragraph. A Master’s biography is easy to leave in the East and miss the refusal.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Возвращение святыни',
      questions: [
        {
          level: 'Story',
          question: 'Что сделал Эврар де Бар, когда высокий сан стал ему тесен?',
          options: [
            {
              id: 'A',
              text: 'Добровольно сложил полномочия магистра и ушёл в Клерво',
            },
            {
              id: 'B',
              text: 'Возглавил Второй крестовый поход вместо Людовика VII',
            },
            {
              id: 'C',
              text: 'Перенёс власть ордена в Бургундию',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — сложил сан и вступил в цистерцианский Клерво.',
            detail:
              'В 1147-м он стал магистром и вёл орден во Втором походе, сопровождая короля. В 1151-м ушёл сам — шаг, для главы такого ордена почти неслыханный.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — добровольно сложил полномочия великого магистра и ушёл в монастырь Клерво.',
            why: 'Короля он сопровождал, не подменял. Бургундия — род, не новая столица ордена. Редкость жеста — в отказе от власти.',
          },
          difficulty_rationale:
            'Главное событие карты. Название говорит о святыне, которой в тексте нет — только уход.',
          needs_review: true,
          needs_review_reason:
            'Название — «Возвращение святыни»; в тексте святыни нет, только отказ от сана и уход в Клерво.',
        },
        {
          level: 'Context',
          question: 'О чём говорил его уход в цистерцианский монастырь?',
          options: [
            {
              id: 'A',
              text: 'О разрыве с Бернаром Клервоским',
            },
            {
              id: 'B',
              text: 'О стремлении к более строгой духовной жизни',
            },
            {
              id: 'C',
              text: 'О падении ордена после Второго похода',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — более строгая духовная жизнь, не крах ордена.',
            detail:
              'Он был родственником Бернара и смолоду стоял между рыцарством и церковью. Клерво — не месть роду, а возврат в ту же аскезу жёстче.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — стремление к более строгой духовной жизни.',
            why: 'Бернар — родня и среда, не враг. Орден после его ухода карта не хоронит: хоронит она только его собственную власть.',
          },
          difficulty_rationale:
            'Зачем магистр ломает карьеру. Родство с Бернаром легко перевернуть в конфликт.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Какой поворот карта считает сутью этой жизни?',
          options: [
            {
              id: 'A',
              text: 'От власти и ответственности — к уединению и духовному поиску',
            },
            {
              id: 'B',
              text: 'От монашества — к войне за Гроб Господень',
            },
            {
              id: 'C',
              text: 'От службы королю — к банковскому делу ордена',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — от власти к уединению и поиску.',
            detail:
              'Оставшиеся годы — вне войны и политики. Глубина фигуры не в походе, а в том, что глава ордена сумел выйти из него живым.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — от власти и ответственности к уединению и духовному поиску.',
            why: 'Направление обратное: не в войну и не в казну, а из сана. «Святыня» здесь — сам разворот, если вообще что-то.',
          },
          difficulty_rationale:
            'Формула последнего абзаца. Биографию магистра легко оставить на Востоке и не увидеть отказ.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Вяртанне святыні',
      questions: [
        {
          level: 'Story',
          question: 'Што зрабіў Эўрар дэ Бар, калі высокі сан стаў яму цесны?',
          options: [
            {
              id: 'A',
              text: 'Добраахвотна склаў паўнамоцтвы магістра і пайшоў у Клерво',
            },
            {
              id: 'B',
              text: 'Узначаліў Другі крыжовы паход замест Людовіка VII',
            },
            {
              id: 'C',
              text: 'Перанёс уладу ордэна ў Бургундыю',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — склаў сан і ўступіў у цыстэрцыянскі Клерво.',
            detail:
              'У 1147-м ён стаў магістрам і вёў ордэн у Другім паходзе, суправаджаючы караля. У 1151-м пайшоў сам — крок, для кіраўніка такога ордэна амаль нячуты.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — добраахвотна склаў паўнамоцтвы вялікага магістра і пайшоў у манастыр Клерво.',
            why: 'Караля ён суправаджаў, не падмяняў. Бургундыя — род, не новая сталіца ордэна. Рэдкасць жэста — у адмове ад улады.',
          },
          difficulty_rationale:
            'Галоўная падзея карты. Назва кажа пра святыню, якой у тэксце няма — толькі адыход.',
          needs_review: true,
          needs_review_reason:
            'Назва — «Вяртанне святыні»; у тэксце святыні няма, толькі адмова ад сана і адыход у Клерво.',
        },
        {
          level: 'Context',
          question: 'Пра што казаў яго адыход у цыстэрцыянскі манастыр?',
          options: [
            {
              id: 'A',
              text: 'Пра разрыў з Бернарам Клервоскім',
            },
            {
              id: 'B',
              text: 'Пра імкненне да больш строгага духоўнага жыцця',
            },
            {
              id: 'C',
              text: 'Пра падзенне ордэна пасля Другога паходу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — больш строгае духоўнае жыццё, не крах ордэна.',
            detail:
              'Ён быў сваяком Бернара і змалку стаяў паміж рыцарствам і царквой. Клерво — не помста роду, а вяртанне ў тую ж аскезу жорстчэй.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — імкненне да больш строгага духоўнага жыцця.',
            why: 'Бернар — родзічы і асяроддзе, не вораг. Ордэн пасля яго адыходу карта не хавае: хавае яна толькі яго ўласную ўладу.',
          },
          difficulty_rationale:
            'Навошта магістр ламае кар’еру. Сваяцтва з Бернарам лёгка перавярнуць у канфлікт.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Які паварот карта лічыць сутнасцю гэтага жыцця?',
          options: [
            {
              id: 'A',
              text: 'Ад улады і адказнасці — да ўсамітнення і духоўнага пошуку',
            },
            {
              id: 'B',
              text: 'Ад манаства — да вайны за Гроб Гасподні',
            },
            {
              id: 'C',
              text: 'Ад службы каралю — да банкаўскай справы ордэна',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ад улады да ўсамітнення і пошуку.',
            detail:
              'Астатнія гады — па-за вайной і палітыкай. Глыбіня постаці не ў паходзе, а ў тым, што кіраўнік ордэна здолеў выйсці з яго жывым.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ад улады і адказнасці да ўсамітнення і духоўнага пошуку.',
            why: 'Кірунак адваротны: не ў вайну і не ў казну, а з сана. «Святыня» тут — сам паварот, калі наогул штосьці.',
          },
          difficulty_rationale:
            'Формула апошняга абзаца. Біяграфію магістра лёгка пакінуць на Усходзе і не ўбачыць адмовы.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '圣物归来',
      questions: [
        {
          level: 'Story',
          question: '当高位对他已显狭隘时，埃弗拉尔·德·巴尔做了什么？',
          options: [
            {
              id: 'A',
              text: '自愿卸下大团长职权并退入克莱沃',
            },
            {
              id: 'B',
              text: '代替路易七世统领第二次十字军',
            },
            {
              id: 'C',
              text: '把骑士团权力迁往勃艮第',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他卸职并进入熙笃会的克莱沃。',
            detail:
              '1147年他成为大团长，在第二次十字军中领导骑士团并伴随国王。1151年他自愿离去——对如此强大骑士团的首领而言，几乎闻所未闻。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他自愿卸下大团长职权并退入克莱沃修道院。',
            why: '他伴随国王，并未取代。勃艮第是他的族系，不是骑士团的新首都。姿态之罕见，在于放弃权力。',
          },
          difficulty_rationale:
            '卡片的主事件。标题谈圣物，文本却未出现——只有退隐。',
          needs_review: true,
          needs_review_reason:
            '标题是「圣物归来」；文本并无圣物——只有卸职与退入克莱沃。',
        },
        {
          level: 'Context',
          question: '他退入熙笃会修道院说明了什么？',
          options: [
            {
              id: 'A',
              text: '与克莱沃的伯尔纳决裂',
            },
            {
              id: 'B',
              text: '对更严格灵性生活的向往',
            },
            {
              id: 'C',
              text: '第二次十字军后骑士团的衰落',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 更严格的灵性生活，而非骑士团覆灭。',
            detail:
              '他与伯尔纳有亲缘，自幼立于骑士与教会之间。克莱沃不是对血缘的报复，而是更严地回到同一种苦行。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 对更严格灵性生活的向往。',
            why: '伯尔纳是亲族与环境，不是敌人。卡片并不埋葬他离去后的骑士团：埋葬的只是他自己的权力。',
          },
          difficulty_rationale:
            '大团长为何打断生涯。与伯尔纳的亲缘容易被颠倒成冲突。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片把何种转向视为此生的本质？',
          options: [
            {
              id: 'A',
              text: '从权力与责任——转向隐居与灵性探求',
            },
            {
              id: 'B',
              text: '从修道生活——转向争夺圣墓的战争',
            },
            {
              id: 'C',
              text: '从侍奉国王——转向骑士团的银行业',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 从权力转向隐居与探求。',
            detail:
              '余年在战争与政治之外。形象的深度不在远征，而在骑士团首领能够活着离开它。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 从权力与责任转向隐居与灵性探求。',
            why: '方向相反：不是进入战争或金库，而是走出职分。若有「圣物」，在此便是转向本身。',
          },
          difficulty_rationale:
            '末段的公式。大团长传记容易留在东方，而错过拒绝。',
          needs_review: false,
        },
      ],
    },
  },
};
