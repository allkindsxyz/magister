# Print

## One-pager (A4, 1 page)

Product introduction for a potential publisher. No prices, print runs, or fair dates.

| File | Purpose |
|------|---------|
| `publisher-brief.html` | English, 1 page |
| `publisher-brief.ru.html` | Russian, 1 page |
| `publisher-brief.css` | Shared layout |
| `assets/publisher/` | Box photo, studio, cards, people |

### Export PDF

1. Open the HTML in **Chrome**.
2. Print → **Save as PDF**.
3. Paper: **A4**. Margins: **Default** (layout already has `@page` 12×14 mm). Background graphics: **On**. Scale: **100%**.
4. Headers and footers: **Off**.

Headless:

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="$PWD/publisher-brief.pdf" \
  "file://$PWD/publisher-brief.html"
```

Same for `publisher-brief.ru.html` → `publisher-brief.ru.pdf`.

## Suit key card mockup (63 × 88 mm)

| File | Purpose |
|------|---------|
| `suit-key-card-mockup.html` | Two faces side by side — ♥ example (pip grid + courts) |
| `suit-key-card-mockup.css` | Poker-size layout |
| `assets/suit-key/` | Card rasters (paths relative to `print/`, ok for `file://`) |

Open in Chrome at 100% zoom; each `.card` block is one physical face.

Additional blocks at the bottom of `suit-key-card-mockup.html`: **instruction card** in two visual variants — **A** darkened card back, **B** jokers (`joker-1` / `joker-2`), each with the same two faces (deck + rules). Layout follows the publisher reference: blue badge + gold dividers with ✦, large Cormorant title, suit block, prose. Classes: `card--rules--dark`, `card--rules-bg-back` or `card--rules-bg-joker`.

Symlink media (card back webp) for local `file://` preview:

```bash
ln -sf ../../public/media print/assets/media
```

### Instruction cards (63 × 88 mm, two physical cards × two faces)

Two вкладыша в колоду: **карта 1** — «разгадай колоду» (тизер + ключ); **карта 2** — «начни играть» («Четыре мира» + «Магистр»). QR только на **1B** (ключ).

Same layout as the reference exports from Downloads; background is the **physical deck back** (`card-back-600.webp`), **blurred** (lighter on screen) plus a **~20% black dim** for contrast. In print, blur is off so the photo stays sharp; the dim layer remains.

| File | Face | Purpose |
|------|------|---------|
| `magister-instruction-1a.html` | 1A | Тизер: секрет колоды, без QR |
| `magister-instruction-1b.html` | 1B | Ключ: 54 / четыре мира, масти, ранг, QR `ru` |
| `magister-instruction-2a.html` | 2A | Игра «Четыре мира» — сортировка колоды |
| `magister-instruction-2b.html` | 2B | Игра «Магистр» + тонкий блок онлайн-игр и «другие карточные игры» |
| `magister-instruction-cards.css` | — | Shared layout + deck back image + typography |
| `assets/magister-cards-ru-qr.png` | — | QR → `https://magister.cards/ru/` (regenerate if URL changes) |

**Порядок в колоде (сверху):** 1A → 1B → 2A → 2B (печатать каждый HTML отдельно, 1 лист = 1 лицо).

Legacy aliases (same content as 1B / 2B): `magister-side-a.html`, `magister-side-b.html` — prefer the `magister-instruction-*` names for new print runs.

Regenerate QR:

```bash
npx --yes qrcode@1.5.3 -t png -o print/assets/magister-cards-ru-qr.png "https://magister.cards/ru/"
```

Open from `print/` (paths to `assets/magister-logo.png` and `assets/media/` are relative). Ensure `print/assets/media` symlink exists (see above).

Typography (Google Fonts, loaded from `magister-instruction-cards.css`): **Cormorant Garamond** (500/600) for titles; **Manrope** (400/600/700) for body, suit names in bold, site URL in semibold. Preview needs network once so fonts load; fallback is system sans/serif.

**Paths:** the deck back URL is set in each HTML as `--card-back-image` because in an external stylesheet `url(...)` is resolved relative to the **.css file**, not the HTML — if you keep a copy of the page in another folder (e.g. Downloads) with local `assets/`, the logo could load while the back image did not.

### Full deck key (26 + 26)

On the same HTML page, after the ♥ suit example: **«Ключ колоды»** — face A (♥ + ♦), face B (♣ + ♠), each cell with rank and Russian title from `src/content/cards/`. Images: `assets/deck/` → symlink to `public/cards` (same as suit-key local assets for `file://`). Create once:

```bash
ln -sf ../../public/cards print/assets/deck
node print/build-deck-key-cards.mjs
```

Regenerate after content changes:

```bash
node print/build-deck-key-cards.mjs
```

## Business card (Dmitry Matison)

### Files

| File | Purpose |
|------|---------|
| `business-card-dmitry-matison.html` | Layout for print/PDF (**85×55 mm**, standard EU) |
| `assets/` | Logo, packaging photo, SPIEL mark (copies from `public/media/`) |

Typography matches the site: **Newsreader** (name) + **Inter** (UI copy), colors from `src/styles/global.css`.

## Export PDF (for the print shop)

1. Open `business-card-dmitry-matison.html` in **Chrome**.
2. Print → **Save as PDF**.
3. Paper size: **Custom** → **85 × 55 mm** (or A4 with 1 card per page).
4. Margins: **None**. Background graphics: **On**.
5. Scale: **100%** (not “Fit to page”).

For professional offset/digital: request **CMYK**, **300 dpi** rasters; convert in InDesign/Illustrator if needed (open HTML via PDF import or rebuild from PDF).

## Notes

- Right panel uses the **physical deck packaging** photo so the product is obvious at a glance.
- **magister.cards** is on the face; email and WhatsApp match the reference card.
- SPIEL logo: official asset `spiel-essen-logo.png` (Dunkelblau on light footer strip).
