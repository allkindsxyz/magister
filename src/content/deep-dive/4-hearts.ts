import type { DeepDiveCard } from './types';

export const fourHearts: DeepDiveCard = {
  card_id: '4-hearts',
  locales: {
    en: {
      card_title: 'The Abduction of Europa by Zeus',
      questions: [
        {
          level: 'Story',
          question: 'How did Europa end up among the waves?',
          options: [
            {
              id: 'A',
              text: 'She sat on the bull’s back — and he carried her to the sea',
            },
            {
              id: 'B',
              text: 'Her companions sent her by ship to Crete',
            },
            {
              id: 'C',
              text: 'Zeus revealed his true form still on the shore, and she entered the waves herself',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — she sat on the snow-white bull’s back, and he bore her into the sea.',
            detail:
              'He lay at her feet, let himself be stroked, won complete trust. Before she could come to herself she was among the waves: Zeus crossed the sea and set her on Crete.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Europa sat on the bull’s back, and he carried her to the sea.',
            why: 'Her companions stayed on the shore. He revealed his true form only on Crete. Until then — the bull at her feet, trust, the back, the surge toward the sea.',
          },
          difficulty_rationale:
            'The central move of the abduction. Trust and stroking are easy to take for a peaceful departure, not an instant surge into the sea.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'How did Zeus arrange Europa’s fate after Crete?',
          options: [
            {
              id: 'A',
              text: 'He returned her to her father Agenor in Phoenicia',
            },
            {
              id: 'B',
              text: 'She bore him sons, among them Minos; then he gave her in marriage to the Cretan king',
            },
            {
              id: 'C',
              text: 'He made her queen of Olympus beside him',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — sons, including Minos, then marriage to the Cretan king and protection.',
            detail:
              'Her fate is bound to a new world, far from home. There she lived out her days. Return to Phoenicia is not on the card.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — she bore sons, among them Minos, and Zeus gave her in marriage to the Cretan king.',
            why: 'Neither a return home nor a place on Olympus. The abduction fixes her on Crete: love, children, a foreign marriage, a foreign land.',
          },
          difficulty_rationale:
            'The chain after the form is revealed. Easy to cut the myth at the abduction and miss that Zeus also settles her earthly fate.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What did Europa’s name become over time?',
          options: [
            {
              id: 'A',
              text: 'Another name for Crete',
            },
            {
              id: 'B',
              text: 'A title for Zeus’s mortal wives',
            },
            {
              id: 'C',
              text: 'The name of the western lands — and of a whole continent',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the western lands to which she was carried, and then a continent.',
            detail:
              'The name became a symbol of passage, of fate, and of a new history’s beginning. The myth, on the card, retells the movement of Greek civilization across the seas — westward.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the name came to mean the western lands and a whole continent.',
            why: 'Crete is the place of her life, not a new name for the island. The card insists on the westward carrying, not a title among beloveds.',
          },
          difficulty_rationale:
            'A conclusion beyond the beach and the bull. Crete as the scene of action is easy to take for the name remaining there.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Похищение Европы Зевсом',
      questions: [
        {
          level: 'Story',
          question: 'Как Европа оказалась среди волн?',
          options: [
            {
              id: 'A',
              text: 'Села быку на спину — и он унёс её к морю',
            },
            {
              id: 'B',
              text: 'Подруги отправили её кораблём на Крит',
            },
            {
              id: 'C',
              text: 'Зевс открыл истинный облик ещё на берегу, и она вошла в волны сама',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — она села на спину белоснежному быку, и он понёс её в море.',
            detail:
              'Он лёг у ног, дал себя погладить, внушил полное доверие. Не успев опомниться, она уже среди волн: Зевс переплыл море и высадил её на Крите.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Европа села быку на спину, и он унёс её к морю.',
            why: 'Подруги остались на берегу. Истинный облик он открыл уже на Крите. До этого — бык у ног, доверие, спина, рывок к морю.',
          },
          difficulty_rationale:
            'Центральный ход похищения. Доверие и поглаживание легко принять за мирный уход, а не за мгновенный рывок в море.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Как Зевс устроил судьбу Европы после Крита?',
          options: [
            {
              id: 'A',
              text: 'Вернул её отцу Агенору в Финикию',
            },
            {
              id: 'B',
              text: 'Она родила ему сыновей, среди них Миноса; затем он выдал её за критского царя',
            },
            {
              id: 'C',
              text: 'Сделал её царицей Олимпа рядом с собой',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — сыновья, в том числе Минос, затем брак с критским царём и защита.',
            detail:
              'Судьба связана с новым миром, вдали от родины. Там она прожила до конца. Возвращения в Финикию карта не даёт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer:
              'Ответ — она родила сыновей, среди них Миноса, и Зевс выдал её за критского царя.',
            why: 'Это не возвращение домой и не место на Олимпе. Похищение закрепляет её на Крите: любовь, дети, чужой брак, чужая земля.',
          },
          difficulty_rationale:
            'Цепочка после раскрытия облика. Легко оборвать миф на похищении и не увидеть, что Зевс ещё и устраивает её земную судьбу.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чем со временем стало имя Европы?',
          options: [
            {
              id: 'A',
              text: 'Другим названием Крита',
            },
            {
              id: 'B',
              text: 'Титулом смертных жён Зевса',
            },
            {
              id: 'C',
              text: 'Именем земель на западе — и целой части света',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — земли на западе, к которым её перенесли, и затем часть света.',
            detail:
              'Имя стало символом перехода, судьбы и начала новой истории. Миф, по карте, пересказывает движение греческой цивилизации за моря — на Запад.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — имя стало обозначать западные земли и целую часть света.',
            why: 'Крит — место жизни, не новое имя острова. Карта настаивает на переносе на запад, а не на титуле среди возлюбленных.',
          },
          difficulty_rationale:
            'Вывод за пределами пляжа и быка. Крит как место действия легко принять за то, что имя осталось там.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Выкраданне Еўропы Зеўсам',
      questions: [
        {
          level: 'Story',
          question: 'Як Еўропа апынулася сярод хваляў?',
          options: [
            {
              id: 'A',
              text: 'Села быку на спіну — і ён панёс яе да мора',
            },
            {
              id: 'B',
              text: 'Сяброўкі адправілі яе караблём на Крыт',
            },
            {
              id: 'C',
              text: 'Зеўс адкрыў сапраўднае аблічча яшчэ на беразе, і яна ўвайшла ў хвалі сама',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — яна села на спіну беласнежнаму быку, і ён панёс яе ў мора.',
            detail:
              'Ён лёг ля ног, даў сябе пагладзіць, унушыў поўны давер. Не паспеўшы апомніцца, яна ўжо сярод хваляў: Зеўс пераплыў мора і высадзіў яе на Крыце.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Еўропа села быку на спіну, і ён панёс яе да мора.',
            why: 'Сяброўкі засталіся на беразе. Сапраўднае аблічча ён адкрыў ужо на Крыце. Да таго — бык ля ног, давер, спіна, рывок да мора.',
          },
          difficulty_rationale:
            'Цэнтральны ход выкрадання. Давер і пагладжванне лёгка прыняць за мірны адыход, а не за імгненны рывок у мора.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Як Зеўс уладкаваў лёс Еўропы пасля Крыта?',
          options: [
            {
              id: 'A',
              text: 'Вярнуў яе бацьку Агенору ў Фінікію',
            },
            {
              id: 'B',
              text: 'Яна нарадзіла яму сыноў, сярод іх Мінаса; потым ён выдаў яе за крыцкага цара',
            },
            {
              id: 'C',
              text: 'Зрабіў яе царыцай Алімпа побач з сабой',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — сыны, у тым ліку Мінас, потым шлюб з крыцкім царом і абарона.',
            detail:
              'Лёс звязаны з новым светам, далёка ад радзімы. Там яна пражыла да канца. Вяртання ў Фінікію карта не дае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — яна нарадзіла сыноў, сярод іх Мінаса, і Зеўс выдаў яе за крыцкага цара.',
            why: 'Гэта не вяртанне дадому і не месца на Алімпе. Выкраданне замацоўвае яе на Крыце: любоў, дзеці, чужы шлюб, чужая зямля.',
          },
          difficulty_rationale:
            'Ланцужок пасля раскрыцця аблічча. Лёгка абарваць міф на выкраданні і не ўбачыць, што Зеўс яшчэ й уладкоўвае яе зямны лёс.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чым з часам стала імя Еўропы?',
          options: [
            {
              id: 'A',
              text: 'Іншай назвай Крыта',
            },
            {
              id: 'B',
              text: 'Тытулам смяротных жонак Зеўса',
            },
            {
              id: 'C',
              text: 'Імем зямель на захадзе — і цэлай часткі свету',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — землі на захадзе, да якіх яе перанеслі, і потым частка свету.',
            detail:
              'Імя стала сімвалам пераходу, лёсу і пачатку новай гісторыі. Міф, па карце, пераказвае рух грэчаскай цывілізацыі за моры — на Захад.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — імя стала абазначаць заходнія землі і цэлую частку свету.',
            why: 'Крыт — месца жыцця, не новае імя вострава. Карта настойвае на пераносе на захад, а не на тытуле сярод каханак.',
          },
          difficulty_rationale:
            'Выснова па-за пляжам і быком. Крыт як месца дзеяння лёгка прыняць за тое, што імя засталося там.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '宙斯劫走欧罗巴',
      questions: [
        {
          level: 'Story',
          question: '欧罗巴如何落身波涛之中？',
          options: [
            {
              id: 'A',
              text: '她坐上公牛背——公牛便把她带向大海',
            },
            {
              id: 'B',
              text: '同伴用船把她送往克里特',
            },
            {
              id: 'C',
              text: '宙斯尚在岸上便显露真身，她自己走进波涛',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 她坐上雪白公牛的背，公牛便把她带进海里。',
            detail:
              '它卧在她脚边，任她抚摸，赢取完全的信任。未及回神，她已在波涛中：宙斯渡海，把她置于克里特。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 欧罗巴坐上公牛背，公牛把她带向大海。',
            why: '同伴留在岸上。他到克里特才显露真身。在此之前——脚边的公牛、信任、骑背、冲向海。',
          },
          difficulty_rationale:
            '劫夺的中心动作。信任与抚摸容易被当成平静离去，而非瞬间冲入海中。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '到克里特之后，宙斯如何安排欧罗巴的命运？',
          options: [
            {
              id: 'A',
              text: '把她送回腓尼基的父亲阿革诺耳身边',
            },
            {
              id: 'B',
              text: '她为他生下儿子，其中有弥诺斯；随后他把她嫁给克里特国王',
            },
            {
              id: 'C',
              text: '立她为奥林匹斯上与自己并肩的王后',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 生子，包括弥诺斯，再嫁克里特王，并得庇护。',
            detail:
              '她的命运系于远离故乡的新世界。她在那里终老。卡未写归返腓尼基。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她生下儿子，其中有弥诺斯，宙斯把她嫁给克里特国王。',
            why: '既非归乡，也非登奥林匹斯。劫夺把她钉在克里特：爱、子女、异国婚姻、异国土地。',
          },
          difficulty_rationale:
            '显形之后的链条。容易把神话截在劫夺，错过宙斯还安排了她的尘世命运。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '欧罗巴之名后来成了什么？',
          options: [
            {
              id: 'A',
              text: '克里特的别称',
            },
            {
              id: 'B',
              text: '宙斯凡间妻子的称号',
            },
            {
              id: 'C',
              text: '西方土地之名——以及一整片大陆',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 她被带往的西方土地，而后是一片大陆。',
            detail:
              '这名字成了过渡、命运与新史开端的象征。按卡所述，神话重述希腊文明渡海西行的运动。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 此名指向西方土地与一整片大陆。',
            why: '克里特是她的生活之地，不是岛的新名。卡坚持西向的搬运，而非众爱侣中的称号。',
          },
          difficulty_rationale:
            '沙滩与公牛之外的结论。容易把作为场景的克里特当成名字留在那里。',
          needs_review: false,
        },
      ],
    },
  },
};
