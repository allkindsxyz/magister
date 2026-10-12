import type { OracleCopy, SuitName } from '../i18n/gamesCopy';

export type OracleCard = {
  id: string;
  suit: SuitName;
  value: string;
  title: string;
  world: string;
  image: string;
  story: string[];
  message: string;
};

export type OraclePhase = 'intro' | 'shuffle' | 'wheel' | 'result';

export type OracleController = {
  enter(): void;
  leave(): void;
  /** Steps back inside the game; false when already on the intro. */
  back(): boolean;
  /** Closes the story sheet; false when nothing was open. */
  escape(): boolean;
  phase(): OraclePhase;
};

type OracleOptions = {
  copy: OracleCopy;
  cards: OracleCard[];
  back: string;
  symbols: Record<SuitName, string>;
  rankName(value: string): string;
  onPhase(phase: OraclePhase): void;
  zoom(img: HTMLImageElement, opener: HTMLElement): void;
  say(text: string): void;
};

type WheelMode = 'idle' | 'dealing' | 'drag' | 'inertia' | 'snap' | 'pulling';

type Geometry = {
  W: number;
  H: number;
  cardW: number;
  cardH: number;
  R: number;
  spacing: number;
  step: number;
  px: number;
  py: number;
  lift: number;
};

type DragStart = { x: number; y: number; offset: number; axis: 'x' | 'y' | null; target: number | null };

const CARD_RATIO = 0.6975;
const HOLD_MIN_MS = 3000;
const DECK_SIZE = 10;
const CYCLE_MS = 1350;
const DEAL_MS = 1150;
const FLIGHT_MS = 900;
const FLIP_MS = 1150;
const FACE_WAIT_MS = 6000;
const HISTORY_KEY = 'magister-oracle-history';
const HISTORY_WINDOW_MS = 7 * 24 * 3600 * 1000;
/* Season tints follow the suit spheres: spring, autumn, summer, winter. */
const TINTS: Record<SuitName, string> = {
  hearts: '214, 132, 140',
  diamonds: '214, 150, 84',
  clubs: '222, 196, 110',
  spades: '132, 164, 214',
};
const DEFAULT_TINT = '217, 181, 106';

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function buzz(ms: number): void {
  try {
    navigator.vibrate?.(ms);
  } catch {
    /* unsupported */
  }
}

function capture(el: Element, event: PointerEvent): void {
  try {
    el.setPointerCapture(event.pointerId);
  } catch {
    /* synthetic or already released pointer */
  }
}

/** Fisher–Yates over crypto randomness: the draw must not be predictable from Math.random state. */
function cryptoShuffle<T>(items: readonly T[]): T[] {
  const list = [...items];
  const buf = new Uint32Array(1);
  for (let i = list.length - 1; i > 0; i -= 1) {
    crypto.getRandomValues(buf);
    const j = (buf[0] ?? 0) % (i + 1);
    [list[i], list[j]] = [list[j] as T, list[i] as T];
  }
  return list;
}

function readHistory(): { id: string; t: number }[] {
  try {
    const raw: unknown = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]');
    if (!Array.isArray(raw)) return [];
    return raw.filter(
      (item): item is { id: string; t: number } =>
        Boolean(item) && typeof item.id === 'string' && typeof item.t === 'number' && Number.isFinite(item.t),
    );
  } catch {
    return [];
  }
}

/** Records the draw; true when the same card already came within the window. */
function pushHistory(id: string): boolean {
  const now = Date.now();
  const list = readHistory().filter((item) => now - item.t < HISTORY_WINDOW_MS);
  const seen = list.some((item) => item.id === id);
  list.push({ id, t: now });
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(-50)));
  } catch {
    /* private mode or a full disk */
  }
  return seen;
}

