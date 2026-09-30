import type { DeepDiveCard } from './types';

export const twoClubs: DeepDiveCard = {
  card_id: '2-clubs',
  locales: {
    en: {
      card_title: 'Death in Battle',
      questions: [
        {
          level: 'Story',
          question: 'Which event sealed Gérard de Ridefort’s fate as Master?',
          options: [
            {
              id: 'A',
              text: 'The Order’s victory over Saladin at Hattin',
            },
            {
              id: 'B',
              text: 'The crushing of the crusader army at Hattin',
            },
            {
              id: 'C',
              text: 'The founding of the Templar Order in the Holy Land',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the defeat at Hattin in 1187.',
            detail:
              'Gérard pressed for open war with the Muslims. A hard, often reckless policy led the Order to catastrophe — and him into captivity.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the crushing of the crusaders at Hattin.',
            why: 'Neither a victory nor the Order’s founding. Gérard took the Templars shortly before the fall of the Kingdom of Jerusalem and played a decisive part in the disaster of 1187.',
          },
          difficulty_rationale:
            'The card’s central event. We do not ask whether he died in battle: that is the title, and likely what the painting shows.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'How did Gérard come to lead the Order?',
          options: [
            {
              id: 'A',
              text: 'Saladin made him Master after his captivity',
            },
            {
              id: 'B',
              text: 'He took the office as heir to the previous Master',
            },
            {
              id: 'C',
              text: 'After setbacks he entered the Order and rose quickly',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the path ran through service, setbacks, and lost patronage.',
            detail:
              'He arrived in the East as a knight from Flanders, began as a mercenary, and only later entered the Order. Grand Master in 1184 — by resolve and military experience.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — after personal setbacks he entered the Order and rose quickly.',
            why: 'Captivity under Saladin came later, after Hattin. He was no Master’s heir: the career began with mercenary service in the Holy Land.',
          },
          difficulty_rationale:
            'The chain “mercenary → lost patronage → Order → Master.” Captivity is easy to put in the wrong place in the biography.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What, by rumor, did Gérard do in captivity after Hattin?',
          options: [
            {
              id: 'A',
              text: 'Renounced Christianity in exchange for freedom',
            },
            {
              id: 'B',
              text: 'Gave Saladin the names of the Order’s brothers',
            },
            {
              id: 'C',
              text: 'Placed the Order under Jerusalem’s authority',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — rumor has it he renounced Christianity for freedom.',
            detail:
              'The episode stained the Order’s name and later became one of the charges by which the Order was destroyed. Gérard himself fell in 1189, at the siege of Acre.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — by rumor, he renounced Christianity in exchange for freedom.',
            why: 'The card says nothing of betrayed names or of yielding the Order. The renunciation is the stain that outlived his death in battle at Acre.',
          },
          difficulty_rationale:
            'The rumor is easy to miss behind the battle and the death. It ties the Master’s personal weakness to the Order’s later destruction.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Смерть в бою',
      questions: [
        {
          level: 'Story',
          question: 'Какое событие определило судьбу Жерара де Ридфора как магистра?',
          options: [
            {
              id: 'A',
              text: 'Победа ордена над Саладином при Хаттине',
            },
            {
              id: 'B',
              text: 'Разгром армии крестоносцев при Хаттине',
            },
            {
              id: 'C',
              text: 'Основание ордена тамплиеров в Святой земле',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это разгром при Хаттине в 1187 году.',
            detail:
              'Жерар был сторонником активной войны с мусульманами. Жёсткая, часто авантюрная политика привела орден к катастрофе, а его самого — в плен.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — разгром крестоносцев при Хаттине.',
            why: 'Это не победа и не основание ордена. Жерар возглавил тамплиеров незадолго до падения Иерусалимского королевства и сыграл ключевую роль в катастрофе 1187 года.',
          },
          difficulty_rationale:
            'Центральное событие карты. Не спрашиваем, погиб ли он в бою: это название карты и, скорее всего, то, что видно на картине.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Как Жерар оказался во главе ордена?',
          options: [
            {
              id: 'A',
              text: 'Саладин поставил его магистром после плена',
            },
            {
              id: 'B',
              text: 'Он принял сан как наследник прежнего магистра',
            },
            {
              id: 'C',
              text: 'После неудач вступил в орден и быстро поднялся',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — путь шёл через службу, неудачи и утрату покровительства.',
            detail:
              'Он прибыл на Восток как рыцарь из Фландрии, начал наёмником, и только потом вступил в орден. Великим магистром стал в 1184-м — благодаря решительности и военному опыту.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — после личных неудач он вступил в орден и быстро поднялся.',
            why: 'Плен у Саладина был позже, уже после Хаттина. Наследником магистра он не был: карьера началась с наёмной службы в Святой земле.',
          },
          difficulty_rationale:
            'Связь «наёмник → утрата покровительства → орден → магистр». Плен легко поставить не на то место в биографии.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что, по слухам, сделал Жерар в плену после Хаттина?',
          options: [
            {
              id: 'A',
              text: 'Отрекся от христианства в обмен на свободу',
            },
            {
              id: 'B',
              text: 'Выдал Саладину имена братьев ордена',
            },
            {
              id: 'C',
              text: 'Перевёл орден под власть Иерусалима',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — поговаривают, что он отрёкся от христианства ради свободы.',
            detail:
              'Этот эпизод ударил по репутации ордена и позже стал одним из обвинений, по которым орден устранили. Сам Жерар погиб в 1189-м, при осаде Акры.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — по слухам, он отрёкся от христианства в обмен на свободу.',
            why: 'Карта не говорит ни про выдачу имён, ни про перевод ордена. Отречение — пятно, которое пережило его гибель в бою при Акре.',
          },
          difficulty_rationale:
            'Слух легко пропустить за битвой и смертью. Он же связывает личную слабость магистра с поздним уничтожением ордена.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Смерць у баі',
      questions: [
        {
          level: 'Story',
          question: 'Якая падзея вызначыла лёс Жэрара дэ Рыдфора як магістра?',
          options: [
            {
              id: 'A',
              text: 'Перамога ордэна над Саладзінам пры Хатыне',
            },
            {
              id: 'B',
              text: 'Разгром арміі крыжакоў пры Хатыне',
            },
            {
              id: 'C',
              text: 'Заснаванне ордэна тампліераў у Святой зямлі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта разгром пры Хатыне ў 1187 годзе.',
            detail:
              'Жэрар быў прыхільнікам актыўнай вайны з мусульманамі. Жорсткая, часта авантурная палітыка прывяла ордэн да катастрофы, а яго самога — у палон.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — разгром крыжакоў пры Хатыне.',
            why: 'Гэта не перамога і не заснаванне ордэна. Жэрар узначаліў тампліераў незадоўга да падзення Іерусалімскага каралеўства і адыграў ключавую ролю ў катастрофе 1187 года.',
          },
          difficulty_rationale:
            'Цэнтральная падзея карты. Не пытаемся, ці загінуў ён у баі: гэта назва карты і, хутчэй за ўсё, тое, што відаць на карціне.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Як Жэрар апынуўся на чале ордэна?',
          options: [
            {
              id: 'A',
              text: 'Саладзін паставіў яго магістрам пасля палону',
            },
            {
              id: 'B',
              text: 'Ён прыняў сан як наследнік былога магістра',
            },
            {
              id: 'C',
              text: 'Пасля няўдач уступіў у ордэн і хутка падняўся',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — шлях ішоў праз службу, няўдачы і страту заступніцтва.',
            detail:
              'Ён прыбыў на Усход як рыцар з Фландрыі, пачаў наймітам, і толькі потым уступіў у ордэн. Вялікім магістрам стаў у 1184-м — дзякуючы рашучасці і ваеннаму досведу.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пасля асабістых няўдач ён уступіў у ордэн і хутка падняўся.',
            why: 'Палон у Саладзіна быў пазней, ужо пасля Хатына. Наследнікам магістра ён не быў: кар’ера пачалася з наёмнай службы ў Святой зямлі.',
          },
          difficulty_rationale:
            'Сувязь «найміт → страта заступніцтва → ордэн → магістр». Палон лёгка паставіць не на тое месца ў біяграфіі.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што, па чутках, зрабіў Жэрар у палоне пасля Хатына?',
          options: [
            {
              id: 'A',
              text: 'Адрачыўся ад хрысціянства ў абмен на свабоду',
            },
            {
              id: 'B',
              text: 'Выдаў Саладзіну імёны братоў ордэна',
            },
            {
              id: 'C',
              text: 'Перавёў ордэн пад уладу Іерусаліма',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пагаворваюць, што ён адрачыўся ад хрысціянства дзеля свабоды.',
            detail:
              'Гэты эпізод ударыў па рэпутацыі ордэна і пазней стаў адным з абвінавачванняў, па якіх ордэн ухілілі. Сам Жэрар загінуў у 1189-м, пры аблозе Акры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — па чутках, ён адрачыўся ад хрысціянства ў абмен на свабоду.',
            why: 'Карта не кажа ні пра выдачу імёнаў, ні пра перавод ордэна. Адрачэнне — пляма, якая перажыла яго гібель у баі пры Акры.',
          },
          difficulty_rationale:
            'Чутку лёгка прапусціць за бітвай і смерцю. Яна ж звязвае асабістую слабасць магістра з познім знішчэннем ордэна.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '战死',
      questions: [
        {
          level: 'Story',
          question: '哪一事件决定了热拉尔·德·里德福尔作为大团长的命运？',
          options: [
            {
              id: 'A',
              text: '骑士团在哈丁战胜萨拉丁',
            },
            {
              id: 'B',
              text: '十字军军队在哈丁被彻底击溃',
            },
            {
              id: 'C',
              text: '圣殿骑士团在圣地创立',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 1187年哈丁之败。',
            detail:
              '热拉尔主张对穆斯林开战。强硬、往往冒险的政策把骑士团推向灾难，也把他自己送入俘虏。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 十字军在哈丁被击溃。',
            why: '既非胜利，亦非骑士团创立。热拉尔在耶路撒冷王国陷落前不久掌权，并在1187年的灾难中起了决定性作用。',
          },
          difficulty_rationale:
            '卡片的中心事件。不问他是否战死：那是标题，也很可能是画面所见。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '热拉尔如何登上骑士团之首？',
          options: [
            {
              id: 'A',
              text: '萨拉丁在他被俘后任命他为大团长',
            },
            {
              id: 'B',
              text: '他作为前任大团长的继承人就任',
            },
            {
              id: 'C',
              text: '遭遇挫败后加入骑士团并迅速升迁',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 道路经由服役、挫败与失去庇护。',
            detail:
              '他以佛兰德斯骑士身份东来，起初是雇佣兵，后来才入团。1184年成为大团长——靠决断与军事经验。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 个人挫败之后他加入骑士团并迅速升迁。',
            why: '被萨拉丁俘虏是哈丁之后的事。他并非大团长的继承人：事业始于圣地的雇佣服役。',
          },
          difficulty_rationale:
            '链条是「雇佣兵 → 失去庇护 → 骑士团 → 大团长」。俘虏容易放错传记位置。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '据传闻，热拉尔在哈丁被俘后做了什么？',
          options: [
            {
              id: 'A',
              text: '为换取自由而背弃基督教',
            },
            {
              id: 'B',
              text: '向萨拉丁交出骑士团兄弟的名字',
            },
            {
              id: 'C',
              text: '把骑士团置于耶路撒冷管辖之下',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 传闻他为自由而背弃了基督教。',
            detail:
              '这一情节玷污了骑士团的名声，后来成为摧毁骑士团的指控之一。热拉尔本人死于1189年阿卡围城。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 据传闻，他为换取自由而背弃基督教。',
            why: '卡片未提出卖名单或移交骑士团。背教是污点，比他在阿卡战死更长久。',
          },
          difficulty_rationale:
            '传闻容易淹没在战役与死亡之后。它把大团长的个人软弱与骑士团日后的覆灭连在一起。',
          needs_review: false,
        },
      ],
    },
  },
};
