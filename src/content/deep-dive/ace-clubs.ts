import type { DeepDiveCard } from './types';

export const aceClubs: DeepDiveCard = {
  card_id: 'ace-clubs',
  locales: {
    en: {
      card_title: 'The Life and Death of the Grand Master',
      questions: [
        {
          level: 'Story',
          question: 'What aim did the brotherhood set beneath the walls of Jerusalem?',
          options: [
            {
              id: 'A',
              text: 'The protection of Christian pilgrims in the Holy Land',
            },
            {
              id: 'B',
              text: 'Lending to kings and high politics',
            },
            {
              id: 'C',
              text: 'Direct ties to the papal see from the first day',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the brotherhood was founded to protect pilgrims.',
            detail:
              'Around 1119 Hugues de Payens and a handful of knights founded the Order for that guard alone. Banks and monarchs came later, when the brotherhood had grown.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the protection of Christian pilgrims in the Holy Land.',
            why: 'Credit to kings and ties to the Holy See arrived when a band of knights became an international machine. At Jerusalem’s walls the aim was simpler.',
          },
          difficulty_rationale:
            'The first vow is easy to replace with the Order’s later power — the very contrast the card draws against its beginning.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Where did the name “Knights of the Temple” come from?',
          options: [
            {
              id: 'A',
              text: 'Bernard of Clairvaux gave it at the Council of Troyes',
            },
            {
              id: 'B',
              text: 'Baldwin II gave the brotherhood a residence on the Temple Mount',
            },
            {
              id: 'C',
              text: 'So all who fought in the First Crusade were called',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the name came from the residence on the Temple Mount.',
            detail:
              'The King of Jerusalem housed them there. The Council of Troyes (1129) gave ecclesiastical recognition — largely through Bernard — but not the name.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Baldwin II gave them a residence on the Temple Mount.',
            why: 'Bernard and Troyes concern the Order’s legitimacy, not its name. “Templars” is from the Temple, not from the crusade as such.',
          },
          difficulty_rationale:
            'Name and recognition sit side by side in the text. Easy to credit Bernard, who in fact drove the council, with the name as well.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Why is the founder shown at once alive and dead?',
          options: [
            {
              id: 'A',
              text: 'He died before he could leave a successor',
            },
            {
              id: 'B',
              text: 'The Order dissolved in the year of his death',
            },
            {
              id: 'C',
              text: 'His work outlived him by centuries',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the work outlived the Master by centuries.',
            detail:
              'From a guard of pilgrims grew a power with lands, a bank, and access to monarchs. The founder’s death did not break the structure — that is why the card holds him in both states.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — his work outlived him by centuries.',
            why: 'He left a working organization. Collapse and a missing heir are not the card’s claim: on the contrary, the Order became one of the chief forces of the Middle Ages.',
          },
          difficulty_rationale:
            'The card’s judgment, not a biography. The doubled body is easy to read as a hint that the Order died with its founder.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Жизнь и смерть Великого Магистра',
      questions: [
        {
          level: 'Story',
          question: 'Какую цель ставило братство у стен Иерусалима?',
          options: [
            {
              id: 'A',
              text: 'Защиту христианских паломников на Святой земле',
            },
            {
              id: 'B',
              text: 'Кредитование королей и большую политику',
            },
            {
              id: 'C',
              text: 'Прямые связи с папским престолом с первого дня',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — братство создали, чтобы защищать паломников.',
            detail:
              'Около 1119 года Гуго де Пейн и несколько рыцарей основали орден именно для этой охраны. Банки и монархи — то, во что братство выросло позже.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — защита христианских паломников на Святой земле.',
            why: 'Кредит королям и связь с престолом появились, когда из собрания рыцарей стала международная структура. У стен Иерусалима цель была проще.',
          },
          difficulty_rationale:
            'Исходный обет легко подменить поздней мощью ордена — той, что карта как раз противопоставляет началу.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Откуда взялось имя «рыцари Храма»?',
          options: [
            {
              id: 'A',
              text: 'Его дал Бернар Клервоский на соборе в Труа',
            },
            {
              id: 'B',
              text: 'Балдуин II дал братству резиденцию на Храмовой горе',
            },
            {
              id: 'C',
              text: 'Так называли всех участников Первого крестового похода',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — имя пошло от резиденции на Храмовой горе.',
            detail:
              'Король Иерусалима поселил их там. Собор в Труа (1129) дал церковное признание — во многом благодаря Бернару, — но не название.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Балдуин II дал им резиденцию на Храмовой горе.',
            why: 'Бернар и Труа — про легитимность ордена, не про имя. «Тамплиеры» — от Храма, а не от крестового похода как такового.',
          },
          difficulty_rationale:
            'Название и признание стоят рядом в тексте. Легко отдать имя Бернару, который на самом деле продавил собор.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Почему основатель изображён сразу живым и мёртвым?',
          options: [
            {
              id: 'A',
              text: 'Он погиб, не успев оставить преемника',
            },
            {
              id: 'B',
              text: 'Орден распался в год его смерти',
            },
            {
              id: 'C',
              text: 'Его дело пережило его на века',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — дело пережило магистра на века.',
            detail:
              'Из стражи паломников выросла сила с землями, банком и выходом на монархов. Смерть основателя структуру не оборвала — поэтому на карте он в обоих состояниях.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — его дело пережило его на века.',
            why: 'Он оставил работающую организацию. Распад и отсутствие наследника карта не утверждает: наоборот, орден стал одной из главных сил Средневековья.',
          },
          difficulty_rationale:
            'Вывод карты, а не биография. Двойное тело легко принять за намёк на гибель ордена вместе с основателем.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Жыццё і смерць Вялікага Магістра',
      questions: [
        {
          level: 'Story',
          question: 'Якую мэту ставіла брацтва ля сцен Іерусаліма?',
          options: [
            {
              id: 'A',
              text: 'Абарону хрысціянскіх паломнікаў на Святой зямлі',
            },
            {
              id: 'B',
              text: 'Крэдытаванне каралёў і вялікую палітыку',
            },
            {
              id: 'C',
              text: 'Прамыя сувязі з папскім прастолам з першага дня',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — брацтва стварылі, каб абараняць паломнікаў.',
            detail:
              'Каля 1119 года Гуга дэ Пейн і некалькі рыцараў заснавалі ордэн менавіта для гэтай аховы. Банкі і манархі — тое, у што брацтва вырасла пазней.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — абарона хрысціянскіх паломнікаў на Святой зямлі.',
            why: 'Крэдыт каралям і сувязь з прастолам з’явіліся, калі з сходу рыцараў стала міжнародная структура. Ля сцен Іерусаліма мэта была прасцейшая.',
          },
          difficulty_rationale:
            'Зыходнае абяцанне лёгка падмяніць позняй моцай ордэна — той, што карта якраз супрацьпастаўляе пачатку.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Адкуль узялося імя «рыцары Храма»?',
          options: [
            {
              id: 'A',
              text: 'Яго даў Бернар Клервоскі на саборы ў Труа',
            },
            {
              id: 'B',
              text: 'Балдуін II даў брацтву рэзідэнцыю на Храмавай гары',
            },
            {
              id: 'C',
              text: 'Так называлі ўсіх удзельнікаў Першага крыжовага паходу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — імя пайшло ад рэзідэнцыі на Храмавай гары.',
            detail:
              'Кароль Іерусаліма пасяліў іх там. Сабор у Труа (1129) даў царкоўнае прызнанне — шмат у чым дзякуючы Бернару, — але не назву.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Балдуін II даў ім рэзідэнцыю на Храмавай гары.',
            why: 'Бернар і Труа — пра легітымнасць ордэна, не пра імя. «Тампліеры» — ад Храма, а не ад крыжовага паходу як такога.',
          },
          difficulty_rationale:
            'Назва і прызнанне стаяць побач у тэксце. Лёгка аддаць імя Бернару, які насамрэч прадавіў сабор.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чаму заснавальнік намаляваны адразу жывым і мёртвым?',
          options: [
            {
              id: 'A',
              text: 'Ён загінуў, не паспеўшы пакінуць пераемніка',
            },
            {
              id: 'B',
              text: 'Ордэн распаўся ў год яго смерці',
            },
            {
              id: 'C',
              text: 'Яго справа перажыла яго на стагоддзі',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — справа перажыла магістра на стагоддзі.',
            detail:
              'З варты паломнікаў вырасла сіла з землямі, банкам і выхадам на манархаў. Смерць заснавальніка структуру не абарвала — таму на карце ён у абодвух станах.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яго справа перажыла яго на стагоддзі.',
            why: 'Ён пакінуў працуючую арганізацыю. Распаду і адсутнасці наследніка карта не сцвярджае: наадварот, ордэн стаў адной з галоўных сіл Сярэднявечча.',
          },
          difficulty_rationale:
            'Выснова карты, а не біяграфія. Падвойнае цела лёгка прыняць за намёк на гібель ордэна разам з заснавальнікам.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '大团长的生与死',
      questions: [
        {
          level: 'Story',
          question: '兄弟会在耶路撒冷城墙下为自己定下了什么目标？',
          options: [
            {
              id: 'A',
              text: '保护圣地的基督徒朝圣者',
            },
            {
              id: 'B',
              text: '向国王放贷并涉足高层政治',
            },
            {
              id: 'C',
              text: '从第一天起就与教廷直接挂钩',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 兄弟会的创立是为了保护朝圣者。',
            detail:
              '约1119年，于格·德·帕扬与少数骑士正是为了这道护卫而创立骑士团。银行与君主，是兄弟会日后壮大后的事。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 保护圣地的基督徒朝圣者。',
            why: '向国王放贷、与教廷往来，是一群骑士变成国际机器之后才有的。在耶路撒冷城墙下，目标更单纯。',
          },
          difficulty_rationale:
            '最初的誓约容易被骑士团日后的权势顶替——而这正是卡片拿来对照开端的反差。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '「圣殿骑士」之名从何而来？',
          options: [
            {
              id: 'A',
              text: '克莱沃的伯尔纳在特鲁瓦会议上赐予',
            },
            {
              id: 'B',
              text: '鲍德温二世把圣殿山的驻地赐给兄弟会',
            },
            {
              id: 'C',
              text: '凡参加第一次十字军东征者都这样称呼',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 名称来自圣殿山上的驻地。',
            detail:
              '耶路撒冷国王把他们安置在那里。特鲁瓦会议（1129）给予教会承认——很大程度上靠伯尔纳——但并非赐名。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 鲍德温二世把圣殿山的驻地赐给他们。',
            why: '伯尔纳与特鲁瓦关乎合法性，无关名称。「圣殿骑士」源于圣殿，而非十字军本身。',
          },
          difficulty_rationale:
            '名称与承认在文本中并置。容易把名称也归给实际推动会议的伯尔纳。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '为何创立者同时被画成活着与死去？',
          options: [
            {
              id: 'A',
              text: '他死前未能留下继任者',
            },
            {
              id: 'B',
              text: '骑士团在他去世那年解散',
            },
            {
              id: 'C',
              text: '他的事业在他身后延续了数百年',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 事业比大团长多活了数百年。',
            detail:
              '从朝圣者的护卫长成拥有地产、银行与君主门路的势力。创立者之死并未打断结构——故卡片把他留在两种状态里。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他的事业在他身后延续了数百年。',
            why: '他留下了运转中的组织。卡片并不声称崩溃或缺继承人：相反，骑士团成了中世纪的主要力量之一。',
          },
          difficulty_rationale:
            '这是卡片的判断，而非传记。双重身体容易被读成骑士团随创立者一同消亡的暗示。',
          needs_review: false,
        },
      ],
    },
  },
};
