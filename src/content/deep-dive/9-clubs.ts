import type { DeepDiveCard } from './types';

export const nineClubs: DeepDiveCard = {
  card_id: '9-clubs',
  locales: {
    en: {
      card_title: 'Odin’s Raven Munin near Sidon',
      questions: [
        {
          level: 'Story',
          question: 'What did the Templars do with the fortress of Sidon before leaving?',
          options: [
            {
              id: 'A',
              text: 'Surrendered it by treaty, to preserve the walls',
            },
            {
              id: 'B',
              text: 'Destroyed it, so it would not fall to the enemy',
            },
            {
              id: 'C',
              text: 'Handed an untouched garrison over to Cyprus',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — they destroyed the fortress so the enemy would not take it.',
            detail:
              'After Acre’s fall Thibaud Gaudin withdrew to Sidon with the remnants. Evacuating the garrison saved the men; breaking the walls denied a foothold.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — they destroyed the fortress so it would not fall to the enemy.',
            why: 'There is no treaty of surrender. The Master went to Cyprus after the evacuation — not a whole untouched garrison in an intact fortress.',
          },
          difficulty_rationale:
            'The gesture of departure, not “who circles in the painting.” Surrender is easy to take for evacuation.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why could Sidon no longer be held?',
          options: [
            {
              id: 'A',
              text: 'After Acre’s fall resources dwindled, allies withdrew',
            },
            {
              id: 'B',
              text: 'The Master forbade evacuation and waited for a miracle',
            },
            {
              id: 'C',
              text: 'The raven Munin ordered the city yielded without a fight',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — after Acre the position was hopeless.',
            detail:
              'He took what remained of the Order when the structure was already collapsing. The withdrawal is not the myth’s cowardice, but the end of crusading political power in the region.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — after Acre’s fall resources were exhausting, allies withdrawing.',
            why: 'Evacuation was precisely his decision. Munin is memory over the field, not the commander of a surrender.',
          },
          difficulty_rationale:
            'The sense of a “fruitless defense”: not one Master’s weakness, but the end of an age after Acre.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Why does Munin circle over the field?',
          options: [
            {
              id: 'A',
              text: 'To carry the fallen to Odin and close the story',
            },
            {
              id: 'B',
              text: 'While he circles, nothing vanishes for good',
            },
            {
              id: 'C',
              text: 'To point the way to a new fortress',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — while the raven of memory circles, the end is not final.',
            detail:
              'All that was lived enters the narrative: the end becomes the beginning of a quieter, more lasting story. Huginn is not summoned here — it is Munin that is needed.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — while he circles, nothing vanishes for good: the end becomes the beginning of another story.',
            why: 'He neither closes the tale nor builds a new fortress. Memory holds Sidon after the walls.',
          },
          difficulty_rationale:
            'The last paragraph is easy to cut away from the evacuation. The raven’s name in the gloss is confused with its function on the card.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Ворон Одина Мунин близ Сидона',
      questions: [
        {
          level: 'Story',
          question: 'Что тамплиеры сделали с крепостью Сидон перед уходом?',
          options: [
            {
              id: 'A',
              text: 'Сдали её по договору, чтобы сохранить стены',
            },
            {
              id: 'B',
              text: 'Разрушили, чтобы она не досталась противнику',
            },
            {
              id: 'C',
              text: 'Передали нетронутый гарнизон Кипру',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — крепость разрушили, чтобы враг её не взял.',
            detail:
              'После падения Акры Тибо Годен отступил в Сидон с остатками. Эвакуировать гарнизон — спасти людей; сломать стены — не подарить точку опоры.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — разрушили крепость, чтобы она не досталась противнику.',
            why: 'Договора о сдаче нет. На Кипр ушёл магистр после эвакуации, не целый нетронутый гарнизон в целой крепости.',
          },
          difficulty_rationale:
            'Жест ухода, не «кто парит на картине». Сдачу легко принять за эвакуацию.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему Сидон уже нельзя было удержать?',
          options: [
            {
              id: 'A',
              text: 'После падения Акры ресурсы таяли, союзники отступали',
            },
            {
              id: 'B',
              text: 'Магистр запретил эвакуацию и ждал чуда',
            },
            {
              id: 'C',
              text: 'Ворон Мунин велел сдать город без боя',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — после Акры положение было безнадёжным.',
            detail:
              'Он принял остатки ордена, когда структура уже рушилась. Уход — не трусость мифа, а конец политической силы крестовых походов в регионе.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — после падения Акры ресурсы истощались, союзники отступали.',
            why: 'Эвакуацию он как раз решил. Мунин — память над полем, не командующий сдачей.',
          },
          difficulty_rationale:
            'Смысл «безуспешной защиты»: не слабость одного магистра, а конец эпохи после Акры.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Зачем над полем кружит Мунин?',
          options: [
            {
              id: 'A',
              text: 'Чтобы унести павших к Одину и закрыть историю',
            },
            {
              id: 'B',
              text: 'Пока он кружит, ничто не исчезает окончательно',
            },
            {
              id: 'C',
              text: 'Чтобы указать путь к новой крепости',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — пока кружит ворон памяти, конец не окончателен.',
            detail:
              'Всё пережитое входит в повествование: конец становится началом более тихой и вечной истории. Хугин сюда не вызван — нужен именно Мунин.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — пока он кружит, ничто не исчезает окончательно: конец становится началом иной истории.',
            why: 'Он не закрывает рассказ и не строит новую крепость. Память держит Сидон после стен.',
          },
          difficulty_rationale:
            'Последний абзац легко отрезать от эвакуации. Имя ворона в сводке путают с функцией на карте.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Крумкач Одзіна Мунін каля Сідона',
      questions: [
        {
          level: 'Story',
          question: 'Што тампліеры зрабілі з крэпасцю Сідон перад адыходам?',
          options: [
            {
              id: 'A',
              text: 'Здалі яе па дамове, каб захаваць сцены',
            },
            {
              id: 'B',
              text: 'Разбурылі, каб яна не дасталася праціўніку',
            },
            {
              id: 'C',
              text: 'Перадалі непарушаны гарнізон Кіпру',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — крэпасць разбурылі, каб вораг яе не ўзяў.',
            detail:
              'Пасля падзення Акры Цібо Гадэн адступіў у Сідон з рэшткамі. Эвакуіраваць гарнізон — выратаваць людзей; зламаць сцены — не падарыць кропку апоры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — разбурылі крэпасць, каб яна не дасталася праціўніку.',
            why: 'Дамовы пра здачу няма. На Кіпр пайшоў магістр пасля эвакуацыі, не цэлы непарушаны гарнізон у цэлай крэпасці.',
          },
          difficulty_rationale:
            'Жэст адыходу, не «хто кружыць на карціне». Здачу лёгка прыняць за эвакуацыю.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму Сідон ужо нельга было ўтрымаць?',
          options: [
            {
              id: 'A',
              text: 'Пасля падзення Акры рэсурсы таялі, саюзнікі адступалі',
            },
            {
              id: 'B',
              text: 'Магістр забараніў эвакуацыю і чакаў цуду',
            },
            {
              id: 'C',
              text: 'Крумкач Мунін загадаў здаць горад без бою',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пасля Акры становішча было безнадзейным.',
            detail:
              'Ён прыняў рэшткі ордэна, калі структура ўжо рушылася. Адыход — не баязлівасць міфа, а канец палітычнай сілы крыжовых паходаў у рэгіёне.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пасля падзення Акры рэсурсы вычэрпваліся, саюзнікі адступалі.',
            why: 'Эвакуацыю ён якраз вырашыў. Мунін — памяць над полем, не камандуючы здачай.',
          },
          difficulty_rationale:
            'Сэнс «беспаспяховай абароны»: не слабасць аднаго магістра, а канец эпохі пасля Акры.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Навошта над полем кружыць Мунін?',
          options: [
            {
              id: 'A',
              text: 'Каб унесці паўшых да Одзіна і закрыць гісторыю',
            },
            {
              id: 'B',
              text: 'Пакуль ён кружыць, нішто не знікае канчаткова',
            },
            {
              id: 'C',
              text: 'Каб указаць шлях да новай крэпасці',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пакуль кружыць крумкач памяці, канец не канчатковы.',
            detail:
              'Усё перажытае ўваходзіць у апавяданне: канец становіцца пачаткам больш ціхай і вечнай гісторыі. Хугін сюды не выкліканы — патрэбны менавіта Мунін.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — пакуль ён кружыць, нішто не знікае канчаткова: канец становіцца пачаткам іншай гісторыі.',
            why: 'Ён не закрывае апавяданне і не будуе новую крэпасць. Памяць трымае Сідон пасля сцен.',
          },
          difficulty_rationale:
            'Апошні абзац лёгка адрэзаць ад эвакуацыі. Імя крумкача ў зводцы блытаюць з функцыяй на карце.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '奥丁的乌鸦穆宁在西顿近旁',
      questions: [
        {
          level: 'Story',
          question: '圣殿骑士离开前对西顿要塞做了什么？',
          options: [
            {
              id: 'A',
              text: '按条约投降，以保全城墙',
            },
            {
              id: 'B',
              text: '摧毁它，使敌人无法占据',
            },
            {
              id: 'C',
              text: '把完好的守军移交塞浦路斯',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他们摧毁要塞，使敌人无法夺取。',
            detail:
              '阿卡陷落后，蒂博·戈丹带着残部退往西顿。撤离守军是救人；拆毁城墙是不赠立足点。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他们摧毁要塞，使它不落入敌手。',
            why: '并无投降条约。大团长在撤离后前往塞浦路斯——不是把完好守军留在完好要塞里。',
          },
          difficulty_rationale:
            '离去的姿态，而非「谁在画中盘旋」。投降容易被当成撤离。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何西顿已无法据守？',
          options: [
            {
              id: 'A',
              text: '阿卡陷落后资源枯竭，盟友撤退',
            },
            {
              id: 'B',
              text: '大团长禁止撤离并等待奇迹',
            },
            {
              id: 'C',
              text: '乌鸦穆宁下令不战而献城',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 阿卡之后局势已无望。',
            detail:
              '他接手骑士团残部时，结构已在崩解。撤离不是神话中的胆怯，而是该地区十字军政治力量的终结。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 阿卡陷落后资源耗尽，盟友撤退。',
            why: '撤离恰恰是他的决定。穆宁是原野上的记忆，不是投降的指挥官。',
          },
          difficulty_rationale:
            '「徒劳防御」的意义：不是一位大团长的软弱，而是阿卡之后一个时代的终结。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '穆宁为何在原野上空盘旋？',
          options: [
            {
              id: 'A',
              text: '把阵亡者带往奥丁并合上故事',
            },
            {
              id: 'B',
              text: '只要它盘旋，就没有什么真正消失',
            },
            {
              id: 'C',
              text: '指向一座新要塞的道路',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 记忆之鸦盘旋时，终结并非最终。',
            detail:
              '一切经历进入叙事：终结成为更安静、更持久故事的开端。胡金未被召唤到此——需要的正是穆宁。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 只要它盘旋，就没有什么真正消失：终结成为另一故事的开端。',
            why: '它既不合上故事，也不建造新要塞。记忆在城墙之后仍守住西顿。',
          },
          difficulty_rationale:
            '末段容易从撤离中被切掉。摘要中乌鸦之名容易与卡片上的功能混淆。',
          needs_review: false,
        },
      ],
    },
  },
};
