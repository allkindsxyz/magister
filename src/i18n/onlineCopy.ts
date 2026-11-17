import type { Lang } from './utils';

export type OnlineCopy = {
  create: string;
  join_hint: string;
  room_code: string;
  copy_link: string;
  copied: string;
  your_name: string;
  waiting: string;
  need_players: string;
  you: string;
  deck: string;
  discard: string;
  draw: string;
  your_turn: string;
  their_turn: string;
  choose_suit: string;
  suit_hearts: string;
  suit_diamonds: string;
  suit_clubs: string;
  suit_spades: string;
  win: string;
  room_full: string;
  room_missing: string;
  error_generic: string;
  lobby_title: string;
  turn_named: string;
  your_turn_short: string;
  play_again: string;
  new_game: string;
  game_over: string;
  win_line: string;
  win_magister: string;
  lose_line: string;
  wins_at_table: string;
  menu_open: string;
  menu_copy: string;
  menu_add_bot: string;
  menu_restart: string;
  remove_bot: string;
  join_table: string;
  join_invite_hint: string;
  enter_name: string;
  magister_crowned: string;
  new_game_hint: string;
  tap_deck_to_start: string;
  seat_empty: string;
  max_seats: number;
  hints_mode_label: string;
  hints_with: string;
  hints_without: string;
};

const ru: OnlineCopy = {
  create: 'Создать стол',
  join_hint: 'Откройте ссылку — до 4 игроков за столом.',
  room_code: 'Код стола',
  copy_link: 'Копировать ссылку на стол',
  copied: 'Скопировано',
  your_name: 'Ваше имя',
  waiting: 'Ждём игроков…',
  need_players: 'Нужно минимум 2 игрока',
  you: 'Вы',
  deck: 'Колода',
  discard: 'Сброс',
  draw: 'Взять карту',
  your_turn: 'Ваш ход',
  their_turn: 'Ход соперника',
  choose_suit: 'Выберите масть',
  suit_hearts: 'Черви',
  suit_diamonds: 'Бубны',
  suit_clubs: 'Трефы',
  suit_spades: 'Пики',
  win: 'Победа!',
  room_full: 'Стол полон',
  room_missing: 'Стол не найден',
  error_generic: 'Не удалось выполнить ход',
  lobby_title: 'Онлайн-стол',
  turn_named: 'Ход',
  your_turn_short: 'Ваш ход',
  play_again: 'Сыграть снова',
  new_game: 'Новый стол',
  game_over: 'Партия окончена',
  win_line: 'Вы выиграли!',
  win_magister: 'Поздравляю, вы Магистр!',
  lose_line: 'Победитель',
  wins_at_table: 'Побед за столом',
  menu_open: 'Меню стола',
  menu_copy: 'Копировать ссылку',
  menu_add_bot: 'Добавить бота',
  menu_restart: 'Рестарт стола — без ботов',
  remove_bot: 'Удалить',
  join_table: 'Войти за стол',
  join_invite_hint: 'Введите имя и нажмите «Войти за стол».',
  enter_name: 'Введите имя, чтобы войти',
  magister_crowned: '{name} — Магистр',
  new_game_hint: 'Создайте стол и пригласите до 3 друзей. Или играйте с ботами.',
  tap_deck_to_start: 'Коснитесь колоды, чтобы начать',
  seat_empty: 'Свободно',
  max_seats: 4,
  hints_mode_label: 'Режим игры',
  hints_with: 'С подсказками',
  hints_without: 'Без подсказок',
};

