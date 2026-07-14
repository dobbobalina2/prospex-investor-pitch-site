# Project Memory

## Core beliefs

- Prospex is an all-sports intelligence platform; football is the first proof point and commercial wedge.
- The investor story should stay premium, precise, and evidence-backed. Avoid generic SaaS visuals and claims that imply unfinished roadmap work is already complete.
- Preserve the Field Night, Signal Blue, Vision Cyan, Cloud White, and Graphite palette with Space Grotesk for display type and Inter for body copy.
- Keep the static site dependency-light and deployable directly through GitHub Pages from `main`.

## Common pitfalls

- The site is plain HTML, CSS, and JavaScript. There is no package build step.
- Scroll-reveal sections are intentionally hidden until observed. Full-page browser captures taken at the top may need reveal classes forced on for visual QA.
- Generated raster assets should be compressed before commit. The checked-in JPGs are the live assets; uncompressed PNG generation outputs are not required.
- Browser automation needs a writable agent-browser state directory, which may require running outside a restricted sandbox.

## Verification status

- Visual redesign implementation: complete.
- Desktop and mobile browser QA: passed on 2026-07-13; see `design-qa.md`.
- GitHub Pages deploys from `main`; confirm the live URL after every production merge.
