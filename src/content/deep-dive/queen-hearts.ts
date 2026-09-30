import type { DeepDiveCard } from './types';

export const queenHearts: DeepDiveCard = {
  card_id: 'queen-hearts',
  locales: {
    en: {
      card_title: 'Aphrodite',
      questions: [
        {
          level: 'Story',
          question: 'How was Aphrodite born?',
          options: [
            {
              id: 'A',
              text: 'From sea-foam, when the blood and seed of overthrown Uranus fell into the sea',
            },
            {
              id: 'B',
              text: 'On Olympus as daughter of Zeus and Hera',
            },
            {
              id: 'C',
              text: 'In Hephaestus’s forge, where she was later given in marriage',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — foam after Cronus overthrew Uranus; already grown, radiant.',
            detail:
              'The waves carried her to Cyprus. She stepped on land — and all around bloomed. Marriage to Hephaestus and Olympus come later, not the place of birth.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — from sea-foam: Uranus’s blood and seed fell into the sea.',
            why: 'On this card Zeus is not the father but the one who later gives her to Hephaestus. The forge is a marriage of calculation, not a cradle.',
          },
          difficulty_rationale:
            'The origin’s opening. Olympian “daughter of Zeus” and the marriage to Hephaestus sit in the same text and pull birth toward them.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did Zeus give her to Hephaestus?',
          options: [
            {
              id: 'A',
              text: 'Fearing her influence, he hoped to restrain it',
            },
            {
              id: 'B',
              text: 'Hephaestus won her in a contest of the gods',
            },
            {
              id: 'C',
              text: 'She herself asked for a husband among the smiths',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — marriage as a bridle: the lame master-smith against the force of attraction.',
            detail:
              'The marriage bred no love. The heart stayed with passion — including Ares. Restraining her influence failed.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Zeus gave her to Hephaestus, fearing the strength of her influence.',
            why: 'Contest and her request are not on the card. It is the supreme god’s move against a goddess whom neither mortals nor gods could withstand.',
          },
          difficulty_rationale:
            'The cause of the marriage. Hephaestus as husband is easily read as a “deserved choice,” not an attempt to curb her.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where is her true strength — not in softness, but in what?',
          options: [
            {
              id: 'A',
              text: 'In that she shields her beloved from death',
            },
            {
              id: 'B',
              text: 'In fidelity to the marriage with Hephaestus',
            },
            {
              id: 'C',
              text: 'In the inevitability of attraction that changes fates',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not beauty as ornament, but a force that rules desire.',
            detail:
              'It joins and destroys: to Paris — love of the fairest, hence the Trojan War. She loved Adonis and did not save him: anemones from his blood. Neither gods nor humans can stand.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the inevitability of attraction able to change fates.',
            why: 'Adonis shows the limit: love gives; it does not close off loss. There is no fidelity to Hephaestus. Softness the card itself removes.',
          },
          difficulty_rationale:
            'The final formula. Adonis and the marriage tempt you to see a saviour or a smith’s wife — not the inevitability of desire.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Афродита',
      questions: [
        {
          level: 'Story',
          question: 'Как родилась Афродита?',
          options: [
            {
              id: 'A',
              text: 'Из морской пены, когда кровь и семя низвергнутого Урана упали в море',
            },
            {
              id: 'B',
              text: 'На Олимпе как дочь Зевса и Геры',
            },
            {
              id: 'C',
              text: 'В кузнице Гефеста, куда её затем выдали замуж',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — пена после свержения Урана Кроносом; уже взрослая, сияющая.',
            detail:
              'Волны вынесли её к Кипру. Ступила на землю — и всё вокруг расцвело. Брак с Гефестом и Олимп — позже, не место рождения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — из морской пены: кровь и семя Урана упали в море.',
            why: 'Зевс в этой карте не отец, а тот, кто позже выдаст её за Гефеста. Кузница — брак по расчёту, не колыбель.',
          },
          difficulty_rationale:
            'Завязка происхождения. Олимпийское «дочь Зевса» и брак с Гефестом стоят в том же тексте и перетягивают рождение.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Зачем Зевс выдал её за Гефеста?',
          options: [
            {
              id: 'A',
              text: 'Опасаясь её влияния, надеялся сдержать его',
            },
            {
              id: 'B',
              text: 'Гефест выиграл её в состязании богов',
            },
            {
              id: 'C',
              text: 'Она сама просила мужа среди кузнецов',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — брак как узда: хромой искусный кузнец против силы притяжения.',
            detail:
              'Любви брак не родил. Сердце осталось у страсти — в том числе у Ареса. Сдержать влияние не вышло.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Зевс выдал её за Гефеста, опасаясь силы её влияния.',
            why: 'Состязания и её просьбы карта не даёт. Это ход верховного бога против богини, которой не могли противостоять ни смертные, ни боги.',
          },
          difficulty_rationale:
            'Причина брака. Гефест как муж легко читается как «заслуженный выбор», не как попытка обуздать.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'В чём её истинная сила — не в мягкости, а в чём?',
          options: [
            {
              id: 'A',
              text: 'В том, что она уберегает любимых от смерти',
            },
            {
              id: 'B',
              text: 'В верности браку с Гефестом',
            },
            {
              id: 'C',
              text: 'В неотвратимости притяжения, которое меняет судьбы',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — не красота как украшение, а сила, правящая желанием.',
            detail:
              'Соединяет и разрушает: Парису — любовь прекраснейшей, отсюда Троянская война. Адониса любила и не спасла: анемоны из крови. Ни богам, ни людям не устоять.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — неотвратимость притяжения, способного менять судьбы.',
            why: 'Адонис как раз показывает предел: любовь даёт, от утраты не закрывает. Верности Гефесту нет. Мягкость карта снимает сама.',
          },
          difficulty_rationale:
            'Формула финала. Адонис и брак провоцируют видеть спасительницу или жену кузнеца — не неизбежность желания.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Афрадыта',
      questions: [
        {
          level: 'Story',
          question: 'Як нарадзілася Афрадыта?',
          options: [
            {
              id: 'A',
              text: 'З марской пены, калі кроў і семя скінутага Урана ўпалі ў мора',
            },
            {
              id: 'B',
              text: 'На Алімпе як дачка Зеўса і Геры',
            },
            {
              id: 'C',
              text: 'У кузні Гефеста, куды яе потым выдалі замуж',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пена пасля скідання Урана Кронасам; ужо дарослая, зіхоткая.',
            detail:
              'Хвалі вынеслі яе да Кіпру. Ступіла на зямлю — і ўсё вакол расцвіло. Шлюб з Гефестам і Алімп — пазней, не месца нараджэння.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — з марской пены: кроў і семя Урана ўпалі ў мора.',
            why: 'Зеўс у гэтай карце не бацька, а той, хто пазней выдасць яе за Гефеста. Кузня — шлюб па разліку, не калыска.',
          },
          difficulty_rationale:
            'Завязка паходжання. Алімпійскае «дачка Зеўса» і шлюб з Гефестам стаяць у тым жа тэксце і перацягваюць нараджэнне.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Навошта Зеўс выдаў яе за Гефеста?',
          options: [
            {
              id: 'A',
              text: 'Асцерагаючыся яе ўплыву, спадзяваўся стрымаць яго',
            },
            {
              id: 'B',
              text: 'Гефест выйграў яе ў спаборніцтве багоў',
            },
            {
              id: 'C',
              text: 'Яна сама прасіла мужа сярод кавалёў',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — шлюб як аброць: кульгавы майстэрны каваль супраць сілы прыцягнення.',
            detail:
              'Любові шлюб не нарадзіў. Сэрца засталося ў страсці — у тым ліку ў Арэса. Стрымаць уплыў не выйшла.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Зеўс выдаў яе за Гефеста, асцерагаючыся сілы яе ўплыву.',
            why: 'Спаборніцтва і яе просьбы карта не дае. Гэта ход вярхоўнага бога супраць багіні, якой не маглі супрацьстаяць ні смяротныя, ні багі.',
          },
          difficulty_rationale:
            'Прычына шлюбу. Гефест як муж лёгка чытаецца як «заслужаны выбар», не як спроба ўтаймаваць.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'У чым яе сапраўдная сіла — не ў мяккасці, а ў чым?',
          options: [
            {
              id: 'A',
              text: 'У тым, што яна беражэ каханых ад смерці',
            },
            {
              id: 'B',
              text: 'У вернасці шлюбу з Гефестам',
            },
            {
              id: 'C',
              text: 'У непазбежнасці прыцягнення, якое мяняе лёсы',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — не прыгажосць як упрыгожанне, а сіла, што кіруе жаданнем.',
            detail:
              'Злучае і руйнуе: Парысу — любоў найпрыгажэйшай, адсюль Траянская вайна. Адоніса кахала і не ўратавала: анемоны з крыві. Ні багам, ні людзям не ўстаяць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — непазбежнасць прыцягнення, здольнага мяняць лёсы.',
            why: 'Адоніс якраз паказвае мяжу: любоў дае, ад страты не зачыняе. Вернасці Гефесту няма. Мяккасць карта здымае сама.',
          },
          difficulty_rationale:
            'Формула фіналу. Адоніс і шлюб правакуюць бачыць ратаўніцу або жонку каваля — не непазбежнасць жадання.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '阿佛洛狄式',
      questions: [
        {
          level: 'Story',
          question: '阿佛洛狄忒如何诞生？',
          options: [
            {
              id: 'A',
              text: '从海沫中——被推翻的乌拉诺斯的血与种落入海中',
            },
            {
              id: 'B',
              text: '在奥林匹斯，作为宙斯与赫拉之女',
            },
            {
              id: 'C',
              text: '在赫菲斯托斯的作坊里，她后来被嫁往那里',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 克洛诺斯推翻乌拉诺斯后的泡沫；已是成人，光辉照人。',
            detail:
              '浪把她送往塞浦路斯。她踏上陆地——周遭尽开。与赫菲斯托斯的婚姻和奥林匹斯在后，不是诞生之地。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 从海沫中：乌拉诺斯的血与种落入海中。',
            why: '在此卡上宙斯不是父亲，而是后来把她嫁给赫菲斯托斯的人。作坊是算计的婚姻，不是摇篮。',
          },
          difficulty_rationale:
            '起源的开端。奥林匹斯式的“宙斯之女”与嫁给赫菲斯托斯同在一文，会把诞生拉过去。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '宙斯为何把她嫁给赫菲斯托斯？',
          options: [
            {
              id: 'A',
              text: '惧其影响，希望加以约束',
            },
            {
              id: 'B',
              text: '赫菲斯托斯在诸神竞赛中赢得了她',
            },
            {
              id: 'C',
              text: '她自己求一个铁匠丈夫',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 婚姻如辔：跛足巧匠对抗吸引之力。',
            detail:
              '婚姻未生出爱。心仍在激情——包括阿瑞斯。约束其影响失败了。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 宙斯惧其影响之强，把她嫁给赫菲斯托斯。',
            why: '卡无竞赛，也无她的请求。这是至高之神对凡人与诸神皆无法抵挡之女神的一步。',
          },
          difficulty_rationale:
            '婚姻之因。赫菲斯托斯为夫容易被读成“应得之选”，而非约束她的企图。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '她的真力不在柔软，而在何处？',
          options: [
            {
              id: 'A',
              text: '在于她护所爱免于死亡',
            },
            {
              id: 'B',
              text: '在于对赫菲斯托斯婚姻的忠贞',
            },
            {
              id: 'C',
              text: '在于能改写命运的吸引之必然',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 不是作为装饰的美，而是主宰欲望的力。',
            detail:
              '它联结也摧毁：给帕里斯以最美者之爱，由此特洛伊战争。她爱阿多尼斯却救不了他：血中生出银莲。神与人皆无法抵挡。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 能改写命运的吸引之必然。',
            why: '阿多尼斯正显出界限：爱给予，不封闭失落。对赫菲斯托斯并无忠贞。柔软是卡自己撤去的。',
          },
          difficulty_rationale:
            '终局公式。阿多尼斯与婚姻诱人看见拯救者或铁匠之妻——不是欲望的必然。',
          needs_review: false,
        },
      ],
    },
  },
};
