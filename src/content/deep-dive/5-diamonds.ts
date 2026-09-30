import type { DeepDiveCard } from './types';

export const fiveDiamonds: DeepDiveCard = {
  card_id: '5-diamonds',
  locales: {
    en: {
      card_title: 'The Wind-Drivers',
      questions: [
        {
          level: 'Story',
          question: 'What do their sounds do, according to belief?',
          options: [
            {
              id: 'A',
              text: 'Disturb the sky and steer the clouds: rain, storms, gathering of thunderheads',
            },
            {
              id: 'B',
              text: 'Call travelers to a secret gathering',
            },
            {
              id: 'C',
              text: 'Lull the wind so the sky may freeze still',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the melodies rule the sky: summon, scatter, thicken.',
            detail:
              'Behind them — a basket of the wind’s voices, each pipe a separate gust. Not a call to people, and not a silencing of the elements into quiet.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — disturb the sky and steer the clouds.',
            why: 'The belief about the music is rain, storms, and thunderheads — not a meeting and not the wind’s sleep.',
          },
          difficulty_rationale:
            'Function of wandering musicians. “Drivers” easily collapses into people or into taming the wind.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'When do they appear?',
          options: [
            {
              id: 'A',
              text: 'Only in drought, to plead for rain',
            },
            {
              id: 'B',
              text: 'At the turn of seasons, when the sky is restless — and with them comes a sense of change',
            },
            {
              id: 'C',
              text: 'After a storm, to restore silence',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — at the break of season, when weather turns.',
            detail:
              'The music goes beyond the audible, into the fabric of air. Change may be quiet or violent — like the breath of a storm.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — at the turn of seasons, together with a sense of approaching change.',
            why: 'They are not a drought-on-call service and not cleaners after a storm. Their path follows the winds, as shepherds follow a flock.',
          },
          difficulty_rationale:
            'Why the figures appear at all. Weather on the card is a seasonal threshold, not a commissioned rite.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What, by belief, is held in the basket?',
          options: [
            {
              id: 'A',
              text: 'Only pipes — the wind’s voices as instruments',
            },
            {
              id: 'B',
              text: 'Gifts for the sky: water and grain',
            },
            {
              id: 'C',
              text: 'Not only instruments, but entities of wind and cloud; the music alters reality around them too',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the basket also holds invisible entities of the element.',
            detail:
              'Unseen, yet their presence is heard in every sound. A long look catches how rhythm bends not only the sky.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — instruments and entities of wind; the music alters reality itself.',
            why: '“Only pipes” is half the image. The card does not place gifts of water and grain in the basket.',
          },
          difficulty_rationale:
            'The basket is visible; its contents are easy to cut down to instruments. The text adds entities and a shift of reality.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Погонщики ветра',
      questions: [
        {
          level: 'Story',
          question: 'Что делают их звуки, по поверьям?',
          options: [
            {
              id: 'A',
              text: 'Тревожат небо и направляют облака: дождь, грозы, сгущение туч',
            },
            {
              id: 'B',
              text: 'Созывают путников к тайному сбору',
            },
            {
              id: 'C',
              text: 'Усыпляют ветер, чтобы небо замерло',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — мелодии правят небом: призывать, разгонять, сгущать.',
            detail:
              'За спиной — корзина голосов ветра, каждая труба как отдельный порыв. Это не клич к людям и не усмирение стихии в тишину.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — тревожить небо и направлять облака.',
            why: 'Поверье о музыке — про дождь, грозы и тучи, не про сходку и не про сон ветра.',
          },
          difficulty_rationale:
            'Функция странствующих музыкантов. «Погонщики» легко свернуть к людям или к укрощению ветра.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Когда они появляются?',
          options: [
            {
              id: 'A',
              text: 'Только в засуху, чтобы вымолить дождь',
            },
            {
              id: 'B',
              text: 'На границе времён года, когда небо беспокойно — и с ними приходит ощущение перемены',
            },
            {
              id: 'C',
              text: 'После грозы, чтобы вернуть тишину',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — на сломе сезона, когда погода переменчива.',
            detail:
              'Музыка уходит за пределы слышимого, в ткань воздуха. Перемена может быть тихой или бурной — как дыхание грозы.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — на границе времён года, вместе с ощущением надвигающейся перемены.',
            why: 'Они не служба по вызову в засуху и не уборщики после бури. Их путь — за ветрами, как пастухов за стадом.',
          },
          difficulty_rationale:
            'Зачем фигуры вообще выходят. Погода в карте — порог сезона, не заказной ритуал.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что, по поверью, заключено в корзине?',
          options: [
            {
              id: 'A',
              text: 'Только трубы — голоса ветра как инструменты',
            },
            {
              id: 'B',
              text: 'Дары небу: вода и зерно',
            },
            {
              id: 'C',
              text: 'Не только инструменты, но сущности ветра и облаков; музыка меняет и реальность вокруг',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — в корзине ещё и невидимые сущности стихии.',
            detail:
              'Их не увидеть, но присутствие слышно в каждом звуке. Долгий взгляд ловит, как ритм подчиняет не только небо.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — инструменты и сущности ветра; музыка меняет и саму реальность.',
            why: '«Только трубы» — половина образа. Дар воды и зерна карта не кладёт в корзину.',
          },
          difficulty_rationale:
            'Корзину видно; содержимое легко урезать до инструментов. Текст добавляет сущности и сдвиг реальности.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Паганятыя ветру',
      questions: [
        {
          level: 'Story',
          question: 'Што робяць іх гукі, паводле павер\'яў?',
          options: [
            {
              id: 'A',
              text: 'Трывожаць неба і кіруюць аблокамі: дождж, навальніцы, згушчэнне хмар',
            },
            {
              id: 'B',
              text: 'Склікаюць падарожнікаў да таемнага збору',
            },
            {
              id: 'C',
              text: 'Усыпляюць вецер, каб неба замерла',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — мелодыі правяць небам: прызываць, разганяць, згушчаць.',
            detail:
              'За спіной — кошык галасоў ветру, кожная труба як асобны парыў. Гэта не кліч да людзей і не ўціхамірванне стыхіі ў цішыню.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — трывожыць неба і кіраваць аблокамі.',
            why: 'Павер\'е пра музыку — пра дождж, навальніцы і хмары, не пра сходку і не пра сон ветру.',
          },
          difficulty_rationale:
            'Функцыя вандроўных музыкантаў. «Паганятыя» лёгка згарнуць да людзей ці да ўтаймавання ветру.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Калі яны з\'яўляюцца?',
          options: [
            {
              id: 'A',
              text: 'Толькі ў засуху, каб вымаліць дождж',
            },
            {
              id: 'B',
              text: 'На мяжы пор года, калі неба неспакойнае — і з імі прыходзіць адчуванне перамены',
            },
            {
              id: 'C',
              text: 'Пасля навальніцы, каб вярнуць цішыню',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — на зломе сезона, калі надвор\'е зменлівае.',
            detail:
              'Музыка сыходзіць за межы чутнага, у тканіну паветра. Перамена можа быць ціхай ці бурнай — як дыханне навальніцы.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — на мяжы пор года, разам з адчуваннем надыходзячай перамены.',
            why: 'Яны не служба па выкліку ў засуху і не прыборшчыкі пасля буры. Іх шлях — за вятрамі, як пастухоў за статкам.',
          },
          difficulty_rationale:
            'Навошта фігуры наогул выходзяць. Надвор\'е ў карце — парог сезона, не заказны рытуал.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што, паводле павер\'я, заключана ў кошыку?',
          options: [
            {
              id: 'A',
              text: 'Толькі трубы — галасы ветру як інструменты',
            },
            {
              id: 'B',
              text: 'Дары небу: вада і зерне',
            },
            {
              id: 'C',
              text: 'Не толькі інструменты, але сутнасці ветру і аблокаў; музыка мяняе і рэальнасць вакол',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — у кошыку яшчэ і нябачныя сутнасці стыхіі.',
            detail:
              'Іх не ўбачыць, але прысутнасць чуваць у кожным гуку. Доўгі погляд ловіць, як рытм падпарадкоўвае не толькі неба.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — інструменты і сутнасці ветру; музыка мяняе і саму рэальнасць.',
            why: '«Толькі трубы» — палавіна вобраза. Дар вады і зерня карта не кладзе ў кошык.',
          },
          difficulty_rationale:
            'Кошык відаць; змест лёгка ўрэзаць да інструментаў. Тэкст дадае сутнасці і зрух рэальнасці.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '赶风人',
      questions: [
        {
          level: 'Story',
          question: '按信仰，他们的声音做什么？',
          options: [
            {
              id: 'A',
              text: '扰动天空、驱使云层：雨、风暴、雷云聚积',
            },
            {
              id: 'B',
              text: '召唤旅人去赴秘密集会',
            },
            {
              id: 'C',
              text: '催眠风，好让天空凝住',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 旋律主宰天空：召唤、驱散、凝结。',
            detail:
              '身后是风之声的篮子，每管如一阵单独的风。不是对人的召唤，也不是把元素压入寂静。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 扰动天空并驱使云层。',
            why: '关于这音乐的信仰关乎雨、风暴与雷云——不是集会，也不是风的沉睡。',
          },
          difficulty_rationale:
            '流浪乐师的功能。「赶」易被压成对人，或压成驯风。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '他们何时出现？',
          options: [
            {
              id: 'A',
              text: '只在干旱时，祈求降雨',
            },
            {
              id: 'B',
              text: '在季节交界、天空不安时——并随之带来变化之感',
            },
            {
              id: 'C',
              text: '风暴之后，好恢复寂静',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在季节断裂、天气转向之时。',
            detail:
              '音乐越出可闻，进入空气的织体。变化可静可烈——如风暴之息。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在季节交界，连同临近变化的感觉一起。',
            why: '他们不是干旱时可召唤的服务，也不是风暴后的清扫者。他们的路跟风走，如牧人跟羊群。',
          },
          difficulty_rationale:
            '这些形象为何现身。卡上的天气是季节门槛，不是受雇的仪式。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '按信仰，篮子里装的是什么？',
          options: [
            {
              id: 'A',
              text: '只有管——风之声作为乐器',
            },
            {
              id: 'B',
              text: '献给天空的礼物：水与粮',
            },
            {
              id: 'C',
              text: '不仅是乐器，还有风与云的实体；音乐也改变周围的实在',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 篮子里还有不可见的元素实体。',
            detail:
              '看不见，但每个声音都听得出它们的在场。久久注视，会察觉节奏如何不止降伏天空。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 乐器与风的实体；音乐也改变实在本身。',
            why: '「只有管」只是形象的一半。此卡并不把水和粮放进篮子。',
          },
          difficulty_rationale:
            '篮子可见；内容易被削成乐器。文本加上实体与实在的偏移。',
          needs_review: false,
        },
      ],
    },
  },
};
