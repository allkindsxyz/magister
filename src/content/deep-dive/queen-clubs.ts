import type { DeepDiveCard } from './types';

export const queenClubs: DeepDiveCard = {
  card_id: 'queen-clubs',
  locales: {
    en: {
      card_title: 'The Templar Hunt',
      questions: [
        {
          level: 'Story',
          question: 'How did the hunt for the Order begin under Jacques de Molay?',
          options: [
            {
              id: 'A',
              text: 'With a new crusade that he led',
            },
            {
              id: 'B',
              text: 'With mass arrests on the order of Philip IV the Fair',
            },
            {
              id: 'C',
              text: 'With burning at the stake in 1307',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — in 1307 Philip IV began the mass arrests.',
            detail:
              'The Master was taken, charged with heresy, tortured. The confession given under torture he later retracted. The stake in Paris — 1314.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — mass arrests on the order of Philip IV the Fair.',
            why: 'A new crusade he only proposed — interest in the East was already gone. The stake is 1314, not the year of the arrests.',
          },
          difficulty_rationale:
            'The event of the hunt. Reform and the call to crusade are easy to take for what actually happened.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did secular power move against the Templars?',
          options: [
            {
              id: 'A',
              text: 'The Order’s wealth and independence rankled; interest in the East was fading',
            },
            {
              id: 'B',
              text: 'Jacques de Molay refused to change anything in the Order',
            },
            {
              id: 'C',
              text: 'The Order itself announced the worship of idols',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — money, independence, and the uselessness of eastern war.',
            detail:
              'He was precisely trying to reform the Order and restore a military purpose. The charges (idols, spitting on the cross, even women’s dress) the card names as the absurdity of fabricated trials.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — wealth and independence provoked discontent, and interest in eastern campaigns was fading.',
            why: 'He did not avoid reform. Idols are an article of the Inquisition, not the Order’s confession. The hunt is political.',
          },
          difficulty_rationale:
            'The motive of the hunt in the Order myth. The trial is easy to take for exposed heresy; reform — for obstinacy.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What, by legend, did Jacques de Molay do at the stake?',
          options: [
            {
              id: 'A',
              text: 'Confirmed the testimony wrung out by torture',
            },
            {
              id: 'B',
              text: 'Cursed the king and the pope, summoning them to God’s judgment',
            },
            {
              id: 'C',
              text: 'Named the Masonic “son of the widow” as heir',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he cursed the king and the pope; both soon died.',
            detail:
              'His death closed the Order. The symbolism of the Master the Freemasons later took up in the figure of the “son of the widow” — an inheritance of the myth, not a gesture from the stake.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — by legend, he cursed the king and the pope, summoning them to stand before God’s judgment.',
            why: 'Testimony given under torture he precisely retracted. The “son of the widow” is a later Masonic heir of the image, not the dying man’s words.',
          },
          difficulty_rationale:
            'The ending unread behind the arrests. The “son of the widow” from the gloss is easy to place at the stake.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Охота Тамплиера',
      questions: [
        {
          level: 'Story',
          question: 'С чего началась охота на орден при Жаке де Моле?',
          options: [
            {
              id: 'A',
              text: 'С нового крестового похода, который он возглавил',
            },
            {
              id: 'B',
              text: 'С массовых арестов по приказу Филиппа IV Красивого',
            },
            {
              id: 'C',
              text: 'С сожжения на костре в 1307 году',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — в 1307-м Филипп IV начал массовые аресты.',
            detail:
              'Магистра взяли, обвинили в ереси, пытали. Признание, данное под пыткой, он потом снял. Костёр в Париже — 1314 год.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — массовые аресты по приказу Филиппа IV Красивого.',
            why: 'Новый поход он только предлагал — интереса к Востоку уже не было. Костёр — 1314-й, не год арестов.',
          },
          difficulty_rationale:
            'Событие охоты. Реформу и призыв к походу легко принять за то, что действительно случилось.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему светская власть пошла на тамплиеров?',
          options: [
            {
              id: 'A',
              text: 'Богатство и независимость ордена раздражали; интерес к Востоку угасал',
            },
            {
              id: 'B',
              text: 'Жак де Моле отказался что-либо менять в ордене',
            },
            {
              id: 'C',
              text: 'Орден сам объявил о поклонении идолам',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — деньги, независимость и ненужность восточной войны.',
            detail:
              'Он как раз пытался реформировать орден и вернуть военный смысл. Обвинения (идолы, плевок на крест, в том числе женское платье) карта называет абсурдом сфабрикованных процессов.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — богатство и независимость вызывали недовольство, а интерес к восточным кампаниям угасал.',
            why: 'Реформ он не избегал. Идолы — статья инквизиции, не признание ордена. Охота политическая.',
          },
          difficulty_rationale:
            'Мотив охоты в мифе ордена. Процесс легко принять за раскрытую ересь, реформу — за упрямство.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что, по легенде, сделал Жак де Моле на костре?',
          options: [
            {
              id: 'A',
              text: 'Подтвердил показания, выбитые пыткой',
            },
            {
              id: 'B',
              text: 'Проклял короля и папу, призвав их на Божий суд',
            },
            {
              id: 'C',
              text: 'Назвал масонского «сына вдовы» наследником',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — проклял короля и папу; оба вскоре умерли.',
            detail:
              'Гибель закрыла орден. Символизм магистра масоны позже взяли в образе «сына вдовы» — это наследование мифа, не жест с костра.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — по легенде, проклял короля и папу, призвав их предстать перед Божьим судом.',
            why: 'Показания, данные под пыткой, он как раз снял. «Сын вдовы» — поздний масонский наследник образа, не слова умирающего.',
          },
          difficulty_rationale:
            'Концовка, которую за арестами не читают. «Сына вдовы» из сводки легко поставить на костёр.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Паляванне тампліера',
      questions: [
        {
          level: 'Story',
          question: 'З чаго пачалася паляванне на ордэн пры Жаку дэ Моле?',
          options: [
            {
              id: 'A',
              text: 'З новага крыжовага паходу, які ён узначаліў',
            },
            {
              id: 'B',
              text: 'З масавых арыштаў па загадзе Філіпа IV Прыгожага',
            },
            {
              id: 'C',
              text: 'З спалення на вогнішчы ў 1307 годзе',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — у 1307-м Філіп IV пачаў масавыя арышты.',
            detail:
              'Магістра ўзялі, абвінавацілі ў ерасі, катавалі. Прызнанне, дадзенае пад катаваннем, ён потым зняў. Вогнішча ў Парыжы — 1314 год.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — масавыя арышты па загадзе Філіпа IV Прыгожага.',
            why: 'Новы паход ён толькі прапаноўваў — цікавасці да Усходу ўжо не было. Вогнішча — 1314-ы, не год арыштаў.',
          },
          difficulty_rationale:
            'Падзея палявання. Рэформу і заклік да паходу лёгка прыняць за тое, што сапраўды здарылася.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму свецкая ўлада пайшла на тампліераў?',
          options: [
            {
              id: 'A',
              text: 'Багацце і незалежнасць ордэна раздражнялі; цікавасць да Усходу згасала',
            },
            {
              id: 'B',
              text: 'Жак дэ Моле адмовіўся што-небудзь мяняць у ордэне',
            },
            {
              id: 'C',
              text: 'Ордэн сам абвясціў пра пакланенне ідалам',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — грошы, незалежнасць і непатрэбнасць усходняй вайны.',
            detail:
              'Ён якраз спрабаваў рэфармаваць ордэн і вярнуць ваенны сэнс. Абвінавачванні (ідалы, плювок на крыж, у тым ліку жаночае адзенне) карта называе абсурдам сфабрыкаваных працэсаў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — багацце і незалежнасць выклікалі незадаволенасць, а цікавасць да ўсходніх кампаній згасала.',
            why: 'Рэформаў ён не пазбягаў. Ідалы — артыкул інквізіцыі, не прызнанне ордэна. Паляванне палітычнае.',
          },
          difficulty_rationale:
            'Матыў палявання ў міфе ордэна. Працэс лёгка прыняць за раскрытую ерась, рэформу — за ўпартасць.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што, паводле легенды, зрабіў Жак дэ Моле на вогнішчы?',
          options: [
            {
              id: 'A',
              text: 'Пацвердзіў паказанні, выбітыя катаваннем',
            },
            {
              id: 'B',
              text: 'Пракляў караля і папу, заклікаўшы іх на Божы суд',
            },
            {
              id: 'C',
              text: 'Назваў масонскага «сына ўдавы» наследнікам',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пракляў караля і папу; абодва неўзабаве памерлі.',
            detail:
              'Гібель закрыла ордэн. Сімвалізм магістра масоны пазней узялі ў вобразе «сына ўдавы» — гэта спадкаванне міфа, не жэст з вогнішча.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — паводле легенды, пракляў караля і папу, заклікаўшы іх прадстаць перад Божым судом.',
            why: 'Паказанні, дадзеныя пад катаваннем, ён якраз зняў. «Сын удавы» — позні масонскі наследнік вобраза, не словы паміраючага.',
          },
          difficulty_rationale:
            'Канцоўка, якую за арыштамі не чытаюць. «Сына ўдавы» са зводкі лёгка паставіць на вогнішча.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '圣殿骑士的狩猎',
      questions: [
        {
          level: 'Story',
          question: '雅克·德·莫莱任内，对骑士团的狩猎如何开始？',
          options: [
            {
              id: 'A',
              text: '以他统领的新十字军开始',
            },
            {
              id: 'B',
              text: '以美男子腓力四世下令的大规模逮捕开始',
            },
            {
              id: 'C',
              text: '以1307年的火刑开始',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 1307年腓力四世开始大规模逮捕。',
            detail:
              '大团长被抓、以异端罪名受审并遭酷刑。酷刑下的供词他后来撤回。巴黎火刑——1314年。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 美男子腓力四世下令的大规模逮捕。',
            why: '新十字军他只是提议——东方已无人关心。火刑是1314年，不是逮捕之年。',
          },
          difficulty_rationale:
            '狩猎的事件。改革与十字军号召容易被当成实际发生之事。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '世俗权力为何动手对付圣殿骑士？',
          options: [
            {
              id: 'A',
              text: '骑士团的财富与独立令人忌惮；对东方的兴趣正在消退',
            },
            {
              id: 'B',
              text: '雅克·德·莫莱拒绝在骑士团中做任何改变',
            },
            {
              id: 'C',
              text: '骑士团自己宣布崇拜偶像',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 金钱、独立，以及东方战争的无用。',
            detail:
              '他恰恰试图改革骑士团并恢复军事目的。指控（偶像、唾弃十字架，乃至女装）被卡片称为捏造审判的荒谬。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 财富与独立激起不满，而对东方征战的兴趣正在消退。',
            why: '他并未回避改革。偶像是宗教裁判所的条款，不是骑士团的供认。狩猎是政治的。',
          },
          difficulty_rationale:
            '骑士团神话中狩猎的动机。审判容易被当成揭露异端；改革容易被当成顽固。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '据传说，雅克·德·莫莱在火刑上做了什么？',
          options: [
            {
              id: 'A',
              text: '确认了酷刑逼出的供词',
            },
            {
              id: 'B',
              text: '诅咒国王与教宗，召他们接受上帝审判',
            },
            {
              id: 'C',
              text: '指定共济会的「寡妇之子」为继承人',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他诅咒了国王与教宗；二人不久皆死。',
            detail:
              '他的死合上了骑士团。大团长的象征后来被共济会纳入「寡妇之子」的形象——那是神话的继承，不是火刑上的姿态。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 据传说，他诅咒国王与教宗，召他们站到上帝的审判前。',
            why: '酷刑下的供词他恰恰撤回了。「寡妇之子」是后世共济会对形象的继承，不是临终之言。',
          },
          difficulty_rationale:
            '淹没在逮捕之后的结局。摘要中的「寡妇之子」容易被放到火刑上。',
          needs_review: false,
        },
      ],
    },
  },
};
