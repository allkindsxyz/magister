import type { DeepDiveCard } from './types';

export const fourSpades: DeepDiveCard = {
  card_id: '4-spades',
  locales: {
    en: {
      card_title: 'Adolf and Joseph. An Aerial Battle',
      questions: [
        {
          level: 'Story',
          question: 'What was the 1939 pact in fact?',
          options: [
            {
              id: 'A',
              text: 'A firm alliance that dissolved the ideological contradiction',
            },
            {
              id: 'B',
              text: 'A temporary agreement masking the confrontation of two regimes',
            },
            {
              id: 'C',
              text: 'The end of conflict: no war was planned after it',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the pact was temporary and cloaked hostility.',
            detail:
              'In 1941 Germany launched Barbarossa. The first stage struck the USSR: a threat to key cities, including Moscow. The agreement did not cancel a clash of systems.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the pact was temporary and hid the confrontation of regimes.',
            why: 'Neither alliance nor finale. The card says outright: behind the treaty stood a deep ideological and geopolitical collision.',
          },
          difficulty_rationale:
            'The plot’s opening. The pact is easy to take for real peace between the two figures on the picture.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the card give them a sparrow?',
          options: [
            {
              id: 'A',
              text: 'In some cultures the sparrow means brawling and greed',
            },
            {
              id: 'B',
              text: 'The sparrow is weakness: both looked small on the world stage',
            },
            {
              id: 'C',
              text: 'The sparrow is domestic peace they tried to preserve',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the sparrow here is fight and greed, not smallness.',
            detail:
              'Two figures meet as scrappers, not as crumbs. Further on the card unfolds not a bird-yard quarrel but a struggle of two systems.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the sparrow symbolizes brawling and greed.',
            why: 'The card does not shrink them or cast them as keepers of the nest. The bird names the character of the clash — not the scale of bodies.',
          },
          difficulty_rationale:
            'A summary formula. A small bird tempts you to read the pair as nullity, not as temperament.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the card mean by an aerial battle?',
          options: [
            {
              id: 'A',
              text: 'A war of aviation that decided the whole conflict',
            },
            {
              id: 'B',
              text: 'A scrap between two quarrelsome sparrows — and a clash of two systems on the ground',
            },
            {
              id: 'C',
              text: 'A peaceful flight after the pact, with no further collision',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — “aerial” here is a sparrow scrap, not aviation.',
            detail:
              'The card sets the turning points at Stalingrad and the Kursk salient. The finale is 1945, the defeat of Nazi Germany. The aftermath shaped the world map for decades.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the aerial battle is a sparrow scrap, while the war ran as a clash of two systems.',
            why: 'The title reads as a fight in the sky. The text holds ground turning points and the greed of the scrap — not air supremacy.',
          },
          difficulty_rationale:
            'A title trap: “aerial” sounds like war in the air. The allegory is two sparrows, not a branch of service.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Адольф и Иосиф. Воздушная битва',
      questions: [
        {
          level: 'Story',
          question: 'Чем на деле был пакт 1939 года?',
          options: [
            {
              id: 'A',
              text: 'Прочным союзом, снявшим идеологическое противоречие',
            },
            {
              id: 'B',
              text: 'Временным соглашением, скрывавшим противостояние двух режимов',
            },
            {
              id: 'C',
              text: 'Концом конфликта: война после него уже не планировалась',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — пакт был временным и маскировал вражду.',
            detail:
              'В 1941-м Германия начала «Барбароссу». Первый этап бил по СССР: угроза ключевым городам, включая Москву. Соглашение не отменило столкновения систем.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — пакт носил временный характер и скрывал противостояние режимов.',
            why: 'Это не союз и не финал. Карта прямо говорит: за договором стояло глубокое идеологическое и геополитическое столкновение.',
          },
          difficulty_rationale:
            'Завязка сюжета. Пакт легко принять за настоящий мир между двумя фигурами на картине.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему карта даёт им воробья?',
          options: [
            {
              id: 'A',
              text: 'В некоторых культурах воробей — драчливость и жадность',
            },
            {
              id: 'B',
              text: 'Воробей — слабость: оба казались мелкими на мировой арене',
            },
            {
              id: 'C',
              text: 'Воробей — домашний мир, который они пытались сохранить',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — воробей здесь про драку и жадность, не про малость.',
            detail:
              'Две фигуры сходятся как задиры, а не как крошки. Дальше карта разворачивает уже не птичий двор, а борьбу двух систем.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — воробей символизирует драчливость и жадность.',
            why: 'Карта не уменьшает их и не делает хранителями гнезда. Птица нужна, чтобы назвать характер столкновения — не масштаб тел.',
          },
          difficulty_rationale:
            'Формула summary. Мелкая птица провоцирует прочесть пару как ничтожество, а не как нрав.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что карта имеет в виду под воздушной битвой?',
          options: [
            {
              id: 'A',
              text: 'Войну авиации, которой решался весь конфликт',
            },
            {
              id: 'B',
              text: 'Стычку двух драчливых воробьёв — и борьбу двух систем на земле',
            },
            {
              id: 'C',
              text: 'Мирный перелёт после пакта, без дальнейшего столкновения',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — «воздух» здесь про воробьиную драку, не про авиацию.',
            detail:
              'Перелом карта ставит на Сталинград и Курскую дугу. Финал — 1945-й, поражение нацистской Германии. Последствия определили карту мира на десятилетия.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — воздушная битва это стычка воробьёв, а война шла как столкновение двух систем.',
            why: 'Название читается как бой в небе. Текст держит наземные переломы и жадность драки, а не господство авиации.',
          },
          difficulty_rationale:
            'Ловушка названия: «воздушная» звучит как война в воздухе. Аллегория — два воробья, не род войск.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Адольф і Іосіф. Паветраная бітва',
      questions: [
        {
          level: 'Story',
          question: 'Чым насамрэч быў пакт 1939 года?',
          options: [
            {
              id: 'A',
              text: 'Моцным саюзам, які зняў ідэалагічнае супярэчанне',
            },
            {
              id: 'B',
              text: 'Часовым пагадненнем, што хавала супрацьстаянне двух рэжымаў',
            },
            {
              id: 'C',
              text: 'Канцом канфлікту: вайна пасля яго ўжо не планавалася',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пакт быў часовым і маскіраваў варожасць.',
            detail:
              'У 1941-м Германія пачала «Барбаросу». Першы этап біў па СССР: пагроза ключавым гарадам, у тым ліку Маскве. Пагадненне не скасавала сутыкнення сістэм.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пакт насіў часовы характар і хаваў супрацьстаянне рэжымаў.',
            why: 'Гэта не саюз і не фінал. Карта проста кажа: за дагаворам стаяла глыбокае ідэалагічнае і геапалітычнае сутыкненне.',
          },
          difficulty_rationale:
            'Завязка сюжэту. Пакт лёгка прыняць за сапраўдны мір паміж двума фігурамі на карціне.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму карта дае ім вераб’я?',
          options: [
            {
              id: 'A',
              text: 'У некаторых культурах верабей — задзірыстасць і сквапнасць',
            },
            {
              id: 'B',
              text: 'Верабей — слабасць: абодва здаваліся дробнымі на сусветнай арэне',
            },
            {
              id: 'C',
              text: 'Верабей — хатні мір, які яны спрабавалі захаваць',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — верабей тут пра бойку і сквапнасць, не пра маласць.',
            detail:
              'Дзве фігуры сыходзяцца як задзіры, а не як крошкі. Далей карта разгортвае ўжо не птушыны двор, а барацьбу дзвюх сістэм.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — верабей сімвалізуе задзірыстасць і сквапнасць.',
            why: 'Карта не памяншае іх і не робіць захавальнікамі гнязда. Птушка патрэбная, каб назваць характар сутыкнення — не маштаб цел.',
          },
          difficulty_rationale:
            'Формула summary. Дробная птушка правакуе прачытаць пару як нікчэмнасць, а не як нораў.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што карта мае на ўвазе пад паветранай бітвай?',
          options: [
            {
              id: 'A',
              text: 'Вайну авіяцыі, якой вырашаўся ўвесь канфлікт',
            },
            {
              id: 'B',
              text: 'Сутычку двух задзірыстых вераб’ёў — і барацьбу дзвюх сістэм на зямлі',
            },
            {
              id: 'C',
              text: 'Мірны пералёт пасля пакту, без далейшага сутыкнення',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — «паветра» тут пра вераб’іную бойку, не пра авіяцыю.',
            detail:
              'Пералом карта ставіць на Сталінград і Курскую дугу. Фінал — 1945-ы, паражэнне нацысцкай Германіі. Наступствы вызначылі карту свету на дзесяцігоддзі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — паветраная бітва гэта сутычка вераб’ёў, а вайна ішла як сутыкненне дзвюх сістэм.',
            why: 'Назва чытаецца як бой у небе. Тэкст трымае наземныя пераломы і сквапнасць бойкі, а не панаванне авіяцыі.',
          },
          difficulty_rationale:
            'Пастка назвы: «паветраная» гучыць як вайна ў паветры. Алегорыя — два вераб’і, не род войскаў.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '阿道夫与约瑟夫。空战',
      questions: [
        {
          level: 'Story',
          question: '一九三九年的条约实际是什么？',
          options: [
            {
              id: 'A',
              text: '消解意识形态矛盾的牢固同盟',
            },
            {
              id: 'B',
              text: '掩盖两政权对峙的临时协议',
            },
            {
              id: 'C',
              text: '冲突的终结：此后已无战争计划',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 条约是临时的，并掩盖敌意。',
            detail:
              '一九四一年德国发动巴巴罗萨。第一阶段打击苏联：威胁包括莫斯科在内的关键城市。协议并未取消体制碰撞。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 条约是临时的，并隐藏政权对峙。',
            why: '既非同盟，也非终局。卡片直言：条约背后是深刻的意识形态与地缘政治碰撞。',
          },
          difficulty_rationale:
            '情节开端。条约易被当成画中两人之间的真和平。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片为何给他们一只麻雀？',
          options: [
            {
              id: 'A',
              text: '在某些文化中，麻雀意指好斗与贪婪',
            },
            {
              id: 'B',
              text: '麻雀是软弱：两人在世界舞台上显得渺小',
            },
            {
              id: 'C',
              text: '麻雀是他们试图保全的家居安宁',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处麻雀是争斗与贪婪，而非渺小。',
            detail:
              '两人如好斗者相遇，而非碎屑。卡片随后展开的不是鸟园口角，而是两体制之争。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 麻雀象征好斗与贪婪。',
            why: '卡片不缩小他们，也不把他们写成守巢者。鸟命名的是冲突的性情——不是体量。',
          },
          difficulty_rationale:
            '摘要公式。小鸟诱使把这一对读成虚无，而非性情。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片所谓的「空战」指什么？',
          options: [
            {
              id: 'A',
              text: '决定整个冲突的航空战争',
            },
            {
              id: 'B',
              text: '两只好斗麻雀的撕咬——以及地面上两体制的碰撞',
            },
            {
              id: 'C',
              text: '条约后的和平飞行，再无碰撞',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处「空」是麻雀撕咬，不是航空。',
            detail:
              '卡片把转折放在斯大林格勒与库尔斯克突出部。终局是一九四五年纳粹德国的战败。余波划定了数十年的世界地图。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 空战是麻雀撕咬，而战争作为两体制碰撞展开。',
            why: '标题读来像天空中的战斗。正文守住陆上转折与撕咬的贪婪——而非制空权。',
          },
          difficulty_rationale:
            '标题陷阱：「空」听来像空中战争。寓言是两只麻雀，不是一个兵种。',
          needs_review: false,
        },
      ],
    },
  },
};
