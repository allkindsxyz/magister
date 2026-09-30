import type { DeepDiveCard } from './types';

export const kingClubs: DeepDiveCard = {
  card_id: 'king-clubs',
  locales: {
    en: {
      card_title: 'Keeper of the Skull',
      questions: [
        {
          level: 'Story',
          question: 'Whence, by belief, did the Master come by the skull?',
          options: [
            {
              id: 'A',
              text: 'It was given him at his election in 1156',
            },
            {
              id: 'B',
              text: 'Nine months after he opened his beloved’s grave',
            },
            {
              id: 'C',
              text: 'It was found in one of the East’s key fortresses',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the skull appeared nine months later in the opened grave.',
            detail:
              'Mad with his beloved’s death, he returned to the lifeless body. The sanctuary Caput Mortuum is born of that gesture, not of an assault.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — nine months after he opened his beloved’s grave.',
            why: 'Election and fortresses are the chronicle layer, not the belief. The legend is bound to the coffin, the term, and the Master’s never parting with it again.',
          },
          difficulty_rationale:
            'The card’s scene. The military biography of 1156–1169 is easy to put in place of the belief.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What did the skull serve the Master, by belief?',
          options: [
            {
              id: 'A',
              text: 'It brought luck and helped foretell the future',
            },
            {
              id: 'B',
              text: 'It conferred the right of election as Grand Master',
            },
            {
              id: 'C',
              text: 'It guarded the gates of the Order’s fortresses',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — luck and the foretelling of the future.',
            detail:
              'The crowned skull-relic is no mark of office. Election in 1156 the text keeps apart: warrior and strategist, then Master; the skull lives in legend beside him.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — it brought luck and helped foretell the future.',
            why: 'He took the office by service, not by a relic. Fortresses he strengthened by war; the skull is not set at the gates.',
          },
          difficulty_rationale:
            'Why the relic is in the hand. Easy to make it the cause of power or a ward of walls.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the card set beside the legend of the skull?',
          options: [
            {
              id: 'A',
              text: 'The Order’s collapse in the Master’s lifetime',
            },
            {
              id: 'B',
              text: 'The Templars’ rise as a military force and a political player',
            },
            {
              id: 'C',
              text: 'A renunciation of war for the sake of seclusion',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — under him the Order strengthened its military and political standing.',
            detail:
              'Campaigns, fortresses, a network of holdings in East and Europe. The skull does not cancel the career: the madness of the legend and the Order’s growth hold on one figure.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the Templars’ rise as a military force and a political player.',
            why: 'Neither collapse nor seclusion: he died in 1169, leaving the Order stronger. That layer is precisely what is missed once only the skull is remembered.',
          },
          difficulty_rationale:
            'The historical layer the relic swallows. Without it the keeper of the skull is only a necromancer.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Хранитель черепа',
      questions: [
        {
          level: 'Story',
          question: 'Откуда, по поверью, у магистра взялся череп?',
          options: [
            {
              id: 'A',
              text: 'Его передали при избрании в 1156 году',
            },
            {
              id: 'B',
              text: 'Через девять месяцев после того, как он вскрыл могилу любимой',
            },
            {
              id: 'C',
              text: 'Его нашли в одной из ключевых крепостей Востока',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — череп явился через девять месяцев в раскрытой могиле.',
            detail:
              'Обезумев от смерти любимой, он вернулся к безжизненному телу. Святыня Caput Mortuum рождается из этого жеста, не из штурма.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — через девять месяцев после того, как он вскрыл могилу любимой.',
            why: 'Избрание и крепости — слой хроники, не поверья. Легенда привязана к гробу, сроку и тому, что магистр больше с ним не расставался.',
          },
          difficulty_rationale:
            'Сцена карты. Военную биографию 1156–1169 легко подставить вместо поверья.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чем череп служил магистру, по поверью?',
          options: [
            {
              id: 'A',
              text: 'Приносил удачу и помогал предсказывать будущее',
            },
            {
              id: 'B',
              text: 'Давал право избрания великим магистром',
            },
            {
              id: 'C',
              text: 'Охранял входы в крепости ордена',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — удача и предсказание будущего.',
            detail:
              'Коронованный череп-святыня — не знак сана. Избрание в 1156-м текст отделяет: воин и стратег, затем магистр; череп живёт в легенде рядом.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — приносил удачу и помогал предсказывать будущее.',
            why: 'Сан он взял службой, не реликвией. Крепости он укреплял войной; череп к воротам не приставлен.',
          },
          difficulty_rationale:
            'Зачем реликвия в руке. Её легко сделать причиной власти или стражем стен.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что карта ставит рядом с легендой о черепе?',
          options: [
            {
              id: 'A',
              text: 'Распад ордена при жизни магистра',
            },
            {
              id: 'B',
              text: 'Усиление тамплиеров как военной силы и политического игрока',
            },
            {
              id: 'C',
              text: 'Отказ от войны ради затворничества',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — при нём орден усилил военные и политические позиции.',
            detail:
              'Кампании, крепости, сеть владений на Востоке и в Европе. Череп не отменяет карьеру: безумие легенды и рост ордена держатся на одной фигуре.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — усиление тамплиеров как военной силы и политического игрока.',
            why: 'Распада и затворничества нет: он умер в 1169-м, оставив орден сильнее. Пропускают именно этот слой, запомнив только череп.',
          },
          difficulty_rationale:
            'Исторический слой, который съедает реликвия. Без него хранитель черепа — только некромант.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Захавальнік чэрапа',
      questions: [
        {
          level: 'Story',
          question: 'Адкуль, паводле павер’я, у магістра ўзяўся чэрап?',
          options: [
            {
              id: 'A',
              text: 'Яго перадалі пры абранні ў 1156 годзе',
            },
            {
              id: 'B',
              text: 'Праз дзевяць месяцаў пасля таго, як ён раскрыў магілу каханай',
            },
            {
              id: 'C',
              text: 'Яго знайшлі ў адной з ключавых крэпасцей Усходу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — чэрап з’явіўся праз дзевяць месяцаў у раскрытай магіле.',
            detail:
              'Ашалеўшы ад смерці каханай, ён вярнуўся да бязжыццёвага цела. Святыня Caput Mortuum нараджаецца з гэтага жэста, не з штурму.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — праз дзевяць месяцаў пасля таго, як ён раскрыў магілу каханай.',
            why: 'Абранне і крэпасці — пласт хронікі, не павер’я. Легенда прывязана да труны, тэрміну і таго, што магістр больш з ім не разлучаўся.',
          },
          difficulty_rationale:
            'Сцэна карты. Ваенную біяграфію 1156–1169 лёгка падставіць замест павер’я.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чым чэрап служыў магістру, паводле павер’я?',
          options: [
            {
              id: 'A',
              text: 'Прыносіў удачу і дапамагаў прадказваць будучыню',
            },
            {
              id: 'B',
              text: 'Даваў права абрання вялікім магістрам',
            },
            {
              id: 'C',
              text: 'Ахоўваў уваходы ў крэпасці ордэна',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — удача і прадказанне будучыні.',
            detail:
              'Каранаваны чэрап-святыня — не знак сана. Абранне ў 1156-м тэкст аддзяляе: воін і стратэг, затым магістр; чэрап жыве ў легендзе побач.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — прыносіў удачу і дапамагаў прадказваць будучыню.',
            why: 'Сан ён узяў службай, не рэліквіяй. Крэпасці ён умацоўваў вайной; чэрап да брамы не прыстаўлены.',
          },
          difficulty_rationale:
            'Навошта рэліквія ў руцэ. Яе лёгка зрабіць прычынай улады ці вартаўніком сцен.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што карта ставіць побач з легендай пра чэрап?',
          options: [
            {
              id: 'A',
              text: 'Распад ордэна пры жыцці магістра',
            },
            {
              id: 'B',
              text: 'Узмацненне тампліераў як ваеннай сілы і палітычнага гульца',
            },
            {
              id: 'C',
              text: 'Адмову ад вайны дзеля затворніцтва',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пры ім ордэн узмацніў ваенныя і палітычныя пазіцыі.',
            detail:
              'Кампаніі, крэпасці, сетка ўладанняў на Усходзе і ў Еўропе. Чэрап не скасоўвае кар’еру: вар’яцтва легенды і рост ордэна трымаюцца на адной постаці.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — узмацненне тампліераў як ваеннай сілы і палітычнага гульца.',
            why: 'Распаду і затворніцтва няма: ён памёр у 1169-м, пакінуўшы ордэн мацнейшым. Прапускаюць менавіта гэты пласт, запомніўшы толькі чэрап.',
          },
          difficulty_rationale:
            'Гістарычны пласт, які з’ядае рэліквія. Без яго захавальнік чэрапа — толькі некрамант.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '头骨守护者',
      questions: [
        {
          level: 'Story',
          question: '据传说，大团长的头骨从何而来？',
          options: [
            {
              id: 'A',
              text: '1156年选举时授予他',
            },
            {
              id: 'B',
              text: '他打开爱人坟墓九个月之后',
            },
            {
              id: 'C',
              text: '在东方一座关键要塞中发现',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 头骨九个月后出现在被打开的坟墓中。',
            detail:
              '因爱人之死而发狂，他回到无生命的躯体旁。圣髑 Caput Mortuum 生于这一姿态，而非攻城。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他打开爱人坟墓九个月之后。',
            why: '选举与要塞是编年层，不是传说。传说系于棺木、期限，以及大团长此后再不与它分离。',
          },
          difficulty_rationale:
            '卡片的场景。1156–1169的军事传记容易顶替传说。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '据传说，头骨为大团长作何用？',
          options: [
            {
              id: 'A',
              text: '带来好运并帮助预言未来',
            },
            {
              id: 'B',
              text: '赋予当选大团长的权利',
            },
            {
              id: 'C',
              text: '守卫骑士团要塞的入口',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 好运与预言未来。',
            detail:
              '加冕的圣髑头骨不是职分的标记。文本把1156年的选举分开：先是战士与战略家，然后是大团长；头骨在传说中与他并存。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 它带来好运并帮助预言未来。',
            why: '他以服役取得职分，而非靠圣髑。要塞靠战争加固；头骨并不立于门前。',
          },
          difficulty_rationale:
            '为何圣髑在手中。容易把它做成权力的原因或城墙的守护。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片把什么与头骨传说并列？',
          options: [
            {
              id: 'A',
              text: '大团长在世时骑士团的崩溃',
            },
            {
              id: 'B',
              text: '圣殿骑士作为军事力量与政治玩家的崛起',
            },
            {
              id: 'C',
              text: '为隐居而放弃战争',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在他治下骑士团强化了军事与政治地位。',
            detail:
              '征战、要塞、东西方产业网络。头骨并不取消生涯：传说的疯狂与骑士团的成长系于同一形象。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 圣殿骑士作为军事力量与政治玩家的崛起。',
            why: '既无崩溃亦无隐居：他死于1169年，留下更强的骑士团。只记得头骨时，错过的正是这一层。',
          },
          difficulty_rationale:
            '被圣髑吞没的历史层。没有它，头骨守护者就只是一位死灵术士。',
          needs_review: false,
        },
      ],
    },
  },
};
