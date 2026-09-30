import type { DeepDiveCard } from './types';

export const sevenDiamonds: DeepDiveCard = {
  card_id: '7-diamonds',
  locales: {
    en: {
      card_title: 'The Barrel-Bearers',
      questions: [
        {
          level: 'Story',
          question: 'How is strength measured here?',
          options: [
            {
              id: 'A',
              text: 'By speed: who first delivers the load',
            },
            {
              id: 'B',
              text: 'By the ability to hold balance on the edge',
            },
            {
              id: 'C',
              text: 'By who stands stronger on stilts',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — what matters is the ability to pass without losing balance.',
            detail:
              'At the final stage it no longer matters who is faster or stronger. Stilts lift above the ground and make every step a risk.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — strength is measured by balance on the edge.',
            why: 'It is a contest, but the card cancels the ordinary score. Speed and brute force are a false measure.',
          },
          difficulty_rationale:
            'Athletics on stilts pull toward “who is faster/stronger.” The text changes the measure of strength.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Between what does their path unfold?',
          options: [
            {
              id: 'A',
              text: 'Between two goddesses — opposing principles',
            },
            {
              id: 'B',
              text: 'Between earth and sky, where stilts lift them',
            },
            {
              id: 'C',
              text: 'Between those who carry and those already freed',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — games in honor of two goddesses, forces of opposing principles.',
            detail:
              'The path lies neither in the height of stilts nor in freeing the load. Balance is held between two poles.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — between two goddesses, opposing principles.',
            why: 'Stilts are a condition of risk, not the axis of the plot. Those in the barrels are not “freed” along the way: they watch, wait, or have already walked part of the path.',
          },
          difficulty_rationale:
            'Why this contest exists at all. Visible height of stilts replaces the pair of goddesses.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Without what is victory impossible here?',
          options: [
            {
              id: 'A',
              text: 'Without casting off the barrel before the end of the path',
            },
            {
              id: 'B',
              text: 'Without accord between the walker and the one he carries',
            },
            {
              id: 'C',
              text: 'Without return to former footing on the ground',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the athlete carries not only himself, but a reflection, a load, or a witness.',
            detail:
              'Figures in the barrels do not intervene, yet without accord with them there is no victory. Those who arrive do not return to the former state: footing is no longer needed; balance becomes inward.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — without accord between the walker and the one he carries.',
            why: 'The barrel is not cast off as surplus weight, and the finish is not a return to ground. The card cancels ordinary victory.',
          },
          difficulty_rationale:
            'A barrel on the back tempts reading as a burden to shed, or as captivity. The text demands accord of two.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Носильщики бочек',
      questions: [
        {
          level: 'Story',
          question: 'Чем здесь измеряется сила?',
          options: [
            {
              id: 'A',
              text: 'Скоростью: кто первый донесёт ношу',
            },
            {
              id: 'B',
              text: 'Способностью удерживать равновесие на грани',
            },
            {
              id: 'C',
              text: 'Тем, кто сильнее выстоит на ходулях',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — важна способность пройти, не потеряв равновесия.',
            detail:
              'На завершающем этапе уже не важно, кто быстрее или сильнее. Ходули поднимают над землёй и делают каждый шаг риском.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — сила измеряется равновесием на грани.',
            why: 'Это состязание, но карта снимает обычный зачёт. Скорость и грубая сила — ложный критерий.',
          },
          difficulty_rationale:
            'Атлетика на ходулях тянет к «кто быстрее/сильнее». Текст меняет меру силы.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Между чем разворачивается их путь?',
          options: [
            {
              id: 'A',
              text: 'Между двумя богинями — противоположными началами',
            },
            {
              id: 'B',
              text: 'Между землёй и небом, куда их поднимают ходули',
            },
            {
              id: 'C',
              text: 'Между теми, кто несёт, и теми, кого уже освободили',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — игры в честь двух богинь, сил противоположных начал.',
            detail:
              'Путь лежит не в высоте ходуль и не в освобождении груза. Равновесие держится между двумя полюсами.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — между двумя богинями, противоположными началами.',
            why: 'Ходули — условие риска, не ось сюжета. Тех, кто в бочках, не «освобождают» по ходу: они наблюдают, ждут или уже прошли часть пути.',
          },
          difficulty_rationale:
            'Зачем это состязание вообще. Видимая высота ходуль подменяет пару богинь.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Без чего здесь невозможна победа?',
          options: [
            {
              id: 'A',
              text: 'Без того, чтобы сбросить бочку до конца пути',
            },
            {
              id: 'B',
              text: 'Без согласия между идущим и тем, кого он несёт',
            },
            {
              id: 'C',
              text: 'Без возвращения к прежней опоре на земле',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — атлет несёт не только себя, но отражение, груз или свидетеля.',
            detail:
              'Фигуры в бочках не вмешиваются, но без согласия с ними победы нет. Дошедшие не возвращаются к прежнему состоянию: опора больше не нужна, равновесие становится внутренним.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — без согласия между идущим и тем, кого он несёт.',
            why: 'Бочку не сбрасывают как лишний вес, и финиш — не возврат на землю. Обычная победа карта отменяет.',
          },
          difficulty_rationale:
            'Бочку на спине тянет прочитать как ношу, от которой надо избавиться, или как плен. Текст требует согласия двоих.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Носьбіты бочак',
      questions: [
        {
          level: 'Story',
          question: 'Чым тут вымяраецца сіла?',
          options: [
            {
              id: 'A',
              text: 'Хуткасцю: хто першы данясе ношу',
            },
            {
              id: 'B',
              text: 'Здольнасцю ўтрымліваць раўнавагу на мяжы',
            },
            {
              id: 'C',
              text: 'Тым, хто мацней выстаіць на хадулях',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — важная здольнасць прайсці, не страціўшы раўнавагі.',
            detail:
              'На завяршальным этапе ўжо не важна, хто хутчэй ці мацней. Хадулі падымаюць над зямлёй і робяць кожны крок рызыкай.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — сіла вымяраецца раўнавагай на мяжы.',
            why: 'Гэта спаборніцтва, але карта здымае звычайны залік. Хуткасць і грубая сіла — ілжывы крытэрый.',
          },
          difficulty_rationale:
            'Атлетыка на хадулях цягне да «хто хутчэй/мацней». Тэкст мяняе меру сілы.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Паміж чым разгортваецца іх шлях?',
          options: [
            {
              id: 'A',
              text: 'Паміж дзвюма багінямі — супрацьлеглымі пачаткамі',
            },
            {
              id: 'B',
              text: 'Паміж зямлёй і небам, куды іх падымаюць хадулі',
            },
            {
              id: 'C',
              text: 'Паміж тымі, хто нясе, і тымі, каго ўжо вызвалілі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гульні ў гонар дзвюх багінь, сіл супрацьлеглых пачаткаў.',
            detail:
              'Шлях ляжыць не ў вышыні хадуляў і не ў вызваленні грузу. Раўнавага трымаецца паміж двума полюсамі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — паміж дзвюма багінямі, супрацьлеглымі пачаткамі.',
            why: 'Хадулі — умова рызыкі, не вось сюжэту. Тых, хто ў бочках, не «вызваляюць» па ходзе: яны назіраюць, чакаюць ці ўжо прайшлі частку шляху.',
          },
          difficulty_rationale:
            'Навошта гэта спаборніцтва наогул. Бачная вышыня хадуляў падмяняе пару багінь.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Без чаго тут немагчымая перамога?',
          options: [
            {
              id: 'A',
              text: 'Без таго, каб скінуць бочку да канца шляху',
            },
            {
              id: 'B',
              text: 'Без згоды паміж ідучым і тым, каго ён нясе',
            },
            {
              id: 'C',
              text: 'Без вяртання да былой апоры на зямлі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — атлет нясе не толькі сябе, але адлюстраванне, груз ці сведку.',
            detail:
              'Фігуры ў бочках не ўмешваюцца, але без згоды з імі перамогі няма. Дайшоўшыя не вяртаюцца да былога стану: апора больш не патрэбна, раўнавага становіцца ўнутранай.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — без згоды паміж ідучым і тым, каго ён нясе.',
            why: 'Бочку не скідаюць як лішні вагу, і фініш — не вяртанне на зямлю. Звычайную перамогу карта скасоўвае.',
          },
          difficulty_rationale:
            'Бочку на спіне цягне прачытаць як ношу, ад якой трэба пазбавіцца, ці як палон. Тэкст патрабуе згоды дваіх.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '运桶人',
      questions: [
        {
          level: 'Story',
          question: '此处如何衡量力量？',
          options: [
            {
              id: 'A',
              text: '比速度：谁先送达负荷',
            },
            {
              id: 'B',
              text: '比在边缘上保持平衡的能力',
            },
            {
              id: 'C',
              text: '比谁在高跷上站得更稳',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 要紧的是不失去平衡地走完。',
            detail:
              '到了最后阶段，谁更快更强已不重要。高跷抬离地面，使每一步都成风险。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 力量以边缘上的平衡来衡量。',
            why: '虽是竞赛，此卡取消寻常记分。速度与蛮力是虚假尺度。',
          },
          difficulty_rationale:
            '高跷上的竞技把人拉向「谁更快/更强」。文本改写了力量的尺度。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '他们的路在什么之间展开？',
          options: [
            {
              id: 'A',
              text: '在两位女神——对立的本原——之间',
            },
            {
              id: 'B',
              text: '在地与天之间，高跷把他们抬起',
            },
            {
              id: 'C',
              text: '在负运者与已被解放者之间',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 为两位女神、为对立本原之力而举行的竞赛。',
            detail:
              '路既不在高跷的高度，也不在卸下负荷。平衡托在两极之间。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在两位女神、对立本原之间。',
            why: '高跷是风险的条件，不是情节的轴。桶中之人并不沿途被「解放」：他们观看、等待，或已走过一段路。',
          },
          difficulty_rationale:
            '这场竞赛究竟为何存在。可见的高跷高度取代了女神之对。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '没有什么，此处就不可能胜利？',
          options: [
            {
              id: 'A',
              text: '不在路尽前甩掉桶',
            },
            {
              id: 'B',
              text: '行者与他所负者之间的契合',
            },
            {
              id: 'C',
              text: '回到从前立足地面的支撑',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 运动员负的不只是自己，还有映象、负荷或见证者。',
            detail:
              '桶中形象并不介入，但没有与他们的契合就没有胜利。抵达者不再回到旧状态：支撑已不需要，平衡成为内在的。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 没有行者与他所负者之间的契合。',
            why: '桶不是多余重量被甩掉，终点也不是回到地面。此卡取消寻常的胜利。',
          },
          difficulty_rationale:
            '背上的桶诱人读成待卸的负担，或囚禁。文本要求两者的契合。',
          needs_review: false,
        },
      ],
    },
  },
};
