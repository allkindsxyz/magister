import {
  MAX_QTY,
  OPEN_EVENT,
  cartCount,
  cartSubtotal,
  lineTotal,
  onCartChange,
  readCart,
  removeLine,
  setLineQty,
  type CartLine,
} from '../lib/cart';
import { SHIPPING, formatPrice } from '../lib/pricing';
import { SKUS, freeShippingRemaining } from '../lib/catalog';
import type { Lang } from '../i18n/utils';

type CartUi = {
  skuNames: Record<string, string>;
  count_aria: string;
  open_aria: string;
  qty_label: string;
  qty_dec: string;
  qty_inc: string;
  remove: string;
  personal_single: string;
  message_for: string;
  message: string;
  private_pin: string;
  shipping_left: string;
  shipping_free: string;
  added: string;
  full: string;
  color_black: string;
  color_inspired: string;
  size: string;
};

export type CartOpenDetail = { status?: 'added' | 'full' };

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match);
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function asLang(value: string | undefined): Lang {
  return value === 'ru' || value === 'be' || value === 'zh' ? value : 'en';
}

export function mountCartDrawer(root: HTMLElement): void {
  const ui = JSON.parse(root.querySelector('[data-cart-ui]')?.textContent || '{}') as CartUi;
  const lang = asLang(root.dataset.lang);
  const panel = root.querySelector<HTMLElement>('.cart-drawer__panel');
  const list = root.querySelector<HTMLUListElement>('[data-cart-lines]');
  const empty = root.querySelector<HTMLElement>('[data-cart-empty]');
  const foot = root.querySelector<HTMLElement>('[data-cart-foot]');
  const ship = root.querySelector<HTMLElement>('[data-cart-ship]');
  const meter = root.querySelector<HTMLElement>('[data-cart-ship-meter]');
  const subtotalEl = root.querySelector<HTMLElement>('[data-cart-subtotal]');
  const headCount = root.querySelector<HTMLElement>('[data-cart-head-count]');
  const status = root.querySelector<HTMLElement>('[data-cart-status]');
  if (!panel || !list || !empty || !foot || !ship || !meter || !subtotalEl || !headCount || !status) return;

  const money = (amount: number): string => formatPrice(amount, lang);
  let opener: HTMLElement | null = null;
  let closeTimer = 0;

  const syncBadges = (lines: CartLine[]): void => {
    const count = cartCount(lines);
    document.querySelectorAll<HTMLElement>('[data-cart-count]').forEach((badge) => {
      badge.textContent = count > 99 ? '99+' : String(count);
      badge.hidden = count === 0;
    });
    document.querySelectorAll<HTMLElement>('[data-cart-open]').forEach((trigger) => {
      trigger.setAttribute(
        'aria-label',
        count ? `${ui.open_aria} · ${fill(ui.count_aria, { count: String(count) })}` : ui.open_aria,
      );
    });
    headCount.textContent = count ? `· ${count}` : '';
  };

  const lineMeta = (line: CartLine): string => {
    const parts: string[] = [];
    if (line.cardTitle) parts.push(line.cardTitle);
    if (line.color) parts.push(line.color === 'inspired' ? ui.color_inspired : ui.color_black);
    if (line.size) parts.push(fill(ui.size, { size: line.size }));
    return parts.join(' · ');
  };

  const lineMessage = (line: CartLine): string => {
    const m = line.message;
    if (!m) return '';
    const parts = [m.recipient ? fill(ui.message_for, { name: m.recipient }) : ui.message];
    if (m.visibility === 'private' && m.pin) parts.push(fill(ui.private_pin, { pin: m.pin }));
    return `✉ ${parts.join(' · ')}`;
  };

  const renderLine = (line: CartLine): HTMLLIElement => {
    const li = el('li', 'cart-line');
    li.dataset.lineId = line.id;

    const thumb = el('img', 'cart-line__thumb');
    thumb.src = line.image || SKUS[line.sku].image;
    thumb.alt = '';
    thumb.width = 144;
    thumb.height = 144;
    thumb.loading = 'lazy';
    thumb.decoding = 'async';

    const body = el('div', 'cart-line__body');
    body.append(el('p', 'cart-line__name', ui.skuNames[line.sku] || line.sku));
    const meta = lineMeta(line);
    if (meta) body.append(el('p', 'cart-line__meta', meta));
    const msg = lineMessage(line);
    if (msg) body.append(el('p', 'cart-line__msg', msg));

    const row = el('div', 'cart-line__row');
    if (line.message) {
      row.append(el('span', 'cart-line__single', ui.personal_single));
    } else {
      const qty = el('div', 'cart-qty');
      qty.setAttribute('role', 'group');
      qty.setAttribute('aria-label', ui.qty_label);
      const dec = el('button', undefined, '−');
      dec.type = 'button';
      dec.dataset.step = '-1';
      dec.setAttribute('aria-label', ui.qty_dec);
      const out = el('output', undefined, String(line.qty));
      out.setAttribute('aria-live', 'polite');
      const inc = el('button', undefined, '+');
      inc.type = 'button';
      inc.dataset.step = '1';
      inc.setAttribute('aria-label', ui.qty_inc);
      inc.disabled = line.qty >= MAX_QTY;
      qty.append(dec, out, inc);
      row.append(qty);
    }
    const remove = el('button', 'cart-line__remove', ui.remove);
    remove.type = 'button';
    remove.dataset.remove = '';
    row.append(remove);
    body.append(row);

    li.append(thumb, body, el('p', 'cart-line__price', money(lineTotal(line))));
    return li;
  };

  const render = (lines: CartLine[]): void => {
    syncBadges(lines);
    list.replaceChildren(...lines.map(renderLine));
    const hasLines = lines.length > 0;
    empty.hidden = hasLines;
    foot.hidden = !hasLines;
    if (!hasLines) return;
    const subtotal = cartSubtotal(lines);
    const left = freeShippingRemaining(subtotal);
    subtotalEl.textContent = money(subtotal);
    ship.textContent = left > 0 ? fill(ui.shipping_left, { amount: money(left) }) : ui.shipping_free;
    meter.style.width = `${Math.min(100, Math.round((subtotal / SHIPPING.free_from) * 100))}%`;
  };

  const isOpen = (): boolean => !root.hidden && root.classList.contains('is-open');

  const open = (trigger: HTMLElement | null, detail?: CartOpenDetail): void => {
    window.clearTimeout(closeTimer);
    status.textContent = detail?.status === 'added' ? ui.added : detail?.status === 'full' ? ui.full : '';
    render(readCart());
    if (isOpen()) return;
    opener = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
    root.hidden = false;
    document.body.classList.add('dialog-open');
    // Force a reflow so the transition starts from the hidden state without waiting for a frame.
    void root.offsetWidth;
    root.classList.add('is-open');
    root.querySelector<HTMLElement>('.cart-drawer__close')?.focus({ preventScroll: true });
  };

  const close = (): void => {
    if (root.hidden) return;
    root.classList.remove('is-open');
    if (!document.querySelector('.merch-picker:not([hidden])')) document.body.classList.remove('dialog-open');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    closeTimer = window.setTimeout(() => {
      root.hidden = true;
    }, reduced ? 0 : 260);
    opener?.focus({ preventScroll: true });
    opener = null;
  };

  document.addEventListener('click', (event) => {
    const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cart-open]');
    if (!trigger) return;
    event.preventDefault();
    open(trigger);
  });

  window.addEventListener(OPEN_EVENT, (event) => {
    open(null, (event as CustomEvent<CartOpenDetail | undefined>).detail);
  });

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.closest('[data-cart-close]')) {
      close();
      return;
    }
    const line = target.closest<HTMLElement>('[data-line-id]');
    const id = line?.dataset.lineId;
    if (!id) return;
    const stepBtn = target.closest<HTMLButtonElement>('[data-step]');
    if (stepBtn) {
      const step = stepBtn.dataset.step === '-1' ? -1 : 1;
      const current = readCart().find((l) => l.id === id);
      if (!current) return;
      setLineQty(id, current.qty + step);
      const again = list.querySelector<HTMLButtonElement>(`[data-line-id="${CSS.escape(id)}"] [data-step="${step}"]`);
      if (again && !again.disabled) again.focus({ preventScroll: true });
      else panel.focus({ preventScroll: true });
      return;
    }
    if (target.closest('[data-remove]')) {
      removeLine(id);
      panel.focus({ preventScroll: true });
    }
  });

  root.addEventListener('keydown', (event) => {
    if (!isOpen()) return;
    if (event.key === 'Escape') {
      event.stopPropagation();
      close();
      return;
    }
    if (event.key !== 'Tab') return;
    const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((n) => n.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  onCartChange(render);
  render(readCart());
}
