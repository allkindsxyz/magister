import type { DeepDiveCard } from './types';

export const eightDiamonds: DeepDiveCard = {
  card_id: '8-diamonds',
  locales: {
    en: {
      card_title: 'People Traveling on a Giant\'s Hat',
      questions: [
        {
          level: 'Story',
          question: 'For whom does this passage exist?',
          options: [
            {
              id: 'A',
              text: 'For those who were late, did not understand, or could not walk the path in time',
            },
            {
              id: 'B',
              text: 'For victors owed an honorary repeat',
            },
            {
              id: 'C',
              text: 'For the giant who collects payment from the late',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a day outside the main cycle: it is for those who missed it.',
            detail:
              'Everything returns, but without the former weight — like a reflection in which what slipped away becomes visible. Not a reward for victors.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — for those who were late, did not understand, or did not walk the path in time.',
            why: 'The giant neither gathers tribute nor honors the best. The hat is a space of belated fates.',
          },
          difficulty_rationale:
            'Function of the day: not a repeat for the distinguished. “Traveling on a hat” is easy to take for privilege or for duty to the giant.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What does the giant do?',
          options: [
            {
              id: 'A',
              text: 'Judges and directs while the ceremonies run again',
            },
            {
              id: 'B',
              text: 'Neither intervenes nor directs — moves as inevitability',
            },
            {
              id: 'C',
              text: 'Repeats the rites in place of those on the hat',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he only moves; the hat becomes a place of others’ fates.',
            detail:
              'People argue, doubt, listen to one another, trying to recover understanding. The giant does not enter that.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the giant neither intervenes nor directs.',
            why: 'He is neither a substitute priest nor a judge. The rite on the hat is done by the travelers themselves — through attention, not his will.',
          },
          difficulty_rationale:
            'The giant pulls toward being made master of ceremonies. The text leaves him one function: inexorable motion.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Do they undergo the trials again?',
          options: [
            {
              id: 'A',
              text: 'It literally repeats the main cycle',
            },
            {
              id: 'B',
              text: 'No: they live it otherwise — through memory; they carry away understanding, not a result',
            },
            {
              id: 'C',
              text: 'Yes, and with the former weight, until they correct the step',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — a revelation in stillness, not a continuation of the cycle.',
            detail:
              'The body is not required: one must see the wrong step and accept it without resistance. Those who finish do not enter the former circle — they leave the bounds of repetition.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — they do not undergo the trials again; they live them through memory and carry away understanding.',
            why: 'The card says plainly: the day does not repeat the cycle literally and lifts the former weight. Repeat “until victory” is a foreign reading.',
          },
          difficulty_rationale:
            'The short description sounds like a repeat of ceremonies. The expanded text separates repeat from literal re-walking.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Люди, путешествующие на шляпе гиганта',
      questions: [
        {
          level: 'Story',
          question: 'Для кого существует этот переход?',
          options: [
            {
              id: 'A',
              text: 'Для тех, кто не успел, не понял или не смог пройти путь вовремя',
            },
            {
              id: 'B',
              text: 'Для победителей, которым положен почётный повтор',
            },
            {
              id: 'C',
              text: 'Для гиганта, который собирает плату с опоздавших',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — день не из основного цикла: он для пропустивших.',
            detail:
              'Всё возвращается, но без прежней тяжести — как отражение, в котором видно ускользнувшее. Это не награда победителям.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — для тех, кто не успел, не понял или не прошёл путь вовремя.',
            why: 'Гигант не собирает дань и не чествует лучших. Шляпа — пространство опоздавших судеб.',
          },
          difficulty_rationale:
            'Функция дня: не повтор для отличившихся. «Путешествие на шляпе» легко принять за привилегию или за повинность великану.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что делает гигант?',
          options: [
            {
              id: 'A',
              text: 'Судит и направляет, пока церемонии идут заново',
            },
            {
              id: 'B',
              text: 'Не вмешивается и не направляет — движется, как неизбежность',
            },
            {
              id: 'C',
              text: 'Повторяет обряды вместо тех, кто на шляпе',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он лишь движется; шляпа становится местом чужих судеб.',
            detail:
              'Люди спорят, сомневаются, слушают друг друга, пытаясь вернуть понимание. Гигант в это не входит.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — гигант не вмешивается и не направляет.',
            why: 'Он не жрец-заместитель и не судья. Обряд на шляпе делают сами путники — вниманием, не его волей.',
          },
          difficulty_rationale:
            'Великана тянет сделать распорядителем. Текст оставляет ему одну функцию: неотвратимый ход.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Проходят ли они испытания заново?',
          options: [
            {
              id: 'A',
              text: 'Буквально повторяет основной цикл',
            },
            {
              id: 'B',
              text: 'Нет: проживают иначе — через память; уносят понимание, не результат',
            },
            {
              id: 'C',
              text: 'Да, и с прежней тяжестью, пока не исправят шаг',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это раскрытие в остановке, не продолжение цикла.',
            detail:
              'Тела не требуется: нужно увидеть неверный шаг и принять его без сопротивления. Завершившие не входят в прежний круг — выходят за пределы повторения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — испытания не проходят заново; проживают через память и уносят понимание.',
            why: 'Карта прямо говорит: день не повторяет цикл буквально и снимает прежнюю тяжесть. Повтор «до победы» — чужое чтение.',
          },
          difficulty_rationale:
            'Краткое описание звучит как повтор церемоний. Развёрнутый текст отделяет повтор от буквального прохождения.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Людзі, якія падарожнічаюць на капелюшы гіганта',
      questions: [
        {
          level: 'Story',
          question: 'Для каго існуе гэты пераход?',
          options: [
            {
              id: 'A',
              text: 'Для тых, хто не паспеў, не зразумеў ці не змог прайсці шлях у час',
            },
            {
              id: 'B',
              text: 'Для пераможцаў, якім належыць пачэсны паўтор',
            },
            {
              id: 'C',
              text: 'Для гіганта, які збірае плату з спазніўшыхся',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — дзень не з асноўнага цыкла: ён для тых, хто прапусціў.',
            detail:
              'Усё вяртаецца, але без былой цяжкасці — як адлюстраванне, у якім відаць ускользнулае. Гэта не ўзнагарода пераможцам.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — для тых, хто не паспеў, не зразумеў ці не прайшоў шлях у час.',
            why: 'Гігант не збірае даніну і не ўшаноўвае лепшых. Капялюш — прастора спазніўшыхся лёсаў.',
          },
          difficulty_rationale:
            'Функцыя дня: не паўтор для вызначыўшыхся. «Падарожжа на капелюшы» лёгка прыняць за прывілей ці за павіннасць волату.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што робіць гігант?',
          options: [
            {
              id: 'A',
              text: 'Судзіць і кіруе, пакуль цырымоніі ідуць наноў',
            },
            {
              id: 'B',
              text: 'Не ўмешваецца і не кіруе — рухаецца, як непазбежнасць',
            },
            {
              id: 'C',
              text: 'Паўтарае абрады замест тых, хто на капелюшы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён толькі рухаецца; капялюш становіцца месцам чужых лёсаў.',
            detail:
              'Людзі спрачаюцца, сумняваюцца, слухаюць адзін аднаго, спрабуючы вярнуць разуменне. Гігант у гэта не ўваходзіць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — гігант не ўмешваецца і не кіруе.',
            why: 'Ён не жрэц-намеснік і не суддзя. Абрад на капелюшы робяць самі вандроўнікі — увагай, не яго воляй.',
          },
          difficulty_rationale:
            'Волата цягне зрабіць распарадчыкам. Тэкст пакідае яму адну функцыю: непазбежны ход.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Ці праходзяць яны выпрабаванні наноў?',
          options: [
            {
              id: 'A',
              text: 'Літаральна паўтарае асноўны цыкл',
            },
            {
              id: 'B',
              text: 'Не: пражываюць інакш — праз памяць; уносяць разуменне, не вынік',
            },
            {
              id: 'C',
              text: 'Так, і з былой цяжкасцю, пакуль не выправяць крок',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта раскрыццё ў прыпынку, не працяг цыкла.',
            detail:
              'Цела не патрабуецца: трэба ўбачыць няверны крок і прыняць яго без супраціву. Завяршыўшыя не ўваходзяць у былы круг — выходзяць за межы паўтарэння.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — выпрабаванні не праходзяць наноў; пражываюць праз памяць і ўносяць разуменне.',
            why: 'Карта проста кажа: дзень не паўтарае цыкл літаральна і здымае былую цяжкасць. Паўтор «да перамогі» — чужое чытанне.',
          },
          difficulty_rationale:
            'Кароткае апісанне гучыць як паўтор цырымоній. Разгорнуты тэкст аддзяляе паўтор ад літаральнага праходжання.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '在巨人帽子上旅行的人们',
      questions: [
        {
          level: 'Story',
          question: '这次过渡为谁而设？',
          options: [
            {
              id: 'A',
              text: '为来不及、未理解、未能按时走完路的人',
            },
            {
              id: 'B',
              text: '为理应获得光荣重演的胜利者',
            },
            {
              id: 'C',
              text: '为向迟到者收取报酬的巨人',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 这是主循环之外的一日：为错过者而设。',
            detail:
              '一切会回来，却没有从前的重量——像一面映出溜走之物的镜子。不是给胜利者的奖赏。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 为来不及、未理解、未能按时走完路的人。',
            why: '巨人既不收贡，也不表彰杰出者。帽子是迟到命运的空间。',
          },
          difficulty_rationale:
            '此日的功能：不是为出众者重演。「帽上旅行」易被当成特权，或对巨人的义务。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '巨人做什么？',
          options: [
            {
              id: 'A',
              text: '在仪式重演时审判并指挥',
            },
            {
              id: 'B',
              text: '既不介入也不指挥——如必然一般移动',
            },
            {
              id: 'C',
              text: '代替帽上之人重演仪式',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他只是移动；帽子成为他人命运的场所。',
            detail:
              '人们争论、怀疑、彼此倾听，试图找回理解。巨人不介入其中。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 巨人既不介入也不指挥。',
            why: '他既非代理祭司，也非法官。帽上的仪式由旅人自己完成——通过注意，而非他的意志。',
          },
          difficulty_rationale:
            '巨人被拉向司仪之位。文本只留给他一个功能：不可阻挡的移动。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '他们是否重新经历考验？',
          options: [
            {
              id: 'A',
              text: '字面重演主循环',
            },
            {
              id: 'B',
              text: '否：以另一种方式经由记忆经历；带走的是理解，不是结果',
            },
            {
              id: 'C',
              text: '是，并带着从前的重量，直到改正那一步',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 这是停顿中的启示，不是循环的延续。',
            detail:
              '不需要身体：必须看见错步并毫无抗拒地接受。完成者不进入旧圈——他们走出重复的界限。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他们并不重新经历考验；经由记忆经历，并带走理解。',
            why: '此卡说得很清楚：此日并不字面重演循环，并卸去从前的重量。「直到胜利」的重复是外来解读。',
          },
          difficulty_rationale:
            '简短描述听起来像仪式重演。展开文本把重演与字面重走分开。',
          needs_review: false,
        },
      ],
    },
  },
};
