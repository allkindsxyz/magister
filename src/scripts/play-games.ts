import type { GamesCopy, SuitName } from '../i18n/gamesCopy';
import type { DeepDiveResolved, DeepDiveLevel, DeepDiveQuestion } from '../content/deep-dive/types';
import { birthCard, daysInMonth } from '../lib/birthCard';
import { shuffle } from '../utils/shuffle';

type Suit = SuitName;

type PlayCard = {
  id: string;
  suit: Suit;
  value: string;
  title: string;
  summary: string;
  description: string;
  image: string;
};

type PlayData = {
  lang: 'en' | 'ru' | 'be' | 'zh';
  copy: GamesCopy;
  worlds: Record<Suit, { name: string; blurb: string }>;
  suitLabels: Record<Suit, string>;
  symbols: Record<Suit, string>;
  cards: PlayCard[];
  lore: DeepDiveResolved[];
};

type Save = {
  birthday: boolean;
  destiny: boolean;
  bestMs: number | null;
  lore: { pack: string; cleared: number };
};

type TrialKind = 'pip' | 'court' | 'card';

type BoardEntry = { name: string; ms: number; errors: number | null };

const SAVE_KEY = 'magister-play-v1';
const FIVE_MS = 5 * 60 * 1000;
const BOARD_GATE = 52;
const COURT = ['A', 'J', 'Q', 'K'];
const PIPS = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
const LORE_LEVELS: DeepDiveLevel[] = ['Story', 'Context', 'Nuances'];
const LORE_PACK = 'full';
const LORE_MAX_MISS = 5;
const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
const SUIT_FACE: Record<Suit, string> = {
  hearts: 'jack-hearts',
  diamonds: 'ace-diamonds',
  clubs: 'queen-clubs',
  spades: 'king-spades',
};
const RANKS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function emptySave(): Save {
  return { birthday: false, destiny: false, bestMs: null, lore: { pack: LORE_PACK, cleared: 0 } };
}

function parseLoreSave(raw: unknown): Save['lore'] {
  if (!raw || typeof raw !== 'object') return { pack: LORE_PACK, cleared: 0 };
  const lore = raw as { pack?: unknown; cleared?: unknown };
  if (lore.pack !== LORE_PACK) return { pack: LORE_PACK, cleared: 0 };
  const cleared =
    typeof lore.cleared === 'number' && Number.isInteger(lore.cleared)
      ? Math.min(LORE_LEVELS.length, Math.max(0, lore.cleared))
      : 0;
  return { pack: LORE_PACK, cleared };
}

function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ''));
}

function formatTime(ms: number): string {
  const safe = Math.max(0, Math.floor(ms));
  const min = Math.floor(safe / 60000);
  const sec = Math.floor((safe % 60000) / 1000);
  const tenth = Math.floor((safe % 1000) / 100);
  return `${min}:${String(sec).padStart(2, '0')}.${tenth}`;
}