const en: OnlineCopy = {
  create: 'Create table',
  join_hint: 'Share the link — up to 4 players at the table.',
  room_code: 'Table code',
  copy_link: 'Copy table link',
  copied: 'Copied',
  your_name: 'Your name',
  waiting: 'Waiting for players…',
  need_players: 'At least 2 players required',
  you: 'You',
  deck: 'Deck',
  discard: 'Discard',
  draw: 'Draw a card',
  your_turn: 'Your turn',
  their_turn: "Opponent's turn",
  choose_suit: 'Choose a suit',
  suit_hearts: 'Hearts',
  suit_diamonds: 'Diamonds',
  suit_clubs: 'Clubs',
  suit_spades: 'Spades',
  win: 'You win!',
  room_full: 'Table is full',
  room_missing: 'Table not found',
  error_generic: 'Could not complete move',
  lobby_title: 'Online table',
  turn_named: 'Turn',
  your_turn_short: 'Your turn',
  play_again: 'Play again',
  new_game: 'New table',
  game_over: 'Game over',
  win_line: 'You won!',
  win_magister: 'Congratulations — you are the Magister!',
  lose_line: 'Winner',
  wins_at_table: 'Wins at this table',
  menu_open: 'Table menu',
  menu_copy: 'Copy link',
  menu_add_bot: 'Add bot',
  menu_restart: 'Reset table — remove bots',
  remove_bot: 'Remove',
  join_table: 'Join table',
  join_invite_hint: 'Enter your name and tap Join table.',
  enter_name: 'Enter your name to join',
  magister_crowned: '{name} — Magister',
  new_game_hint: 'Create a table and invite up to 3 friends — or play with bots.',
  tap_deck_to_start: 'Tap the deck to start',
  seat_empty: 'Empty',
  max_seats: 4,
  hints_mode_label: 'Game mode',
  hints_with: 'With hints',
  hints_without: 'No hints',
};

const be: OnlineCopy = {
  ...en,
  create: 'Стварыць стол',
  join_hint: 'Дашліце спасылку — трэба трое.',
  room_code: 'Код стала',
  copy_link: 'Скапіраваць спасылку',
  copied: 'Скапіравана',
  your_name: 'Ваша імя',
  waiting: 'Чакаем гульцоў…',
  need_players: 'Патрэбна 3 гульцы',
  you: 'Вы',
  deck: 'Калода',
  discard: 'Скід',
  draw: 'Узяць карту',
  your_turn: 'Ваш ход',
  their_turn: 'Ход суперніка',
  choose_suit: 'Абярыце масть',
  suit_hearts: 'Чырвы',
  suit_diamonds: 'Бубны',
  suit_clubs: 'Црэфы',
  suit_spades: 'Пікі',
  win: 'Перамога!',
  room_full: 'Стол поўны',
  room_missing: 'Стол не знойдзены',
  error_generic: 'Не атрымалася зрабіць ход',
  lobby_title: 'Онлайн-стол',
  turn_named: 'Ход',
  your_turn_short: 'Ваш ход',
  tap_deck_to_start: 'Дакраніце калоду, каб пачаць',
  seat_empty: 'Вольна',
  max_seats: 4,
};

const zh: OnlineCopy = {
  ...en,
  create: '创建牌桌',
  join_hint: '分享链接，需要三名玩家。',
  room_code: '牌桌代码',
  copy_link: '复制链接',
  copied: '已复制',
  your_name: '你的名字',
  waiting: '等待玩家…',
  need_players: '需要 3 名玩家',
  you: '你',
  deck: '牌堆',
  discard: '弃牌',
  draw: '抽一张',
  your_turn: '你的回合',
  their_turn: '对手回合',
  choose_suit: '选择花色',
  suit_hearts: '红桃',
  suit_diamonds: '方片',
  suit_clubs: '梅花',
  suit_spades: '黑桃',
  win: '胜利！',
  room_full: '牌桌已满',
  room_missing: '未找到牌桌',
  error_generic: '无法完成操作',
  lobby_title: '在线牌桌',
  turn_named: '回合',
  your_turn_short: '你的回合',
  tap_deck_to_start: '触摸牌堆开始',
  seat_empty: '空位',
  max_seats: 4,
};

export const onlineCopy: Record<Lang, OnlineCopy> = { ru, en, be, zh };