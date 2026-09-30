import type { DeepDiveCard } from './types';

export const threeDiamonds: DeepDiveCard = {
  card_id: '3-diamonds',
  locales: {
    en: {
      card_title: 'The Barrel-Bearer',
      questions: [
        {
          level: 'Story',
          question: 'Who is inside the Barrel-Bearer’s barrels?',
          options: [
            {
              id: 'A',
              text: 'Those still seeking the secret and who have not found it',
            },
            {
              id: 'B',
              text: 'Sages who have already found it and are ready to cross the limit',
            },
            {
              id: 'C',
              text: 'Gods who have renounced their own world',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — these are sages on the threshold of passage.',
            detail:
              'They no longer seek: they have found. The calm on their faces is completion, not the start of a path. The barrels are not the beginning of knowing, but the last step.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — sages who have walked the path of knowing and are ready to cross the limit.',
            why: 'Not seekers and not gods in the barrels. Those who have already renounced former truths and seen what cannot be said in words.',
          },
          difficulty_rationale:
            'Main thesis of the card: whom she carries. We do not ask about the yoke — it is visible in the image.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why does the barrel-bearer appear?',
          options: [
            {
              id: 'A',
              text: 'After the secret is revealed one cannot live as before — knowledge demands passage',
            },
            {
              id: 'B',
              text: 'To return the sages to their former life',
            },
            {
              id: 'C',
              text: 'To punish those who learned too much',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — she comes at the moment when knowledge demands passage.',
            detail:
              'She is neither judge nor jailer. She gathers the ready and holds the balance between past and future until they cross the boundary.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — because after the secret is revealed, knowledge demands passage.',
            why: 'The person can no longer live as before. The barrel-bearer appears neither to punish nor to return — to lead through this threshold.',
          },
          difficulty_rationale:
            'Link “secret revealed → cannot live as before → a guide appears.” Without it the barrels read as captivity.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'How does the card describe the sages’ stay in the barrels?',
          options: [
            {
              id: 'A',
              text: 'As judgment on those who knew the forbidden',
            },
            {
              id: 'B',
              text: 'As loss of self on the way',
            },
            {
              id: 'C',
              text: 'As a final silence — not imprisonment',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — it is silence, not captivity.',
            detail:
              'The sages do not lose themselves: they release what no longer matters. At the boundary the barrels will open, and none will return — only an enlightened life.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a final silence before a new form of being, not imprisonment.',
            why: 'The card sharply separates silence from captivity. The sages neither lose themselves nor await judgment — they prepare for rebirth beyond this world.',
          },
          difficulty_rationale:
            'Easy to read the barrels as a cage. The text insists on the opposite — a detail often skipped.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Носильщица бочек',
      questions: [
        {
          level: 'Story',
          question: 'Кто находится в бочках Носильщицы?',
          options: [
            {
              id: 'A',
              text: 'Те, кто ещё только ищет тайну и не нашёл её',
            },
            {
              id: 'B',
              text: 'Мудрецы, уже нашедшие и готовые переступить предел',
            },
            {
              id: 'C',
              text: 'Боги, отказавшиеся от своего мира',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это мудрецы на пороге перехода.',
            detail:
              'Они уже не ищут: нашли. Спокойствие на их лицах — завершённость, а не начало пути. Бочки — не старт познания, а последний шаг.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — мудрецы, прошедшие путь познания и готовые переступить предел.',
            why: 'В бочках не искатели и не боги. Там те, кто уже отказался от прежних истин и увидел то, чего нельзя сказать словами.',
          },
          difficulty_rationale:
            'Главный тезис карты: кого она несёт. Не спрашиваем про коромысло — его видно на картине.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему появляется носильщица?',
          options: [
            {
              id: 'A',
              text: 'После раскрытия тайны нельзя жить как прежде — знание требует перехода',
            },
            {
              id: 'B',
              text: 'Чтобы вернуть мудрецов назад, к прежней жизни',
            },
            {
              id: 'C',
              text: 'Чтобы покарать тех, кто узнал слишком много',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — она приходит в момент, когда знание требует перехода.',
            detail:
              'Она не судья и не тюремщик. Собирает готовых и держит равновесие между прошлым и будущим, пока они не переступят границу.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — потому что после раскрытия тайны знание требует перехода.',
            why: 'Человек уже не может жить как прежде. Носильщица появляется не карать и не возвращать — провести через этот порог.',
          },
          difficulty_rationale:
            'Связь «тайна раскрыта → жить как прежде нельзя → появляется проводник». Без этой связи бочки читаются как плен.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Как карта описывает пребывание мудрецов в бочках?',
          options: [
            {
              id: 'A',
              text: 'Как суд над теми, кто познал запретное',
            },
            {
              id: 'B',
              text: 'Как утрату себя в пути',
            },
            {
              id: 'C',
              text: 'Как последнюю тишину — не заточение',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это тишина, а не плен.',
            detail:
              'Мудрецы не теряют себя: отпускают то, что больше не важно. На границе бочки откроются, и вернувшихся не будет — только просветлённая жизнь.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — последняя тишина перед новой формой бытия, а не заточение.',
            why: 'Карта прямо отделяет тишину от плена. Мудрецы не теряют себя и не ждут суда — они готовятся к перерождению за пределами этого мира.',
          },
          difficulty_rationale:
            'Легко прочитать бочки как клетку. Текст настаивает на обратном — деталь, которую пропускают.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Носьбітка бочак',
      questions: [
        {
          level: 'Story',
          question: 'Хто знаходзіцца ў бочках Носьбіткі?',
          options: [
            {
              id: 'A',
              text: 'Тыя, хто яшчэ толькі шукае таямніцу і не знайшоў яе',
            },
            {
              id: 'B',
              text: 'Мудрэцы, ужо знайшоўшыя і гатовыя пераступіць мяжу',
            },
            {
              id: 'C',
              text: 'Багі, якія адмовіліся ад свайго свету',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта мудрэцы на парозе пераходу.',
            detail:
              'Яны ўжо не шукаюць: знайшлі. Спакой на іх тварах — завершанасць, а не пачатак шляху. Бочкі — не старт пазнання, а апошні крок.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — мудрэцы, што прайшлі шлях пазнання і гатовыя пераступіць мяжу.',
            why: 'У бочках не шукальнікі і не багі. Там тыя, хто ўжо адмовіўся ад былых ісцін і ўбачыў тое, чаго нельга сказаць словамі.',
          },
          difficulty_rationale:
            'Галоўны тэзіс карты: каго яна нясе. Не пытаемся пра каромысел — яго відаць на карціне.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму з\'яўляецца носьбітка?',
          options: [
            {
              id: 'A',
              text: 'Пасля раскрыцця таямніцы нельга жыць як раней — веданне патрабуе пераходу',
            },
            {
              id: 'B',
              text: 'Каб вярнуць мудрэцаў назад, да былога жыцця',
            },
            {
              id: 'C',
              text: 'Каб пакараць тых, хто даведаўся занадта шмат',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яна прыходзіць у момант, калі веданне патрабуе пераходу.',
            detail:
              'Яна не суддзя і не вязніца. Збірае гатовых і трымае раўнавагу паміж мінулым і будучым, пакуль яны не пераступяць мяжу.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — таму што пасля раскрыцця таямніцы веданне патрабуе пераходу.',
            why: 'Чалавек ужо не можа жыць як раней. Носьбітка з\'яўляецца не караць і не вяртаць — правесці праз гэты парог.',
          },
          difficulty_rationale:
            'Сувязь «таямніца раскрыта → жыць як раней нельга → з\'яўляецца праваднік». Без гэтай сувязі бочкі чытаюцца як палон.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Як карта апісвае знаходжанне мудрэцаў у бочках?',
          options: [
            {
              id: 'A',
              text: 'Як суд над тымі, хто пазнаў забароненае',
            },
            {
              id: 'B',
              text: 'Як страту сябе ў шляху',
            },
            {
              id: 'C',
              text: 'Як апошнюю цішыню — не зняволенне',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта цішыня, а не палон.',
            detail:
              'Мудрэцы не губляюць сябе: адпускаюць тое, што больш не важна. На мяжы бочкі адкрыюцца, і тых, хто вярнуўся, не будзе — толькі прасветленае жыццё.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — апошняя цішыня перад новай формай быцця, а не зняволенне.',
            why: 'Карта проста аддзяляе цішыню ад палону. Мудрэцы не губляюць сябе і не чакаюць суда — яны рыхтуюцца да перараджэння за межамі гэтага свету.',
          },
          difficulty_rationale:
            'Лёгка прачытаць бочкі як клетку. Тэкст настойвае на адваротным — дэталь, якую прапускаюць.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '女挑桶人',
      questions: [
        {
          level: 'Story',
          question: '女挑桶人的桶里是谁？',
          options: [
            {
              id: 'A',
              text: '仍在寻秘、尚未得见的人',
            },
            {
              id: 'B',
              text: '已经寻得、准备跨过界限的智者',
            },
            {
              id: 'C',
              text: '已弃绝自己世界的神',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 是站在过渡门槛上的智者。',
            detail:
              '他们不再寻：已经找到。脸上的平静是完成，不是起程。桶不是求知的开端，而是最后一步。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 走过求知之途、准备跨过界限的智者。',
            why: '桶里不是寻访者，也不是神。是已弃绝旧真理、看见言语无法说出之事的人。',
          },
          difficulty_rationale:
            '此卡主旨：她负起的是谁。不问扁担——画上已见。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '女挑桶人为何出现？',
          options: [
            {
              id: 'A',
              text: '秘密揭开后无法照旧生活——知识要求过渡',
            },
            {
              id: 'B',
              text: '为了把智者送回旧日生活',
            },
            {
              id: 'C',
              text: '为了惩罚知道得太多的人',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 她在知识要求过渡的那一刻到来。',
            detail:
              '她既非法官，也非狱卒。她聚起准备好的人，并在他们跨界之前，托住过去与未来之间的平衡。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 因为秘密揭开之后，知识要求过渡。',
            why: '人已无法照旧生活。女挑桶人的出现不是为惩罚，也不是为送回——而是引领越过这道门槛。',
          },
          difficulty_rationale:
            '链条「秘密揭开→无法照旧→向导出现」。没有它，桶就被读成囚禁。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '此卡如何描述智者在桶中的停留？',
          options: [
            {
              id: 'A',
              text: '对知晓禁物者的审判',
            },
            {
              id: 'B',
              text: '途中的自丧',
            },
            {
              id: 'C',
              text: '最后的静默——不是囚禁',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 是静默，不是囚禁。',
            detail:
              '智者并不失去自己：他们放下已不重要的。在边界处桶会打开，不会有人归来——只有澄明的生命。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 新存在形式之前的最后静默，不是囚禁。',
            why: '此卡明确把静默与囚禁分开。智者既不自丧，也不等待审判——他们准备在此世之外重生。',
          },
          difficulty_rationale:
            '桶易被读成笼子。文本坚持相反——常被略过的细节。',
          needs_review: false,
        },
      ],
    },
  },
};
