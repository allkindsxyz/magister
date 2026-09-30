import type { DeepDiveCard } from './types';

export const fiveSpades: DeepDiveCard = {
  card_id: '5-spades',
  locales: {
    en: {
      card_title: 'The Shot',
      questions: [
        {
          level: 'Story',
          question: 'How, according to the card, did his life end?',
          options: [
            {
              id: 'A',
              text: 'Execution by sentence of the authorities',
            },
            {
              id: 'B',
              text: 'Death from an epidemic carried by flies',
            },
            {
              id: 'C',
              text: 'A duel with Georges d’Anthès in 1837',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he died in a duel with d’Anthès.',
            detail:
              'The death became a tragedy for his contemporaries. The flies in the picture are a symbol of evil and plague, not the cause of death. Power hounded him with censorship, but did not execute him.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a duel with Georges d’Anthès in 1837.',
            why: 'The title “The Shot” is easy to glue to the plague on the picture or to a state execution. The text fixes the duel.',
          },
          difficulty_rationale:
            'The plot’s ending. The picture’s symbols compete with the biographical fact.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What do the cricket and the flies mean in this pair?',
          options: [
            {
              id: 'A',
              text: 'The cricket is home; the flies are evil and plague epidemics',
            },
            {
              id: 'B',
              text: 'The cricket is the leap of verse; the flies are petty critics',
            },
            {
              id: 'C',
              text: 'The cricket is a night song; the flies are summer idleness',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the cricket is the hearth of home; the flies are plague and evil.',
            detail:
              'He sits astride the symbol of home and aims at an epidemic. The pair is not about lightness of style and not about tiresome reviewers.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the cricket symbolizes home; the flies — evil and plague epidemics.',
            why: 'Insects are easy to turn into a metaphor of verse or social bustle. The card sets another vocabulary: hearth against pestilence.',
          },
          difficulty_rationale:
            'The summary’s direct legend. Without it the rider on a cricket reads as a joke about a “little poet.”',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the card count as his chief shot at culture?',
          options: [
            {
              id: 'A',
              text: 'Refusal to write under censorship — silence as protest',
            },
            {
              id: 'B',
              text: 'Founding the modern Russian literary language',
            },
            {
              id: 'C',
              text: 'Victory over d’Anthès, after which he left literature',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he laid down the language on which later literature grew.',
            detail:
              'From lyric to Eugene Onegin — simplicity and grace. Duels, censorship, and conflict with power ran beside him, but he kept writing. The title’s “Shot” is larger than that pistol.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he is the founder of the modern Russian literary language.',
            why: 'He did not fall silent. D’Anthès killed him; he did not force him to quit. The card holds the cultural foundation — the home he sits on.',
          },
          difficulty_rationale:
            'The title pulls toward the duel. The card’s thesis is the hearth of language against pestilence — not only the pistol of 1837.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Выстрел',
      questions: [
        {
          level: 'Story',
          question: 'Чем, по карте, закончилась его жизнь?',
          options: [
            {
              id: 'A',
              text: 'Казнью по приговору власти',
            },
            {
              id: 'B',
              text: 'Смертью от эпидемии, которую несут мухи',
            },
            {
              id: 'C',
              text: 'Дуэлью с Жоржем Дантесом в 1837 году',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он погиб на дуэли с Дантесом.',
            detail:
              'Смерть стала трагедией для современников. Мухи в картине — символ зла и чумы, не причина гибели. Власть травила цензурой, но не казнила.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — дуэль с Жоржем Дантесом в 1837 году.',
            why: 'Название «Выстрел» легко склеить с чумой на картине или с расправой государства. Текст фиксирует дуэль.',
          },
          difficulty_rationale:
            'Сюжетный финал. Символы картины конкурируют с биографическим фактом.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что значат сверчок и мухи в этой паре?',
          options: [
            {
              id: 'A',
              text: 'Сверчок — дом; мухи — зло и эпидемии чумы',
            },
            {
              id: 'B',
              text: 'Сверчок — прыжок стиха; мухи — мелкие критики',
            },
            {
              id: 'C',
              text: 'Сверчок — ночная песнь; мухи — летняя праздность',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — сверчок это очаг дома, мухи — чума и зло.',
            detail:
              'Он сидит верхом на символе дома и целится в эпидемию. Пара не про лёгкость слога и не про надоедливых рецензентов.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — сверчок символизирует дом, мухи — зло и эпидемии чумы.',
            why: 'Насекомых легко превратить в метафору стиха или светской суеты. Карта задаёт другой словарь: очаг против мора.',
          },
          difficulty_rationale:
            'Прямая легенда summary. Без неё всадник на сверчке читается как шутка о «маленьком поэте».',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что карта считает его главным выстрелом по культуре?',
          options: [
            {
              id: 'A',
              text: 'Отказ писать под цензурой — молчание как протест',
            },
            {
              id: 'B',
              text: 'Основание современного русского литературного языка',
            },
            {
              id: 'C',
              text: 'Победа над Дантесом, после которой он отошёл от литературы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он заложил язык, на котором выросла последующая литература.',
            detail:
              'От лирики до «Евгения Онегина» — простота и изящество. Дуэли, цензура и конфликт с властью шли рядом, но он продолжал писать. «Выстрел» названия больше этого пистолета.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он основоположник современного русского литературного языка.',
            why: 'Молчать он как раз не стал. Дантес его убил, а не вынудил уйти. Карта держит культурный фундамент — дом, на котором он сидит.',
          },
          difficulty_rationale:
            'Название тянет к дуэли. Тезис карты — очаг языка против мора, а не только пистолет 1837 года.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Страл',
      questions: [
        {
          level: 'Story',
          question: 'Чым, паводле карты, скончылася яго жыццё?',
          options: [
            {
              id: 'A',
              text: 'Пакараннем смерцю па прысудзе ўлады',
            },
            {
              id: 'B',
              text: 'Смерцю ад эпідэміі, якую нясуць мухі',
            },
            {
              id: 'C',
              text: 'Дуэлю з Жоржам Дантэсам у 1837 годзе',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён загінуў на дуэлі з Дантэсам.',
            detail:
              'Смерць стала трагедыяй для сучаснікаў. Мухі на карціне — сімвал зла і чумы, не прычына загібелі. Улада цкавала цэнзурай, але не карала смерцю.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — дуэль з Жоржам Дантэсам у 1837 годзе.',
            why: 'Назву «Страл» лёгка склеіць з чумой на карціне або з расправай дзяржавы. Тэкст фіксуе дуэль.',
          },
          difficulty_rationale:
            'Сюжэтны фінал. Сімвалы карціны канкуруюць з біяграфічным фактам.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што значаць цвыркун і мухі ў гэтай пары?',
          options: [
            {
              id: 'A',
              text: 'Цвыркун — дом; мухі — зло і эпідэміі чумы',
            },
            {
              id: 'B',
              text: 'Цвыркун — скачок верша; мухі — дробныя крытыкі',
            },
            {
              id: 'C',
              text: 'Цвыркун — начная песня; мухі — летняя бяздзейнасць',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — цвыркун гэта ачаг дома, мухі — чума і зло.',
            detail:
              'Ён сядзіць верхам на сімвале дома і цэліцца ў эпідэмію. Пара не пра лёгкасць складу і не пра надакучлівых рэцэнзентаў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — цвыркун сімвалізуе дом, мухі — зло і эпідэміі чумы.',
            why: 'Казурак лёгка ператварыць у метафару верша або свецкай мітусні. Карта задае іншы слоўнік: ачаг супраць мору.',
          },
          difficulty_rationale:
            'Прамая легенда summary. Без яе вершнік на цвыркуне чытаецца як жарт пра «маленькага паэта».',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што карта лічыць яго галоўным стралам па культуры?',
          options: [
            {
              id: 'A',
              text: 'Адмову пісаць пад цэнзурай — маўчанне як пратэст',
            },
            {
              id: 'B',
              text: 'Заснаванне сучаснай рускай літаратурнай мовы',
            },
            {
              id: 'C',
              text: 'Перамогу над Дантэсам, пасля якой ён адышоў ад літаратуры',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён заклаў мову, на якой вырасла наступная літаратура.',
            detail:
              'Ад лірыкі да «Яўгена Анегіна» — прастата і вытанчанасць. Дуэлі, цэнзура і канфлікт з уладай ішлі побач, але ён працягваў пісаць. «Страл» назвы большы за гэты пісталет.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён заснавальнік сучаснай рускай літаратурнай мовы.',
            why: 'Маўчаць ён якраз не стаў. Дантэс яго забіў, а не прымусіў сысці. Карта трымае культурны фундамент — дом, на якім ён сядзіць.',
          },
          difficulty_rationale:
            'Назва цягне да дуэлі. Тэзіс карты — ачаг мовы супраць мору, а не толькі пісталет 1837 года.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '射击',
      questions: [
        {
          level: 'Story',
          question: '依卡片，他的生命如何终结？',
          options: [
            {
              id: 'A',
              text: '依当局判决被处决',
            },
            {
              id: 'B',
              text: '死于苍蝇所携的瘟疫',
            },
            {
              id: 'C',
              text: '一八三七年与乔治·丹特斯决斗',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他死于与丹特斯的决斗。',
            detail:
              '死讯对同时代人是悲剧。画中苍蝇是邪恶与瘟疫的象征，不是死因。权力以审查迫害他，却未处决他。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 一八三七年与乔治·丹特斯决斗。',
            why: '标题「射击」易与画中瘟疫或国家处决粘连。正文钉住的是决斗。',
          },
          difficulty_rationale:
            '情节收束。画面象征与传记事实争夺注意力。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '在这一对中，蟋蟀与苍蝇意指什么？',
          options: [
            {
              id: 'A',
              text: '蟋蟀是家园；苍蝇是邪恶与瘟疫',
            },
            {
              id: 'B',
              text: '蟋蟀是诗行的跳跃；苍蝇是琐碎批评者',
            },
            {
              id: 'C',
              text: '蟋蟀是夜歌；苍蝇是夏日闲散',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 蟋蟀是家园炉灶；苍蝇是瘟疫与邪恶。',
            detail:
              '他跨坐家园的象征，瞄准一场瘟疫。这一对无关文风轻盈，也无关烦人的评论者。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 蟋蟀象征家园；苍蝇——邪恶与瘟疫。',
            why: '昆虫易被转成诗或社交喧嚣的隐喻。卡片给出另一套语汇：炉灶对瘟疫。',
          },
          difficulty_rationale:
            '摘要的直接图例。没有它，蟋蟀上的骑手读成「小诗人」的玩笑。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片认为他对文化的主射击是什么？',
          options: [
            {
              id: 'A',
              text: '拒绝在审查下写作——沉默即抗议',
            },
            {
              id: 'B',
              text: '奠定现代俄语文学语言',
            },
            {
              id: 'C',
              text: '战胜丹特斯后就此离开文学',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他奠定了后世文学赖以生长的语言。',
            detail:
              '从抒情到《叶甫盖尼·奥涅金》——简洁与优雅。决斗、审查与权力冲突同行，但他继续写。标题的「射击」大于那支手枪。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他是现代俄语文学语言的奠基者。',
            why: '他并未沉默。丹特斯杀了他，并非逼他退出。卡片守住文化根基——他坐着的那个家。',
          },
          difficulty_rationale:
            '标题拉向决斗。卡片论点是语言炉灶对瘟疫——不止一八三七年的手枪。',
          needs_review: false,
        },
      ],
    },
  },
};