export function mountOracle(host: HTMLElement, options: OracleOptions): OracleController {
  const { copy, cards, symbols } = options;
  const N = cards.length;
  const byId = new Map(cards.map((card) => [card.id, card]));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const q = <T extends Element = HTMLElement>(selector: string): T => {
    const node = host.querySelector<T>(selector);
    if (!node) throw new Error(`Missing ${selector}`);
    return node;
  };

  const startBtn = q<HTMLButtonElement>('[data-oracle="start"]');
  const shuffleEl = q('[data-oracle="shuffle"]');
  const ringWrap = q('[data-oracle="ring-wrap"]');
  const ring = q<SVGCircleElement>('[data-oracle="ring"]');
  const deck = q('[data-oracle="deck"]');
  const cue = q('[data-oracle="cue"]');
  const sub = q('[data-oracle="sub"]');
  const wheelEl = q('[data-oracle="wheel"]');
  const fan = q('[data-oracle="fan"]');
  const hint = q('[data-oracle="hint"]');
  const resultEl = q('[data-oracle="result"]');
  const slot = q('[data-oracle="slot"]');
  const answer = q('[data-oracle="answer"]');
  const messageEl = q('[data-oracle="message"]');
  const lineEl = q('[data-oracle="line"]');
  const repeatEl = q('[data-oracle="repeat"]');
  const againBtn = q<HTMLButtonElement>('[data-oracle="again"]');
  const storyBtn = q<HTMLButtonElement>('[data-oracle="story"]');
  const pickEl = q('[data-oracle="pick"]');
  const pickInner = q('[data-oracle="pick-inner"]');
  const pickFace = q<HTMLImageElement>('[data-oracle="pick-face"]');
  const sheet = q('[data-oracle="sheet"]');
  const sheetPanel = q('[data-oracle="sheet-panel"]');
  const sheetKicker = q('[data-oracle="sheet-kicker"]');
  const sheetTitle = q('[data-oracle="sheet-title"]');
  const sheetBody = q('[data-oracle="sheet-body"]');
  const sheetClose = q<HTMLButtonElement>('[data-oracle="sheet-close"]');
  const motes = q('[data-oracle="motes"]');

  let phase: OraclePhase = 'intro';
  /* Bumped on every reset; async steps compare against it to drop stale work. */
  let session = 0;
  let current: OracleCard | null = null;
  let order: string[] = [];

  /* ---------------- Phases ---------------- */

  function setPhase(next: OraclePhase): void {
    phase = next;
    host.dataset.phase = next;
    options.onPhase(next);
  }

  function setTint(rgb: string): void {
    host.style.setProperty('--oracle-tint', rgb);
  }

  function seedMotes(): void {
    if (motes.childElementCount) return;
    for (let i = 0; i < 18; i += 1) {
      const mote = document.createElement('i');
      mote.style.left = `${Math.random() * 100}%`;
      mote.style.bottom = `${Math.random() * -20}%`;
      mote.style.animationDuration = `${14 + Math.random() * 16}s`;
      mote.style.animationDelay = `${-Math.random() * 30}s`;
      motes.append(mote);
    }
  }

  /* ---------------- Shuffle: riffle while held ---------------- */

  const stackPose = (i: number): string => `translate(${-i * 0.5}px, ${-i * 0.7}px)`;
  const deckCards = Array.from({ length: DECK_SIZE }, (_, i) => {
    const img = document.createElement('img');
    img.loading = 'lazy';
    img.src = options.back;
    img.alt = '';
    img.draggable = false;
    img.style.transform = stackPose(i);
    deck.append(img);
    return img;
  });

  /* Halves split apart, then cards fall back alternately left/right, bottom first. */
  function riffleKeyframes(i: number): Keyframe[] {
    const side = i % 2 === 0 ? -1 : 1;
    const base = stackPose(i);
    const back = 0.46 + (i / (DECK_SIZE - 1)) * 0.36;
    return [
      { offset: 0, transform: base, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' },
      { offset: 0.26, transform: `translate(${side * 56}%, ${-4 - i * 0.6}%) rotate(${side * 7}deg)` },
      {
        offset: back - 0.1,
        transform: `translate(${side * 50}%, ${-6 - i * 0.6}%) rotate(${side * 4}deg)`,
        easing: 'cubic-bezier(0.5, 0, 0.9, 0.6)',
      },
      { offset: back, transform: `${base} translateY(-3px)` },
      { offset: 1, transform: base },
    ];
  }

  let riffles: Animation[] = [];

  function startRiffle(): void {
    if (reduceMotion) return;
    stopRiffle();
    riffles = deckCards.map((img, i) => img.animate(riffleKeyframes(i), { duration: CYCLE_MS, iterations: Infinity }));
  }

  /* Lets the running cycle land so the deck never snaps mid-air. */
  async function landRiffle(): Promise<void> {
    const running = riffles;
    if (!running.length) return;
    const iteration = running[0]?.effect?.getComputedTiming().currentIteration ?? 0;
    running.forEach((anim) => anim.effect?.updateTiming({ iterations: iteration + 1 }));
    /* Frames may not tick at all (background tab, throttled renderer); never wait longer than one cycle. */
    await Promise.race([Promise.allSettled(running.map((anim) => anim.finished)), wait(CYCLE_MS + 150)]);
    if (riffles !== running) return;
    running.forEach((anim) => anim.cancel());
    riffles = [];
  }

  function stopRiffle(): void {
    riffles.forEach((anim) => anim.cancel());
    riffles = [];
  }

  let held = 0;
  let holding = false;
  let holdStart = 0;
  let cueIndex = -1;
  let releasing = false;
  let cueTimer = 0;
  let tickId = 0;

  function setCue(text: string, instant = false): void {
    window.clearTimeout(cueTimer);
    if (instant || reduceMotion) {
      cue.classList.remove('is-out');
      cue.textContent = text;
      return;
    }
    if (cue.textContent === text) return;
    cue.classList.add('is-out');
    cueTimer = window.setTimeout(() => {
      cue.textContent = text;
      cue.classList.remove('is-out');
    }, 250);
  }

  function resetShuffle(text: string): void {
    held = 0;
    holding = false;
    releasing = false;
    cueIndex = -1;
    window.cancelAnimationFrame(tickId);
    stopRiffle();
    ring.style.strokeDashoffset = '1';
    ringWrap.classList.remove('is-ready');
    shuffleEl.classList.remove('is-holding');
    sub.hidden = false;
    setCue(text, true);
  }

  /* Held time comes from the clock, not from frames: rAF is throttled in background tabs. */
  const heldNow = (): number => (holding ? held + (performance.now() - holdStart) : held);

  function tick(): void {
    tickId = 0;
    if (!holding) return;
    const total = heldNow();
    const progress = Math.min(total / HOLD_MIN_MS, 1);
    ring.style.strokeDashoffset = String(1 - progress);
    if (progress >= 1) {
      ringWrap.classList.add('is-ready');
      setCue(copy.ready);
    } else {
      let index = 0;
      copy.cues.forEach((item, i) => {
        if (total >= item.from) index = i;
      });
      const next = copy.cues[index];
      if (index !== cueIndex && next) {
        cueIndex = index;
        setCue(next.text);
      }
    }
    tickId = window.requestAnimationFrame(tick);
  }

  function startHold(): void {
    if (phase !== 'shuffle' || holding || releasing) return;
    holding = true;
    sub.hidden = true;
    shuffleEl.classList.add('is-holding');
    holdStart = performance.now();
    startRiffle();
    buzz(8);
    tickId = window.requestAnimationFrame(tick);
  }

  async function endHold(): Promise<void> {
    if (!holding) return;
    const token = session;
    held = heldNow();
    holding = false;
    shuffleEl.classList.remove('is-holding');
    if (held < HOLD_MIN_MS) {
      cueIndex = -1;
      setCue(copy.too_early);
      await landRiffle();
      return;
    }
    releasing = true;
    ring.style.strokeDashoffset = '0';
    /* The order is fixed at the moment of release. */
    order = cryptoShuffle(cards.map((card) => card.id));
    buzz(20);
    setCue(copy.heard);
    await landRiffle();
    await wait(reduceMotion ? 150 : 350);
    if (token !== session) return;
    releasing = false;
    void openWheel();
  }

  shuffleEl.addEventListener('pointerdown', (event) => {
    if (event.button > 0) return;
    capture(shuffleEl, event);
    startHold();
  });
  shuffleEl.addEventListener('pointerup', () => void endHold());
  shuffleEl.addEventListener('pointercancel', () => void endHold());
  shuffleEl.addEventListener('lostpointercapture', () => void endHold());
  shuffleEl.addEventListener('contextmenu', (event) => event.preventDefault());

  /* ---------------- Wheel ---------------- */

  let els: HTMLButtonElement[] = [];
  let geo: Geometry | null = null;
  let offset = Math.floor((N - 1) / 2);
  let vel = 0;
  let dragLift = 0;
  let mode: WheelMode = 'idle';
  let snapTarget: number | null = null;
  let rafId = 0;
  let interacted = false;
  let wheelIdle = 0;
  let drag: DragStart | null = null;
  let samples: { x: number; y: number; t: number }[] = [];

  function measure(): Geometry {
    const W = Math.max(1, wheelEl.clientWidth || host.clientWidth);
    const H = Math.max(1, wheelEl.clientHeight || host.clientHeight);
    /* Card height is capped at ~27% of the field so the fan fits short screens. */
    const cardW = Math.max(96, Math.min(W * 0.38, 190, H * 0.27 * CARD_RATIO));
    const cardH = cardW / CARD_RATIO;
    const R = Math.max(W * 1.35, 700);
    const spacing = cardW * 0.34;
    geo = { W, H, cardW, cardH, R, spacing, step: spacing / R, px: W / 2, py: H * 0.53 + R, lift: cardH * 0.15 };
    els.forEach((el) => {
      el.style.width = `${cardW}px`;
      el.style.height = `${cardH}px`;
    });
    return geo;
  }

  function cardPose(i: number, g: Geometry, at = offset): { d: number; a: number; x: number; y: number } {
    const d = i - at;
    const a = d * g.step;
    const focus = Math.max(0, 1 - Math.abs(d));
    const r = g.R + focus * g.lift + (i === Math.round(at) ? dragLift : 0);
    return { d, a, x: g.px + Math.sin(a) * r - g.cardW / 2, y: g.py - Math.cos(a) * r - g.cardH / 2 };
  }

  const clampOffset = (value: number): number => Math.min(N - 1, Math.max(0, value));
  const rubber = (value: number): number =>
    value < 0 ? value * 0.3 : value > N - 1 ? N - 1 + (value - (N - 1)) * 0.3 : value;

  function render(): void {
    const g = geo;
    if (!g) return;
    const focus = Math.round(clampOffset(offset));
    const maxA = Math.asin(Math.min(1, (g.W / 2 + g.cardW) / g.R)) + 0.05;
    els.forEach((el, i) => {
      const pose = cardPose(i, g);
      const visible = Math.abs(pose.a) < maxA;
      el.style.visibility = visible ? 'visible' : 'hidden';
      el.tabIndex = i === focus ? 0 : -1;
      if (!visible) return;
      el.style.transform = `translate3d(${pose.x}px, ${pose.y}px, 0) rotate(${pose.a}rad)`;
      el.style.zIndex = String(1000 - Math.round(Math.abs(pose.d) * 10));
      el.style.setProperty('--dim', String(Math.min(Math.abs(pose.d) * 0.08, 0.6)));
      el.classList.toggle('is-focus', i === focus && mode !== 'dealing');
    });
  }

  function loop(): void {
    rafId = 0;
    if (mode === 'inertia') {
      offset += vel * 16;
      vel *= 0.95;
      if (offset < 0 || offset > N - 1) vel *= 0.6;
      if (Math.abs(vel) < 0.0015) {
        mode = 'snap';
        snapTarget = Math.round(clampOffset(offset));
      }
    }
    if (mode === 'snap') {
      const target = snapTarget ?? Math.round(clampOffset(offset));
      offset += (target - offset) * 0.16;
      if (Math.abs(target - offset) < 0.002) {
        offset = target;
        mode = 'idle';
        snapTarget = null;
        buzz(4);
      }
    }
    if (mode !== 'drag' && mode !== 'pulling' && dragLift !== 0) {
      dragLift *= 0.75;
      if (Math.abs(dragLift) < 0.5) dragLift = 0;
    }
    render();
    if (mode === 'inertia' || mode === 'snap' || dragLift !== 0) schedule();
  }

  function schedule(): void {
    if (!rafId) rafId = window.requestAnimationFrame(loop);
  }

  function stopWheel(): void {
    window.cancelAnimationFrame(rafId);
    rafId = 0;
    window.clearTimeout(wheelIdle);
    drag = null;
    samples = [];
    vel = 0;
    dragLift = 0;
    snapTarget = null;
  }

  function hideHint(): void {
    if (interacted) return;
    interacted = true;
    hint.classList.add('is-out');
  }

  function buildFan(): void {
    fan.replaceChildren();
    els = order.map((_, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'oracle-fc';
      button.dataset.i = String(i);
      button.setAttribute('aria-label', copy.card_back);
      const img = document.createElement('img');
      img.src = options.back;
      img.alt = '';
      img.draggable = false;
      const shade = document.createElement('span');
      shade.className = 'oracle-fc-shade';
      button.append(img, shade);
      fan.append(button);
      return button;
    });
  }

  async function openWheel(): Promise<void> {
    const token = session;
    buildFan();
    fan.style.transition = 'none';
    fan.classList.remove('is-sunk');
    void fan.offsetWidth;
    fan.style.transition = '';
    offset = Math.floor((N - 1) / 2);
    vel = 0;
    dragLift = 0;
    interacted = false;
    hint.classList.remove('is-out');
    setPhase('wheel');
    const g = measure();
    mode = 'dealing';
    /* Deal: every card starts stacked at the deck position, then flies out from the centre. */
    const sx = g.W / 2 - g.cardW / 2;
    const sy = g.H * 0.45 - g.cardH / 2;
    els.forEach((el, i) => {
      el.style.transform = `translate3d(${sx}px, ${sy}px, 0)`;
      el.style.visibility = 'visible';
      el.style.setProperty('--deal', `${Math.abs(i - offset) * 14}ms`);
    });
    void fan.offsetWidth;
    fan.classList.add('is-dealing');
    render();
    await wait(reduceMotion ? 50 : DEAL_MS);
    if (token !== session) return;
    fan.classList.remove('is-dealing');
    mode = 'idle';
    render();
    els[Math.round(offset)]?.focus({ preventScroll: true });
  }

  wheelEl.addEventListener('pointerdown', (event) => {
    if (mode === 'dealing' || mode === 'pulling' || phase !== 'wheel' || event.button > 0) return;
    capture(wheelEl, event);
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>('.oracle-fc') : null;
    drag = { x: event.clientX, y: event.clientY, offset, axis: null, target: target ? Number(target.dataset.i) : null };
    samples = [{ x: event.clientX, y: event.clientY, t: performance.now() }];
    vel = 0;
    if (mode === 'inertia' || mode === 'snap') mode = 'idle';
  });

  wheelEl.addEventListener('pointermove', (event) => {
    if (!drag || !geo) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    if (!drag.axis && Math.hypot(dx, dy) > 8) {
      drag.axis = Math.abs(dy) > Math.abs(dx) * 1.2 ? 'y' : 'x';
      mode = 'drag';
      hideHint();
    }
    samples.push({ x: event.clientX, y: event.clientY, t: performance.now() });
    if (samples.length > 6) samples.shift();
    if (drag.axis === 'x') {
      offset = rubber(drag.offset - dx / geo.spacing);
      dragLift = 0;
    } else if (drag.axis === 'y') {
      /* Either direction pulls the card out: up away from the fan, or down towards the viewer. */
      dragLift = -dy;
    }
    render();
  });

  function endPointer(): void {
    const start = drag;
    if (!start || !geo) return;
    drag = null;
    const first = samples[0];
    const last = samples[samples.length - 1];
    if (!first || !last) return;
    const dt = Math.max(1, last.t - first.t);
    if (!start.axis) {
      mode = 'idle';
      if (start.target == null) return;
      const focus = Math.round(clampOffset(offset));
      if (start.target === focus) void pull(focus);
      else {
        mode = 'snap';
        snapTarget = start.target;
        schedule();
      }
      return;
    }
    if (start.axis === 'y') {
      const vy = (last.y - first.y) / dt;
      if (Math.abs(dragLift) > geo.H * 0.1 || Math.abs(vy) > 0.6) {
        void pull(Math.round(clampOffset(offset)));
        return;
      }
      mode = 'idle';
      schedule();
      return;
    }
    vel = Math.max(-0.06, Math.min(0.06, -((last.x - first.x) / dt) / geo.spacing));
    mode = 'inertia';
    schedule();
  }

  wheelEl.addEventListener('pointerup', endPointer);
  wheelEl.addEventListener('pointercancel', endPointer);

  wheelEl.addEventListener(
    'wheel',
    (event) => {
      if (mode === 'dealing' || mode === 'pulling' || phase !== 'wheel' || !geo) return;
      event.preventDefault();
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      offset = rubber(offset + (delta / geo.spacing) * 0.35);
      mode = 'idle';
      hideHint();
      render();
      window.clearTimeout(wheelIdle);
      wheelIdle = window.setTimeout(() => {
        if (mode !== 'idle') return;
        mode = 'snap';
        snapTarget = null;
        schedule();
      }, 120);
    },
    { passive: false },
  );

  wheelEl.addEventListener('keydown', (event) => {
    if (mode === 'dealing' || mode === 'pulling' || phase !== 'wheel') return;
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      hideHint();
      const next = Math.round(clampOffset((snapTarget ?? offset) + (event.key === 'ArrowRight' ? 1 : -1)));
      snapTarget = next;
      mode = 'snap';
      schedule();
      window.requestAnimationFrame(() => els[next]?.focus({ preventScroll: true }));
    } else if (event.key === 'Enter' || event.key === ' ' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      void pull(Math.round(clampOffset(offset)));
    }
  });

  /* Pointer taps go through pointerup; detail === 0 is a synthetic activation from assistive tech. */
  fan.addEventListener('click', (event) => {
    if (event.detail !== 0 || mode === 'dealing' || mode === 'pulling' || phase !== 'wheel') return;
    const target = event.target instanceof Element ? event.target.closest<HTMLElement>('.oracle-fc') : null;
    const index = Number(target?.dataset.i);
    if (Number.isInteger(index)) void pull(index);
  });

  /* ---------------- Pull & reveal ---------------- */

  function fillAnswer(card: OracleCard): void {
    messageEl.textContent = card.message;
    const name = document.createElement('b');
    name.textContent = card.title;
    lineEl.replaceChildren(name, ` · ${options.rankName(card.value)} ${symbols[card.suit]} · ${card.world}`);
    repeatEl.hidden = !pushHistory(card.id);
    pickFace.alt = card.title;
    storyBtn.hidden = card.story.length === 0;
  }

  async function pull(index: number): Promise<void> {
    const g = geo;
    const card = byId.get(order[index] ?? '');
    if (mode === 'pulling' || !g || !card) return;
    mode = 'pulling';
    const token = session;
    const stale = (): boolean => token !== session;
    buzz(15);
    current = card;
    const pose = cardPose(index, g);
    const wheelRect = wheelEl.getBoundingClientRect();

    pickFace.src = card.image;
    /* On a slow network the card still turns; the face paints as soon as it arrives. */
    const faceReady = Promise.race([pickFace.decode().catch(() => undefined), wait(FACE_WAIT_MS)]);

    fillAnswer(card);
    answer.classList.remove('is-shown');
    pickEl.classList.remove('is-docked', 'is-flipped', 'is-waiting', 'is-glinted');
    pickEl.tabIndex = -1;
    host.append(pickEl);
    resultEl.scrollTop = 0;
    setPhase('result');
    const hostRect = host.getBoundingClientRect();
    const rect = slot.getBoundingClientRect();
    const left = rect.left - hostRect.left;
    const top = rect.top - hostRect.top;
    Object.assign(pickEl.style, {
      left: `${left}px`,
      top: `${top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transition: 'none',
    });
    const scale = g.cardW / Math.max(1, rect.width);
    const cx = wheelRect.left - hostRect.left + pose.x + g.cardW / 2;
    const cy = wheelRect.top - hostRect.top + pose.y + g.cardH / 2;
    pickEl.style.transform = `translate(${cx - (left + rect.width / 2)}px, ${cy - (top + rect.height / 2)}px) rotate(${pose.a}rad) scale(${scale})`;
    pickEl.classList.add('is-on');
    const source = els[index];
    if (source) source.style.opacity = '0';
    fan.classList.add('is-sunk');
    void pickEl.offsetWidth;
    pickEl.style.transition = reduceMotion ? 'none' : `transform ${FLIGHT_MS}ms cubic-bezier(0.2, 0.85, 0.25, 1)`;
    pickEl.style.transform = 'none';

    await wait(reduceMotion ? 0 : FLIGHT_MS);
    if (stale()) return;
    pickEl.classList.add('is-waiting');
    await Promise.all([faceReady, wait(reduceMotion ? 0 : 900)]);
    if (stale()) return;
    pickEl.classList.remove('is-waiting');
    buzz(25);
    setTint(TINTS[card.suit] ?? DEFAULT_TINT);
    await flipCard();
    if (stale()) return;
    answer.classList.add('is-shown');
    options.say(`${card.title}. ${card.message}`);
    await wait(reduceMotion ? 0 : 1200);
    if (stale()) return;
    /* Dock into the scrollable layout so the card scrolls with the text; reparenting restarts CSS animations. */
    pickEl.classList.add('is-glinted', 'is-docked');
    pickEl.style.transition = 'none';
    pickEl.style.left = '';
    pickEl.style.top = '';
    pickEl.style.width = '';
    pickEl.style.height = '';
    pickEl.tabIndex = 0;
    slot.append(pickEl);
  }

  /* The card rises towards the viewer, passes edge-on at 90° and lands face up. */
  async function flipCard(): Promise<void> {
    pickEl.classList.add('is-flipped');
    if (reduceMotion) return;
    const flip = pickInner.animate(
      [
        { transform: 'translateZ(0) rotateY(0deg) scale(1)', easing: 'cubic-bezier(0.55, 0, 0.75, 0.35)' },
        { transform: 'translateZ(0) rotateY(-12deg) scale(1.02)', offset: 0.12, easing: 'cubic-bezier(0.4, 0, 0.6, 1)' },
        { transform: 'translateZ(90px) rotateY(90deg) scale(1.1)', offset: 0.5, easing: 'cubic-bezier(0.2, 0.6, 0.3, 1.15)' },
        { transform: 'translateZ(0) rotateY(180deg) scale(1)' },
      ],
      { duration: FLIP_MS },
    );
    await Promise.race([flip.finished.catch(() => undefined), wait(FLIP_MS + 150)]);
    flip.cancel();
  }

  function clearPick(): void {
    pickInner.getAnimations().forEach((anim) => anim.cancel());
    pickEl.classList.remove('is-on', 'is-docked', 'is-flipped', 'is-waiting', 'is-glinted');
    pickEl.style.cssText = '';
    pickEl.tabIndex = -1;
    host.append(pickEl);
    answer.classList.remove('is-shown');
    setTint(DEFAULT_TINT);
    resultEl.scrollTop = 0;
    current = null;
  }

  function openZoom(): void {
    if (!current || !pickEl.classList.contains('is-docked')) return;
    options.zoom(pickFace, pickEl);
  }

  pickEl.addEventListener('click', openZoom);
  pickEl.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openZoom();
  });

  /* ---------------- Story sheet ---------------- */

  function openSheet(): void {
    if (!current) return;
    sheetKicker.textContent = `${current.world} · ${options.rankName(current.value)} ${symbols[current.suit]}`;
    sheetTitle.textContent = current.title;
    sheetBody.replaceChildren(
      ...current.story.map((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        return paragraph;
      }),
    );
    sheet.classList.add('is-open');
    sheet.setAttribute('aria-hidden', 'false');
    sheetPanel.scrollTop = 0;
    sheetClose.focus({ preventScroll: true });
  }

  function closeSheet(restoreFocus = true): boolean {
    if (!sheet.classList.contains('is-open')) return false;
    sheet.classList.remove('is-open');
    sheet.setAttribute('aria-hidden', 'true');
    /* Safari does not focus buttons on click, so the opener is restored explicitly. */
    if (restoreFocus) storyBtn.focus({ preventScroll: true });
    return true;
  }

  storyBtn.addEventListener('click', openSheet);
  sheet.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('[data-oracle-close]')) closeSheet();
  });

  /* ---------------- Flow ---------------- */

  /** Drops every running step and returns the game to a clean state for the given phase. */
  function reset(): void {
    session += 1;
    stopWheel();
    mode = 'idle';
    closeSheet(false);
    clearPick();
    fan.replaceChildren();
    els = [];
    order = [];
  }

  function toShuffle(text: string): void {
    reset();
    resetShuffle(text);
    setPhase('shuffle');
    shuffleEl.focus({ preventScroll: true });
  }

  startBtn.addEventListener('click', () => toShuffle(copy.hold));
  /* Every new question gets its own ritual: straight back to the shuffle, no confirmation. */
  againBtn.addEventListener('click', () => toShuffle(copy.hold_again));

  window.addEventListener('keydown', (event) => {
    if (event.code !== 'Space' || phase !== 'shuffle' || host.hidden) return;
    event.preventDefault();
    if (!event.repeat) startHold();
  });
  window.addEventListener('keyup', (event) => {
    if (event.code !== 'Space' || phase !== 'shuffle' || host.hidden) return;
    event.preventDefault();
    void endHold();
  });
  window.addEventListener('blur', () => void endHold());

  new ResizeObserver(() => {
    if (host.hidden || phase !== 'wheel' || !els.length) return;
    measure();
    if (mode !== 'dealing') render();
  }).observe(host);

  function enter(): void {
    reset();
    resetShuffle(copy.hold);
    seedMotes();
    setPhase('intro');
    startBtn.focus({ preventScroll: true });
  }

  function leave(): void {
    reset();
    resetShuffle(copy.hold);
    phase = 'intro';
    host.dataset.phase = 'intro';
  }

  return {
    enter,
    leave,
    back(): boolean {
      if (phase === 'intro') return false;
      enter();
      return true;
    },
    escape: () => closeSheet(),
    phase: () => phase,
  };
}
