import type { DeepDiveCard } from './types';

export const jackHearts: DeepDiveCard = {
  card_id: 'jack-hearts',
  locales: {
    en: {
      card_title: 'Apollo and Daphne',
      questions: [
        {
          level: 'Story',
          question: 'With what did Eros strike Apollo and Daphne?',
          options: [
            {
              id: 'A',
              text: 'Apollo with a golden arrow of love, Daphne with a lead one of aversion',
            },
            {
              id: 'B',
              text: 'Both with gold: Daphne fled anyway',
            },
            {
              id: 'C',
              text: 'Daphne with gold, Apollo with lead: he chased from pride',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — gold for him, lead for her: love and aversion to feeling.',
            detail:
              'Apollo had mocked the power of Eros’s arrows. The answer is two arrows, not one. Pride opened the quarrel, but the flight is held by lead, not by “character.”',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — a golden arrow for Apollo, a lead one for Daphne.',
            why: 'Swap the arrows and the chase loses the card’s sense. Both golden also fails: she needs aversion, or it would have been a mutual gift.',
          },
          difficulty_rationale:
            'The plot’s mechanics. Arrows are easy to swap or collapse into Apollo’s passion alone.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why was Apollo’s love no gift for Daphne?',
          options: [
            {
              id: 'A',
              text: 'It was a threat to strip her of freedom',
            },
            {
              id: 'B',
              text: 'Peneus had already promised her to Apollo',
            },
            {
              id: 'C',
              text: 'She loved Eros and fled from jealousy',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — pleas and promises only hastened the run: love as threat.',
            detail:
              'When strength failed, she begged her father Peneus to save her from pursuit. In that instant her feet took root, skin became bark, arms — branches.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — his love was a threat to take away freedom.',
            why: 'Peneus is not a matchmaker but a saviour at her request. Eros aimed at both from afar; he was not Daphne’s rival in love.',
          },
          difficulty_rationale:
            'The cause of flight and transformation. Easy to take the chase for a “god’s gift” she somehow failed to understand.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'What remains at the root of the laurel wreath?',
          options: [
            {
              id: 'A',
              text: 'Apollo’s victory over Eros',
            },
            {
              id: 'B',
              text: 'Daphne’s consent after the transformation',
            },
            {
              id: 'C',
              text: 'The story of a union that could not be — love that could not be mutual',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the wreath’s glory rests on loss and transformation.',
            detail:
              'He embraced bark instead of flesh and made the laurel sacred. A symbol of victory — outward. Within — a union that never was.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer:
              'Answer — a union that failed: love without reciprocity, an eternal sign of loss.',
            why: 'Apollo did not defeat Eros: the arrow worked. Daphne gives no consent — only escape at the cost of her form. The wreath remembers this even as a sign of glory.',
          },
          difficulty_rationale:
            'The card’s conclusion. Laurel as glory is better known than the price: reciprocity failed; a sign of loss remained.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Аполлон и Дафна',
      questions: [
        {
          level: 'Story',
          question: 'Чем Эрот поразил Аполлона и Дафну?',
          options: [
            {
              id: 'A',
              text: 'Аполлона — золотой стрелой любви, Дафну — свинцовой, отвращением',
            },
            {
              id: 'B',
              text: 'Обоих золотой: Дафна бежала всё равно',
            },
            {
              id: 'C',
              text: 'Дафну золотой, Аполлона свинцовой: он гнался из гордыни',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — золото ему, свинец ей: любовь и отвращение к чувству.',
            detail:
              'Аполлон насмехался над силой стрел Эрота. Ответ — две стрелы, не одна. Гордыня завязала спор, но бегство держит свинец, не «характер».',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — золотая стрела Аполлону, свинцовая Дафне.',
            why: 'Если переставить стрелы, погоня теряет смысл карты. Обе золотые тоже не работают: ей нужно отвращение, иначе это был бы взаимный дар.',
          },
          difficulty_rationale:
            'Механика сюжета. Стрелы легко перепутать местами или свести к одной страсти Аполлона.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему для Дафны любовь Аполлона была не даром?',
          options: [
            {
              id: 'A',
              text: 'Это была угроза лишить её свободы',
            },
            {
              id: 'B',
              text: 'Пеней уже обещал её Аполлону',
            },
            {
              id: 'C',
              text: 'Она любила Эрота и бежала от ревности',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — мольбы и обещания только ускоряли бег: любовь как угроза.',
            detail:
              'Когда сил не осталось, она просила отца Пенея спасти её от преследования. В тот миг ноги укоренились, кожа стала корой, руки — ветвями.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — его любовь была угрозой отнять свободу.',
            why: 'Пеней не сват, а спаситель по её просьбе. Эрот метил в обоих издалека, не был соперником в любви Дафны.',
          },
          difficulty_rationale:
            'Причина бегства и превращения. Легко счесть погоню «даром бога», который она почему-то не поняла.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Что остаётся в основе лаврового венка?',
          options: [
            {
              id: 'A',
              text: 'Победа Аполлона над Эротом',
            },
            {
              id: 'B',
              text: 'Согласие Дафны после превращения',
            },
            {
              id: 'C',
              text: 'История несостоявшегося союза — любви, которая не смогла быть взаимной',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — слава венка держится на утрате и преображении.',
            detail:
              'Он обнял уже кору вместо плоти и сделал лавр священным деревом. Символ победы — снаружи. Внутри — союз, которого не было.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — несостоявшийся союз: любовь без взаимности, вечный знак утраты.',
            why: 'Эрота Аполлон не победил: стрела сработала. Согласия Дафны нет — только ускользание ценой облика. Венок помнит это, даже став знаком славы.',
          },
          difficulty_rationale:
            'Вывод карты. Лавр как слава известнее, чем цена: взаимности не вышло, остался знак потери.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Апалон і Дафна',
      questions: [
        {
          level: 'Story',
          question: 'Чым Эрот паразіў Апалона і Дафну?',
          options: [
            {
              id: 'A',
              text: 'Апалона — залатой стралой любові, Дафну — свінцовай, агідай',
            },
            {
              id: 'B',
              text: 'Абодвух залатой: Дафна ўцякала ўсё роўна',
            },
            {
              id: 'C',
              text: 'Дафну залатой, Апалона свінцовай: ён гнаўся з пыхі',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — золата яму, свінец ёй: любоў і агіда да пачуцця.',
            detail:
              'Апалон кпіў з сілы стрэл Эрота. Адказ — дзве стралы, не адна. Пыха завязала спрэчку, але ўцёкі трымае свінец, не «характэр».',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — залатая страла Апалону, свінцовая Дафне.',
            why: 'Калі пераставіць стралы, пагоня губляе сэнс карты. Абедзве залатыя таксама не працуюць: ёй патрэбна агіда, інакш гэта быў бы ўзаемны дар.',
          },
          difficulty_rationale:
            'Механіка сюжэта. Стралы лёгка пераблытаць месцамі або звесці да адной страсці Апалона.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму для Дафны любоў Апалона была не дарам?',
          options: [
            {
              id: 'A',
              text: 'Гэта была пагроза пазбавіць яе свабоды',
            },
            {
              id: 'B',
              text: 'Пеней ужо абяцаў яе Апалону',
            },
            {
              id: 'C',
              text: 'Яна кахала Эрота і ўцякала ад рэўнасці',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — просьбы і абяцанні толькі паскаралі бег: любоў як пагроза.',
            detail:
              'Калі сіл не засталося, яна прасіла бацьку Пенея выратаваць яе ад пераследу. У той міг ногі ўкараніліся, скура стала карой, рукі — галінамі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — яго любоў была пагрозай адняць свабоду.',
            why: 'Пеней не сват, а ратаўнік па яе просьбе. Эрот цэліў у абодвух здалёк, не быў супернікам у каханні Дафны.',
          },
          difficulty_rationale:
            'Прычына ўцёкаў і ператварэння. Лёгка палічыць пагоню «дарам бога», які яна чамусьці не зразумела.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Што застаецца ў аснове лаўровага вянка?',
          options: [
            {
              id: 'A',
              text: 'Перамога Апалона над Эротам',
            },
            {
              id: 'B',
              text: 'Згода Дафны пасля ператварэння',
            },
            {
              id: 'C',
              text: 'Гісторыя няздзейсненага саюзу — любові, якая не змагла быць узаемнай',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — слава вянка трымаецца на страце і пераўтварэнні.',
            detail:
              'Ён абняў ужо кару замест плоці і зрабіў лаўр свяшчэнным дрэвам. Сімвал перамогі — звонку. Унутры — саюз, якога не было.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — няздзейснены саюз: любоў без узаемнасці, вечны знак страты.',
            why: 'Эрота Апалон не перамог: страла спрацавала. Згоды Дафны няма — толькі ўхіленне цаной аблічча. Венак памятае гэта, нават стаўшы знакам славы.',
          },
          difficulty_rationale:
            'Выснова карты. Лаўр як слава вядомейшы, чым цана: узаемнасці не выйшла, застаўся знак страты.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '阿波罗与达芙涅',
      questions: [
        {
          level: 'Story',
          question: '厄洛斯用什么射中了阿波罗和达芙涅？',
          options: [
            {
              id: 'A',
              text: '阿波罗中金箭起爱，达芙涅中铅箭生厌',
            },
            {
              id: 'B',
              text: '两人皆中金箭：达芙涅仍逃',
            },
            {
              id: 'C',
              text: '达芙涅中金，阿波罗中铅：他因骄傲而追',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 金给他，铅给她：爱与对感情的厌恶。',
            detail:
              '阿波罗曾嘲笑厄洛斯箭力。答案是两支箭，不是一支。骄傲开启争执，但逃亡靠的是铅，不是“性格”。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 金箭给阿波罗，铅箭给达芙涅。',
            why: '对调箭矢，追逐便失去卡的意义。两支皆金也不成立：她需要厌恶，否则便是相互之赠。',
          },
          difficulty_rationale:
            '情节的机制。箭矢容易对调，或塌成阿波罗一人的激情。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何阿波罗的爱对达芙涅不是礼物？',
          options: [
            {
              id: 'A',
              text: '它是剥夺她自由的威胁',
            },
            {
              id: 'B',
              text: '佩纽斯早已把她许给阿波罗',
            },
            {
              id: 'C',
              text: '她爱着厄洛斯，因嫉妒而逃',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 恳求与许诺只加快奔跑：爱即威胁。',
            detail:
              '力气将尽时，她求父亲佩纽斯从追逐中救她。同一瞬间双脚生根，皮肤成树皮，双臂成枝。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 他的爱是夺走自由的威胁。',
            why: '佩纽斯不是媒人，而是应她所求的拯救者。厄洛斯从远处瞄准两人，不是达芙涅爱情中的情敌。',
          },
          difficulty_rationale:
            '逃亡与变形之因。容易把追逐当成她“未能理解”的神恩。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '月桂花环的根底仍是什么？',
          options: [
            {
              id: 'A',
              text: '阿波罗战胜厄洛斯',
            },
            {
              id: 'B',
              text: '达芙涅变形后的同意',
            },
            {
              id: 'C',
              text: '一段未能实现的结合——无法相互的爱',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 花环的荣耀立于失落与变形。',
            detail:
              '他拥抱的已是树皮而非肌肤，并把月桂定为圣树。胜利的象征在外。内里——从未有过的结合。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 未能实现的结合：无相互的爱，失落的永恒标记。',
            why: '阿波罗并未战胜厄洛斯：箭奏效了。达芙涅并无同意——只有以形态为代价的逃脱。花环即便成了荣耀之记，仍记得此事。',
          },
          difficulty_rationale:
            '卡的结论。月桂作为荣耀比代价更广为人知：相互未成，留下失落之记。',
          needs_review: false,
        },
      ],
    },
  },
};
