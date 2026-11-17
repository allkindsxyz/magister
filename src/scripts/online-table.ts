import type { OnlineCopy } from '../i18n/onlineCopy';
import type { PlaySuit } from '../lib/onlineDeck';
import { HAND_SIZE, SEATS } from '../lib/onlineConstants';
import type { ClientRoomView, RoomActionEvent } from '../lib/onlineGame';

const PLAYER_KEY = 'magister-online-player';
const DISPLAY_NAME_KEY = 'magister-online-display-name';
const HINTS_PREF_KEY = 'magister-online-hints';
const MOTION_SCALE = 1.5;

type Suit = PlaySuit;

function motionMs(ms: number): number {
  return Math.round(ms * MOTION_SCALE);
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

/** Real-time pause between bot / opponent moves (not scaled by motion). */
const BOT_TURN_GAP_MS = 1000;

function flyBorderRadius(width: number, height: number): string {
  const base = Math.min(width, height);
  return `${Math.round(Math.min(14, Math.max(6, base * 0.075)))}px`;
}

/** Uniform scale so the card never grows beyond the target pile size. */
function uniformFlyScale(from: DOMRect, to: DOMRect): number {
  if (from.width <= 0 || from.height <= 0) return 1;
  const sx = to.width / from.width;
  const sy = to.height / from.height;
  return Math.min(sx, sy);
}

function reducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function flyCard(
  layer: HTMLElement,
  from: DOMRect,
  to: DOMRect,
  src: string,
  duration = motionMs(440),
  onLanded?: (img: HTMLImageElement) => void,
): Promise<void> {
  if (reducedMotion() || (from.width === 0 && to.width === 0)) {
    if (onLanded) {
      const img = document.createElement('img');
      img.src = src;
      onLanded(img);
    }
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const img = document.createElement('img');
    img.className = 'mag-online-fly-card';
    img.src = src;
    img.alt = '';
    img.style.left = `${from.left}px`;
    img.style.top = `${from.top}px`;
    img.style.width = `${from.width || to.width}px`;
    img.style.height = `${from.height || to.height}px`;

    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const s = uniformFlyScale(from, to);

    img.style.borderRadius = flyBorderRadius(from.width, from.height);

    let finished = false;
    const done = (): void => {
      if (finished) return;
      finished = true;
      if (onLanded) {
        onLanded(img);
      }
      if (img.parentElement === layer) {
        img.remove();
      }
      resolve();
    };

    img.addEventListener('transitionend', done, { once: true });
    layer.appendChild(img);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        img.style.transition = `transform ${duration}ms cubic-bezier(0.24, 0.92, 0.32, 1)`;
        img.style.transform = `translate(${dx}px, ${dy}px) scale(${s})`;
      });
    });

    window.setTimeout(done, duration + motionMs(80));
  });
}

const CARD_BACK_SRC = '/media/card-back.jpg';

function flyDrawToHand(
  layer: HTMLElement,
  from: DOMRect,
  to: DOMRect,
  faceSrc: string,
  duration = motionMs(520),
): Promise<void> {
  if (reducedMotion() || from.width === 0 || to.width === 0) return Promise.resolve();

  return new Promise((resolve) => {
    const shell = document.createElement('div');
    shell.className = 'mag-online-fly-draw';
    shell.style.left = `${from.left}px`;
    shell.style.top = `${from.top}px`;
    shell.style.width = `${from.width}px`;
    shell.style.height = `${from.height}px`;

    const flip = document.createElement('div');
    flip.className = 'mag-online-fly-draw__flip';

    const back = document.createElement('img');
    back.className = 'mag-online-fly-draw__face mag-online-fly-draw__face--back';
    back.src = CARD_BACK_SRC;
    back.alt = '';

    const front = document.createElement('img');
    front.className = 'mag-online-fly-draw__face mag-online-fly-draw__face--front';
    front.src = faceSrc;
    front.alt = '';

    flip.append(back, front);
    shell.append(flip);
    layer.appendChild(shell);

    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const s = uniformFlyScale(from, to);
    shell.style.borderRadius = flyBorderRadius(from.width, from.height);
    flip.querySelectorAll('img').forEach((face) => {
      face.style.borderRadius = flyBorderRadius(from.width, from.height);
    });

    let finished = false;
    const done = (): void => {
      if (finished) return;
      finished = true;
      shell.remove();
      resolve();
    };

    shell.addEventListener('transitionend', (ev) => {
      if (ev.target === shell) done();
    }, { once: true });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const easing = 'cubic-bezier(0.22, 0.92, 0.28, 1)';
        const t = `${duration}ms ${easing}`;
        shell.style.transition = `transform ${t}`;
        flip.style.transition = `transform ${t}`;
        shell.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${s})`;
        flip.style.transform = 'rotateY(180deg)';
      });
    });

    window.setTimeout(done, duration + motionMs(120));
  });
}

/** First discard after the deal: slide from the draw pile (~0.58s), flip at center (~0.35s). */
const STARTER_SLIDE_MS = 580;
const STARTER_HOLD_MS = 80;
const STARTER_FLIP_MS = 350;

function flyStarterToDiscard(
  layer: HTMLElement,
  from: DOMRect,
  to: DOMRect,
  faceSrc: string,
): Promise<void> {
  if (reducedMotion() || from.width === 0 || to.width === 0) return Promise.resolve();

  return new Promise((resolve) => {
    const shell = document.createElement('div');
    shell.className = 'mag-online-fly-starter mag-online-fly-starter--deal';
    shell.style.left = `${from.left}px`;
    shell.style.top = `${from.top}px`;
    shell.style.width = `${from.width}px`;
    shell.style.height = `${from.height}px`;

    const flip = document.createElement('div');
    flip.className = 'mag-online-fly-starter__flip';

    const back = document.createElement('img');
    back.className = 'mag-online-fly-starter__face mag-online-fly-starter__face--back';
    back.src = CARD_BACK_SRC;
    back.alt = '';

    const front = document.createElement('img');
    front.className = 'mag-online-fly-starter__face mag-online-fly-starter__face--front';
    front.src = faceSrc;
    front.alt = '';
    front.loading = 'eager';
    front.decoding = 'async';

    flip.append(back, front);
    shell.append(flip);
    layer.appendChild(shell);

    const dx = to.left - from.left;
    const dy = to.top - from.top;
    const s = uniformFlyScale(from, to);
    const radius = flyBorderRadius(from.width, from.height);
    shell.style.borderRadius = radius;
    flip.querySelectorAll('img').forEach((face) => {
      (face as HTMLElement).style.borderRadius = radius;
    });

    let finished = false;
    const done = (): void => {
      if (finished) return;
      finished = true;
      shell.remove();
      resolve();
    };

    const slideEasing = 'cubic-bezier(0.22, 1.08, 0.36, 1)';

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        shell.style.transition = `transform ${STARTER_SLIDE_MS}ms ${slideEasing}`;
        shell.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${s})`;
      });
    });

    window.setTimeout(() => {
      shell.classList.add('is-at-center');
      flip.classList.add('is-revealed');

      const onFlipEnd = (): void => {
        flip.removeEventListener('transitionend', onFlipEnd);
        done();
      };
      flip.addEventListener('transitionend', onFlipEnd);
      window.setTimeout(done, STARTER_FLIP_MS + 120);
    }, STARTER_SLIDE_MS + STARTER_HOLD_MS);
  });
}