function formatResultTime(ms: number): string {
  const safe = Math.max(0, Math.floor(ms));
  const min = Math.floor(safe / 60000);
  const sec = Math.floor((safe % 60000) / 1000);
  return `${min}:${String(sec).padStart(2, '0')}`;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function cleanName(raw: string): string | null {
  const name = raw
    .normalize('NFKC')
    .replace(/[\u0000-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (name.length < 1 || name.length > 24) return null;
  if (/[<>]/.test(name)) return null;
  if (!/[\p{L}\p{N}]/u.test(name)) return null;
  return name;
}

function loadSave(): Save {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return emptySave();
    const data = JSON.parse(raw) as Partial<Save>;
    return {
      birthday: data.birthday === true,
      destiny: data.destiny === true,
      bestMs: typeof data.bestMs === 'number' && Number.isFinite(data.bestMs) && data.bestMs > 0 ? data.bestMs : null,
      lore: parseLoreSave((data as { lore?: unknown }).lore),
    };
  } catch {
    return emptySave();
  }
}

export function mountPlayGames(): void {
  const root = document.getElementById('play');
  const dataEl = document.getElementById('play-data');
  if (!root || !dataEl?.textContent || root.dataset.ready === '1') return;
  root.dataset.ready = '1';

  const data = JSON.parse(dataEl.textContent) as PlayData;
  const { copy, cards, suitLabels, symbols, worlds } = data;
  const byId = new Map(cards.map((card) => [card.id, card]));
  const lorePacks = data.lore ?? [];
  const loreById = new Map(lorePacks.map((pack) => [pack.card_id, pack]));
  const loreDeck = lorePacks.flatMap((pack) => {
    const card = byId.get(pack.card_id);
    return card ? [card] : [];
  });

  const stage = must(root, '#play-stage');
  const scrim = must(root, '.play-scrim');
  const live = must(root, '#play-live');
  const recordBtn = must<HTMLButtonElement>(root, '.play-record-open');
  const backBtn = must<HTMLButtonElement>(root, '.play-stage-bar .play-nav-back');
  const closeBtn = must<HTMLButtonElement>(root, '.play-stage-bar .play-nav-close');
  const backMark = must(backBtn, '.play-nav-mark');
  const backLabel = must(backBtn, '.play-nav-label');
  const recordSheet = must(root, '#play-record');
  const recordsTable = must(root, '#play-records-table');
  const recordsList = must(root, '#play-records-list');
  const recordsEmpty = must(root, '#play-records-empty');
  const recordsBest = must(root, '#play-records-best');
  const fanEl = must(root, '#fw-fan');
  const ignite = must(root, '#fw-ignite');
  const suitKicker = must(root, '#fw-suit-kicker');
  const suitSymbol = must(root, '#fw-suit-symbol');
  const suitRank = must(root, '#fw-suit-rank');
  const meetSymbol = must(root, '#fw-meet-symbol');
  const meetWorld = must(root, '#fw-meet-world');
  const suitWorld = must(root, '#fw-suit-world');
  const suitWorldMark = must(root, '#fw-suit-world-mark');
  const suitBlurb = must(root, '#fw-suit-blurb');
  const suitTitle = must(root, '#fw-suit-title');
  const suitLine = must(root, '#fw-suit-line');
  const suitStory = must<HTMLButtonElement>(root, '#fw-suit-story');
  const suitFull = must(root, '#fw-suit-full');
  const suitImg = must<HTMLImageElement>(root, '#fw-suit-img');
  const suitKnow = must<HTMLButtonElement>(root, '#fw-suit-know');
  const meetCard = must(root, '#fw-meet-card');
  const meetImg = must<HTMLImageElement>(root, '#fw-meet-img');
  const meetAsk = must(root, '#fw-meet-ask');
  const meetOptions = must(root, '#fw-meet-options');
  const meetFeedback = must(root, '#fw-meet-feedback');
  const meetMark = must(root, '#fw-meet-mark');
  const meetAnswerName = must(root, '#fw-meet-answer-name');
  const meetLine = must(root, '#fw-meet-line');
  const meetBrief = must(root, '#fw-meet-brief');
  const meetStory = must<HTMLButtonElement>(root, '#fw-meet-story');
  const meetFull = must(root, '#fw-meet-full');
  const meetNext = must<HTMLButtonElement>(root, '#fw-meet-next');
  const meetGate = must(root, '#fw-meet-gate');
  const countPip = must<HTMLImageElement>(root, '#fw-count-pip');
  const countRank = must(root, '#fw-count-rank');
  const countSymbol = must(root, '#fw-count-symbol');
  const countKicker = must(root, '#fw-count-kicker');
  const countCardTitle = must(root, '#fw-count-card-title');
  const countLine = must(root, '#fw-count-line');
  const countFace = must<HTMLImageElement>(root, '#fw-count-face');
  const countFaceRank = must(root, '#fw-count-face-rank');
  const countFaceSymbol = must(root, '#fw-count-face-symbol');
  const countFaceKicker = must(root, '#fw-count-face-kicker');
  const countFaceTitle = must(root, '#fw-count-face-title');
  const countFaceLine = must(root, '#fw-count-face-line');
  const trialKicker = must(root, '#fw-trial-kicker');
  const trialCard = must(root, '#fw-trial-card');
  const trialImg = must<HTMLImageElement>(root, '#fw-trial-img');
  const trialSuits = must(root, '#fw-trial-suits');
  const trialDial = must(root, '#fw-trial-dial');
  const trialCourt = must(root, '#fw-trial-court');
  const trialFeedback = must(root, '#fw-trial-feedback');
  const trialMark = must(root, '#fw-trial-mark');
  const trialAnswerName = must(root, '#fw-trial-answer-name');
  const trialLine = must(root, '#fw-trial-line');
  const trialBrief = must(root, '#fw-trial-brief');
  const trialStory = must<HTMLButtonElement>(root, '#fw-trial-story');
  const trialFull = must(root, '#fw-trial-full');
  const trialNext = must<HTMLButtonElement>(root, '#fw-trial-next');
  const meetScreen = must(root, '[data-screen="fw-meet"]');
  const loreScreen = must(root, '[data-screen="lore-meet"]');
  const loreCard = must(root, '#lore-card');
  const loreImg = must<HTMLImageElement>(root, '#lore-img');
  const loreKicker = must(root, '#lore-kicker');
  const loreRank = must(root, '#lore-rank');
  const loreSymbol = must(root, '#lore-symbol');
  const loreTitle = must(root, '#lore-title');
  const loreAsk = must(root, '#lore-ask');
  const loreOptions = must(root, '#lore-options');
  const loreFeedback = must(root, '#lore-feedback');
  const loreLine = must(root, '#lore-line');
  const loreFull = must(root, '#lore-full');
  const loreNext = must<HTMLButtonElement>(root, '#lore-next');
  const loreResult = must(root, '#lore-result');
  const loreResultTitle = must(root, '#lore-result-title');
  const loreResultLead = must(root, '#lore-result-lead');
  const loreResultStats = must(root, '#lore-result-stats');
  const loreResultBegin = must<HTMLButtonElement>(root, '#lore-result-begin');
  const loreResultRetry = must<HTMLButtonElement>(root, '#lore-result-retry');
  const loreResultOnward = must<HTMLButtonElement>(root, '#lore-result-onward');
  const loreResultAgain = must<HTMLButtonElement>(root, '#lore-result-again');
  const loreResume = must<HTMLButtonElement>(root, '#lore-resume');
  const trialScreen = must(root, '[data-screen="fw-trial"]');
  const spreadCard = must(root, '#fw-spread-card');
  const spreadCount = must(root, '#fw-spread-count');
  const spreadBest = must(root, '#fw-spread-best');
  const spreadDial = must(root, '#fw-spread-dial');
  const spreadCourt = must(root, '#fw-spread-court');
  const timerEl = must(root, '#play-timer');
  const sortImg = must<HTMLImageElement>(root, '#play-sort-img');
  const sortSuits = must(root, '#play-sort-suits');
  const sortBack = must<HTMLButtonElement>(root, '#play-sort-back');
  const victory = must(root, '#fw-victory');
  const resultEl = must(root, '#fw-result');
  const resultLead = must(root, '#fw-result-lead');
  const resultLine = must(root, '#fw-result-line');
  const placeEl = must(root, '#fw-place');
  const placeNo = must(root, '#fw-place-no');
  const placeOf = must(root, '#fw-place-of');
  const retryBtn = must<HTMLButtonElement>(root, '#fw-result-retry');
  const doneTitle = must(root, '#fw-result-title');
  const saveAsk = must(root, '#fw-save-ask');

  const doneTime = must(root, '#play-done-time');
  const doneNote = must(root, '#play-done-note');
  const claimForm = must<HTMLFormElement>(root, '#play-claim-form');
  const nameInput = must<HTMLInputElement>(root, '#play-name');
  const claimNote = must(root, '#play-claim-note');
  const openBirthBtn = must<HTMLButtonElement>(root, '#play-open-birth');

  const monthEl = must<HTMLSelectElement>(root, '#play-month');
  const dayEl = must<HTMLSelectElement>(root, '#play-day');
  const birthDate = must(root, '#play-birth-date');
  const birthJoker = must(root, '#play-birth-joker');
  const birthCards = must(root, '#play-birth-cards');
  const readingTemplate = must<HTMLTemplateElement>(root, '#play-reading-template');

  const stageName = must(root, '#play-stage-title');
  const zoom = must(root, '#play-zoom');
  const zoomImg = must<HTMLImageElement>(root, '#play-zoom-img');
  const zoomClose = must<HTMLButtonElement>(root, '#play-zoom-close');

  let save = loadSave();
  let screen = '';
  let leaveTimer = 0;
  let enterToken = 0;
  let igniteTimer = 0;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hideLoupe = (): void => {};

  let meetSuit = 0;
  let meetCards: PlayCard[] = [];
  let meetAt = 0;
  let meetSeen = new Set<string>();
  let meetHits = 0;
  let seenAt = 0;
  let missedAt = 0;
  let meetLocked = false;
  const MEET_GATE = 5;
  const TASKS = 5;

  let loreLevel = 0;
  let loreQueue: PlayCard[] = [];
  let loreAt = 0;
  let loreHits = 0;
  let loreMisses = 0;
  let loreHitsTotal = 0;
  let loreMissesTotal = 0;
  let loreLocked = false;
  let loreHitAt = 0;
  let loreMissAt = 0;
  let loreOverlay: 'off' | 'intro' | 'fail' | 'pass' | 'done' = 'off';

  let trial: TrialKind = 'pip';
  let trialCards: PlayCard[] = [];
  let trialAt = 0;
  let trialLocked = false;
  let trialPhase: 'suit' | 'rank' = 'suit';

  let boardBestMs: number | null = null;
  let sortToken = 0;
  let sortTimer = 0;
  let sortStartedAt = 0;
  let sortIndex = 0;
  let sortQueue: PlayCard[] = [];
  let spreadSettled = false;
  let spreadMisses = 0;
  let sessionId: string | null = null;
  let startInflight: Promise<void> | null = null;

  buildRankPads();
  fillMonths();
  fillDays();
  updateLocks();
  void refreshBoard();

  root.addEventListener('click', onClick);
  bindLoupe();

  function bindLoupe(): void {
    const loupe = document.createElement('div');
    loupe.className = 'fw-loupe';
    loupe.hidden = true;
    document.body.append(loupe);
    const lensSize = (): number => (window.matchMedia('(max-width: 859px)').matches ? 222 : 264);
    let hold = 0;
    let active = false;
    let img: HTMLImageElement | null = null;
    let startX = 0;
    let startY = 0;
    let pointer = -1;

    const hide = (): void => {
      window.clearTimeout(hold);
      hold = 0;
      active = false;
      img = null;
      pointer = -1;
      loupe.hidden = true;
    };
    hideLoupe = hide;

    const place = (image: HTMLImageElement, x: number, y: number, lift: number): void => {
      const rect = image.getBoundingClientRect();
      if (rect.width < 8 || rect.height < 8) return;
      const zoom = 2.5;
      const lens = lensSize();
      const localX = Math.min(Math.max(x - rect.left, 0), rect.width);
      const localY = Math.min(Math.max(y - rect.top, 0), rect.height);
      const src = image.currentSrc || image.src;
      const left = Math.min(Math.max(8, x - lens / 2), window.innerWidth - lens - 8);
      const top = Math.min(Math.max(8, y - lens / 2 - lift), window.innerHeight - lens - 8);
      loupe.hidden = false;
      loupe.style.width = `${lens}px`;
      loupe.style.height = `${lens}px`;
      loupe.style.left = `${left}px`;
      loupe.style.top = `${top}px`;
      loupe.style.backgroundImage = `url("${src.replace(/"/g, '%22')}")`;
      loupe.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
      loupe.style.backgroundPosition = `${lens / 2 - localX * zoom}px ${lens / 2 - localY * zoom}px`;
    };

    const cardImage = (target: EventTarget | null): HTMLImageElement | null => {
      if (!(target instanceof Element)) return null;
      const found = target.closest('.fw-portrait-card img');
      return found instanceof HTMLImageElement ? found : null;
    };

    stage.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || stage.hidden || pointer >= 0) return;
      const found = cardImage(event.target);
      if (!found) {
        if (active) hide();
        return;
      }
      active = true;
      place(found, event.clientX, event.clientY, 0);
    });
    stage.addEventListener('pointerleave', (event) => {
      if (event.pointerType === 'mouse') hide();
    });
    stage.addEventListener('touchstart', (event) => {
      if (stage.hidden || event.touches.length !== 1) return;
      const touch = event.touches[0];
      const found = cardImage(event.target);
      if (!touch || !found) return;
      pointer = touch.identifier;
      startX = touch.clientX;
      startY = touch.clientY;
      img = found;
      window.clearTimeout(hold);
      hold = window.setTimeout(() => {
        if (!img) return;
        active = true;
        place(img, startX, startY, lensSize() * 0.65);
      }, 260);
    }, { passive: true });
    stage.addEventListener('touchmove', (event) => {
      const touch = [...event.touches].find((item) => item.identifier === pointer);
      if (!touch) return;
      if (!active) {
        if (Math.hypot(touch.clientX - startX, touch.clientY - startY) > 8) {
          window.clearTimeout(hold);
          hold = 0;
          img = null;
          pointer = -1;
        }
        return;
      }
      event.preventDefault();
      if (img) place(img, touch.clientX, touch.clientY, lensSize() * 0.65);
    }, { passive: false });
    const endTouch = (event: TouchEvent): void => {
      if ([...event.changedTouches].some((item) => item.identifier === pointer)) hide();
    };
    stage.addEventListener('touchend', endTouch);
    stage.addEventListener('touchcancel', endTouch);
    stage.addEventListener('contextmenu', (event) => {
      if (event.target instanceof Element && event.target.closest('.fw-portrait-card')) event.preventDefault();
    });
  }
  root.addEventListener('submit', onSubmit);
  window.addEventListener('keydown', onKey);
  monthEl.addEventListener('change', fillDays);

  function must<T extends Element = HTMLElement>(scope: ParentNode, selector: string): T {
    const node = scope.querySelector<T>(selector);
    if (!node) throw new Error(`Missing ${selector}`);
    return node;
  }

  function persist(): void {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch {
      /* private mode or a full disk — the run still finishes on screen */
    }
  }

  function say(text: string): void {
    live.textContent = text;
  }

  function rankWord(value: string): string {
    return copy.ranks[value] ?? value;
  }

  function formatDate(month: number, day: number): string {
    if (data.lang === 'zh') return `${month}月${day}日`;
    if (data.lang === 'ru' || data.lang === 'be') return `${day} ${copy.dateMonths[month - 1] ?? ''}`;
    return `${copy.dateMonths[month - 1] ?? ''} ${day}`;
  }

  function gameTitle(): string {
    const pressed = root?.querySelector<HTMLElement>('.play-menu [aria-pressed="true"]');
    const game = pressed?.dataset.game;
    if (game === 'birthday') return copy.menu.birth_title;
    if (game === 'lore') {
      if (screen === 'lore-meet') return `${copy.menu.lore_title}: ${copy.lore.levels[loreKind()]}`;
      return copy.menu.lore_title;
    }
    return copy.menu.learn_title;
  }

  function menuButton(game: string): HTMLButtonElement | null {
    return root?.querySelector<HTMLButtonElement>(`.play-menu [data-game="${game}"]`) ?? null;
  }

  function updateLocks(): void {
    const birthLock = root?.querySelector<HTMLElement>('[data-lock-for="birthday"]');
    const note = `${copy.soon.title} ${copy.soon.body}`;
    if (birthLock) {
      birthLock.hidden = false;
      birthLock.textContent = note;
    }
    menuButton('birthday')?.classList.remove('is-locked');
    if (save.bestMs == null) {
      recordsBest.hidden = true;
      recordsBest.textContent = '';
    } else {
      recordsBest.hidden = false;
      recordsBest.textContent = fill(copy.learn.local_best, { time: formatTime(save.bestMs) });
    }
  }

  function recordBest(ms: number): void {
    if (save.bestMs != null && ms >= save.bestMs) {
      updateLocks();
      return;
    }
    save.bestMs = ms;
    persist();
    updateLocks();
  }

  function setPressed(game: string | null): void {
    root?.querySelectorAll<HTMLButtonElement>('.play-menu [data-game]').forEach((button) => {
      button.setAttribute('aria-pressed', button.dataset.game === game ? 'true' : 'false');
    });
  }

  function show(next: string): void {
    const leavingSpread = screen === 'fw-spread' && next !== 'fw-spread';
    if (leavingSpread) abandonSort();
    const sameFamily =
      (screen.startsWith('fw-') && next.startsWith('fw-')) ||
      (screen.startsWith('lore-') && next.startsWith('lore-'));
    if (sameFamily && screen !== next && !reduceMotion) {
      stage.classList.remove('is-turn');
      void stage.offsetWidth;
      stage.classList.add('is-turn');
    }
    screen = next;
    window.clearTimeout(leaveTimer);
    stage.classList.remove('is-leaving');
    stage.hidden = false;
    scrim.hidden = false;
    recordSheet.hidden = true;
    const titleScreen = next === 'fw-threshold' || next === 'lore-threshold';
    const soonScreen = next === 'soon';
    const worldsScreen = next === 'fw-worlds';
    const suitScreen = next === 'fw-suit';
    const meetScreen = next === 'fw-meet';
    const loreMeet = next === 'lore-meet';
    const board = next === 'fw-count' || next === 'fw-count-court' || next === 'fw-trial' || next === 'fw-spread';
    const cover = titleScreen || soonScreen || worldsScreen || suitScreen || meetScreen || loreMeet || board;
    stage.classList.toggle('is-title', titleScreen);
    stage.classList.toggle('is-cover', cover);
    recordBtn.hidden = !next.startsWith('fw-') || (cover && !titleScreen);
    backBtn.hidden = soonScreen;
    closeBtn.hidden = !cover || titleScreen;
    if (worldsScreen) backBtn.dataset.action = 'fw-back';
    else if (suitScreen) backBtn.dataset.action = 'fw-back-worlds';
    else if (meetScreen) backBtn.dataset.action = 'fw-back-suit';
    else if (next === 'lore-meet') backBtn.dataset.action = 'lore-back';
    else if (next === 'fw-count') backBtn.dataset.action = 'fw-back-suit';
    else if (next === 'fw-count-court') backBtn.dataset.action = 'fw-count';
    else if (next === 'fw-trial' && trial === 'court') backBtn.dataset.action = 'fw-count-court';
    else if (next === 'fw-trial' && trial === 'card') backBtn.dataset.action = 'fw-trial-court';
    else if (next === 'fw-trial') backBtn.dataset.action = 'fw-count';
    else if (next === 'fw-spread-intro') backBtn.dataset.action = 'fw-back';
    else if (next === 'fw-spread') {
      backBtn.dataset.action = 'goto';
      backBtn.dataset.goto = 'fw-spread-intro';
    } else backBtn.dataset.action = 'close';
    backMark.textContent = '←';
    backLabel.textContent = titleScreen ? copy.exit : copy.back;
    root?.querySelectorAll<HTMLElement>('[data-screen]').forEach((panel) => {
      panel.hidden = panel.dataset.screen !== next;
    });
    closeZoom();
    hideLoupe();
    resultEl.hidden = true;
    hideLoreOverlay();
    if (next === 'fw-spread-intro') paintSpreadBest();
    if (next === 'lore-threshold') paintLoreResume();
    stageName.textContent = gameTitle();
    document.documentElement.classList.add('play-lock');
    const focusable = root?.querySelector<HTMLElement>(`[data-screen="${next}"] [tabindex="-1"]`);
    focusable?.focus({ preventScroll: true });
  }

  function closeStage(): void {
    if (stage.hidden || stage.classList.contains('is-leaving')) return;
    if (screen === 'fw-spread') abandonSort();
    closeZoom();
    hideLoupe();
    resultEl.hidden = true;
    hideLoreOverlay();
    window.clearTimeout(igniteTimer);
    enterToken += 1;
    const finish = (): void => {
      screen = '';
      stage.classList.remove('is-leaving');
      stage.hidden = true;
      scrim.hidden = true;
      recordSheet.hidden = true;
      document.documentElement.classList.remove('play-lock');
      setPressed(null);
    };
    if (reduceMotion) {
      finish();
      return;
    }
    stage.classList.add('is-leaving');
    leaveTimer = window.setTimeout(finish, 250);
  }

  let zoomReturn: HTMLElement | null = null;

  function openZoom(img: HTMLImageElement, opener: HTMLElement): void {
    const src = img.currentSrc || img.src;
    if (!src) return;
    zoomImg.src = src;
    zoomImg.alt = img.alt || copy.card_alt;
    zoom.hidden = false;
    zoomReturn = opener;
    zoomClose.focus({ preventScroll: true });
  }

  function closeZoom(): void {
    if (zoom.hidden) return;
    zoom.hidden = true;
    zoomImg.removeAttribute('src');
    zoomImg.alt = '';
    const back = zoomReturn;
    zoomReturn = null;
    back?.focus({ preventScroll: true });
  }

  function openGame(game: string): void {
    if (game === 'learn') {
      setPressed('learn');
      show('fw-threshold');
      return;
    }
    if (game === 'lore') {
      setPressed('lore');
      show('lore-threshold');
      return;
    }
    if (game === 'birthday') {
      setPressed(game);
      show('soon');
    }
  }

  function lineOf(card: PlayCard): string {
    const text = card.summary.trim();
    const sentence = text.split(/(?<=[.!?。])\s/)[0] ?? text;
    return sentence.length > 180 ? `${sentence.slice(0, 177).trimEnd()}…` : sentence;
  }

  function isCourt(value: string): boolean {
    return COURT.includes(value);
  }

  function pulse(node: HTMLElement, kind: 'set' | 'true' | 'dim' | 'away'): void {
    node.classList.remove('is-set', 'is-true', 'is-dim', 'is-away');
    if (reduceMotion && kind !== 'away') return;
    void node.offsetWidth;
    node.classList.add(`is-${kind}`);
  }

  function buildRankPads(): void {
    const fill = (host: HTMLElement, values: string[]): void => {
      host.replaceChildren();
      for (const value of values) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.action = 'fw-rank';
        button.dataset.rank = value;
        button.textContent = value;
        button.setAttribute('aria-label', rankWord(value));
        host.append(button);
      }
    };
    fill(trialDial, PIPS);
    fill(spreadDial, PIPS);
    fill(trialCourt, COURT);
    fill(spreadCourt, COURT);
  }

  function sample(pool: PlayCard[], count: number): PlayCard[] {
    return shuffle(pool).slice(0, count);
  }

  function enterWorlds(): void {
    enterToken += 1;
    const token = enterToken;
    if (reduceMotion) {
      show('fw-worlds');
      lightWorlds();
      return;
    }
    fanEl.classList.add('is-apart');
    window.setTimeout(() => {
      if (token !== enterToken || stage.hidden) return;
      fanEl.classList.remove('is-apart');
      show('fw-worlds');
      lightWorlds();
    }, 460);
  }

  function lightWorlds(): void {
    window.clearTimeout(igniteTimer);
    const items = [...ignite.querySelectorAll('li')];
    items.forEach((item) => item.classList.remove('is-lit'));
    const light = (index: number): void => {
      items[index]?.classList.add('is-lit');
      if (index + 1 < items.length) igniteTimer = window.setTimeout(() => light(index + 1), reduceMotion ? 0 : 150);
    };
    light(0);
  }

  function startMeet(): void {
    meetSuit = 0;
    showSuit();
    setPressed('learn');
  }

  function showSuit(): void {
    const suit = SUITS[meetSuit] ?? 'hearts';
    const card = byId.get(SUIT_FACE[suit]);
    if (!card) return;
    suitKicker.dataset.suit = suit;
    suitSymbol.textContent = symbols[suit];
    suitRank.textContent = card.value;
    suitWorld.textContent = worlds[suit].name;
    suitWorldMark.textContent = symbols[suit];
    suitWorldMark.dataset.suit = suit;
    suitBlurb.textContent = worlds[suit].blurb;
    suitTitle.textContent = card.title;
    suitLine.textContent = lineOf(card);
    suitImg.src = card.image;
    suitImg.alt = card.title;
    resetStory(suitFull, suitStory);
    suitStory.hidden = card.description.trim().length === 0;
    suitKnow.textContent = copy.learn.know[suit];
    show('fw-suit');
    setPressed('learn');
  }

  function beginSuitQuiz(): void {
    meetHits = 0;
    meetSeen = new Set();
    drawMeetCard();
    show('fw-meet');
    setPressed('learn');
  }

  function takeMeetCard(): PlayCard | null {
    const suit = SUITS[meetSuit] ?? 'hearts';
    const current = meetCards[meetAt];
    let pool = cards.filter((card) => card.suit === suit && !meetSeen.has(card.id));
    if (!pool.length) pool = cards.filter((card) => card.suit === suit && card.id !== current?.id);
    const card = sample(pool, 1)[0] ?? null;
    if (card) meetSeen.add(card.id);
    return card;
  }

  function drawMeetCard(): void {
    const card = takeMeetCard();
    if (!card) return;
    meetCards = [card];
    meetAt = 0;
    paintMeet();
  }

  function paintMeet(): void {
    const card = meetCards[meetAt];
    const suit = SUITS[meetSuit] ?? 'hearts';
    if (!card) return;
    meetLocked = false;
    meetScreen.classList.remove('is-answered');
    meetSymbol.textContent = symbols[suit];
    meetSymbol.dataset.suit = suit;
    meetWorld.textContent = worlds[suit].name;
    meetImg.src = card.image;
    meetImg.alt = card.title;
    meetAsk.textContent = copy.learn.who;
    meetFeedback.classList.remove('is-hit', 'is-miss');
    meetFeedback.hidden = true;
    meetLine.textContent = '';
    meetAnswerName.textContent = '';
    meetMark.replaceChildren();
    resetStory(meetFull, meetStory);
    meetNext.hidden = true;
    meetGate.hidden = true;
    pulse(meetCard, 'set');
    const decoys = sample(cards.filter((other) => other.suit === suit && other.id !== card.id), 2);
    meetOptions.replaceChildren();
    for (const option of shuffle([card, ...decoys])) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.action = 'fw-who';
      button.dataset.id = option.id;
      button.textContent = option.title;
      meetOptions.append(button);
    }
  }

  function answerMeet(id: string): void {
    if (meetLocked || screen !== 'fw-meet') return;
    const card = meetCards[meetAt];
    if (!card) return;
    meetLocked = true;
    meetScreen.classList.add('is-answered');
    const seen = id === card.id;
    const pool = seen ? copy.learn.seen : copy.learn.missed;
    const at = seen ? seenAt : missedAt;
    if (seen) {
      seenAt += 1;
      meetHits += 1;
    } else missedAt += 1;
    const line = pool[at % pool.length] ?? pool[0] ?? '';
    paintMeetReply(card, fill(line, { title: card.title, rank: rankWord(card.value) }), seen);
    pulse(meetCard, seen ? 'true' : 'dim');
    const gated = seen && meetHits >= MEET_GATE;
    meetNext.hidden = gated;
    meetGate.hidden = !gated;
    meetOptions.querySelectorAll('button').forEach((button) => {
      button.toggleAttribute('disabled', true);
      if (button.dataset.id === id) button.classList.add(seen ? 'is-hit' : 'is-miss');
    });
    say(`${card.value}${symbols[card.suit]} ${card.title}. ${meetLine.textContent}`);
  }

  function resetStory(full: HTMLElement, button: HTMLButtonElement): void {
    full.hidden = true;
    full.replaceChildren();
    button.textContent = copy.learn.read_story;
    button.setAttribute('aria-expanded', 'false');
  }

  function paintReply(
    feedback: HTMLElement,
    mark: HTMLElement,
    name: HTMLElement,
    line: HTMLElement,
    brief: HTMLElement,
    story: HTMLButtonElement,
    full: HTMLElement,
    card: PlayCard,
    text: string,
    seen: boolean,
  ): void {
    feedback.classList.toggle('is-hit', seen);
    feedback.classList.toggle('is-miss', !seen);
    mark.dataset.suit = card.suit;
    mark.replaceChildren();
    const rank = document.createElement('span');
    rank.className = 'lb-suit-rank';
    rank.textContent = card.value;
    const pip = document.createElement('span');
    pip.className = 'lb-suit-symbol';
    pip.setAttribute('aria-hidden', 'true');
    pip.textContent = symbols[card.suit];
    mark.append(rank, pip);
    const title = card.title.trim();
    name.textContent = /[.!?。…]$/.test(title) ? title : `${title}.`;
    line.textContent = text;
    brief.textContent = lineOf(card);
    brief.hidden = brief.textContent.length === 0;
    resetStory(full, story);
    story.hidden = card.description.trim().length === 0;
    feedback.hidden = false;
  }

  function paintMeetReply(card: PlayCard, line: string, seen: boolean): void {
    paintReply(meetFeedback, meetMark, meetAnswerName, meetLine, meetBrief, meetStory, meetFull, card, line, seen);
  }

  function fillStory(full: HTMLElement, card: PlayCard): boolean {
    full.replaceChildren();
    for (const part of card.description.split(/\n+/)) {
      const text = part.trim();
      if (!text) continue;
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      full.append(paragraph);
    }
    return full.childElementCount > 0;
  }

  function toggleStoryPanel(full: HTMLElement, button: HTMLButtonElement, card: PlayCard | undefined, locked: boolean): void {
    if (!card || !locked) return;
    if (!full.hidden) {
      resetStory(full, button);
      return;
    }
    if (!fillStory(full, card)) return;
    full.hidden = false;
    button.textContent = copy.learn.fold_story;
    button.setAttribute('aria-expanded', 'true');
  }

  function toggleSuitStory(): void {
    const suit = SUITS[meetSuit] ?? 'hearts';
    toggleStoryPanel(suitFull, suitStory, byId.get(SUIT_FACE[suit]), true);
  }

  function toggleStory(): void {
    toggleStoryPanel(meetFull, meetStory, meetCards[meetAt], meetLocked);
  }

  function toggleTrialStory(): void {
    toggleStoryPanel(trialFull, trialStory, trialCards[trialAt], trialLocked);
  }

  function nextMeet(): void {
    if (!meetLocked || meetHits >= MEET_GATE) return;
    drawMeetCard();
  }

  function studyMore(): void {
    if (!meetLocked || meetHits < MEET_GATE) return;
    meetHits = 0;
    drawMeetCard();
  }

  function onwardMeet(): void {
    if (!meetLocked || meetHits < MEET_GATE) return;
    if (meetSuit + 1 < SUITS.length) {
      meetSuit += 1;
      showSuit();
      return;
    }
    showCount();
  }

  function loreKind(): DeepDiveLevel {
    return LORE_LEVELS[loreLevel] ?? 'Story';
  }

  function loreQuestion(card: PlayCard): DeepDiveQuestion | null {
    const pack = loreById.get(card.id);
    const kind = loreKind();
    return pack?.questions.find((item) => item.level === kind) ?? null;
  }

  function loreCleared(): number {
    return save.lore.pack === LORE_PACK ? save.lore.cleared : 0;
  }

  function markLoreCleared(): void {
    if (save.lore.pack !== LORE_PACK) save.lore = { pack: LORE_PACK, cleared: 0 };
    const next = loreLevel + 1;
    if (next > save.lore.cleared) {
      save.lore.cleared = next;
      persist();
    }
  }

  function paintLoreResume(): void {
    const cleared = loreCleared();
    loreResume.hidden = cleared <= 0 || cleared >= LORE_LEVELS.length;
  }

  function resumeLore(): void {
    const cleared = loreCleared();
    if (cleared <= 0 || cleared >= LORE_LEVELS.length) return;
    enterLore(cleared);
  }

  function enterLore(index: number): void {
    const level = Math.trunc(index);
    if (!Number.isFinite(level) || level < 0 || level >= LORE_LEVELS.length) return;
    if (level > loreCleared()) return;
    loreLevel = level;
    loreHitAt = 0;
    loreMissAt = 0;
    loreHitsTotal = 0;
    loreMissesTotal = 0;
    setPressed('lore');
    if (screen !== 'lore-threshold') show('lore-threshold');
    openLoreIntro();
  }

  function beginLoreLevel(): void {
    loreQueue = shuffle(loreDeck);
    loreAt = 0;
    loreHits = 0;
    loreMisses = 0;
    if (!loreQueue.length) return;
    paintLore();
    show('lore-meet');
    setPressed('lore');
  }

  function loreAnswerBody(answer: string, seen: boolean): string {
    const text = answer.trim();
    if (!seen) return text;
    const stripped = text.replace(
      /^(Да — |Да - |Так — |Так - |Yes — |Yes - |是的 — |是的 - )/,
      '',
    );
    if (stripped === text) return text;
    return stripped.replace(/^\p{L}/u, (ch) => ch.toUpperCase());
  }

  function loreVerdict(seen: boolean, answer: string): string {
    const pool = seen ? copy.lore.seen : copy.lore.missed;
    const at = seen ? loreHitAt : loreMissAt;
    if (seen) loreHitAt += 1;
    else loreMissAt += 1;
    const prefix = pool[at % pool.length] ?? pool[0] ?? '';
    const body = loreAnswerBody(answer, seen);
    return `${prefix} ${body}`.replace(/\s+/g, ' ').trim();
  }

  function loreShouldSettle(): boolean {
    return loreMisses > LORE_MAX_MISS || loreAt + 1 >= loreQueue.length;
  }

  function loreTally(hits: number, misses: number): string {
    return fill(copy.lore.tally, { hits, misses });
  }

  function hideLoreOverlay(): void {
    loreOverlay = 'off';
    loreResult.hidden = true;
  }

  function paintLoreOverlay(mode: 'intro' | 'fail' | 'pass' | 'done'): void {
    loreOverlay = mode;
    loreResultBegin.hidden = mode !== 'intro';
    loreResultRetry.hidden = mode !== 'fail' && mode !== 'pass';
    loreResultOnward.hidden = mode !== 'pass';
    loreResultAgain.hidden = mode !== 'done';
    loreResult.hidden = false;
    loreResultTitle.focus({ preventScroll: true });
    say([loreResultTitle.textContent, loreResultLead.textContent, loreResultStats.textContent].filter(Boolean).join(' '));
  }

  function openLoreIntro(): void {
    loreResultTitle.textContent = fill(copy.lore.level_title, {
      n: loreLevel + 1,
      name: copy.lore.levels[loreKind()],
    });
    loreResultLead.textContent = copy.lore.level_blurbs[loreKind()];
    loreResultStats.textContent = '';
    paintLoreOverlay('intro');
  }

  function openLoreStory(card: PlayCard): void {
    if (!fillStory(loreFull, card)) {
      loreFull.hidden = true;
      return;
    }
    loreFull.hidden = false;
  }

  function paintLore(): void {
    const card = loreQueue[loreAt];
    const question = card ? loreQuestion(card) : null;
    if (!card || !question) return;
    loreLocked = false;
    loreScreen.classList.remove('is-answered');
    loreImg.src = card.image;
    loreImg.alt = copy.card_alt;
    loreKicker.dataset.suit = card.suit;
    loreRank.textContent = card.value;
    loreSymbol.textContent = symbols[card.suit];
    loreSymbol.dataset.suit = card.suit;
    loreTitle.textContent = card.title;
    loreAsk.textContent = question.question;
    loreFeedback.classList.remove('is-hit', 'is-miss');
    loreFeedback.hidden = true;
    loreLine.textContent = '';
    loreFull.hidden = true;
    loreFull.replaceChildren();
    loreNext.hidden = true;
    hideLoreOverlay();
    pulse(loreCard, 'set');
    loreOptions.replaceChildren();
    for (const option of shuffle(question.options)) {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.action = 'lore-who';
      button.dataset.id = option.id;
      button.textContent = option.text;
      loreOptions.append(button);
    }
  }

  function answerLore(id: string): void {
    if (loreLocked || screen !== 'lore-meet' || loreOverlay !== 'off') return;
    const card = loreQueue[loreAt];
    const question = card ? loreQuestion(card) : null;
    if (!card || !question) return;
    loreLocked = true;
    loreScreen.classList.add('is-answered');
    const seen = id === question.correct_answer;
    if (seen) loreHits += 1;
    else loreMisses += 1;
    const feedback = seen ? question.feedback_correct : question.feedback_incorrect;
    const line = loreVerdict(seen, feedback.answer);
    loreFeedback.classList.toggle('is-hit', seen);
    loreFeedback.classList.toggle('is-miss', !seen);
    loreLine.textContent = line;
    loreImg.alt = card.title;
    openLoreStory(card);
    loreFeedback.hidden = false;
    loreNext.hidden = false;
    pulse(loreCard, seen ? 'true' : 'dim');
    loreOptions.querySelectorAll('button').forEach((button) => {
      button.toggleAttribute('disabled', true);
      const optionId = button.dataset.id ?? '';
      if (optionId === id) button.classList.add(seen ? 'is-hit' : 'is-miss');
      else if (!seen && optionId === question.correct_answer) button.classList.add('is-hit');
    });
    say(line);
  }

  function nextLore(): void {
    if (!loreLocked || loreOverlay !== 'off') return;
    if (loreShouldSettle()) {
      openLoreResult();
      return;
    }
    loreAt += 1;
    paintLore();
  }

  function openLoreResult(): void {
    const failed = loreMisses > LORE_MAX_MISS;
    const hasNext = !failed && loreLevel + 1 < LORE_LEVELS.length;
    const name = copy.lore.levels[loreKind()];
    if (failed) {
      loreResultTitle.textContent = copy.lore.fail_note;
      loreResultLead.textContent = '';
      loreResultStats.textContent = '';
      paintLoreOverlay('fail');
      return;
    }
    if (hasNext) {
      markLoreCleared();
      loreResultTitle.textContent = fill(copy.lore.pass_title, { name });
      loreResultLead.textContent = '';
      loreResultStats.textContent = loreTally(loreHits, loreMisses);
      paintLoreOverlay('pass');
      return;
    }
    loreHitsTotal += loreHits;
    loreMissesTotal += loreMisses;
    markLoreCleared();
    loreResultTitle.textContent = copy.lore.done_title;
    loreResultLead.textContent = copy.lore.done_note;
    loreResultStats.textContent = loreTally(loreHitsTotal, loreMissesTotal);
    paintLoreOverlay('done');
  }

  function retryLore(): void {
    if (loreOverlay !== 'fail' && loreOverlay !== 'pass') return;
    beginLoreLevel();
  }

  function onwardLore(): void {
    if (loreOverlay !== 'pass') return;
    if (loreLevel + 1 >= LORE_LEVELS.length) return;
    loreHitsTotal += loreHits;
    loreMissesTotal += loreMisses;
    loreLevel += 1;
    if (screen === 'lore-meet') stageName.textContent = gameTitle();
    openLoreIntro();
  }

  function beginLoreFromIntro(): void {
    if (loreOverlay !== 'intro') return;
    beginLoreLevel();
  }

  function showLessonCard(
    img: HTMLImageElement,
    rank: HTMLElement,
    symbol: HTMLElement,
    kicker: HTMLElement,
    title: HTMLElement,
    line: HTMLElement,
    card: PlayCard,
  ): void {
    img.src = card.image;
    img.alt = card.title;
    rank.textContent = card.value;
    symbol.textContent = symbols[card.suit];
    kicker.dataset.suit = card.suit;
    title.textContent = card.title;
    line.textContent = lineOf(card);
  }

  function showCount(): void {
    const preferred = cards.filter((card) => PIPS.includes(card.value) && Number(card.value) >= 3 && Number(card.value) <= 5);
    const pip = sample(preferred.length ? preferred : cards.filter((card) => PIPS.includes(card.value)), 1)[0];
    if (!pip) {
      showCountCourt();
      return;
    }
    showLessonCard(countPip, countRank, countSymbol, countKicker, countCardTitle, countLine, pip);
    show('fw-count');
    setPressed('learn');
  }

  function showCountCourt(): void {
    const face = sample(cards.filter((card) => isCourt(card.value)), 1)[0];
    if (!face) {
      show('fw-spread-intro');
      return;
    }
    showLessonCard(countFace, countFaceRank, countFaceSymbol, countFaceKicker, countFaceTitle, countFaceLine, face);
    show('fw-count-court');
  }

  function readingName(kind: TrialKind): string {
    if (kind === 'court') return copy.learn.court_ask;
    if (kind === 'card') return copy.learn.last_reading;
    return copy.learn.pip_ask;
  }

  function trialPool(kind: TrialKind): PlayCard[] {
    if (kind === 'pip') return cards.filter((card) => PIPS.includes(card.value));
    if (kind === 'court') return cards.filter((card) => isCourt(card.value));
    return cards;
  }

  function startTrial(kind: TrialKind): void {
    trial = kind;
    trialCards = sample(trialPool(kind), TASKS);
    trialAt = 0;
    show('fw-trial');
    setPressed('learn');
    paintTrial();
  }

  function paintTrial(): void {
    const card = trialCards[trialAt];
    if (!card) return;
    trialLocked = false;
    trialScreen.classList.remove('is-answered');
    trialPhase = trial === 'card' ? 'suit' : 'rank';
    trialKicker.textContent = readingName(trial);
    trialImg.src = card.image;
    trialImg.alt = card.title;
    trialFeedback.hidden = true;
    trialFeedback.classList.remove('is-hit', 'is-miss');
    trialLine.textContent = '';
    trialAnswerName.textContent = '';
    trialMark.replaceChildren();
    resetStory(trialFull, trialStory);
    trialNext.hidden = true;
    trialNext.textContent = copy.learn.continue;
    pulse(trialCard, 'set');
    showTrialControls(card);
  }

  function releaseChoices(host: HTMLElement): void {
    host.querySelectorAll('button').forEach((button) => {
      button.disabled = false;
      button.classList.remove('is-hit', 'is-miss');
    });
  }

  function lockChoice(host: HTMLElement, key: 'suit' | 'rank', picked: string, seen: boolean): void {
    host.querySelectorAll('button').forEach((button) => {
      button.disabled = true;
      if (button.dataset[key] === picked) button.classList.add(seen ? 'is-hit' : 'is-miss');
    });
  }

  function showTrialControls(card: PlayCard): void {
    const askSuit = trial === 'card' && trialPhase === 'suit';
    const askRank = trial !== 'card' || trialPhase === 'rank';
    releaseChoices(trialSuits);
    releaseChoices(trialDial);
    releaseChoices(trialCourt);
    trialSuits.hidden = !askSuit;
    trialDial.hidden = !askRank || trial === 'court' || isCourt(card.value);
    trialCourt.hidden = !askRank || trial === 'pip' || !isCourt(card.value);
  }

  function verdictLine(seen: boolean): string {
    const pool = seen ? copy.learn.seen : copy.learn.missed;
    const at = seen ? seenAt : missedAt;
    if (seen) seenAt += 1;
    else missedAt += 1;
    return pool[at % pool.length] ?? pool[0] ?? '';
  }

  function settleTrial(card: PlayCard, seen: boolean, host: HTMLElement, key: 'suit' | 'rank', picked: string): void {
    const line = verdictLine(seen);
    trialScreen.classList.add('is-answered');
    paintReply(trialFeedback, trialMark, trialAnswerName, trialLine, trialBrief, trialStory, trialFull, card, line, seen);
    lockChoice(host, key, picked, seen);
    trialNext.hidden = false;
    trialNext.textContent = copy.learn.continue;
    say(`${card.value}${symbols[card.suit]} ${card.title}. ${line}`);
  }

  function failTrial(card: PlayCard, host: HTMLElement, key: 'suit' | 'rank', picked: string): void {
    trialLocked = true;
    pulse(trialCard, 'dim');
    settleTrial(card, false, host, key, picked);
  }

  function passTrialCard(host: HTMLElement, picked: string): void {
    const card = trialCards[trialAt];
    if (!card) return;
    trialLocked = true;
    pulse(trialCard, 'true');
    settleTrial(card, true, host, 'rank', picked);
  }

  function rankHost(card: PlayCard): HTMLElement {
    return isCourt(card.value) ? trialCourt : trialDial;
  }

  function onTrialSuit(suit: Suit): void {
    const card = trialCards[trialAt];
    if (!card || trialLocked || screen !== 'fw-trial' || trialPhase !== 'suit') return;
    if (suit !== card.suit) {
      failTrial(card, trialSuits, 'suit', suit);
      return;
    }
    trialPhase = 'rank';
    showTrialControls(card);
  }

  function onTrialRank(rank: string): void {
    const card = trialCards[trialAt];
    if (!card || trialLocked || screen !== 'fw-trial' || trialPhase !== 'rank') return;
    const host = rankHost(card);
    if (rank !== card.value) {
      failTrial(card, host, 'rank', rank);
      return;
    }
    passTrialCard(host, rank);
  }

  function nextTrial(): void {
    if (!trialLocked) return;
    if (trialAt + 1 < trialCards.length) {
      trialAt += 1;
      paintTrial();
      return;
    }
    if (trial === 'pip') showCountCourt();
    else if (trial === 'court') startTrial('card');
    else show('fw-spread-intro');
  }

  function spreadLeft(): number {
    return FIVE_MS - (Date.now() - sortStartedAt);
  }

  function paintSpreadCount(): void {
    spreadCount.textContent = fill(copy.learn.guessed, { true: sortIndex });
  }

  function beginSpread(): void {
    sortToken += 1;
    const token = sortToken;
    window.clearInterval(sortTimer);
    sessionId = null;
    sortQueue = shuffle(cards);
    sortIndex = 0;
    spreadMisses = 0;
    spreadSettled = false;
    sortStartedAt = Date.now();
    nameInput.value = '';
    nameInput.removeAttribute('aria-invalid');
    claimNote.textContent = '';
    claimForm.hidden = true;
    saveAsk.hidden = true;
    placeEl.hidden = true;
    victory.hidden = true;
    victory.replaceChildren();
    resultEl.hidden = true;
    show('fw-spread');
    setPressed('learn');
    showSpreadCard();
    timerEl.textContent = formatTime(FIVE_MS);
    paintSpreadCount();
    sortTimer = window.setInterval(tickSpread, 100);
    startInflight = postJson({ action: 'start' }).then((result) => {
      startInflight = null;
      if (token !== sortToken) return;
      if (result && typeof result === 'object' && typeof (result as { id?: unknown }).id === 'string') {
        sessionId = (result as { id: string }).id;
      }
    });
  }

  function showSpreadCard(): void {
    const card = sortQueue[sortIndex];
    if (!card) return;
    sortImg.src = card.image;
    sortImg.alt = copy.card_alt;
    sortSuits.hidden = false;
    spreadDial.hidden = true;
    spreadCourt.hidden = true;
    sortBack.hidden = true;
    paintSpreadCount();
    pulse(spreadCard, 'set');
  }

  function tickSpread(): void {
    const left = spreadLeft();
    timerEl.textContent = formatTime(Math.max(0, left));
    if (left <= 0) void finishSpread(false);
  }

  function onSpreadSuit(suit: Suit): void {
    const card = sortQueue[sortIndex];
    if (!card || spreadSettled || screen !== 'fw-spread') return;
    if (spreadLeft() <= 0) {
      void finishSpread(false);
      return;
    }
    if (card.suit !== suit) {
      spreadMisses += 1;
      pulse(spreadCard, 'dim');
      return;
    }
    sortSuits.hidden = true;
    spreadDial.hidden = isCourt(card.value);
    spreadCourt.hidden = !isCourt(card.value);
    sortBack.hidden = false;
  }

  function onSpreadRank(rank: string): void {
    const card = sortQueue[sortIndex];
    if (!card || spreadSettled || screen !== 'fw-spread') return;
    const elapsed = Date.now() - sortStartedAt;
    if (elapsed >= FIVE_MS) {
      void finishSpread(false);
      return;
    }
    if (card.value !== rank) {
      spreadMisses += 1;
      pulse(spreadCard, 'dim');
      return;
    }
    sortIndex += 1;
    paintSpreadCount();
    const advance = (): void => {
      if (sortIndex >= BOARD_GATE || sortIndex >= sortQueue.length) {
        void finishSpread(sortIndex >= sortQueue.length, elapsed);
        return;
      }
      showSpreadCard();
    };
    if (reduceMotion) {
      advance();
      return;
    }
    const token = sortToken;
    pulse(spreadCard, 'away');
    window.setTimeout(() => {
      if (token !== sortToken || screen !== 'fw-spread') return;
      advance();
    }, 260);
  }

  function showSpreadSuits(): void {
    sortSuits.hidden = false;
    spreadDial.hidden = true;
    spreadCourt.hidden = true;
    sortBack.hidden = true;
  }

  function abandonSort(): void {
    sortToken += 1;
    window.clearInterval(sortTimer);
    sortTimer = 0;
    sessionId = null;
  }

  async function finishSpread(laid: boolean, elapsed = Date.now() - sortStartedAt): Promise<void> {
    if (spreadSettled) return;
    spreadSettled = true;
    const token = sortToken;
    window.clearInterval(sortTimer);
    sortTimer = 0;
    const clientMs = Math.max(0, elapsed);
    const inTime = laid && clientMs < FIVE_MS;
    const onBoard = sortIndex >= BOARD_GATE && clientMs <= FIVE_MS;
    hideLoupe();
    doneTitle.textContent = onBoard ? copy.learn.result_done : copy.learn.time_up;
    resultLead.textContent = onBoard ? (inTime ? copy.learn.result_true : copy.learn.board_ready) : copy.learn.board_need;
    resultLine.textContent = fill(copy.learn.result_tally, { true: sortIndex, errors: spreadMisses });
    doneTime.hidden = false;
    doneTime.textContent = formatResultTime(clientMs);
    doneNote.hidden = true;
    doneNote.textContent = '';
    placeEl.hidden = true;
    openBirthBtn.hidden = !inTime;
    retryBtn.textContent = onBoard ? copy.learn.again_climb : copy.learn.try_again;
    saveAsk.hidden = true;
    claimForm.hidden = true;
    claimNote.textContent = '';
    victory.hidden = true;
    victory.replaceChildren();
    resultEl.hidden = false;
    doneTitle.focus({ preventScroll: true });
    if (inTime) {
      save.birthday = true;
      persist();
      updateLocks();
    }
    if (onBoard) recordBest(clientMs);
    say(doneTitle.textContent);

    if (!onBoard) return;
    if (startInflight) await Promise.race([startInflight, sleep(4000)]);
    if (token !== sortToken) return;

    let official = false;
    let result: unknown = null;
    if (sessionId) {
      result = await postJson({ action: 'complete', id: sessionId, errors: spreadMisses });
      if (token !== sortToken) return;
      official = Boolean(result && typeof result === 'object' && (result as { ok?: boolean }).ok === true);
    }

    if (!official) {
      claimForm.hidden = true;
      claimNote.textContent = copy.learn.board_error;
      return;
    }
    const place = (result as { place?: unknown } | null)?.place;
    const total = (result as { total?: unknown } | null)?.total;
    if (typeof place === 'number' && typeof total === 'number') {
      placeNo.textContent = fill(copy.learn.place_no, { place });
      placeOf.textContent = fill(copy.learn.place_of, { total });
      placeEl.hidden = false;
    }
    saveAsk.hidden = false;
    claimForm.hidden = false;
    claimNote.textContent = '';
  }

  async function submitClaim(): Promise<void> {
    const name = cleanName(nameInput.value);
    if (!name || !sessionId) {
      nameInput.setAttribute('aria-invalid', 'true');
      claimNote.textContent = copy.learn.name_invalid;
      nameInput.focus();
      return;
    }
    nameInput.removeAttribute('aria-invalid');
    const submit = claimForm.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (submit) submit.disabled = true;
    const result = await postJson({ action: 'claim', id: sessionId, name });
    if (submit) submit.disabled = false;
    if (!result || typeof result !== 'object' || (result as { ok?: boolean }).ok !== true) {
      claimNote.textContent = copy.learn.board_error;
      return;
    }
    const reason = (result as { reason?: string }).reason;
    const messages: Record<string, string> = {
      added: copy.learn.saved,
      improved: copy.learn.saved,
      kept: copy.learn.kept,
      full: copy.learn.board_full,
    };
    claimNote.textContent = messages[reason ?? ''] ?? copy.learn.saved;
    const entries = (result as { entries?: unknown }).entries;
    if (Array.isArray(entries)) renderBoard(entries.flatMap(readEntry));
    if (reason === 'added' || reason === 'improved' || reason === 'kept' || reason === 'full') {
      claimForm.hidden = true;
    }
  }

  function fillMonths(): void {
    monthEl.replaceChildren();
    copy.months.forEach((label, index) => {
      const option = document.createElement('option');
      option.value = String(index + 1);
      option.textContent = label;
      monthEl.append(option);
    });
  }

  function fillDays(): void {
    const month = Number(monthEl.value) || 1;
    const max = daysInMonth(month);
    const prev = Number(dayEl.value) || 1;
    dayEl.replaceChildren();
    for (let day = 1; day <= max; day += 1) {
      const option = document.createElement('option');
      option.value = String(day);
      option.textContent = String(day);
      dayEl.append(option);
    }
    dayEl.value = String(Math.min(prev, max));
  }

  function renderReading(card: PlayCard, withSphere: boolean): HTMLElement {
    const fragment = readingTemplate.content.cloneNode(true) as DocumentFragment;
    const article = fragment.querySelector<HTMLElement>('.play-reading');
    if (!article) return document.createElement('div');
    const img = article.querySelector('img');
    if (img) {
      img.src = card.image;
      img.alt = card.title;
    }
    const meta = article.querySelector<HTMLElement>('.play-reading-meta');
    if (meta) {
      meta.dataset.suit = card.suit;
      meta.replaceChildren();
      const symbol = document.createElement('span');
      symbol.className = 'lb-suit-symbol';
      symbol.setAttribute('aria-hidden', 'true');
      symbol.textContent = symbols[card.suit];
      const rank = document.createElement('span');
      rank.className = 'lb-suit-rank';
      rank.textContent = card.value;
      meta.append(symbol, rank);
    }
    const title = article.querySelector('.play-reading-title');
    if (title) title.textContent = card.title;
    const world = article.querySelector('.play-reading-world');
    if (world) world.textContent = worlds[card.suit].name;
    const sphere = article.querySelector<HTMLElement>('.play-reading-sphere');
    if (sphere) {
      sphere.hidden = !withSphere;
      sphere.textContent = withSphere ? copy.birthday.spheres[card.suit] : '';
    }
    const summary = article.querySelector('.play-reading-summary');
    if (summary) summary.textContent = card.summary;
    const body = article.querySelector('.play-reading-body');
    if (body) {
      body.replaceChildren();
      for (const part of card.description.split(/\n+/)) {
        const text = part.trim();
        if (!text) continue;
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        body.append(paragraph);
      }
    }
    return article;
  }

  function submitBirth(): void {
    const month = Number(monthEl.value);
    const day = Number(dayEl.value);
    const result = birthCard(month, day);
    birthCards.replaceChildren();
    birthDate.textContent = formatDate(month, day);
    if (!result) return;

    if (result.kind === 'joker') {
      birthJoker.hidden = false;
      for (const id of ['ace-hearts', 'king-spades']) {
        const card = byId.get(id);
        if (card) birthCards.append(renderReading(card, true));
      }
    } else {
      birthJoker.hidden = true;
      const card = byId.get(result.id);
      if (!card) {
        const note = document.createElement('p');
        note.textContent = fill(copy.birthday.missing, {
          rank: rankWord(result.value),
          suit: suitLabels[result.suit],
        });
        birthCards.append(note);
      } else {
        birthCards.append(renderReading(card, true));
      }
    }

    save.destiny = true;
    persist();
    updateLocks();
    show('birthday-result');
    setPressed('birthday');
    say(birthDate.textContent);
  }

  function readEntry(value: unknown): BoardEntry[] {
    if (!value || typeof value !== 'object') return [];
    const entry = value as { name?: unknown; ms?: unknown; errors?: unknown };
    if (typeof entry.name !== 'string' || typeof entry.ms !== 'number' || !Number.isFinite(entry.ms)) return [];
    const errors = entry.errors;
    if (errors != null && (typeof errors !== 'number' || !Number.isFinite(errors))) return [];
    return [{
      name: entry.name,
      ms: entry.ms,
      errors: typeof errors === 'number' ? Math.max(0, Math.round(errors)) : null,
    }];
  }

  function renderBoard(entries: BoardEntry[]): void {
    recordsList.replaceChildren();
    const empty = entries.length === 0;
    recordsEmpty.hidden = !empty;
    recordsTable.hidden = empty;
    for (const entry of entries) {
      const row = document.createElement('tr');
      if (entry.ms <= FIVE_MS) row.classList.add('is-fast');
      const name = document.createElement('td');
      name.textContent = entry.name;
      const mistakes = document.createElement('td');
      mistakes.textContent = entry.errors == null ? '—' : String(entry.errors);
      const time = document.createElement('td');
      time.textContent = formatTime(entry.ms);
      row.append(name, mistakes, time);
      recordsList.append(row);
    }
  }

  function paintSpreadBest(): void {
    if (boardBestMs == null) {
      spreadBest.hidden = true;
      spreadBest.replaceChildren();
      return;
    }
    const parts = copy.learn.spread_best.split('{time}');
    const mark = document.createElement('strong');
    mark.textContent = formatTime(boardBestMs);
    spreadBest.replaceChildren(document.createTextNode(parts[0] ?? ''), mark);
    if (parts[1]) spreadBest.append(document.createTextNode(parts[1]));
    spreadBest.hidden = false;
  }

  async function refreshBoard(): Promise<void> {
    const result = await getJson();
    if (!result || typeof result !== 'object') return;
    const entries = (result as { entries?: unknown }).entries;
    if (!Array.isArray(entries)) return;
    const ranked = entries.flatMap(readEntry);
    boardBestMs = ranked.reduce<number | null>((best, entry) => (best == null || entry.ms < best ? entry.ms : best), null);
    renderBoard(ranked);
    paintSpreadBest();
  }

  async function postJson(body: unknown): Promise<unknown | null> {
    return requestJson('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
  }

  async function getJson(): Promise<unknown | null> {
    return requestJson('/api/leaderboard', { headers: { Accept: 'application/json' } });
  }

  async function requestJson(path: string, init: RequestInit): Promise<unknown | null> {
    const paths = [path, `/${data.lang}${path}`];
    for (const url of paths) {
      try {
        const response = await fetch(url, { ...init, redirect: 'manual' });
        if (response.status >= 300 && response.status < 400) continue;
        const type = response.headers.get('content-type') ?? '';
        if (!type.includes('json')) continue;
        if (!response.ok && response.status !== 400) continue;
        return await response.json();
      } catch {
        continue;
      }
    }
    return null;
  }

  function onClick(event: Event): void {
    const target = event.target;
    if (!(target instanceof Element) || !root) return;
    const el = target.closest<HTMLElement>('[data-action]');
    if (!el || !root.contains(el)) {
      if (target instanceof HTMLImageElement && target.closest('.fw-card')) openZoom(target, target);
      return;
    }
    const action = el.dataset.action;
    if (action === 'open') openGame(el.dataset.game ?? '');
    else if (action === 'close') closeStage();
    else if (action === 'goto') show(el.dataset.goto ?? '');
    else if (action === 'record-open') {
      recordSheet.hidden = false;
      recordSheet.querySelector<HTMLElement>('#play-records-title')?.focus();
      void refreshBoard();
    }
    else if (action === 'record-close') recordSheet.hidden = true;
    else if (action === 'fw-enter') enterWorlds();
    else if (action === 'fw-timed') show('fw-spread-intro');
    else if (action === 'fw-back') show('fw-threshold');
    else if (action === 'fw-back-worlds') show('fw-worlds');
    else if (action === 'fw-back-suit') showSuit();
    else if (action === 'fw-meet') startMeet();
    else if (action === 'fw-know') beginSuitQuiz();
    else if (action === 'fw-who') answerMeet(el.dataset.id ?? '');
    else if (action === 'fw-suit-story') toggleSuitStory();
    else if (action === 'fw-meet-story') toggleStory();
    else if (action === 'fw-trial-story') toggleTrialStory();
    else if (action === 'fw-meet-next') nextMeet();
    else if (action === 'fw-meet-more') studyMore();
    else if (action === 'fw-meet-onward') onwardMeet();
    else if (action === 'fw-count') showCount();
    else if (action === 'fw-count-court') showCountCourt();
    else if (action === 'fw-trial-court') startTrial('court');
    else if (action === 'fw-trial') startTrial((el.dataset.trial as TrialKind) || 'pip');
    else if (action === 'fw-suit') onTrialSuit((el.dataset.suit as Suit) || 'hearts');
    else if (action === 'fw-rank') {
      if (screen === 'fw-spread') onSpreadRank(el.dataset.rank ?? '');
      else onTrialRank(el.dataset.rank ?? '');
    } else if (action === 'fw-trial-next') nextTrial();
    else if (action === 'fw-begin') beginSpread();
    else if (action === 'fw-restart') beginSpread();
    else if (action === 'fw-spread-suit') onSpreadSuit((el.dataset.suit as Suit) || 'hearts');
    else if (action === 'fw-resuit') showSpreadSuits();
    else if (action === 'fw-retry') beginSpread();
    else if (action === 'fw-dismiss-save') {
      claimForm.hidden = true;
      saveAsk.hidden = true;
    } else if (action === 'lore-enter') enterLore(Number(el.dataset.level ?? '0'));
    else if (action === 'lore-resume') resumeLore();
    else if (action === 'lore-back') show('lore-threshold');
    else if (action === 'lore-who') answerLore(el.dataset.id ?? '');
    else if (action === 'lore-next') nextLore();
    else if (action === 'lore-begin') beginLoreFromIntro();
    else if (action === 'lore-retry') retryLore();
    else if (action === 'lore-onward') onwardLore();
    else if (action === 'lore-again') {
      setPressed('lore');
      show('lore-threshold');
    }
    else if (action === 'zoom') {
      const shot = el.closest('.play-shot');
      const img = shot?.querySelector('img');
      if (img instanceof HTMLImageElement) openZoom(img, el);
    } else if (action === 'zoom-close') closeZoom();
  }

  function onKey(event: KeyboardEvent): void {
    if (event.key !== 'Escape') return;
    if (!zoom.hidden) {
      event.preventDefault();
      closeZoom();
      return;
    }
    if (!recordSheet.hidden) {
      event.preventDefault();
      recordSheet.hidden = true;
      return;
    }
    if (!stage.hidden) {
      event.preventDefault();
      closeStage();
    }
  }

  function onSubmit(event: Event): void {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) || !root?.contains(form)) return;
    event.preventDefault();
    if (form.id === 'play-birth-form') submitBirth();
    else if (form.id === 'play-claim-form') void submitClaim();
  }
}
