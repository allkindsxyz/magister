import type { DeepDiveCard } from './types';

export const jackSpades: DeepDiveCard = {
  card_id: 'jack-spades',
  locales: {
    en: {
      card_title: 'Michael and the Chameleon',
      questions: [
        {
          level: 'Story',
          question: 'Where did his career begin?',
          options: [
            {
              id: 'A',
              text: 'With an adult solo career — there were no childhood performances',
            },
            {
              id: 'B',
              text: 'In childhood, as a member of the family group the Jackson 5',
            },
            {
              id: 'C',
              text: 'With directing music videos, which he reached before music',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he began in childhood, in the Jackson 5.',
            detail:
              'Even then voice and charisma stood out. The solo Thriller, Bad, and Dangerous are the next turn: pop, soul, funk and rock plus videos as full works.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the career began in childhood in the family group the Jackson 5.',
            why: 'Solo work and videos came later. The card sets the child’s stage and voice before the King of Pop.',
          },
          difficulty_rationale:
            'An opening fact. The adult myth overshadows the childhood start, though the text begins with it.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the card give him a chameleon?',
          options: [
            {
              id: 'A',
              text: 'The chameleon is camouflage: he dissolved to hide from the press',
            },
            {
              id: 'B',
              text: 'The chameleon is stillness: he froze in one stage makeup',
            },
            {
              id: 'C',
              text: 'The chameleon is a metaphor for a man who changed his appearance',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the chameleon is change of look, not hiding.',
            detail:
              '“King of Pop” here is not about camouflage. The pair holds a visible transformation — what is read from face and costume.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — it is a metaphor for a man who altered his appearance.',
            why: 'The chameleon is easy to read as camouflage from scandal or as a frozen image. The card speaks of change of look, not of disappearance.',
          },
          difficulty_rationale:
            'A direct thesis from the summary. The camouflage animal is a trap; in the text it is about replacing the face.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where, besides the stage, does the card fix this change?',
          options: [
            {
              id: 'A',
              text: 'Only in videos — in ordinary life he left appearance alone',
            },
            {
              id: 'B',
              text: 'In ordinary life: he experimented heavily with appearance outside performance looks',
            },
            {
              id: 'C',
              text: 'Only in the moonwalk — the body changed, the face did not',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the experiment ran in ordinary life too, not only in the image.',
            detail:
              'The moonwalk is the calling card of the dance. The card’s chameleon is wider: stage plus everyday face. Fame, scandals, and accusations make the fate contradictory beside world success.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he experimented with appearance in ordinary life as well.',
            why: 'The card separately adds everyday life to stage looks. Dance is a trademark, not the limit of the metaphor.',
          },
          difficulty_rationale:
            'The text’s last sentence. The chameleon is left in the wardrobe and you miss that the card extends it into daily life.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Майкл и хамелеон',
      questions: [
        {
          level: 'Story',
          question: 'С чего началась его карьера?',
          options: [
            {
              id: 'A',
              text: 'Со взрослой сольной карьеры — детских выступлений не было',
            },
            {
              id: 'B',
              text: 'С детства, как участника семейной группы Jackson 5',
            },
            {
              id: 'C',
              text: 'С режиссуры клипов, к которым он пришёл раньше музыки',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он начал в детстве, в Jackson 5.',
            detail:
              'Уже тогда выделялись голос и харизма. Сольные «Thriller», «Bad» и «Dangerous» — следующий виток: поп, соул, фанк и рок плюс клипы как полноценные произведения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — карьера началась в детстве в семейной группе Jackson 5.',
            why: 'Соло и клипы пришли позже. Карта ставит сцену и голос ребёнка раньше короля поп-музыки.',
          },
          difficulty_rationale:
            'Открывающий факт. Взрослый миф заслоняет детский старт, хотя текст начинается с него.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему карта даёт ему хамелеона?',
          options: [
            {
              id: 'A',
              text: 'Хамелеон — маскировка: он растворялся, чтобы скрыться от прессы',
            },
            {
              id: 'B',
              text: 'Хамелеон — неподвижность: он застыл в одном сценическом гриме',
            },
            {
              id: 'C',
              text: 'Хамелеон — метафора человека, который менял внешность',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — хамелеон про смену облика, не про прятки.',
            detail:
              '«Король поп-музыки» здесь не про камуфляж. Пара держит видимое превращение — то, что считывают с лица и костюма.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — это метафора человека, изменявшего свою внешность.',
            why: 'Хамелеона легко прочесть как маскировку от скандалов или как застывший образ. Карта говорит о перемене вида, не о исчезновении.',
          },
          difficulty_rationale:
            'Прямой тезис summary. Животное-маскировщик — ловушка; в тексте оно про замену лица.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Где, кроме сцены, карта фиксирует эту смену?',
          options: [
            {
              id: 'A',
              text: 'Только в клипах — в обыденности он не трогал внешность',
            },
            {
              id: 'B',
              text: 'В обыденности: он сильно экспериментировал со внешностью и вне образов',
            },
            {
              id: 'C',
              text: 'Только в «лунной походке» — тело менялось, лицо нет',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — эксперимент шёл и в обыденности, не только в образе.',
            detail:
              'Лунная походка — визитная карточка танца. Хамелеон карты шире: сцена плюс повседневное лицо. Слава, скандалы и обвинения делают судьбу противоречивой при мировом успехе.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он экспериментировал со внешностью и в обыденной жизни.',
            why: 'Карта отдельно добавляет повседневность к сценическим образам. Танец — марка, не предел метафоры.',
          },
          difficulty_rationale:
            'Последняя фраза текста. Хамелеона оставляют в костюмерной и пропускают, что карта продлевает его в быт.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Майкл і хамелеон',
      questions: [
        {
          level: 'Story',
          question: 'З чаго пачалася яго кар’ера?',
          options: [
            {
              id: 'A',
              text: 'З дарослай сольнай кар’еры — дзіцячых выступаў не было',
            },
            {
              id: 'B',
              text: 'З дзяцінства, як удзельніка сямейнай групы Jackson 5',
            },
            {
              id: 'C',
              text: 'З рэжысуры кліпаў, да якіх ён прыйшоў раней за музыку',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён пачаў у дзяцінстве, у Jackson 5.',
            detail:
              'Ужо тады вылучаліся голас і харызма. Сольныя «Thriller», «Bad» і «Dangerous» — наступны віток: поп, соул, фанк і рок плюс кліпы як паўнавартасныя творы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — кар’ера пачалася ў дзяцінстве ў сямейнай групе Jackson 5.',
            why: 'Сола і кліпы прыйшлі пазней. Карта ставіць сцэну і голас дзіцяці раней за караля поп-музыкі.',
          },
          difficulty_rationale:
            'Адкрывальны факт. Дарослы міф засланяе дзіцячы старт, хоць тэкст пачынаецца з яго.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму карта дае яму хамелеона?',
          options: [
            {
              id: 'A',
              text: 'Хамелеон — маскіроўка: ён раствараўся, каб схавацца ад прэсы',
            },
            {
              id: 'B',
              text: 'Хамелеон — нерухомасць: ён застыў у адным сцэнічным грыме',
            },
            {
              id: 'C',
              text: 'Хамелеон — метафара чалавека, які мяняў знешнасць',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — хамелеон пра змену аблічча, не пра хаванкі.',
            detail:
              '«Кароль поп-музыкі» тут не пра камуфляж. Пара трымае бачнае ператварэнне — тое, што счытваюць з твару і касцюма.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — гэта метафара чалавека, які змяняў сваю знешнасць.',
            why: 'Хамелеона лёгка прачытаць як маскіроўку ад скандалаў або як застылы вобраз. Карта кажа пра перамену выгляду, не пра знікненне.',
          },
          difficulty_rationale:
            'Прамы тэзіс summary. Жывёла-маскіроўшчык — пастка; у тэксце яна пра замену твару.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Дзе, акрамя сцэны, карта фіксуе гэтую змену?',
          options: [
            {
              id: 'A',
              text: 'Толькі ў кліпах — у штодзённасці ён не чапаў знешнасць',
            },
            {
              id: 'B',
              text: 'У штодзённасці: ён моцна эксперыментаваў са знешнасцю і па-за вобразамі',
            },
            {
              id: 'C',
              text: 'Толькі ў «месячнай хадзе» — цела мянялася, твар не',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — эксперымент ішоў і ў штодзённасці, не толькі ў вобразе.',
            detail:
              'Месячная хада — візітоўка танца. Хамелеон карты шырэйшы: сцэна плюс штодзённы твар. Слава, скандалы і абвінавачванні робяць лёс супярэчлівым пры сусветным поспеху.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён эксперыментаваў са знешнасцю і ў штодзённым жыцці.',
            why: 'Карта асобна дадае штодзённасць да сцэнічных вобразаў. Танец — марка, не мяжа метафары.',
          },
          difficulty_rationale:
            'Апошняя фраза тэксту. Хамелеона пакідаюць у касцюмернай і прапускаюць, што карта працягвае яго ў побыт.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '迈克尔与变色龙',
      questions: [
        {
          level: 'Story',
          question: '他的生涯从何处开始？',
          options: [
            {
              id: 'A',
              text: '从成人独唱生涯——没有童年演出',
            },
            {
              id: 'B',
              text: '从童年起，作为家庭组合 Jackson 5 成员',
            },
            {
              id: 'C',
              text: '从执导音乐录影带——他先于音乐走到这一步',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他始于童年，在 Jackson 5。',
            detail:
              '那时嗓音与魅力已脱颖而出。独唱的 Thriller、Bad 与 Dangerous 是下一环：流行、灵魂、放克与摇滚，加上作为完整作品的录影带。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 生涯始于童年家庭组合 Jackson 5。',
            why: '独唱与录影带来得更晚。卡片把孩童的舞台与嗓音放在流行之王之前。',
          },
          difficulty_rationale:
            '开篇事实。成人神话掩盖童年起点，尽管正文由此起笔。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片为何给他一条变色龙？',
          options: [
            {
              id: 'A',
              text: '变色龙是伪装：他隐没以躲避媒体',
            },
            {
              id: 'B',
              text: '变色龙是静止：他冻结在一种舞台妆容里',
            },
            {
              id: 'C',
              text: '变色龙是改变外貌之人的隐喻',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 变色龙是样貌之变，不是躲藏。',
            detail:
              '此处「流行之王」无关伪装。这一对守住可见的转化——从脸与衣装读出的东西。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 这是改变外貌之人的隐喻。',
            why: '变色龙易被读成躲避丑闻的伪装，或冻结的形象。卡片说的是样貌更替，不是消失。',
          },
          difficulty_rationale:
            '摘要的直接论点。伪装动物是陷阱；文中它关乎换脸。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '除了舞台，卡片还把这变化钉在何处？',
          options: [
            {
              id: 'A',
              text: '只在录影带里——日常他不动外貌',
            },
            {
              id: 'B',
              text: '在日常：他在表演形象之外也大力试验外貌',
            },
            {
              id: 'C',
              text: '只在太空步——身体变了，脸没有',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 试验也在日常进行，不只在形象里。',
            detail:
              '太空步是舞蹈名片。卡片的变色龙更宽：舞台加上日常的脸。名声、丑闻与指控使命运在世界成功旁显得矛盾。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他也在日常生活中试验外貌。',
            why: '卡片另把日常加到舞台形象上。舞蹈是商标，不是隐喻的边界。',
          },
          difficulty_rationale:
            '正文末句。变色龙被留在服装间，便错过卡片把它延入日常。',
          needs_review: false,
        },
      ],
    },
  },
};
