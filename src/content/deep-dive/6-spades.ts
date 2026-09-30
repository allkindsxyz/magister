import type { DeepDiveCard } from './types';

export const sixSpades: DeepDiveCard = {
  card_id: '6-spades',
  locales: {
    en: {
      card_title: 'Che Guevara Surrounded by Scorpions',
      questions: [
        {
          level: 'Story',
          question: 'Which stage does the card treat as pivotal in his life?',
          options: [
            {
              id: 'A',
              text: 'Medical practice in Argentina, to which he devoted his whole life',
            },
            {
              id: 'B',
              text: 'Participation in the Cuban Revolution with Fidel Castro',
            },
            {
              id: 'C',
              text: 'Withdrawal from politics after the rebels’ victory',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the key is the Cuban Revolution of 1959.',
            detail:
              'He trained in medicine, but early travels and the sight of poverty turned the path. After victory he took state posts; he did not leave the fight.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — participation in the Cuban Revolution with Castro.',
            why: 'He did not remain a doctor. After 1959 he did not step aside: he commanded, served as ideologue, then as an official on economic projects.',
          },
          difficulty_rationale:
            'A core plot point. Medicine at the start of the biography easily overshadows what the card calls pivotal.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Whose venom does the card rhyme with the pistol?',
          options: [
            {
              id: 'A',
              text: 'The sting of a merciless revolutionary — he himself is the scorpion',
            },
            {
              id: 'B',
              text: 'The sting of enemies who surrounded and betrayed him',
            },
            {
              id: 'C',
              text: 'The healing venom of a doctor with which he treated the poor',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — sting and pistol belong to him, not to the hunters.',
            detail:
              'The summary sets scorpion venom beside the weapon in his hand. Merciless and unshakable — a formula of character, not a portrait of a victim.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the poisonous sting of the revolutionary himself, rhyme to the pistol.',
            why: '“Surrounded” in the title plants a victim. The card does not heal with venom and does not give the sting to enemies — it puts it in his hand.',
          },
          difficulty_rationale:
            'A link of title + summary. “Surrounded” reads as a roundup; the text makes him the bearer of the sting.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What did he not do after success in Cuba?',
          options: [
            {
              id: 'A',
              text: 'Stay to build one country and close the subject of revolution',
            },
            {
              id: 'B',
              text: 'Come to see revolution as a global process',
            },
            {
              id: 'C',
              text: 'Try to launch movements in Latin America and in Africa',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he did not stop at Cuba.',
            detail:
              'He saw revolution as wider than one country. In 1967 he was captured and executed in Bolivia. The image remains contested: struggle, idealism, self-sacrifice.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he did not close revolution within the bounds of Cuba.',
            why: 'The card says outright: success did not hold him. The global reach and death in Bolivia are continuation, not a footnote.',
          },
          difficulty_rationale:
            'Cuba overshadows the ending. Easy to take the victory of 1959 for the end of the path.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Че Гевара в окружении скорпионов',
      questions: [
        {
          level: 'Story',
          question: 'Какой этап карта считает ключевым в его жизни?',
          options: [
            {
              id: 'A',
              text: 'Медицинская практика в Аргентине, которой он посвятил всю жизнь',
            },
            {
              id: 'B',
              text: 'Участие в Кубинской революции вместе с Фиделем Кастро',
            },
            {
              id: 'C',
              text: 'Отказ от политики после победы повстанцев',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — ключ это Кубинская революция 1959 года.',
            detail:
              'Медицину он получил, но путь свернули ранние путешествия и вид бедности. После победы он занял государственные посты, а не ушёл из борьбы.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — участие в Кубинской революции вместе с Кастро.',
            why: 'Врачом он не остался. После 1959-го не отошёл: командовал, был идеологом и затем чиновником экономических проектов.',
          },
          difficulty_rationale:
            'Опорный сюжет. Медицина в начале биографии легко заслоняет то, что карта зовёт ключевым.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чей яд карта рифмует с пистолетом?',
          options: [
            {
              id: 'A',
              text: 'Жало беспощадного революционера — он сам скорпион',
            },
            {
              id: 'B',
              text: 'Жало врагов, которые окружили и предали его',
            },
            {
              id: 'C',
              text: 'Целебный яд врача, которым он лечил бедных',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — жало и пистолет принадлежат ему, не охотникам.',
            detail:
              'Summary ставит яд скорпиона рядом с оружием в руке. Беспощадный и непоколебимый — формула характера, а не портрет жертвы.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — ядовитое жало самого революционера, рифма к пистолету.',
            why: 'Название «в окружении» подсовывает жертву. Карта не лечит ядом и не отдаёт жало врагам — она даёт его ему в руку.',
          },
          difficulty_rationale:
            'Связка title + summary. «Окружение» читается как облава; текст делает его носителем жала.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чего он не сделал после успеха на Кубе?',
          options: [
            {
              id: 'A',
              text: 'Остался строить одну страну и закрыл тему революции',
            },
            {
              id: 'B',
              text: 'Стал рассматривать революцию как глобальный процесс',
            },
            {
              id: 'C',
              text: 'Пытался развернуть движения в Латинской Америке и в Африке',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — на Кубе он не остановился.',
            detail:
              'Революцию он видел шире одной страны. В 1967-м его захватили и казнили в Боливии. Образ остался спорным: борьба, идеализм, самопожертвование.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он не закрыл революцию пределами Кубы.',
            why: 'Карта прямо говорит: успех не удержал его. Глобальный размах и гибель в Боливии — продолжение, не оговорка.',
          },
          difficulty_rationale:
            'Куба заслоняет финал. Легко принять победу 1959-го за конец пути.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Чэ Гевара ў атачэнні скарпіёнаў',
      questions: [
        {
          level: 'Story',
          question: 'Які этап карта лічыць ключавым у яго жыцці?',
          options: [
            {
              id: 'A',
              text: 'Медыцынская практыка ў Аргенціне, якой ён прысвяціў усё жыццё',
            },
            {
              id: 'B',
              text: 'Удзел у Кубінскай рэвалюцыі разам з Фідэлем Кастра',
            },
            {
              id: 'C',
              text: 'Адмова ад палітыкі пасля перамогі паўстанцаў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ключ гэта Кубінская рэвалюцыя 1959 года.',
            detail:
              'Медыцыну ён атрымаў, але шлях скруцілі раннія падарожжы і від беднасці. Пасля перамогі ён заняў дзяржаўныя пасады, а не сышоў з барацьбы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — удзел у Кубінскай рэвалюцыі разам з Кастра.',
            why: 'Урачом ён не застаўся. Пасля 1959-га не адышоў: камандаваў, быў ідэолагам і потым чыноўнікам эканамічных праектаў.',
          },
          difficulty_rationale:
            'Апорны сюжэт. Медыцына на пачатку біяграфіі лёгка засланяе тое, што карта кліча ключавым.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чый яд карта рыфмуе з пісталетам?',
          options: [
            {
              id: 'A',
              text: 'Джала бязлітаснага рэвалюцыянера — ён сам скарпіён',
            },
            {
              id: 'B',
              text: 'Джала ворагаў, якія атачылі і здрадзілі яму',
            },
            {
              id: 'C',
              text: 'Лячэбны яд урача, якім ён лячыў бедных',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — джала і пісталет належаць яму, не паляўнічым.',
            detail:
              'Summary ставіць яд скарпіёна побач са зброяй у руцэ. Бязлітасны і непахісны — формула характару, а не партрэт ахвяры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — атрутнае джала самога рэвалюцыянера, рыфма да пісталета.',
            why: 'Назва «ў атачэнні» падсоўвае ахвяру. Карта не лечыць ядам і не аддае джала ворагам — яна дае яго яму ў руку.',
          },
          difficulty_rationale:
            'Звязка title + summary. «Атачэнне» чытаецца як аблава; тэкст робіць яго носьбітам джала.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чаго ён не зрабіў пасля поспеху на Кубе?',
          options: [
            {
              id: 'A',
              text: 'Застаўся будаваць адну краіну і закрыў тэму рэвалюцыі',
            },
            {
              id: 'B',
              text: 'Стаў разглядаць рэвалюцыю як глабальны працэс',
            },
            {
              id: 'C',
              text: 'Спрабаваў разгарнуць рухі ў Лацінскай Амерыцы і ў Афрыцы',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — на Кубе ён не спыніўся.',
            detail:
              'Рэвалюцыю ён бачыў шырэй адной краіны. У 1967-м яго схапілі і пакаралі смерцю ў Балівіі. Вобраз застаўся спрэчным: барацьба, ідэалізм, самаахвярнасць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён не закрыў рэвалюцыю межамі Кубы.',
            why: 'Карта проста кажа: поспех не ўтрымаў яго. Глабальны размах і загібель у Балівіі — працяг, не агаворка.',
          },
          difficulty_rationale:
            'Куба засланяе фінал. Лёгка прыняць перамогу 1959-га за канец шляху.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '被蝎子环绕的切·格瓦拉',
      questions: [
        {
          level: 'Story',
          question: '卡片视他生命的哪一阶段为关键？',
          options: [
            {
              id: 'A',
              text: '在阿根廷行医——他为此献出一生',
            },
            {
              id: 'B',
              text: '与菲德尔·卡斯特罗一同参与古巴革命',
            },
            {
              id: 'C',
              text: '叛军胜利后退出政治',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 关键是一九五九年的古巴革命。',
            detail:
              '他受过医学训练，但早年旅行与目睹贫困扭转了道路。胜利后他担任国家职务；并未离开斗争。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 与卡斯特罗一同参与古巴革命。',
            why: '他并未一直做医生。一九五九年后他没有退场：指挥、充任理论家，再做经济项目官员。',
          },
          difficulty_rationale:
            '核心情节。传记开头的医学易掩盖卡片所称的关键。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片把谁的毒与手枪押韵？',
          options: [
            {
              id: 'A',
              text: '无情革命者的蛰——他自己就是蝎子',
            },
            {
              id: 'B',
              text: '包围并背叛他的敌人的蛰',
            },
            {
              id: 'C',
              text: '医生用以医治穷人的疗毒',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 蛰与手枪属于他，不属于猎手。',
            detail:
              '摘要把蝎毒放在他手中的武器旁。无情而坚定——是性格公式，不是受害者肖像。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 革命者本人的毒蛰，与手枪押韵。',
            why: '标题「环绕」塞进受害者形象。卡片不以毒疗伤，也不把蛰交给敌人——它放进他手里。',
          },
          difficulty_rationale:
            '串联 title + summary。「环绕」读成围捕；正文使他成为蛰的承载者。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '古巴成功之后，他没有做什么？',
          options: [
            {
              id: 'A',
              text: '留下来建设一国并关闭革命话题',
            },
            {
              id: 'B',
              text: '把革命视为全球进程',
            },
            {
              id: 'C',
              text: '试图在拉丁美洲与非洲发动运动',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他并未止步于古巴。',
            detail:
              '他视革命大于一国。一九六七年他在玻利维亚被俘处死。形象仍有争议：斗争、理想、自我牺牲。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他未把革命关在古巴边界内。',
            why: '卡片直言：成功没有留住他。全球幅度与玻利维亚之死是延续，不是脚注。',
          },
          difficulty_rationale:
            '古巴掩盖结局。易把一九五九年的胜利当成终点。',
          needs_review: false,
        },
      ],
    },
  },
};
