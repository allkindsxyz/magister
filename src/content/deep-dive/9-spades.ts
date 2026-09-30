import type { DeepDiveCard } from './types';

export const nineSpades: DeepDiveCard = {
  card_id: '9-spades',
  locales: {
    en: {
      card_title: 'Vincent in the Field',
      questions: [
        {
          level: 'Story',
          question: 'How did the sale of his paintings go in his lifetime?',
          options: [
            {
              id: 'A',
              text: 'He sold only one — of more than eight hundred',
            },
            {
              id: 'B',
              text: 'He grew rich on painting and had no need of his brother',
            },
            {
              id: 'C',
              text: 'He painted no pictures until he won recognition',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — in ten years more than eight hundred works and one sale.',
            detail:
              'There was no recognition. Materially his brother Theo held him up. He sought a calling from preaching to painting — through disappointments and unsettled life.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — in his lifetime he sold only one painting.',
            why: 'There was no wealth: he depended on Theo. He painted precisely in the absence of recognition, almost furiously, even in crisis.',
          },
          difficulty_rationale:
            'The biography’s first blow. Fame after the fact makes “one sale” sound implausible — and therefore truer.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'What does the card make of the crows in the field?',
          options: [
            {
              id: 'A',
              text: 'Messengers of the world beyond',
            },
            {
              id: 'B',
              text: 'Buyers who finally came for a canvas',
            },
            {
              id: 'C',
              text: 'Ordinary field birds without a symbol',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — the crows here are messengers of the other side, not everyday landscape detail.',
            detail:
              'He works on what is taken for the last piece — Wheatfield with Crows. The birds are a gaze from beyond the border, not a random wedge in the sky.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — crows are customarily taken as messengers of the world beyond.',
            why: 'Buyers in his lifetime were almost none. The card does not leave the birds as “just birds”: behind them — another world.',
          },
          difficulty_rationale:
            'The allegory of the ending. A suicide landscape is easy to read as domestic and lose the crow’s office.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'How does the card propose to read the last field?',
          options: [
            {
              id: 'A',
              text: 'As a commissioned view painted already after fame',
            },
            {
              id: 'B',
              text: 'As a refusal of painting and a return to preaching',
            },
            {
              id: 'C',
              text: 'As the master’s last look or a foretaste of the crows’ gaze',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Correct.',
            answer: 'Yes — either a last look, or a foretaste of the messengers.',
            detail:
              'It is supposed he shot himself in a wheat field. The painting may stage that gaze — or meet those who already look from the other side.',
          },
          feedback_incorrect: {
            headline: 'Not quite.',
            answer: 'Answer — the last field as the master’s gaze or as a foretaste of the crows.',
            why: 'There was no fame in his lifetime; he did not return to preaching. The card holds a fork: a staging of the end, or a meeting with the beyond.',
          },
          difficulty_rationale:
            'The text itself gives two readings and none that are mundane. Easy to collapse the ending into “just the landscape where he died.”',
          needs_review: false,
        },
      ],
    },
    ru: {
      card_title: 'Винсент на поле',
      questions: [
        {
          level: 'Story',
          question: 'Как сложилась продажа его картин при жизни?',
          options: [
            {
              id: 'A',
              text: 'Он продал лишь одну — из более чем восьмисот',
            },
            {
              id: 'B',
              text: 'Он разбогател на живописи и не нуждался в брате',
            },
            {
              id: 'C',
              text: 'Он не писал картин, пока не получил признание',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — за десять лет больше восьмисот работ и одна продажа.',
            detail:
              'Признания не было. Материально держал брат Тео. Призвание искал от проповедничества до живописи — через разочарования и неустроенность.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — при жизни он продал лишь одну картину.',
            why: 'Богатства не было: он зависел от Тео. Писал он как раз в отсутствие признания, почти неистово, даже в кризисе.',
          },
          difficulty_rationale:
            'Первый удар биографии. Слава имени задним числом делает «одну продажу» неправдоподобной — и тем вернее.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Кем карта делает воронов на поле?',
          options: [
            {
              id: 'A',
              text: 'Вестниками потустороннего мира',
            },
            {
              id: 'B',
              text: 'Покупателями, которые наконец пришли за холстом',
            },
            {
              id: 'C',
              text: 'Обычными полевыми птицами без символа',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — вороны здесь вестники того света, не бытовая деталь пейзажа.',
            detail:
              'Он работает над тем, что считают последней вещью — «Пшеничное поле с воронами». Птицы — взгляд из-за границы, не случайный клин в небе.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — воронов принято считать вестниками потустороннего мира.',
            why: 'Покупателей при жизни почти не было. Карта не оставляет птиц «просто птицами»: за ними — другой мир.',
          },
          difficulty_rationale:
            'Аллегория финала. Пейзаж самоубийства легко прочесть бытово и потерять должность ворона.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Как карта предлагает читать последнее поле?',
          options: [
            {
              id: 'A',
              text: 'Как заказной вид, написанный уже после славы',
            },
            {
              id: 'B',
              text: 'Как отказ от живописи и возврат к проповеди',
            },
            {
              id: 'C',
              text: 'Как последний взгляд мастера или предчувствие взгляда воронов',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Верно.',
            answer: 'Да — это либо последний взгляд, либо предчувствие вестников.',
            detail:
              'Предполагают, что он выстрелил в себя на пшеничном поле. Картина может быть инсценировкой этого взгляда — или встречей с теми, кто смотрит уже оттуда.',
          },
          feedback_incorrect: {
            headline: 'Не совсем.',
            answer: 'Ответ — последнее поле как взгляд мастера или как предчувствие воронов.',
            why: 'Славы при жизни не было, к проповеди он не вернулся. Карта держит развилку: инсценировка конца или встреча с потусторонним.',
          },
          difficulty_rationale:
            'Текст сам даёт две чтения и ни одного бытового. Легко схлопнуть финал до «просто пейзаж, где он умер».',
          needs_review: false,
        },
      ],
    },
    be: {
      card_title: 'Вінсент у полі',
      questions: [
        {
          level: 'Story',
          question: 'Як склаўся продаж яго карцін пры жыцці?',
          options: [
            {
              id: 'A',
              text: 'Ён прадаў толькі адну — з больш чым васьмісот',
            },
            {
              id: 'B',
              text: 'Ён разбагацеў на жывапісе і не меў патрэбы ў браце',
            },
            {
              id: 'C',
              text: 'Ён не пісаў карцін, пакуль не атрымаў прызнання',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — за дзесяць гадоў больш за васямсот работ і адзін продаж.',
            detail:
              'Прызнання не было. Матэрыяльна трымаў брат Тэа. Прызванне шукаў ад прапаведніцтва да жывапісу — праз расчараванні і неўладкаванасць.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — пры жыцці ён прадаў толькі адну карціну.',
            why: 'Багацця не было: ён залежаў ад Тэа. Пісаў ён якраз у адсутнасць прызнання, амаль нястрымна, нават у крызісе.',
          },
          difficulty_rationale:
            'Першы ўдар біяграфіі. Слава імя заднім чыслам робіць «адзін продаж» неверагодным — і тым вернейшым.',
          needs_review: false,
        },
        {
          level: 'Context',
          question: 'Кім карта робіць крумкачоў у полі?',
          options: [
            {
              id: 'A',
              text: 'Вястунамі тагасветнага свету',
            },
            {
              id: 'B',
              text: 'Пакупнікамі, якія нарэшце прыйшлі за палатном',
            },
            {
              id: 'C',
              text: 'Звычайнымі палявымі птушкамі без сімвала',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — крумкачы тут вястуны таго свету, не бытавая дэталь пейзажа.',
            detail:
              'Ён працуе над тым, што лічаць апошняй рэччу — «Пшанічнае поле з крумкачамі». Птушкі — погляд з-за мяжы, не выпадковы клін у небе.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — крумкачоў прынята лічыць вястунамі тагасветнага свету.',
            why: 'Пакупнікоў пры жыцці амаль не было. Карта не пакідае птушак «проста птушкамі»: за імі — іншы свет.',
          },
          difficulty_rationale:
            'Алегорыя фіналу. Пейзаж самазабойства лёгка прачытаць бытава і страціць пасаду крумкача.',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: 'Як карта прапануе чытаць апошняе поле?',
          options: [
            {
              id: 'A',
              text: 'Як заказны від, напісаны ўжо пасля славы',
            },
            {
              id: 'B',
              text: 'Як адмову ад жывапісу і вяртанне да пропаведзі',
            },
            {
              id: 'C',
              text: 'Як апошні погляд майстра або прадчуванне погляду крумкачоў',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: 'Дакладна.',
            answer: 'Так — гэта альбо апошні погляд, альбо прадчуванне вястуноў.',
            detail:
              'Мяркуюць, што ён страліў у сябе на пшанічным полі. Карціна можа быць інсцэніроўкай гэтага погляду — або сустрэчай з тымі, хто глядзіць ужо адтуль.',
          },
          feedback_incorrect: {
            headline: 'Не зусім.',
            answer: 'Адказ — апошняе поле як погляд майстра або як прадчуванне крумкачоў.',
            why: 'Славы пры жыцці не было, да пропаведзі ён не вярнуўся. Карта трымае развілку: інсцэніроўка канца або сустрэча з тагасветным.',
          },
          difficulty_rationale:
            'Тэкст сам дае два чытанні і ніводнага бытавога. Лёгка згарнуць фінал да «проста пейзаж, дзе ён памёр».',
          needs_review: false,
        },
      ],
    },
    zh: {
      card_title: '田间的文森特',
      questions: [
        {
          level: 'Story',
          question: '他在世时画作的销售如何？',
          options: [
            {
              id: 'A',
              text: '八百余幅中只卖出一幅',
            },
            {
              id: 'B',
              text: '靠绘画致富，无需兄弟接济',
            },
            {
              id: 'C',
              text: '未获承认前他不画画',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 十年间八百余件作品，只售出一幅。',
            detail:
              '没有承认。物质上靠弟弟提奥支撑。他从传教到绘画寻找召唤——途经失望与不安稳的生活。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 在世时他只卖出一幅画。',
            why: '并无财富：他依赖提奥。正是在没有承认时他作画，近乎狂烈，即便在危机中。',
          },
          difficulty_rationale:
            '传记的第一击。事后的名声使「只售一幅」听来难以置信——因而更真。',
          needs_review: false,
        },
        {
          level: 'Context',
          question: '卡片把田间乌鸦做成什么？',
          options: [
            {
              id: 'A',
              text: '来自彼岸的信使',
            },
            {
              id: 'B',
              text: '终于来取画布的买家',
            },
            {
              id: 'C',
              text: '无象征的寻常田鸟',
            },
          ],
          correct_answer: 'A',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 此处乌鸦是彼岸信使，不是日常风景细节。',
            detail:
              '他在画被认为是最后之作的《有乌鸦的麦田》。鸟是来自边界之外的目光，不是天上偶然的楔形。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 乌鸦惯被视作彼岸世界的信使。',
            why: '在世买家几乎没有。卡片不让鸟停留在「只是鸟」：其后是另一个世界。',
          },
          difficulty_rationale:
            '结局的寓言。自杀风景易被读成日常而丢掉乌鸦的职分。',
          needs_review: false,
        },
        {
          level: 'Nuances',
          question: '卡片提议如何读这最后的田野？',
          options: [
            {
              id: 'A',
              text: '作为成名后已受托绘制的风景',
            },
            {
              id: 'B',
              text: '作为放弃绘画、重返传教',
            },
            {
              id: 'C',
              text: '作为大师的最后一望，或对乌鸦目光的预感',
            },
          ],
          correct_answer: 'C',
          feedback_correct: {
            headline: '对。',
            answer: '是的 — 要么是最后一望，要么是对信使的预感。',
            detail:
              '据推测他在麦田开枪自尽。此画或是那目光的排演——或是与已从彼岸凝视者的相遇。',
          },
          feedback_incorrect: {
            headline: '不完全是。',
            answer: '答案 — 最后的田野是大师的目光，或是对乌鸦的预感。',
            why: '在世无名声；他未回传教。卡片守住分叉：结局的排演，或与彼岸的相遇。',
          },
          difficulty_rationale:
            '正文自给两种读法，无一日常。易把结局压成「只是他死去的风景」。',
          needs_review: false,
        },
      ],
    },
  },
};
