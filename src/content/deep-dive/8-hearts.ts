import type { DeepDiveCard } from './types';

export const eightHearts: DeepDiveCard = {
  card_id: '8-hearts',
  locales: {
    en: {
      card_title: 'Amphitrite',
      questions: [
        {
          level: 'Story',
          question: 'Who found Amphitrite when she hid in the depths from Poseidon?',
          options: [
            {
              id: 'A',
              text: 'A dolphin the god sent to search',
            },
            {
              id: 'B',
              text: 'Poseidon himself, who seized her amid the Nereids’ dance',
            },
            {
              id: 'C',
              text: 'Nereus, who gave his daughter in marriage by force',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the dolphin found her and persuaded her to return.',
            detail:
              'She feared Poseidon’s strength and hid. In thanks the god made the dolphin a constellation. Consent to the marriage came through a messenger, not a seizure in the dance.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a dolphin sent by Poseidon.',
            why: 'The dance is when the god saw her, not when he caught her. Nereus on the card is the father, not the one who gives her away by force.',
          },
          difficulty_rationale:
            'The opening: flight and a go-between. The lord of the seas is easily read as the one who takes her himself.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'How does her image differ from that of the lord of the seas?',
          options: [
            {
              id: 'A',
              text: 'She shares the same storm as Poseidon',
            },
            {
              id: 'B',
              text: 'Depth and the calm of waters that hide strength — not the storm',
            },
            {
              id: 'C',
              text: 'She is a spouse with no share in power',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — depth and calm, strength within, not the storm.',
            detail:
              'Queen of the ocean; power is shared; honour is equal. Homer in the short text gives her sea-monsters — but that is command, not identity with her husband’s storm.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — her image is bound to depth and the calm of waters, not to the storm.',
            why: 'The card expressly sets her against the lord’s storm. Powerlessness is not there: she sits with him on the chariot of sea-horses.',
          },
          difficulty_rationale:
            'Hold the contrast with Poseidon. Monsters from the short description pull toward destruction.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where does her power show itself?',
          options: [
            {
              id: 'A',
              text: 'In the storm that breaks ships',
            },
            {
              id: 'B',
              text: 'In a flight that never ended',
            },
            {
              id: 'C',
              text: 'In balance: every wave obeys an unseen rhythm',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — not in the storm, but in balance.',
            detail:
              'Presence does not destroy — it holds, guides, joins. Silence under the waves: there, on the card, is the ocean’s true might.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — power in balance, where wave, current, and depth answer one rhythm.',
            why: 'Storm is Poseidon’s line. The flight ended: she consented to become his wife. Might here is hidden harmony, not the gale.',
          },
          difficulty_rationale:
            'The card’s conclusion. Monsters and fear of Poseidon are easy to take for the essence of her strength.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Амфитрита',
      questions: [
        {
          level: 'Story',
          question: 'Кто нашёл Амфитриту, когда она скрылась в глубинах от Посейдона?',
          options: [
            {
              id: 'A',
              text: 'Дельфин, которого бог отправил на поиски',
            },
            {
              id: 'B',
              text: 'Сам Посейдон, схвативший её среди танца нереид',
            },
            {
              id: 'C',
              text: 'Нерей, выдавший дочь замуж силой',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — дельфин нашёл её и убедил вернуться.',
            detail:
              'Она испугалась силы Посейдона и спряталась. В благодарность бог сделал дельфина созвездием. Согласие на брак пришло через посланца, не через захват в танце.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — дельфин, посланный Посейдоном.',
            why: 'Танец — момент, когда бог её увидел, не момент поимки. Нерей в карте — отец, не тот, кто выдаёт её силой.',
          },
          difficulty_rationale:
            'Завязка: бегство и посредник. Владыка морей легко читается как тот, кто берёт сам.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чем её образ отличается от образа владыки морей?',
          options: [
            {
              id: 'A',
              text: 'Она разделяет ту же бурю, что и Посейдон',
            },
            {
              id: 'B',
              text: 'Глубина и спокойствие вод, скрывающих силу, — не буря',
            },
            {
              id: 'C',
              text: 'Она супруга без доли во власти',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — глубина и покой, сила внутри, не шторм.',
            detail:
              'Царица океана, власть поделена, почитание наравне. Гомер в кратком тексте даёт ей морских чудовищ — но это повеление, не отождествление с бурей мужа.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — её образ связан с глубиной и спокойствием вод, не с бурей.',
            why: 'Карта прямо противопоставляет её буре владыки. Безвластия нет: она восседает с ним на колеснице морских коней.',
          },
          difficulty_rationale:
            'Нужно удержать контраст с Посейдоном. Чудовища из краткого описания тянут к разрушению.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'В чём проявляется её власть?',
          options: [
            {
              id: 'A',
              text: 'В буре, которая ломает корабли',
            },
            {
              id: 'B',
              text: 'В бегстве, которое так и не кончилось',
            },
            {
              id: 'C',
              text: 'В равновесии: каждая волна подчинена невидимому ритму',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — не в буре, а в равновесии.',
            detail:
              'Присутствие не разрушает — удерживает, направляет, соединяет. Тишина под волнами: там, по карте, истинная мощь океана.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — власть в равновесии, где волна, течение и глубина слушаются одного ритма.',
            why: 'Буря — линия Посейдона. Бегство кончилось: она согласилась стать супругой. Мощь здесь в скрытой гармонии, не в шторме.',
          },
          difficulty_rationale:
            'Вывод карты. Чудовища и страх перед Посейдоном легко принять за суть её силы.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Амфітрыта',
      questions: [
        {
          level: 'Story',
          question: 'Хто знайшоў Амфітрыту, калі яна схавалася ў глыбінях ад Пасейдона?',
          options: [
            {
              id: 'A',
              text: 'Дэльфін, якога бог адправіў на пошукі',
            },
            {
              id: 'B',
              text: 'Сам Пасейдон, што схапіў яе сярод танцу нерэід',
            },
            {
              id: 'C',
              text: 'Нерэй, што выдаў дачку замуж сілай',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — дэльфін знайшоў яе і пераканаў вярнуцца.',
            detail:
              'Яна спалохалася сілы Пасейдона і схавалася. Удзячна бог зрабіў дэльфіна сузор’ем. Згода на шлюб прыйшла праз пасланца, не праз захоп у танцы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — дэльфін, пасланы Пасейдонам.',
            why: 'Танец — момант, калі бог яе ўбачыў, не момант паімкі. Нерэй на карце — бацька, не той, хто выдае яе сілай.',
          },
          difficulty_rationale:
            'Завязка: уцёкі і пасрэднік. Уладар мораў лёгка чытаецца як той, хто бярэ сам.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чым яе вобраз адрозніваецца ад вобраза ўладара мораў?',
          options: [
            {
              id: 'A',
              text: 'Яна дзеліць тую ж буру, што і Пасейдон',
            },
            {
              id: 'B',
              text: 'Глыбіня і спакой вод, што хаваюць сілу, — не бура',
            },
            {
              id: 'C',
              text: 'Яна жонка без долі ў уладзе',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — глыбіня і спакой, сіла ўнутры, не шторм.',
            detail:
              'Царыца акіяна, улада падзелена, пашана нароўні. Гомер у кароткім тэксце дае ёй марскіх пачвар — але гэта павеленне, не атаясамленне з бурай мужа.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яе вобраз звязаны з глыбінёй і спакоем вод, не з бурай.',
            why: 'Карта проста супрацьпастаўляе яе буры ўладара. Бясуладдзя няма: яна сядзіць з ім на калясніцы марскіх коней.',
          },
          difficulty_rationale:
            'Трэба ўтрымаць кантраст з Пасейдонам. Пачвары з кароткага апісання цягнуць да разбурэння.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'У чым праяўляецца яе ўлада?',
          options: [
            {
              id: 'A',
              text: 'У буры, што ламае караблі',
            },
            {
              id: 'B',
              text: 'У ўцёках, якія так і не скончыліся',
            },
            {
              id: 'C',
              text: 'У раўнавазе: кожная хваля падпарадкаваная нябачнаму рытму',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — не ў буры, а ў раўнавазе.',
            detail:
              'Прысутнасць не руйнуе — утрымлівае, накіроўвае, злучае. Цішыня пад хвалямі: там, па карце, сапраўдная моц акіяна.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — улада ў раўнавазе, дзе хваля, цячэнне і глыбіня слухаюцца аднаго рытму.',
            why: 'Бура — лінія Пасейдона. Уцёкі скончыліся: яна згадзілася стаць жонкай. Моц тут у схаванай гармоніі, не ў шторме.',
          },
          difficulty_rationale:
            'Выснова карты. Пачвары і страх перад Пасейдонам лёгка прыняць за сутнасць яе сілы.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '安菲特里忒',
      questions: [
        {
          level: 'Story',
          question: '安菲特里忒躲避波塞冬藏入深渊时，是谁找到了她？',
          options: [
            {
              id: 'A',
              text: '神派去搜寻的海豚',
            },
            {
              id: 'B',
              text: '波塞冬本人，在涅瑞伊得的舞蹈中夺走她',
            },
            {
              id: 'C',
              text: '涅柔斯，强行把女儿嫁出',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 海豚找到她并说服她归来。',
            detail:
              '她惧怕波塞冬的力量而躲藏。神感激之下把海豚列为星座。对婚姻的同意经由使者而来，不是舞中的强夺。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 波塞冬派出的海豚。',
            why: '舞蹈是神看见她的时刻，不是捕获的时刻。卡上涅柔斯是父亲，不是强行嫁女者。',
          },
          difficulty_rationale:
            '开端：逃亡与中介。海之主容易被读成亲自夺人者。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '她的形象与海之主有何不同？',
          options: [
            {
              id: 'A',
              text: '她与波塞冬同享同一场风暴',
            },
            {
              id: 'B',
              text: '深度与藏力于内的水之静——不是风暴',
            },
            {
              id: 'C',
              text: '她是无权分的配偶',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 深度与静，力在其内，不是风暴。',
            detail:
              '海洋之后；权力共享；尊荣对等。短文中荷马给她海怪——但那是号令，不是与丈夫的风暴同一。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她的形象系于深度与水之静，不是风暴。',
            why: '卡明确把她对照海主的风暴。无权并不在：她与他同坐海马战车。',
          },
          difficulty_rationale:
            '要守住与波塞冬的对照。短述里的怪物把人拉向毁灭。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '她的力量显于何处？',
          options: [
            {
              id: 'A',
              text: '在摧毁船只的风暴里',
            },
            {
              id: 'B',
              text: '在从未结束的逃亡里',
            },
            {
              id: 'C',
              text: '在平衡中：每一浪都服从看不见的节律',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 不在风暴，而在平衡。',
            detail:
              '临在并不摧毁——它维持、引导、联结。浪下的静默：按卡所述，那里才是海洋的真力。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 力量在平衡里：浪、流与深应和同一节律。',
            why: '风暴是波塞冬一线。逃亡已结束：她同意成为他的妻子。力量在此是隐秘的和谐，不是狂风。',
          },
          difficulty_rationale:
            '卡的结论。怪物与对波塞冬的恐惧容易被当成她力量的本质。',
          needs_review: false,
        },
      ],
    },
  },
};
