import type { DeepDiveCard } from './types';

export const fiveClubs: DeepDiveCard = {
  card_id: '5-clubs',
  locales: {
    en: {
      card_title: 'Templars Quarreling with a Raven',
      questions: [
        {
          level: 'Story',
          question: 'Why was the raven held to be a guide of souls?',
          options: [
            {
              id: 'A',
              text: 'Black plumage and the habit of appearing at battlefields',
            },
            {
              id: 'B',
              text: 'It accompanies the high god and carries news from all the world',
            },
            {
              id: 'C',
              text: 'In antiquity it was honored as a bird of prophecy',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — color and the fields of battle made it a guide.',
            detail:
              'The same aspect gives a second role: the watcher who sees what is hidden. Death and knowledge sit on one bird.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — black plumage and appearing near the fields of battle.',
            why: 'Odin’s messenger and the bird of prophecy are other faces of the same figure — not the reason for the soul-guide’s role.',
          },
          difficulty_rationale:
            'The card’s basic thesis. Odin’s messenger and the bird of prophecy are easy to put here too soon.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'To what moment does the raven point in medieval symbolism?',
          options: [
            {
              id: 'A',
              text: 'To final ruin without remainder',
            },
            {
              id: 'B',
              text: 'To a threshold: the old destroyed, the new still without form',
            },
            {
              id: 'C',
              text: 'To a triumph of light already complete',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a moment of passage, not an ending.',
            detail:
              'A double nature: death and decay — or insight through ordeal. The quarrel with the raven stands on the threshold, not after the sentence.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a threshold, when the old is already destroyed and the new has not yet taken form.',
            why: 'Neither a pure end nor light already achieved. The raven stands between — as in the gloss: the living and the dead.',
          },
          difficulty_rationale:
            'The Order sense of the quarrel: not “bird of death,” but a threshold. Duality is easy to collapse into one pole.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What reminder does the raven carry beyond the news of an end?',
          options: [
            {
              id: 'A',
              text: 'Behind every shadow lies a chance to see the truth',
            },
            {
              id: 'B',
              text: 'It signifies only death and decay',
            },
            {
              id: 'C',
              text: 'It signifies only insight, without ordeal',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — behind every shadow lies a chance to see the truth.',
            detail:
              'An archetype of the liminal being: life and death, light and dark, knowledge and fear. Shadow does not lock the truth away — it points toward it.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a guide to understanding: behind every shadow lies a chance to see the truth.',
            why: 'Death and insight are two poles of one sign, both through ordeal. The card leaves the raven neither side alone.',
          },
          difficulty_rationale:
            'The text’s last formula. Behind the raven-of-death it is easy not to see the raven-as-guide.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Тамплиеры, спорящие с вороном',
      questions: [
        {
          level: 'Story',
          question: 'Почему ворона считали проводником душ?',
          options: [
            {
              id: 'A',
              text: 'Чёрное оперение и привычка являться у полей сражений',
            },
            {
              id: 'B',
              text: 'Он сопровождает верховного бога и носит вести со всего мира',
            },
            {
              id: 'C',
              text: 'В античности его чтили как птицу прорицания',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — цвет и поля битв сделали его проводником.',
            detail:
              'Тот же облик даёт вторую роль: наблюдатель, который видит скрытое. Смерть и знание сидят на одной птице.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — чёрное оперение и появление рядом с полями сражений.',
            why: 'Вестник Одина и птица прорицания — другие грани того же образа, не причина роли проводника душ.',
          },
          difficulty_rationale:
            'Базовый тезис карты. Вестника Одина и птицу прорицания легко подставить сюда раньше срока.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'На какой момент указывает ворон в средневековой символике?',
          options: [
            {
              id: 'A',
              text: 'На окончательную гибель без остатка',
            },
            {
              id: 'B',
              text: 'На переход: старое разрушено, новое ещё без формы',
            },
            {
              id: 'C',
              text: 'На торжество света, уже завершённое',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это момент перехода, не финал.',
            detail:
              'Двойная природа: гибель и разложение — или прозрение через испытание. Спор с вороном идёт на пороге, не после приговора.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — переход, когда старое уже разрушено, а новое ещё не обрело форму.',
            why: 'Ни чистого конца, ни уже свершившегося света. Ворон стоит между — как и в сводке: живые и мёртвые.',
          },
          difficulty_rationale:
            'Орденский смысл спора: не «птица смерти», а порог. Двойственность легко схлопнуть в один полюс.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Какое напоминание несёт ворон сверх вести о конце?',
          options: [
            {
              id: 'A',
              text: 'За каждой тенью скрывается возможность увидеть истину',
            },
            {
              id: 'B',
              text: 'Он означает только гибель и разложение',
            },
            {
              id: 'C',
              text: 'Он означает только прозрение, без испытания',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — за каждой тенью скрывается возможность увидеть истину.',
            detail:
              'Архетип пограничного существа: жизнь и смерть, свет и тьма, знание и страх. Тень не запирает истину — указывает на неё.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — проводник к пониманию: за каждой тенью скрывается возможность увидеть истину.',
            why: 'Гибель и прозрение — два полюса одного знака, оба через испытание. Карта не оставляет ворону ни одну сторону в одиночку.',
          },
          difficulty_rationale:
            'Последняя формула текста. За вороном-смертью легко не увидеть ворона-проводника.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Тампліеры, якія спрачаюцца з крумкчом',
      questions: [
        {
          level: 'Story',
          question: 'Чаму крумкача лічылі правадніком душ?',
          options: [
            {
              id: 'A',
              text: 'Чорнае апярэнне і звычка з’яўляцца ля палёў бітваў',
            },
            {
              id: 'B',
              text: 'Ён суправаджае вярхоўнага бога і носіць весткі з усяго свету',
            },
            {
              id: 'C',
              text: 'У антычнасці яго шанавалі як птушку прадказання',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — колер і палі бітваў зрабілі яго правадніком.',
            detail:
              'Той жа выгляд дае другую ролю: назіральнік, які бачыць схаванае. Смерць і веданне сядзяць на адной птушцы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — чорнае апярэнне і з’яўленне побач з палямі бітваў.',
            why: 'Веснік Одзіна і птушка прадказання — іншыя грані таго ж вобраза, не прычына ролі правадніка душ.',
          },
          difficulty_rationale:
            'Базавы тэзіс карты. Весніка Одзіна і птушку прадказання лёгка падставіць сюды раней за тэрмін.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'На які момант указвае крумкач у сярэднявечнай сімволіцы?',
          options: [
            {
              id: 'A',
              text: 'На канчатковую гібель без рэшты',
            },
            {
              id: 'B',
              text: 'На пераход: старое разбурана, новае яшчэ без формы',
            },
            {
              id: 'C',
              text: 'На ўрачыстасць святла, ужо завершаную',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта момант пераходу, не фінал.',
            detail:
              'Падвойная прырода: гібель і разлажэнне — альбо прасвятленне праз выпрабаванне. Спрэчка з крумкачом ідзе на парозе, не пасля прысуду.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пераход, калі старое ўжо разбурана, а новае яшчэ не набыло форму.',
            why: 'Ні чыстага канца, ні ўжо здзейсненага святла. Крумкач стаіць паміж — як і ў зводцы: жывыя і мёртвыя.',
          },
          difficulty_rationale:
            'Ордэнскі сэнс спрэчкі: не «птушка смерці», а парог. Падвойнасць лёгка схіліць у адзін полюс.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Якое напамінанне нясе крумкач звыш весткі пра канец?',
          options: [
            {
              id: 'A',
              text: 'За кожным ценем хаваецца магчымасць убачыць ісціну',
            },
            {
              id: 'B',
              text: 'Ён азначае толькі гібель і разлажэнне',
            },
            {
              id: 'C',
              text: 'Ён азначае толькі прасвятленне, без выпрабавання',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — за кожным ценем хаваецца магчымасць убачыць ісціну.',
            detail:
              'Архетып памежнай істоты: жыццё і смерць, святло і цемра, веданне і страх. Цень не замыкае ісціну — указвае на яе.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — праваднік да разумення: за кожным ценем хаваецца магчымасць убачыць ісціну.',
            why: 'Гібель і прасвятленне — два полюсы аднаго знака, абодва праз выпрабаванне. Карта не пакідае крумкачу ніводны бок у самоце.',
          },
          difficulty_rationale:
            'Апошняя формула тэксту. За крумкачом-смерцю лёгка не ўбачыць крумкача-правадніка.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '与渡鸦争辩的圣殿骑士',
      questions: [
        {
          level: 'Story',
          question: '为何渡鸦被视为灵魂的引导者？',
          options: [
            {
              id: 'A',
              text: '黑色羽毛与常在战场出现的习性',
            },
            {
              id: 'B',
              text: '它伴随至高神，并带来全世界的消息',
            },
            {
              id: 'C',
              text: '在古代它被尊为预言之鸟',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 颜色与战场使它成为引导者。',
            detail:
              '同一面貌给出第二种角色：看见隐秘之事的观察者。死亡与知识栖于一鸟。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 黑色羽毛与出现在战场近旁。',
            why: '奥丁的使者与预言之鸟是同一形象的其他面向——并非灵魂引导者角色的原因。',
          },
          difficulty_rationale:
            '卡片的基本论点。奥丁使者与预言之鸟容易过早塞进这里。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '在中世纪象征中，渡鸦指向何种时刻？',
          options: [
            {
              id: 'A',
              text: '毫无余剩的最终毁灭',
            },
            {
              id: 'B',
              text: '门槛：旧的已毁，新的尚无形',
            },
            {
              id: 'C',
              text: '光明已然完成的胜利',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 过渡的时刻，而非终结。',
            detail:
              '双重本性：死亡与腐朽——或经由考验的洞见。与渡鸦的争辩立在门槛上，而非判决之后。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 门槛：旧的已毁，新的尚未成形。',
            why: '既非纯粹终结，亦非已成之光。渡鸦立于其间——如摘要所言：生者与死者。',
          },
          difficulty_rationale:
            '争辩的骑士团意味：非「死亡之鸟」，而是门槛。双重性容易塌成一极。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '除了终结的消息，渡鸦还带来何种提醒？',
          options: [
            {
              id: 'A',
              text: '每一道阴影背后都藏着看见真理的机会',
            },
            {
              id: 'B',
              text: '它只意味死亡与腐朽',
            },
            {
              id: 'C',
              text: '它只意味洞见，无需考验',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 每一道阴影背后都藏着看见真理的机会。',
            detail:
              '阈限存在的原型：生与死、光与暗、知识与恐惧。阴影并不锁死真理——它指向真理。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 通向理解的引导：每一道阴影背后都藏着看见真理的机会。',
            why: '死亡与洞见是同一符号的两极，皆经考验。卡片不让渡鸦独据一边。',
          },
          difficulty_rationale:
            '文本的末句公式。在死亡之鸦背后，容易看不见引导之鸦。',
          needs_review: false,
        },
      ],
    },
  },
};
