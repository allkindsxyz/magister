import type { DeepDiveCard } from './types';

export const sixClubs: DeepDiveCard = {
  card_id: '6-clubs',
  locales: {
    en: {
      card_title: 'Celebrations for the Capture of Acre',
      questions: [
        {
          level: 'Story',
          question: 'What accompanied Acre’s surrender in 1191?',
          options: [
            {
              id: 'A',
              text: 'Mercy for the garrison and an exchange of prisoners',
            },
            {
              id: 'B',
              text: 'The execution of thousands of captives on Richard’s order',
            },
            {
              id: 'C',
              text: 'Saladin’s immediate surrender of Jerusalem',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — after the capture Richard ordered thousands of captives killed.',
            detail:
              'Nearly two years of siege: hunger, disease, blows from both sides. Victory gave the coast — and at once a bloody aftermath.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the execution of thousands of captives on Richard’s order.',
            why: 'There was no mercy. Saladin did not yield Jerusalem for this surrender: he tried to lift the siege from without and lost the city, not the whole war.',
          },
          difficulty_rationale:
            'Celebrations in the title mask the execution. The central event of the description, not of the gloss.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did the crusaders need to take Acre?',
          options: [
            {
              id: 'A',
              text: 'To secure the coast and continue the campaign',
            },
            {
              id: 'B',
              text: 'To crown Baldwin I on the day of the assault',
            },
            {
              id: 'C',
              text: 'So that Saladin would yield the walls without a fight',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — to dig in on the shore and press on.',
            detail:
              'Richard and Philip broke the defense; Saladin struck from outside. The city was the lock of the coast, not a pretext for a coronation.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — to secure the coast and continue the campaign.',
            why: 'Saladin neither lifted the siege nor yielded the city himself. Baldwin I stands in the gloss as another capture of Acre — he cannot be pasted into 1191.',
          },
          difficulty_rationale:
            'The sense of the victory in the description. The gloss names another conqueror — hence the false answer about Baldwin.',
          needs_review: true,
          needs_review_reason:
            'The gloss credits the capture to Baldwin I and the kingdom’s capital; the description — to the siege of 1191 (Richard, Philip, Saladin).',
        },
        {
          level: 'Nuances',
          question: 'What judgment does the card make of Acre’s capture?',
          options: [
            {
              id: 'A',
              text: 'Victory cleansed the crusade of cruelty',
            },
            {
              id: 'B',
              text: 'Heroism and cruelty proved inseparable',
            },
            {
              id: 'C',
              text: 'The celebration proved that faith is stronger than force',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — heroism and cruelty are here inseparable.',
            detail:
              'A symbol of military resolve and, at once, of the tragedy of the crusades: cultures, faith, and ambition collided; the price of victory remained in the execution.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — heroism and cruelty proved inseparable.',
            why: 'The title promises celebration. The text takes it back: victory washes no blood away and does not argue whose faith is stronger.',
          },
          difficulty_rationale:
            'The formula of the last paragraph. The feast in the title is easy to take for the card’s moral.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Торжества по поводу взятия Акры',
      questions: [
        {
          level: 'Story',
          question: 'Чем сопровождалась капитуляция Акры в 1191 году?',
          options: [
            {
              id: 'A',
              text: 'Пощадой гарнизона и обменом пленных',
            },
            {
              id: 'B',
              text: 'Казнью тысяч пленных по приказу Ричарда',
            },
            {
              id: 'C',
              text: 'Немедленной сдачей Иерусалима Саладином',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — после взятия Ричард велел казнить тысячи пленных.',
            detail:
              'Почти два года осады: голод, болезни, удары с двух сторон. Победа дала побережье — и сразу же кровавый хвост.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — казнь тысяч пленных по приказу Ричарда.',
            why: 'Пощады не было. Саладин Иерусалим за эту капитуляцию не отдал: он пытался снять осаду извне и проиграл город, не войну целиком.',
          },
          difficulty_rationale:
            'Торжества в названии маскируют казнь. Центральное событие описания, не сводки.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Зачем крестоносцам было взять Акру?',
          options: [
            {
              id: 'A',
              text: 'Чтобы закрепиться на побережье и продолжить кампанию',
            },
            {
              id: 'B',
              text: 'Чтобы короновать Балдуина I в день штурма',
            },
            {
              id: 'C',
              text: 'Чтобы Саладин сам сдал стены без боя',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — закрепиться на берегу и идти дальше.',
            detail:
              'Ричард и Филипп ломали оборону, Саладин бил снаружи. Город был замком побережья, не поводом для коронации.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — чтобы закрепиться на побережье и продолжить кампанию.',
            why: 'Саладин осаду не снял и город сам не сдал. Балдуин I стоит в сводке как другой захват Акры — его нельзя вклеить в 1191-й.',
          },
          difficulty_rationale:
            'Смысл победы в описании. Сводка даёт другого завоевателя — отсюда ложный ответ про Балдуина.',
          needs_review: true,
          needs_review_reason:
            'Сводка отдаёт взятие Балдуину I и столице королевства; описание — осаде 1191 года (Ричард, Филипп, Саладин).',
        },
        {
          level: 'Nuances',
          question: 'Какой вывод карта делает о взятии Акры?',
          options: [
            {
              id: 'A',
              text: 'Победа очистила поход от жестокости',
            },
            {
              id: 'B',
              text: 'Героизм и жестокость оказались неразделимы',
            },
            {
              id: 'C',
              text: 'Торжество доказало, что вера сильнее силы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — героизм и жестокость здесь неразделимы.',
            detail:
              'Символ военной решимости и одновременно трагедии походов: культуры, вера и амбиции столкнулись, цена победы осталась в казни.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — героизм и жестокость оказались неразделимы.',
            why: 'Название сулит торжество. Текст забирает его: победа не смывает крови и не спорит, чья вера сильнее.',
          },
          difficulty_rationale:
            'Формула последнего абзаца. Праздник в названии легко принять за мораль карты.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Урачыстасці з нагоды ўзяцця Акры',
      questions: [
        {
          level: 'Story',
          question: 'Чым суправаджалася капітуляцыя Акры ў 1191 годзе?',
          options: [
            {
              id: 'A',
              text: 'Літасцю да гарнізона і абменам палонных',
            },
            {
              id: 'B',
              text: 'Пакараннем смерцю тысяч палонных па загадзе Рычарда',
            },
            {
              id: 'C',
              text: 'Неадкладнай здачай Іерусаліма Саладзінам',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пасля ўзяцця Рычард загадаў пакараць смерцю тысячы палонных.',
            detail:
              'Амаль два гады аблогі: голад, хваробы, ўдары з двух бакоў. Перамога дала ўзбярэжжа — і адразу крывавы хвост.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пакаранне смерцю тысяч палонных па загадзе Рычарда.',
            why: 'Літасці не было. Саладзін Іерусалім за гэтую капітуляцыю не аддаў: ён спрабаваў зняць аблогу звонку і прайграў горад, не вайну цалкам.',
          },
          difficulty_rationale:
            'Урачыстасці ў назве маскіруюць пакаранне. Цэнтральная падзея апісання, не зводкі.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Навошта крыжакам было ўзяць Акру?',
          options: [
            {
              id: 'A',
              text: 'Каб замацавацца на ўзбярэжжы і працягнуць кампанію',
            },
            {
              id: 'B',
              text: 'Каб каранаваць Балдуіна I у дзень штурму',
            },
            {
              id: 'C',
              text: 'Каб Саладзін сам здаў сцены без бою',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — замацавацца на беразе і ісці далей.',
            detail:
              'Рычард і Філіп ламалі абарону, Саладзін біў звонку. Горад быў замком узбярэжжа, не нагодай для каранацыі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — каб замацавацца на ўзбярэжжы і працягнуць кампанію.',
            why: 'Саладзін аблогу не зняў і горад сам не здаў. Балдуін I стаіць у зводцы як іншае ўзяцце Акры — яго нельга ўклеіць у 1191-ы.',
          },
          difficulty_rationale:
            'Сэнс перамогі ў апісанні. Зводка дае іншага заваёўніка — адсюль памылковы адказ пра Балдуіна.',
          needs_review: true,
          needs_review_reason:
            'Зводка аддае ўзяцце Балдуіну I і сталіцы каралеўства; апісанне — аблозе 1191 года (Рычард, Філіп, Саладзін).',
        },
        {
          level: 'Nuances',
          question: 'Якую выснову карта робіць пра ўзяцце Акры?',
          options: [
            {
              id: 'A',
              text: 'Перамога ачысціла паход ад жорсткасці',
            },
            {
              id: 'B',
              text: 'Гераізм і жорсткасць аказаліся непадзельныя',
            },
            {
              id: 'C',
              text: 'Урачыстасць даказала, што вера мацнейшая за сілу',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гераізм і жорсткасць тут непадзельныя.',
            detail:
              'Сімвал ваеннай рашучасці і адначасова трагедыі паходаў: культуры, вера і амбіцыі сутыкнуліся, цана перамогі засталася ў пакаранні.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — гераізм і жорсткасць аказаліся непадзельныя.',
            why: 'Назва абяцае ўрачыстасць. Тэкст забірае яе: перамога не змывае крыві і не спрачае, чыя вера мацнейшая.',
          },
          difficulty_rationale:
            'Формула апошняга абзаца. Свята ў назве лёгка прыняць за мараль карты.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '攻克阿卡的庆典',
      questions: [
        {
          level: 'Story',
          question: '1191年阿卡投降伴随了什么？',
          options: [
            {
              id: 'A',
              text: '宽恕守军并交换俘虏',
            },
            {
              id: 'B',
              text: '理查下令处决数千俘虏',
            },
            {
              id: 'C',
              text: '萨拉丁立刻交出耶路撒冷',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 攻占之后理查下令处死数千俘虏。',
            detail:
              '将近两年的围城：饥饿、疾病、双方夹击。胜利得到海岸——也立刻带上血腥的尾巴。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 理查下令处决数千俘虏。',
            why: '并无宽恕。萨拉丁并未因这次投降交出耶路撒冷：他试图从外部解围，输掉的是城市，不是整场战争。',
          },
          difficulty_rationale:
            '标题中的庆典掩盖了处决。这是描述的中心事件，而非摘要的。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '十字军为何需要攻取阿卡？',
          options: [
            {
              id: 'A',
              text: '为了稳住海岸并继续征战',
            },
            {
              id: 'B',
              text: '为了在攻城之日为鲍德温一世加冕',
            },
            {
              id: 'C',
              text: '好让萨拉丁不战而交出城墙',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在岸边立足并继续推进。',
            detail:
              '理查与腓力突破防御；萨拉丁从外打击。这座城是海岸的锁钥，不是加冕的借口。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 为了稳住海岸并继续征战。',
            why: '萨拉丁既未解围，亦未自行献城。鲍德温一世出现在摘要中是另一次攻克阿卡——不能贴进1191年。',
          },
          difficulty_rationale:
            '描述中胜利的意义。摘要给出另一位征服者——由此产生关于鲍德温的错误答案。',
          needs_review: true,
          needs_review_reason:
            '摘要把攻克归于鲍德温一世与王国首都；描述则归于1191年围城（理查、腓力、萨拉丁）。',
        },
        {
          level: 'Nuances',
          question: '卡片对攻克阿卡作出何种判断？',
          options: [
            {
              id: 'A',
              text: '胜利洗净了十字军的残酷',
            },
            {
              id: 'B',
              text: '英雄主义与残酷被证明不可分割',
            },
            {
              id: 'C',
              text: '庆典证明信仰强过武力',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 英雄主义与残酷在此不可分割。',
            detail:
              '军事决心的象征，同时亦是十字军悲剧的象征：文化、信仰与野心相撞；胜利的代价留在处决里。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 英雄主义与残酷被证明不可分割。',
            why: '标题许诺庆典。文本把它收回：胜利洗不掉血，也不争论谁的信仰更强。',
          },
          difficulty_rationale:
            '末段的公式。标题里的宴庆容易被当成卡片的道德。',
          needs_review: false,
        },
      ],
    },
  },
};
