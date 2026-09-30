import type { DeepDiveCard } from './types';

export const sixHearts: DeepDiveCard = {
  card_id: '6-hearts',
  locales: {
    en: {
      card_title: 'Nymphs of the Water Element',
      questions: [
        {
          level: 'Story',
          question: 'How do limnads differ from Nereids and naiads?',
          options: [
            {
              id: 'A',
              text: 'They are spirits of lakes and still waters',
            },
            {
              id: 'B',
              text: 'They are daughters of Nereus and live in the salt sea',
            },
            {
              id: 'C',
              text: 'They are bound to rivers, brooks, and springs',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — limnads belong to lakes and the quiet surface.',
            detail:
              'All three are water nymphs — fluid nature in different forms. The sea is the Nereids. Fresh running water is the naiads.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — limnads: lakes and still waters.',
            why: 'Nereids — salt, Nereus, Poseidon. Naiads — rivers and springs. Limnads — the unmoving surface, not current and not wave.',
          },
          difficulty_rationale:
            'Three names on one card. The main confusion is which water belongs to whom.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why is the image of naiads warmer and closer to people than that of sea nymphs?',
          options: [
            {
              id: 'A',
              text: 'They accompany Poseidon and aid sailors',
            },
            {
              id: 'B',
              text: 'Their waters give life, quench thirst, and feed the land',
            },
            {
              id: 'C',
              text: 'They are spirits of the still surface and of reflection',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — fresh water feeds the human world.',
            detail:
              'Naiads are the current of life, renewal, fertility. The Nereids’ kindness to sailors is another closeness: the sea, not the field and not thirst.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — naiads’ waters give life, quench thirst, and feed the land.',
            why: 'Aid to sailors is a trait of the Nereids. Surface and reflection are limnads. “Warmer and more of the earth” the card fixes to fresh water.',
          },
          difficulty_rationale:
            'Nereids too are “kind to humans” — a trap. Need which closeness: thirst and land, not seamanship.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the limnads’ calm surface hide?',
          options: [
            {
              id: 'A',
              text: 'Poseidon’s trident and wave',
            },
            {
              id: 'B',
              text: 'The current that feeds the fields',
            },
            {
              id: 'C',
              text: 'A secret life under a deceptively quiet surface',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — stillness and contemplation; beneath them, a hidden depth.',
            detail:
              'A deceptively calm surface. Not the lord of the seas’ storm, not the naiads’ living current. Quiet above does not mean emptiness here.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a secret life under a deceptively calm surface.',
            why: 'Poseidon is the Nereids’ line. The field is the naiads’. Limnads are precisely about quiet above not meaning emptiness.',
          },
          difficulty_rationale:
            'A conclusion about limnē: not “just a lake,” but false stillness. Neighbouring nymphs offer their own elements instead.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Нимфы водной стихии',
      questions: [
        {
          level: 'Story',
          question: 'Чем лимнады отличаются от нереид и наяд?',
          options: [
            {
              id: 'A',
              text: 'Они духи озёр и спокойных водоёмов',
            },
            {
              id: 'B',
              text: 'Они дочери Нерея и живут в солёном море',
            },
            {
              id: 'C',
              text: 'Они связаны с реками, ручьями и источниками',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — лимнады принадлежат озёрам и тихой глади.',
            detail:
              'Все три — водные нимфы, текучая природа в разных проявлениях. Море — нереиды. Пресная текучая вода — наяды.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — лимнады: озёра и спокойные водоёмы.',
            why: 'Нереиды — соль, Нерей, Посейдон. Наяды — реки и ключи. Лимнады — неподвижная поверхность, не поток и не волна.',
          },
          difficulty_rationale:
            'Три имени на одной карте. Основная путаница — кто к какой воде.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему образ наяд теплее и ближе к людям, чем образ морских нимф?',
          options: [
            {
              id: 'A',
              text: 'Они сопровождают Посейдона и помогают морякам',
            },
            {
              id: 'B',
              text: 'Их воды дают жизнь, утоляют жажду и питают землю',
            },
            {
              id: 'C',
              text: 'Они духи неподвижной глади и отражения',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — пресная вода кормит человеческий мир.',
            detail:
              'Наяды — течение жизни, обновление, плодородие. Доброта нереид к морякам — другая близость: море, не пашня и не жажда.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — воды наяд дают жизнь, утоляют жажду и питают землю.',
            why: 'Помощь морякам — черта нереид. Гладь и отражение — лимнады. «Теплее и земнее» карта закрепляет за пресной водой.',
          },
          difficulty_rationale:
            'Нереиды тоже «благосклонны к людям» — ловушка. Нужно, какая именно близость: жажда и земля, не мореходство.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что скрывает спокойная поверхность лимнад?',
          options: [
            {
              id: 'A',
              text: 'Трезубец и волну Посейдона',
            },
            {
              id: 'B',
              text: 'Течение, которое питает пашни',
            },
            {
              id: 'C',
              text: 'Тайную жизнь под обманчиво тихой гладью',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — тишина и созерцание, под ними — скрытая глубина.',
            detail:
              'Обманчиво спокойная поверхность. Не буря владыки морей и не живой поток наяд. Покой сверху здесь не значит пустоту.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — тайную жизнь под обманчиво спокойной гладью.',
            why: 'Посейдон — линия нереид. Пашня — наяды. Лимнады как раз про то, что покой сверху не значит пустоту.',
          },
          difficulty_rationale:
            'Вывод про лимно: не «просто озеро», а ложная тишина. Соседние нимфы подставляют свои стихии.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Німфы воднай стыхіі',
      questions: [
        {
          level: 'Story',
          question: 'Чым лімнады адрозніваюцца ад нерэід і наяд?',
          options: [
            {
              id: 'A',
              text: 'Яны духі азёр і спакойных вадаёмаў',
            },
            {
              id: 'B',
              text: 'Яны дочкі Нерэя і жывуць у салёным моры',
            },
            {
              id: 'C',
              text: 'Яны звязаныя з рэкамі, ручаямі і крыніцамі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — лімнады належаць азёрам і ціхай гладзі.',
            detail:
              'Усе тры — водныя німфы, цякучая прырода ў розных праявах. Мора — нерэіды. Прэсная цякучая вада — наяды.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — лімнады: азёры і спакойныя вадаёмы.',
            why: 'Нерэіды — соль, Нерэй, Пасейдон. Наяды — рэкі і крыніцы. Лімнады — нерухомая паверхня, не паток і не хваля.',
          },
          difficulty_rationale:
            'Тры імёны на адной карце. Асноўная блытаніна — хто да якой вады.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму вобраз наяд цяплейшы і бліжэйшы да людзей, чым вобраз марскіх німфаў?',
          options: [
            {
              id: 'A',
              text: 'Яны суправаджаюць Пасейдона і дапамагаюць маракам',
            },
            {
              id: 'B',
              text: 'Іх воды даюць жыццё, уталяюць смагу і кормяць зямлю',
            },
            {
              id: 'C',
              text: 'Яны духі нерухомай гладзі і адбітка',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — прэсная вада корміць чалавечы свет.',
            detail:
              'Наяды — цячэнне жыцця, абнаўленне, ўрадлівасць. Дабрата нерэід да маракоў — іншая блізкасць: мора, не ралля і не смага.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — воды наяд даюць жыццё, уталяюць смагу і кормяць зямлю.',
            why: 'Дапамога маракам — рыса нерэід. Гладзь і адбітак — лімнады. «Цяплей і зямней» карта замацоўвае за прэснай вадой.',
          },
          difficulty_rationale:
            'Нерэіды таксама «прыхільныя да людзей» — пастка. Патрэбна, якая менавіта блізкасць: смага і зямля, не мараходства.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што хавае спакойная паверхня лімнад?',
          options: [
            {
              id: 'A',
              text: 'Трызубец і хвалю Пасейдона',
            },
            {
              id: 'B',
              text: 'Цячэнне, якое корміць раллі',
            },
            {
              id: 'C',
              text: 'Таемнае жыццё пад падманліва ціхай гладдзю',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — цішыня і сузіранне, пад імі — схаваная глыбіня.',
            detail:
              'Падманліва спакойная паверхня. Не бура ўладара мораў і не жывы паток наяд. Спакой зверху тут не значыць пустату.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — таемнае жыццё пад падманліва спакойнай гладдзю.',
            why: 'Пасейдон — лінія нерэід. Ралля — наяды. Лімнады якраз пра тое, што спакой зверху не значыць пустату.',
          },
          difficulty_rationale:
            'Выснова пра лімно: не «проста возера», а ілжывая цішыня. Сусіднія німфы падстаўляюць свае стыхіі.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '水元素的宁芙',
      questions: [
        {
          level: 'Story',
          question: '利姆纳德与涅瑞伊得、那伊阿得有何不同？',
          options: [
            {
              id: 'A',
              text: '她们是湖泊与静水的精灵',
            },
            {
              id: 'B',
              text: '她们是涅柔斯之女，居于咸海',
            },
            {
              id: 'C',
              text: '她们系于河流、溪流与泉源',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 利姆纳德属于湖泊与静面。',
            detail:
              '三者皆为水中宁芙——流动自然的不同形态。海属涅瑞伊得。奔流的淡水属那伊阿得。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 利姆纳德：湖泊与静水。',
            why: '涅瑞伊得——盐、涅柔斯、波塞冬。那伊阿得——河与泉。利姆纳德——不动的水面，既非流亦非浪。',
          },
          difficulty_rationale:
            '一卡三名。主要混淆在于谁属何种水。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何那伊阿得的形象比海中宁芙更温暖、更贴近人？',
          options: [
            {
              id: 'A',
              text: '她们伴随波塞冬并帮助水手',
            },
            {
              id: 'B',
              text: '她们的水给予生命、解渴并滋养土地',
            },
            {
              id: 'C',
              text: '她们是静面与倒影的精灵',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 淡水滋养人的世界。',
            detail:
              '那伊阿得是生命之流、更新与丰饶。涅瑞伊得对水手的善意是另一种亲近：海，而非田与渴。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 那伊阿得的水给予生命、解渴并滋养土地。',
            why: '助水手是涅瑞伊得的特质。水面与倒影是利姆纳德。卡把“更暖、更近尘世”钉在淡水上。',
          },
          difficulty_rationale:
            '涅瑞伊得也“对人友善”——陷阱。要分清何种亲近：渴与土地，不是航海。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '利姆纳德平静的水面下藏着什么？',
          options: [
            {
              id: 'A',
              text: '波塞冬的三叉戟与浪',
            },
            {
              id: 'B',
              text: '滋养田野的水流',
            },
            {
              id: 'C',
              text: '骗人般宁静表面下的隐秘生命',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 寂静与静观；其下是隐秘的深度。',
            detail:
              '骗人般平静的表面。不是海王的风暴，也不是那伊阿得的活流。此处上面的安静并不意味空虚。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 骗人般平静表面下的隐秘生命。',
            why: '波塞冬是涅瑞伊得一线。田野是那伊阿得。利姆纳德正是：上面安静不等于空虚。',
          },
          difficulty_rationale:
            '关于利姆涅的结论：不是“只是湖”，而是虚假的静。邻近宁芙会塞进各自的元素。',
          needs_review: false,
        },
      ],
    },
  },
};
