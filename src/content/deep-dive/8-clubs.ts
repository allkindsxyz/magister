import type { DeepDiveCard } from './types';

export const eightClubs: DeepDiveCard = {
  card_id: '8-clubs',
  locales: {
    en: {
      card_title: 'The Eighth Day of Christian Rosenkreutz’s Wedding',
      questions: [
        {
          level: 'Story',
          question: 'What is the “wedding” in the parable?',
          options: [
            {
              id: 'A',
              text: 'A literal marriage rite in a castle',
            },
            {
              id: 'B',
              text: 'A union of opposites — spirit and matter, masculine and feminine',
            },
            {
              id: 'C',
              text: 'The hero’s coronation after seven trials',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a union of opposites, not a wedding in the household sense.',
            detail:
              'Spirit and matter, inner and outer: the center of the alchemical work. Through it the hero sheds the old form and takes a new one.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a union of opposites: spirit and matter, masculine and feminine.',
            why: 'The text expressly strips away the literal. There is no crown: there is wholeness and transformation.',
          },
          difficulty_rationale:
            'The card’s key substitution. A fairy-tale wedding is easy to take for plot, not for cipher.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What happens to the hero across seven days in the castle?',
          options: [
            {
              id: 'A',
              text: 'He remains a spectator of another’s alchemy',
            },
            {
              id: 'B',
              text: 'He passes through death, purification, rebirth — and becomes a participant',
            },
            {
              id: 'C',
              text: 'On the first day he receives power over the castle',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — from observation to an inward experience.',
            detail:
              'Trials and alchemical operations — a description of a spiritual path, not a fairy tale. Initiation is possible only through the death of the old.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he passes through the trials of death, purification, and rebirth and becomes a participant.',
            why: 'He begins only as a spectator. The text grants no power on the first day: the path lasts seven days.',
          },
          difficulty_rationale:
            'The sense of the manifesto in the Order myth: initiation through the death of the old. The spectator stage is easy to freeze in place.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does the painter do with the seven-day cycle?',
          options: [
            {
              id: 'A',
              text: 'Cuts the story off on the book’s last day',
            },
            {
              id: 'B',
              text: 'Builds out what follows after the cycle is complete',
            },
            {
              id: 'C',
              text: 'Moves the wedding from the castle to the Holy Land',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the painting asks what comes after the seven days.',
            detail:
              'In the text the wedding lasts a week. The card takes the gap beyond the cycle: initiation does not end with the book.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — it builds out the story after the seven-day cycle is complete.',
            why: 'Neither a cut-off nor a transfer to the Holy Land. The card’s thesis is the day after initiation, which the manifesto does not describe.',
          },
          difficulty_rationale:
            'What is missed once alchemy and the seven days are remembered. The building-out is precisely what distinguishes the card from the book.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Восьмой день свадьбы Христиана Розенкрейца',
      questions: [
        {
          level: 'Story',
          question: 'Чем в притче является «свадьба»?',
          options: [
            {
              id: 'A',
              text: 'Буквальным брачным обрядом в замке',
            },
            {
              id: 'B',
              text: 'Соединением противоположностей — духа и материи, мужского и женского',
            },
            {
              id: 'C',
              text: 'Коронацией героя после семи испытаний',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — союз противоположностей, не свадьба в быту.',
            detail:
              'Дух и материя, внутреннее и внешнее: центр алхимического делания. Через него герой теряет прежнюю форму и берёт новую.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — соединение противоположностей: духа и материи, мужского и женского.',
            why: 'Текст прямо снимает буквальность. Короны нет: есть целостность и преображение.',
          },
          difficulty_rationale:
            'Ключевая подмена карты. Сказочную свадьбу легко принять за сюжет, а не за шифр.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что происходит с героем за семь дней в замке?',
          options: [
            {
              id: 'A',
              text: 'Он остаётся зрителем чужой алхимии',
            },
            {
              id: 'B',
              text: 'Проходит смерть, очищение, возрождение — и становится участником',
            },
            {
              id: 'C',
              text: 'В первый день получает власть над замком',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — от наблюдения к внутреннему переживанию.',
            detail:
              'Испытания и алхимические операции — описание духовного пути, не сказка. Посвящение возможно только через смерть старого.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он проходит испытания смерти, очищения и возрождения и становится участником.',
            why: 'Зрителем он только начинается. Власти в первый день текст не даёт: путь длится семь суток.',
          },
          difficulty_rationale:
            'Смысл манифеста в орденском мифе: посвящение через смерть старого. Стадию наблюдателя легко заморозить.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что делает автор картины с семидневным циклом?',
          options: [
            {
              id: 'A',
              text: 'Обрывает историю на последнем дне книги',
            },
            {
              id: 'B',
              text: 'Достраивает, что происходит после завершения цикла',
            },
            {
              id: 'C',
              text: 'Переносит свадьбу из замка на Святую землю',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — картина спрашивает, что будет после семи дней.',
            detail:
              'В тексте свадьба длится неделю. Карта берёт зазор за циклом: посвящение не кончается вместе с книгой.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — достраивает историю после завершения семидневного цикла.',
            why: 'Не обрыв и не перенос в Святую землю. Тезис карты — день после посвящения, которого манифест не описывает.',
          },
          difficulty_rationale:
            'То, что пропускают, запомнив алхимию и семь дней. Именно достройка отличает карту от книги.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Восьмы дзень вяселля Хрысціяна Розэнкройца',
      questions: [
        {
          level: 'Story',
          question: 'Чым у прытчы з’яўляецца «вяселле»?',
          options: [
            {
              id: 'A',
              text: 'Літаральным шлюбным абрадам у замку',
            },
            {
              id: 'B',
              text: 'Злучэннем процілегласцей — духу і матэрыі, мужчынскага і жаночага',
            },
            {
              id: 'C',
              text: 'Каранацыяй героя пасля сямі выпрабаванняў',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — саюз процілегласцей, не вяселле ў побыце.',
            detail:
              'Дух і матэрыя, унутранае і знешняе: цэнтр алхімічнага дзеяння. Праз яго герой губляе ранейшую форму і бярэ новую.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — злучэнне процілегласцей: духу і матэрыі, мужчынскага і жаночага.',
            why: 'Тэкст проста здымае літаральнасць. Кароны няма: ёсць цэласнасць і пераўтварэнне.',
          },
          difficulty_rationale:
            'Ключавая падмена карты. Казкавае вяселле лёгка прыняць за сюжэт, а не за шыфр.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што адбываецца з героем за сем дзён у замку?',
          options: [
            {
              id: 'A',
              text: 'Ён застаецца гледачом чужой алхіміі',
            },
            {
              id: 'B',
              text: 'Праходзіць смерць, ачышчэнне, адраджэнне — і становіцца ўдзельнікам',
            },
            {
              id: 'C',
              text: 'У першы дзень атрымлівае ўладу над замкам',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ад назірання да ўнутранага перажывання.',
            detail:
              'Выпрабаванні і алхімічныя аперацыі — апісанне духоўнага шляху, не казка. Пасвячэнне магчымае толькі праз смерць старога.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён праходзіць выпрабаванні смерці, ачышчэння і адраджэння і становіцца ўдзельнікам.',
            why: 'Гледачом ён толькі пачынаецца. Улады ў першы дзень тэкст не дае: шлях доўжыцца сем сутак.',
          },
          difficulty_rationale:
            'Сэнс маніфеста ў ордэнскім міфе: пасвячэнне праз смерць старога. Стадыю назіральніка лёгка замарозіць.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што робіць аўтар карціны з сямідзённым цыклам?',
          options: [
            {
              id: 'A',
              text: 'Абарвае гісторыю на апошнім дні кнігі',
            },
            {
              id: 'B',
              text: 'Дабудоўвае, што адбываецца пасля завяршэння цыкла',
            },
            {
              id: 'C',
              text: 'Пераносіць вяселле з замка на Святую зямлю',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — карціна пытаецца, што будзе пасля сямі дзён.',
            detail:
              'У тэксце вяселле доўжыцца тыдзень. Карта бярэ зазор за цыклам: пасвячэнне не канчаецца разам з кнігай.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — дабудоўвае гісторыю пасля завяршэння сямідзённага цыкла.',
            why: 'Не абрыў і не перанос у Святую зямлю. Тэзіс карты — дзень пасля пасвячэння, якога маніфест не апісвае.',
          },
          difficulty_rationale:
            'Тое, што прапускаюць, запомніўшы алхімію і сем дзён. Менавіта дабудова адрознівае карту ад кнігі.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '克里斯蒂安·罗森克罗伊茨婚礼的第八日',
      questions: [
        {
          level: 'Story',
          question: '寓言中的「婚礼」是什么？',
          options: [
            {
              id: 'A',
              text: '城堡中字面意义上的婚礼仪式',
            },
            {
              id: 'B',
              text: '对立面的结合——精神与物质、男性与女性',
            },
            {
              id: 'C',
              text: '英雄经七次考验后的加冕',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 对立面的结合，而非家常意义上的婚礼。',
            detail:
              '精神与物质、内与外：炼金工作的中心。经此，英雄脱去旧形，取得新形。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 对立面的结合：精神与物质、男性与女性。',
            why: '文本明确剥去字面义。没有王冠：有的是整全与转化。',
          },
          difficulty_rationale:
            '卡片的关键置换。童话婚礼容易被当成情节，而非密语。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '七日内在城堡中，英雄经历了什么？',
          options: [
            {
              id: 'A',
              text: '他始终只是他人炼金术的旁观者',
            },
            {
              id: 'B',
              text: '他经历死亡、净化、重生——并成为参与者',
            },
            {
              id: 'C',
              text: '第一天他就获得对城堡的权力',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 从旁观走向内在体验。',
            detail:
              '考验与炼金操作——是灵性道路的描述，不是童话。入门唯有经由旧我之死。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他经历死亡、净化与重生的考验并成为参与者。',
            why: '他起初只是旁观者。文本不在第一天授予权力：道路持续七日。',
          },
          difficulty_rationale:
            '骑士团神话中宣言的意义：经由旧我之死的入门。旁观阶段容易被冻住。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '画家如何处理七日循环？',
          options: [
            {
              id: 'A',
              text: '在书的最后一日切断故事',
            },
            {
              id: 'B',
              text: '补写出循环完成后所发生的事',
            },
            {
              id: 'C',
              text: '把婚礼从城堡移到圣地',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 画作追问七日之后会发生什么。',
            detail:
              '文本中婚礼持续一周。卡片取循环之外的空隙：入门并不随书结束。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 它补写出七日循环完成后的故事。',
            why: '既非切断，亦非移往圣地。卡片的论点是入门之后的一日，宣言并未描述。',
          },
          difficulty_rationale:
            '记住炼金与七日之后容易错过的东西。正是这层补写使卡片有别于书。',
          needs_review: false,
        },
      ],
    },
  },
};
