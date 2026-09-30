import type { DeepDiveCard } from './types';

export const aceSpades: DeepDiveCard = {
  card_id: 'ace-spades',
  locales: {
    en: {
      card_title: 'Albert Runs at the Speed of a Turtle',
      questions: [
        {
          level: 'Story',
          question: 'Where did Einstein begin his scientific career?',
          options: [
            {
              id: 'A',
              text: 'At the university where he was educated',
            },
            {
              id: 'B',
              text: 'In the United States, where he spent his final years',
            },
            {
              id: 'C',
              text: 'In a patent office, working through other people’s inventions',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the career began in a patent office.',
            detail:
              'He was educated in Switzerland, but developed his ideas beside other people’s inventions. The United States is the end of the road, not the start.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — in a patent office.',
            why: 'Switzerland in the card is about education. The United States is about his last years. He began as a scientist by dissecting other people’s inventions.',
          },
          difficulty_rationale:
            'A cornerstone biographical fact. All three options come from the same card, so common sense alone cannot discard the extras.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the card compare Einstein to a turtle?',
          options: [
            {
              id: 'A',
              text: 'The turtle is an image of the world’s foundation; modern physics stands on him',
            },
            {
              id: 'B',
              text: 'He reached his discoveries slowly, like a turtle',
            },
            {
              id: 'C',
              text: 'He withdrew from people and lived in solitude like a hermit',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the turtle here is foundation, not slowness.',
            detail:
              'In the short description the turtle is the base and beginning of the universe. The title’s “turtle speed” invites the wrong reading. The card means the support of the physical world.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the turtle as the world’s foundation: modern physics stands on Einstein.',
            why: 'The card’s title tempts you to read the metaphor as slowness. Magister takes another sense: in many cultures the universe rests on a turtle.',
          },
          difficulty_rationale:
            'A link across title + summary + the end of the description. The card title is a deliberate trap. That is the point of the celebrity suit in Magister.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What did Einstein receive the Nobel Prize for?',
          options: [
            {
              id: 'A',
              text: 'For the special theory of relativity',
            },
            {
              id: 'B',
              text: 'For explaining the photoelectric effect',
            },
            {
              id: 'C',
              text: 'For the formula E=mc²',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — for explaining the photoelectric effect, in 1921.',
            detail:
              'Relativity and E=mc² belong to the “miracle year” of 1905. The card does not pin the Nobel to them. The name became a synonym for genius apart from the prize’s wording.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — for explaining the photoelectric effect.',
            why: 'All three stand in one paragraph — and that is the trap. Relativity and the formula remade physics in 1905; the 1921 prize, on the card, is for the photoelectric effect.',
          },
          difficulty_rationale:
            'A classic detail people conflate with relativity. All three options come from the card text; only one is correct.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Альберт бежит со скоростью черепахи',
      questions: [
        {
          level: 'Story',
          question: 'Где Эйнштейн начал научную карьеру?',
          options: [
            {
              id: 'A',
              text: 'В университете, где получил образование',
            },
            {
              id: 'B',
              text: 'В США, где провёл последние годы',
            },
            {
              id: 'C',
              text: 'В патентном бюро, работая над чужими изобретениями',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — карьера началась в патентном бюро.',
            detail:
              'Образование он получил в Швейцарии, но свои идеи развивал параллельно с чужими изобретениями. США — уже конец пути, не начало.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — в патентном бюро.',
            why: 'Швейцария в карте — про образование. США — про последние годы. Научную карьеру он начал, разбирая чужие изобретения.',
          },
          difficulty_rationale:
            'Опорный факт биографии. Три варианта взяты из той же карты, чтобы нельзя было отсечь «лишнее» по здравому смыслу.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему карта сравнивает Эйнштейна с черепахой?',
          options: [
            {
              id: 'A',
              text: 'Черепаха — образ основания мира; на нём стоит современная физика',
            },
            {
              id: 'B',
              text: 'Он шёл к открытиям медленно, как черепаха',
            },
            {
              id: 'C',
              text: 'Он ушёл от людей и жил в уединении как отшельник',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — черепаха здесь про основание, не про медлительность.',
            detail:
              'В коротком описании черепаха — фундамент и начало вселенной. Название про «скорость черепахи» подсказывает неверный вывод. Карта имеет в виду опору мира физики.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — черепаха как основание мира: на Эйнштейне стоит современная физика.',
            why: 'Название карты провоцирует прочитать метафору как медлительность. Magister берёт другой смысл: во многих культурах на черепахе стоит вселенная.',
          },
          difficulty_rationale:
            'Связка title + summary + финал description. Название карты — намеренная ловушка. Это и есть смысл масти знаменитостей в Magister.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'За что Эйнштейн получил Нобелевскую премию?',
          options: [
            {
              id: 'A',
              text: 'За специальную теорию относительности',
            },
            {
              id: 'B',
              text: 'За объяснение фотоэффекта',
            },
            {
              id: 'C',
              text: 'За формулу E=mc²',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — за объяснение фотоэффекта, в 1921 году.',
            detail:
              'Относительность и E=mc² — из «года чудес» 1905-го. Нобелевку карта закрепляет не за них. Имя стало синонимом гениальности отдельно от формулировки премии.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — за объяснение фотоэффекта.',
            why: 'Все три вещи стоят в одном абзаце, и это ловушка. Относительность и формула изменили физику в 1905-м; премию 1921 года карта даёт за фотоэффект.',
          },
          difficulty_rationale:
            'Классическая деталь, которую смешивают с относительностью. Все три варианта — из текста карты, правильный только один.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Альберт бяжыць са хуткасцю чарапахі',
      questions: [
        {
          level: 'Story',
          question: 'Дзе Эйнштэйн пачаў навуковую кар’еру?',
          options: [
            {
              id: 'A',
              text: 'У універсітэце, дзе атрымаў адукацыю',
            },
            {
              id: 'B',
              text: 'У ЗША, дзе правёў апошнія гады',
            },
            {
              id: 'C',
              text: 'У патэнтным бюро, працуючы над чужымі вынаходніцтвамі',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — кар’ера пачалася ў патэнтным бюро.',
            detail:
              'Адукацыю ён атрымаў у Швейцарыі, але свае ідэі развіваў паралельна з чужымі вынаходніцтвамі. ЗША — ужо канец шляху, не пачатак.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — у патэнтным бюро.',
            why: 'Швейцарыя ў карце — пра адукацыю. ЗША — пра апошнія гады. Навуковую кар’еру ён пачаў, разбіраючы чужыя вынаходніцтвы.',
          },
          difficulty_rationale:
            'Апорны факт біяграфіі. Тры варыянты ўзятыя з той жа карты, каб нельга было адсекчы «лішняе» па здаровым сэнсе.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму карта параўноўвае Эйнштэйна з чарапахай?',
          options: [
            {
              id: 'A',
              text: 'Чарапаха — вобраз падмурка свету; на ім стаіць сучасная фізіка',
            },
            {
              id: 'B',
              text: 'Ён ішоў да адкрыццяў павольна, як чарапаха',
            },
            {
              id: 'C',
              text: 'Ён адышоў ад людзей і жыў у адасабленні як адшэльнік',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — чарапаха тут пра падмурак, не пра павольнасць.',
            detail:
              'У кароткім апісанні чарапаха — фундамент і пачатак сусвету. Назва пра «хуткасць чарапахі» падказвае няверны вывад. Карта мае на ўвазе апору свету фізікі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — чарапаха як падмурак свету: на Эйнштэйне стаіць сучасная фізіка.',
            why: 'Назва карты правакуе прачытаць метафару як павольнасць. Magister бярэ іншы сэнс: у многіх культурах на чарапасе стаіць сусвет.',
          },
          difficulty_rationale:
            'Звязка title + summary + фінал description. Назва карты — наўмысная пастка. Гэта і ёсць сэнс масці знакамітасцей у Magister.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'За што Эйнштэйн атрымаў Нобелеўскую прэмію?',
          options: [
            {
              id: 'A',
              text: 'За спецыяльную тэорыю адноснасці',
            },
            {
              id: 'B',
              text: 'За тлумачэнне фотаэфекту',
            },
            {
              id: 'C',
              text: 'За формулу E=mc²',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — за тлумачэнне фотаэфекту, у 1921 годзе.',
            detail:
              'Адноснасць і E=mc² — з «года цудаў» 1905-га. Нобелеўку карта замацоўвае не за іх. Імя стала сінонімам геніяльнасці асобна ад фармулёўкі прэміі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — за тлумачэнне фотаэфекту.',
            why: 'Усе тры рэчы стаяць у адным абзацы, і гэта пастка. Адноснасць і формула змянілі фізіку ў 1905-м; прэмію 1921 года карта дае за фотаэфект.',
          },
          difficulty_rationale:
            'Класічная дэталь, якую змешваюць з адноснасцю. Усе тры варыянты — з тэксту карты, правільны толькі адзін.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '阿尔伯特以乌龟的速度奔跑',
      questions: [
        {
          level: 'Story',
          question: '爱因斯坦的科学生涯从何处开始？',
          options: [
            {
              id: 'A',
              text: '在他受教育的大学',
            },
            {
              id: 'B',
              text: '在他度过晚年的美国',
            },
            {
              id: 'C',
              text: '在专利局，处理他人的发明',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 生涯始于专利局。',
            detail:
              '他在瑞士受教育，却在他人的发明旁发展自己的思想。美国是终点，不是起点。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在专利局。',
            why: '卡片中的瑞士关乎教育。美国关乎晚年。他以剖析他人发明开始科学家之路。',
          },
          difficulty_rationale:
            '传记基石事实。三个选项同出一卡，单靠常识无法排除多余项。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片为何把爱因斯坦比作乌龟？',
          options: [
            {
              id: 'A',
              text: '乌龟是世界根基的意象；现代物理立于其上',
            },
            {
              id: 'B',
              text: '他像乌龟一样缓慢抵达发现',
            },
            {
              id: 'C',
              text: '他离群索居，如隐士般独处',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处乌龟意指根基，而非缓慢。',
            detail:
              '短述中乌龟是宇宙的基座与开端。标题的「乌龟速度」诱导向错误解读。卡片意指物理世界的支撑。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 乌龟作为世界根基：现代物理立于爱因斯坦之上。',
            why: '标题诱使把隐喻读成缓慢。Magister 取另一义：许多文化中宇宙立于龟背。',
          },
          difficulty_rationale:
            '串联 title + summary + 描述收尾。卡名是刻意陷阱。这正是名人花色在 Magister 中的用意。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '爱因斯坦因何获得诺贝尔奖？',
          options: [
            {
              id: 'A',
              text: '因狭义相对论',
            },
            {
              id: 'B',
              text: '因解释光电效应',
            },
            {
              id: 'C',
              text: '因公式 E=mc²',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 因解释光电效应，于一九二一年。',
            detail:
              '相对论与 E=mc² 出自一九〇五年「奇迹年」。卡片把诺奖钉在别处。名字成为天才同义词，与奖项表述无关。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 因解释光电效应。',
            why: '三者同处一段——正是陷阱。相对论与公式在一九〇五年重塑物理；一九二一年的奖，卡片归于光电效应。',
          },
          difficulty_rationale:
            '常与相对论混为一谈的经典细节。三选项皆出卡文，唯一对。',
          needs_review: false,
        },
      ],
    },
  },
};
