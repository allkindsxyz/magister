import type { DeepDiveCard } from './types';

export const sevenSpades: DeepDiveCard = {
  card_id: '7-spades',
  locales: {
    en: {
      card_title: 'A Little Night Serenade',
      questions: [
        {
          level: 'Story',
          question: 'Which genre did he leave untouched?',
          options: [
            {
              id: 'A',
              text: 'The fugue',
            },
            {
              id: 'B',
              text: 'The canon',
            },
            {
              id: 'C',
              text: 'Opera',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he wrote no opera.',
            detail:
              'More than a thousand works in every possible genre — except this. Fugues and canons are precisely his polyphony: each line independent, and they compose a whole.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — opera.',
            why: 'Fugues and canons the card names as his form. There is one exception, and it stands in the same sentence as “more than a thousand.”',
          },
          difficulty_rationale:
            'A fact from the opening paragraph. Three genres from the same text; the correct one is absence, not presence.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why a hummingbird beside him?',
          options: [
            {
              id: 'A',
              text: 'The hummingbird is a messenger who governs time',
            },
            {
              id: 'B',
              text: 'The hummingbird is the tiny speed at which he scribbled notes',
            },
            {
              id: 'C',
              text: 'The hummingbird is the night bird of the serenade, leading him into darkness',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the hummingbird here is power over time, not the pace of writing.',
            detail:
              'Music overcomes earthly gravity, as birds do above the ground. A bat carries him; hummingbirds accompany. The night of the title is not the pair’s thesis.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the hummingbird is known as a messenger who governs time.',
            why: 'Wing-speed and the night color of a serenade are false readings. The card gives the bird an office: time, not darkness.',
          },
          difficulty_rationale:
            'A summary formula against the title. “Night serenade” pulls toward sleep; the hummingbird in the text is about time.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'How was he seen in his lifetime?',
          options: [
            {
              id: 'A',
              text: 'At once as Europe’s greatest composer',
            },
            {
              id: 'B',
              text: 'First as an outstanding organist, not as a composer',
            },
            {
              id: 'C',
              text: 'As an opera writer the whole court awaited',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — in life they prized the organist, not the author.',
            detail:
              'After death the music for a time fell into shadow. Mendelssohn rediscovered him in the nineteenth century. Overcoming the earthly limit was not a wreath worn while alive.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he was valued more as an organist than as a composer.',
            why: 'Greatness after the fact is easy to plant in his own years. He wrote no operas. The card separately notes the shadow after death and the return through Mendelssohn.',
          },
          difficulty_rationale:
            'The name today is a synonym for a summit. The text breaks that: in life — the organ, then oblivion, then the nineteenth century.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Маленькая ночная серенада',
      questions: [
        {
          level: 'Story',
          question: 'Какой жанр он обошёл стороной?',
          options: [
            {
              id: 'A',
              text: 'Фугу',
            },
            {
              id: 'B',
              text: 'Канон',
            },
            {
              id: 'C',
              text: 'Оперу',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — оперу он не писал.',
            detail:
              'Более тысячи произведений во всех возможных жанрах — кроме этого. Фуги и каноны как раз его полифония: каждая линия самостоятельна и складывается в целое.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — оперу.',
            why: 'Фуги и каноны карта называет его формой. Исключение одно, и оно стоит в том же предложении, что и «более тысячи».',
          },
          difficulty_rationale:
            'Факт из открывающего абзаца. Три жанра из того же текста; правильный — отсутствие, не наличие.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему рядом с ним колибри?',
          options: [
            {
              id: 'A',
              text: 'Колибри — посланник, управляющий временем',
            },
            {
              id: 'B',
              text: 'Колибри — крошечная скорость, с которой он строчил ноты',
            },
            {
              id: 'C',
              text: 'Колибри — ночная птица серенады, ведущая его во тьму',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — колибри здесь про власть над временем, не про темп письма.',
            detail:
              'Музыка преодолевает земное притяжение, как птицы над землёй. Несёт его летучая мышь; колибри сопровождают. Ночь названия — не тезис пары.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — колибри известна как посланник, управляющий временем.',
            why: 'Скорость крыла и ночной колорит серенады — ложные считывания. Карта даёт птице должность: время, а не тьма.',
          },
          difficulty_rationale:
            'Формула summary против названия. «Ночная серенада» тянет в сон; колибри в тексте — про время.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Как его видели при жизни?',
          options: [
            {
              id: 'A',
              text: 'Сразу как величайшего композитора Европы',
            },
            {
              id: 'B',
              text: 'Прежде как выдающегося органиста, не как композитора',
            },
            {
              id: 'C',
              text: 'Как автора опер, которых ждал весь двор',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — при жизни ценили органиста, не автора.',
            detail:
              'После смерти музыка на время ушла в тень. Заново открыл его в XIX веке Мендельсон. Преодоление земного предела случилось не прижизненным венком.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — его больше ценили как органиста, чем как композитора.',
            why: 'Величие задним числом легко поставить в его годы. Опер он не писал. Карта отдельно фиксирует тень после смерти и возвращение через Мендельсона.',
          },
          difficulty_rationale:
            'Имя сегодня синоним вершины. Текст ломает это: при жизни — орган, потом забвение, потом XIX век.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Маленькая начная серэнада',
      questions: [
        {
          level: 'Story',
          question: 'Які жанр ён абмінуў бокам?',
          options: [
            {
              id: 'A',
              text: 'Фугу',
            },
            {
              id: 'B',
              text: 'Канон',
            },
            {
              id: 'C',
              text: 'Оперу',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — оперу ён не пісаў.',
            detail:
              'Больш за тысячу твораў ва ўсіх магчымых жанрах — акрамя гэтага. Фугі і каноны якраз яго паліфонія: кожная лінія самастойная і складаецца ў цэлае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — оперу.',
            why: 'Фугі і каноны карта называе яго формай. Выключэнне адно, і яно стаіць у тым жа сказе, што і «больш за тысячу».',
          },
          difficulty_rationale:
            'Факт з адкрывальнага абзаца. Тры жанры з таго ж тэксту; правільны — адсутнасць, не наяўнасць.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму побач з ім калібры?',
          options: [
            {
              id: 'A',
              text: 'Калібры — пасланец, які кіруе часам',
            },
            {
              id: 'B',
              text: 'Калібры — драбнюткая хуткасць, з якой ён скрэб ноты',
            },
            {
              id: 'C',
              text: 'Калібры — начная птушка серэнады, што вядзе яго ў цемру',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — калібры тут пра ўладу над часам, не пра тэмп пісьма.',
            detail:
              'Музыка пераадольвае зямное прыцягненне, як птушкі над зямлёй. Нясе яго кажанок; калібры суправаджаюць. Ноч назвы — не тэзіс пары.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — калібры вядомая як пасланец, які кіруе часам.',
            why: 'Хуткасць крыла і начны каларит серэнады — ілжывыя счытванні. Карта дае птушцы пасаду: час, а не цемра.',
          },
          difficulty_rationale:
            'Формула summary супраць назвы. «Начная серэнада» цягне ў сон; калібры ў тэксце — пра час.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Як яго бачылі пры жыцці?',
          options: [
            {
              id: 'A',
              text: 'Адразу як найвялікшага кампазітара Еўропы',
            },
            {
              id: 'B',
              text: 'Перш як выдатнага арганіста, не як кампазітара',
            },
            {
              id: 'C',
              text: 'Як аўтара опер, якіх чакаў увесь двор',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пры жыцці цанілі арганіста, не аўтара.',
            detail:
              'Пасля смерці музыка на час сышла ў цень. Нанова адкрыў яго ў XIX стагоддзі Мендэльсон. Пераадоленне зямной мяжы здарылася не прыжыццёвым вянком.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яго больш цанілі як арганіста, чым як кампазітара.',
            why: 'Вяліч заднім чыслам лёгка паставіць у яго гады. Опер ён не пісаў. Карта асобна фіксуе цень пасля смерці і вяртанне праз Мендэльсона.',
          },
          difficulty_rationale:
            'Імя сёння сінонім вяршыні. Тэкст ламае гэта: пры жыцці — арган, потым забыццё, потым XIX стагоддзе.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '小夜曲',
      questions: [
        {
          level: 'Story',
          question: '他未触及哪一体裁？',
          options: [
            {
              id: 'A',
              text: '赋格',
            },
            {
              id: 'B',
              text: '卡农',
            },
            {
              id: 'C',
              text: '歌剧',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他未写歌剧。',
            detail:
              '一千余部作品，几乎遍及一切体裁——唯独这一项。赋格与卡农正是他的复调：每条声部独立，又合成整体。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 歌剧。',
            why: '卡片把赋格与卡农称为他的形式。例外只有一个，与「一千余部」同句。',
          },
          difficulty_rationale:
            '开篇事实。三体裁同出一文；正确项是缺席，不是在场。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何身旁是蜂鸟？',
          options: [
            {
              id: 'A',
              text: '蜂鸟是掌管时间的使者',
            },
            {
              id: 'B',
              text: '蜂鸟是他疾书音符的微小速度',
            },
            {
              id: 'C',
              text: '蜂鸟是夜曲之鸟，引他入暗',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处蜂鸟是对时间的掌控，不是书写速度。',
            detail:
              '音乐克服尘世重力，如飞鸟升离地面。蝙蝠载他；蜂鸟相随。标题之夜不是这一对的论点。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 蜂鸟以掌管时间的使者闻名。',
            why: '翅速与夜曲的夜色是误读。卡片给鸟一个职分：时间，不是黑暗。',
          },
          difficulty_rationale:
            '摘要公式对抗标题。「小夜曲」拉向睡眠；文中蜂鸟关乎时间。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '他在世时被如何看待？',
          options: [
            {
              id: 'A',
              text: '立刻被视为欧洲最伟大的作曲家',
            },
            {
              id: 'B',
              text: '首先是杰出的管风琴家，而非作曲家',
            },
            {
              id: 'C',
              text: '是整个宫廷所期待的歌剧作者',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在世时看重的是管风琴家，不是作者。',
            detail:
              '死后音乐一度隐入阴影。十九世纪门德尔松重新发现了他。超越尘世极限，并非生前的花环。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 人们更珍视作为管风琴家的他，而非作曲家。',
            why: '事后的伟大易被栽进他的年代。他未写歌剧。卡片另记死后阴影与经由门德尔松的回归。',
          },
          difficulty_rationale:
            '今日此名是巅峰同义词。正文拆开它：在世——管风琴，而后遗忘，再是十九世纪。',
          needs_review: false,
        },
      ],
    },
  },
};
