import type { DeepDiveCard } from './types';

export const tenClubs: DeepDiveCard = {
  card_id: '10-clubs',
  locales: {
    en: {
      card_title: 'Defense of the Fortress',
      questions: [
        {
          level: 'Story',
          question: 'What privilege did the Order receive under Robert de Craon?',
          options: [
            {
              id: 'A',
              text: 'The right to submit to the local church hierarchy',
            },
            {
              id: 'B',
              text: 'The right to answer directly to the Pope, bypassing the local church',
            },
            {
              id: 'C',
              text: 'Exclusive rights to military campaigns in the East',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — direct submission to the Pope, past the local hierarchy.',
            detail:
              'After Hugues de Payens’s death (1136) the second Master turned to consolidation. This privilege is the main concrete act of his rule in the text.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the right to answer directly to the Pope, bypassing the local church hierarchy.',
            why: 'The local hierarchy was precisely what was bypassed. He waged campaigns in the East, but that was no granted privilege. Defense here is legal independence.',
          },
          difficulty_rationale:
            'The central fact of the description. The title promises a fortress the text never shows.',
          needs_review: true,
          needs_review_reason:
            'The title is “Defense of the Fortress”; the text has no concrete fortress — it concerns organization and a papal privilege.',
        },
        {
          level: 'Context',
          question: 'What did this right make the Order within Christendom?',
          options: [
            {
              id: 'A',
              text: 'An independent and influential structure',
            },
            {
              id: 'B',
              text: 'A vassal of the King of Jerusalem',
            },
            {
              id: 'C',
              text: 'Part of the local episcopate',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the Order became independent of the local church.',
            detail:
              'To bypass the hierarchy is to step out from under the bishops. Next: lands in Europe, its own resources, the support of the nobility. The fortress is the organization itself.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — an independent and influential structure within Christendom.',
            why: 'The opposite of vassalage and the episcopate. The sense of the privilege is not to fit in, but to step out.',
          },
          difficulty_rationale:
            'Why the papal grant matters to the Order. Easy to read it as submission to the king of the Holy Land.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What did the small brotherhood become under him?',
          options: [
            {
              id: 'A',
              text: 'A wandering band without lands',
            },
            {
              id: 'B',
              text: 'An organizationally powerful system with resources and noble support',
            },
            {
              id: 'C',
              text: 'A closed monastery without a military role',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a system with resources, neither a band nor a hermitage.',
            detail:
              'War in the East ran in parallel. The key force of the crusading age takes shape here as a machine, not as one Master’s exploit.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — an organizationally powerful system with its own resources and the support of the nobility.',
            why: 'Neither landlessness nor a renunciation of war. He died in the Holy Land in 1149, leaving the Order formed, not folded.',
          },
          difficulty_rationale:
            'The gloss’s judgment: a brilliant organizer. Military “defense of the fortress” is easy to leave without the administrative thesis.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Защита крепости',
      questions: [
        {
          level: 'Story',
          question: 'Какую привилегию орден получил при Робере де Краоне?',
          options: [
            {
              id: 'A',
              text: 'Право подчиняться местной церковной иерархии',
            },
            {
              id: 'B',
              text: 'Право подчиняться напрямую Папе, минуя местную церковь',
            },
            {
              id: 'C',
              text: 'Исключительное право военных кампаний на Востоке',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — прямое подчинение Папе, в обход местной иерархии.',
            detail:
              'После смерти Гуго де Пейна (1136) второй магистр занялся укреплением. Эта привилегия — главный конкретный акт его правления в тексте.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — право подчиняться напрямую Папе Римскому, минуя местную церковную иерархию.',
            why: 'Местную иерархию как раз обошли. Кампании на Востоке он вёл, но это не дарованная привилегия. Защита здесь — юридическая независимость.',
          },
          difficulty_rationale:
            'Центральный факт описания. Название сулит крепость, которой в тексте нет.',
          needs_review: true,
          needs_review_reason:
            'Название — «Защита крепости»; в тексте конкретной крепости нет, речь об организации и папской привилегии.',
        },
        {
          level: 'Context',
          question: 'Чем это право сделало орден внутри христианского мира?',
          options: [
            {
              id: 'A',
              text: 'Независимой и влиятельной структурой',
            },
            {
              id: 'B',
              text: 'Вассалом иерусалимского короля',
            },
            {
              id: 'C',
              text: 'Частью местного епископата',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — орден стал независим от местной церкви.',
            detail:
              'Миновать иерархию — выйти из-под епископов. Дальше: земли в Европе, свои ресурсы, опора знати. Крепость — сама организация.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — независимой и влиятельной структурой внутри христианского мира.',
            why: 'Прямо противоположное вассалитету и епископату. Смысл привилегии — не встроиться, а выйти.',
          },
          difficulty_rationale:
            'Зачем папская льгота нужна ордену. Её легко прочитать как подчинение королю Святой земли.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Во что при нём превратилось небольшое братство?',
          options: [
            {
              id: 'A',
              text: 'В странствующий отряд без земель',
            },
            {
              id: 'B',
              text: 'В организационно мощную систему с ресурсами и поддержкой знати',
            },
            {
              id: 'C',
              text: 'В закрытый монастырь без военной роли',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — в систему с ресурсами, не в отряд и не в скит.',
            detail:
              'Война на Востоке шла параллельно. Ключевая сила эпохи крестовых походов складывается здесь как машина, не как подвиг одного магистра.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — в организационно мощную систему с собственными ресурсами и поддержкой знати.',
            why: 'Ни безземелья, ни отказа от войны. Он умер в Святой земле в 1149-м, оставив орден оформленным, не свёрнутым.',
          },
          difficulty_rationale:
            'Вывод сводки: блестящий организатор. Военную «защиту крепости» легко оставить без административного тезиса.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Абарона крэпасці',
      questions: [
        {
          level: 'Story',
          question: 'Якую прывілею ордэн атрымаў пры Роберы дэ Краоне?',
          options: [
            {
              id: 'A',
              text: 'Права падпарадкоўвацца мясцовай царкоўнай іерархіі',
            },
            {
              id: 'B',
              text: 'Права падпарадкоўвацца наўпрост Папе, мінуючы мясцовую царкву',
            },
            {
              id: 'C',
              text: 'Выключнае права ваенных кампаній на Усходзе',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — прамое падпарадкаванне Папе, у абход мясцовай іерархіі.',
            detail:
              'Пасля смерці Гугі дэ Пейна (1136) другі магістр заняўся ўмацаваннем. Гэтая прывілея — галоўны канкрэтны акт яго кіравання ў тэксце.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — права падпарадкоўвацца наўпрост Папе Рымскаму, мінуючы мясцовую царкоўную іерархію.',
            why: 'Мясцовую іерархію якраз абышлі. Кампаніі на Усходзе ён вёў, але гэта не дараваная прывілея. Абарона тут — юрыдычная незалежнасць.',
          },
          difficulty_rationale:
            'Цэнтральны факт апісання. Назва абяцае крэпасць, якой у тэксце няма.',
          needs_review: true,
          needs_review_reason:
            'Назва — «Абарона крэпасці»; у тэксце канкрэтнай крэпасці няма, гаворка пра арганізацыю і папскую прывілею.',
        },
        {
          level: 'Context',
          question: 'Чым гэтае права зрабіла ордэн унутры хрысціянскага свету?',
          options: [
            {
              id: 'A',
              text: 'Незалежнай і ўплывовай структурай',
            },
            {
              id: 'B',
              text: 'Васалам іерусалімскага караля',
            },
            {
              id: 'C',
              text: 'Часткай мясцовага епіскапату',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ордэн стаў незалежны ад мясцовай царквы.',
            detail:
              'Мінуць іерархію — выйсці з-пад епіскапаў. Далей: землі ў Еўропе, свае рэсурсы, апоры знаці. Крэпасць — сама арганізацыя.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — незалежнай і ўплывовай структурай унутры хрысціянскага свету.',
            why: 'Проста супрацьлеглае васальнасці і епіскапату. Сэнс прывілеі — не ўбудавацца, а выйсці.',
          },
          difficulty_rationale:
            'Навошта папская льгота патрэбна ордэну. Яе лёгка прачытаць як падпарадкаванне каралю Святой зямлі.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'У што пры ім ператварылася невялікае брацтва?',
          options: [
            {
              id: 'A',
              text: 'У вандроўны атрад без зямель',
            },
            {
              id: 'B',
              text: 'У арганізацыйна магутную сістэму з рэсурсамі і падтрымкай знаці',
            },
            {
              id: 'C',
              text: 'У закрыты манастыр без ваеннай ролі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — у сістэму з рэсурсамі, не ў атрад і не ў скіт.',
            detail:
              'Вайна на Усходзе ішла паралельна. Ключавая сіла эпохі крыжовых паходаў складаецца тут як машына, не як подзвіг аднаго магістра.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — у арганізацыйна магутную сістэму з уласнымі рэсурсамі і падтрымкай знаці.',
            why: 'Ні беззямелля, ні адмовы ад вайны. Ён памёр у Святой зямлі ў 1149-м, пакінуўшы ордэн аформленым, не скручаным.',
          },
          difficulty_rationale:
            'Выснова зводкі: бліскучы арганізатар. Ваенную «абарону крэпасці» лёгка пакінуць без адміністрацыйнага тэзіса.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '要塞防御',
      questions: [
        {
          level: 'Story',
          question: '罗贝尔·德·克拉翁任内，骑士团获得了何种特权？',
          options: [
            {
              id: 'A',
              text: '服从地方教会等级的权利',
            },
            {
              id: 'B',
              text: '直接听命于教宗、绕过地方教会的权利',
            },
            {
              id: 'C',
              text: '在东方发动军事行动的专属权利',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 直接听命于教宗，绕过地方等级。',
            detail:
              '于格·德·帕扬死后（1136），第二任大团长着手巩固。这一特权是文本中其统治的主要具体举措。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 直接听命于教宗、绕过地方教会等级的权利。',
            why: '地方等级恰恰被绕过。他确在东方征战，但那不是获赐的特权。此处的防御是法律上的独立。',
          },
          difficulty_rationale:
            '描述的中心事实。标题许诺要塞，文本却未出现。',
          needs_review: true,
          needs_review_reason:
            '标题是「要塞防御」；文本并无具体要塞——谈的是组织与教宗特权。',
        },
        {
          level: 'Context',
          question: '这一权利使骑士团在基督教世界中成为什么？',
          options: [
            {
              id: 'A',
              text: '独立而有影响力的结构',
            },
            {
              id: 'B',
              text: '耶路撒冷国王的附庸',
            },
            {
              id: 'C',
              text: '地方主教团的一部分',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 骑士团独立于地方教会。',
            detail:
              '绕过等级即走出主教之下。随后：欧洲地产、自有资源、贵族支持。要塞就是组织本身。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 基督教世界中独立而有影响力的结构。',
            why: '恰与附庸和主教团相反。特权的意义不是嵌入，而是走出。',
          },
          difficulty_rationale:
            '教宗恩准为何对骑士团重要。容易读成服从圣地之王。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '在他治下，小小兄弟会变成了什么？',
          options: [
            {
              id: 'A',
              text: '没有地产的游荡队伍',
            },
            {
              id: 'B',
              text: '拥有资源与贵族支持的组织强力体系',
            },
            {
              id: 'C',
              text: '没有军事角色的封闭修道院',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 拥有资源的体系，既非队伍亦非隐修院。',
            detail:
              '东方的战争并行展开。十字军时代的关键力量在此成形为一台机器，而非一位大团长的功业。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 拥有自有资源与贵族支持的组织强力体系。',
            why: '既非无地，亦非弃战。他于1149年死在圣地，留下成形而非收束的骑士团。',
          },
          difficulty_rationale:
            '摘要的判断：出色的组织者。军事「要塞防御」容易留下却丢掉行政论点。',
          needs_review: false,
        },
      ],
    },
  },
};
