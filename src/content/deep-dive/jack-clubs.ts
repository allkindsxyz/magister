import type { DeepDiveCard } from './types';

export const jackClubs: DeepDiveCard = {
  card_id: 'jack-clubs',
  locales: {
    en: {
      card_title: 'Miracle of the Horse',
      questions: [
        {
          level: 'Story',
          question: 'After what did Armand de Périgord swear to enter the Order?',
          options: [
            {
              id: 'A',
              text: 'After his election as Grand Master',
            },
            {
              id: 'B',
              text: 'After he nearly died falling from a horse',
            },
            {
              id: 'C',
              text: 'After the defeat at La Forbie',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the vow after a near-fatal fall from a horse.',
            detail:
              'The gloss makes the miracle the opening. The description never repeats that fall: there, at once, the office of 1232 and the war.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — after he nearly died falling from a horse.',
            why: 'Election is 1232, already inside the Order. La Forbie is the end, not the cause of the vow: he came there as Master.',
          },
          difficulty_rationale:
            'The thesis of the title. The description knows no horse — only La Forbie — so the opening is easy to displace with the defeat.',
          needs_review: true,
          needs_review_reason:
            'The gloss gives the vow after a fall from a horse; the description never mentions the horse — only La Forbie and death.',
        },
        {
          level: 'Context',
          question: 'What did the battle of La Forbie become for his mastership?',
          options: [
            {
              id: 'A',
              text: 'A victory that restored the coast',
            },
            {
              id: 'B',
              text: 'One of the heaviest defeats, where by most sources he fell',
            },
            {
              id: 'C',
              text: 'An exchange of prisoners that preserved the Order',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the rout of 1244 and, by most sources, death on the field.',
            detail:
              'The united Christian forces fell with a great number of brothers. Fortified defense and alliances did not save an unstable East.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — one of the crusaders’ heaviest defeats, where by most sources he fell.',
            why: 'Neither victory nor a profitable exchange. The climax of his leadership is loss, not miracle.',
          },
          difficulty_rationale:
            'The sense of the career in the description. The title about the horse is easy to keep from reaching La Forbie.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Of what did Armand’s death become a symbol?',
          options: [
            {
              id: 'A',
              text: 'A turning point: after La Forbie Christian positions in the East weakened sharply',
            },
            {
              id: 'B',
              text: 'The Order’s rebirth in Europe',
            },
            {
              id: 'C',
              text: 'The same miracle with which the vow began',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a turning point and the decline of former power.',
            detail:
              'The life mirrors the Order’s thirteenth century: unbroken struggle, mounting losses. The horse gave the entrance; the field took the sum.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — a turning point: after La Forbie Christian positions in the Holy Land weakened greatly.',
            why: 'The card promises no rebirth. The miracle of the horse is the gloss’s opening, not the morality of the death.',
          },
          difficulty_rationale:
            'The last paragraph. Vow-miracle and rout sit in different layers of the text — and are glued together.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Чудо о коне',
      questions: [
        {
          level: 'Story',
          question: 'После чего Арман де Перигор поклялся вступить в орден?',
          options: [
            {
              id: 'A',
              text: 'После избрания великим магистром',
            },
            {
              id: 'B',
              text: 'После того, как чуть не погиб, упав с лошади',
            },
            {
              id: 'C',
              text: 'После разгрома при Ла-Форби',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — обет после почти смертельного падения с коня.',
            detail:
              'Сводка делает чудо завязкой. Описание этого падения не повторяет: там сразу сан 1232 года и война.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — после того, как чуть не погиб, упав с лошади.',
            why: 'Избрание — 1232 год, уже внутри ордена. Ла-Форби — конец, не причина обета: туда он пришёл магистром.',
          },
          difficulty_rationale:
            'Тезис названия. Описание коня не знает — только Ла-Форби, поэтому завязку легко вытеснить разгромом.',
          needs_review: true,
          needs_review_reason:
            'Сводка даёт обет после падения с коня; описание коня не упоминает — только Ла-Форби и гибель.',
        },
        {
          level: 'Context',
          question: 'Чем стала битва при Ла-Форби для его магистерства?',
          options: [
            {
              id: 'A',
              text: 'Победой, вернувшей побережье',
            },
            {
              id: 'B',
              text: 'Одним из самых тяжёлых поражений, где он, по большинству источников, погиб',
            },
            {
              id: 'C',
              text: 'Обменом пленных, сохранившим орден',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — разгром 1244 года и, по большинству источников, смерть на поле.',
            detail:
              'Объединённые силы христиан полегли вместе с большим числом братьев. Укрепление обороны и союзы не спасли нестабильный Восток.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — одно из самых тяжёлых поражений крестоносцев, где он, по большинству источников, погиб.',
            why: 'Ни победы, ни выгодного обмена. Кульминация руководства — потеря, не чудо.',
          },
          difficulty_rationale:
            'Смысл карьеры в описании. Название про коня легко не пустить к Ла-Форби.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Символом чего стала гибель Армана?',
          options: [
            {
              id: 'A',
              text: 'Перелома: после Ла-Форби позиции христиан на Востоке сильно ослабли',
            },
            {
              id: 'B',
              text: 'Возрождения ордена в Европе',
            },
            {
              id: 'C',
              text: 'Того же чуда, с которого начался обет',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — перелом и закат прежнего могущества.',
            detail:
              'Жизнь отражает XIII век ордена: непрерывная борьба, нарастающие потери. Конь дал вход; поле забрало итог.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — перелом: после Ла-Форби позиции христиан в Святой земле значительно ослабли.',
            why: 'Возрождения карта не обещает. Чудо коня — завязка сводки, не мораль гибели.',
          },
          difficulty_rationale:
            'Последний абзац. Обетное чудо и разгром стоят в разных слоях текста — их склеивают.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Цуд пра каня',
      questions: [
        {
          level: 'Story',
          question: 'Пасля чаго Арман дэ Перыгор пакляўся ўступіць у ордэн?',
          options: [
            {
              id: 'A',
              text: 'Пасля абрання вялікім магістрам',
            },
            {
              id: 'B',
              text: 'Пасля таго, як ледзь не загінуў, упаўшы з каня',
            },
            {
              id: 'C',
              text: 'Пасля разгрому пры Ла-Форбі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — абяцанне пасля амаль смяротнага падзення з каня.',
            detail:
              'Зводка робіць цуд завязкай. Апісанне гэтага падзення не паўтарае: там адразу сан 1232 года і вайна.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пасля таго, як ледзь не загінуў, упаўшы з каня.',
            why: 'Абранне — 1232 год, ужо ўнутры ордэна. Ла-Форбі — канец, не прычына абяцання: туды ён прыйшоў магістрам.',
          },
          difficulty_rationale:
            'Тэзіс назвы. Апісанне каня не ведае — толькі Ла-Форбі, таму завязку лёгка выцесніць разгромам.',
          needs_review: true,
          needs_review_reason:
            'Зводка дае абяцанне пасля падзення з каня; апісанне каня не згадвае — толькі Ла-Форбі і гібель.',
        },
        {
          level: 'Context',
          question: 'Чым стала бітва пры Ла-Форбі для яго магістэрства?',
          options: [
            {
              id: 'A',
              text: 'Перамогай, якая вярнула ўзбярэжжа',
            },
            {
              id: 'B',
              text: 'Адным з самых цяжкіх паражэнняў, дзе ён, паводле большасці крыніц, загінуў',
            },
            {
              id: 'C',
              text: 'Абменам палонных, які захаваў ордэн',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — разгром 1244 года і, паводле большасці крыніц, смерць на полі.',
            detail:
              'Аб’яднаныя сілы хрысціян палеглі разам з вялікай колькасцю братоў. Умацаванне абароны і саюзы не выратавалі нестабільны Усход.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — адно з самых цяжкіх паражэнняў крыжакоў, дзе ён, паводле большасці крыніц, загінуў.',
            why: 'Ні перамогі, ні выгаднага абмену. Кульмінацыя кіраўніцтва — страта, не цуд.',
          },
          difficulty_rationale:
            'Сэнс кар’еры ў апісанні. Назву пра каня лёгка не пусціць да Ла-Форбі.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Сімвалам чаго стала гібель Армана?',
          options: [
            {
              id: 'A',
              text: 'Пералому: пасля Ла-Форбі пазіцыі хрысціян на Усходзе моцна аслаблі',
            },
            {
              id: 'B',
              text: 'Адраджэння ордэна ў Еўропе',
            },
            {
              id: 'C',
              text: 'Таго ж цуду, з якога пачалося абяцанне',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пералом і захад былой магутнасці.',
            detail:
              'Жыццё адлюстроўвае XIII стагоддзе ордэна: бесперапынная барацьба, нарастаючыя страты. Конь даў уваход; поле забрала вынік.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — пералом: пасля Ла-Форбі пазіцыі хрысціян у Святой зямлі значна аслаблі.',
            why: 'Адраджэння карта не абяцае. Цуд каня — завязка зводкі, не мараль гібелі.',
          },
          difficulty_rationale:
            'Апошні абзац. Абяцаны цуд і разгром стаяць у розных пластах тэксту — іх склейваюць.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '马的奇迹',
      questions: [
        {
          level: 'Story',
          question: '阿尔芒·德·佩里戈尔在什么之后发誓加入骑士团？',
          options: [
            {
              id: 'A',
              text: '在被选为大团长之后',
            },
            {
              id: 'B',
              text: '在坠马几乎丧命之后',
            },
            {
              id: 'C',
              text: '在拉福比惨败之后',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 坠马几近丧命后的誓约。',
            detail:
              '摘要把奇迹当作开端。描述从不重复那次坠落：那里立刻是1232年的职分与战争。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在坠马几乎丧命之后。',
            why: '选举是1232年，已在骑士团之内。拉福比是终结，不是誓约的原因：他以大团长身份到达那里。',
          },
          difficulty_rationale:
            '标题的论点。描述不知马——只有拉福比——故开端容易被惨败顶替。',
          needs_review: true,
          needs_review_reason:
            '摘要给出坠马后的誓约；描述从不提马——只有拉福比与死亡。',
        },
        {
          level: 'Context',
          question: '拉福比之战对他的团长任期意味着什么？',
          options: [
            {
              id: 'A',
              text: '收复海岸的胜利',
            },
            {
              id: 'B',
              text: '最沉重的失败之一，据多数史料他死于战场',
            },
            {
              id: 'C',
              text: '保全骑士团的俘虏交换',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 1244年的溃败，且据多数史料死于战场。',
            detail:
              '联合的基督教兵力与大量兄弟一同倒下。加强防御与结盟未能挽救动荡的东方。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 十字军最沉重的失败之一，据多数史料他死于战场。',
            why: '既非胜利，亦非有利交换。其领导的高潮是损失，不是奇迹。',
          },
          difficulty_rationale:
            '描述中生涯的意义。关于马的标题容易到不了拉福比。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '阿尔芒之死成为何种象征？',
          options: [
            {
              id: 'A',
              text: '转折点：拉福比之后基督徒在东方的地位急剧削弱',
            },
            {
              id: 'B',
              text: '骑士团在欧洲的重生',
            },
            {
              id: 'C',
              text: '与誓约开端相同的那个奇迹',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 转折点与昔日权势的衰落。',
            detail:
              '一生映照骑士团的十三世纪：不间断的斗争、加剧的损失。马给出入口；战场收走总和。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 转折点：拉福比之后基督徒在圣地的地位大为削弱。',
            why: '卡片不承诺重生。马的奇迹是摘要的开端，不是死亡的道德。',
          },
          difficulty_rationale:
            '末段。誓约奇迹与溃败分属文本不同层——却被粘在一起。',
          needs_review: false,
        },
      ],
    },
  },
};
