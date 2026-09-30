import type { DeepDiveCard } from './types';

export const fiveHearts: DeepDiveCard = {
  card_id: '5-hearts',
  locales: {
    en: {
      card_title: 'Dryads',
      questions: [
        {
          level: 'Story',
          question: 'What happens to a dryad if her tree dies?',
          options: [
            {
              id: 'A',
              text: 'She dies with it',
            },
            {
              id: 'B',
              text: 'She moves into a neighbouring tree',
            },
            {
              id: 'C',
              text: 'She remains in the grove as an invisible soul without a tree',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the nymph lives as long as the tree, and dies with it.',
            detail:
              'Each tree has its dryad. They are among the few mortal nymphs. Relocation is not in the card’s main version.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the dryad dies with the tree.',
            why: 'The main version: inseparable from her tree. Not a neighbouring trunk, not a grove-soul without a body. Hence the weight of felling.',
          },
          difficulty_rationale:
            'The card’s central fact. Nymphs’ class immortality tempts you to find her a spare home.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why could felling be counted not as spoiling the forest, but as murder?',
          options: [
            {
              id: 'A',
              text: 'Dryads constantly intervene in human affairs and take open revenge',
            },
            {
              id: 'B',
              text: 'The forest is a living space of invisible beings; the nymph is bound to the tree',
            },
            {
              id: 'C',
              text: 'They appear in their own form to everyone who enters the grove',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — to fell a tree is to kill the nymph bound to it.',
            detail:
              'Dryads rarely intervene and almost never show their true form. Their will still rules a meeting in the woods: danger, calm, wonder, or losing the way.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the forest is full of invisible beings, and the tree’s death is the nymph’s.',
            why: 'The card stresses concealment, not open revenge. The true form is almost never shown. Murder follows from the bond, not theatre at the grove’s door.',
          },
          difficulty_rationale:
            'The reason for the taboo on felling. Rage and appearance of form sit nearby in the text and easily become “the main point.”',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does another version on this same card say?',
          options: [
            {
              id: 'A',
              text: 'Dryads are immortal, like the Olympians',
            },
            {
              id: 'B',
              text: 'A dryad lives only in one sacred grove',
            },
            {
              id: 'C',
              text: 'They are guardian spirits: they do not exist in the tree, but care for it',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — in another version they tend the tree without dwelling inside it.',
            detail:
              'The main line: breath is sap, body is trunk and branches, voice is the rustle. The second softens the identity. Both stay on the card; immortality is in neither.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — guardian spirits who do not exist in the tree, but care for it.',
            why: 'The card does not lift the nymph’s mortality. “Each tree — its dryad,” not one grove. Only the place of dwelling disputes the main version.',
          },
          difficulty_rationale:
            'The correction at the end is easy to miss. Whoever remembered “dies with the tree” does not expect a version without dwelling inside.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Дриады',
      questions: [
        {
          level: 'Story',
          question: 'Что происходит с дриадой, если гибнет её дерево?',
          options: [
            {
              id: 'A',
              text: 'Она умирает вместе с ним',
            },
            {
              id: 'B',
              text: 'Она переселяется в соседнее дерево',
            },
            {
              id: 'C',
              text: 'Она остаётся в роще как невидимая душа без дерева',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — нимфа живёт столько же, сколько дерево, и гибнет вместе с ним.',
            detail:
              'У каждого дерева — своя дриада. Они среди немногих смертных нимф. Переселения карта в основной версии не даёт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — дриада умирает вместе с деревом.',
            why: 'Основная версия: неотделима от своего дерева. Не соседний ствол и не душа рощи без тела. Отсюда и тяжесть порубки.',
          },
          difficulty_rationale:
            'Главный факт карты. Бессмертие нимф как класс провоцирует искать ей запасной дом.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему вырубка могла считаться не порчей леса, а убийством?',
          options: [
            {
              id: 'A',
              text: 'Дриады постоянно вмешиваются в дела людей и мстят открыто',
            },
            {
              id: 'B',
              text: 'Лес — живое пространство невидимых существ; нимфа связана с деревом',
            },
            {
              id: 'C',
              text: 'Они являются в своём облике каждому, кто вошёл в рощу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — срубить дерево значит убить связанную с ним нимфу.',
            detail:
              'Дриады редко вмешиваются и почти никогда не являются в исконном облике. Воля их всё же правит встречей в лесу: опасность, покой, чудо или потеря пути.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — лес полон невидимых существ, и гибель дерева есть гибель нимфы.',
            why: 'Карта подчёркивает скрытость, не явную месть. Исконный облик почти не показывают. Убийство — следствие связи, не театра у двери рощи.',
          },
          difficulty_rationale:
            'Причина табу на порубку. Ярость и явление облика стоят рядом в тексте и легко становятся «главным».',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что говорит другая версия этой же карты?',
          options: [
            {
              id: 'A',
              text: 'Дриады бессмертны, как олимпийцы',
            },
            {
              id: 'B',
              text: 'Дриада живёт только в одной священной роще',
            },
            {
              id: 'C',
              text: 'Они духи-опекуны: не существуют в дереве, а заботятся о нём',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — по другой версии они опекают дерево, не обитая внутри.',
            detail:
              'Основная линия: дыхание — сок, тело — ствол и ветви, голос — шелест. Вторая ослабляет тождество. Обе остаются внутри карты; бессмертия нет ни в одной.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — духи-опекуны, которые не существуют в дереве, а заботятся о нём.',
            why: 'Смертность нимфы карта не снимает. «Каждое дерево — своя дриада», не одна роща. Спорит с основной версией только место обитания.',
          },
          difficulty_rationale:
            'Поправка в конце легко пропустить. Кто запомнил «умирает вместе с деревом», не ждёт версии без обитания внутри.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Дрыяды',
      questions: [
        {
          level: 'Story',
          question: 'Што адбываецца з дрыядай, калі гіне яе дрэва?',
          options: [
            {
              id: 'A',
              text: 'Яна памірае разам з ім',
            },
            {
              id: 'B',
              text: 'Яна перасяляецца ў суседняе дрэва',
            },
            {
              id: 'C',
              text: 'Яна застаецца ў рошчы як нябачная душа без дрэва',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — німфа жыве столькі ж, колькі дрэва, і гіне разам з ім.',
            detail:
              'У кожнага дрэва — свая дрыяда. Яны сярод нямногіх смяротных німфаў. Перасялення карта ў асноўнай версіі не дае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — дрыяда памірае разам з дрэвам.',
            why: 'Асноўная версія: неаддзельная ад свайго дрэва. Не суседні ствол і не душа рошчы без цела. Адсюль і цяжар парубкі.',
          },
          difficulty_rationale:
            'Галоўны факт карты. Бяссмерце німфаў як клас правакуе шукаць ёй запасны дом.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму высечка магла лічыцца не псуваннем лесу, а забойствам?',
          options: [
            {
              id: 'A',
              text: 'Дрыяды пастаянна ўмешваюцца ў справы людзей і мсцяць адкрыта',
            },
            {
              id: 'B',
              text: 'Лес — жывая прастора нябачных істот; німфа звязаная з дрэвам',
            },
            {
              id: 'C',
              text: 'Яны з’яўляюцца ў сваім абліччы кожнаму, хто ўвайшоў у рошчу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — зрубаць дрэва значыць забіць звязаную з ім німфу.',
            detail:
              'Дрыяды рэдка ўмешваюцца і амаль ніколі не з’яўляюцца ў першародным абліччы. Воля іх усё ж кіруе сустрэчай у лесе: небяспека, спакой, цуд або страта шляху.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — лес поўны нябачных істот, і гібель дрэва ёсць гібель німфы.',
            why: 'Карта падкрэслівае схаванасць, не яўную помсту. Першароднае аблічча амаль не паказваюць. Забойства — наступства сувязі, не тэатра ля дзвярэй рошчы.',
          },
          difficulty_rationale:
            'Прычына табу на парубку. Ярасць і з’яўленне аблічча стаяць побач у тэксце і лёгка становяцца «галоўным».',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што кажа іншая версія гэтай жа карты?',
          options: [
            {
              id: 'A',
              text: 'Дрыяды бяссмертныя, як алімпійцы',
            },
            {
              id: 'B',
              text: 'Дрыяда жыве толькі ў адной свяшчэннай рошчы',
            },
            {
              id: 'C',
              text: 'Яны духі-апекуны: не існуюць у дрэве, а клапоцяцца пра яго',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — паводле іншай версіі яны апекуюць дрэва, не жывучы ўнутры.',
            detail:
              'Асноўная лінія: дыханне — сок, цела — ствол і галіны, голас — шапаценне. Другая аслабляе тоеснасць. Абедзве застаюцца ўнутры карты; бяссмерця няма ні ў адной.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — духі-апекуны, якія не існуюць у дрэве, а клапоцяцца пра яго.',
            why: 'Смяротнасць німфы карта не здымае. «Кожнае дрэва — свая дрыяда», не адна рошча. Спрачаецца з асноўнай версіяй толькі месца жыхарства.',
          },
          difficulty_rationale:
            'Папраўку ў канцы лёгка прапусціць. Хто запомніў «памірае разам з дрэвам», не чакае версіі без жыхарства ўнутры.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '树精',
      questions: [
        {
          level: 'Story',
          question: '若树死了，树精会怎样？',
          options: [
            {
              id: 'A',
              text: '她与树同死',
            },
            {
              id: 'B',
              text: '她迁入邻近的树',
            },
            {
              id: 'C',
              text: '她作为无形之魂留在树丛中，不再依附树木',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 宁芙与树同寿，亦与树同亡。',
            detail:
              '每棵树有自己的树精。她们是少数有死的宁芙。主版本中并无迁居。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 树精与树同死。',
            why: '主版本：与树不可分。不是邻树，也不是无体的树丛之魂。伐木之重由此而来。',
          },
          difficulty_rationale:
            '卡的中心事实。宁芙作为一类的不死性诱人给她另找栖身。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何伐木可不算毁林，而算谋杀？',
          options: [
            {
              id: 'A',
              text: '树精不断介入人事并公开报复',
            },
            {
              id: 'B',
              text: '森林是无形生灵的活空间；宁芙系于树',
            },
            {
              id: 'C',
              text: '凡入树丛者，她们皆以本相现身',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 伐树即杀系于树的宁芙。',
            detail:
              '树精很少干预，几乎从不显本相。她们的意志仍主宰林中相遇：危险、安宁、奇迹，或迷途。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 森林满是无形生灵，树死即宁芙死。',
            why: '卡强调隐蔽，不是公开报复。本相几乎不显。谋杀源于纽带，不是树丛门口的戏剧。',
          },
          difficulty_rationale:
            '伐木禁忌的理由。愤怒与现身紧挨着写在文中，容易被当成“要点”。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '同一张卡上的另一说法是什么？',
          options: [
            {
              id: 'A',
              text: '树精如奥林匹斯诸神般不死',
            },
            {
              id: 'B',
              text: '树精只活在一座圣林中',
            },
            {
              id: 'C',
              text: '她们是守护精灵：并不存在于树内，只是照料它',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 另一说法里她们照料树，却不住在树内。',
            detail:
              '主线：气息是汁液，身体是干与枝，声音是沙沙。第二说弱化同一。两者都留在卡上；不死都不在其中。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 守护精灵：不在树内存在，只是照料它。',
            why: '卡并未取消宁芙的有死。“每树一树精”，不是一座林。与主版本相争的只有居处。',
          },
          difficulty_rationale:
            '文末修正容易漏过。记住“与树同死”的人，不期待不住其内的版本。',
          needs_review: false,
        },
      ],
    },
  },
};
