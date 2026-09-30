import type { DeepDiveCard } from './types';

export const threeClubs: DeepDiveCard = {
  card_id: '3-clubs',
  locales: {
    en: {
      card_title: 'Finding the Black Stone at Mount Untersberg',
      questions: [
        {
          level: 'Story',
          question: 'Where did Isais point Koh’s path?',
          options: [
            {
              id: 'A',
              text: 'To a mountain in the West — to found a house and await a new age',
            },
            {
              id: 'B',
              text: 'To Alamut — to make it the aim of the revelation',
            },
            {
              id: 'C',
              text: 'To the traces of the “Kutayers’” teaching — as the site of the house',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — to the western mountain, to found a house.',
            detail:
              'The night vision bound the revelation to a “thousand-year kingdom.” Koh left Mesopotamia for Europe to obey the command — not to dig deeper into the East.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — to a mountain in the West, to found a house and prepare for a new age.',
            why: 'Alamut and the “Kutayers” belong to the wanderings before the vision. Isais sent him west, not further east.',
          },
          difficulty_rationale:
            'East (Kutayers, Alamut) and West (mountain, house) share one narrative. The vision is easy to confuse with the search that preceded it.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What was the Brotherhood of the Lord of the Black Stone to the Templars?',
          options: [
            {
              id: 'A',
              text: 'The Order’s official successor in the East',
            },
            {
              id: 'B',
              text: 'A secret circle that kept only an outward belonging',
            },
            {
              id: 'C',
              text: 'A fighting wing recognized by the Church',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the Order’s outer shell, their own substance.',
            detail:
              'After twelve years of Isais’s appearances they received the stone-symbol, their own rites, and an aim: to prepare a new world age. Of the Templars, only the mask remained.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a secret community that kept only an outward belonging to the Order.',
            why: 'Neither a successor nor a Church-recognized wing. The card is plain: they broke away, forging their own symbols and ends.',
          },
          difficulty_rationale:
            'The sense of the Order myth on the card. Outward “Templar-ness” is easy to take for real succession.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What does tradition do with Koh after the mid-thirteenth century?',
          options: [
            {
              id: 'A',
              text: 'Buries him as Grand Master in Jerusalem',
            },
            {
              id: 'B',
              text: 'Erases the trail: execution — or immortality and hidden work',
            },
            {
              id: 'C',
              text: 'Returns him to the Templar Order in penance',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the trail vanishes: execution, or hidden immortality.',
            detail:
              'The two versions are unreconciled. The brotherhood disappears — and the figure of the “Black Komtur” remains only as historical as the myth requires.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — the trail vanishes: by one account execution, by another — immortality and hidden activity.',
            why: 'Neither Master of the Temple nor a penitent return to the Order. Disappearance is part of the thesis, not a gap.',
          },
          difficulty_rationale:
            'The ending is easy to miss behind the stone and the mountain. The fork execution/immortality is what the text refuses to close.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Обретение черного камня у горы Унтерберг',
      questions: [
        {
          level: 'Story',
          question: 'Куда Исаис указала путь Коху?',
          options: [
            {
              id: 'A',
              text: 'К горе на Западе — основать обитель и ждать новой эпохи',
            },
            {
              id: 'B',
              text: 'В Аламут — сделать его целью откровения',
            },
            {
              id: 'C',
              text: 'К следам учения «кутаеров» — как к месту обители',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — к западной горе, где основать обитель.',
            detail:
              'Ночное видение связало откровение с «тысячелетним царством». Кох ушёл из Месопотамии в Европу, чтобы исполнить приказ, а не чтобы закрепиться на Востоке.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — к горе на Западе, где основать обитель и готовиться к новой эпохе.',
            why: 'Аламут и «кутаеры» — странствия до видения. Исаис отправила его на Запад, не глубже на Восток.',
          },
          difficulty_rationale:
            'Восток (кутаеры, Аламут) и Запад (гора, обитель) стоят в одном рассказе. Видение легко спутать с поиском, который ему предшествовал.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чем братство «Господа Чёрного Камня» было по отношению к тамплиерам?',
          options: [
            {
              id: 'A',
              text: 'Официальным преемником ордена на Востоке',
            },
            {
              id: 'B',
              text: 'Тайным кругом, сохранившим лишь внешнюю принадлежность',
            },
            {
              id: 'C',
              text: 'Боевым крылом, признанным церковью',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — внешняя оболочка ордена, своя суть.',
            detail:
              'После двенадцати лет явления Исаис они получили камень-символ, свои ритуалы и цель: готовить новую мировую эпоху. От тамплиеров осталась маска.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — тайное сообщество, сохранившее лишь внешнюю принадлежность к ордену.',
            why: 'Это не преемник и не церковно признатое крыло. Карта прямо говорит: отделились, выработав собственную символику и цели.',
          },
          difficulty_rationale:
            'Смысл орденского мифа карты. Внешнюю «тамплиерскость» легко принять за реальное преемство.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что предание делает с Кохом после середины XIII века?',
          options: [
            {
              id: 'A',
              text: 'Хоронит его как великого магистра в Иерусалиме',
            },
            {
              id: 'B',
              text: 'Стирает следы: казнь — или бессмертие и скрытая работа',
            },
            {
              id: 'C',
              text: 'Возвращает его в орден тамплиеров с покаянием',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — следы исчезают: казнь либо скрытое бессмертие.',
            detail:
              'Две версии не примирены. Братство пропадает — и фигура «Чёрного Комтура» остаётся ровно настолько исторической, насколько это нужно мифу.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — следы исчезают: по одной версии казнь, по другой — бессмертие и скрытая деятельность.',
            why: 'Ни магистра Храма, ни покаянного возврата в орден карта не даёт. Исчезновение — часть тезиса, не пробел.',
          },
          difficulty_rationale:
            'Концовку легко пропустить за камнем и горой. Развилка казнь/бессмертие — то, что текст отказывается закрыть.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Здабыццё чорнага каменя ля гары Унтэрберг',
      questions: [
        {
          level: 'Story',
          question: 'Куды Ісаіс указала шлях Коху?',
          options: [
            {
              id: 'A',
              text: 'Да гары на Захадзе — заснаваць абіцель і чакаць новай эпохі',
            },
            {
              id: 'B',
              text: 'У Аламут — зрабіць яго мэтай адкрыцця',
            },
            {
              id: 'C',
              text: 'Да слядоў вучэння «кутаераў» — як да месца абіцелі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — да заходняй гары, дзе заснаваць абіцель.',
            detail:
              'Начное бачанне звязала адкрыццё з «тысячагадовым царствам». Кох пайшоў з Месапатаміі ў Еўропу, каб выканаць загад, а не каб замацавацца на Усходзе.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — да гары на Захадзе, дзе заснаваць абіцель і рыхтавацца да новай эпохі.',
            why: 'Аламут і «кутаеры» — вандроўкі да бачання. Ісаіс адправіла яго на Захад, не глыбей на Усход.',
          },
          difficulty_rationale:
            'Усход (кутаеры, Аламут) і Захад (гара, абіцель) стаяць у адным апавяданні. Бачанне лёгка зблытаць з пошукам, які яму папярэднічаў.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чым брацтва «Госпада Чорнага Каменя» было ў дачыненні да тампліераў?',
          options: [
            {
              id: 'A',
              text: 'Афіцыйным пераемнікам ордэна на Усходзе',
            },
            {
              id: 'B',
              text: 'Таемным кругам, які захаваў толькі знешнюю прыналежнасць',
            },
            {
              id: 'C',
              text: 'Баявым крылом, прызнаным царквой',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — знешняя абалонка ордэна, свая сутнасць.',
            detail:
              'Пасля дванаццаці гадоў з’яўлення Ісаіс яны атрымалі камень-сімвал, свае рытуалы і мэту: рыхтаваць новую сусветную эпоху. Ад тампліераў засталася маска.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — таемная супольнасць, якая захавала толькі знешнюю прыналежнасць да ордэна.',
            why: 'Гэта не пераемнік і не царкоўна прызнанае крыло. Карта проста кажа: аддзяліліся, выпрацаваўшы ўласную сімволіку і мэты.',
          },
          difficulty_rationale:
            'Сэнс ордэнскага міфа карты. Знешнюю «тампліерскасць» лёгка прыняць за рэальнае пераемства.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што паданне робіць з Кохам пасля сярэдзіны XIII стагоддзя?',
          options: [
            {
              id: 'A',
              text: 'Хавае яго як вялікага магістра ў Іерусаліме',
            },
            {
              id: 'B',
              text: 'Сцірае сляды: пакаранне смерцю — альбо несмяротнасць і схаваная праца',
            },
            {
              id: 'C',
              text: 'Вяртае яго ў ордэн тампліераў з пакаяннем',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — сляды знікаюць: пакаранне смерцю альбо схаваная несмяротнасць.',
            detail:
              'Дзве версіі не прыміраны. Брацтва знікае — і постаць «Чорнага Комтура» застаецца роўна настолькі гістарычнай, наколькі гэта трэба міфу.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer:
              'Адказ — сляды знікаюць: паводле адной версіі пакаранне смерцю, паводле другой — несмяротнасць і схаваная дзейнасць.',
            why: 'Ні магістра Храма, ні пакаяннага вяртання ў ордэн карта не дае. Знікненне — частка тэзіса, не прабел.',
          },
          difficulty_rationale:
            'Канцоўку лёгка прапусціць за каменем і гарой. Развілка пакаранне/несмяротнасць — тое, што тэкст адмаўляецца закрыць.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '在翁特斯贝格山获得黑石',
      questions: [
        {
          level: 'Story',
          question: '伊萨伊斯把科赫的道路指向何处？',
          options: [
            {
              id: 'A',
              text: '指向西方的山——建立居所并等待新纪元',
            },
            {
              id: 'B',
              text: '指向阿拉穆特——使之成为启示的目标',
            },
            {
              id: 'C',
              text: '指向「库塔耶尔」教义的踪迹——作为居所之地',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 指向西方的山，去建立居所。',
            detail:
              '夜间异象把启示与「千年王国」相连。科赫离开美索不达米亚前往欧洲，是为了服从命令，而非更深扎根东方。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 指向西方的山，去建立居所并准备新纪元。',
            why: '阿拉穆特与「库塔耶尔」属于异象之前的游荡。伊萨伊斯把他派向西方，而非更远的东方。',
          },
          difficulty_rationale:
            '东方（库塔耶尔、阿拉穆特）与西方（山、居所）同在一条叙事里。异象容易与此前的追寻混淆。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '对圣殿骑士而言，「黑石之主」兄弟会是什么？',
          options: [
            {
              id: 'A',
              text: '骑士团在东方的正式继承者',
            },
            {
              id: 'B',
              text: '只保留外在归属的秘密圈子',
            },
            {
              id: 'C',
              text: '教会承认的战斗侧翼',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 骑士团的外壳，自己的内核。',
            detail:
              '伊萨伊斯显现十二年后，他们得到石象征、自己的仪式与目标：准备新的世界纪元。圣殿骑士只剩下面具。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 只保留对外归属骑士团的秘密共同体。',
            why: '既非继承者，亦非教会承认的侧翼。卡片说得很直白：他们分立出去，锻造了自己的象征与目的。',
          },
          difficulty_rationale:
            '卡片上骑士团神话的意义。外在的「圣殿骑士性」容易被当成真正的继承。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '传统如何处置十三世纪中叶之后的科赫？',
          options: [
            {
              id: 'A',
              text: '把他作为大团长葬在耶路撒冷',
            },
            {
              id: 'B',
              text: '抹去踪迹：处决——或永生与隐秘劳作',
            },
            {
              id: 'C',
              text: '让他悔悟后重归圣殿骑士团',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 踪迹消失：处决，或隐秘的永生。',
            detail:
              '两种说法互不调和。兄弟会消失——「黑司令」的形象只保留神话所需的那点历史性。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer:
              '答案 — 踪迹消失：一说处决，一说永生与隐秘活动。',
            why: '既非圣殿大团长，亦非悔悟重归。消失是论点的一部分，不是空白。',
          },
          difficulty_rationale:
            '结局容易淹没在黑石与山之后。处决/永生的分叉，正是文本拒绝合上的地方。',
          needs_review: false,
        },
      ],
    },
  },
};
