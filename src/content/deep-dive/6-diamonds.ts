import type { DeepDiveCard } from './types';

export const sixDiamonds: DeepDiveCard = {
  card_id: '6-diamonds',
  locales: {
    en: {
      card_title: 'The Sacred Chariot',
      questions: [
        {
          level: 'Story',
          question: 'What is the chariot?',
          options: [
            {
              id: 'A',
              text: 'A means to reach a destination',
            },
            {
              id: 'B',
              text: 'A form of rite in which motion itself is a sacred act',
            },
            {
              id: 'C',
              text: 'A wagon the guide steers as master of fates',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the path matters more than the goal, and the cargo is its own carrier.',
            detail:
              'A boat on wheels joins water and earth, forward motion and inward immersion. It is not transport.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a rite in which motion itself is sacred.',
            why: 'The guide does not command those within: accompanies them, holding them in the space of passage. The card never sets destination above the path.',
          },
          difficulty_rationale:
            'Function of the image: motion as rite. Wheels tempt reading the scene as a journey.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does it appear?',
          options: [
            {
              id: 'A',
              text: 'Where enough unfinished fates have gathered',
            },
            {
              id: 'B',
              text: 'To return the severed back to the former world',
            },
            {
              id: 'C',
              text: 'When the borders of worlds must be fixed again',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it gathers the unfinished and draws them into one current.',
            detail:
              'It does not destroy. Vanishing, it leaves the sense that what shifted was not the landscape, but the order of things.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — where enough unfinished fates have gathered.',
            why: 'Those in the baskets have already been torn from the former world — they are not carried back. Borders, by the card, are precisely no longer fixed.',
          },
          difficulty_rationale:
            'Why the chariot comes out. Easy to take it for a homecoming or for border repair.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does a boat set upon wheels mean?',
          options: [
            {
              id: 'A',
              text: 'That passage is possible only by water',
            },
            {
              id: 'B',
              text: 'That the borders of worlds are no longer fixed: passage is wherever inner order is kept',
            },
            {
              id: 'C',
              text: 'That on land motion obeys speed, not depth',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — passage may be anywhere if inner order holds.',
            detail:
              'The oar reminds: even on land, motion answers the laws of depth. The flag — a path with no reverse direction.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — borders are no longer fixed; what matters is inner order, not place.',
            why: 'Joining boat and wheels lifts “water only.” The oar argues with speed: on land it is still depth.',
          },
          difficulty_rationale:
            'The hybrid of boat and wheels is easy to split in half. The text reads it as mobility of the border.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Священная колесница',
      questions: [
        {
          level: 'Story',
          question: 'Чем является колесница?',
          options: [
            {
              id: 'A',
              text: 'Средством добраться до цели',
            },
            {
              id: 'B',
              text: 'Формой ритуала, в котором само движение — священное действие',
            },
            {
              id: 'C',
              text: 'Повозкой, которой проводник правит как хозяин судеб',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — путь важнее цели, а груз сам себе носитель.',
            detail:
              'Лодка на колёсах соединяет воду и землю, ход вперёд и погружение внутрь. Это не транспорт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — ритуал, в котором священно само движение.',
            why: 'Проводник не управляет теми, кто внутри: сопровождает, держа их в пространстве перехода. Цели как пункта назначения карта не ставит выше пути.',
          },
          difficulty_rationale:
            'Функция образа: движение как обряд. Колёса провоцируют прочитать сцену как поездку.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему она появляется?',
          options: [
            {
              id: 'A',
              text: 'Там, где накопилось достаточно незавершённых судеб',
            },
            {
              id: 'B',
              text: 'Чтобы вернуть оторванных назад, в прежний мир',
            },
            {
              id: 'C',
              text: 'Когда границы миров нужно снова закрепить',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — она собирает незавершённое и уводит в один поток.',
            detail:
              'Не разрушает. Исчезнув, оставляет чувство, что сдвинулся не пейзаж, а порядок вещей.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — там, где накопилось достаточно незавершённых судеб.',
            why: 'Тех, кто в корзинах, уже оторвали от прежнего мира — назад их не везут. Границы, по карте, как раз больше не фиксированы.',
          },
          difficulty_rationale:
            'Зачем колесница выходит. Легко принять её за возврат домой или за ремонт границ.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что означает лодка, поставленная на колёса?',
          options: [
            {
              id: 'A',
              text: 'Что переход возможен только по воде',
            },
            {
              id: 'B',
              text: 'Что границы миров больше не фиксированы: переход — где соблюдён внутренний порядок',
            },
            {
              id: 'C',
              text: 'Что на суше движение подчиняется скорости, а не глубине',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — переход может быть где угодно, если держится внутренний порядок.',
            detail:
              'Весло напоминает: даже на суше движение слушается законов глубины. Флаг — путь без обратного направления.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — границы больше не фиксированы; важен внутренний порядок, не место.',
            why: 'Соединение лодки и колёс снимает «только вода». Весло спорит со скоростью: на суше всё ещё глубина.',
          },
          difficulty_rationale:
            'Гибрид лодки и колёс легко разобрать пополам. Текст читает его как подвижность границы.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Свяшчэнная калясніца',
      questions: [
        {
          level: 'Story',
          question: 'Чым з\'яўляецца калясніца?',
          options: [
            {
              id: 'A',
              text: 'Сродкам дабрацца да мэты',
            },
            {
              id: 'B',
              text: 'Формай рытуалу, у якім сам рух — сакральнае дзеянне',
            },
            {
              id: 'C',
              text: 'Вазком, якім праваднік кіруе як гаспадар лёсаў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — шлях важнейшы за мэту, а груз сам сабе носьбіт.',
            detail:
              'Лодка на колах злучае ваду і зямлю, ход наперад і пагружэнне ўнутр. Гэта не транспарт.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — рытуал, у якім сакральны сам рух.',
            why: 'Праваднік не кіруе тымі, хто ўнутры: суправаджае, трымаючы іх у прасторы пераходу. Мэты як пункта прызначэння карта не ставіць вышэй за шлях.',
          },
          difficulty_rationale:
            'Функцыя вобраза: рух як абрад. Колы правакуюць прачытаць сцэну як паездку.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму яна з\'яўляецца?',
          options: [
            {
              id: 'A',
              text: 'Там, дзе назапасілася дастаткова незавершаных лёсаў',
            },
            {
              id: 'B',
              text: 'Каб вярнуць адарваных назад, у былы свет',
            },
            {
              id: 'C',
              text: 'Калі межы светаў трэба зноў замацаваць',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яна збірае незавершанае і вядзе ў адзін паток.',
            detail:
              'Не разбурае. Знікшы, пакідае адчуванне, што зрушыўся не пейзаж, а парадак рэчаў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — там, дзе назапасілася дастаткова незавершаных лёсаў.',
            why: 'Тых, хто ў кошыках, ужо адарвалі ад былога свету — назад іх не вязуць. Межы, паводле карты, якраз больш не зафіксаваныя.',
          },
          difficulty_rationale:
            'Навошта калясніца выходзіць. Лёгка прыняць яе за вяртанне дадому ці за рамонт межаў.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што азначае лодка, пастаўленая на колы?',
          options: [
            {
              id: 'A',
              text: 'Што пераход магчымы толькі па вадзе',
            },
            {
              id: 'B',
              text: 'Што межы светаў больш не зафіксаваныя: пераход — дзе выкананы ўнутраны парадак',
            },
            {
              id: 'C',
              text: 'Што на сушы рух падпарадкоўваецца хуткасці, а не глыбіні',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пераход можа быць дзе заўгодна, калі трымаецца ўнутраны парадак.',
            detail:
              'Вясло нагадвае: нават на сушы рух слухаецца законаў глыбіні. Сцяг — шлях без зваротнага кірунку.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — межы больш не зафіксаваныя; важны ўнутраны парадак, не месца.',
            why: 'Злучэнне лодкі і колаў знімае «толькі вада». Вясло спрачаецца з хуткасцю: на сушы ўсё яшчэ глыбіня.',
          },
          difficulty_rationale:
            'Гібрыд лодкі і колаў лёгка разабраць напалам. Тэкст чытае яго як рухомасць мяжы.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '神圣战车',
      questions: [
        {
          level: 'Story',
          question: '战车是什么？',
          options: [
            {
              id: 'A',
              text: '抵达目的地的工具',
            },
            {
              id: 'B',
              text: '一种仪式形式，其中运动本身即是神圣行为',
            },
            {
              id: 'C',
              text: '向导如命运之主般驾驭的马车',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 路重于终点，而负运者自身即是承载。',
            detail:
              '轮上的舟连接水与土、前行与内沉。这不是交通工具。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 运动本身即神圣的仪式。',
            why: '向导并不主宰其中之人：他伴行，把他们托在过渡的空间里。此卡从不把目的地置于路之上。',
          },
          difficulty_rationale:
            '形象功能：运动即仪式。轮子诱人把场景读成旅行。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '它为何出现？',
          options: [
            {
              id: 'A',
              text: '在未完成的命运积够之处',
            },
            {
              id: 'B',
              text: '为把被撕裂者送回旧世界',
            },
            {
              id: 'C',
              text: '当必须重新固定世界的边界时',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 它聚起未完成者，引入同一条流。',
            detail:
              '它不毁灭。消失时留下的感觉是：移动的不是风景，而是事物的秩序。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在未完成的命运积够之处。',
            why: '篮中之人已从旧世界被撕离——不会被送回。按此卡，边界恰恰不再固定。',
          },
          difficulty_rationale:
            '战车为何出动。易被当成归乡，或边界的修补。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '舟置于轮上意味着什么？',
          options: [
            {
              id: 'A',
              text: '过渡只能经由水',
            },
            {
              id: 'B',
              text: '世界的边界不再固定：过渡在内在秩序得以持守之处',
            },
            {
              id: 'C',
              text: '在陆上，运动服从速度，而非深度',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 只要内在秩序在，过渡可以在任何地方。',
            detail:
              '桨提醒：即便在陆上，运动仍听从深度之法。旗——没有反向的路。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 边界不再固定；要紧的是内在秩序，不是地点。',
            why: '舟与轮的结合解除「唯水」。桨与速度争辩：在陆上仍是深度。',
          },
          difficulty_rationale:
            '舟轮杂交易被拆成两半。文本把它读成边界的可移动性。',
          needs_review: false,
        },
      ],
    },
  },
};
