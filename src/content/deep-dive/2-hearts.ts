import type { DeepDiveCard } from './types';

export const twoHearts: DeepDiveCard = {
  card_id: '2-hearts',
  locales: {
    en: {
      card_title: 'Sirens',
      questions: [
        {
          level: 'Story',
          question: 'How did Odysseus hear the song and not perish?',
          options: [
            {
              id: 'A',
              text: 'He plugged his own ears with wax and left his crew to listen',
            },
            {
              id: 'B',
              text: 'He ordered his crew to plug their ears with wax and himself to be bound to the mast',
            },
            {
              id: 'C',
              text: 'The Muses drowned out the Sirens with wreaths of their feathers',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — wax for the crew, himself to the mast: to hear and not go onto the rocks.',
            detail:
              'On a sorceress’s advice. Sailors who heard the song lost their will and died by the shore with their ships. He alone is given this outcome on the card.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — wax in the crew’s ears, himself bound to the mast.',
            why: 'He listened; the crew did not. The contest with the Muses is another episode: feathers became wreaths, but that did not save Odysseus.',
          },
          difficulty_rationale:
            'The main plot move. Easy to confuse who listened, and to slot in the Muses from the same card.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Where did the Sirens get their wings?',
          options: [
            {
              id: 'A',
              text: 'Hera rewarded them after the contest with the Muses',
            },
            {
              id: 'B',
              text: 'Either to search the world for Persephone, or as punishment for failing to protect her',
            },
            {
              id: 'C',
              text: 'So they could fly from the island once Odysseus had passed',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — wings after Persephone’s abduction: search or penalty.',
            detail:
              'The card holds both versions and chooses neither. Since then they stand at the border of sea and land. Temptation here is knowledge that lures and can destroy.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — the wings were given after Persephone’s abduction: to seek her, or as punishment.',
            why: 'The Muses plucked the wings after the Sirens lost — they did not grant them. Escape after Odysseus is not on the card: legend says death awaited them.',
          },
          difficulty_rationale:
            'The cause of the wings sits at the start and is easy to swap for something brighter: Muses, Hera, Odysseus.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question:
            'What, by tradition, was to happen once Odysseus sailed past untempted?',
          options: [
            {
              id: 'A',
              text: 'The Sirens were to die',
            },
            {
              id: 'B',
              text: 'They moved from Anthemoessa to another island',
            },
            {
              id: 'C',
              text: 'The Muses returned their feathers',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — they were to die.',
            detail:
              'The card corrects itself: not “dwell” on Anthemoessa, but “dwelt.” The condition of death is Odysseus untempted. The song that always won here fails for the first time.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the Sirens were to die.',
            why: 'The island is where they lived until then. The Muses had already taken the feathers, in the contest. The outcome is tied to temptation failing.',
          },
          difficulty_rationale:
            'The card itself traps you on “dwell”: the correction to “dwelt” and the condition of death are easy to miss behind the song and Odysseus.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Сирены',
      questions: [
        {
          level: 'Story',
          question: 'Как Одиссей услышал песню и не погиб?',
          options: [
            {
              id: 'A',
              text: 'Заткнул себе уши воском, а спутников оставил слушать',
            },
            {
              id: 'B',
              text: 'Велел спутникам заткнуть уши воском, а себя привязать к мачте',
            },
            {
              id: 'C',
              text: 'Музы заглушили сирен венками из их перьев',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — воск спутникам, себя к мачте: услышать и не пойти на скалы.',
            detail:
              'По совету волшебницы. Моряки, услышав песню, теряли волю и гибли у берега вместе с кораблями. Он единственный, кому карта даёт этот исход.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — спутникам воск в уши, себя привязать к мачте.',
            why: 'Слушал он, не команда. Состязание с музами — другой эпизод: перья стали венками, но Одиссея это не спасало.',
          },
          difficulty_rationale:
            'Главный сюжетный ход. Легко перепутать, кто именно слушал, и подставить муз из той же карты.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Откуда у сирен крылья?',
          options: [
            {
              id: 'A',
              text: 'Гера наградила их после состязания с музами',
            },
            {
              id: 'B',
              text: 'Либо искать Персефону по миру, либо в наказание, что не защитили её',
            },
            {
              id: 'C',
              text: 'Чтобы улететь с острова, когда Одиссей прошёл мимо',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — крылья после похищения Персефоны: поиск или кара.',
            detail:
              'Карта держит обе версии и не выбирает. С тех пор они на границе моря и земли. Искушение здесь — знание, которое манит и может погубить.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — крылья дали после похищения Персефоны: искать её или как наказание.',
            why: 'Музы как раз ощипали крылья после проигрыша, не даровали их. Бегство после Одиссея карта не описывает: по преданию их ждала гибель.',
          },
          difficulty_rationale:
            'Причина крыльев стоит в начале и её легко сменить на более яркое: музы, Гера, Одиссей.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что, по преданию, должно было случиться, когда Одиссей проплыл мимо, не поддавшись?',
          options: [
            {
              id: 'A',
              text: 'Сирены должны были погибнуть',
            },
            {
              id: 'B',
              text: 'Они переселились с Анфемоэссы на другой остров',
            },
            {
              id: 'C',
              text: 'Музы вернули им перья',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — они должны были погибнуть.',
            detail:
              'Карта поправляет себя: не «обитают» на Анфемоэссе, а «обитали». Условие гибели — не поддавшийся Одиссей. Песня, которая всегда побеждала, здесь впервые не берёт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — сирены должны были погибнуть.',
            why: 'Остров — место, где они жили до этого. Перья музы уже забрали раньше, в состязании. Исход привязан к тому, что искушение не сработало.',
          },
          difficulty_rationale:
            'Карта сама ловит на «обитают»: поправка на «обитали» и условие гибели легко пропустить за песней и Одиссеем.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Сірэны',
      questions: [
        {
          level: 'Story',
          question: 'Як Адысей пачуў песню і не загінуў?',
          options: [
            {
              id: 'A',
              text: 'Заткаў сабе вушы воскам, а спадарожнікаў пакінуў слухаць',
            },
            {
              id: 'B',
              text: 'Вялеў спадарожнікам заткнуць вушы воскам, а сябе прывязаць да мачты',
            },
            {
              id: 'C',
              text: 'Музы заглушылі сірэн вянкамі з іх пер’яў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — воск спадарожнікам, сябе да мачты: пачуць і не пайсці на скалы.',
            detail:
              'Па радзе чараўніцы. Маракі, пачуўшы песню, гублялі волю і гінулі ля берага разам з караблямі. Ён адзіны, каму карта дае гэты зыход.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — спадарожнікам воск у вушы, сябе прывязаць да мачты.',
            why: 'Слухаў ён, не каманда. Спаборніцтва з музамі — іншы эпізод: пер’е стала вянкамі, але Адысея гэта не ратавала.',
          },
          difficulty_rationale:
            'Галоўны сюжэтны ход. Лёгка пераблытаць, хто менавіта слухаў, і падставіць муз з той жа карты.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Адкуль у сірэн крылы?',
          options: [
            {
              id: 'A',
              text: 'Гера ўзнагародзіла іх пасля спаборніцтва з музамі',
            },
            {
              id: 'B',
              text: 'Альбо шукаць Персефону па свеце, альбо ў пакаранне, што не абаранілі яе',
            },
            {
              id: 'C',
              text: 'Каб уляцець з вострава, калі Адысей прайшоў міма',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — крылы пасля выкрадання Персефоны: пошук або кара.',
            detail:
              'Карта трымае абедзве версіі і не выбірае. З таго часу яны на мяжы мора і зямлі. Спакуса тут — веданне, якое вабіць і можа загубіць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — крылы далі пасля выкрадання Персефоны: шукаць яе або як пакаранне.',
            why: 'Музы якраз абскублі крылы пасля паразы, не даравалі іх. Уцёкаў пасля Адысея карта не апісвае: паводле падання іх чакала гібель.',
          },
          difficulty_rationale:
            'Прычына крылаў стаіць на пачатку і яе лёгка змяніць на больш яркае: музы, Гера, Адысей.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што, паводле падання, мусіла здарыцца, калі Адысей праплыў міма, не паддаўшыся?',
          options: [
            {
              id: 'A',
              text: 'Сірэны мусілі загінуць',
            },
            {
              id: 'B',
              text: 'Яны перасяліліся з Анфемаэсы на іншы востраў',
            },
            {
              id: 'C',
              text: 'Музы вярнулі ім пер’е',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яны мусілі загінуць.',
            detail:
              'Карта папраўляе сябе: не «насяляюць» Анфемаэсу, а «насялялі». Умова гібелі — не паддаўшыся Адысей. Песня, якая заўжды перамагала, тут упершыню не бярэ.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — сірэны мусілі загінуць.',
            why: 'Востраў — месца, дзе яны жылі да таго. Пер’е музы ўжо забралі раней, у спаборніцтве. Зыход прывязаны да таго, што спакуса не спрацавала.',
          },
          difficulty_rationale:
            'Карта сама ловіць на «насяляюць»: папраўку на «насялялі» і ўмову гібелі лёгка прапусціць за песняй і Адысеем.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '塞壬',
      questions: [
        {
          level: 'Story',
          question: '奥德修斯如何听见歌声而不丧命？',
          options: [
            {
              id: 'A',
              text: '自己用蜡塞耳，却让同伴去听',
            },
            {
              id: 'B',
              text: '命同伴用蜡塞耳，把自己绑在桅杆上',
            },
            {
              id: 'C',
              text: '缪斯用塞壬的羽毛编成花环，盖过她们的歌声',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 同伴塞蜡，自己绑桅：既听见，又不撞上礁石。',
            detail:
              '依女术士之策。听见歌声的水手会失去意志，与船一同死在岸边。卡上唯独给他这一结局。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 同伴耳中塞蜡，自己绑在桅杆上。',
            why: '听的是他，不是船员。与缪斯的竞赛是另一段：羽毛成了花环，却救不了奥德修斯。',
          },
          difficulty_rationale:
            '主情节。容易搞错谁在听，并把同卡上的缪斯塞进来。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '塞壬的翅膀从何而来？',
          options: [
            {
              id: 'A',
              text: '赫拉在她们与缪斯竞赛后予以奖赏',
            },
            {
              id: 'B',
              text: '或为在世间寻找珀耳塞福涅，或因未能护她而受罚',
            },
            {
              id: 'C',
              text: '好在奥德修斯驶过之后飞离岛屿',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 珀耳塞福涅被劫之后才有翅膀：寻人或惩罚。',
            detail:
              '卡保留两种说法，并不择一。自此她们立于海陆之界。诱惑在此是引诱人、也能毁人的知识。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 翅膀得于珀耳塞福涅被劫之后：去寻她，或作为惩罚。',
            why: '缪斯是在塞壬落败后拔去翅膀，并非赐予。卡也未写奥德修斯过后她们逃走：传说里等待她们的是死亡。',
          },
          difficulty_rationale:
            '翅膀的缘由写在开头，容易被更耀眼的缪斯、赫拉、奥德修斯替换。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '按传统，奥德修斯未受诱惑驶过之后，会发生什么？',
          options: [
            {
              id: 'A',
              text: '塞壬当死',
            },
            {
              id: 'B',
              text: '她们从安瑟摩厄萨迁往另一岛',
            },
            {
              id: 'C',
              text: '缪斯归还她们的羽毛',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 她们当死。',
            detail:
              '卡自我修正：不是“居于”安瑟摩厄萨，而是“曾居于”。死亡的条件是奥德修斯未被诱惑。一向必胜的歌声，在此首次落空。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 塞壬当死。',
            why: '岛是她们此前的居所。羽毛早已在竞赛中被缪斯取走。结局系于诱惑失效。',
          },
          difficulty_rationale:
            '卡本身用“居于”设陷阱：“曾居于”的修正与死亡条件，容易被歌声与奥德修斯盖过。',
          needs_review: false,
        },
      ],
    },
  },
};
