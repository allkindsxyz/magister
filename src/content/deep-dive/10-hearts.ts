import type { DeepDiveCard } from './types';

export const tenHearts: DeepDiveCard = {
  card_id: '10-hearts',
  locales: {
    en: {
      card_title: 'Persephone',
      questions: [
        {
          level: 'Story',
          question: 'How did Persephone end up in the underworld?',
          options: [
            {
              id: 'A',
              text: 'The earth split open, and Hades carried her from the meadow',
            },
            {
              id: 'B',
              text: 'She descended herself, seeking her mother',
            },
            {
              id: 'C',
              text: 'Zeus gave her to Hades before the abduction',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a cleft, Hades, the meadow where she gathered flowers.',
            detail:
              'Demeter’s daughter, young. Enchanted by her beauty, the lord of the underworld seized her. A willing descent is not on the card.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the earth split open, and Hades carried her from the meadow.',
            why: 'It was Demeter who sought her daughter — nine days with torches. Zeus intervenes later, when the earth is already barren, not as matchmaker before the meadow scene.',
          },
          difficulty_rationale:
            'The abduction’s opening. Zeus’s later order is easy to move to the start and make the transfer “lawful.”',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why did Persephone not return to the earth for good?',
          options: [
            {
              id: 'A',
              text: 'Zeus forbade her return to her mother',
            },
            {
              id: 'B',
              text: 'Demeter rejected her after the abduction',
            },
            {
              id: 'C',
              text: 'Unknowing, she tasted pomegranate seeds — fruit of a bond with the world of the dead',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the pomegranate bound her to the underworld, though Zeus had already ordered her return.',
            detail:
              'Demeter stripped the earth of fertility; people were dying of hunger. Hades agreed — and gave the seeds before she left. Hence the year’s split: part with the mother, part in the realm of shades.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — she tasted pomegranate seeds and bound herself forever to the world of the dead.',
            why: 'Zeus had in fact ordered her return. Demeter sought her daughter; she did not drive her away. Without the pomegranate the return would have been complete.',
          },
          difficulty_rationale:
            'The cause of the double life. Zeus’s order and the famine are easy to take for the ending; Hades’s trap comes one step later.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What joined in her fate?',
          options: [
            {
              id: 'A',
              text: 'Light and dark, girlhood and queenship, life and death — an eternal cycle',
            },
            {
              id: 'B',
              text: 'Spring alone: the card leaves her no share in death',
            },
            {
              id: 'C',
              text: 'The underworld alone: there is no return to the mother',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the doubleness of cyclical being, not one side only.',
            detail:
              'With the mother — the earth blooms. Into the dark — autumn and winter. Queen of spring and lady of the underworld at once. To this cycle, on the card, all living things are bound.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — light and dark, girlhood and queenship, life and death.',
            why: 'The card does not give her wholly to spring or to Hades. The meaning is in the alternation, without which there is neither fertility nor winter.',
          },
          difficulty_rationale:
            'The card’s formula. Abduction tempts you to see only death; the pomegranate, only captivity; the text insists on the cycle.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Персефона',
      questions: [
        {
          level: 'Story',
          question: 'Как Персефона оказалась в подземном царстве?',
          options: [
            {
              id: 'A',
              text: 'Земля разверзлась, и Аид унёс её с луга',
            },
            {
              id: 'B',
              text: 'Она сама спустилась, ища мать',
            },
            {
              id: 'C',
              text: 'Зевс отдал её Аиду ещё до похищения',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — расселина, Аид, луг, где она собирала цветы.',
            detail:
              'Дочь Деметры, юная. Очарованный красотой, владыка подземного царства схватил её. Добровольного спуска карта не даёт.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — земля разверзлась, и Аид унёс её с луга.',
            why: 'Искала мать как раз Деметра — девять дней с факелами. Зевс вмешается позже, когда земля уже без плодородия, не как сваха до сцены на лугу.',
          },
          difficulty_rationale:
            'Завязка похищения. Поздний приказ Зевса легко перенести в начало и сделать передачу «законной».',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему Персефона не вернулась на землю насовсем?',
          options: [
            {
              id: 'A',
              text: 'Зевс запретил ей возвращаться к матери',
            },
            {
              id: 'B',
              text: 'Деметра отвергла её после похищения',
            },
            {
              id: 'C',
              text: 'По незнанию вкусила зёрна граната — плод связи с миром мёртвых',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — гранат связал её с преисподней, хотя Зевс уже велел вернуть.',
            detail:
              'Деметра лишила землю плодородия, люди гибли от голода. Аид согласился — и дал зёрна до ухода. Отсюда раздел года: часть с матерью, часть в царстве теней.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — она вкусила зёрна граната и навсегда связала себя с миром мёртвых.',
            why: 'Зевс как раз приказал вернуть её. Деметра искала дочь, не гнала. Без граната возвращение было бы полным.',
          },
          difficulty_rationale:
            'Причина двойной жизни. Приказ Зевса и голод легко принять за финал; ловушка Аида стоит на шаг позже.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что соединилось в её судьбе?',
          options: [
            {
              id: 'A',
              text: 'Свет и тьма, девичество и царственность, жизнь и смерть — вечный цикл',
            },
            {
              id: 'B',
              text: 'Только весна: доли в смерти карта ей не оставляет',
            },
            {
              id: 'C',
              text: 'Только преисподняя: возвращения к матери больше нет',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — двойственность цикличного бытия, не одна сторона.',
            detail:
              'К матери — земля цветёт. Во мрак — осень и зима. Царица весны и владычица преисподней одновременно. Этому циклу, по карте, подчинено всё живое.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — свет и тьма, девичество и царственность, жизнь и смерть.',
            why: 'Карта не отдаёт её целиком ни весне, ни Аиду. Смысл — в чередовании, без которого нет ни плодородия, ни зимы.',
          },
          difficulty_rationale:
            'Формула карты. Похищение тянет видеть только смерть, гранат — только плен; текст настаивает на цикле.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Персефона',
      questions: [
        {
          level: 'Story',
          question: 'Як Персефона апынулася ў падземным царстве?',
          options: [
            {
              id: 'A',
              text: 'Зямля разверзлася, і Аід панёс яе з луга',
            },
            {
              id: 'B',
              text: 'Яна сама спусцілася, шукаючы маці',
            },
            {
              id: 'C',
              text: 'Зеўс аддаў яе Аіду яшчэ да выкрадання',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — расколіна, Аід, луг, дзе яна збірала кветкі.',
            detail:
              'Дачка Дэметры, юная. Ачараваны прыгажосцю, уладар падземнага царства схапіў яе. Добраахвотнага спуску карта не дае.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — зямля разверзлася, і Аід панёс яе з луга.',
            why: 'Шукала маці якраз Дэметра — дзевяць дзён з паходнямі. Зеўс умяшаецца пазней, калі зямля ўжо без урадлівасці, не як сват да сцэны на лугу.',
          },
          difficulty_rationale:
            'Завязка выкрадання. Позні загад Зеўса лёгка перанесці ў пачатак і зрабіць перадачу «законнай».',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму Персефона не вярнулася на зямлю назаўсёды?',
          options: [
            {
              id: 'A',
              text: 'Зеўс забараніў ёй вяртацца да маці',
            },
            {
              id: 'B',
              text: 'Дэметра адвергла яе пасля выкрадання',
            },
            {
              id: 'C',
              text: 'Па няведанні пакаштавала зярняты граната — плод сувязі з светам мёртвых',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гранат звязаў яе з пеклам, хоць Зеўс ужо загадаў вярнуць.',
            detail:
              'Дэметра пазбавіла зямлю ўрадлівасці, людзі гінулі ад голаду. Аід згадзіўся — і даў зярняты да адыходу. Адсюль падзел года: частка з маці, частка ў царстве ценяў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яна пакаштавала зярняты граната і назаўсёды звязала сябе з светам мёртвых.',
            why: 'Зеўс якраз загадаў вярнуць яе. Дэметра шукала дачку, не гнала. Без граната вяртанне было б поўным.',
          },
          difficulty_rationale:
            'Прычына падвойнага жыцця. Загад Зеўса і голад лёгка прыняць за фінал; пастка Аіда стаіць на крок пазней.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што злучылася ў яе лёсе?',
          options: [
            {
              id: 'A',
              text: 'Святло і цемра, дзявоцтва і царскасць, жыццё і смерць — вечны цыкл',
            },
            {
              id: 'B',
              text: 'Толькі вясна: долі ў смерці карта ёй не пакідае',
            },
            {
              id: 'C',
              text: 'Толькі пекла: вяртання да маці больш няма',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — двайнасць цыклічнага быцця, не адзін бок.',
            detail:
              'Да маці — зямля квітнее. У цемру — восень і зіма. Царыца вясны і ўладарка пекла адначасова. Гэтаму цыклу, па карце, падпарадкавана ўсё жывое.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — святло і цемра, дзявоцтва і царскасць, жыццё і смерць.',
            why: 'Карта не аддае яе цалкам ні вясне, ні Аіду. Сэнс — у чаргаванні, без якога няма ні ўрадлівасці, ні зімы.',
          },
          difficulty_rationale:
            'Формула карты. Выкраданне цягне бачыць толькі смерць, гранат — толькі палон; тэкст настойвае на цыкле.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '珀耳塞福涅',
      questions: [
        {
          level: 'Story',
          question: '珀耳塞福涅如何落入冥界？',
          options: [
            {
              id: 'A',
              text: '大地裂开，哈德斯从草地上把她带走',
            },
            {
              id: 'B',
              text: '她自己下去寻找母亲',
            },
            {
              id: 'C',
              text: '宙斯在劫夺之前就把她许给哈德斯',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 裂隙、哈德斯、她采花的草地。',
            detail:
              '得墨忒耳之女，尚年少。冥主为美所惑，将她夺走。卡未写自愿下行。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 大地裂开，哈德斯从草地上把她带走。',
            why: '寻找女儿的是得墨忒耳——举火九日。宙斯介入在后，在大地已无生育之时，不是草地场景之前的媒人。',
          },
          difficulty_rationale:
            '劫夺的开端。宙斯后来的命令容易被移到开头，使移交显得“合法”。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何珀耳塞福涅未能永远回到地上？',
          options: [
            {
              id: 'A',
              text: '宙斯禁止她回到母亲身边',
            },
            {
              id: 'B',
              text: '得墨忒耳在劫夺后拒绝了她',
            },
            {
              id: 'C',
              text: '她不知情地尝了石榴籽——与死者世界的纽带之果',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 石榴把她系于冥界，尽管宙斯已命她归还。',
            detail:
              '得墨忒耳剥夺大地的生育；人死于饥。哈德斯同意——却在她离开前给了籽。于是一年分作：部分与母同在，部分在阴影之国。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 她尝了石榴籽，永远把自己系于死者世界。',
            why: '宙斯其实已命归还。得墨忒耳寻找女儿，并未驱赶。没有石榴，归返本可完整。',
          },
          difficulty_rationale:
            '双重生活的原因。宙斯之命与饥荒容易被当成结局；哈德斯的陷阱晚一步。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '什么在她的命运中交汇？',
          options: [
            {
              id: 'A',
              text: '明与暗、少女与王后、生与死——永恒的循环',
            },
            {
              id: 'B',
              text: '唯有春天：卡不给她死亡的份额',
            },
            {
              id: 'C',
              text: '唯有冥界：不再回到母亲身边',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 循环存在的双重性，不是单面。',
            detail:
              '与母同在——大地开花。入暗——秋与冬。春之王后与冥界之主同时。按卡所述，一切生灵都系于此循环。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 明与暗、少女与王后、生与死。',
            why: '卡既不全给春天，也不全给哈德斯。意义在交替——没有它，既无丰饶也无冬。',
          },
          difficulty_rationale:
            '卡的公式。劫夺诱人只见死亡；石榴只见囚禁；正文坚持循环。',
          needs_review: false,
        },
      ],
    },
  },
};
