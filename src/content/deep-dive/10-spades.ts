import type { DeepDiveCard } from './types';

export const tenSpades: DeepDiveCard = {
  card_id: '10-spades',
  locales: {
    en: {
      card_title: 'Flight of the Wasp',
      questions: [
        {
          level: 'Story',
          question: 'What does the card call the turning point of his power?',
          options: [
            {
              id: 'A',
              text: 'Proclamation as emperor in 1804',
            },
            {
              id: 'B',
              text: 'The failed campaign in Russia in 1812',
            },
            {
              id: 'C',
              text: 'Birth on Corsica, from which he was at once exiled',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the turn is Russia in 1812.',
            detail:
              '1804 is the ascent: emperor and the Civil Code. Corsica is the beginning, not exile. Exile will be to Saint Helena. Waterloo 1815 is already the final defeat after a brief return.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the turning point was the failed campaign in Russia in 1812.',
            why: 'The emperorship is a gathering of strength, not a break. Corsica is the birthplace. After 1812 power weakens fast; Waterloo finishes one already weakened.',
          },
          difficulty_rationale:
            'Three geographic knots from one text. Waterloo and the crown pull at the role of turning point.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What role does the card give the wasp?',
          options: [
            {
              id: 'A',
              text: 'It is his emblem — he wore the wasp',
            },
            {
              id: 'B',
              text: 'It is the swarm of Europe that drove him out',
            },
            {
              id: 'C',
              text: 'It is an image of a peaceful laborer, as he remained after the Code',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the wasp is on his emblem, not on his enemies.',
            detail:
              'The figure is ambition, genius, drive for power. The insect is not taken from him at the end: he wore it himself.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — Napoleon used the wasp as an emblem.',
            why: 'No swarm bites him from outside, and the wasp is not about the peaceful labor of a codifier. The card closes the biography with the same emblem that names it.',
          },
          difficulty_rationale:
            'Summary and the last sentence of the description. “Flight” pulls toward trajectory; the text gives a crest.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Where does this wasp’s “flight” lead?',
          options: [
            {
              id: 'A',
              text: 'To an eternal ascent without a fall',
            },
            {
              id: 'B',
              text: 'To exile on Saint Helena and death in 1821',
            },
            {
              id: 'C',
              text: 'To a return to Corsica as a final victory',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the flight ends on the island of Saint Helena.',
            detail:
              'The title promises a swift ascent. The card holds another arc: coup, empire, 1812, Waterloo, exile. The wasp is a sign of ambition, not insurance against a fall.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the finale is exile on Saint Helena, where he died in 1821.',
            why: '“Flight” reads as triumph. Corsica in the text is birth, not victory. The wasp emblem does not cancel the fall.',
          },
          difficulty_rationale:
            'A title trap, like the turtle’s speed. Flight of the wasp is not a synonym for invulnerability.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Полёт осы',
      questions: [
        {
          level: 'Story',
          question: 'Что карта называет переломом его могущества?',
          options: [
            {
              id: 'A',
              text: 'Провозглашение императором в 1804 году',
            },
            {
              id: 'B',
              text: 'Неудачную кампанию в России в 1812 году',
            },
            {
              id: 'C',
              text: 'Рождение на Корсике, откуда его сразу сослали',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — перелом это Россия 1812 года.',
            detail:
              '1804-й — взлёт: император и Гражданский кодекс. Корсика — начало, не ссылка. Ссылка будет на Святую Елену. Ватерлоо 1815-го — уже окончательное поражение после краткого возвращения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — переломом стала неудачная кампания в России в 1812 году.',
            why: 'Императорство — набор силы, не слом. Корсика — родина. После 1812-го могущество стремительно слабеет; Ватерлоо добивает уже ослабевшего.',
          },
          difficulty_rationale:
            'Три географических узла из одного текста. Ватерлоо и корона перетягивают роль перелома.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Какую роль карта отдаёт осе?',
          options: [
            {
              id: 'A',
              text: 'Это его эмблема — он носил осу',
            },
            {
              id: 'B',
              text: 'Это рой Европы, который его изгнал',
            },
            {
              id: 'C',
              text: 'Это образ мирного труженика, каким он остался после кодекса',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — оса у него на эмблеме, не на врагах.',
            detail:
              'Фигура — амбиции, гениальность, стремление к власти. Насекомое не отбирают у него в финале: он сам его носил.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — Наполеон использовал осу как эмблему.',
            why: 'Рой не кусает его извне, и оса не про мирный труд кодификатора. Карта замыкает биографию той же эмблемой, с которой названа.',
          },
          difficulty_rationale:
            'Summary и последняя фраза description. «Полёт» тянет к траектории; текст даёт герб.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Куда ведёт «полёт» этой осы?',
          options: [
            {
              id: 'A',
              text: 'К вечному взлёту без падения',
            },
            {
              id: 'B',
              text: 'К ссылке на Святую Елену и смерти в 1821 году',
            },
            {
              id: 'C',
              text: 'К возвращению на Корсику как к финальной победе',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — полёт кончается островом Святой Елены.',
            detail:
              'Название обещает стремительный взлёт. Карта держит другую дугу: переворот, империя, 1812-й, Ватерлоо, ссылка. Оса — знак амбиции, не страховка от падения.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — финал это ссылка на Святую Елену, где он умер в 1821-м.',
            why: '«Полёт» читается как триумф. Корсика в тексте — рождение, не победа. Эмблема осы не отменяет падения.',
          },
          difficulty_rationale:
            'Ловушка названия, как скорость черепахи. Полёт осы — не синоним неуязвимости.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Палёт асы',
      questions: [
        {
          level: 'Story',
          question: 'Што карта называе пераломам яго магутнасці?',
          options: [
            {
              id: 'A',
              text: 'Абвяшчэнне імператарам у 1804 годзе',
            },
            {
              id: 'B',
              text: 'Няўдалую кампанію ў Расіі ў 1812 годзе',
            },
            {
              id: 'C',
              text: 'Нараджэнне на Корсіцы, адкуль яго адразу саслалі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — пералом гэта Расія 1812 года.',
            detail:
              '1804-ы — узлёт: імператар і Грамадзянскі кодэкс. Корсіка — пачатак, не ссылка. Ссылка будзе на Святую Алену. Ватэрлоо 1815-га — ужо канчатковае паражэнне пасля кароткага вяртання.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пераломам стала няўдалая кампанія ў Расіі ў 1812 годзе.',
            why: 'Імператарства — набор сілы, не злом. Корсіка — радзіма. Пасля 1812-га магутнасць імкліва слабее; Ватэрлоо дабівае ўжо аслаблага.',
          },
          difficulty_rationale:
            'Тры геаграфічныя вузлы з аднаго тэксту. Ватэрлоо і карона перацягваюць ролю пералому.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Якую ролю карта аддае асе?',
          options: [
            {
              id: 'A',
              text: 'Гэта яго эмблема — ён насіў асу',
            },
            {
              id: 'B',
              text: 'Гэта рой Еўропы, які яго выгнаў',
            },
            {
              id: 'C',
              text: 'Гэта вобраз мірнага працаўніка, якім ён застаўся пасля кодэкса',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — аса ў яго на эмблеме, не на ворагах.',
            detail:
              'Фігура — амбіцыі, геніяльнасць, імкненне да ўлады. Казурку не адбіраюць у яго ў фінале: ён сам яе насіў.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — Напалеон выкарыстоўваў асу як эмблему.',
            why: 'Рой не кусае яго звонку, і аса не пра мірную працу кадыфікатара. Карта замыкае біяграфію той жа эмблемай, з якой названая.',
          },
          difficulty_rationale:
            'Summary і апошняя фраза description. «Палёт» цягне да траекторыі; тэкст дае герб.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Куды вядзе «палёт» гэтай асы?',
          options: [
            {
              id: 'A',
              text: 'Да вечнага ўзлёту без падзення',
            },
            {
              id: 'B',
              text: 'Да ссылкі на Святую Алену і смерці ў 1821 годзе',
            },
            {
              id: 'C',
              text: 'Да вяртання на Корсіку як да фінальнай перамогі',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — палёт канчаецца востравам Святой Алены.',
            detail:
              'Назва абяцае імклівы ўзлёт. Карта трымае іншую дугу: пераварот, імперыя, 1812-ы, Ватэрлоо, ссылка. Аса — знак амбіцыі, не страхоўка ад падзення.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — фінал гэта ссылка на Святую Алену, дзе ён памёр у 1821-м.',
            why: '«Палёт» чытаецца як трыумф. Корсіка ў тэксце — нараджэнне, не перамога. Эмблема асы не скасоўвае падзення.',
          },
          difficulty_rationale:
            'Пастка назвы, як хуткасць чарапахі. Палёт асы — не сінонім неўразлівасці.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '胡蜂的飞行',
      questions: [
        {
          level: 'Story',
          question: '卡片称他权势的转折点是什么？',
          options: [
            {
              id: 'A',
              text: '一八〇四年称帝',
            },
            {
              id: 'B',
              text: '一八一二年在俄国的失败战役',
            },
            {
              id: 'C',
              text: '生于科西嘉，随即被流放',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 转折是一八一二年的俄国。',
            detail:
              '一八〇四年是升腾：皇帝与民法典。科西嘉是开端，不是流放。流放将是圣赫勒拿。一八一五年滑铁卢已是短暂回归后的最终战败。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 转折点是一八一二年俄国的失败战役。',
            why: '称帝是力量的聚集，不是断裂。科西嘉是出生地。一八一二年后权势迅速削弱；滑铁卢收拾的是已然虚弱者。',
          },
          difficulty_rationale:
            '同一文中三个地理纽结。滑铁卢与王冠争夺转折点的角色。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片给胡蜂什么角色？',
          options: [
            {
              id: 'A',
              text: '那是他的徽记——他佩戴胡蜂',
            },
            {
              id: 'B',
              text: '那是驱赶他的欧洲蜂群',
            },
            {
              id: 'C',
              text: '那是和平劳动者的意象，法典之后他仍是如此',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 胡蜂在他的徽上，不在敌人身上。',
            detail:
              '人物是野心、天才、对权力的驱力。昆虫并未在终局被夺走：他自己佩戴它。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 拿破仑以胡蜂为徽记。',
            why: '没有蜂群从外部咬他，胡蜂也无关法典编纂者的和平劳动。卡片以命名它的同一徽记收束传记。',
          },
          difficulty_rationale:
            '摘要与描述末句。「飞行」拉向轨迹；正文给出纹章。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '这只胡蜂的「飞行」通向哪里？',
          options: [
            {
              id: 'A',
              text: '通向永不坠落的永恒升腾',
            },
            {
              id: 'B',
              text: '通向圣赫勒拿的流放与一八二一年之死',
            },
            {
              id: 'C',
              text: '通向重返科西嘉作为最终胜利',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 飞行止于圣赫勒拿岛。',
            detail:
              '标题许诺迅疾升腾。卡片守住另一弧线：政变、帝国、一八一二、滑铁卢、流放。胡蜂是野心的记号，不是免于坠落的保险。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 终局是圣赫勒拿流放，他于一八二一年死在那里。',
            why: '「飞行」读成胜利。文中科西嘉是出生，不是胜利。胡蜂徽记并不取消坠落。',
          },
          difficulty_rationale:
            '标题陷阱，如乌龟的速度。胡蜂飞行不是无敌的同义词。',
          needs_review: false,
        },
      ],
    },
  },
};
