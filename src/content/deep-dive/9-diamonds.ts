import type { DeepDiveCard } from './types';

export const nineDiamonds: DeepDiveCard = {
  card_id: '9-diamonds',
  locales: {
    en: {
      card_title: 'The Secret Initiation Ceremony',
      questions: [
        {
          level: 'Story',
          question: 'What idea does the card hold as central in the image of the “wicker man”?',
          options: [
            {
              id: 'A',
              text: 'Through fire a person crosses the boundary of the earthly world',
            },
            {
              id: 'B',
              text: 'Wicker clothing hides the initiate’s face from the uninitiated',
            },
            {
              id: 'C',
              text: 'Druids executed enemies this way — and that exhausts the rite',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — what matters is the idea of passage through fire, not the technique of execution.',
            detail:
              'Figures of withes with people inside were set alight as offerings to the gods. The card takes the sense of a boundary, not a criminal plot.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — through fire a person crosses the boundary of the earthly world.',
            why: 'Wicker is an attribute of secret-bearers, not a face-mask. The card refuses to reduce the rite to execution of enemies: the idea of sacrifice matters.',
          },
          difficulty_rationale:
            'Function of the fiery image. Easy to drift into disguise or execution and lose the passage.',
          needs_review: true,
          needs_review_reason:
            'Summary: the one permitted to lift the veils from the chief secret. Description: Celtic “wicker man” and fire. Different rites.',
        },
        {
          level: 'Context',
          question: 'Why is there fire in this rite?',
          options: [
            {
              id: 'A',
              text: 'To destroy knowledge together with the offering',
            },
            {
              id: 'B',
              text: 'As a purifying force that carries gifts to the gods and joins the earthly to the divine',
            },
            {
              id: 'C',
              text: 'So the initiate may lift the veils without being seen',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — fire purifies and carries the gift; the wicker man is an offering binding the worlds.',
            detail:
              'Priests led rites of cycles, fertility, and passages. Fire here is neither a ban on knowledge nor a screen for lifting veils.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — fire as a purifying sacred force and a bond of the earthly with the divine.',
            why: 'Burning is not equal to destroying a teaching. Lifting of veils comes from the card’s short description, not from the logic of fire in the expanded text.',
          },
          difficulty_rationale:
            'Why the mystery holds fire. The brief “lifting of veils” and the horror of burning contend with the formula of purification.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'How does the card ask us to hold the historicity of this plot?',
          options: [
            {
              id: 'A',
              text: 'As an exact report: so it was',
            },
            {
              id: 'B',
              text: 'Historians are cautious, yet the archetype of sacrifice, rebirth, and bond with the forces of nature lives on',
            },
            {
              id: 'C',
              text: 'As fiction that ought to be discarded',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — reliability is doubtful; the image keeps working.',
            detail:
              'The motif passed into myth, literature, art, film: collective ritual, fear, secret knowledge. Historians’ caution does not cancel the archetype.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the testimonies are not fully trusted, yet the archetype of sacrifice and rebirth remains.',
            why: 'The card neither demands literal belief nor orders the plot discarded. It holds both edges: doubt and the force of the image.',
          },
          difficulty_rationale:
            'Easy to choose “so it was” or “all false.” The text holds historians’ caution and a living archetype at once.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Тайная церемония посвящения',
      questions: [
        {
          level: 'Story',
          question: 'Какую идею карта считает главной в образе «плетёного человека»?',
          options: [
            {
              id: 'A',
              text: 'Через огонь человек пересекает границу земного мира',
            },
            {
              id: 'B',
              text: 'Плетёная одежда скрывает лицо посвящаемого от непосвящённых',
            },
            {
              id: 'C',
              text: 'Друиды так казнили врагов — и этим обряд исчерпывается',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — важна идея перехода через огонь, не техника казни.',
            detail:
              'Фигуры из прутьев с людьми внутри поджигали как жертву богам. Карта берёт смысл границы, а не уголовный сюжет.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — через огонь человек преодолевает границу земного мира.',
            why: 'Плетение — атрибут носителей тайны, не маскировка лица. Свести обряд к казни врагов карта отказывается: важна идея жертвы.',
          },
          difficulty_rationale:
            'Функция огненного образа. Легко уйти в маскировку или в казнь и потерять переход.',
          needs_review: true,
          needs_review_reason:
            'Summary: тот, кому позволено снимать покровы с главной тайны. Description: кельтский «плетёный человек» и огонь. Разные обряды.',
        },
        {
          level: 'Context',
          question: 'Зачем огонь в этом обряде?',
          options: [
            {
              id: 'A',
              text: 'Чтобы уничтожить знание вместе с жертвой',
            },
            {
              id: 'B',
              text: 'Как очищающая сила, передающая дары богам и соединяющая земное с божественным',
            },
            {
              id: 'C',
              text: 'Чтобы посвящаемый мог снять покровы, не будучи увиденным',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — огонь очищает и несёт дар; плетёный человек — жертва, связующая миры.',
            detail:
              'Жрецы вели обряды циклов, плодородия и переходов. Огонь здесь не запрет знания и не ширма для снятия покровов.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — огонь как очищающая сакральная сила и связь земного с божественным.',
            why: 'Сожжение не равно уничтожению учения. Снятие покровов — из краткого описания карты, не из логики огня в развёрнутом тексте.',
          },
          difficulty_rationale:
            'Зачем мистерия держит огонь. Краткое «снятие покровов» и ужас сожжения спорят с формулой очищения.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Как карта предлагает держать историчность этого сюжета?',
          options: [
            {
              id: 'A',
              text: 'Как точный отчёт: так и было',
            },
            {
              id: 'B',
              text: 'Историки осторожны, но жив архетип жертвы, возрождения и связи с силами природы',
            },
            {
              id: 'C',
              text: 'Как вымысел, который следует отбросить',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — достоверность сомнительна, образ продолжает работать.',
            detail:
              'Мотив ушёл в миф, литературу, искусство, кино: коллективный ритуал, страх, тайное знание. Осторожность историков не отменяет архетип.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — свидетельствам не доверяют до конца, но архетип жертвы и возрождения остаётся.',
            why: 'Карта не требует буквальной веры и не велит выбросить сюжет. Держит оба края: сомнение и силу образа.',
          },
          difficulty_rationale:
            'Легко выбрать «так было» или «всё ложь». Текст держит осторожность историков и живущий архетип разом.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Таемная цырымонія пасвячэння',
      questions: [
        {
          level: 'Story',
          question: 'Якую ідэю карта лічыць галоўнай у вобразе «пляцёнага чалавека»?',
          options: [
            {
              id: 'A',
              text: 'Праз агонь чалавек перасякае мяжу зямнога свету',
            },
            {
              id: 'B',
              text: 'Пляцёнае адзенне хавае твар пасвячанага ад непасвячаных',
            },
            {
              id: 'C',
              text: 'Друіды так каралі ворагаў — і гэтым абрад вычэрпваецца',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — важная ідэя пераходу праз агонь, не тэхніка кары.',
            detail:
              'Фігуры з прутоў з людзьмі ўнутры падпальвалі як ахвяру багам. Карта бярэ сэнс мяжы, а не крымінальны сюжэт.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — праз агонь чалавек пераадольвае мяжу зямнога свету.',
            why: 'Пляценне — атрыбут носьбітаў таямніцы, не маскіроўка твару. Звесці абрад да кары ворагаў карта адмаўляецца: важная ідэя ахвяры.',
          },
          difficulty_rationale:
            'Функцыя агнявога вобраза. Лёгка сысці ў маскіроўку ці ў кару і страціць пераход.',
          needs_review: true,
          needs_review_reason:
            'Summary: той, каму дазволена здымаць покрывы з галоўнай таямніцы. Description: кельцкі «пляцёны чалавек» і агонь. Розныя абрады.',
        },
        {
          level: 'Context',
          question: 'Навошта агонь у гэтым абрадзе?',
          options: [
            {
              id: 'A',
              text: 'Каб знішчыць веданне разам з ахвярай',
            },
            {
              id: 'B',
              text: 'Як ачышчальная сіла, што перадае дары багам і злучае зямное з боскім',
            },
            {
              id: 'C',
              text: 'Каб пасвячаны мог зняць покрывы, не будучы ўбачаным',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — агонь ачышчае і нясе дар; пляцёны чалавек — ахвяра, што звязвае светы.',
            detail:
              'Жрацы вялі абрады цыклаў, урадлівасці і пераходаў. Агонь тут не забарона ведання і не шырма для зняцця покрываў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — агонь як ачышчальная сакральная сіла і сувязь зямнога з боскім.',
            why: 'Спаленне не роўнае знішчэнню вучэння. Зняцце покрываў — з кароткага апісання карты, не з логікі агню ў разгорнутым тэксце.',
          },
          difficulty_rationale:
            'Навошта містэрыя трымае агонь. Кароткае «зняцце покрываў» і жах спалення спрачаюцца з формулай ачышчэння.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Як карта прапануе трымаць гістарычнасць гэтага сюжэту?',
          options: [
            {
              id: 'A',
              text: 'Як дакладны справаздачу: так і было',
            },
            {
              id: 'B',
              text: 'Гісторыкі асцярожныя, але жывы архетып ахвяры, адраджэння і сувязі з сіламі прыроды',
            },
            {
              id: 'C',
              text: 'Як вымысел, які варта адкінуць',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — дакладнасць сумніўная, вобраз працягвае працаваць.',
            detail:
              'Матыў сышоў у міф, літаратуру, мастацтва, кіно: калектыўны рытуал, страх, таемнае веданне. Асцярожнасць гісторыкаў не скасоўвае архетып.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — сведчанням не давяраюць да канца, але архетып ахвяры і адраджэння застаецца.',
            why: 'Карта не патрабуе літаральнай веры і не загадвае выкінуць сюжэт. Трымае абодва краі: сумненне і сілу вобраза.',
          },
          difficulty_rationale:
            'Лёгка выбраць «так было» ці «усё хлусня». Тэкст трымае асцярожнасць гісторыкаў і жывы архетып разам.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '秘密的入会仪式',
      questions: [
        {
          level: 'Story',
          question: '此卡以「柳条人」形象所执的核心观念是什么？',
          options: [
            {
              id: 'A',
              text: '人经火越过尘世的边界',
            },
            {
              id: 'B',
              text: '柳条衣遮蔽入会者的面容，不让未入会者看见',
            },
            {
              id: 'C',
              text: '德鲁伊如此处决敌人——仪式至此穷尽',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 要紧的是经火过渡的观念，不是处决的技术。',
            detail:
              '内含活人的柳条人被点燃，作为献给诸神的祭物。此卡取的是边界之义，不是刑事情节。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 人经火越过尘世的边界。',
            why: '编织是秘密承载者的属性，不是遮面。此卡拒绝把仪式压成处决敌人：要紧的是献祭的观念。',
          },
          difficulty_rationale:
            '火的形象的功能。易滑向伪装或处决而失去过渡。',
          needs_review: true,
          needs_review_reason:
            'Summary: 被允准揭开主秘密之帷幕者。Description: 凯尔特「柳条人」与火。不同的仪式。',
        },
        {
          level: 'Context',
          question: '此仪式为何有火？',
          options: [
            {
              id: 'A',
              text: '为与祭物一同摧毁知识',
            },
            {
              id: 'B',
              text: '作为净化之力，把礼物带给诸神，并连结尘世与神圣',
            },
            {
              id: 'C',
              text: '好让入会者揭开帷幕而不被看见',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 火净化并承载礼物；柳条人是连结世界的祭物。',
            detail:
              '祭司主持周期、丰饶与过渡的仪式。此处的火既非知识之禁，也非揭幕的屏风。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 火作为净化的神圣之力，以及尘世与神圣的纽带。',
            why: '焚烧不等于摧毁教诲。揭幕来自卡的短述，而非展开文本中火的逻辑。',
          },
          difficulty_rationale:
            '秘仪为何持火。简短的「揭幕」与焚烧之怖与净化公式相争。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '此卡要我们如何对待这情节的历史性？',
          options: [
            {
              id: 'A',
              text: '当作精确报告：事实如此',
            },
            {
              id: 'B',
              text: '史家谨慎，但献祭、重生与同自然之力纽带的原型仍活着',
            },
            {
              id: 'C',
              text: '当作应予抛弃的虚构',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 可靠性可疑；形象仍在运作。',
            detail:
              '母题进入神话、文学、艺术、电影：集体仪式、恐惧、秘密知识。史家的谨慎并不取消原型。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 证词未获充分信任，但献祭与重生的原型仍在。',
            why: '此卡既不要求字面相信，也不命令抛弃情节。它握住两端：怀疑与形象之力。',
          },
          difficulty_rationale:
            '易选「事实如此」或「全是假的」。文本同时握住史家的谨慎与活着的原型。',
          needs_review: false,
        },
      ],
    },
  },
};
