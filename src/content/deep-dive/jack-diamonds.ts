import type { DeepDiveCard } from './types';

export const jackDiamonds: DeepDiveCard = {
  card_id: 'jack-diamonds',
  locales: {
    en: {
      card_title: 'The Helmed Rider',
      questions: [
        {
          level: 'Story',
          question: 'What is his role at the bridge?',
          options: [
            {
              id: 'A',
              text: 'Cross the river first and lead the procession',
            },
            {
              id: 'B',
              text: 'Remain on the bank: mock and revile those crossing, as the rite prescribes',
            },
            {
              id: 'C',
              text: 'Guard the bridge from those unworthy of passage',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — where others cross, he remains to fulfill another role.',
            detail:
              'The bridge is a point of collision, not only a crossing. With his like he tests the walkers by rough word.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — remain on the bank and revile the procession’s participants, as tradition commands.',
            why: 'He is neither a guide across the river nor a gatekeeper of selection. The haste to the bridge is to arrive in time for the rite of mockery.',
          },
          difficulty_rationale:
            'A rider at a bridge reads as one who crosses himself or who stands guard. The text leaves him on the bank.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why a helm that hides the face?',
          options: [
            {
              id: 'A',
              text: 'As armor: there will be combat on the bridge',
            },
            {
              id: 'B',
              text: 'Not protection, but refusal of a name — a mask so forbidden speech may be spoken',
            },
            {
              id: 'C',
              text: 'So his own will not recognize him among enemies of the procession',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the helm lets him leave the person and become part of the rite.',
            detail:
              'A covered face grants speech that does not exist in the ordinary world: rough, mocking, without respect.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — refusal of a name: a mask, not armor.',
            why: 'The card sharply separates the helm from protection. He is no enemy of the procession either: concealment is needed in order to speak, not to fight.',
          },
          difficulty_rationale:
            'A helm on a rider is almost always read as armor. The text flips it: a mask for forbidden speech.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Why does the rite need these mockeries?',
          options: [
            {
              id: 'A',
              text: 'To drive off the procession and break the passage',
            },
            {
              id: 'B',
              text: 'Insult is a form of purification: who cannot endure is not ready; beyond the bridge there will be no outer supports',
            },
            {
              id: 'C',
              text: 'To exalt by humiliation those who have already crossed',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — mockery breaks the illusion of importance and makes the invisible visible.',
            detail:
              'The rider is the voice of doubt, a reflection of inward fear. When the procession passes, the cries fall quiet: he is not an enemy, but a link without which the passage would remain outward.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — insult as purification and a test of readiness for passage.',
            why: 'The aim is neither to break the procession nor to honor those already past. Without this trial the bridge would be only movement of the body.',
          },
          difficulty_rationale:
            'Reviling reads as enmity. The card names it a necessary link of purification.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Всадник в шлеме',
      questions: [
        {
          level: 'Story',
          question: 'Какова его роль у моста?',
          options: [
            {
              id: 'A',
              text: 'Перейти реку первым и провести процессию',
            },
            {
              id: 'B',
              text: 'Остаться на берегу: насмехаться и поносить идущих, как предписано обрядом',
            },
            {
              id: 'C',
              text: 'Охранять мост от тех, кто недостоин перехода',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — где другие переходят, он остаётся исполнить иную роль.',
            detail:
              'Мост — точка столкновения, не только переправа. Вместе с себе подобными он проверяет идущих грубым словом.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — остаться на берегу и поносить участников процессии, как велит традиция.',
            why: 'Он не проводник через реку и не страж отсева. Спешка к мосту — чтобы успеть к обряду насмешки.',
          },
          difficulty_rationale:
            'Всадник у моста читается как тот, кто сам переходит или стережёт. Текст оставляет его на берегу.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Зачем шлем, который скрывает лицо?',
          options: [
            {
              id: 'A',
              text: 'Как доспех: на мосту будет бой',
            },
            {
              id: 'B',
              text: 'Не защита, а отказ от имени — маска, чтобы говорить запретное',
            },
            {
              id: 'C',
              text: 'Чтобы свои не узнали его среди врагов процессии',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — шлем позволяет выйти из личности и стать частью обряда.',
            detail:
              'Прикрытое лицо даёт речь, которой нет в обычном мире: грубую, насмешливую, без уважения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — отказ от имени: маска, а не доспех.',
            why: 'Карта прямо отделяет шлем от защиты. Враг процессии он тоже не: сокрытие нужно, чтобы говорить, а не чтобы воевать.',
          },
          difficulty_rationale:
            'Шлем на всаднике почти всегда читают как броню. Текст переворачивает: маска для запретной речи.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Зачем обряду эти насмешки?',
          options: [
            {
              id: 'A',
              text: 'Чтобы прогнать процессию и сорвать переход',
            },
            {
              id: 'B',
              text: 'Оскорбление — форма очищения: кто не выдержит, не готов; за мостом внешних опор не будет',
            },
            {
              id: 'C',
              text: 'Чтобы унижением возвеличить тех, кто уже перешёл',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — насмешка ломает иллюзию значимости и делает невидимое видимым.',
            detail:
              'Всадник — голос сомнения, отражение внутреннего страха. Когда процессия проходит, крики стихают: он не враг, а звено, без которого переход остался бы внешним.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — оскорбление как очищение и проверка готовности к переходу.',
            why: 'Цель не сорвать шествие и не чествовать уже прошедших. Без этой пробы мост был бы только движением тела.',
          },
          difficulty_rationale:
            'Поношение читается как вражда. Карта называет его необходимым звеном очищения.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Вершнік у шлеме',
      questions: [
        {
          level: 'Story',
          question: 'Якая яго роля ля моста?',
          options: [
            {
              id: 'A',
              text: 'Перайсці раку першым і правесці працэсію',
            },
            {
              id: 'B',
              text: 'Застацца на беразе: насмехацца і паносіць ідучых, як прадпісана абрадам',
            },
            {
              id: 'C',
              text: 'Ахоўваць мост ад тых, хто недастойны пераходу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — дзе іншыя пераходзяць, ён застаецца выканаць іншую ролю.',
            detail:
              'Мост — кропка сутыкнення, не толькі пераправа. Разам з сабе падобнымі ён правярае ідучых грубым словам.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — застацца на беразе і паносіць удзельнікаў працэсіі, як вяліць традыцыя.',
            why: 'Ён не праваднік праз раку і не вартаўнік адсеву. Спешка да моста — каб паспець да абраду насмешкі.',
          },
          difficulty_rationale:
            'Вершнік ля моста чытаецца як той, хто сам пераходзіць ці вартае. Тэкст пакідае яго на беразе.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Навошта шлем, які хавае твар?',
          options: [
            {
              id: 'A',
              text: 'Як даспех: на мосце будзе бой',
            },
            {
              id: 'B',
              text: 'Не абарона, а адмова ад імя — маска, каб гаварыць забароненае',
            },
            {
              id: 'C',
              text: 'Каб свае не пазналі яго сярод ворагаў працэсіі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — шлем дазваляе выйсці з асобы і стаць часткай абраду.',
            detail:
              'Прыкрыты твар дае гаворку, якой няма ў звычайным свеце: грубую, насмешлівую, без павагі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — адмова ад імя: маска, а не даспех.',
            why: 'Карта проста аддзяляе шлем ад абароны. Вораг працэсіі ён таксама не: хаванне патрэбна, каб гаварыць, а не каб ваяваць.',
          },
          difficulty_rationale:
            'Шлем на вершніку амаль заўсёды чытаюць як браню. Тэкст пераварочвае: маска для забароненай гаворкі.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Навошта абраду гэтыя насмешкі?',
          options: [
            {
              id: 'A',
              text: 'Каб прагнаць працэсію і сарваць пераход',
            },
            {
              id: 'B',
              text: 'Абраза — форма ачышчэння: хто не вытрымае, не гатовы; за мостам вонкавых апор не будзе',
            },
            {
              id: 'C',
              text: 'Каб прыніжэннем узвялічыць тых, хто ўжо перайшоў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — насмешка ламае ілюзію значнасці і робіць нябачнае бачным.',
            detail:
              'Вершнік — голас сумнення, адлюстраванне ўнутранага страху. Калі працэсія праходзіць, крыкі ціхнуць: ён не вораг, а звяно, без якога пераход застаўся б вонкавым.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — абраза як ачышчэнне і праверка гатоўнасці да пераходу.',
            why: 'Мэта не сарваць шэсце і не ўшанаваць ужо прайшоўшых. Без гэтай пробы мост быў бы толькі рухам цела.',
          },
          difficulty_rationale:
            'Паношанне чытаецца як варожасць. Карта называе яго неабходным звяном ачышчэння.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '戴盔的骑手',
      questions: [
        {
          level: 'Story',
          question: '他在桥边的角色是什么？',
          options: [
            {
              id: 'A',
              text: '率先渡河并引领队列',
            },
            {
              id: 'B',
              text: '留在岸上：按仪式嘲骂、辱骂过桥者',
            },
            {
              id: 'C',
              text: '守卫桥梁，挡住不配过渡的人',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 别人过桥之处，他留下履行另一种角色。',
            detail:
              '桥是碰撞之点，不只是渡口。他与同类以粗言检验行者。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 留在岸上，按传统辱骂队列中的人。',
            why: '他既非渡河的向导，也非筛选的门卫。急赴桥边，是为赶上嘲骂的仪式。',
          },
          difficulty_rationale:
            '桥边骑手易被读成自己过桥或站岗者。文本把他留在岸上。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何要一顶遮面的盔？',
          options: [
            {
              id: 'A',
              text: '作为甲胄：桥上将有战斗',
            },
            {
              id: 'B',
              text: '不是防护，而是弃名——好说出禁语的面具',
            },
            {
              id: 'C',
              text: '好让自己人不在队列的敌人中认出他',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 盔使他走出人格，成为仪式的一部分。',
            detail:
              '遮住的脸给出平常世界所无的言语：粗厉、嘲讽、无礼。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 弃名：面具，不是甲胄。',
            why: '此卡明确把盔与防护分开。他也不是队列的敌人：遮蔽是为了说话，不是为了作战。',
          },
          difficulty_rationale:
            '骑手上的盔几乎总被读成甲胄。文本翻转它：禁语的面具。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '仪式为何需要这些嘲骂？',
          options: [
            {
              id: 'A',
              text: '为了驱散队列、打断过渡',
            },
            {
              id: 'B',
              text: '侮辱是一种净化：受不住的人尚未准备好；桥外将无外在支撑',
            },
            {
              id: 'C',
              text: '以屈辱抬高已经过桥的人',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 嘲骂打碎重要性的幻觉，使不可见变得可见。',
            detail:
              '骑手是疑虑之声，内在恐惧的映象。队列通过后，叫声平息：他不是敌人，而是一环——没有它，过渡仍只是外在的。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 侮辱作为净化，以及对过渡准备的检验。',
            why: '目的既不是打断游行，也不是表彰已过者。没有这道试炼，桥只会是身体的移动。',
          },
          difficulty_rationale:
            '辱骂被读成敌意。此卡称之为净化的必要环节。',
          needs_review: false,
        },
      ],
    },
  },
};
