import type { DeepDiveCard } from './types';

export const sevenHearts: DeepDiveCard = {
  card_id: '7-hearts',
  locales: {
    en: {
      card_title: 'Gaia and the Cyclopes',
      questions: [
        {
          level: 'Story',
          question: 'What did Uranus do to the Cyclopes — and what did Gaia devise?',
          options: [
            {
              id: 'A',
              text: 'He imprisoned them in the depths; Gaia helped Cronus rise against his father',
            },
            {
              id: 'B',
              text: 'He gave them to Zeus for the underground forges',
            },
            {
              id: 'C',
              text: 'Gaia herself hid them in the sea from Uranus',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer:
              'Yes — Uranus imprisoned the children; through Cronus, Gaia began one of the first conflicts of the gods.',
            detail:
              'The Cyclopes are children of Gaia and Uranus — one-eyed titan-smiths. Uranus feared their strength. The mother’s suffering is the cause of the plot, not hiding in the sea.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — Uranus imprisoned the Cyclopes in the depths, and Gaia helped Cronus overthrow his father.',
            why: 'Service to Zeus belongs to the next age, after their release. Gaia does not hide them herself: their father strips them of freedom.',
          },
          difficulty_rationale:
            'The card’s opening. Zeus’s forges stand brighter and easily slide into the start of the myth.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What did the Cyclopes forge once they served the new gods?',
          options: [
            {
              id: 'A',
              text: 'A throne for Gaia and chains for Uranus',
            },
            {
              id: 'B',
              text: 'Weapons for Zeus alone — they refused the others',
            },
            {
              id: 'C',
              text: 'Thunderbolts for Zeus, a trident for Poseidon, a helm of invisibility for Hades',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — three gifts for three brothers: bolt, trident, helm.',
            detail:
              'Freed already in Zeus’s age, they forged in gratitude. Fire and craft, labour that joins earth and sky — not a throne for the mother.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — thunderbolts for Zeus, a trident for Poseidon, a helm of invisibility for Hades.',
            why: 'The card divides the work among three, not leaves it to Zeus alone. It does not describe forging vengeance on Uranus: Cronus had already overthrown him.',
          },
          difficulty_rationale:
            'Three objects collapse easily into “Zeus’s bolts.” Need the full triad of the underground forge.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What do the Cyclopes prove to be when their strength comes into the light?',
          options: [
            {
              id: 'A',
              text: 'Hidden power that, once freed, changes the fate of gods and humans',
            },
            {
              id: 'B',
              text: 'Uranus’s eternal punishment, which cannot be lifted',
            },
            {
              id: 'C',
              text: 'Zeus’s storm itself, not craft',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — hidden power: to free it is to shift the course of fates.',
            detail:
              'In the picture they are serene at Gaia’s roots, beside animals — likewise children of the earth. The idyll does not cancel the forge. Gaia here is life and justice.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — hidden power that, once freed, changes the fate of gods and humans.',
            why: 'The imprisonment is lifted in Zeus’s age. The bolt is their work, not their essence: the card calls them fire and craft, not storm.',
          },
          difficulty_rationale:
            'The picture is idyllic; the text is about freed force. Easy to take calm at the roots for the whole meaning.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Гея и циклопы',
      questions: [
        {
          level: 'Story',
          question: 'Что сделал Уран с циклопами — и что задумала Гея?',
          options: [
            {
              id: 'A',
              text: 'Заточил их в недрах; Гея помогла Крону восстать против отца',
            },
            {
              id: 'B',
              text: 'Отдал их Зевсу в подземные кузницы',
            },
            {
              id: 'C',
              text: 'Гея сама укрыла их в море от Урана',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — Уран заточил детей, Гея через Крона начала один из первых конфликтов богов.',
            detail:
              'Циклопы — дети Геи и Урана, одноглазые титаны-кузнецы. Уран боялся их силы. Страдание матери — причина заговора, не прятки в море.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Уран заточил циклопов в недрах, а Гея помогла Крону свергнуть отца.',
            why: 'Служба Зевсу — уже следующая эпоха, после освобождения. Гея не прячет их сама: их лишает свободы отец.',
          },
          difficulty_rationale:
            'Завязка карты. Кузницы Зевса стоят ярче и легко съезжают в начало мифа.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Что циклопы выковали, уже служа новым богам?',
          options: [
            {
              id: 'A',
              text: 'Трон Гее и цепи для Урана',
            },
            {
              id: 'B',
              text: 'Оружие только Зевсу — остальным отказали',
            },
            {
              id: 'C',
              text: 'Молнии Зевсу, трезубец Посейдону, шлем-невидимку Аиду',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — три дара трём братьям: молния, трезубец, шлем.',
            detail:
              'Освобождены уже в эпоху Зевса и ковали в благодарность. Огонь и ремесло, труд, который соединяет землю и небо — не трон матери.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — молнии Зевсу, трезубец Посейдону, шлем-невидимку Аиду.',
            why: 'Карта делит работу на троих, не оставляет её одному Зевсу. Месть Урану ковкой она не описывает: Урана уже сверг Крон.',
          },
          difficulty_rationale:
            'Три предмета легко схлопнуть в «молнии Зевса». Нужна вся троица подземной кузницы.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чем циклопы оказываются, когда их сила выходит на свет?',
          options: [
            {
              id: 'A',
              text: 'Скрытой мощью, которая, будучи освобождённой, меняет судьбу богов и людей',
            },
            {
              id: 'B',
              text: 'Вечным наказанием Урана, которое нельзя снять',
            },
            {
              id: 'C',
              text: 'Самой бурей Зевса, а не ремеслом',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — скрытая мощь: освободить её значит сдвинуть ход судеб.',
            detail:
              'На картине они безмятежны у корней Геи, рядом с животными — такими же детьми земли. Идиллия не отменяет кузницу. Гея здесь — жизнь и справедливость.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — скрытая мощь, которая после освобождения меняет судьбу богов и людей.',
            why: 'Заточение снято в эпоху Зевса. Молния — их работа, не их сущность: карта зовёт их огнём и ремеслом, не бурей.',
          },
          difficulty_rationale:
            'Картина идиллична, текст — про освобождённую силу. Легко принять покой на корнях за весь смысл.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Гея і цыклопы',
      questions: [
        {
          level: 'Story',
          question: 'Што зрабіў Уран з цыклопамі — і што задумала Гея?',
          options: [
            {
              id: 'A',
              text: 'Заточыў іх у нетры; Гея дапамагла Крону паўстаць супраць бацькі',
            },
            {
              id: 'B',
              text: 'Аддаў іх Зеўсу ў падземныя кузні',
            },
            {
              id: 'C',
              text: 'Гея сама ўкрыла іх у моры ад Урана',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — Уран заточыў дзяцей, Гея праз Крона пачала адзін з першых канфліктаў багоў.',
            detail:
              'Цыклопы — дзеці Геі і Урана, аднавокія тытаны-кавалі. Уран баяўся іх сілы. Пакута маці — прычына змовы, не хаванкі ў моры.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Уран заточыў цыклопаў у нетры, а Гея дапамагла Крону скінуць бацьку.',
            why: 'Служба Зеўсу — ужо наступная эпоха, пасля вызвалення. Гея не хавае іх сама: іх пазбаўляе свабоды бацька.',
          },
          difficulty_rationale:
            'Завязка карты. Кузні Зеўса стаяць ярчэй і лёгка з’язджаюць у пачатак міфа.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Што цыклопы выкавалі, ужо служачы новым багам?',
          options: [
            {
              id: 'A',
              text: 'Трон Геі і ланцугі для Урана',
            },
            {
              id: 'B',
              text: 'Зброю толькі Зеўсу — астатнім адмовілі',
            },
            {
              id: 'C',
              text: 'Маланкі Зеўсу, трызубец Пасейдону, шлем-нявідку Аіду',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — тры дары тром братам: маланка, трызубец, шлем.',
            detail:
              'Вызваленыя ўжо ў эпоху Зеўса і кавалі з удзячнасці. Агонь і рамяство, праца, што злучае зямлю і неба — не трон маці.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — маланкі Зеўсу, трызубец Пасейдону, шлем-нявідку Аіду.',
            why: 'Карта дзеліць працу на траіх, не пакідае яе аднаму Зеўсу. Помсту Урану каваннем яна не апісвае: Урана ўжо скінуў Крон.',
          },
          difficulty_rationale:
            'Тры прадметы лёгка схінуць у «маланкі Зеўса». Патрэбна ўся тройца падземнай кузні.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Чым цыклопы аказваюцца, калі іх сіла выходзіць на свет?',
          options: [
            {
              id: 'A',
              text: 'Схаванай моцай, якая, будучы вызваленай, мяняе лёс багоў і людзей',
            },
            {
              id: 'B',
              text: 'Вечным пакараннем Урана, якое нельга зняць',
            },
            {
              id: 'C',
              text: 'Самой бурай Зеўса, а не рамяством',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — схаваная моц: вызваліць яе значыць зрушыць ход лёсаў.',
            detail:
              'На карціне яны бязмяцежныя ля каранёў Геі, побач з жывёламі — такімі ж дзецьмі зямлі. Ідылія не скасоўвае кузні. Гея тут — жыццё і справядлівасць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — схаваная моц, якая пасля вызвалення мяняе лёс багоў і людзей.',
            why: 'Заточэнне знятае ў эпоху Зеўса. Маланка — іх праца, не іх сутнасць: карта кліча іх агнём і рамяством, не бурай.',
          },
          difficulty_rationale:
            'Карціна ідылічная, тэкст — пра вызваленую сілу. Лёгка прыняць спакой на каранях за ўвесь сэнс.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '盖亚与库克洛普斯',
      questions: [
        {
          level: 'Story',
          question: '乌拉诺斯对库克洛普斯做了什么——盖亚又谋划了什么？',
          options: [
            {
              id: 'A',
              text: '他把他们囚于深处；盖亚助克洛诺斯起而反父',
            },
            {
              id: 'B',
              text: '他把他们交给宙斯去地下作坊',
            },
            {
              id: 'C',
              text: '盖亚亲自把他们藏进海里，躲过乌拉诺斯',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 乌拉诺斯囚禁子女；盖亚借克洛诺斯开启诸神最早的冲突之一。',
            detail:
              '库克洛普斯是盖亚与乌拉诺斯之子——独眼的提坦铁匠。乌拉诺斯惧其力。母亲的苦难是阴谋之因，不是藏进海里。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 乌拉诺斯把库克洛普斯囚于深处，盖亚助克洛诺斯推翻其父。',
            why: '为宙斯效力属下一时代，在获释之后。盖亚并未亲自藏他们：剥夺自由的是父亲。',
          },
          difficulty_rationale:
            '卡的开端。宙斯的作坊更耀眼，容易滑进神话开头。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '库克洛普斯为新神效力时锻造了什么？',
          options: [
            {
              id: 'A',
              text: '盖亚的宝座与乌拉诺斯的锁链',
            },
            {
              id: 'B',
              text: '只给宙斯兵器——其余一概拒绝',
            },
            {
              id: 'C',
              text: '宙斯的雷霆、波塞冬的三叉戟、哈德斯的隐形盔',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 三份礼物给三兄弟：雷霆、三叉戟、盔。',
            detail:
              '他们在宙斯的时代获释，怀着感激锻造。火与技艺，连接天地的劳作——不是母亲的宝座。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 宙斯的雷霆、波塞冬的三叉戟、哈德斯的隐形盔。',
            why: '卡把活计分给三人，不留给宙斯一人。它也不写用锻造报复乌拉诺斯：克洛诺斯已推翻他。',
          },
          difficulty_rationale:
            '三件易塌成“宙斯的雷霆”。需要地下作坊的整组三件。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '当他们的力量见光时，库克洛普斯显明为何物？',
          options: [
            {
              id: 'A',
              text: '被禁锢的力量：一旦释放，便改写神与人的命运',
            },
            {
              id: 'B',
              text: '乌拉诺斯永恒的惩罚，无法解除',
            },
            {
              id: 'C',
              text: '宙斯的风暴本身，而非技艺',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 隐秘之力：释放它便是推移命运的走向。',
            detail:
              '画面上他们安然坐在盖亚根旁，与动物——同为大地之子——为邻。田园并不取消作坊。盖亚在此是生命与公正。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 隐秘之力：一旦释放，便改写神与人的命运。',
            why: '囚禁在宙斯时代解除。雷霆是他们的活计，不是本质：卡称他们为火与技艺，不是风暴。',
          },
          difficulty_rationale:
            '画面田园，正文写被释放的力。容易把根旁的安详当成全部意义。',
          needs_review: false,
        },
      ],
    },
  },
};
