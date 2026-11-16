export type GuideViewId = 'hub' | 'worlds' | 'rank' | 'path' | 'history';

export type GuideGoTarget = 'lore' | 'learn' | 'cards' | 'birthday' | 'oracle';

export function mountAppGuide(
  guideRoot: HTMLElement | null,
  options: {
    getBarTitle: (view: GuideViewId) => string;
    onBackToHub: () => void;
    onBackToAppHub: () => void;
    onGo: (target: GuideGoTarget) => void;
    onOpenLock: () => void;
    worldsCleared: () => boolean;
  },
): { resetGuide: () => void; showGuide: () => void } {
  let currentView: GuideViewId = 'hub';

  const barTitle = guideRoot?.querySelector<HTMLElement>('[data-guide-bar-title]');
  const stage = guideRoot?.querySelector<HTMLElement>('[data-guide-stage]');
  const views = guideRoot
    ? [...guideRoot.querySelectorAll<HTMLElement>('[data-guide-view]')]
    : [];

  function setView(view: GuideViewId): void {
    if (!guideRoot) return;
    currentView = view;
    views.forEach((el) => {
      const id = el.dataset.guideView as GuideViewId | undefined;
      el.hidden = id !== view;
    });
    if (barTitle) barTitle.textContent = options.getBarTitle(view);
    if (stage) {
      stage.classList.toggle('is-cover', view === 'hub');
      stage.classList.toggle('is-title', view !== 'hub');
    }
    const active = guideRoot.querySelector<HTMLElement>('[data-guide-view]:not([hidden])');
    active?.scrollTo({ top: 0, behavior: 'auto' });
  }

  function resetGuide(): void {
    setView('hub');
  }

  function showGuide(): void {
    resetGuide();
  }

  guideRoot?.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const openChapter = target.closest<HTMLElement>('[data-guide-open]');
    if (openChapter && guideRoot.contains(openChapter)) {
      const id = openChapter.dataset.guideOpen as GuideViewId | undefined;
      if (id) setView(id);
      return;
    }

    const go = target.closest<HTMLElement>('[data-guide-go]');
    if (go && guideRoot.contains(go)) {
      const action = go.dataset.guideGo as GuideGoTarget | undefined;
      if (!action) return;
      const locked = go.dataset.guideLocked === 'worlds';
      if (locked && !options.worldsCleared()) {
        options.onOpenLock();
        return;
      }
      options.onGo(action);
      return;
    }

    if (target.closest('[data-guide-back]')) {
      if (currentView === 'hub') options.onBackToAppHub();
      else setView('hub');
    }
  });

  return { resetGuide, showGuide };
}