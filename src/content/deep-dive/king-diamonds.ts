import type { DeepDiveCard } from './types';

export const kingDiamonds: DeepDiveCard = {
  card_id: 'king-diamonds',
  locales: {
    en: {
      card_title: 'Keeper of the Sacred Temple',
      questions: [
        {
          level: 'Story',
          question: 'What is his role before the initiates?',
          options: [
            {
              id: 'A',
              text: 'Keep the threshold and at the appointed moment reveal the sacred as revelation, not as spectacle',
            },
            {
              id: 'B',
              text: 'Interpret the secret in words so it can be retold',
            },
            {
              id: 'C',
              text: 'Judge those who leave the temple and decide whether they are worthy',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — he is guardian of the threshold and the one who reveals the hidden in its hour.',
            detail:
              'Last to enter before the beginning, first to meet those already changed. Only he touches the sacred objects — not for display.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — keep the threshold and reveal the sacred as revelation, not as spectacle.',
            why: 'Interpreting in words for export is precisely what he must not do: the sacred dies in retelling. The card does not make him judge of those who leave — he meets them.',
          },
          difficulty_rationale:
            '“Interpreter of the secret” from the short description is easy to take as speech. Expanded text: manifestation of objects, not retelling.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Why may his name neither be spoken nor written?',
          options: [
            {
              id: 'A',
              text: 'The name is a key to the temple, hidden from enemies',
            },
            {
              id: 'B',
              text: 'In his office the name no longer belongs to a person: forgotten or deliberately concealed',
            },
            {
              id: 'C',
              text: 'A spoken name destroys the sacred objects',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — in the office the name no longer belongs to a person.',
            detail:
              'Known not by lineage and blood, but by the role at the threshold: the name is lifted from the person together with the office. Neither a military secret of the temple nor magic that breaks relics.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — in the office the name no longer belongs to a person.',
            why: 'The ban is not about enemies and not about spoiling holy things. Highest truth, by the card, remains nameless.',
          },
          difficulty_rationale:
            'A ban on the name pulls toward conspiracy or magical spoiling. Text: the office consumes the personal name.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Wherein lies the Keeper’s strength?',
          options: [
            {
              id: 'A',
              text: 'In power over the uninitiated',
            },
            {
              id: 'B',
              text: 'In silence: the truly sacred dies in empty retelling and in curious questions',
            },
            {
              id: 'C',
              text: 'In that he opens the secret to anyone who asks for a miracle',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — strength is not in power, but in silence.',
            detail:
              'He does not open the mysteries to hunters of miracle or of confirmation of hopes. Only to those ready to pass through fear, doubt, and inward death. The throne-ark: the sacred is not given free.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — in silence: the sacred dies in retelling and in curious questions.',
            why: 'The card denies him power. To those who ask for miracle he precisely does not open. Before depth one must know how to fall silent.',
          },
          difficulty_rationale:
            'A great priest is read as power or as a dispenser of miracles. The text sets silence and selection by readiness for inward death.',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Хранитель священного храма',
      questions: [
        {
          level: 'Story',
          question: 'Какова его роль перед посвящаемыми?',
          options: [
            {
              id: 'A',
              text: 'Хранить порог и в назначенный миг явить священное как откровение, не как зрелище',
            },
            {
              id: 'B',
              text: 'Истолковать тайну словами, чтобы её можно было пересказать',
            },
            {
              id: 'C',
              text: 'Судить вышедших из храма и решать, достойны ли они',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — он страж порога и тот, кто являет скрытое в свой час.',
            detail:
              'Последним входит перед началом, первым встречает уже иных. Священных предметов касается только он — не для показа.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — хранить порог и явить священное как откровение, не как зрелище.',
            why: 'Толковать словами на вынос он как раз не должен: священное гибнет в пересказе. Судьёй вышедших карта его не ставит — он их встречает.',
          },
          difficulty_rationale:
            '«Толкователь тайны» из краткого описания легко принять за речь. Развёрнутый текст: явление предметов, не пересказ.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Почему его имя нельзя ни произнести, ни написать?',
          options: [
            {
              id: 'A',
              text: 'Имя — ключ к храму, его скрывают от врагов',
            },
            {
              id: 'B',
              text: 'В его сане имя уже не принадлежит человеку: забыто или намеренно сокрыто',
            },
            {
              id: 'C',
              text: 'Произнесённое имя разрушает священные предметы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — в сане имя уже не принадлежит человеку.',
            detail:
              'Известен не по роду и крови, а по роли у порога: имя снято с человека вместе с саном. Это не военная тайна храма и не магия, ломающая реликвии.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — в сане имя уже не принадлежит человеку.',
            why: 'Запрет не про врагов и не про порчу святынь. Высшая истина, по карте, остаётся безымянной.',
          },
          difficulty_rationale:
            'Запрет имени тянет к заговору или к магической порче. Текст: сан съедает личное имя.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'В чём сила Хранителя?',
          options: [
            {
              id: 'A',
              text: 'Во власти над непосвящёнными',
            },
            {
              id: 'B',
              text: 'В молчании: истинно священное гибнет в пустом пересказе и в любопытных вопросах',
            },
            {
              id: 'C',
              text: 'В том, что он открывает тайну всякому, кто просит чуда',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — сила не во власти, а в молчании.',
            detail:
              'Он не открывает таинства охотникам за чудом или за подтверждением надежд. Только тем, кто готов пройти страх, сомнение и внутреннюю смерть. Трон-ковчег: священное не даётся даром.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — в молчании: священное гибнет в пересказе и в любопытных вопросах.',
            why: 'Власть карта ему отказывает. Просящим чудо он как раз не открывает. Перед глубиной нужно уметь замолчать.',
          },
          difficulty_rationale:
            'Великого жреца читают как власть или как раздатчика чудес. Текст ставит молчание и отбор готовностью к внутренней смерти.',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Захавальнік свяшчэннага храма',
      questions: [
        {
          level: 'Story',
          question: 'Якая яго роля перад пасвячанымі?',
          options: [
            {
              id: 'A',
              text: 'Захоўваць парог і ў прызначаны міг явіць сакральнае як аб\'яўленне, не як відовішча',
            },
            {
              id: 'B',
              text: 'Вытлумачыць таямніцу словамі, каб яе можна было пераказаць',
            },
            {
              id: 'C',
              text: 'Судзіць тых, хто выйшаў з храма, і вырашаць, ці дастойныя яны',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — ён вартаўнік парога і той, хто яўляе схаванае ў свой час.',
            detail:
              'Апошнім уваходзіць перад пачаткам, першым сустракае ўжо іншых. Сакральных прадметаў дакранаецца толькі ён — не для паказу.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — захоўваць парог і явіць сакральнае як аб\'яўленне, не як відовішча.',
            why: 'Тлумачыць словамі на вынас ён якраз не павінен: сакральнае гіне ў пераказе. Суддзёй тых, хто выйшаў, карта яго не ставіць — ён іх сустракае.',
          },
          difficulty_rationale:
            '«Тлумачальнік таямніцы» з кароткага апісання лёгка прыняць за гаворку. Разгорнуты тэкст: яўленне прадметаў, не пераказ.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Чаму яго імя нельга ні вымавіць, ні напісаць?',
          options: [
            {
              id: 'A',
              text: 'Імя — ключ да храма, яго хаваюць ад ворагаў',
            },
            {
              id: 'B',
              text: 'У яго сане імя ўжо не належыць чалавеку: забыта ці наўмысна схавана',
            },
            {
              id: 'C',
              text: 'Вымаўленае імя руйнуе сакральныя прадметы',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — у сане імя ўжо не належыць чалавеку.',
            detail:
              'Вядомы не па родзе і крыві, а па ролі ля парога: імя знята з чалавека разам з санам. Гэта не ваенная таямніца храма і не магія, што ламае рэліквіі.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — у сане імя ўжо не належыць чалавеку.',
            why: 'Забарона не пра ворагаў і не пра парчу святыняў. Вышэйшая ісціна, паводле карты, застаецца безыменнай.',
          },
          difficulty_rationale:
            'Забарона імя цягне да змовы ці да магічнай парчы. Тэкст: сан з\'ядае асабістае імя.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'У чым сіла Захавальніка?',
          options: [
            {
              id: 'A',
              text: 'У ўладзе над непасвячанымі',
            },
            {
              id: 'B',
              text: 'У маўчанні: сапраўдна сакральнае гіне ў пустым пераказе і ў цікаўных пытаннях',
            },
            {
              id: 'C',
              text: 'У тым, што ён адкрывае таямніцу кожнаму, хто просіць цуду',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — сіла не ў уладзе, а ў маўчанні.',
            detail:
              'Ён не адкрывае таемствы паляўнічым за цудам ці за пацвярджэннем надзей. Толькі тым, хто гатовы прайсці страх, сумненне і ўнутраную смерць. Трон-каўчэг: сакральнае не даецца дарма.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — у маўчанні: сакральнае гіне ў пераказе і ў цікаўных пытаннях.',
            why: 'Уладу карта яму адмаўляе. Тым, хто просіць цуду, ён якраз не адкрывае. Перад глыбінёй трэба ўмець замаўчаць.',
          },
          difficulty_rationale:
            'Вялікага жраца чытаюць як уладу ці як раздатчыка цудаў. Тэкст ставіць маўчанне і адбор гатоўнасцю да ўнутранай смерці.',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '神圣神殿守护者',
      questions: [
        {
          level: 'Story',
          question: '他在入会者面前的角色是什么？',
          options: [
            {
              id: 'A',
              text: '守住门槛，并在指定时刻将神圣显为启示，而非景象',
            },
            {
              id: 'B',
              text: '用言语阐释秘密，好让它能被转述',
            },
            {
              id: 'C',
              text: '审判离开神殿的人，并裁定他们是否配得',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 他是门槛的守卫，也是在其时辰显明隐秘者。',
            detail:
              '开始前最后进入，最先迎接已经改变的人。唯有他触及圣物——不为展示。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 守住门槛，并将神圣显为启示，而非景象。',
            why: '供外传的言语阐释正是他不可做的：神圣死于转述。此卡不使他成为离殿者的法官——他迎接他们。',
          },
          difficulty_rationale:
            '短述中的「秘密阐释者」易被当成言语。展开文本：器物的显现，不是转述。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '为何既不可说出、也不可写下他的名？',
          options: [
            {
              id: 'A',
              text: '名是神殿的钥匙，须对敌人隐藏',
            },
            {
              id: 'B',
              text: '在其职分中，名已不属于一个人：被遗忘或故意隐匿',
            },
            {
              id: 'C',
              text: '说出的名会毁坏圣物',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 在职分中，名已不属于一个人。',
            detail:
              '人所知的不是血统，而是门槛上的角色：名随职分从人身上被揭去。既非神殿的军事机密，也非毁坏圣物的魔法。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在职分中，名已不属于一个人。',
            why: '禁令无关敌人，也无关毁坏圣物。按此卡，最高真理保持无名。',
          },
          difficulty_rationale:
            '对名的禁令被拉向密谋或魔法毁坏。文本：职分吞没个人之名。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '守护者的力量在何处？',
          options: [
            {
              id: 'A',
              text: '在对未入会者的权力',
            },
            {
              id: 'B',
              text: '在沉默：真正的神圣死于空洞转述与好奇的提问',
            },
            {
              id: 'C',
              text: '在于他向任何求奇迹者开示秘密',
            },
          ],
          correct_answer: 'B',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 力量不在权力，而在沉默。',
            detail:
              '他不向猎奇迹者或求希望被证实者开示奥秘。只向准备好穿过恐惧、疑虑与内在死亡的人。宝座-方舟：神圣不白白给予。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在沉默：神圣死于转述与好奇的提问。',
            why: '此卡拒绝给他权力。对求奇迹者，他恰恰不开示。面对深度，必须懂得沉默。',
          },
          difficulty_rationale:
            '大祭司被读成权力或奇迹的施予者。文本设置沉默，并以对内在死亡的准备来筛选。',
          needs_review: false,
        },
      ],
    },
  },
};
