import type { DeepDiveCard } from './types';

export const kingHearts: DeepDiveCard = {
  card_id: 'king-hearts',
  locales: {
    en: {
      card_title: 'Dionysus',
      questions: [
        {
          level: 'Story',
          question: 'How was Dionysus born the second time?',
          options: [
            {
              id: 'A',
              text: 'Zeus sewed the unborn child into his own thigh',
            },
            {
              id: 'B',
              text: 'Hera hid him inside a grapevine',
            },
            {
              id: 'C',
              text: 'Semele carried him to term while hiding among mortals',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — Zeus saved the child by sewing him into his thigh.',
            detail:
              'Semele was already dead. The second birth makes Dionysus a god who had passed through death before he ever entered the world.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Zeus sewed the unborn child into his own thigh.',
            why: 'Semele could not endure the radiance of Zeus and perished. Only the father could save the son — and Dionysus was born again as a god.',
          },
          difficulty_rationale:
            'The card’s main plot: the double birth. The player already knows Dionysus from the Four Worlds and sees him on the card.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did Semele die?',
          options: [
            {
              id: 'A',
              text: 'She refused the gift of wine — and madness found her',
            },
            {
              id: 'B',
              text: 'Hera tricked her into asking to see Zeus in his full glory',
            },
            {
              id: 'C',
              text: 'Zeus punished her for lying with a mortal',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it was jealous Hera’s trap.',
            detail:
              'Hera did not strike herself: she made a mortal ask for the impossible. Madness for refusing Dionysus is another part of his story, not why his mother died.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Hera tricked Semele into seeing Zeus in his full divine glory.',
            why: 'Semele could not endure the radiance. Those who refuse Dionysus himself are also punished with madness — but that comes later, for those who meet him.',
          },
          difficulty_rationale:
            'Needs the causal chain: Hera’s jealousy → Semele’s request → death → the child’s rescue. Easy to confuse with punishment for refusing Dionysus.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does Dionysus not tolerate?',
          options: [
            { id: 'A', text: 'Forgetting' },
            { id: 'B', text: 'Silence' },
            { id: 'C', text: 'Denial' },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he does not tolerate denial.',
            detail:
              'His gift is double: joy and release — or chaos and ruin. Accept him or be broken. The card leaves no middle ground.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — denial.',
            why: 'Dionysus must be accepted, or his force will break you. The card does not assign him forgetting or silence — only refusal.',
          },
          difficulty_rationale:
            'A judgment about the god’s nature, not a plot fact. Easy to remember wine and the second birth and miss the formula “does not tolerate denial.”',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Дионис',
      questions: [
        {
          level: 'Story',
          question: 'Как Дионис появился на свет во второй раз?',
          options: [
            {
              id: 'A',
              text: 'Зевс зашил ещё не рождённого ребёнка себе в бедро',
            },
            {
              id: 'B',
              text: 'Гера укрыла его внутри виноградной лозы',
            },
            {
              id: 'C',
              text: 'Семела доносила его, скрываясь среди смертных',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — Зевс спас ребёнка, зашив его в своё бедро.',
            detail:
              'Семела к тому моменту уже погибла. Второе рождение делает Диониса богом, прошедшим через смерть ещё до появления на свет.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Зевс зашил нерождённого ребёнка себе в бедро.',
            why: 'Семела не выдержала сияния Зевса и погибла. Спасти сына смог только отец — и Дионис родился второй раз уже как божество.',
          },
          difficulty_rationale:
            'Главный сюжет карты: двойное рождение. Имя Диониса игрок уже знает из Четырёх миров и видит на карте.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему Семела погибла?',
          options: [
            {
              id: 'A',
              text: 'Она отвергла дар вина — и её настигло безумие',
            },
            {
              id: 'B',
              text: 'Гера обманом велела ей увидеть Зевса во всей красе',
            },
            {
              id: 'C',
              text: 'Зевс покарал её за связь со смертным',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это была ловушка ревнивой Геры.',
            detail:
              'Гера не ударила сама: она заставила смертную попросить невозможного. Безумие за отказ от Диониса — другая часть его истории, не причина гибели матери.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Гера обманом заставила Семелу увидеть Зевса во всей божественной красе.',
            why: 'Семела не выдержала сияния. Отвергнувших самого Диониса карта тоже карает безумием — но это уже про тех, кто встретил его позже.',
          },
          difficulty_rationale:
            'Нужна причинная цепочка: ревность Геры → просьба Семелы → гибель → спасение ребёнка. Легко спутать с карой за отказ от Диониса.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чего Дионис не терпит?',
          options: [
            { id: 'A', text: 'Забвения' },
            { id: 'B', text: 'Молчания' },
            { id: 'C', text: 'Отрицания' },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он не терпит отрицания.',
            detail:
              'Его дар двойственен: радость и освобождение — или хаос и гибель. Принять его или быть сломленным. Середины карта не оставляет.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — отрицания.',
            why: 'Диониса нужно либо принять, либо быть сломленным его силой. Забвение и молчание карта ему не приписывает — только отказ.',
          },
          difficulty_rationale:
            'Вывод о характере бога, а не факт из завязки. Легко запомнить вино и второе рождение и пропустить формулу «не терпит отрицания».',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Дыяніс',
      questions: [
        {
          level: 'Story',
          question: 'Як Дыяніс з’явіўся на свет другі раз?',
          options: [
            {
              id: 'A',
              text: 'Зеўс зашыў яшчэ ненароджанае дзіця сабе ў сцягно',
            },
            {
              id: 'B',
              text: 'Гера ўкрыла яго ўнутры вінаграднай лазы',
            },
            {
              id: 'C',
              text: 'Семела данасіла яго, хаваючыся сярод смяротных',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — Зеўс выратаваў дзіця, зашыўшы яго ў сваё сцягно.',
            detail:
              'Семела да таго моманту ўжо загінула. Другое нараджэнне робіць Дыяніса богам, што прайшоў праз смерць яшчэ да з’яўлення на свет.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Зеўс зашыў ненароджанае дзіця сабе ў сцягно.',
            why: 'Семела не вытрымала ззяння Зеўса і загінула. Выратаваць сына змог толькі бацька — і Дыяніс нарадзіўся другі раз ужо як боства.',
          },
          difficulty_rationale:
            'Галоўны сюжэт карты: падвойнае нараджэнне. Імя Дыяніса гулец ужо ведае з Чатырох светаў і бачыць на карце.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму Семела загінула?',
          options: [
            {
              id: 'A',
              text: 'Яна адвергла дар віна — і яе нагнала вар’яцтва',
            },
            {
              id: 'B',
              text: 'Гера падманам загадала ёй убачыць Зеўса ва ўсёй красе',
            },
            {
              id: 'C',
              text: 'Зеўс пакараў яе за сувязь са смяротным',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта была пастка раўнівай Геры.',
            detail:
              'Гера не ўдарыла сама: яна прымусіла смяротную папрасіць немагчымага. Вар’яцтва за адмову ад Дыяніса — іншая частка яго гісторыі, не прычына гібелі маці.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Гера падманам прымусіла Семелу ўбачыць Зеўса ва ўсёй боскай красе.',
            why: 'Семела не вытрымала ззяння. Адвергнутых самога Дыяніса карта таксама карае вар’яцтвам — але гэта ўжо пра тых, хто сустрэў яго пазней.',
          },
          difficulty_rationale:
            'Патрэбны прычынны ланцужок: рэўнасць Геры → просьба Семелы → гібель → выратаванне дзіцяці. Лёгка зблытаць з карай за адмову ад Дыяніса.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чаго Дыяніс не церпіць?',
          options: [
            { id: 'A', text: 'Забыцця' },
            { id: 'B', text: 'Маўчання' },
            { id: 'C', text: 'Адмаўлення' },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён не церпіць адмаўлення.',
            detail:
              'Яго дар двайны: радасць і вызваленне — або хаос і гібель. Прыняць яго або быць зламаным. Сярэдзіны карта не пакідае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — адмаўлення.',
            why: 'Дыяніса трэба альбо прыняць, альбо быць зламаным яго сілай. Забыццё і маўчанне карта яму не прыпісвае — толькі адмову.',
          },
          difficulty_rationale:
            'Выснова пра характар бога, а не факт з завязкі. Лёгка запомніць віно і другое нараджэнне і прапусціць формулу «не церпіць адмаўлення».',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '狄俄尼索斯',
      questions: [
        {
          level: 'Story',
          question: '狄俄尼索斯第二次如何出生？',
          options: [
            {
              id: 'A',
              text: '宙斯把尚未出生的孩子缝进自己的大腿',
            },
            {
              id: 'B',
              text: '赫拉把他藏进葡萄藤里',
            },
            {
              id: 'C',
              text: '塞墨勒藏在凡人之中把他怀足月',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 宙斯把孩子缝进大腿才救下他。',
            detail:
              '塞墨勒那时已死。第二次出生使狄俄尼索斯成为在进入世界之前就已穿过死亡的神。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 宙斯把尚未出生的孩子缝进自己的大腿。',
            why: '塞墨勒承受不住宙斯的光辉而死。唯有父亲能救儿子——狄俄尼索斯第二次出生时已是神。',
          },
          difficulty_rationale:
            '卡的主情节：双重出生。玩家已从四世界认识狄俄尼索斯，并在卡上见到他。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '塞墨勒为何而死？',
          options: [
            {
              id: 'A',
              text: '她拒绝酒的礼物——疯狂追上了她',
            },
            {
              id: 'B',
              text: '赫拉骗她去看宙斯的全然荣光',
            },
            {
              id: 'C',
              text: '宙斯因她与凡人交合而惩罚她',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 那是嫉妒的赫拉设下的陷阱。',
            detail:
              '赫拉并未亲自下手：她让凡人去求不可能之事。拒绝狄俄尼索斯而致疯是他故事的另一部分，不是母亲之死的原因。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 赫拉骗塞墨勒去看宙斯全然的神性荣光。',
            why: '塞墨勒承受不住光辉。拒绝狄俄尼索斯本人者卡也以疯狂惩罚——但那属于后来遇见他的人。',
          },
          difficulty_rationale:
            '需要因果链：赫拉的嫉妒→塞墨勒的请求→死亡→救孩子。容易与拒绝狄俄尼索斯的惩罚混淆。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '狄俄尼索斯不容忍什么？',
          options: [
            { id: 'A', text: '遗忘' },
            { id: 'B', text: '沉默' },
            { id: 'C', text: '否认' },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他不容忍否认。',
            detail:
              '他的礼物是双重的：欢乐与释放——或混沌与毁灭。接受他，或被击碎。卡不留中间地带。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 否认。',
            why: '必须接受狄俄尼索斯，否则其力将击碎你。卡不把遗忘或沉默归于他——只有拒绝。',
          },
          difficulty_rationale:
            '关于神性的判断，不是情节事实。容易记住酒与第二次出生，而错过“不容忍否认”的公式。',
          needs_review: false,
        },
      ],
    },
  },
};
