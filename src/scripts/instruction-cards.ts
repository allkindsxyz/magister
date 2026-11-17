export function mountInstructionCards(
  root: HTMLElement | null,
): { show: () => void; reset: () => void } {
  const slides = root ? [...root.querySelectorAll<HTMLElement>('[data-instruction-card]')] : [];
  const prevBtn = root?.querySelector<HTMLButtonElement>('[data-instruction-prev]');
  const nextBtn = root?.querySelector<HTMLButtonElement>('[data-instruction-next]');
  const dots = root ? [...root.querySelectorAll<HTMLButtonElement>('[data-instruction-dot]')] : [];

  let index = 0;

  function paint(): void {
    slides.forEach((slide, i) => {
      slide.classList.remove('is-active', 'is-before', 'is-after');
      slide.removeAttribute('hidden');
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
      if (i === index) slide.classList.add('is-active');
      else if (i < index) slide.classList.add('is-before');
      else slide.classList.add('is-after');
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
    prevBtn?.toggleAttribute('disabled', index <= 0);
    nextBtn?.toggleAttribute('disabled', index >= slides.length - 1);
  }

  function goTo(next: number): void {
    if (!slides.length) return;
    const clamped = Math.max(0, Math.min(slides.length - 1, next));
    if (clamped === index) return;
    index = clamped;
    paint();
  }

  function go(delta: number): void {
    goTo(index + delta);
  }

  function reset(): void {
    index = 0;
    paint();
  }

  function show(): void {
    reset();
  }

  prevBtn?.addEventListener('click', () => go(-1));
  nextBtn?.addEventListener('click', () => go(1));

  root?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const dot = target.closest<HTMLElement>('[data-instruction-dot]');
    if (!dot || !root.contains(dot)) return;
    const i = Number(dot.dataset.instructionDot);
    if (Number.isFinite(i)) goTo(i);
  });

  let touchStartX = 0;
  root?.addEventListener(
    'touchstart',
    (event) => {
      touchStartX = event.changedTouches[0]?.clientX ?? 0;
    },
    { passive: true },
  );
  root?.addEventListener(
    'touchend',
    (event) => {
      const endX = event.changedTouches[0]?.clientX ?? 0;
      const delta = endX - touchStartX;
      if (Math.abs(delta) < 48) return;
      go(delta < 0 ? 1 : -1);
    },
    { passive: true },
  );

  paint();

  return { show, reset };
}