export function mountOnlineTable(
  root: HTMLElement | null,
  opts: { lang: string; copy: OnlineCopy; initialRoom: string | null },
): void {
  if (!root) return;

  const lobby = root.querySelector<HTMLElement>('[data-online-lobby]');
  const table = root.querySelector<HTMLElement>('[data-online-table]');
  const createBtn = root.querySelector<HTMLButtonElement>('[data-online-create]');
  const joinBtn = root.querySelector<HTMLButtonElement>('[data-online-join]');
  const nameInput = root.querySelector<HTMLInputElement>('[data-online-name]');
  const lobbyHint = root.querySelector<HTMLElement>('[data-online-hint]');
  const lobbyIntro = root.querySelector<HTMLElement>('[data-online-lobby-intro]');
  const lobbyCodeRow = root.querySelector<HTMLElement>('.mag-online-code');
  const copyBtns = () => [...root.querySelectorAll<HTMLButtonElement>('[data-online-copy]')];
  const roomCodeEls = () => [...root.querySelectorAll<HTMLElement>('[data-online-room-code]')];
  const statusEl = root.querySelector<HTMLElement>('[data-online-status]');
  const tablePrompt = root.querySelector<HTMLElement>('[data-online-table-prompt]');
  const midEl = root.querySelector<HTMLElement>('[data-online-mid]');
  const lobbyField = root.querySelector<HTMLElement>('[data-online-lobby-field]');
  const hintsMode = root.querySelector<HTMLElement>('[data-online-hints-mode]');
  const lobbyCopyBtn = root.querySelector<HTMLButtonElement>('[data-online-lobby-copy]');
  const lobbyAddBotBtn = root.querySelector<HTMLButtonElement>('[data-online-lobby-add-bot]');
  const deckBtn = root.querySelector<HTMLButtonElement>('[data-online-deck]');
  const suitPicker = root.querySelector<HTMLElement>('[data-online-suit-picker]');
  const handEl = root.querySelector<HTMLElement>('[data-online-hand]');
  const leftEl = root.querySelector<HTMLElement>('[data-online-left]');
  const centerEl = root.querySelector<HTMLElement>('[data-online-center]');
  const rightEl = root.querySelector<HTMLElement>('[data-online-right]');
  const discardEl = root.querySelector<HTMLElement>('[data-online-discard]');
  const discardOpen = root.querySelector<HTMLElement>('[data-online-discard-open]');
  const discardZoom = root.querySelector<HTMLElement>('[data-online-discard-zoom]');
  const discardZoomImg = root.querySelector<HTMLImageElement>('[data-online-discard-zoom-img]');
  const discardZoomClose = root.querySelector<HTMLButtonElement>('[data-online-discard-zoom-close]');
  const discardZoomSheet = root.querySelector<HTMLButtonElement>('[data-online-discard-zoom-sheet]');
  const turnEl = root.querySelector<HTMLElement>('[data-online-turn]');
  const handShell = root.querySelector<HTMLElement>('[data-online-hand-shell]');
  const handFrame = root.querySelector<HTMLElement>('[data-online-hand-frame]');
  const handNameEl = root.querySelector<HTMLElement>('[data-online-hand-name]');
  const flyLayer = root.querySelector<HTMLElement>('[data-online-fly-layer]') ?? document.body;
  const endPanel = root.querySelector<HTMLElement>('[data-online-end]');
  const endKicker = root.querySelector<HTMLElement>('[data-online-end-kicker]');
  const endTitle = root.querySelector<HTMLElement>('[data-online-end-title]');
  const endWins = root.querySelector<HTMLElement>('[data-online-end-wins]');
  const rematchBtn = root.querySelector<HTMLButtonElement>('[data-online-rematch]');
  const newGameBtn = root.querySelector<HTMLButtonElement>('[data-online-new-game]');
  const joinAlertPanel = root.querySelector<HTMLElement>('[data-online-join-alert]');
  const joinAlertTitle = root.querySelector<HTMLElement>('[data-online-join-alert-title]');
  const joinAlertHint = root.querySelector<HTMLElement>('[data-online-join-alert-hint]');
  const joinAlertWait = root.querySelector<HTMLElement>('[data-online-join-alert-wait]');
  const joinAlertActions = root.querySelector<HTMLElement>('[data-online-join-alert-actions]');
  const joinRestartBtn = root.querySelector<HTMLButtonElement>('[data-online-join-restart]');
  const joinFinishBtn = root.querySelector<HTMLButtonElement>('[data-online-join-finish]');
  const endFireworks = root.querySelector<HTMLElement>('[data-online-end-fireworks]');

  let playerToken = localStorage.getItem(PLAYER_KEY) ?? '';
  let createBusy = false;
  let endRevealTimer: number | null = null;
  if (!playerToken) {
    playerToken = crypto.randomUUID();
    localStorage.setItem(PLAYER_KEY, playerToken);
  }

  let roomId = opts.initialRoom?.toUpperCase() ?? '';
  let pendingInviteRoom: string | null = opts.initialRoom?.toUpperCase() ?? null;
  let inviteUrl = '';
  let pollTimer: number | null = null;
  let lastVersion = -1;
  let view: ClientRoomView | null = null;
  let lastTurnSeat: number | null = null;
  let lastHandKey = '';
  let lastActionVersion = -1;
  let actionsBootstrapped = false;
  let paintQueue: Promise<void> = Promise.resolve();
  let dealIntroPlayed = false;
  let discardRenderHold = 0;
  let roomPaintBusy = false;
  let queuedRoomView: ClientRoomView | null = null;
  let displayedCenterImage: string | null = null;
  let handPlayHintsEnabled = false;
  const CARD_BACK = '/media/card-back.jpg';

  function nextSeatClockwise(seat: number): number {
    return (seat + SEATS - 1) % SEATS;
  }

  type OppVisualSlot = 'left' | 'center' | 'right';

  function opponentSeatIndices(): [number, number, number] | null {
    if (!view || view.youSeat === null) return null;
    const you = view.youSeat;
    return [(you + 1) % SEATS, (you + 2) % SEATS, (you + 3) % SEATS];
  }

  function elForOppSlot(slot: OppVisualSlot): HTMLElement | null {
    if (slot === 'left') return leftEl;
    if (slot === 'center') return centerEl;
    return rightEl;
  }

  function layoutForOpponentCount(count: number): OppVisualSlot[] {
    if (count <= 0) return [];
    if (count === 1) return ['center'];
    if (count === 2) return ['left', 'right'];
    return ['left', 'center', 'right'];
  }

  function occupiedOpponentSeats(): number[] {
    if (!view || view.youSeat === null) return [];
    const order = opponentSeatIndices();
    if (!order) return [];
    return order.filter((idx) => view!.seats[idx]);
  }

  function seatIdxForVisualSlot(slot: OppVisualSlot): number | null {
    const occ = occupiedOpponentSeats();
    const layout = layoutForOpponentCount(occ.length);
    const pos = layout.indexOf(slot);
    if (pos < 0) return null;
    return occ[pos] ?? null;
  }

  function oppElForSeat(seatIdx: number): HTMLElement | null {
    const occ = occupiedOpponentSeats();
    const layout = layoutForOpponentCount(occ.length);
    const pos = occ.indexOf(seatIdx);
    if (pos < 0) return null;
    return elForOppSlot(layout[pos]!);
  }

  function syncOpponentArenaLayout(): void {
    const arena = root.querySelector<HTMLElement>('[data-online-arena]');
    const count = occupiedOpponentSeats().length;
    arena?.setAttribute('data-opp-count', String(count));
  }

  function paintAllOpponents(
    activeTurnSeat: number | null,
    countFor?: (seatIdx: number) => number | undefined,
  ): void {
    syncOpponentArenaLayout();
    const slots: OppVisualSlot[] = ['left', 'center', 'right'];
    for (const slot of slots) {
      const el = elForOppSlot(slot);
      if (!el) continue;
      const seatIdx = seatIdxForVisualSlot(slot);
      if (seatIdx === null) {
        el.hidden = true;
        continue;
      }
      el.hidden = false;
      const override = countFor ? countFor(seatIdx) : undefined;
      paintOpponent(el, seatIdx, activeTurnSeat, override);
    }
  }

  function applyRoomFromServer(room: ClientRoomView, options?: { force?: boolean }): void {
    view = room;
    if (options?.force || view.version !== lastVersion) {
      lastVersion = view.version;
      paint();
    }
  }

  function pendingOpponentEvents(room: ClientRoomView = view!): RoomActionEvent[] {
    if (!room?.events) return [];
    const you = room.youSeat;
    return room.events
      .filter(
        (e) =>
          e.version > lastActionVersion &&
          !(you !== null && e.seat === you && e.kind !== 'reshuffle'),
      )
      .sort((a, b) => a.version - b.version);
  }

  function handCountAtReplay(
    seatIdx: number,
    pending: RoomActionEvent[],
    beforeEventIndex: number,
  ): number {
    if (!view) return 0;
    let count = view.seats[seatIdx]?.handCount ?? 0;
    for (let j = pending.length - 1; j >= beforeEventIndex; j -= 1) {
      const ev = pending[j]!;
      if (ev.seat !== seatIdx) continue;
      if (ev.kind === 'draw') count -= 1;
      else if (ev.kind === 'play') count += 1;
    }
    return Math.max(0, count);
  }

  function replayOpponentStacks(pending: RoomActionEvent[], beforeEventIndex: number): void {
    if (!view || view.youSeat === null) return;
    paintAllOpponents(view.turnSeat, (seatIdx) => handCountAtReplay(seatIdx, pending, beforeEventIndex));
  }

  async function api(action: string, extra: Record<string, unknown> = {}): Promise<Response> {
    return fetch('/api/online/room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action,
        lang: opts.lang,
        roomId,
        playerToken,
        name: nameInput?.value?.trim() || undefined,
        ...extra,
      }),
    });
  }

  function setStatus(text: string): void {
    if (!statusEl) return;
    if (text) {
      statusEl.removeAttribute('hidden');
      statusEl.textContent = text;
    } else {
      statusEl.textContent = '';
      statusEl.setAttribute('hidden', '');
    }
  }

  function showLobby(show: boolean): void {
    if (lobby) lobby.hidden = !show;
    if (table) table.hidden = show;
  }

  function resetSessionState(): void {
    lastVersion = -1;
    actionsBootstrapped = false;
    lastActionVersion = -1;
    lastHandKey = '';
    lastTurnSeat = null;
    dealIntroPlayed = false;
    view = null;
  }

  function seatWins(seatIdx: number): number {
    return view?.wins?.[seatIdx] ?? 0;
  }

  function formatSeatLabel(seatIdx: number): string {
    const seat = view?.seats[seatIdx];
    if (!seat) return '—';
    const wins = seatWins(seatIdx);
    return wins > 0 ? `${seat.name} · ${wins}` : seat.name;
  }

  function formatTableWins(): string {
    if (!view?.wins) return '';
    const parts: string[] = [];
    view.seats.forEach((s, i) => {
      if (!s) return;
      const w = view!.wins[i] ?? 0;
      if (w < 1) return;
      parts.push(`${s.name}: ${w}`);
    });
    return parts.join(' · ');
  }

  function needDealIntro(): boolean {
    if (dealIntroPlayed || !view || view.phase !== 'playing') return false;
    if (!view.yourHand || view.yourHand.length !== HAND_SIZE) return false;
    return view.seats.every((s) => !s || s.handCount === HAND_SIZE);
  }

  function seatHostForDeal(seatIdx: number): HTMLElement | null {
    if (!view || view.youSeat === null) return null;
    if (seatIdx === view.youSeat) return handEl;
    return oppElForSeat(seatIdx);
  }

  function resetDealPlaybackFlags(): void {
    actionsBootstrapped = false;
    lastActionVersion = -1;
    lastHandKey = '';
    dealIntroPlayed = false;
    displayedCenterImage = null;
    if (handEl) handEl.innerHTML = '';
    clearCenterDiscard();
  }

  /** Drop stale paints and show lobby-at-table (copy link / add bot) immediately. */
  function snapRoomToLobbyAtTable(room: ClientRoomView): void {
    view = room;
    lastVersion = room.version;
    lastActionVersion = -1;
    actionsBootstrapped = false;
    lastTurnSeat = null;
    lastHandKey = '';
    dealIntroPlayed = true;
    discardRenderHold = 0;
    displayedCenterImage = null;
    roomPaintBusy = false;
    queuedRoomView = null;
    paintQueue = Promise.resolve();

    hideEndScreen();
    if (joinAlertPanel) joinAlertPanel.hidden = true;
    table?.classList.remove(
      'is-finished',
      'mag-online-table--turn-you',
      'mag-online-table--turn-left',
      'mag-online-table--turn-center',
      'mag-online-table--turn-right',
    );
    deckBtn?.classList.remove('is-start-ready', 'is-ready', 'is-active', 'is-shuffling', 'is-starter-launch');
    if (suitPicker) {
      suitPicker.hidden = true;
      suitPicker.classList.remove('is-closing');
    }
    setHandPlayHintsEnabled(false);
    handFrame?.classList.remove('is-active');

    showLobby(false);
    if (handEl) handEl.innerHTML = '';
    clearCenterDiscard();
    clearFlyLayer();
    hideTablePrompt();
    closeDiscardZoom();
    syncHintsModeChrome();
    paintLobbyAtTable();
    paintHandHeader();
  }

  function handCardMetrics(): { w: number; h: number; gap: number } {
    const style = getComputedStyle(root);
    const w = parseFloat(style.getPropertyValue('--online-card-w')) || 48;
    const h = parseFloat(style.getPropertyValue('--online-card-h')) || 67;
    return { w, h, gap: 4 };
  }

  function handCardSlotRect(index: number, total: number): DOMRect {
    const host = handEl?.getBoundingClientRect() ?? handShell?.getBoundingClientRect();
    if (!host) return new DOMRect();
    const { w, h, gap } = handCardMetrics();
    const span = total * w + Math.max(0, total - 1) * gap;
    const startX = host.left + Math.max(8, (host.width - span) / 2);
    return new DOMRect(startX + index * (w + gap), host.bottom - h - 6, w, h);
  }

  function handDealTargetRect(): DOMRect {
    return handCardSlotRect(0, HAND_SIZE);
  }

  function clearRoomFromUrl(): void {
    const url = new URL(window.location.href);
    url.searchParams.delete('room');
    window.history.replaceState({}, '', url);
  }

  function returnToLobby(message?: string): void {
    stopPoll();
    roomId = '';
    inviteUrl = '';
    resetSessionState();
    clearRoomFromUrl();
    roomPaintBusy = false;
    queuedRoomView = null;
    paintQueue = Promise.resolve();
    discardRenderHold = 0;
    displayedCenterImage = null;
    showLobby(true);
    if (message) setStatus(message);
    else setStatus(opts.copy.need_players);
    hideEndScreen();
    if (joinAlertPanel) joinAlertPanel.hidden = true;
    table?.classList.remove('is-finished');
  }

  function formatMidGameJoinTitle(
    pending: { seat: number; name: string }[],
  ): string {
    if (pending.length < 1) return '';
    if (pending.length === 1) {
      return opts.copy.mid_game_join_one.replace('{name}', pending[0]!.name);
    }
    const names = pending.map((p) => p.name).join(', ');
    return opts.copy.mid_game_join_many.replace('{names}', names);
  }

  function paintMidGameJoinAlert(): void {
    if (!view || !joinAlertPanel) return;
    const pending = view.pendingMidGameJoins ?? [];
    const showChoice = view.needsMidGameJoinChoice && pending.length > 0;
    const showJoinerWait = view.youWaitingNextHand && pending.length > 0;

    if (showChoice) {
      joinAlertPanel.hidden = false;
      if (joinAlertTitle) joinAlertTitle.textContent = formatMidGameJoinTitle(pending);
      joinAlertHint?.removeAttribute('hidden');
      joinAlertWait?.setAttribute('hidden', '');
      joinAlertActions?.removeAttribute('hidden');
      return;
    }

    if (showJoinerWait) {
      joinAlertPanel.hidden = false;
      if (joinAlertTitle) joinAlertTitle.textContent = formatMidGameJoinTitle(pending);
      joinAlertHint?.setAttribute('hidden', '');
      if (joinAlertWait) {
        joinAlertWait.hidden = false;
        joinAlertWait.textContent = opts.copy.mid_game_join_you_wait;
      }
      joinAlertActions?.setAttribute('hidden', '');
      return;
    }

    joinAlertPanel.hidden = true;

    if (
      view.phase === 'playing' &&
      view.youWaitingNextHand &&
      pending.length < 1
    ) {
      setStatus(opts.copy.mid_game_join_next_hand);
    }
  }

  function clearEndRevealTimer(): void {
    if (endRevealTimer !== null) {
      window.clearTimeout(endRevealTimer);
      endRevealTimer = null;
    }
  }

  function stopEndFireworks(): void {
    if (!endFireworks) return;
    endFireworks.hidden = true;
    endFireworks.innerHTML = '';
  }

  function startEndFireworks(): void {
    if (!endFireworks || reducedMotion()) return;
    stopEndFireworks();
    endFireworks.hidden = false;
    const colors = ['#ecd09b', '#c9a96c', '#f4a27a', '#8eb5ff', '#9de8b8', '#e8a0d8'];
    for (let i = 0; i < 32; i += 1) {
      const piece = document.createElement('span');
      piece.className = 'mag-online-firework';
      const angle = (i / 32) * Math.PI * 2 + Math.random() * 0.35;
      const dist = 22 + Math.random() * 38;
      piece.style.setProperty('--fx-tx', `${Math.cos(angle) * dist}vmin`);
      piece.style.setProperty('--fx-ty', `${Math.sin(angle) * dist * 0.85}vmin`);
      piece.style.setProperty('--fx-d', `${0.75 + Math.random() * 0.55}s`);
      piece.style.setProperty('--fx-delay', `${Math.random() * 0.2}s`);
      piece.style.setProperty('--fx-c', colors[i % colors.length]!);
      piece.style.left = `${38 + Math.random() * 24}%`;
      piece.style.top = `${32 + Math.random() * 22}%`;
      endFireworks.appendChild(piece);
    }
  }

  function fillEndScreenContent(): void {
    if (!view) return;
    const youWon = view.winnerSeat !== null && view.winnerSeat === view.youSeat;
    const winnerName =
      view.winnerSeat !== null ? (view.seats[view.winnerSeat]?.name ?? '—') : null;
    if (endKicker) {
      endKicker.hidden = false;
      endKicker.textContent = opts.copy.game_over;
    }
    if (endTitle) {
      if (winnerName) {
        endTitle.textContent = youWon
          ? opts.copy.win_magister
          : opts.copy.magister_crowned.replace('{name}', winnerName);
      } else {
        endTitle.textContent = opts.copy.game_over;
      }
    }
    const winsLine = formatTableWins();
    if (endWins) {
      if (winsLine) {
        endWins.hidden = false;
        endWins.textContent = `${opts.copy.wins_at_table}: ${winsLine}`;
      } else {
        endWins.hidden = true;
        endWins.textContent = '';
      }
    }
  }

  function hideEndScreen(): void {
    clearEndRevealTimer();
    stopEndFireworks();
    table?.classList.remove('is-finished');
    if (endPanel) endPanel.hidden = true;
  }

  function revealEndScreenNow(): void {
    if (!view || !endPanel || view.phase !== 'finished') return;
    fillEndScreenContent();
    table?.classList.add('is-finished');
    endPanel.hidden = false;
    startEndFireworks();
  }

  function paintEndScreen(): void {
    if (!view || !endPanel) return;
    if (view.phase !== 'finished') {
      hideEndScreen();
      return;
    }

    if (discardRenderHold > 0) {
      table?.classList.remove('is-finished');
      endPanel.hidden = true;
      if (endRevealTimer === null) {
        endRevealTimer = window.setTimeout(() => {
          endRevealTimer = null;
          paintEndScreen();
        }, motionMs(48));
      }
      return;
    }

    clearEndRevealTimer();
    table?.classList.remove('is-finished');
    endPanel.hidden = true;

    const delay = reducedMotion() ? 0 : motionMs(280);
    endRevealTimer = window.setTimeout(() => {
      endRevealTimer = null;
      if (!view || view.phase !== 'finished') return;
      if (discardRenderHold > 0) {
        paintEndScreen();
        return;
      }
      revealEndScreenNow();
    }, delay);
  }

  function stopPoll(): void {
    if (pollTimer !== null) {
      window.clearInterval(pollTimer);
      pollTimer = null;
    }
  }

  function startPoll(): void {
    stopPoll();
    pollTimer = window.setInterval(() => {
      void refresh();
    }, 1200);
  }

  function publicSiteOrigin(): string {
    const raw = root.dataset.siteOrigin?.trim();
    if (raw) {
      try {
        return new URL(raw).origin;
      } catch {
        /* use fallback */
      }
    }
    return window.location.origin;
  }

  function buildInviteUrl(id: string): string {
    const path = `/${opts.lang}/app?room=${encodeURIComponent(id)}`;
    return new URL(path, publicSiteOrigin()).href;
  }

  function rememberInviteUrl(url: string | undefined): void {
    if (typeof url === 'string' && url.length > 8) inviteUrl = url;
  }

  async function refresh(): Promise<void> {
    if (!roomId) return;
    const res = await api('state');
    const data = (await res.json()) as {
      ok?: boolean;
      room?: ClientRoomView;
      error?: string;
      inviteUrl?: string;
    };
    if (!data.ok || !data.room) {
      if (data.error === 'missing') returnToLobby(opts.copy.room_missing);
      return;
    }
    rememberInviteUrl(data.inviteUrl);
    if (roomPaintBusy) {
      queuedRoomView = data.room;
      return;
    }
    applyRoomFromServer(data.room);
  }

  function seatElement(seatIdx: number | null): HTMLElement | null {
    if (seatIdx === null || !view || view.youSeat === null) return null;
    if (seatIdx === view.youSeat) return handEl;
    return oppElForSeat(seatIdx);
  }

  function pileRect(el: HTMLElement | null): DOMRect {
    if (!el) return new DOMRect(0, 0, 0, 0);
    const pile =
      el.querySelector<HTMLElement>('[data-seat-cards]') ??
      el.querySelector<HTMLElement>('.mag-online-mini-stack');
    return (pile ?? el).getBoundingClientRect();
  }

  function opponentCardMetrics(): { cardW: number; step: number } {
    const style = getComputedStyle(root);
    const cardW = parseFloat(style.getPropertyValue('--online-deck-w')) || 56;
    return { cardW, step: cardW / 3 };
  }

  function roomHintsEnabled(): boolean {
    return view?.hintsEnabled !== false;
  }

  function refreshHandPlayableState(): void {
    if (!handEl || !view?.yourHand) return;
    const yourTurnGate =
      view.phase === 'playing' && view.isYourTurn && !view.needChooseSuit;
    const hintGate = handPlayHintsEnabled && yourTurnGate;
    const ids = new Set(view.yourHand.map((c) => c.id));
    handEl.querySelectorAll<HTMLButtonElement>('.mag-online-hand-card').forEach((btn) => {
      const id = btn.dataset.cardId ?? '';
      if (!ids.has(id)) {
        btn.remove();
        return;
      }
      const card = view!.yourHand!.find((c) => c.id === id);
      if (!card) return;
      const playable = hintGate && canPlayOnView(card, view!);
      btn.classList.toggle('is-playable', playable);
      btn.disabled = handPlayHintsEnabled ? !playable : !yourTurnGate;
    });
  }

  function rejectIllegalCardPlay(btn: HTMLButtonElement): void {
    btn.classList.remove('is-rejected');
    void btn.offsetWidth;
    btn.classList.add('is-rejected');
    btn.addEventListener(
      'animationend',
      () => {
        btn.classList.remove('is-rejected');
      },
      { once: true },
    );
  }

  function readHintsEnabledFromUi(): boolean {
    const off = root.querySelector<HTMLInputElement>('[data-online-hints-value="off"]');
    return !off?.checked;
  }

  function readHintsPreference(): boolean {
    return localStorage.getItem(HINTS_PREF_KEY) !== 'off';
  }

  function persistHintsPreference(enabled: boolean): void {
    localStorage.setItem(HINTS_PREF_KEY, enabled ? 'on' : 'off');
  }

  let hintsRadiosSyncSilent = false;

  function syncHintsRadiosFromView(): void {
    const on = root.querySelector<HTMLInputElement>('[data-online-hints-value="on"]');
    const off = root.querySelector<HTMLInputElement>('[data-online-hints-value="off"]');
    if (!on || !off) return;
    const enabled = view ? view.hintsEnabled !== false : readHintsPreference();
    hintsRadiosSyncSilent = true;
    on.checked = enabled;
    off.checked = !enabled;
    hintsRadiosSyncSilent = false;
  }

  function syncHintsModeChrome(): void {
    const noHints = view?.hintsEnabled === false;
    table?.classList.toggle('mag-online-table--no-hints', noHints);
    syncHintsRadiosFromView();
  }

  function setHandPlayHintsEnabled(enabled: boolean): void {
    handPlayHintsEnabled = enabled;
    refreshHandPlayableState();
  }

  function opponentDrawLandingRect(host: HTMLElement, countAfter: number): DOMRect {
    const stack = host.querySelector<HTMLElement>('[data-seat-stack]');
    const cardsHost = stack?.querySelector<HTMLElement>('[data-seat-cards]');
    const base = cardsHost?.getBoundingClientRect() ?? pileRect(host);
    const { cardW, step } = opponentCardMetrics();
    const idx = Math.max(0, countAfter - 1);
    return new DOMRect(base.left + idx * step, base.top, cardW, base.height);
  }

  function appendOpponentStackCard(stackEl: HTMLElement, count: number, ariaLabel: string): void {
    const host = stackEl.querySelector<HTMLElement>('[data-seat-cards]');
    if (!host) return;
    const current = host.querySelectorAll('.mag-online-opp-hand__card').length;
    if (current >= count) {
      stackEl.dataset.stackCount = String(count);
      return;
    }
    const { cardW, step } = opponentCardMetrics();
    const idx = count - 1;
    host.style.width = `${cardW + step * idx}px`;
    const card = document.createElement('span');
    card.className = 'mag-online-opp-hand__card';
    card.style.left = `${idx * step}px`;
    card.style.zIndex = String(idx);
    host.appendChild(card);
    host.setAttribute('aria-label', ariaLabel);
    stackEl.dataset.stackCount = String(count);
  }

  function trimOpponentStackToCount(stackEl: HTMLElement, count: number, ariaLabel: string): void {
    const host = stackEl.querySelector<HTMLElement>('[data-seat-cards]');
    if (!host) return;
    let len = host.querySelectorAll('.mag-online-opp-hand__card').length;
    while (len > count) {
      host.lastElementChild?.remove();
      len -= 1;
    }
    if (len < count) {
      renderOpponentStack(stackEl, count, ariaLabel);
      return;
    }
    const { cardW, step } = opponentCardMetrics();
    const show = Math.max(count, 0);
    host.style.width = show > 0 ? `${cardW + step * (show - 1)}px` : '0';
    host.setAttribute('aria-label', ariaLabel);
    stackEl.dataset.stackCount = String(count);
  }

  function renderOpponentStack(stackEl: HTMLElement, count: number, ariaLabel: string): void {
    const host = stackEl.querySelector<HTMLElement>('[data-seat-cards]');
    if (!host) return;
    const { cardW, step } = opponentCardMetrics();
    const show = Math.min(Math.max(count, 0), 14);
    host.style.width = show > 0 ? `${cardW + step * (show - 1)}px` : '0';
    host.setAttribute('aria-label', ariaLabel);
    host.replaceChildren();
    for (let i = 0; i < show; i += 1) {
      const card = document.createElement('span');
      card.className = 'mag-online-opp-hand__card';
      card.style.left = `${i * step}px`;
      card.style.zIndex = String(i);
      host.appendChild(card);
    }
    stackEl.dataset.stackCount = String(count);
  }

  function syncOpponentStackCount(stackEl: HTMLElement, count: number, ariaLabel: string): void {
    const host = stackEl.querySelector<HTMLElement>('[data-seat-cards]');
    if (!host) return;
    let len = host.querySelectorAll('.mag-online-opp-hand__card').length;
    if (len === count && stackEl.dataset.stackCount === String(count)) {
      host.setAttribute('aria-label', ariaLabel);
      return;
    }
    if (len > count) {
      trimOpponentStackToCount(stackEl, count, ariaLabel);
      return;
    }
    if (len === 0 && count > 0) {
      for (let c = 1; c <= count; c += 1) {
        appendOpponentStackCard(stackEl, c, ariaLabel);
      }
      return;
    }
    if (len < count) {
      for (let c = len + 1; c <= count; c += 1) {
        appendOpponentStackCard(stackEl, c, ariaLabel);
      }
      return;
    }
    renderOpponentStack(stackEl, count, ariaLabel);
  }

  function paintOpponent(
    el: HTMLElement | null,
    seatIdx: number,
    activeTurnSeat: number | null = view?.turnSeat ?? null,
    handCountOverride?: number,
  ): void {
    if (!el || !view) return;
    const seat = view.seats[seatIdx];
    if (!seat) return;
    const nameText = el.querySelector<HTMLElement>('[data-seat-name-text]');
    const onlineDot = el.querySelector<HTMLElement>('[data-seat-online]');
    if (nameText) nameText.textContent = formatSeatLabel(seatIdx);
    if (onlineDot) onlineDot.hidden = !seat.online;
    el.dataset.seatIndex = String(seatIdx);
    const removeBtn = el.querySelector<HTMLButtonElement>('[data-seat-remove]');
    if (removeBtn) {
      removeBtn.hidden = !(view.phase === 'lobby' && seat.isBot);
    }
    const stack = el.querySelector<HTMLElement>('[data-seat-stack]');
    if (stack && handCountOverride !== undefined) {
      const label = seat ? `${seat.name}: ${handCountOverride}` : '';
      syncOpponentStackCount(stack, handCountOverride, label);
    }
    if (stack) {
      const isTurn = view.phase === 'playing' && activeTurnSeat === seatIdx;
      stack.classList.toggle('is-active', isTurn);
      el.classList.toggle('is-turn-seat', isTurn);
    }
  }

  function paintActiveTurn(turnSeat: number | null, updateHandHints = true): void {
    if (!view || view.youSeat === null) return;
    const you = view.youSeat;
    paintAllOpponents(turnSeat);

    const yourTurn =
      view.phase === 'playing' &&
      turnSeat === you &&
      !view.needChooseSuit;
    const yourSuitPick = view.phase === 'playing' && turnSeat === you && view.needChooseSuit;

    handFrame?.classList.toggle('is-active', yourTurn || yourSuitPick);
    if (deckBtn) {
      deckBtn.disabled = !yourTurn;
      deckBtn.classList.toggle('is-ready', yourTurn);
      deckBtn.classList.toggle('is-active', yourTurn);
    }
    if (updateHandHints) {
      setHandPlayHintsEnabled(yourTurn && roomHintsEnabled());
    }
    const playing = view.phase === 'playing';
    table?.classList.toggle('mag-online-table--turn-you', turnSeat === you && playing);
    table?.classList.toggle(
      'mag-online-table--turn-left',
      playing && seatIdxForVisualSlot('left') === turnSeat,
    );
    table?.classList.toggle(
      'mag-online-table--turn-center',
      playing && seatIdxForVisualSlot('center') === turnSeat,
    );
    table?.classList.toggle(
      'mag-online-table--turn-right',
      playing && seatIdxForVisualSlot('right') === turnSeat,
    );
  }

  function captureHandCardRects(): Map<HTMLElement, DOMRect> {
    const map = new Map<HTMLElement, DOMRect>();
    handEl?.querySelectorAll<HTMLElement>('.mag-online-hand-card').forEach((el) => {
      if (!el.classList.contains('is-flying')) map.set(el, el.getBoundingClientRect());
    });
    return map;
  }

  function animateHandReflow(before: Map<HTMLElement, DOMRect>): void {
    if (reducedMotion()) return;
    requestAnimationFrame(() => {
      before.forEach((rect, el) => {
        if (!el.isConnected || el.classList.contains('is-flying')) return;
        const now = el.getBoundingClientRect();
        const dx = rect.left - now.left;
        const dy = rect.top - now.top;
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) return;
        el.style.transition = 'none';
        el.style.transform = `translate(${dx}px, ${dy}px)`;
        requestAnimationFrame(() => {
          el.style.transition = `transform ${motionMs(280)}ms cubic-bezier(0.22, 0.92, 0.28, 1)`;
          el.style.transform = '';
          const clear = (): void => {
            el.style.transition = '';
          };
          el.addEventListener('transitionend', clear, { once: true });
        });
      });
    });
  }

  function paintHandHeader(): void {
    if (!view || view.youSeat === null || !handNameEl) return;
    const you = view.seats[view.youSeat];
    const nameText = handNameEl.querySelector<HTMLElement>('[data-hand-name-text]');
    const onlineDot = handNameEl.querySelector<HTMLElement>('[data-hand-online]');
    if (nameText) {
      nameText.textContent =
        view.youSeat !== null ? formatSeatLabel(view.youSeat) : you?.name ?? '—';
    }
    if (onlineDot) onlineDot.hidden = !(you?.online ?? true);
  }

  function createHandCardButton(card: {
    id: string;
    image: string;
    suit: string;
    rank: string;
  }): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mag-online-hand-card';
    btn.dataset.cardId = card.id;
    btn.disabled = true;
    btn.classList.remove('is-playable');
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = '';
    img.width = 220;
    img.height = 308;
    img.draggable = false;
    btn.appendChild(img);
    return btn;
  }

  function createDealHandCard(card: {
    id: string;
    image: string;
  }): HTMLButtonElement {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mag-online-hand-card mag-online-hand-card--deal';
    btn.dataset.cardId = card.id;
    btn.disabled = true;
    const flip = document.createElement('span');
    flip.className = 'mag-online-hand-card__flip';
    const back = document.createElement('img');
    back.className = 'mag-online-hand-card__face mag-online-hand-card__face--back';
    back.src = CARD_BACK;
    back.alt = '';
    back.draggable = false;
    const front = document.createElement('img');
    front.className = 'mag-online-hand-card__face mag-online-hand-card__face--front';
    front.src = card.image;
    front.alt = '';
    front.draggable = false;
    flip.append(back, front);
    btn.append(flip);
    return btn;
  }

  function normalizeDealHand(room: ClientRoomView): void {
    if (!handEl || !room.yourHand) return;
    handEl.innerHTML = '';
    room.yourHand.forEach((card) => {
      handEl.appendChild(createHandCardButton(card));
    });
    lastHandKey = room.yourHand.map((c) => c.id).join('|');
  }

  function settleDealHandInPlace(room: ClientRoomView): void {
    if (!handEl || !room.yourHand) return;
    handEl.querySelectorAll<HTMLButtonElement>('.mag-online-hand-card--deal').forEach((btn) => {
      const front = btn.querySelector<HTMLImageElement>('.mag-online-hand-card__face--front');
      btn.classList.remove('mag-online-hand-card--deal', 'is-revealed');
      btn.disabled = true;
      btn.classList.remove('is-playable');
      if (front) {
        front.removeAttribute('class');
        btn.replaceChildren(front);
      }
    });
    lastHandKey = room.yourHand.map((c) => c.id).join('|');
  }

  function handCardFlySource(btn: HTMLButtonElement): { from: DOMRect; src: string } {
    const face =
      btn.querySelector<HTMLImageElement>('.mag-online-hand-card__face--front') ??
      btn.querySelector<HTMLImageElement>('img');
    let from = (face ?? btn).getBoundingClientRect();
    if (from.width < 2 || from.height < 2) {
      from = btn.getBoundingClientRect();
    }
    return { from, src: face?.src ?? '' };
  }

  function insertDrawnCardBackLast(card: {
    id: string;
    image: string;
    suit: string;
    rank: string;
  }): HTMLButtonElement {
    if (!handEl) return createDealHandCard(card);
    let btn = handEl.querySelector<HTMLButtonElement>(`[data-card-id="${card.id}"]`);
    if (!btn) {
      btn = createDealHandCard(card);
      handEl.appendChild(btn);
    } else {
      handEl.appendChild(btn);
    }
    handEl.scrollLeft = handEl.scrollWidth;
    btn.disabled = true;
    btn.classList.remove('is-playable');
    return btn;
  }

  async function revealDrawnCard(btn: HTMLButtonElement): Promise<void> {
    if (reducedMotion()) {
      btn.classList.add('is-revealed');
      await sleep(motionMs(80));
    } else {
      btn.classList.add('is-revealed');
      await sleep(motionMs(520));
    }
    btn.classList.remove('mag-online-hand-card--deal', 'is-revealed');
    const front = btn.querySelector<HTMLImageElement>('.mag-online-hand-card__face--front');
    if (front) {
      front.removeAttribute('class');
      btn.replaceChildren(front);
    }
  }

  function jokerSuitForPlayEvent(ev: RoomActionEvent): Suit | null {
    if (ev.chosenSuit) return ev.chosenSuit;
    if (!ev.image || !view?.topDiscard) return null;
    if (view.topDiscard.image === ev.image && view.topDiscard.suit === 'joker') {
      return view.topDiscard.chosenSuit ?? null;
    }
    return jokerSuitForImage(ev.image);
  }

  function centerTargetForFly(): DOMRect {
    const to = discardTargetRect();
    if (to.width > 2 && to.height > 2) return to;
    const shell = root.querySelector<HTMLElement>('.mag-online-discard-shell');
    const shellRect = shell?.getBoundingClientRect();
    if (shellRect && shellRect.width > 2) return shellRect;
    const { w, h } = handCardMetrics();
    const zone = root.querySelector<HTMLElement>('.mag-online-table-zone')?.getBoundingClientRect();
    if (!zone) return to;
    return new DOMRect(zone.left + zone.width / 2 - w / 2, zone.top + zone.height / 2 - h / 2, w, h);
  }

  function hideTablePrompt(): void {
    if (tablePrompt) tablePrompt.hidden = true;
    deckBtn?.classList.remove('is-start-ready');
  }

  function setMidDeckCentered(centered: boolean): void {
    midEl?.classList.toggle('mag-online-mid--deck-centered', centered);
  }

  async function slideDeckToPlayPosition(): Promise<void> {
    if (!deckBtn || !midEl) {
      setMidDeckCentered(false);
      return;
    }
    if (reducedMotion() || !midEl.classList.contains('mag-online-mid--deck-centered')) {
      hideTablePrompt();
      setMidDeckCentered(false);
      return;
    }

    const fromRect = deckBtn.getBoundingClientRect();
    hideTablePrompt();
    setMidDeckCentered(false);

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const toRect = deckBtn.getBoundingClientRect();
          const dx = fromRect.left - toRect.left;
          const dy = fromRect.top - toRect.top;
          const slideMs = motionMs(540);
          deckBtn.style.transition = 'none';
          deckBtn.style.transform = `translate(${dx}px, ${dy}px)`;
          requestAnimationFrame(() => {
            deckBtn.style.transition = `transform ${slideMs}ms cubic-bezier(0.22, 0.92, 0.28, 1)`;
            deckBtn.style.transform = '';
            window.setTimeout(() => {
              deckBtn.style.transition = '';
              deckBtn.style.transform = '';
              resolve();
            }, slideMs + motionMs(40));
          });
        });
      });
    });
  }

  function paintLobbyAtTable(): void {
    setMidDeckCentered(true);
    if (handEl) handEl.innerHTML = '';
    lastHandKey = '';
    clearCenterDiscard();
    clearFlyLayer();
    paintAllOpponents(null, () => 0);
    paintHandHeader();
    handFrame?.classList.remove('is-active');

    const ready = view?.readyToStart ?? false;
    const filled = view?.seatedCount ?? 0;
    const max = view?.maxSeats ?? opts.copy.max_seats;
    const waitingForPlayers = !ready;

    lobbyField?.toggleAttribute('hidden', !waitingForPlayers);
    midEl?.classList.toggle('mag-online-mid--lobby-wait', waitingForPlayers);
    if (lobbyAddBotBtn) lobbyAddBotBtn.disabled = filled >= max;
    syncHintsRadiosFromView();

    if (ready) {
      if (tablePrompt) {
        tablePrompt.textContent = opts.copy.tap_deck_to_start;
        tablePrompt.hidden = false;
      }
      if (deckBtn) {
        deckBtn.disabled = false;
        deckBtn.classList.add('is-start-ready');
        deckBtn.classList.remove('is-ready', 'is-active');
        deckBtn.setAttribute('aria-label', opts.copy.tap_deck_to_start);
      }
      setStatus(opts.copy.tap_deck_to_start);
    } else {
      if (tablePrompt) tablePrompt.hidden = true;
      if (deckBtn) {
        deckBtn.disabled = true;
        deckBtn.classList.remove('is-start-ready', 'is-ready', 'is-active');
        deckBtn.setAttribute('aria-label', opts.copy.deck);
      }
      setStatus(`${opts.copy.waiting} (${filled}/${max})`);
    }
  }

  async function revealDealHand(): Promise<void> {
    if (!handEl) return;
    const cards = [...handEl.querySelectorAll<HTMLElement>('.mag-online-hand-card--deal')];
    if (reducedMotion()) {
      cards.forEach((btn) => btn.classList.add('is-revealed'));
      await sleep(motionMs(80));
      return;
    }
    await Promise.all(
      cards.map(
        (btn, i) =>
          new Promise<void>((resolve) => {
            window.setTimeout(() => {
              btn.classList.add('is-revealed');
              resolve();
            }, motionMs(40 + i * 38));
          }),
      ),
    );
    await sleep(motionMs(520));
  }

  async function flyDealBurst(
    targets: DOMRect[],
    onLanded?: (index: number) => void,
  ): Promise<void> {
    const from = deckRect();
    await Promise.all(
      targets.map(
        (to, i) =>
          new Promise<void>((resolve) => {
            window.setTimeout(() => {
              void flyCard(
                flyLayer,
                from,
                to,
                CARD_BACK,
                motionMs(360),
                onLanded
                  ? () => {
                      onLanded(i);
                    }
                  : undefined,
              ).then(resolve);
            }, motionMs(i * 42));
          }),
      ),
    );
  }

  function insertDrawnCardLast(card: {
    id: string;
    image: string;
    suit: string;
    rank: string;
  }): HTMLButtonElement {
    if (!handEl) return createHandCardButton(card);
    let btn = handEl.querySelector<HTMLButtonElement>(`[data-card-id="${card.id}"]`);
    if (!btn) {
      btn = createHandCardButton(card);
      handEl.appendChild(btn);
    } else {
      handEl.appendChild(btn);
    }
    handEl.scrollLeft = handEl.scrollWidth;
    return btn;
  }

  function syncHandFromView(room: ClientRoomView, opts?: { preserveOrder?: boolean }): void {
    if (!handEl || !room.yourHand) return;
    const ids = new Set(room.yourHand.map((c) => c.id));
    handEl.querySelectorAll<HTMLButtonElement>('.mag-online-hand-card').forEach((btn) => {
      if (!ids.has(btn.dataset.cardId ?? '')) btn.remove();
    });

    if (opts?.preserveOrder) {
      const have = new Set(
        [...handEl.querySelectorAll<HTMLButtonElement>('.mag-online-hand-card')].map(
          (btn) => btn.dataset.cardId ?? '',
        ),
      );
      room.yourHand.forEach((card) => {
        if (have.has(card.id)) return;
        const btn = createHandCardButton(card);
        handEl.appendChild(btn);
      });
      handEl.querySelectorAll<HTMLButtonElement>('.mag-online-hand-card').forEach((btn) => {
        btn.disabled = true;
        btn.classList.remove('is-playable');
      });
      refreshHandPlayableState();
      return;
    }

    const ordered: HTMLButtonElement[] = [];
    room.yourHand.forEach((card) => {
      let btn = handEl.querySelector<HTMLButtonElement>(`[data-card-id="${card.id}"]`);
      if (!btn) {
        btn = createHandCardButton(card);
      }
      btn.disabled = true;
      btn.classList.remove('is-playable');
      ordered.push(btn);
    });
    ordered.forEach((btn) => handEl.appendChild(btn));
    refreshHandPlayableState();
  }

  function canPlayOnView(
    card: { suit: string; rank: string },
    room: ClientRoomView,
  ): boolean {
    const top = room.topDiscard;
    if (!top || !room.isYourTurn || room.needChooseSuit) return false;
    if (card.suit === 'joker') return true;
    const eff = top.suit === 'joker' ? top.chosenSuit : top.suit;
    if (!eff) return true;
    return card.rank === top.rank || card.suit === eff;
  }

  function paintTurn(): void {
    if (!view || !turnEl) return;
    if (view.phase === 'finished' && view.winnerSeat !== null) {
      turnEl.textContent =
        view.winnerSeat === view.youSeat
          ? opts.copy.win
          : `${view.seats[view.winnerSeat]?.name ?? ''}`;
    } else if (view.needChooseSuit) {
      turnEl.textContent = opts.copy.choose_suit;
    } else {
      turnEl.textContent = '';
    }
    lastTurnSeat = view.turnSeat;
  }

  function syncDiscardBadge(jokerSuit: Suit | null): void {
    if (!discardEl) return;
    discardEl.querySelector('.mag-online-discard-suit')?.remove();
    if (!jokerSuit) return;
    const badge = document.createElement('span');
    badge.className = `mag-online-discard-suit mag-online-discard-suit--${jokerSuit}`;
    badge.setAttribute('aria-label', suitLabel(jokerSuit));
    const glyph = document.createElement('span');
    glyph.className = 'mag-online-discard-suit__glyph';
    glyph.setAttribute('aria-hidden', 'true');
    glyph.textContent = suitGlyph(jokerSuit);
    badge.append(glyph);
    discardEl.appendChild(badge);
  }

  function ensureDiscardLayers(): { top: HTMLImageElement; under: HTMLImageElement } | null {
    if (!discardEl) return null;
    let under = discardEl.querySelector<HTMLImageElement>('.mag-online-card__face--under');
    let top = discardEl.querySelector<HTMLImageElement>('.mag-online-card__face--top');
    if (!top || !under) {
      discardEl.innerHTML = '';
      under = document.createElement('img');
      under.className = 'mag-online-card__face mag-online-card__face--under';
      under.alt = '';
      under.width = 440;
      under.height = 616;
      under.decoding = 'async';
      under.hidden = true;

      top = document.createElement('img');
      top.className = 'mag-online-card__face mag-online-card__face--top';
      top.alt = '';
      top.width = 440;
      top.height = 616;
      top.loading = 'eager';
      top.decoding = 'async';

      discardEl.append(under, top);
    }
    return { top, under };
  }

  function clearCenterDiscard(): void {
    closeDiscardZoom();
    if (discardEl) discardEl.innerHTML = '';
    displayedCenterImage = null;
  }

  function topDiscardImageSrc(): string | null {
    const top = discardEl?.querySelector<HTMLImageElement>('.mag-online-card__face--top');
    const src = top?.currentSrc || top?.src;
    if (!src || src.endsWith('#') || src === window.location.href) return null;
    return src;
  }

  function closeDiscardZoom(): void {
    if (!discardZoom) return;
    discardZoom.hidden = true;
    if (discardZoomImg) {
      discardZoomImg.removeAttribute('src');
      discardZoomImg.alt = '';
    }
    table?.classList.remove('is-discard-zoomed');
    discardOpen?.setAttribute('aria-expanded', 'false');
  }

  function openDiscardZoom(): void {
    const src = topDiscardImageSrc();
    if (!src || !discardZoom || !discardZoomImg) return;
    discardZoomImg.src = src;
    discardZoomImg.alt = opts.copy.discard;
    discardZoom.hidden = false;
    table?.classList.add('is-discard-zoomed');
    discardOpen?.setAttribute('aria-expanded', 'true');
    discardZoomClose?.focus({ preventScroll: true });
  }

  function toggleDiscardZoom(): void {
    if (discardZoom && !discardZoom.hidden) closeDiscardZoom();
    else openDiscardZoom();
  }

  function jokerSuitForImage(image: string): Suit | null {
    const top = view?.topDiscard;
    if (!top || top.image !== image || top.suit !== 'joker') return null;
    return top.chosenSuit ?? null;
  }

  function mountCenterFromFly(flyImg: HTMLImageElement, image: string, jokerSuit: Suit | null = null): void {
    const layers = ensureDiscardLayers();
    if (!layers || !discardEl) return;
    const { under } = layers;
    const oldTop = discardEl.querySelector<HTMLImageElement>('.mag-online-card__face--top');

    if (oldTop?.src && displayedCenterImage && displayedCenterImage !== image) {
      under.src = oldTop.src;
      under.hidden = false;
    }

    flyImg.className = 'mag-online-card__face mag-online-card__face--top';
    flyImg.style.cssText = '';
    flyImg.alt = '';
    flyImg.width = 440;
    flyImg.height = 616;
    flyImg.removeAttribute('draggable');
    oldTop?.remove();
    discardEl.appendChild(flyImg);

    displayedCenterImage = image;
    syncDiscardBadge(jokerSuit);
  }

  function flyCardOntoCenter(
    from: DOMRect,
    to: DOMRect,
    src: string,
    jokerSuit: Suit | null = null,
    duration = motionMs(460),
  ): Promise<void> {
    return flyCard(flyLayer, from, to, src, duration, (img) => {
      mountCenterFromFly(img, src, jokerSuit);
    });
  }

  function setCenterDiscard(image: string, jokerSuit: Suit | null = null): void {
    if (!image) return;
    const layers = ensureDiscardLayers();
    if (!layers) return;
    const { top, under } = layers;
    const suit = jokerSuit ?? jokerSuitForImage(image);

    if (displayedCenterImage && displayedCenterImage !== image && top.src) {
      under.src = top.src;
      under.hidden = false;
    }

    if (top.src !== image) {
      top.src = image;
    }
    displayedCenterImage = image;
    syncDiscardBadge(suit);
  }

  function renderDiscardForPlay(image: string, jokerSuit: Suit | null = null): void {
    setCenterDiscard(image, jokerSuit ?? jokerSuitForImage(image));
  }

  function renderDiscard(): void {
    if (!view) return;
    if (!view.topDiscard) {
      clearCenterDiscard();
      return;
    }
    const t = view.topDiscard;
    const suit = t.suit === 'joker' ? t.chosenSuit : null;
    if (displayedCenterImage === t.image) {
      syncDiscardBadge(suit);
      return;
    }
    setCenterDiscard(t.image, suit);
  }

  function deckRect(): DOMRect {
    const deckImg = deckBtn?.querySelector('img');
    return deckImg?.getBoundingClientRect() ?? new DOMRect(0, 0, 0, 0);
  }

  function discardTargetRect(): DOMRect {
    const face = discardEl?.querySelector<HTMLElement>(
      '.mag-online-card__face--top, .mag-online-card__face',
    );
    if (face) return face.getBoundingClientRect();
    const shell = root.querySelector<HTMLElement>('.mag-online-discard-shell');
    return shell?.getBoundingClientRect() ?? discardEl?.getBoundingClientRect() ?? new DOMRect();
  }

  function opponentPlayFromRect(host: HTMLElement): DOMRect {
    if (host === handEl) {
      const card = handEl.querySelector<HTMLElement>('.mag-online-hand-card');
      return card?.getBoundingClientRect() ?? pileRect(host);
    }
    const top = host.querySelector<HTMLElement>('.mag-online-opp-hand__card:last-child');
    return top?.getBoundingClientRect() ?? pileRect(host);
  }

  async function animateOpponentPlay(
    ev: RoomActionEvent,
    pending: RoomActionEvent[],
    eventIndex: number,
  ): Promise<void> {
    const host = seatElement(ev.seat);
    if (!host || !ev.image) return;
    const pile =
      host === handEl ? host : host.querySelector<HTMLElement>('.mag-online-mini-stack');
    const stack =
      host === handEl ? null : host.querySelector<HTMLElement>('[data-seat-stack]');
    const from = opponentPlayFromRect(host);
    const to = discardTargetRect();
    const toRect = to.width > 0 ? to : discardTargetRect();

    const countAfter = handCountAtReplay(ev.seat, pending, eventIndex + 1);
    const seat = view?.seats[ev.seat];
    const labelAfter = seat ? `${seat.name}: ${countAfter}` : '';
    if (stack) {
      syncOpponentStackCount(stack, countAfter, labelAfter);
    }

    pile?.classList.add('is-acting');
    discardRenderHold += 1;
    try {
      const jokerSuit = jokerSuitForPlayEvent(ev);
      await flyCardOntoCenter(from, toRect, ev.image, jokerSuit, motionMs(460));
      if (ev.image) {
        syncDiscardBadge(jokerSuit);
      }
    } finally {
      pile?.classList.remove('is-acting');
      discardRenderHold = Math.max(0, discardRenderHold - 1);
    }
  }

  async function dealHandToYou(room: ClientRoomView): Promise<void> {
    if (!handEl || !room.yourHand || room.yourHand.length !== HAND_SIZE) return;
    handEl.innerHTML = '';
    const pile = pileRect(handFrame ?? handEl);
    const targets = Array.from({ length: HAND_SIZE }, () => pile);
    const cards = room.yourHand;
    let landed = 0;
    await flyDealBurst(targets, (landIndex) => {
      landed = Math.max(landed, landIndex + 1);
      const card = cards[landIndex];
      if (card) handEl.appendChild(createDealHandCard(card));
    });
    for (let i = landed; i < HAND_SIZE; i += 1) {
      handEl.appendChild(createDealHandCard(cards[i]!));
    }
    await revealDealHand();
    settleDealHandInPlace(room);
  }

  async function dealHandToOpponent(
    stackEl: HTMLElement | null,
    host: HTMLElement | null,
    seatIdx: number,
  ): Promise<void> {
    if (!stackEl || !host || !view || !view.seats[seatIdx]) return;
    const seat = seatIdx;
    const seatInfo = view.seats[seat];
    const label = seatInfo ? `${seatInfo.name}: ${HAND_SIZE}` : '';
    const pile = pileRect(host);
    const targets = Array.from({ length: HAND_SIZE }, () => pile);
    let landed = 0;
    await flyDealBurst(targets, (landIndex) => {
      landed = Math.max(landed, landIndex + 1);
      appendOpponentStackCard(stackEl, landIndex + 1, label);
    });
    if (landed < HAND_SIZE) {
      syncOpponentStackCount(stackEl, HAND_SIZE, label);
    }
  }

  async function runDealIntro(): Promise<void> {
    if (!view || view.phase !== 'playing') {
      dealIntroPlayed = true;
      return;
    }
    if (handEl) handEl.innerHTML = '';
    clearCenterDiscard();

    if (!view || reducedMotion()) {
      hideTablePrompt();
      setMidDeckCentered(false);
      dealIntroPlayed = true;
      if (view && view.youSeat !== null) {
        paintAllOpponents(view.turnSeat, () => HAND_SIZE);
      }
      if (view?.yourHand) normalizeDealHand(view);
      else lastHandKey = '';
      renderDiscard();
      return;
    }

    await slideDeckToPlayPosition();
    if (!view || view.phase !== 'playing') {
      dealIntroPlayed = true;
      return;
    }

    syncOpponentArenaLayout();
    const occ = occupiedOpponentSeats();
    const layout = layoutForOpponentCount(occ.length);
    for (const slot of ['left', 'center', 'right'] as const) {
      const el = elForOppSlot(slot);
      const stack = el?.querySelector<HTMLElement>('[data-seat-stack]');
      if (stack) renderOpponentStack(stack, 0, '');
    }

    deckBtn?.classList.add('is-shuffling');
    await sleep(motionMs(420));
    deckBtn?.classList.remove('is-shuffling');

    const you = view.youSeat;
    if (you !== null) {
      for (let i = 0; i < occ.length; i += 1) {
        const seatIdx = occ[i]!;
        const host = elForOppSlot(layout[i]!);
        const stack = host?.querySelector<HTMLElement>('[data-seat-stack]');
        if (stack && host) {
          await dealHandToOpponent(stack, host, seatIdx);
          await sleep(motionMs(90));
        }
      }
      await dealHandToYou(view);
    }

    if (!view || view.phase !== 'playing') {
      dealIntroPlayed = true;
      return;
    }

    if (you !== null) {
      paintAllOpponents(view.turnSeat, () => HAND_SIZE);
    }

    const starter = view.topDiscard;
    if (starter) {
      await sleep(140);
      const to =
        root.querySelector<HTMLElement>('.mag-online-discard-shell')?.getBoundingClientRect() ??
        discardTargetRect();
      const discardShell = root.querySelector<HTMLElement>('.mag-online-discard-shell');
      discardRenderHold += 1;
      deckBtn?.classList.add('is-starter-launch');
      try {
        await flyStarterToDiscard(flyLayer, deckRect(), to, starter.image);
        displayedCenterImage = null;
        setCenterDiscard(starter.image, starter.suit === 'joker' ? starter.chosenSuit : null);
        discardShell?.classList.add('is-starter-reveal');
        window.setTimeout(() => discardShell?.classList.remove('is-starter-reveal'), 520);
      } finally {
        deckBtn?.classList.remove('is-starter-launch');
        discardRenderHold = Math.max(0, discardRenderHold - 1);
      }
    }

    dealIntroPlayed = true;
  }

  async function animateReshuffle(ev: RoomActionEvent): Promise<void> {
    const bursts = Math.min(Math.max(ev.recycled ?? 4, 3), 7);
    const from = (discardEl ?? flyLayer).getBoundingClientRect();
    const to = deckRect();
    if (deckBtn) deckBtn.classList.add('is-shuffling');

    const flights: Promise<void>[] = [];
    for (let i = 0; i < bursts; i += 1) {
      const spread = from;
      const slice = new DOMRect(
        spread.left + spread.width * 0.15,
        spread.top + spread.height * 0.2 + i * 6,
        spread.width * 0.7,
        spread.height * 0.65,
      );
      flights.push(
        new Promise((resolve) => {
          window.setTimeout(() => {
            void flyCard(flyLayer, slice, to, CARD_BACK, motionMs(380)).then(resolve);
          }, motionMs(i * 55));
        }),
      );
    }
    await Promise.all(flights);
    window.setTimeout(() => deckBtn?.classList.remove('is-shuffling'), motionMs(400));
    void ev;
  }

  async function animateOpponentDraw(
    ev: RoomActionEvent,
    pending: RoomActionEvent[],
    eventIndex: number,
  ): Promise<void> {
    const host = seatElement(ev.seat);
    if (!host) return;
    const stack = host.querySelector<HTMLElement>('[data-seat-stack]');
    if (!stack) return;

    const countBefore = handCountAtReplay(ev.seat, pending, eventIndex);
    const countAfter = handCountAtReplay(ev.seat, pending, eventIndex + 1);
    const seat = view?.seats[ev.seat];
    const labelBefore = seat ? `${seat.name}: ${countBefore}` : '';
    const labelAfter = seat ? `${seat.name}: ${countAfter}` : '';

    syncOpponentStackCount(stack, countBefore, labelBefore);

    const from = deckRect();
    const to = opponentDrawLandingRect(host, countAfter);

    stack.classList.add('is-acting');
    try {
      await flyCard(flyLayer, from, to, CARD_BACK, motionMs(420), () => {
        appendOpponentStackCard(stack, countAfter, labelAfter);
      });
      stack.classList.add('is-receiving');
      await sleep(motionMs(320));
      stack.classList.remove('is-receiving');
    } finally {
      stack.classList.remove('is-acting');
    }
    void ev;
  }

  async function processActionEvents(
    afterDealIntro = false,
  ): Promise<{ opponentReplayed: boolean; discardReplayed: boolean }> {
    if (!view?.events) return { opponentReplayed: false, discardReplayed: false };

    if (!actionsBootstrapped && !afterDealIntro) {
      actionsBootstrapped = true;
      const maxEv = view.events.reduce((m, e) => Math.max(m, e.version), -1);
      lastActionVersion = Math.max(lastActionVersion, maxEv);
      return { opponentReplayed: false, discardReplayed: false };
    }
    if (afterDealIntro) {
      actionsBootstrapped = true;
    }

    const you = view.youSeat;
    const pending = view.events
      .filter((e) => e.version > lastActionVersion)
      .sort((a, b) => a.version - b.version);

    if (pending.length === 0) return { opponentReplayed: false, discardReplayed: false };

    discardRenderHold += 1;
    let discardReplayed = false;

    setHandPlayHintsEnabled(false);

    try {
      replayOpponentStacks(pending, 0);

      for (let i = 0; i < pending.length; i += 1) {
        const ev = pending[i]!;
        lastActionVersion = ev.version;
        if (you !== null && ev.seat === you && ev.kind !== 'reshuffle') continue;

        await sleep(BOT_TURN_GAP_MS);
        if (ev.kind === 'play') {
          replayOpponentStacks(pending, i);
        }
        paintActiveTurn(ev.seat, false);

        if (ev.kind === 'play') {
          await animateOpponentPlay(ev, pending, i);
          discardReplayed = true;
          if (view.youSeat !== null) {
            paintAllOpponents(ev.seat, (seatIdx) => handCountAtReplay(seatIdx, pending, i + 1));
          }
        } else if (ev.kind === 'draw') {
          replayOpponentStacks(pending, i);
          await animateOpponentDraw(ev, pending, i);
        } else if (ev.kind === 'reshuffle') {
          await animateReshuffle(ev);
          discardReplayed = true;
        }
      }

      paintActiveTurn(view.turnSeat);
      return { opponentReplayed: true, discardReplayed };
    } finally {
      discardRenderHold = Math.max(0, discardRenderHold - 1);
    }
  }

  async function paintInner(): Promise<void> {
    if (!view) return;
    roomPaintBusy = true;
    try {
    roomCodeEls().forEach((el) => {
      el.textContent = view!.id;
    });
    syncHintsModeChrome();

    if (view.phase === 'lobby') {
      if (view.youSeat !== null) {
        showLobby(false);
        paintLobbyAtTable();
        lastTurnSeat = null;
        actionsBootstrapped = false;
        lastActionVersion = -1;
        dealIntroPlayed = true;
        roomPaintBusy = false;
        return;
      }
      hideTablePrompt();
      showLobby(true);
      const filled = view.seatedCount;
      const max = view.maxSeats;
      setStatus(`${opts.copy.waiting} (${filled}/${max})`);
      lastTurnSeat = null;
      actionsBootstrapped = false;
      lastActionVersion = -1;
      dealIntroPlayed = true;
      roomPaintBusy = false;
      return;
    }

    showLobby(false);
    lobbyField?.setAttribute('hidden', '');
    midEl?.classList.remove('mag-online-mid--lobby-wait');
    deckBtn?.classList.remove('is-start-ready');
    if (deckBtn) deckBtn.setAttribute('aria-label', opts.copy.draw);
    if (!needDealIntro()) {
      hideTablePrompt();
      setMidDeckCentered(false);
    }

    let dealIntroJustFinished = false;

    if (needDealIntro()) {
      if (handEl) handEl.innerHTML = '';
      lastHandKey = '';
      clearCenterDiscard();
      await runDealIntro();
      dealIntroJustFinished = true;
    }

    const { opponentReplayed, discardReplayed } = await processActionEvents(dealIntroJustFinished);

    if (!opponentReplayed) {
      paintActiveTurn(view.turnSeat);
    } else {
      refreshHandPlayableState();
    }

    if (!view.topDiscard && discardEl) {
      discardEl.innerHTML = '';
    } else if (
      !discardReplayed &&
      discardRenderHold === 0 &&
      !dealIntroJustFinished &&
      pendingOpponentEvents().length === 0
    ) {
      renderDiscard();
    }

    if (handEl && view.yourHand) {
        if (dealIntroJustFinished) {
          refreshHandPlayableState();
        } else {
          const handKey = view.yourHand.map((c) => c.id).join('|');
          if (handKey !== lastHandKey) {
            lastHandKey = handKey;
            handEl.innerHTML = '';
            view.yourHand.forEach((card) => {
              const btn = createHandCardButton(card);
              handEl.appendChild(btn);
            });
          }
          refreshHandPlayableState();
        }
      }

      paintHandHeader();
      paintTurn();

    if (suitPicker && !suitPicker.classList.contains('is-closing')) {
      if (view.needChooseSuit && view.phase === 'playing') {
        openSuitPicker();
      } else {
        suitPicker.hidden = true;
      }
    }

    paintMidGameJoinAlert();
    } finally {
      roomPaintBusy = false;
      if (view?.phase === 'finished') paintEndScreen();
      else if (view && view.phase !== 'finished') hideEndScreen();
      if (queuedRoomView && queuedRoomView.version !== view?.version) {
        const next = queuedRoomView;
        queuedRoomView = null;
        applyRoomFromServer(next);
      }
    }
  }

  function paint(): void {
    if (!view) return;
    paintQueue = paintQueue
      .then(() => paintInner())
      .catch((error) => {
        console.error('mag-online paint failed', error);
      });
  }

  function whenPainted(): Promise<void> {
    paint();
    return paintQueue;
  }

  function suitLabel(suit: Suit): string {
    const map: Record<Suit, string> = {
      hearts: opts.copy.suit_hearts,
      diamonds: opts.copy.suit_diamonds,
      clubs: opts.copy.suit_clubs,
      spades: opts.copy.suit_spades,
    };
    return map[suit];
  }

  function suitGlyph(suit: Suit): string {
    const map: Record<Suit, string> = {
      hearts: '♥',
      diamonds: '♦',
      clubs: '♣',
      spades: '♠',
    };
    return map[suit];
  }

  function clearFlyLayer(): void {
    flyLayer
      .querySelectorAll('.mag-online-fly-card, .mag-online-fly-draw')
      .forEach((node) => node.remove());
  }

  function openSuitPicker(): void {
    if (!suitPicker) return;
    suitPicker.classList.remove('is-closing');
    suitPicker.hidden = false;
  }

  function collapseSuitPicker(): Promise<void> {
    if (!suitPicker || suitPicker.hidden) return Promise.resolve();
    if (reducedMotion()) {
      suitPicker.hidden = true;
      suitPicker.classList.remove('is-closing');
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      suitPicker.classList.add('is-closing');
      const finish = (): void => {
        suitPicker.classList.remove('is-closing');
        suitPicker.hidden = true;
        resolve();
      };
      suitPicker.addEventListener('transitionend', finish, { once: true });
      window.setTimeout(finish, motionMs(320));
    });
  }

  function endYourTurnChrome(): void {
    setHandPlayHintsEnabled(false);
    handFrame?.classList.remove('is-active');
    if (deckBtn) {
      deckBtn.classList.remove('is-active', 'is-ready');
      deckBtn.disabled = true;
    }
    clearFlyLayer();
    handEl?.querySelectorAll('.mag-online-hand-card.is-flying').forEach((el) => {
      el.classList.remove('is-flying');
    });
  }

  function syncTurnChrome(): void {
    if (!view || !deckBtn) return;
    const isTurn = view.isYourTurn && !view.needChooseSuit && view.phase === 'playing';
    deckBtn.disabled = !isTurn;
    deckBtn.classList.toggle('is-ready', isTurn);
    deckBtn.classList.toggle('is-active', isTurn);
    handFrame?.classList.toggle(
      'is-active',
      view.phase === 'playing' &&
        view.youSeat !== null &&
        (view.turnSeat === view.youSeat || view.needChooseSuit),
    );
  }

  async function createRoom(): Promise<void> {
    if (createBusy) return;
    const name = nameInput?.value?.trim() ?? '';
    if (!name) {
      setStatus(opts.copy.enter_name);
      nameInput?.focus();
      return;
    }
    createBusy = true;
    try {
      localStorage.setItem(DISPLAY_NAME_KEY, name);
      setStatus('…');
      const res = await api('create', { hintsEnabled: readHintsPreference() });
      const data = (await res.json()) as {
        ok?: boolean;
        roomId?: string;
        inviteUrl?: string;
        playerToken?: string;
        room?: ClientRoomView;
        error?: string;
      };
      if (!data.ok || !data.roomId) {
        setStatus(opts.copy.error_generic);
        return;
      }
      roomId = data.roomId;
      rememberInviteUrl(data.inviteUrl ?? buildInviteUrl(roomId));
      if (data.playerToken) {
        playerToken = data.playerToken;
        localStorage.setItem(PLAYER_KEY, playerToken);
      }
      const url = new URL(window.location.href);
      url.searchParams.set('room', roomId);
      window.history.replaceState({}, '', url);
      lastVersion = -1;
      actionsBootstrapped = false;
      lastActionVersion = -1;
      if (data.room) {
        applyRoomFromServer(data.room, { force: true });
        await whenPainted();
      } else {
        await refresh();
      }
      startPoll();
      setStatus('');
    } finally {
      createBusy = false;
    }
  }

  function showCreateLobbyUi(): void {
    createBtn?.removeAttribute('hidden');
    joinBtn?.setAttribute('hidden', '');
    if (lobbyHint) lobbyHint.textContent = opts.copy.join_hint;
    root.querySelector<HTMLElement>('[data-online-lobby]')?.setAttribute('data-lobby-mode', 'create');
    if (lobbyIntro) lobbyIntro.textContent = opts.copy.new_game_hint;
    lobbyCodeRow?.setAttribute('hidden', '');
    pendingInviteRoom = null;
  }

  function showInviteJoinUi(code: string): void {
    pendingInviteRoom = code.toUpperCase();
    createBtn?.setAttribute('hidden', '');
    joinBtn?.removeAttribute('hidden');
    root.querySelector<HTMLElement>('[data-online-lobby]')?.setAttribute('data-lobby-mode', 'invite');
    if (lobbyIntro) lobbyIntro.textContent = opts.copy.join_invite_hint;
    lobbyCodeRow?.setAttribute('hidden', '');
    setStatus('');
    const saved = localStorage.getItem(DISPLAY_NAME_KEY);
    if (saved && nameInput && !nameInput.value.trim()) nameInput.value = saved;
    window.setTimeout(() => nameInput?.focus(), 80);
  }

  async function joinRoom(id: string): Promise<void> {
    const name = nameInput?.value?.trim() ?? '';
    if (!name) {
      setStatus(opts.copy.enter_name);
      nameInput?.focus();
      return;
    }
    localStorage.setItem(DISPLAY_NAME_KEY, name);
    roomId = id.toUpperCase();
    const res = await api('join');
    const data = (await res.json()) as { ok?: boolean; error?: string; inviteUrl?: string };
    if (!data.ok) {
      if (data.error === 'full') setStatus(opts.copy.room_full);
      else if (data.error === 'missing') returnToLobby(opts.copy.room_missing);
      else setStatus(opts.copy.error_generic);
      return;
    }
    rememberInviteUrl(data.inviteUrl ?? buildInviteUrl(roomId));
    const url = new URL(window.location.href);
    url.searchParams.set('room', roomId);
    window.history.replaceState({}, '', url);
    lastVersion = -1;
    actionsBootstrapped = false;
    lastActionVersion = -1;
    showCreateLobbyUi();
    await refresh();
    startPoll();
  }

  createBtn?.addEventListener('click', () => void createRoom());

  joinBtn?.addEventListener('click', () => {
    const id = pendingInviteRoom ?? roomId;
    if (id) void joinRoom(id);
  });

  nameInput?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    if (pendingInviteRoom) void joinRoom(pendingInviteRoom);
    else if (!roomId) void createRoom();
  });

  const resolveMidGameJoin = (mode: 'restart' | 'wait_next'): void => {
    void (async () => {
      if (!roomId) return;
      if (joinAlertPanel) joinAlertPanel.hidden = true;
      const res = await api('resolveJoin', { mode });
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
      if (!data.ok || !data.room) {
        paintMidGameJoinAlert();
        setStatus(opts.copy.error_generic);
        return;
      }
      if (mode === 'restart') {
        snapRoomToLobbyAtTable(data.room);
      } else {
        applyRoomFromServer(data.room);
      }
    })();
  };

  joinRestartBtn?.addEventListener('click', () => resolveMidGameJoin('restart'));
  joinFinishBtn?.addEventListener('click', () => resolveMidGameJoin('wait_next'));

  rematchBtn?.addEventListener('click', () => {
    void (async () => {
      if (!roomId) return;
      stopPoll();
      if (endPanel) endPanel.hidden = true;
      table?.classList.remove('is-finished');
      const res = await api('rematch');
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
      if (!data.ok || !data.room) {
        setStatus(opts.copy.error_generic);
        if (view?.phase === 'finished') {
          if (endPanel) endPanel.hidden = false;
          table?.classList.add('is-finished');
        }
        startPoll();
        return;
      }
      snapRoomToLobbyAtTable(data.room);
      startPoll();
    })();
  });

  newGameBtn?.addEventListener('click', () => {
    returnToLobby();
    showCreateLobbyUi();
    setStatus('');
    const saved = localStorage.getItem(DISPLAY_NAME_KEY);
    if (saved && nameInput && !nameInput.value.trim()) nameInput.value = saved;
    window.setTimeout(() => nameInput?.focus(), 80);
  });

  async function copyInviteToClipboard(): Promise<boolean> {
    const url = inviteUrl || (roomId ? buildInviteUrl(roomId) : '');
    if (!url) return false;
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      setStatus(url);
      return false;
    }
  }

  async function copyInviteLink(): Promise<void> {
    if (await copyInviteToClipboard()) setStatus(opts.copy.copied);
  }

  async function copyInviteFromLobbyButton(btn: HTMLButtonElement): Promise<void> {
    const defaultLabel = btn.dataset.defaultLabel ?? opts.copy.menu_copy;
    if (!(await copyInviteToClipboard())) return;
    btn.textContent = opts.copy.copied;
    btn.disabled = true;
    window.setTimeout(() => {
      btn.textContent = defaultLabel;
      btn.disabled = false;
    }, 2200);
  }

  async function addBotToRoom(): Promise<void> {
    if (!roomId) return;
    const res = await api('addBot');
    const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
    if (data.room) {
      view = data.room;
      lastVersion = view.version;
      paint();
    } else if (data.error === 'full') {
      setStatus(opts.copy.room_full);
    } else {
      setStatus(opts.copy.error_generic);
    }
  }

  async function removeBotAt(seatIdx: number): Promise<void> {
    if (!roomId) return;
    const res = await api('removeBot', { seat: seatIdx });
    const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
    if (data.room) {
      applyRoomFromServer(data.room);
    } else {
      setStatus(opts.copy.error_generic);
    }
  }

  const menuToggle = document.querySelector<HTMLButtonElement>('[data-app-online-menu-toggle]');
  const menuPanel = document.querySelector<HTMLElement>('[data-app-online-menu-panel]');

  function closeTableMenu(): void {
    menuPanel?.setAttribute('hidden', '');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }

  menuToggle?.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!menuPanel) return;
    const open = menuPanel.hasAttribute('hidden');
    if (open) {
      menuPanel.removeAttribute('hidden');
      menuToggle.setAttribute('aria-expanded', 'true');
    } else {
      closeTableMenu();
    }
  });

  document.addEventListener('click', (event) => {
    if (!menuPanel || menuPanel.hasAttribute('hidden')) return;
    const inMenu = (event.target as Element).closest('[data-app-online-menu]');
    if (!inMenu) closeTableMenu();
  });

  document.querySelector('[data-app-online-menu-copy]')?.addEventListener('click', () => {
    void copyInviteLink();
    closeTableMenu();
  });

  document.querySelector('[data-app-online-menu-bot]')?.addEventListener('click', () => {
    void addBotToRoom().then(() => closeTableMenu());
  });

  hintsMode?.addEventListener('change', () => {
    if (hintsRadiosSyncSilent) return;
    const enabled = readHintsEnabledFromUi();
    persistHintsPreference(enabled);
    if (!roomId || view?.phase !== 'lobby') return;
    void (async () => {
      const res = await api('setHints', { hintsEnabled: enabled });
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
      if (data.ok && data.room) {
        applyRoomFromServer(data.room);
        return;
      }
      syncHintsRadiosFromView();
      setStatus(opts.copy.error_generic);
    })();
  });

  if (lobbyCopyBtn) {
    lobbyCopyBtn.dataset.defaultLabel = lobbyCopyBtn.textContent?.trim() ?? opts.copy.menu_copy;
    lobbyCopyBtn.addEventListener('click', () => {
      void copyInviteFromLobbyButton(lobbyCopyBtn);
    });
  }

  lobbyAddBotBtn?.addEventListener('click', () => {
    void addBotToRoom();
  });

  root.querySelector('[data-online-arena]')?.addEventListener('click', (event) => {
    const btn = (event.target as Element).closest<HTMLButtonElement>('[data-seat-remove]');
    if (!btn || btn.hidden) return;
    event.preventDefault();
    const player = btn.closest<HTMLElement>('[data-online-left], [data-online-center], [data-online-right]');
    const seatRaw = player?.dataset.seatIndex;
    const seatIdx = seatRaw !== undefined ? Number.parseInt(seatRaw, 10) : NaN;
    if (!Number.isInteger(seatIdx)) return;
    void removeBotAt(seatIdx);
  });

  document.querySelector('[data-app-online-menu-restart]')?.addEventListener('click', () => {
    void (async () => {
      if (!roomId) return;
      const res = await api('restart');
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView; error?: string };
      if (data.room) {
        snapRoomToLobbyAtTable(data.room);
        startPoll();
      } else {
        setStatus(opts.copy.error_generic);
      }
      closeTableMenu();
    })();
  });

  const onDraw = async (): Promise<void> => {
    if (!roomId || !view) return;
    const prevIds = new Set(view.yourHand?.map((c) => c.id) ?? []);

    const res = await api('draw');
    const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView };
    if (!data.room) return;

    const serverView = data.room;
    const drawn =
      serverView.yourHand?.find((c) => !prevIds.has(c.id)) ??
      (serverView.yourHand?.length ? serverView.yourHand[0] : null);

    if (!drawn || !handEl || !deckBtn) {
      view = serverView;
      lastVersion = serverView.version;
      paint();
      return;
    }

    roomPaintBusy = true;
    try {
      const slot = insertDrawnCardBackLast(drawn);
      const toSlot = slot.getBoundingClientRect();
      const from = deckBtn.querySelector('img')?.getBoundingClientRect() ?? deckRect();
      slot.style.visibility = 'hidden';

      if (from.width > 0 && toSlot.width > 0) {
        await flyCard(flyLayer, from, toSlot, CARD_BACK, motionMs(500));
      }
      slot.style.visibility = '';
      await revealDrawnCard(slot);

      view = serverView;
      lastVersion = serverView.version;
      lastHandKey = serverView.yourHand?.map((c) => c.id).join('|') ?? '';
      setHandPlayHintsEnabled(false);
      refreshHandPlayableState();
      paintHandHeader();
      paintActiveTurn(serverView.turnSeat, false);

      for (const e of serverView.events) {
        if (
          e.version > lastActionVersion &&
          serverView.youSeat !== null &&
          e.seat === serverView.youSeat &&
          e.kind !== 'reshuffle'
        ) {
          lastActionVersion = e.version;
        }
      }

      await sleep(BOT_TURN_GAP_MS);
    } finally {
      roomPaintBusy = false;
    }

    paint();
  };

  const onDeckClick = async (): Promise<void> => {
    if (!roomId || !view) return;
    if (view.phase === 'lobby' && view.readyToStart) {
      const res = await api('start');
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView };
      if (data.room) {
        resetDealPlaybackFlags();
        applyRoomFromServer(data.room);
        await whenPainted();
      }
      return;
    }
    await onDraw();
  };

  deckBtn?.addEventListener('click', () => void onDeckClick());

  handEl?.addEventListener('click', (event) => {
    const btn = (event.target as Element).closest<HTMLButtonElement>('.mag-online-hand-card');
    if (!btn?.dataset.cardId || btn.disabled) return;
    void (async () => {
      const cardId = btn.dataset.cardId!;
      const cardMeta = view?.yourHand?.find((c) => c.id === cardId);
      if (
        cardMeta &&
        view &&
        view.hintsEnabled === false &&
        !canPlayOnView(cardMeta, view)
      ) {
        rejectIllegalCardPlay(btn);
        return;
      }
      const { from, src: flySrc } = handCardFlySource(btn);
      const src = flySrc || cardMeta?.image || '';
      const to = centerTargetForFly();
      const flyJokerSuit =
        cardMeta?.suit === 'joker' ? (view?.topDiscard?.chosenSuit ?? null) : null;

      const beforeLayout = captureHandCardRects();
      discardRenderHold += 1;

      const flyPromise =
        src.length > 0
          ? flyCardOntoCenter(from, to, src, flyJokerSuit, motionMs(420))
          : Promise.resolve();

      btn.classList.add('is-flying');
      requestAnimationFrame(() => {
        btn.remove();
        animateHandReflow(beforeLayout);
      });

      let res: Response;
      try {
        [res] = await Promise.all([api('play', { cardId }), flyPromise]);
      } finally {
        discardRenderHold = Math.max(0, discardRenderHold - 1);
      }
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView };
      if (data.room) {
        const actionVersionBefore = lastActionVersion;
        view = data.room;
        lastVersion = view.version;
        for (const e of view.events) {
          if (
            e.version > actionVersionBefore &&
            view.youSeat !== null &&
            e.seat === view.youSeat &&
            e.kind !== 'reshuffle'
          ) {
            lastActionVersion = e.version;
          }
        }
        setHandPlayHintsEnabled(false);
        const botsPending = pendingOpponentEvents(view);
        const playedJoker = cardMeta?.suit === 'joker';
        if (botsPending.length === 0 && !playedJoker) {
          const t = view.topDiscard;
          const suit = t?.suit === 'joker' ? t.chosenSuit : null;
          if (t?.image && displayedCenterImage !== t.image) {
            setCenterDiscard(t.image, suit);
          } else if (t?.image) {
            syncDiscardBadge(suit);
          }
        }
        syncHandFromView(view);
        paintHandHeader();
        paintTurn();
        if (view.needChooseSuit && view.youSeat !== null) {
          paintActiveTurn(view.youSeat);
          openSuitPicker();
        } else if (botsPending.length > 0) {
          if (suitPicker) suitPicker.hidden = true;
          paint();
        } else {
          if (suitPicker) suitPicker.hidden = true;
          paintActiveTurn(view.turnSeat);
          if (!playedJoker) renderDiscard();
        }
        if (view.phase === 'finished') {
          discardEl?.classList.add('is-hit');
          window.setTimeout(() => discardEl?.classList.remove('is-hit'), motionMs(360));
        }
        paintEndScreen();
      }
    })();
  });

  suitPicker?.addEventListener('click', (event) => {
    const btn = (event.target as Element).closest<HTMLButtonElement>('[data-suit]');
    if (!btn?.dataset.suit) return;
    void (async () => {
      const suit = btn.dataset.suit as Suit;

      if (view?.topDiscard?.suit === 'joker' && view.youSeat !== null) {
        view = {
          ...view,
          topDiscard: { ...view.topDiscard, chosenSuit: suit },
          needChooseSuit: false,
          isYourTurn: false,
        };
        renderDiscard();
        discardEl?.classList.add('is-hit');
        window.setTimeout(() => discardEl?.classList.remove('is-hit'), motionMs(320));
      }

      await collapseSuitPicker();
      endYourTurnChrome();

      const res = await api('chooseSuit', { suit });
      const data = (await res.json()) as { ok?: boolean; room?: ClientRoomView };
      if (!data.room) return;

      view = data.room;
      lastVersion = view.version;
      paintHandHeader();
      paintTurn();
      paintEndScreen();

      setHandPlayHintsEnabled(false);

      const botsPending = pendingOpponentEvents(view);
      if (botsPending.length > 0) {
        paint();
      } else {
        renderDiscard();
        paintActiveTurn(view.turnSeat);
      }
    })();
  });

  discardOpen?.addEventListener('click', (event) => {
    event.stopPropagation();
    if (!topDiscardImageSrc()) return;
    toggleDiscardZoom();
  });

  discardOpen?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    if (!topDiscardImageSrc()) return;
    toggleDiscardZoom();
  });

  discardZoomClose?.addEventListener('click', () => closeDiscardZoom());
  discardZoomSheet?.addEventListener('click', () => closeDiscardZoom());

  root.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (discardZoom && !discardZoom.hidden) closeDiscardZoom();
  });

  if (opts.initialRoom) {
    showLobby(true);
    showInviteJoinUi(opts.initialRoom);
  } else {
    showLobby(true);
    showCreateLobbyUi();
    syncHintsRadiosFromView();
    const saved = localStorage.getItem(DISPLAY_NAME_KEY);
    if (saved && nameInput && !nameInput.value.trim()) nameInput.value = saved;
  }

  root.addEventListener('magister:online-stop', () => {
    stopPoll();
  });
}

export function parseRoomFromLocation(): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get('room')?.trim() || null;
}