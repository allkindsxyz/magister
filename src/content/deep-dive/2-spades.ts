import type { DeepDiveCard } from './types';

export const twoSpades: DeepDiveCard = {
  card_id: '2-spades',
  locales: {
    en: {
      card_title: 'School of the Mantis',
      questions: [
        {
          level: 'Story',
          question: 'What became the foundation of his further path in combat?',
          options: [
            {
              id: 'A',
              text: 'The Wing Chun style, mastered under Ip Man',
            },
            {
              id: 'B',
              text: 'Film shoots, where he first learned to fight',
            },
            {
              id: 'C',
              text: 'Jeet Kune Do, which he inherited as a finished style',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — Wing Chun under Ip Man gave him the base.',
            detail:
              'Born in San Francisco, raised in Hong Kong. His own philosophy — Jeet Kune Do — came later, when he sought to break past tradition, not as something ready-made he received.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Wing Chun, which he mastered under Ip Man.',
            why: 'Films brought fame, not a school. He did not inherit Jeet Kune Do: it is his rejection of rigid forms, built already on Wing Chun.',
          },
          difficulty_rationale:
            'Two style names stand side by side. Easy to take the later teaching for the start of the path.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the card set a man beside a mantis?',
          options: [
            {
              id: 'A',
              text: 'The mantis here is ambush: the master wins by stealth',
            },
            {
              id: 'B',
              text: 'It is a pair of perfection: who owns the same stance better',
            },
            {
              id: 'C',
              text: 'The mantis is an image of cruelty he taught his students',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the pair asks who took the stance to its limit: insect or man.',
            detail:
              'The card warns that what follows are people who reached perfection in their craft. He has and had no equal in the martial arts.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a mirroring pair: mantis and man who refined the movement to perfection.',
            why: 'Not about ambush, not about cruelty. The card’s question: who owns the stance better — the insect itself, or the one who polished it to the end.',
          },
          difficulty_rationale:
            'A link of title + summary. The insect is easy to read as predator, not as a standard of form.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where, according to the card, does true mastery lie?',
          options: [
            {
              id: 'A',
              text: 'In exact imitation of the insect’s stance',
            },
            {
              id: 'B',
              text: 'In following one style for a lifetime',
            },
            {
              id: 'C',
              text: 'In the ability to adapt — to “be water”',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — mastery is to “be water,” not to hold a form.',
            detail:
              'The title tempts a school of copying the mantis. His philosophy is flexibility, efficiency, and rejection of rigid forms.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — true mastery is the capacity to adapt, to “be water.”',
            why: '“School of the Mantis” sounds like copying an insect. The card says the opposite: not to follow a style, but to take the shape of circumstance.',
          },
          difficulty_rationale:
            'A title trap, like Einstein’s turtle. The insect stance is bait; the thesis is refusal of rigid form.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Школа богомола',
      questions: [
        {
          level: 'Story',
          question: 'Что стало основой его дальнейшего пути в бою?',
          options: [
            {
              id: 'A',
              text: 'Стиль вин-чун, освоенный у мастера Ип Мана',
            },
            {
              id: 'B',
              text: 'Съёмки фильмов, с которых он начал учиться драться',
            },
            {
              id: 'C',
              text: 'Джит кун-до, который он унаследовал как готовый стиль',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — основу дал вин-чун у Ип Мана.',
            detail:
              'Родился он в Сан-Франциско, вырос в Гонконге. Собственную философию — джит кун-до — создал позже, уже стремясь выйти за рамки традиций, а не получить её готовой.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — вин-чун, который он освоил у Ип Мана.',
            why: 'Фильмы принесли славу, не школу. Джит кун-до он не унаследовал: это его отказ от жёстких форм, построенный уже на вин-чун.',
          },
          difficulty_rationale:
            'Два имени стиля стоят рядом. Легко принять позднее учение за начало пути.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Зачем карта ставит рядом человека и богомола?',
          options: [
            {
              id: 'A',
              text: 'Богомол здесь про засаду: мастер побеждает скрытностью',
            },
            {
              id: 'B',
              text: 'Это двоица совершенства: кто лучше владеет той же позой',
            },
            {
              id: 'C',
              text: 'Богомол — образ жестокости, которой он учил учеников',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — пара спрашивает, кто довёл позу до предела: насекомое или человек.',
            detail:
              'Карта предупреждает, что дальше пойдут люди, достигшие совершенства в мастерстве. Ему не было и нет равных в боевых искусствах.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — это зеркальная двоица: богомол и человек, довёдший движение до совершенства.',
            why: 'Речь не про засаду и не про жестокость. Вопрос карты: кто лучше владеет позой — само насекомое или тот, кто отшлифовал её до конца.',
          },
          difficulty_rationale:
            'Связка title + summary. Насекомое легко прочитать как хищника, а не как эталон формы.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'В чём, по карте, истинное мастерство?',
          options: [
            {
              id: 'A',
              text: 'В точном повторении позы насекомого',
            },
            {
              id: 'B',
              text: 'В следовании одному стилю до конца жизни',
            },
            {
              id: 'C',
              text: 'В умении адаптироваться — «быть водой»',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — мастерство в том, чтобы «быть водой», а не держать форму.',
            detail:
              'Название провоцирует школу подражания богомолу. Его философия — гибкость, эффективность и отказ от жёстких форм.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — истинное мастерство в способности адаптироваться, «быть водой».',
            why: '«Школа богомола» звучит как копирование насекомого. Карта говорит обратное: не следовать стилю, а принимать форму обстоятельств.',
          },
          difficulty_rationale:
            'Ловушка названия, как черепаха у Эйнштейна. Поза насекомого — приманка; тезис — отказ от жёсткой формы.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Школа багамола',
      questions: [
        {
          level: 'Story',
          question: 'Што стала асновай яго далейшага шляху ў баі?',
          options: [
            {
              id: 'A',
              text: 'Стыль він-чун, асвоены ў майстра Іп Мана',
            },
            {
              id: 'B',
              text: 'Здымкі фільмаў, з якіх ён пачаў вучыцца біцца',
            },
            {
              id: 'C',
              text: 'Джыт кун-до, які ён успадкаваў як гатовы стыль',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — аснову даў він-чун у Іп Мана.',
            detail:
              'Нарадзіўся ён у Сан-Францыска, вырас у Ганконгу. Уласную філасофію — джыт кун-до — стварыў пазней, ужо імкнучыся выйсці за рамкі традыцый, а не атрымаць яе гатовай.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — він-чун, які ён асвоіў у Іп Мана.',
            why: 'Фільмы прынеслі славу, не школу. Джыт кун-до ён не ўспадкаваў: гэта яго адмова ад жорсткіх форм, пабудаваная ўжо на він-чун.',
          },
          difficulty_rationale:
            'Два імёны стылю стаяць побач. Лёгка прыняць пазнейшае вучэнне за пачатак шляху.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Навошта карта ставіць побач чалавека і багамола?',
          options: [
            {
              id: 'A',
              text: 'Багамол тут пра засаду: майстар перамагае схаванасцю',
            },
            {
              id: 'B',
              text: 'Гэта двайца дасканаласці: хто лепш валодае той жа позай',
            },
            {
              id: 'C',
              text: 'Багамол — вобраз жорсткасці, якой ён вучыў вучняў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пара пытаецца, хто давёў позу да мяжы: казурка ці чалавек.',
            detail:
              'Карта папярэджвае, што далей пойдуць людзі, якія дасягнулі дасканаласці ў майстэрстве. Яму не было і няма роўных у баявых мастацтвах.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — гэта люстраная двайца: багамол і чалавек, які давёў рух да дасканаласці.',
            why: 'Гаворка не пра засаду і не пра жорсткасць. Пытанне карты: хто лепш валодае позай — сама казурка ці той, хто адшліфаваў яе да канца.',
          },
          difficulty_rationale:
            'Звязка title + summary. Казурку лёгка прачытаць як драпежніка, а не як эталон формы.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'У чым, паводле карты, сапраўднае майстэрства?',
          options: [
            {
              id: 'A',
              text: 'У дакладным паўтарэнні позы казуркі',
            },
            {
              id: 'B',
              text: 'У следванні аднаму стылю да канца жыцця',
            },
            {
              id: 'C',
              text: 'У ўменні адаптавацца — «быць вадой»',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — майстэрства ў тым, каб «быць вадой», а не трымаць форму.',
            detail:
              'Назва правакуе школу пераймання багамола. Яго філасофія — гібкасць, эфектыўнасць і адмова ад жорсткіх форм.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — сапраўднае майстэрства ў здольнасці адаптавацца, «быць вадой».',
            why: '«Школа багамола» гучыць як капіраванне казуркі. Карта кажа адваротнае: не ісці за стылем, а прымаць форму абставін.',
          },
          difficulty_rationale:
            'Пастка назвы, як чарапаха ў Эйнштэйна. Поза казуркі — прынада; тэзіс — адмова ад жорсткай формы.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '螳螂学派',
      questions: [
        {
          level: 'Story',
          question: '什么成了他此后战斗之路的根基？',
          options: [
            {
              id: 'A',
              text: '在叶问门下掌握的咏春',
            },
            {
              id: 'B',
              text: '片场拍摄——他从那里才开始学打',
            },
            {
              id: 'C',
              text: '截拳道——他当作现成流派继承下来',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 叶问门下的咏春给了他根基。',
            detail:
              '生于旧金山，长于香港。他自己的哲学——截拳道——来得更晚，是他要突破传统之际，而非现成得来。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 咏春，他在叶问门下掌握。',
            why: '电影带来名声，不是学派。截拳道并非继承：那是他在咏春之上对僵硬形式的拒绝。',
          },
          difficulty_rationale:
            '两个流派名并列。容易把后来的学说当成起点。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片为何把人与螳螂并置？',
          options: [
            {
              id: 'A',
              text: '螳螂在此是伏击：大师靠隐匿取胜',
            },
            {
              id: 'B',
              text: '这是一对极致：谁把同一姿态掌握得更好',
            },
            {
              id: 'C',
              text: '螳螂是他传授给学生的残忍意象',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 这一对在问：谁把姿态推到极限——虫，还是人。',
            detail:
              '卡片预告：后面将是在技艺上臻于极致的人。在武术上，他过去与现在皆无匹敌。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 镜像的一对：螳螂与把动作打磨到极致的人。',
            why: '无关伏击，无关残忍。卡片之问：谁更掌控这姿态——虫本身，还是把它磨到尽头的人。',
          },
          difficulty_rationale:
            '串联 title + summary。昆虫易被读成掠食者，而非形式的标尺。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '依卡片，真正的精通在何处？',
          options: [
            {
              id: 'A',
              text: '在精确模仿昆虫的姿态',
            },
            {
              id: 'B',
              text: '在终身追随一个流派',
            },
            {
              id: 'C',
              text: '在适应的能力——「如水」',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 精通是「如水」，而非守住一种形式。',
            detail:
              '标题诱导向模仿螳螂的学派。他的哲学是灵活、高效，以及拒绝僵硬形式。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 真正的精通是适应的能力，是「如水」。',
            why: '「螳螂学派」听来像复制昆虫。卡片说的正相反：不是追随流派，而是随境成形。',
          },
          difficulty_rationale:
            '标题陷阱，如爱因斯坦的乌龟。昆虫姿态是诱饵；论点是拒绝僵硬形式。',
          needs_review: false,
        },
      ],
    },
  },
};
