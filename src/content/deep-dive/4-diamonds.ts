import type { DeepDiveCard } from './types';

export const fourDiamonds: DeepDiveCard = {
  card_id: '4-diamonds',
  locales: {
    en: {
      card_title: 'The Carrying of Sacred Objects',
      questions: [
        {
          level: 'Story',
          question: 'Besides preservation, what else is this carrying?',
          options: [
            {
              id: 'A',
              text: 'Delivery of a relic to the altar',
            },
            {
              id: 'B',
              text: 'A trial: to tell the genuine from illusion and understand what you carry',
            },
            {
              id: 'C',
              text: 'Punishment of the one confined in the barrel',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it is a trial, not merely an act of preservation.',
            detail:
              'One must grasp what exactly is being carried, even if full awareness is impossible. The barrel is a vessel for preservation, not a cage of punishment.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a trial: to tell the genuine from illusion.',
            why: 'The card describes neither a route to the altar nor judgment of the confined. The carrying tests whether this is sacred or only the form of a rite.',
          },
          difficulty_rationale:
            'Plot function: not logistics and not punishment. The barrel tempts reading the scene as captivity.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why is it never fully clear who carries whom?',
          options: [
            {
              id: 'A',
              text: 'Bearers of secrets cast doubt on existing hierarchies',
            },
            {
              id: 'B',
              text: 'The sacred must always stand above the carrier — otherwise the rite is empty',
            },
            {
              id: 'C',
              text: 'The figure in the barrel is no longer human, only will-less cargo',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — unclear hierarchy here is not a flaw, but the meaning.',
            detail:
              'The monkey above is a dual mind, leaping from branch to branch. Who carries whom is an open question, not a drawing error.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — bearers of secrets cast hierarchies into doubt.',
            why: 'The card neither locks in “sacred always on top” nor nullifies the one in the barrel. Unclarity is part of the teaching.',
          },
          difficulty_rationale:
            'Why the card refuses to say who ranks higher. Easy to invent the “correct” hierarchy yourself.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the monkey above add?',
          options: [
            {
              id: 'A',
              text: 'Unambiguous guardianship: the sacred under a reliable watch',
            },
            {
              id: 'B',
              text: 'Proof that nothing sacred is here — only mockery',
            },
            {
              id: 'C',
              text: 'Duality: guardian or mockery, the sacred or its shadow in ritual form',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it forces the question whether this is only a shadow that has taken ritual form.',
            detail:
              'The sacred is not always obvious and not always pure. In symbols the monkey is imitation — a distorted reflection of truth.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — duality: guardian or mockery, original or shadow.',
            why: 'The card grants neither pure guardianship nor pure exposure. Caution in handling comes from that unclarity.',
          },
          difficulty_rationale:
            'The monkey pulls toward a single reading: guard or jest. The text holds both.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Перенос священных объектов',
      questions: [
        {
          level: 'Story',
          question: 'Чем, помимо сохранения, является этот перенос?',
          options: [
            {
              id: 'A',
              text: 'Доставкой реликвии к алтарю',
            },
            {
              id: 'B',
              text: 'Испытанием: отличить подлинное от иллюзии и понять, что несёшь',
            },
            {
              id: 'C',
              text: 'Наказанием того, кто заключён в бочку',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это испытание, а не просто акт сохранения.',
            detail:
              'Нужно понять, что именно несёшь, даже если до конца осознать нельзя. Бочка — сосуд для сохранения, не клетка кары.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — испытание: отличить подлинное от иллюзии.',
            why: 'Карта не описывает маршрут к алтарю и не судит заключённого. Перенос проверяет, священное ли это или только форма обряда.',
          },
          difficulty_rationale:
            'Функция сюжета: не логистика и не кара. Бочка провоцирует прочитать сцену как плен.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему не до конца понятно, кто кого несёт?',
          options: [
            {
              id: 'A',
              text: 'Носители тайн ставят под сомнение существующие иерархии',
            },
            {
              id: 'B',
              text: 'Священное всегда должно стоять выше несущего — иначе обряд пуст',
            },
            {
              id: 'C',
              text: 'Фигура в бочке уже не человек, а груз без воли',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — неясность иерархии здесь не сбой, а смысл.',
            detail:
              'Обезьяна сверху — двойственный ум, скачущий с ветви на ветвь. Кто несёт кого — открытый вопрос, не ошибка рисунка.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — носители тайн ставят иерархии под сомнение.',
            why: 'Карта не закрепляет «священное всегда наверху» и не обнуляет того, кто в бочке. Неясность — часть учения.',
          },
          difficulty_rationale:
            'Зачем карта отказывается сказать, кто главнее. Легко додумать «правильную» иерархию самим.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что добавляет обезьяна сверху?',
          options: [
            {
              id: 'A',
              text: 'Однозначную охрану: священное под надёжным стражем',
            },
            {
              id: 'B',
              text: 'Доказательство, что священного здесь нет — одна насмешка',
            },
            {
              id: 'C',
              text: 'Двойственность: хранитель или насмешка, священное или его тень в форме обряда',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — она заставляет спросить, не тень ли это, принявшая форму обряда.',
            detail:
              'Священное не всегда очевидно и не всегда чисто. Обезьяна в символах — подражание, искажённое отражение истины.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — двойственность: хранитель или насмешка, подлинник или тень.',
            why: 'Карта не даёт ни чистой охраны, ни чистого разоблачения. Осторожность в обращении — из этой неясности.',
          },
          difficulty_rationale:
            'Обезьяну тянет прочитать однозначно: страж или издёвка. Текст держит оба чтения.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Перанос сакральных прадметаў',
      questions: [
        {
          level: 'Story',
          question: 'Чым, апроч захавання, з\'яўляецца гэты перанос?',
          options: [
            {
              id: 'A',
              text: 'Дастаўкай рэліквіі да алтара',
            },
            {
              id: 'B',
              text: 'Выпрабаваннем: адрозніць сапраўднае ад ілюзіі і зразумець, што нясеш',
            },
            {
              id: 'C',
              text: 'Пакараннем таго, хто заключаны ў бочку',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта выпрабаванне, а не проста акт захавання.',
            detail:
              'Трэба зразумець, што менавіта нясеш, нават калі да канца ўсвядоміць нельга. Бочка — пасудзіна для захавання, не клетка кары.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — выпрабаванне: адрозніць сапраўднае ад ілюзіі.',
            why: 'Карта не апісвае маршрут да алтара і не судзіць зняволенага. Перанос правярае, сакральнае гэта ці толькі форма абраду.',
          },
          difficulty_rationale:
            'Функцыя сюжэту: не лагістыка і не кара. Бочка правакуе прачытаць сцэну як палон.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму не да канца зразумела, хто каго нясе?',
          options: [
            {
              id: 'A',
              text: 'Носьбіты таямніц ставяць пад сумненне існуючыя іерархіі',
            },
            {
              id: 'B',
              text: 'Сакральнае заўсёды павінна стаяць вышэй за нясучага — інакш абрад пусты',
            },
            {
              id: 'C',
              text: 'Фігура ў бочцы ўжо не чалавек, а груз без волі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — неяснасць іерархіі тут не збой, а сэнс.',
            detail:
              'Малпа зверху — двайны розум, што скача з галіны на галіну. Хто нясе каго — адкрытае пытанне, не памылка малюнка.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — носьбіты таямніц ставяць іерархіі пад сумненне.',
            why: 'Карта не замацоўвае «сакральнае заўсёды ўверсе» і не абнуляе таго, хто ў бочцы. Неяснасць — частка вучэння.',
          },
          difficulty_rationale:
            'Навошта карта адмаўляецца сказаць, хто галоўней. Лёгка дадумаць «правільную» іерархію самім.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што дадае малпа зверху?',
          options: [
            {
              id: 'A',
              text: 'Адназначную ахову: сакральнае пад надзейным вартавым',
            },
            {
              id: 'B',
              text: 'Доказ, што сакральнага тут няма — адна насмешка',
            },
            {
              id: 'C',
              text: 'Двайнасць: захавальнік ці насмешка, сакральнае ці яго цень у форме абраду',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яна прымушае спытаць, ці не цень гэта, што прыняў форму абраду.',
            detail:
              'Сакральнае не заўсёды відавочнае і не заўсёды чыстае. Малпа ў сімвалах — перайманне, скажонае адлюстраванне ісціны.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — двайнасць: захавальнік ці насмешка, арыгінал ці цень.',
            why: 'Карта не дае ні чыстай аховы, ні чыстага выкрыцця. Асцярожнасць у абыходжанні — з гэтай неяснасці.',
          },
          difficulty_rationale:
            'Малпу цягне прачытаць адназначна: вартаўнік ці издзеўка. Тэкст трымае абодва чытанні.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '搬运神圣之物',
      questions: [
        {
          level: 'Story',
          question: '除了保存，这次搬运还意味着什么？',
          options: [
            {
              id: 'A',
              text: '把圣物送到祭坛',
            },
            {
              id: 'B',
              text: '一场考验：分辨真伪，并理解自己所负',
            },
            {
              id: 'C',
              text: '对关在桶中之人的惩罚',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 这是考验，而不只是保存之举。',
            detail:
              '必须领会自己究竟负着什么，即使无法完全醒觉。桶是保存之器，不是惩戒的牢笼。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 考验：分辨真伪。',
            why: '此卡既不描述送往祭坛的路线，也不审判被关者。搬运检验的是：这是否神圣，抑或只是仪式的形式。',
          },
          difficulty_rationale:
            '情节功能：既非后勤，也非惩戒。桶诱人把场景读成囚禁。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何始终说不清谁负着谁？',
          options: [
            {
              id: 'A',
              text: '秘密承载者质疑既有的等级',
            },
            {
              id: 'B',
              text: '神圣必须永远高于负运者——否则仪式空虚',
            },
            {
              id: 'C',
              text: '桶中的形象已非人，只是无意志的货物',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处等级的不明不是缺陷，而是意义。',
            detail:
              '上方的猴子是双重心智，枝间跃迁。谁负谁是开放的问题，不是画错。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 秘密承载者把等级投入怀疑。',
            why: '此卡既不锁定「神圣永远在上」，也不抹去桶中之人。不明是教诲的一部分。',
          },
          difficulty_rationale:
            '此卡为何拒绝说出谁更高。人很容易自己发明「正确」的等级。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '上方的猴子增添了什么？',
          options: [
            {
              id: 'A',
              text: '明确的守护：神圣在可靠看守之下',
            },
            {
              id: 'B',
              text: '证明这里并无神圣——只有嘲讽',
            },
            {
              id: 'C',
              text: '双重性：守护或嘲讽，神圣或其披上仪式外衣的影子',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 它迫使人追问：这是否只是披上仪式形式的影子。',
            detail:
              '神圣并不总是显然，也并不总是纯粹。象征中猴子是模仿——真理的扭曲映象。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 双重性：守护或嘲讽，本真或影子。',
            why: '此卡既不给予纯粹守护，也不给予纯粹揭穿。审慎来自这份不明。',
          },
          difficulty_rationale:
            '猴子被拉向单一解读：守卫或戏弄。文本两者并存。',
          needs_review: false,
        },
      ],
    },
  },
};
