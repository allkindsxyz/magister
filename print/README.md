# Print — business card (Dmitry Matison)

## Files

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
