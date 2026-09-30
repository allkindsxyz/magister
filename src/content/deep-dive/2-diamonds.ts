import type { DeepDiveCard } from './types';

export const twoDiamonds: DeepDiveCard = {
  card_id: '2-diamonds',
  locales: {
    en: {
      card_title: 'Two in a Boat',
      questions: [
        {
          level: 'Story',
          question: 'What is the boat in this rite?',
          options: [
            {
              id: 'A',
              text: 'A means to reach the water and return',
            },
            {
              id: 'B',
              text: 'A vessel of passage — a closed space between two states',
            },
            {
              id: 'C',
              text: 'A ship for those who already belong to the other shore',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not transport, but a vessel between two states.',
            detail:
              'The way to water is a deliberate step of renouncing the former self. The boat holds the passage; it does not deliver to a destination.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a vessel of passage, a closed space between states.',
            why: 'The card sharply separates the boat from a means of travel. It is neither a round trip nor a ship for those already crossed.',
          },
          difficulty_rationale:
            'Main thesis: the boat is a ritual vessel. Visible water tempts reading it as transport.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does one gaze into the distance while the other already wears a helm?',
          options: [
            {
              id: 'A',
              text: 'One leads, the other only follows',
            },
            {
              id: 'B',
              text: 'The helm is against water; the gaze is fear of the depths',
            },
            {
              id: 'C',
              text: 'One still seeks, the other has already accepted — that is the path’s essence',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the difference between seeking and accepting is the heart of the path.',
            detail:
              'Water is not always visible: sometimes it is only a threshold. Without readiness you lose yourself; going consciously, you gain understanding.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — one seeks, the other has already accepted; in that the path’s essence unfolds.',
            why: 'This is not a pair of “leader and led,” nor ordinary protection from water. The helm is like defense against the very nature of what comes.',
          },
          difficulty_rationale:
            'Bond between two figures. Easy to reduce to hierarchy in the boat or literal water-gear.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What happens when the boat touches the boundary?',
          options: [
            {
              id: 'A',
              text: 'What matters is forward motion, toward the other shore',
            },
            {
              id: 'B',
              text: 'Change begins within; no witnesses, no traces, consequences irreversible',
            },
            {
              id: 'C',
              text: 'All return — already no longer belonging to the former world',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — what begins is not a march forward, but an inward change.',
            detail:
              'A pilgrimage without witnesses. Not all return; those who do are no longer wholly the same — water remains in the gaze.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — change within: without witnesses, without traces, irreversible.',
            why: 'The card sets forward motion second. Return is not guaranteed: “not all,” not “all, but changed.”',
          },
          difficulty_rationale:
            'Trap: shore as goal and “all return altered.” The text insists on inward change and incomplete return.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Двое в лодке',
      questions: [
        {
          level: 'Story',
          question: 'Чем является лодка в этом ритуале?',
          options: [
            {
              id: 'A',
              text: 'Средством добраться до воды и вернуться',
            },
            {
              id: 'B',
              text: 'Вместилищем перехода — замкнутым пространством между двумя состояниями',
            },
            {
              id: 'C',
              text: 'Кораблём для тех, кто уже принадлежит иному берегу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это не транспорт, а сосуд между двумя состояниями.',
            detail:
              'Путь к воде — осознанный шаг к отречению от прежнего «я». Лодка держит переход, а не доставляет к цели.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — вместилище перехода, замкнутое пространство между состояниями.',
            why: 'Карта прямо отделяет лодку от средства передвижения. Это не рейс туда-обратно и не корабль уже перешедших.',
          },
          difficulty_rationale:
            'Главный тезис: лодка — ритуальный сосуд. Видимая вода провоцирует прочитать её как транспорт.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему один всматривается вдаль, а другой уже в шлеме?',
          options: [
            {
              id: 'A',
              text: 'Один ведёт, другой только следует',
            },
            {
              id: 'B',
              text: 'Шлем — от воды, взгляд — от страха перед глубиной',
            },
            {
              id: 'C',
              text: 'Один ещё ищет, другой уже принял — в этом суть пути',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — различие поиска и принятия и есть сердце пути.',
            detail:
              'Вода не всегда видна: иногда это только порог. Без готовности теряешь себя; идя осознанно — обретаешь понимание.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — один ищет, другой уже принял; в этом раскрывается суть пути.',
            why: 'Это не пара «вожак и ведомый» и не бытовая защита от воды. Шлем — как защита от самой сути предстоящего.',
          },
          difficulty_rationale:
            'Связка двух фигур. Легко свести к иерархии в лодке или к буквальной защите от воды.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что происходит, когда лодка касается границы?',
          options: [
            {
              id: 'A',
              text: 'Главное — движение вперёд, к другому берегу',
            },
            {
              id: 'B',
              text: 'Начинается изменение внутри; свидетелей нет, следов нет, последствия необратимы',
            },
            {
              id: 'C',
              text: 'Все возвращаются — уже не принадлежа прежнему миру',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — начинается не ход вперёд, а перемена внутри.',
            detail:
              'Паломничество без свидетелей. Возвращаются не все; кто возвращается, уже не целиком прежний — во взгляде остаётся вода.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — изменение внутри: без свидетелей, без следов, необратимо.',
            why: 'Карта отводит движение вперёд на второй план. Возвращение не гарантировано: «не все», а не «все, но другими».',
          },
          difficulty_rationale:
            'Ловушка: берег как цель и «все возвращаются другими». Текст настаивает на внутренней перемене и неполноте возврата.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Двое ў лодцы',
      questions: [
        {
          level: 'Story',
          question: 'Чым з\'яўляецца лодка ў гэтым рытуале?',
          options: [
            {
              id: 'A',
              text: 'Сродкам дабрацца да вады і вярнуцца',
            },
            {
              id: 'B',
              text: 'Умяшчальнем пераходу — замкнёнай прасторай паміж двума станамі',
            },
            {
              id: 'C',
              text: 'Караблём для тых, хто ўжо належыць іншаму берагу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта не транспарт, а пасудзіна паміж двума станамі.',
            detail:
              'Шлях да вады — усвядомлены крок да адрачэння ад былога «я». Лодка трымае пераход, а не дастаўляе да мэты.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — умяшчальне пераходу, замкнёная прастора паміж станамі.',
            why: 'Карта проста аддзяляе лодку ад сродку перасоўвання. Гэта не рэйс туды-назад і не карабель тых, хто ўжо перайшоў.',
          },
          difficulty_rationale:
            'Галоўны тэзіс: лодка — рытуальная пасудзіна. Бачная вада правакуе прачытаць яе як транспарт.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму адзін узіраецца ўдаль, а другі ўжо ў шлеме?',
          options: [
            {
              id: 'A',
              text: 'Адзін вядзе, другі толькі следзе',
            },
            {
              id: 'B',
              text: 'Шлем — ад вады, погляд — ад страху перад глыбінёй',
            },
            {
              id: 'C',
              text: 'Адзін яшчэ шукае, другі ўжо прыняў — у гэтым сутнасць шляху',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — розніца пошуку і прыняцця і ёсць сэрца шляху.',
            detail:
              'Вада не заўсёды бачная: часам гэта толькі парог. Без гатоўнасці губляеш сябе; ідучы ўсвядомлена — здабываеш разуменне.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — адзін шукае, другі ўжо прыняў; у гэтым раскрываецца сутнасць шляху.',
            why: 'Гэта не пара «важак і ведамы» і не бытавая абарона ад вады. Шлем — як абарона ад самой сутнасці таго, што надыходзіць.',
          },
          difficulty_rationale:
            'Звязка дзвюх фігур. Лёгка звесці да іерархіі ў лодцы ці да літаральнай абароны ад вады.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што адбываецца, калі лодка дакранаецца мяжы?',
          options: [
            {
              id: 'A',
              text: 'Галоўнае — рух наперад, да іншага берага',
            },
            {
              id: 'B',
              text: 'Пачынаецца змена ўнутры; сведкаў няма, слядоў няма, наступствы незваротныя',
            },
            {
              id: 'C',
              text: 'Усе вяртаюцца — ужо не належачы былому свету',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пачынаецца не ход наперад, а перамена ўнутры.',
            detail:
              'Паломніцтва без сведкаў. Вяртаюцца не ўсе; хто вяртаецца, ужо не цалкам былы — у поглядзе застаецца вада.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — змена ўнутры: без сведкаў, без слядоў, незваротна.',
            why: 'Карта адводзіць рух наперад на другі план. Вяртанне не гарантавана: «не ўсе», а не «усе, але іншымі».',
          },
          difficulty_rationale:
            'Пастка: бераг як мэта і «усе вяртаюцца іншымі». Тэкст настойвае на ўнутранай перамене і няпоўнасці вяртання.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '舟中二人',
      questions: [
        {
          level: 'Story',
          question: '在此仪式中，船是什么？',
          options: [
            {
              id: 'A',
              text: '抵达水面再返回的工具',
            },
            {
              id: 'B',
              text: '过渡之器——两境之间的封闭空间',
            },
            {
              id: 'C',
              text: '已属彼岸者的船',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 不是交通工具，而是两境之间的容器。',
            detail:
              '赴水之路是有意弃绝旧我的一步。船承载过渡，并不送达终点。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 过渡之器，状态之间的封闭空间。',
            why: '此卡明确把船与出行工具分开。它既非往返航程，也非已渡者的船。',
          },
          difficulty_rationale:
            '主旨：船是仪式之器。可见的水诱人把它读成交通工具。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何一人远望，另一人已戴上盔？',
          options: [
            {
              id: 'A',
              text: '一人引领，另一人只是跟随',
            },
            {
              id: 'B',
              text: '盔是防水，目光是畏惧深渊',
            },
            {
              id: 'C',
              text: '一人仍在寻，一人已经受——这正是道的本质',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 寻求与领受的差别，才是道的核心。',
            detail:
              '水并不总是可见：有时只是一道门槛。没有准备就会失去自己；自觉而行，才得理解。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 一人寻，一人已受；道的本质由此展开。',
            why: '这不是「首领与跟随者」的配对，也不是寻常的防水。盔像是对即将来临者之本性的防护。',
          },
          difficulty_rationale:
            '两个人物的联结。易被压成舟中的等级，或字面的水具。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '当船触到边界时，发生什么？',
          options: [
            {
              id: 'A',
              text: '要紧的是向前，朝向彼岸',
            },
            {
              id: 'B',
              text: '变化自内心开始；无见证、无痕迹，后果不可逆',
            },
            {
              id: 'C',
              text: '人人归来——已不再属于旧世界',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 开始的不是向前迈进，而是内在的转变。',
            detail:
              '无见证的朝圣。并非人人归来；归来者已非全然旧我——目光里仍留着水。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 内在的变化：无见证、无痕迹、不可逆。',
            why: '此卡把向前推到次要。归来并不保证：「并非全部」，而不是「全部，只是变了」。',
          },
          difficulty_rationale:
            '陷阱：以彼岸为目的，并以「人人变样归来」。文本坚持内变与归来的不全。',
          needs_review: false,
        },
      ],
    },
  },
};
