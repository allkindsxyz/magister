import type { DeepDiveCard } from './types';

export const threeSpades: DeepDiveCard = {
  card_id: '3-spades',
  locales: {
    en: {
      card_title: 'The Ascension of Yuri',
      questions: [
        {
          level: 'Story',
          question: 'What did the flight of 12 April 1961 prove?',
          options: [
            {
              id: 'A',
              text: 'That a human can survive in space and step beyond the familiar world',
            },
            {
              id: 'B',
              text: 'That a pilot cannot circle the Earth in a single orbit',
            },
            {
              id: 'C',
              text: 'That only people of noble birth may be sent into space',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a human left Earth for the first time and proved survival there.',
            detail:
              'Aboard Vostok-1 he circled the Earth in 108 minutes. “Poyekhali!” the card fixes as the opening of a new space age.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the flight proved a human can survive in space.',
            why: 'He did circle the Earth. He was not chosen for nobility: the path ran from a simple family, a worker and a pilot.',
          },
          difficulty_rationale:
            'The card’s central scene. Date and ship are easy to remember; the thesis of the flight is not.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the card compare him to a swallow?',
          options: [
            {
              id: 'A',
              text: 'The swallow is an image of fragility: he barely endured the flight',
            },
            {
              id: 'B',
              text: 'He became the first swallow of a new space age',
            },
            {
              id: 'C',
              text: 'The swallow returns home — as he returned to a terrestrial flying career',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the swallow here means the start of an era, not weakness.',
            detail:
              'The first swallow is a sign that the season has already begun. He looked at Earth from outside. After that, space could no longer be closed.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he is the first swallow of a new space age.',
            why: 'The card does not make him fragile and does not return him to his old profession. The swallow is a herald of beginning, not fatigue after flight.',
          },
          difficulty_rationale:
            'A direct formula from the summary. The bird is easy to take for weakness or for return.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the card call ascension?',
          options: [
            {
              id: 'A',
              text: 'Death in 1968 — a departure “into the sky”',
            },
            {
              id: 'B',
              text: 'Meetings with world leaders after the flight',
            },
            {
              id: 'C',
              text: 'The first human exit beyond Earth',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — ascension here is the flight, not the death.',
            detail:
              'He died later, in a crash on a training flight. The card’s title reads like an apotheosis of death — the text holds another moment: the view of Earth from outside.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the first exit beyond Earth, not the death.',
            why: 'Death in 1968 was a training flight, not space. World fame was a consequence. The card’s ascension is the step past the familiar world.',
          },
          difficulty_rationale:
            'The title tempts a reading as death. The text separates the flight from the crash by seven years.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Вознесение Юрия',
      questions: [
        {
          level: 'Story',
          question: 'Что доказал полёт 12 апреля 1961 года?',
          options: [
            {
              id: 'A',
              text: 'Что человек может выжить в космосе и выйти за пределы привычного мира',
            },
            {
              id: 'B',
              text: 'Что пилот не способен облететь Землю за один виток',
            },
            {
              id: 'C',
              text: 'Что в космос можно отправлять только людей знатного происхождения',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — человек впервые покинул Землю и доказал, что там можно выжить.',
            detail:
              'На корабле «Восток-1» он облетел Землю за 108 минут. «Поехали!» карта закрепляет как начало новой космической эры.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — полёт доказал, что человек способен выжить в космосе.',
            why: 'Он как раз облетел Землю. Выбрали его не за знатность: путь шёл от простой семьи, рабочего и лётчика.',
          },
          difficulty_rationale:
            'Центральная сцена карты. Дата и корабль легко запомнить; тезис полёта — нет.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему карта сравнивает его с ласточкой?',
          options: [
            {
              id: 'A',
              text: 'Ласточка — образ хрупкости: он едва выдержал полёт',
            },
            {
              id: 'B',
              text: 'Он стал первой ласточкой новой космической эры',
            },
            {
              id: 'C',
              text: 'Ласточка возвращается домой — как он вернулся к земной карьере лётчика',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — ласточка здесь про начало эры, не про слабость.',
            detail:
              'Первая ласточка — знак, что сезон уже начался. Он взглянул на Землю со стороны. Дальше космос уже нельзя было считать закрытым.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он первая ласточка новой космической эры.',
            why: 'Карта не делает его хрупким и не возвращает к прежней профессии. Ласточка — вестник начала, а не усталости после полёта.',
          },
          difficulty_rationale:
            'Прямая формула summary. Птицу легко принять за слабость или за возвращение.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что карта называет вознесением?',
          options: [
            {
              id: 'A',
              text: 'Гибель в 1968-м — уход «на небо»',
            },
            {
              id: 'B',
              text: 'Встречи с лидерами стран после полёта',
            },
            {
              id: 'C',
              text: 'Первый выход человека за пределы Земли',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — вознесение здесь про полёт, не про смерть.',
            detail:
              'Он погиб позже, в авиакатастрофе на тренировочном полёте. Название карты читается как апофеоз смерти — текст держит другой момент: взгляд на Землю со стороны.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — первый выход за пределы Земли, а не гибель.',
            why: 'Смерть 1968 года — тренировочный полёт, не космос. Мировая слава была следствием. Вознесение карты — шаг за границу привычного мира.',
          },
          difficulty_rationale:
            'Название провоцирует прочитать карту как гибель. Текст отделяет полёт от катастрофы семью годами.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Узнясенне Юрыя',
      questions: [
        {
          level: 'Story',
          question: 'Што даказаў палёт 12 красавіка 1961 года?',
          options: [
            {
              id: 'A',
              text: 'Што чалавек можа выжыць у космасе і выйсці за межы звыклага свету',
            },
            {
              id: 'B',
              text: 'Што пілот не здольны абляцець Зямлю за адзін віток',
            },
            {
              id: 'C',
              text: 'Што ў космас можна адпраўляць толькі людзей знатнага паходжання',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — чалавек упершыню пакінуў Зямлю і даказаў, што там можна выжыць.',
            detail:
              'На караблі «Усход-1» ён абляцеў Зямлю за 108 хвілін. «Паехалі!» карта замацоўвае як пачатак новай касмічнай эры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — палёт даказаў, што чалавек здольны выжыць у космасе.',
            why: 'Ён якраз абляцеў Зямлю. Выбралі яго не за знатнасць: шлях ішоў ад простай сям’і, рабочага і лётчыка.',
          },
          difficulty_rationale:
            'Цэнтральная сцэна карты. Дату і карабель лёгка запомніць; тэзіс палёту — не.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму карта параўноўвае яго з ластаўкай?',
          options: [
            {
              id: 'A',
              text: 'Ластаўка — вобраз крохкасці: ён ледзь вытрымаў палёт',
            },
            {
              id: 'B',
              text: 'Ён стаў першай ластаўкай новай касмічнай эры',
            },
            {
              id: 'C',
              text: 'Ластаўка вяртаецца дадому — як ён вярнуўся да зямной кар’еры лётчыка',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ластаўка тут пра пачатак эры, не пра слабасць.',
            detail:
              'Першая ластаўка — знак, што сезон ужо пачаўся. Ён зірнуў на Зямлю збоку. Далей космас ужо нельга было лічыць закрытым.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён першая ластаўка новай касмічнай эры.',
            why: 'Карта не робіць яго крохкім і не вяртае да ранейшай прафесіі. Ластаўка — вястун пачатку, а не стомленасці пасля палёту.',
          },
          difficulty_rationale:
            'Прамая формула summary. Птушку лёгка прыняць за слабасць або за вяртанне.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што карта называе ўзнясеннем?',
          options: [
            {
              id: 'A',
              text: 'Загібель у 1968-м — сыход «на неба»',
            },
            {
              id: 'B',
              text: 'Сустрэчы з лідарамі краін пасля палёту',
            },
            {
              id: 'C',
              text: 'Першы выхад чалавека за межы Зямлі',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — узнясенне тут пра палёт, не пра смерць.',
            detail:
              'Ён загінуў пазней, у авіякатастрофе на трэніровачным палёце. Назва карты чытаецца як апафеоз смерці — тэкст трымае іншы момант: погляд на Зямлю збоку.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — першы выхад за межы Зямлі, а не загібель.',
            why: 'Смерць 1968 года — трэніровачны палёт, не космас. Сусветная слава была наступствам. Узнясенне карты — крок за мяжу звыклага свету.',
          },
          difficulty_rationale:
            'Назва правакуе прачытаць карту як загібель. Тэкст аддзяляе палёт ад катастрофы сямі гадамі.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '尤里的升天',
      questions: [
        {
          level: 'Story',
          question: '一九六一年四月十二日的飞行证明了什么？',
          options: [
            {
              id: 'A',
              text: '人能在太空存活，并跨出熟悉世界的边界',
            },
            {
              id: 'B',
              text: '飞行员无法单圈环绕地球',
            },
            {
              id: 'C',
              text: '只有出身显贵者方可送入太空',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 人类首次离开地球，并证明可在那里存活。',
            detail:
              '他乘「东方一号」以一百零八分钟环绕地球。卡片把「出发！」钉为新太空时代的开端。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 飞行证明人能在太空存活。',
            why: '他确已环绕地球。选拔并非因贵族身份：道路从朴素家庭、工人与飞行员走来。',
          },
          difficulty_rationale:
            '卡片的中心场景。日期与飞船易记；飞行的论点不易。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片为何把他比作燕子？',
          options: [
            {
              id: 'A',
              text: '燕子是脆弱的意象：他勉强撑过飞行',
            },
            {
              id: 'B',
              text: '他成了新太空时代的第一只燕子',
            },
            {
              id: 'C',
              text: '燕子归巢——正如他回到地面飞行生涯',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处燕子意指时代开端，而非软弱。',
            detail:
              '第一只燕子是季节已至的信号。他从外侧望向地球。此后太空再不能被视为封闭。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他是新太空时代的第一只燕子。',
            why: '卡片不把他写成脆弱，也不让他退回旧业。燕子是开端的信使，不是飞后的疲惫。',
          },
          difficulty_rationale:
            '摘要的直接公式。鸟易被当成软弱或归返。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片所称的「升天」是什么？',
          options: [
            {
              id: 'A',
              text: '一九六八年之死——「升入天空」',
            },
            {
              id: 'B',
              text: '飞行后与各国领袖的会见',
            },
            {
              id: 'C',
              text: '人类首次跨出地球之外',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处升天指飞行，而非死亡。',
            detail:
              '他后来死于训练飞行的空难。卡名读来像死亡的神化——正文守住另一刻：从外侧望见地球。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 首次跨出地球，而非死亡。',
            why: '一九六八年之死是训练飞行，不是太空。世界声名是后果。卡片的升天是跨出熟悉世界的一步。',
          },
          difficulty_rationale:
            '标题诱导向死亡解读。正文以七年之隔分开飞行与空难。',
          needs_review: false,
        },
      ],
    },
  },
};
