import type { DeepDiveCard } from './types';

export const nineHearts: DeepDiveCard = {
  card_id: '9-hearts',
  locales: {
    en: {
      card_title: 'Athena and Erichthonius',
      questions: [
        {
          level: 'Story',
          question: 'How was Erichthonius born?',
          options: [
            {
              id: 'A',
              text: 'Gaia conceived from the cloth Athena used to wipe her leg after Hephaestus',
            },
            {
              id: 'B',
              text: 'Athena bore him after marrying Hephaestus',
            },
            {
              id: 'C',
              text: 'Cecrops’s daughters fashioned him from the soil of Attica',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — seed on the leg, cloth to the earth, Gaia conceived.',
            detail:
              'Athena came for weapons and stopped Hephaestus with her spear. The child is half-human, half-serpent. She took him as her own, though she had not carried him.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Gaia conceived from the cloth Athena cast aside after Hephaestus.',
            why: 'There was no marriage to Hephaestus: a lunge, a wound, flight from the forge. Cecrops’s daughters later guard the casket; they do not make the child.',
          },
          difficulty_rationale:
            'The birth’s opening. “Athena’s son” on the card tempts you to read her as mother in the flesh.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did Cecrops’s daughters cast themselves from the Acropolis rock?',
          options: [
            {
              id: 'A',
              text: 'Athena struck them for refusing the Gorgon’s gift',
            },
            {
              id: 'B',
              text: 'They opened the casket, saw the serpent-like child, and lost their minds',
            },
            {
              id: 'C',
              text: 'Hephaestus cursed them for revealing the forge’s secret',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — curiosity stronger than the ban: casket open, reason lost, the rock.',
            detail:
              'Aglaurus, Herse, and Pandrosus guarded the vessel and were not to look. Athena then took Erichthonius and raised him herself. The Gorgon’s gift is hers to him, not to them.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — they opened the casket, saw the serpent-like infant, and in madness threw themselves down.',
            why: 'Athena’s execution and Hephaestus’s curse are not on the card. Death comes from the horror of what they saw, after the broken ban.',
          },
          difficulty_rationale:
            'Causal chain: birth’s secret → casket → ban → the look. The Gorgon’s two drops of blood easily stand in as punishment for the sisters.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What did Erichthonius’s serpentine nature symbolize?',
          options: [
            {
              id: 'A',
              text: 'A curse Athena could not lift',
            },
            {
              id: 'B',
              text: 'That he could never rule',
            },
            {
              id: 'C',
              text: 'The Athenians’ autochthonous bond to Attic soil — a people “from the earth itself”',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the serpent as sign of a people born from the soil.',
            detail:
              'He became one of Attica’s first kings. The quadriga was to hide the half-serpent body, not to cancel the meaning. The Gorgon’s two drops — life and death at reception, not a curse on the form.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — the Athenians’ autochthonous bond to Attic soil, a people born from the earth.',
            why: 'He did rule. The card does not call the serpent nature Athena’s curse: she took him and raised him. The meaning is in the soil, not in shame.',
          },
          difficulty_rationale:
            'A conclusion about autochthony. The quadriga and the sisters’ terror tempt you to read the snake as a flaw, not as a right to the land.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Афина и Эрихтоний',
      questions: [
        {
          level: 'Story',
          question: 'Как появился Эрихтоний?',
          options: [
            {
              id: 'A',
              text: 'Гея зачала от платка, которым Афина вытерла ногу после Гефеста',
            },
            {
              id: 'B',
              text: 'Афина родила его, выйдя за Гефеста',
            },
            {
              id: 'C',
              text: 'Дочери Кекропа вылепили его из земли Аттики',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — семя на ноге, платок на землю, зачала Гея.',
            detail:
              'Афина пришла за оружием, остановила Гефеста копьём. Ребёнок — получеловек-полузмей. Она приняла его как родного, хотя не вынашивала.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Гея зачала от платка, отброшенного Афиной после Гефеста.',
            why: 'Брака с Гефестом не было: был бросок, рана, бегство из кузницы. Дочери Кекропа позже стерегут ларец, не творят ребёнка.',
          },
          difficulty_rationale:
            'Завязка рождения. «Сын Афины» на карте провоцирует прочесть её как мать по плоти.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему дочери Кекропа бросились со скалы Акрополя?',
          options: [
            {
              id: 'A',
              text: 'Афина поразила их за отказ принять дар Горгоны',
            },
            {
              id: 'B',
              text: 'Открыли ларец, увидели змееподобного ребёнка и лишились рассудка',
            },
            {
              id: 'C',
              text: 'Гефест проклял их за то, что выдали тайну кузницы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — любопытство сильнее запрета: ларец открыт, рассудок потерян, скала.',
            detail:
              'Аглавра, Герса, Пандроса стерегли сосуд и не должны были смотреть. Афина затем забрала Эрихтония и воспитала сама. Дар Горгоны — ей ему, не им.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — они открыли ларец, увидели змееподобного младенца и в безумии бросились вниз.',
            why: 'Казни Афины и проклятия Гефеста карта не даёт. Гибель — от ужаса увиденного, после нарушенного запрета.',
          },
          difficulty_rationale:
            'Причинная цепочка: тайна рождения → ларец → запрет → взгляд. Две капли крови Горгоны легко подставить как кару сёстрам.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что символизировала змеиная природа Эрихтония?',
          options: [
            {
              id: 'A',
              text: 'Проклятие, которого Афина не смогла снять',
            },
            {
              id: 'B',
              text: 'Что он никогда не мог править',
            },
            {
              id: 'C',
              text: 'Автохтонную связь афинян с землёй Аттики — народ «из самой почвы»',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — змей как знак народа, рождённого из почвы.',
            detail:
              'Он стал одним из первых царей Аттики. Квадрига — чтобы скрыть полузмеиное туловище, не чтобы отменить смысл. Две капли Горгоны — жизнь и смерть при принятии, не проклятие облика.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer:
              'Ответ — автохтонная связь афинян с землёй Аттики, народ, рождённый из почвы.',
            why: 'Править он как раз стал. Карта не зовёт змеиность проклятием Афины: она приняла его и воспитала. Смысл — в почве, не в стыде.',
          },
          difficulty_rationale:
            'Вывод про автохтонов. Квадрига и ужас сестёр провоцируют прочесть змею как изъян, а не как право на землю.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Афіна і Эрыхтоній',
      questions: [
        {
          level: 'Story',
          question: 'Як з’явіўся Эрыхтоній?',
          options: [
            {
              id: 'A',
              text: 'Гея зачала ад хусткі, якой Афіна выцерла нагу пасля Гефеста',
            },
            {
              id: 'B',
              text: 'Афіна нарадзіла яго, выйшаўшы за Гефеста',
            },
            {
              id: 'C',
              text: 'Дочкі Кекропа вылепілі яго з зямлі Атыкі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — семя на назе, хустка на зямлю, зачала Гея.',
            detail:
              'Афіна прыйшла па зброю, спыніла Гефеста дзідай. Дзіця — паўчалавек-паўзмей. Яна прыняла яго як роднага, хоць не выношвала.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Гея зачала ад хусткі, адкінутай Афінай пасля Гефеста.',
            why: 'Шлюбу з Гефестам не было: быў кідок, рана, уцёкі з кузні. Дочкі Кекропа пазней сцерагуць скрыню, не твораць дзіцяці.',
          },
          difficulty_rationale:
            'Завязка нараджэння. «Сын Афіны» на карце правакуе прачытаць яе як маці па плоці.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму дочкі Кекропа кінуліся са скалы Акропаля?',
          options: [
            {
              id: 'A',
              text: 'Афіна паразіла іх за адмову прыняць дар Гаргоны',
            },
            {
              id: 'B',
              text: 'Адкрылі скрыню, ўбачылі змеепадобнае дзіця і страцілі розум',
            },
            {
              id: 'C',
              text: 'Гефест пракляў іх за тое, што выдалі таямніцу кузні',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — цікаўнасць мацней забароны: скрыня адкрыта, розум страчаны, скала.',
            detail:
              'Аглаўра, Герса, Пандроса сцераглі пасудзіну і не павінны былі глядзець. Афіна потым забрала Эрыхтонія і выхавала сама. Дар Гаргоны — ёй яму, не ім.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яны адкрылі скрыню, ўбачылі змеепадобнае немаўля і ў вар’яцтве кінуліся ўніз.',
            why: 'Кары Афіны і праклёну Гефеста карта не дае. Гібель — ад жаху ўбачанага, пасля парушанай забароны.',
          },
          difficulty_rationale:
            'Прычынны ланцужок: таямніца нараджэння → скрыня → забарона → погляд. Дзве кроплі крыві Гаргоны лёгка падставіць як кару сёстрам.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што сімвалізавала змеіная прырода Эрыхтонія?',
          options: [
            {
              id: 'A',
              text: 'Праклён, якога Афіна не змагла зняць',
            },
            {
              id: 'B',
              text: 'Што ён ніколі не мог кіраваць',
            },
            {
              id: 'C',
              text: 'Аўтахтонную сувязь афінян з зямлёй Атыкі — народ «з самой глебы»',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — змей як знак народа, народжанага з глебы.',
            detail:
              'Ён стаў адным з першых цароў Атыкі. Квадрыга — каб схаваць паўзмеінае тулава, не каб скасаваць сэнс. Дзве кроплі Гаргоны — жыццё і смерць пры прыняцці, не праклён аблічча.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — аўтахтонная сувязь афінян з зямлёй Атыкі, народ, народжаны з глебы.',
            why: 'Кіраваць ён якраз стаў. Карта не кліча змеінасць праклёнам Афіны: яна прыняла яго і выхавала. Сэнс — у глебе, не ў сораме.',
          },
          difficulty_rationale:
            'Выснова пра аўтахтонаў. Квадрыга і жах сясцёр правакуюць прачытаць змею як загану, а не як права на зямлю.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '雅典娜与厄里克托尼俄斯',
      questions: [
        {
          level: 'Story',
          question: '厄里克托尼俄斯如何出生？',
          options: [
            {
              id: 'A',
              text: '盖亚因雅典娜在赫菲斯托斯之后用来擦腿的布而受孕',
            },
            {
              id: 'B',
              text: '雅典娜嫁给赫菲斯托斯后生下他',
            },
            {
              id: 'C',
              text: '刻克洛普斯的女儿用阿提卡的泥土塑成他',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 种落腿上，布掷于地，盖亚受孕。',
            detail:
              '雅典娜来取兵器，用矛挡住赫菲斯托斯。孩子半人半蛇。她虽未怀胎，却视他如己出。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 盖亚因雅典娜在赫菲斯托斯之后丢弃的布而受孕。',
            why: '并无与赫菲斯托斯的婚姻：是冲撞、受伤、逃离作坊。刻克洛普斯的女儿后来看守匣子，并不制造孩子。',
          },
          difficulty_rationale:
            '出生的开端。卡上的“雅典娜之子”诱人把她读成肉身之母。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '刻克洛普斯的女儿为何从卫城悬崖投下？',
          options: [
            {
              id: 'A',
              text: '雅典娜因她们拒绝戈耳工之礼而击杀她们',
            },
            {
              id: 'B',
              text: '她们打开匣子，看见蛇形婴儿，失了心智',
            },
            {
              id: 'C',
              text: '赫菲斯托斯因她们泄露作坊秘密而诅咒她们',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 好奇强过禁令：匣开，理智失，悬崖。',
            detail:
              '阿格劳洛斯、赫耳塞、潘德洛索斯看守容器，不得窥看。雅典娜随后带走厄里克托尼俄斯亲自抚养。戈耳工之礼是给她给他的，不是给她们。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她们打开匣子，看见蛇形婴儿，在疯狂中投下。',
            why: '卡无雅典娜的处决，也无赫菲斯托斯的诅咒。死于所见之怖，在破禁之后。',
          },
          difficulty_rationale:
            '因果链：出生之秘→匣→禁→看。戈耳工两滴血容易被当成对姐妹的惩罚。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '厄里克托尼俄斯的蛇性象征什么？',
          options: [
            {
              id: 'A',
              text: '雅典娜无法解除的诅咒',
            },
            {
              id: 'B',
              text: '他永不能统治',
            },
            {
              id: 'C',
              text: '雅典人与阿提卡土地的土著纽带——“出自大地本身”的民族',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 蛇是自土而生之民的标记。',
            detail:
              '他成为阿提卡最早的君王之一。驷马战车是为遮住半蛇之躯，不是取消意义。戈耳工两滴——接纳时的生与死，不是形态上的诅咒。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 雅典人与阿提卡土地的土著纽带，出自大地的民族。',
            why: '他恰恰统治了。卡不称蛇性为雅典娜的诅咒：她接纳并抚养他。意义在土壤，不在羞耻。',
          },
          difficulty_rationale:
            '关于土著性的结论。驷车与姐妹的恐惧诱人把蛇读成缺陷，而非对土地的权利。',
          needs_review: false,
        },
      ],
    },
  },
};
