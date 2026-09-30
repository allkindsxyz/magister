import type { DeepDiveCard } from './types';

export const kingSpades: DeepDiveCard = {
  card_id: 'king-spades',
  locales: {
    en: {
      card_title: 'The Secret History of the Mongols',
      questions: [
        {
          level: 'Story',
          question: 'How did he come to the title of Great Khan?',
          options: [
            {
              id: 'A',
              text: 'He inherited quiet power right after his father’s death',
            },
            {
              id: 'B',
              text: 'He became khan by decision of already united tribes, without his own struggle',
            },
            {
              id: 'C',
              text: 'From exile he gathered followers, united the tribes, and in 1206 was proclaimed',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the path ran through exile, strife, and the uniting of tribes.',
            detail:
              'After the father’s death the family did not receive the throne: they were cast out. He cut the road himself. The military system — discipline, mobility, organization — let him beat superior forces.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — he came out of exile, united the scattered tribes, and in 1206 became Great Khan.',
            why: 'The father’s death gave no crown. The tribes were not waiting already welded. The card begins with a fight for survival, not with inheritance.',
          },
          difficulty_rationale:
            'The plot of becoming. Empire after the fact seems given at once; the text holds exile and the year 1206.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why is he astride a locust?',
          options: [
            {
              id: 'A',
              text: 'The locust is a symbol of mass calamity: the raids were cruel and devastating',
            },
            {
              id: 'B',
              text: 'The locust is a sign of fertility the empire brought to the fields',
            },
            {
              id: 'C',
              text: 'The locust is a solitary insect, image of an exile without an army',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the locust here is calamity, not harvest.',
            detail:
              'Swarms in the billions close territories as “flying clouds.” Mounting a commander on this insect the card calls no accident.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the locust as a symbol of mass calamity, rhyme to devastating raids.',
            why: 'The swarm in the summary is neither ploughland nor a loner. Exile was in childhood; astride it he is already a force that covers the earth.',
          },
          difficulty_rationale:
            'A direct link of summary and description. The rider is easy to read as triumph; the text gives a plague.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What blank does the card leave in his reputation?',
          options: [
            {
              id: 'A',
              text: 'Besides war, Mongol culture carried law and writing onto conquered lands',
            },
            {
              id: 'B',
              text: 'The empire collapsed the moment he died and expanded nowhere',
            },
            {
              id: 'C',
              text: 'The raids were mild and left no trace in history',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — behind the war the text sets law and writing.',
            detail:
              'He died in 1227; the empire grew after. The yoke still shows through the course of events. The “Secret History” is not only a cloud of locusts: blanks remain in the reputation.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — besides war, law and writing went onto the conquered lands.',
            why: 'The card does not soften the raids and does not zero the empire in 1227. The blank is elsewhere: to the plague attaches a cultural trail few remember.',
          },
          difficulty_rationale:
            'The text’s ending against the obvious plague. The locust overshadows the aside about law and letter — and the card’s title is precisely about the unspoken.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Тайная история монголов',
      questions: [
        {
          level: 'Story',
          question: 'Как он пришёл к титулу великого хана?',
          options: [
            {
              id: 'A',
              text: 'Унаследовал спокойную власть сразу после гибели отца',
            },
            {
              id: 'B',
              text: 'Стал ханом по решению уже единых племён, без собственной борьбы',
            },
            {
              id: 'C',
              text: 'Из изгнания собрал сторонников, объединил племена и в 1206-м был провозглашён',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — путь шёл через изгнание, распри и объединение племён.',
            detail:
              'После гибели отца семья не получила престол: её вытолкнули. Он сам прокладывал дорогу. Военная система — дисциплина, мобильность, организация — позволила бить превосходящие силы.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — он вышел из изгнания, объединил разрозненные племена и в 1206 году стал великим ханом.',
            why: 'Отцовская смерть не дала короны. Племена не ждали его уже сплочёнными. Карта начинает с борьбы за выживание, не с наследства.',
          },
          difficulty_rationale:
            'Сюжет становления. Империя задним числом кажется данной сразу; текст держит изгнание и 1206 год.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему он верхом на саранче?',
          options: [
            {
              id: 'A',
              text: 'Саранча — символ массового бедствия: набеги были жестоки и опустошительны',
            },
            {
              id: 'B',
              text: 'Саранча — знак плодородия, которое империя несла пашням',
            },
            {
              id: 'C',
              text: 'Саранча — одинокое насекомое, образ изгнанника без войска',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — саранча здесь про бедствие, не про урожай.',
            detail:
              'Стаи в миллиарды закрывают территории «летучими облаками». Посадка полководца на это насекомое карта называет неслучайной.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — саранча как символ массового бедствия, рифма к опустошительным набегам.',
            why: 'Рой в summary — не пашня и не одиночка. Изгнание было в детстве; верхом он уже как сила, которая покрывает землю.',
          },
          difficulty_rationale:
            'Прямая связка summary и description. Всадника легко прочесть как триумф; текст даёт мор.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Какое белое пятно карта оставляет в его репутации?',
          options: [
            {
              id: 'A',
              text: 'Кроме войны монгольская культура несла на захваченные земли право и письменность',
            },
            {
              id: 'B',
              text: 'Империя распалась в миг его смерти и никуда не расширялась',
            },
            {
              id: 'C',
              text: 'Набеги были мягкими и не оставляли следа в истории',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — за войной текст ставит право и письменность.',
            detail:
              'Он умер в 1227-м; империя росла и после. Иго до сих пор просвечивает в ходе событий. «Тайная история» — не только туча саранчи: в репутации остаются пробелы.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — помимо войны на захваченные земли шли право и письменность.',
            why: 'Карта не смягчает набеги и не обнуляет империю в 1227-м. Белое пятно в другом: к мору прилагается культурный след, о котором мало кто помнит.',
          },
          difficulty_rationale:
            'Финал текста против очевидного мора. Саранча заслоняет оговорку про закон и письмо — а название карты как раз про недосказанное.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Таемная гісторыя манголаў',
      questions: [
        {
          level: 'Story',
          question: 'Як ён прыйшоў да тытула вялікага хана?',
          options: [
            {
              id: 'A',
              text: 'Успадкаваў спакойную ўладу адразу пасля загібелі бацькі',
            },
            {
              id: 'B',
              text: 'Стаў ханам па рашэнні ўжо адзіных плямёнаў, без уласнай барацьбы',
            },
            {
              id: 'C',
              text: 'З выгнання сабраў прыхільнікаў, аб’яднаў плямёны і ў 1206-м быў абвешчаны',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — шлях ішоў праз выгнанне, звады і аб’яднанне плямёнаў.',
            detail:
              'Пасля загібелі бацькі сям’я не атрымала прастол: яе выштурхнулі. Ён сам пракладаў дарогу. Ваенная сістэма — дысцыпліна, мабільнасць, арганізацыя — дазволіла біць пераўзыходныя сілы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — ён выйшаў з выгнання, аб’яднаў разрозненыя плямёны і ў 1206 годзе стаў вялікім ханам.',
            why: 'Бацькоўская смерць не дала кароны. Плямёны не чакалі яго ўжо згуртаванымі. Карта пачынае з барацьбы за выжыванне, не з спадчыны.',
          },
          difficulty_rationale:
            'Сюжэт станаўлення. Імперыя заднім чыслам здаецца дадзенай адразу; тэкст трымае выгнанне і 1206 год.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму ён верхам на саранчы?',
          options: [
            {
              id: 'A',
              text: 'Саранча — сімвал масавага бедства: набегі былі жорсткія і спусташальныя',
            },
            {
              id: 'B',
              text: 'Саранча — знак урадлівасці, якую імперыя несла раллі',
            },
            {
              id: 'C',
              text: 'Саранча — самотная казурка, вобраз выгнанца без войска',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — саранча тут пра бедства, не пра ўраджай.',
            detail:
              'Зграі ў мільярды закрываюць тэрыторыі «лятучымі аблокамі». Пасадку палкаводца на гэтую казурку карта называе невыпадковай.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — саранча як сімвал масавага бедства, рыфма да спусташальных набегаў.',
            why: 'Рой у summary — не ралля і не адзіночка. Выгнанне было ў дзяцінстве; верхам ён ужо як сіла, якая пакрывае зямлю.',
          },
          difficulty_rationale:
            'Прамая звязка summary і description. Вершніка лёгка прачытаць як трыумф; тэкст дае мор.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Якую белую пляму карта пакідае ў яго рэпутацыі?',
          options: [
            {
              id: 'A',
              text: 'Акрамя вайны мангольская культура несла на захопленыя землі права і пісьменства',
            },
            {
              id: 'B',
              text: 'Імперыя распалася ў імгненне яго смерці і нікуды не пашыралася',
            },
            {
              id: 'C',
              text: 'Набегі былі мяккія і не пакідалі следу ў гісторыі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — за вайной тэкст ставіць права і пісьменства.',
            detail:
              'Ён памёр у 1227-м; імперыя расла і пасля. Іга дасюль прасвечвае ў ходзе падзей. «Таемная гісторыя» — не толькі хмара саранчы: у рэпутацыі застаюцца прабелы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — акрамя вайны на захопленыя землі ішлі права і пісьменства.',
            why: 'Карта не змякчае набегі і не абнуляе імперыю ў 1227-м. Белая пляма ў іншым: да мору дадаецца культурны след, пра які мала хто памятае.',
          },
          difficulty_rationale:
            'Фінал тэксту супраць відавочнага мору. Саранча засланяе агаворку пра закон і пісьмо — а назва карты якраз пра недасказанае.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '蒙古秘史',
      questions: [
        {
          level: 'Story',
          question: '他如何抵达大汗之号？',
          options: [
            {
              id: 'A',
              text: '父亲死后立即继承安宁的权力',
            },
            {
              id: 'B',
              text: '已统一的部落决议使他为汗，无需亲身争斗',
            },
            {
              id: 'C',
              text: '从流亡中聚集追随者，统一部落，一二〇六年被宣布',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 道路经过流亡、纷争与部落统一。',
            detail:
              '父亲死后家族未得王位：被逐出。他自辟道路。军事体系——纪律、机动、组织——使他能击败优势兵力。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他走出流亡，统一分散部落，一二〇六年成为大汗。',
            why: '父亲之死未给王冠。部落并非已团结等待。卡片始于求生之争，不是继承。',
          },
          difficulty_rationale:
            '成业情节。事后帝国看似一开始即有；正文守住流亡与一二〇六年。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '他为何骑在蝗虫上？',
          options: [
            {
              id: 'A',
              text: '蝗虫是大规模灾祸的象征：劫掠残酷而毁灭',
            },
            {
              id: 'B',
              text: '蝗虫是帝国带给田亩的丰饶记号',
            },
            {
              id: 'C',
              text: '蝗虫是孤独昆虫，无军队流亡者的意象',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处蝗虫是灾祸，不是收成。',
            detail:
              '数十亿之群如「飞云」盖住疆域。卡片称把统帅置于此虫之上并非偶然。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 蝗虫作为大规模灾祸的象征，与毁灭性劫掠押韵。',
            why: '摘要中的虫群既非耕地也非独行者。流亡在童年；骑上它时他已是覆盖大地的力量。',
          },
          difficulty_rationale:
            '摘要与描述的直接联结。骑手易被读成胜利；正文给出瘟疫。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片在他的声名中留下什么空白？',
          options: [
            {
              id: 'A',
              text: '除战争外，蒙古文化还将法律与文字带上被征服之地',
            },
            {
              id: 'B',
              text: '帝国在他死去瞬间崩溃，再未扩张',
            },
            {
              id: 'C',
              text: '劫掠温和，未在历史上留下痕迹',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在战争之后，正文安放法律与文字。',
            detail:
              '他死于一二二七年；帝国此后仍在扩张。枷锁至今仍透进事件进程。《秘史》不只是蝗云：声名中仍有空白。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 除战争外，法律与文字进入被征服之地。',
            why: '卡片不软化劫掠，也不在一二二七年清零帝国。空白在别处：瘟疫旁附着少有人记得的文化痕迹。',
          },
          difficulty_rationale:
            '正文收尾对抗显见的瘟疫。蝗虫掩盖关于法律与文字的旁白——而卡名正关乎未尽之言。',
          needs_review: false,
        },
      ],
    },
  },
};
