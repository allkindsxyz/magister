import type { DeepDiveCard } from './types';

export const tenDiamonds: DeepDiveCard = {
  card_id: '10-diamonds',
  locales: {
    en: {
      card_title: 'The Barrel-Bearer',
      questions: [
        {
          level: 'Story',
          question: 'Whom does he gather along the roads?',
          options: [
            {
              id: 'A',
              text: 'Sages who have already found the secret and are ready for the limit',
            },
            {
              id: 'B',
              text: 'Those who have lost face: will weakened, fate empty, meaning no longer sought',
            },
            {
              id: 'C',
              text: 'Those who must be returned from the roadside to former life',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he takes those who lost face, not those who already found.',
            detail:
              'Without surplus words he offers a path. Many cannot resist the emptiness and accept the inevitable.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — those whose will has weakened and who have stopped seeking meaning.',
            why: 'This is neither a gathering of ready sages nor a rescue service. The bearer finds people on the roadsides of life.',
          },
          difficulty_rationale:
            'Same barrel motif, different catch. Ready sages and “return to life” are neighboring misreadings.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What are the barrels?',
          options: [
            {
              id: 'A',
              text: 'A prison for those who lost their will',
            },
            {
              id: 'B',
              text: 'A passage: a closed space between worlds where former life dies out',
            },
            {
              id: 'C',
              text: 'A vessel storing the already transformed until they are returned to people',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the barrels are only passage, neither cage nor storehouse of the ready.',
            detail:
              'Within, names and images are erased; quiet waiting remains. The path ends where the roads of the living do not lead.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a closed space between worlds where former life dies out.',
            why: 'The card places transformation in a hidden world, not a return to people. Silence within is waiting, not a prison term.',
          },
          difficulty_rationale:
            'Barrels again read as captivity or as storage of the enlightened. Text: erased names and passage.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does belief advise if you meet him on the road?',
          options: [
            {
              id: 'A',
              text: 'Follow — he will lead to initiation at no cost',
            },
            {
              id: 'B',
              text: 'Do not linger too long nearby: the load may grow heavier by exactly one',
            },
            {
              id: 'C',
              text: 'Ask him to open the barrels: the living already wait inside',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — to linger nearby is to risk becoming the load.',
            detail:
              'He belongs to no single time and never stops for good. The mystery of truth there is an experience that cannot be explained.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — do not linger: his load may grow heavier by exactly one person.',
            why: 'Following him is not a safe entrance into initiation. The barrels do not open on request: within, former life dies out.',
          },
          difficulty_rationale:
            'The guide tempts being taken for a kindly shepherd. The card leaves a threat: you may become cargo.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Носильщик бочек',
      questions: [
        {
          level: 'Story',
          question: 'Кого он собирает по дорогам?',
          options: [
            {
              id: 'A',
              text: 'Мудрецов, уже нашедших тайну и готовых к пределу',
            },
            {
              id: 'B',
              text: 'Тех, кто утратил лицо: воля ослабла, судьба пуста, смысл больше не ищут',
            },
            {
              id: 'C',
              text: 'Тех, кого нужно вернуть с обочины в прежнюю жизнь',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он берёт потерявших лицо, не тех, кто уже нашёл.',
            detail:
              'Без лишних слов предлагает путь. Многие не в силах противиться пустоте и принимают неизбежное.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — тех, чья воля ослабла и кто перестал искать смысл.',
            why: 'Это не сбор готовых мудрецов и не спасательная служба. Носильщик находит людей на обочинах жизни.',
          },
          difficulty_rationale:
            'Тот же мотив бочек, другая добыча. Готовых мудрецов и «возврат к жизни» подставляют соседние чтения.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чем являются бочки?',
          options: [
            {
              id: 'A',
              text: 'Тюрьмой для потерявших волю',
            },
            {
              id: 'B',
              text: 'Переходом: замкнутым пространством между мирами, где гаснет прежняя жизнь',
            },
            {
              id: 'C',
              text: 'Сосудом, где хранят уже преображённых, пока не вернут их людям',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — бочки лишь переход, не клетка и не склад готовых.',
            detail:
              'Внутри стираются имена и образы, остаётся тихое ожидание. Путь кончается там, куда не ведут дороги живых.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — замкнутое пространство между мирами, где гаснет прежняя жизнь.',
            why: 'Преображение карта ставит в сокрытый мир, не в возврат к людям. Тишина внутри — ожидание, не срок заключения.',
          },
          difficulty_rationale:
            'Бочки снова читаются как плен или как хранение просветлённых. Текст: стёртые имена и переход.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что советует поверье, если встретить его на дороге?',
          options: [
            {
              id: 'A',
              text: 'Пойти следом — он выведет к посвящению без цены',
            },
            {
              id: 'B',
              text: 'Не задерживаться рядом слишком долго: ноша может стать тяжелее ровно на одного',
            },
            {
              id: 'C',
              text: 'Попросить открыть бочки: внутри уже ждут живые',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — задержаться рядом значит рисковать стать ношей.',
            detail:
              'Он не принадлежит ни одному времени и не останавливается окончательно. Таинство истины там — переживанием, которое нельзя объяснить.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — не задерживаться: его ноша может стать тяжелее ровно на одного человека.',
            why: 'Следовать за ним — не безопасный вход в посвящение. Бочки не открывают по просьбе: внутри гаснет прежняя жизнь.',
          },
          difficulty_rationale:
            'Проводника тянет принять за доброго гида. Карта оставляет угрозу: ты можешь стать грузом.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Носьбіт бочак',
      questions: [
        {
          level: 'Story',
          question: 'Каго ён збірае па дарогах?',
          options: [
            {
              id: 'A',
              text: 'Мудрэцаў, ужо знайшоўшых таямніцу і гатовых да мяжы',
            },
            {
              id: 'B',
              text: 'Тых, хто страціў твар: воля аслабла, лёс пусты, сэнс больш не шукаюць',
            },
            {
              id: 'C',
              text: 'Тых, каго трэба вярнуць з абочыны ў былое жыццё',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён бярэ тых, хто страціў твар, не тых, хто ўжо знайшоў.',
            detail:
              'Без лішніх слоў прапануе шлях. Многія не ў сілах супрацівіцца пустаце і прымаюць непазбежнае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — тых, чыя воля аслабла і хто перастаў шукаць сэнс.',
            why: 'Гэта не збор гатовых мудрэцаў і не ратавальная служба. Носьбіт знаходзіць людзей на абочынах жыцця.',
          },
          difficulty_rationale:
            'Той жа матыў бочак, іншая здабыча. Гатовых мудрэцаў і «вяртанне да жыцця» падстаўляюць суседнія чытанні.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чым з\'яўляюцца бочкі?',
          options: [
            {
              id: 'A',
              text: 'Цурмой для тых, хто страціў волю',
            },
            {
              id: 'B',
              text: 'Пераходам: замкнёнай прасторай паміж светамі, дзе гасне былое жыццё',
            },
            {
              id: 'C',
              text: 'Пасудзінай, дзе захоўваюць ужо ператвораных, пакуль не вернуць іх людзям',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — бочкі толькі пераход, не клетка і не склад гатовых.',
            detail:
              'Унутры сціраюцца імёны і вобразы, застаецца ціхае чаканне. Шлях канчаецца там, куды не вядуць дарогі жывых.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — замкнёная прастора паміж светамі, дзе гасне былое жыццё.',
            why: 'Ператварэнне карта ставіць у сакрыты свет, не ў вяртанне да людзей. Цішыня ўнутры — чаканне, не тэрмін зняволення.',
          },
          difficulty_rationale:
            'Бочкі зноў чытаюцца як палон ці як захоўванне прасветленых. Тэкст: сцёртыя імёны і пераход.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што раіць павер\'е, калі сустрэць яго на дарозе?',
          options: [
            {
              id: 'A',
              text: 'Пайсці следам — ён выведзе да пасвячэння без цаны',
            },
            {
              id: 'B',
              text: 'Не затрымлівацца побач занадта доўга: ноша можа стаць цяжэйшай роўна на аднаго',
            },
            {
              id: 'C',
              text: 'Папрасіць адкрыць бочкі: унутры ўжо чакаюць жывыя',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — затрымацца побач значыць рызыкаваць стаць ношай.',
            detail:
              'Ён не належыць ніводнаму часу і не спыняецца канчаткова. Таемства ісціны там — перажываннем, якое нельга растлумачыць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — не затрымлівацца: яго ноша можа стаць цяжэйшай роўна на аднаго чалавека.',
            why: 'Ісці за ім — не бяспечны ўваход у пасвячэнне. Бочкі не адкрываюць па просьбе: унутры гасне былое жыццё.',
          },
          difficulty_rationale:
            'Правадніка цягне прыняць за добрага гіда. Карта пакідае пагрозу: ты можаш стаць грузам.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '挑桶人',
      questions: [
        {
          level: 'Story',
          question: '他沿路收聚的是谁？',
          options: [
            {
              id: 'A',
              text: '已经寻得秘密、准备面对界限的智者',
            },
            {
              id: 'B',
              text: '失了脸面的人：意志衰弱，命运空虚，不再寻意义',
            },
            {
              id: 'C',
              text: '须从路边送回旧日生活的人',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他收的是失了脸面的人，不是已经寻得的人。',
            detail:
              '不多言语，只提出一条路。许多人无力抗拒空虚，便接受必然。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 意志已衰、不再寻意义的人。',
            why: '这既非聚起准备好的智者，也非救援服务。挑桶人在人生的路边找到人。',
          },
          difficulty_rationale:
            '同样是桶的母题，捕获不同。准备好的智者与「送回生活」是邻近的误读。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '桶是什么？',
          options: [
            {
              id: 'A',
              text: '失意志者的牢狱',
            },
            {
              id: 'B',
              text: '过渡：世界之间的封闭空间，旧日生命在其中熄灭',
            },
            {
              id: 'C',
              text: '存放已转化者、直到把他们还给人的容器',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 桶只是过渡，既非笼子，也非现成者的仓库。',
            detail:
              '里面名字与形象被抹去，只剩安静的等待。路止于生者的道路所不通之处。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 世界之间的封闭空间，旧日生命在其中熄灭。',
            why: '此卡把转化置于隐秘世界，而非归还于人。内中的静默是等待，不是刑期。',
          },
          difficulty_rationale:
            '桶再次被读成囚禁，或开悟者的仓储。文本：被抹去的名字与过渡。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '若在路上遇见他，信仰建议什么？',
          options: [
            {
              id: 'A',
              text: '跟随——他会无偿引向入会',
            },
            {
              id: 'B',
              text: '不要在近旁逗留太久：负荷可能正好加重一人',
            },
            {
              id: 'C',
              text: '请求打开桶：里面已有活人在等待',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在近旁逗留，就是冒成为负荷的风险。',
            detail:
              '他不属于任何一个时代，也永不止步。那里真理的奥秘是无法解释的体验。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 不要逗留：他的负荷可能正好加重一个人。',
            why: '跟随他并非安全的入会入口。桶不会应请求打开：里面旧日生命在熄灭。',
          },
          difficulty_rationale:
            '向导诱人被当成善意牧者。此卡留下威胁：你可能成为货物。',
          needs_review: false,
        },
      ],
    },
  },
};
