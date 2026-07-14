# Prospex Investor Site Design QA

## Comparison target

- Source visual truth: `/Users/jfk/Documents/Codex/2026-07-13/can/work/option-3-reference.png`
- Browser implementation: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-desktop-final.png`
- Viewport: 1440 × 1024
- State: page top, desktop dark theme, football shown as the active launch wedge
- Full-view side-by-side evidence: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-design-comparison-final.png`

## Findings

No actionable P0, P1, or P2 differences remain.

- Fonts and typography: Space Grotesk and Inter are locally hosted and match the reference's display/body split. The hero preserves the two-line category statement, large optical weight, tight tracking, and blue Prospex emphasis without truncation.
- Spacing and layout rhythm: the navigation, two-column hero, five-sport rail, and Wedge / Platform / Moat band preserve the reference's order, alignment, density, rectilinear surfaces, and high-contrast editorial hierarchy.
- Colors and tokens: Field Night, Signal Blue, Vision Cyan, Cloud White, and Graphite are consistently mapped through CSS variables. No unrelated purple/orange or consumer-gaming treatment was introduced.
- Image quality and asset fidelity: the hero football player and five-sport rail are dedicated generated raster assets with the correct subject order, crop, monochrome treatment, and football-first blue emphasis. They are locally served as compressed JPGs with no placeholder or CSS-drawn athlete art.
- Copy and content: the hero and thesis band match the selected direction. The rest of the page consistently presents Prospex as an all-sports intelligence platform with football as the first proof point.
- Icons: Wedge / Platform / Moat use the locally hosted Material Symbols Rounded library with consistent weight, alignment, and sizing.
- States and interactions: navigation anchors, both hero CTAs, workflow comparison, product-query tabs, and print control are present. Workflow and query state changes were tested in the browser.
- Accessibility: semantic headings and regions are preserved, raster assets have useful alt text, controls remain keyboard-native, reduced-motion behavior is defined, and the 390px layout has no page-level horizontal overflow.

## Focused evidence

- Product interaction: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-product.png`
- Foundation/moat section: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-moat.png`
- Mobile viewport, 390 × 844: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-mobile-v1.png`
- Full-page structure: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-full.png`

Focused views were required because the full-page capture is too tall to judge product typography, foundation-grid alignment, and mobile behavior precisely.

## Comparison history

### Iteration 1

- Evidence: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-design-comparison-v1b.png`
- [P2] The headline wrapped to three lines while the reference held the category statement to two, making the hero taller and pushing the thesis band below the intended fold.
- Fix: widened the hero-copy region, reduced the display scale and vertical padding, and tightened above-the-fold rhythm.
- Post-fix evidence: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-design-comparison-final.png`

### Iteration 2

- [P2] The hero crop clipped the top of the helmet, and the foundation grid left a visually empty second-row cell.
- Fix: shifted the hero image's vertical focal point and made the Compounds panel span the full second row.
- Post-fix evidence: `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-desktop-final.png` and `/Users/jfk/Documents/Codex/2026-07-13/can/work/prospex-redesign-moat.png`

## Primary browser verification

- Workflow toggle: `With Prospex` set `aria-pressed="true"` and activated the corresponding panel.
- Query tabs: selecting `Motion pressure check` replaced the coach question with the expected motion-pressure query.
- Browser console: no console messages.
- Browser errors: none.
- Mobile metrics: viewport 390px, document width 390px, body width 390px; the five-sport rail scrolls inside its own bounded region.

## Follow-up polish

- [P3] The implementation's hero athlete is slightly larger and more forward than the concept image. This is acceptable because the dedicated asset remains balanced against the headline and improves athlete legibility.
- [P3] At exactly 1024px high, the source shows more of the next-section headline; the implementation shows the start of its blue infrastructure surface. The correct `The next infrastructure layer for sports.` section follows immediately below.

## Implementation checklist

- [x] Match selected hero composition and headline hierarchy.
- [x] Use real generated imagery for all prominent athlete assets.
- [x] Preserve football as the active wedge and show multi-sport expansion.
- [x] Carry the editorial design system through the full investor narrative.
- [x] Verify interactions, desktop layout, mobile layout, and browser errors.

## Post-review print verification

- Restored a full print reset for nested panels, grids, type, borders, and root-page backgrounds after PR review identified a contrast regression.
- Forced scroll-reveal content visible in paged media, removed the absolute hero layer from print, and allowed long sections to fragment without blank pages.
- Browser PDF render: 17 pages; every page contains extractable narrative text.
- Visual inspection: pages 1, 4, 8, 12, and 17 show high-contrast black-on-white content, intact hierarchy, clean section transitions, and no dark-page or blank-page artifacts.

final result: passed
