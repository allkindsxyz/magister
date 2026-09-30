import type { DeepDiveCard } from './types';

export const aceDiamonds: DeepDiveCard = {
  card_id: 'ace-diamonds',
  locales: {
    en: {
      card_title: 'The Light-Bearer',
      questions: [
        {
          level: 'Story',
          question: 'Why does he wander with a lit lantern in broad daylight?',
          options: [
            {
              id: 'A',
              text: 'He is searching for a true, honest, virtuous man',
            },
            {
              id: 'B',
              text: 'He gathers disciples to whom he will pass on a teaching',
            },
            {
              id: 'C',
              text: 'He carries fire as a gift to those still in darkness',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he seeks a man, and the light shows that none is to be found.',
            detail:
              'The mockery hides a bleak conclusion: even by day, with a lamp, the virtuous cannot be found. He led no disciples, and the card does not cast him as a giver of light.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he seeks a true man and sheds light on the fact that none exists.',
            why: 'He had no writings, no pupils, no property. The lantern is a gesture of truth, not a mission to hand out fire.',
          },
          difficulty_rationale:
            'Function of the gesture, not biography. “Light-Bearer” is easy to read as teaching or gift.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why is he a bearer of secret though he hides nothing?',
          options: [
            {
              id: 'A',
              text: 'The secret is in plain sight: happiness is simple — yet they never understood him',
            },
            {
              id: 'B',
              text: 'He hid the teaching in a barrel so power could not find it',
            },
            {
              id: 'C',
              text: 'He opened the secret only to a conqueror and refused everyone else',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he did not even need to conceal it.',
            detail:
              'His whole bearing says: happiness is simple. Being misunderstood is the price of that openness, not proof that the secret is locked away.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the secret is in plain sight: happiness is simple, but they did not understand him.',
            why: 'The barrel is not a vault for doctrine. The meeting with the conqueror is about the sun and refusal of desire — not handing a secret to the chosen.',
          },
          difficulty_rationale:
            'The bearer’s formula: he does not hide, he shows. Barrel and emperor-legend suggest the opposite.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'How does the card read life in a barrel and refusal of property?',
          options: [
            {
              id: 'A',
              text: 'As poverty the sage is forced to endure',
            },
            {
              id: 'B',
              text: 'As protest: happiness is freedom from desire, wealth, and norms',
            },
            {
              id: 'C',
              text: 'As a hiding place in which he keeps the secret from people',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it is protest against luxury, power, and hypocrisy.',
            detail:
              'Radical simplicity is a method, not a misfortune. The barrel carries its own shelter; it does not hide a teaching.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — philosophical protest: happiness through freedom from desire and convention.',
            why: 'The card does not pity him as a beggar and does not make the barrel a cache. The way of life is the statement.',
          },
          difficulty_rationale:
            'Easy to take the barrel for a cell or a vault. The text insists on freedom from desire as a method of happiness.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Несущий свет',
      questions: [
        {
          level: 'Story',
          question: 'Зачем он бродит с горящим фонарём средь бела дня?',
          options: [
            {
              id: 'A',
              text: 'Ищет настоящего, честного, добродетельного человека',
            },
            {
              id: 'B',
              text: 'Собирает учеников, которым передаст учение',
            },
            {
              id: 'C',
              text: 'Несёт огонь как дар тем, кто ещё во тьме',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он ищет человека и светом показывает, что того не сыскать.',
            detail:
              'Насмешка скрывает грустный вывод: добродетельного не найти и днём с огнём. Учеников он не вёл, а «дар света» карта ему не приписывает.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — ищет настоящего человека и проливает свет на то, что его нет.',
            why: 'Произведений, учеников и имущества у него не было. Фонарь — жест истины, а не миссия раздавать огонь.',
          },
          difficulty_rationale:
            'Функция жеста, не биография. «Несущий свет» легко прочитать как учительство или дар.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему он носитель тайны, хотя ничего не прячет?',
          options: [
            {
              id: 'A',
              text: 'Тайна у него на виду: быть счастливым просто — но его так и не поняли',
            },
            {
              id: 'B',
              text: 'Он спрятал учение в бочке, чтобы власть его не нашла',
            },
            {
              id: 'C',
              text: 'Он открыл тайну только завоевателю, остальным отказал',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — ему даже не нужно было её скрывать.',
            detail:
              'Весь вид говорит: счастье просто. Непонятость — цена этой открытости, а не доказательство, что тайна заперта.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — тайна на виду: счастье просто, но его не поняли.',
            why: 'Бочка — не сейф учения. Встреча с завоевателем — про солнце и отказ от желаний, не про передачу тайны избранному.',
          },
          difficulty_rationale:
            'Формула носителя: не прячет, а показывает. Бочка и легенда с императором подсказывают обратное.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Как карта читает жизнь в бочке и отказ от имущества?',
          options: [
            {
              id: 'A',
              text: 'Как нищету, которую мудрец вынужден терпеть',
            },
            {
              id: 'B',
              text: 'Как протест: счастье — свобода от желаний, богатства и норм',
            },
            {
              id: 'C',
              text: 'Как укрытие, в котором он скрывает тайну от людей',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это протест против роскоши, власти и лицемерия.',
            detail:
              'Радикальная простота — метод, не бедствие. Бочка несёт собственное укрытие, а не прячет учение.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — философский протест: счастье через свободу от желаний и условностей.',
            why: 'Карта не жалеет его как нищего и не делает бочку тайником. Образ жизни и есть высказывание.',
          },
          difficulty_rationale:
            'Бочку легко принять за камеру или сейф. Текст настаивает на свободе от желаний как методе счастья.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: '«Той, хто нясе святло»',
      questions: [
        {
          level: 'Story',
          question: 'Навошта ён блукае з гарачым ліхтаром сярод белага дня?',
          options: [
            {
              id: 'A',
              text: 'Шукае сапраўднага, сумленнага, дабрадзейнага чалавека',
            },
            {
              id: 'B',
              text: 'Збірае вучняў, якім перадасць вучэнне',
            },
            {
              id: 'C',
              text: 'Нясе агонь як дар тым, хто яшчэ ў цемры',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён шукае чалавека і святлом паказвае, што таго не сысці.',
            detail:
              'Насмешка хавае сумны вывад: дабрадзейнага не знайсці і днём з агнём. Вучняў ён не вёў, а «дар святла» карта яму не прыпісвае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — шукае сапраўднага чалавека і пралівае святло на тое, што яго няма.',
            why: 'Твораў, вучняў і маёмасці ў яго не было. Ліхтар — жэст ісціны, а не місія раздаваць агонь.',
          },
          difficulty_rationale:
            'Функцыя жэсту, не біяграфія. «Той, хто нясе святло» лёгка прачытаць як настаўніцтва ці дар.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму ён носьбіт таямніцы, хоць нічога не хавае?',
          options: [
            {
              id: 'A',
              text: 'Таямніца ў яго навіду: быць шчаслівым проста — але яго так і не зразумелі',
            },
            {
              id: 'B',
              text: 'Ён схаваў вучэнне ў бочцы, каб улада яго не знайшла',
            },
            {
              id: 'C',
              text: 'Ён адкрыў таямніцу толькі заваёўніку, астатнім адмовіў',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яму нават не трэба было яе хаваць.',
            detail:
              'Увесь выгляд кажа: шчасце проста. Незразумеласць — цана гэтай адкрытасці, а не доказ, што таямніца замыканая.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — таямніца навіду: шчасце проста, але яго не зразумелі.',
            why: 'Бочка — не сейф вучэння. Сустрэча з заваёўнікам — пра сонца і адмову ад жаданняў, не пра перадачу таямніцы абранаму.',
          },
          difficulty_rationale:
            'Формула носьбіта: не хавае, а паказвае. Бочка і легенда з імператарам падказваюць адваротнае.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Як карта чытае жыццё ў бочцы і адмову ад маёмасці?',
          options: [
            {
              id: 'A',
              text: 'Як галечу, якую мудрэц вымушаны цярпець',
            },
            {
              id: 'B',
              text: 'Як пратэст: шчасце — свабода ад жаданняў, багацця і нормаў',
            },
            {
              id: 'C',
              text: 'Як сховішча, у якім ён хавае таямніцу ад людзей',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта пратэст супраць раскошы, улады і крывадушнасці.',
            detail:
              'Радыкальная прастата — метад, не бедства. Бочка нясе ўласнае сховішча, а не хавае вучэнне.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — філасофскі пратэст: шчасце праз свабоду ад жаданняў і ўмоўнасцяў.',
            why: 'Карта не шкадуе яго як жабрака і не робіць бочку тайніком. Лад жыцця і ёсць выказванне.',
          },
          difficulty_rationale:
            'Бочку лёгка прыняць за камеру ці сейф. Тэкст настойвае на свабодзе ад жаданняў як метадзе шчасця.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '“持光者”',
      questions: [
        {
          level: 'Story',
          question: '他为何白日提着明灯游荡？',
          options: [
            {
              id: 'A',
              text: '寻找真正正直有德的人',
            },
            {
              id: 'B',
              text: '招集门徒，好把教诲传下去',
            },
            {
              id: 'C',
              text: '把火当作礼物，带给仍在黑暗中的人',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他在寻人，灯火正显出无人可寻。',
            detail:
              '嘲讽底下是黯淡的结论：即便白日持灯，也找不到有德之人。他不收门徒，此卡亦不把他写成施光者。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他寻的是真人，并以光显明其人并不存在。',
            why: '他无著述、无生徒、无产业。灯是真理之姿，不是散火的使命。',
          },
          difficulty_rationale:
            '问的是姿态的功能，不是传记。「持光者」易被读成授业或赠予。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '他什么也不藏，为何仍是秘密的承载者？',
          options: [
            {
              id: 'A',
              text: '秘密就在眼前：幸福本简单——人们却从未懂他',
            },
            {
              id: 'B',
              text: '他把教诲藏进桶里，好让权力找不到',
            },
            {
              id: 'C',
              text: '他只向征服者开示秘密，其余一概拒绝',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他甚至不必去隐瞒。',
            detail:
              '他的整个姿态在说：幸福很简单。不被理解是这份敞开的代价，并非证明秘密被锁死。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 秘密就在眼前：幸福本简单，只是他们不懂他。',
            why: '桶不是教义的保险柜。与征服者的相见关乎阳光与对欲望的拒绝——不是把秘密交给选中的人。',
          },
          difficulty_rationale:
            '承载者的公式：不藏，而显。桶与帝王传说却暗示相反。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '此卡如何解读桶中生活与弃绝财产？',
          options: [
            {
              id: 'A',
              text: '视为智者被迫忍受的贫困',
            },
            {
              id: 'B',
              text: '视为抗议：幸福是摆脱欲望、财富与规范',
            },
            {
              id: 'C',
              text: '视为藏身之所，用以向人隐瞒秘密',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 这是对奢华、权势与伪善的抗议。',
            detail:
              '彻底的简朴是方法，不是厄运。桶自带栖身之所，并不藏匿教诲。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 哲学上的抗议：幸福来自摆脱欲望与俗规。',
            why: '此卡不怜悯他如乞丐，也不把桶写成密室。生活方式本身即是陈述。',
          },
          difficulty_rationale:
            '桶易被当成牢房或保险柜。文本坚持：摆脱欲望才是幸福之法。',
          needs_review: false,
        },
      ],
    },
  },
};
