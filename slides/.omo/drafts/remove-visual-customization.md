# Draft: Remove Visual Customization (Minimal Slidev)

## Original Request
> "remove visual customization, I'll do it later, keep things minimal"

User wants to strip the Slidev deck back to defaults so they can re-add visual styling later. Keep things minimal in the meantime.

## Intent Classification
- **Type**: Refactoring (safety-focused, behavior-preserving for content)
- **Complexity**: Mid-sized (multiple directories touched)
- **Risk**: Low (content stays, only visuals removed)

## Initial Project Inventory (top-level)
- `components/` - custom Vue components (likely visual)
- `styles/` - custom CSS/SCSS
- `pages/` - additional slide pages (may reference custom visuals)
- `snippets/` - code snippets (likely content, NOT visual)
- `uno.config.ts` - UnoCSS theme/preset customization
- `slides.md` - main entrypoint (25.6 KB - sizable, likely uses customization)
- `package.json` - may have @slidev/theme-* deps
- `netlify.toml` / `vercel.json` - deploy config (unrelated)

## Requirements (confirmed)
- [REQ-1]: Remove visual customization
- [REQ-2]: Keep things minimal (no replacement visuals)
- [REQ-3]: User will re-add visuals later (preserve ability to roll back)

## Technical Decisions (pending)
- [DECISION]: Aggressive vs conservative removal
- [DECISION]: Keep slidev default theme vs minimal theme (e.g. `default`, `seriph`)
- [DECISION]: Preserve snippets/ directory (content) vs remove
- [DECISION]: Preserve content components vs remove ALL components

## Research Findings (from explore bg_561a552a)

### Visual Customization Inventory

**1. Global stylesheet** (`styles/index.css`, 191 lines)
- Medical blue CSS variables (#1e6091, #2d8fbe, #0a2540, #3ba7d9, #f0f7fc)
- Heading/list/link/blockquote/table/code style overrides
- Per-layout padding (cover, center, two-cols, section)
- vclick transitions
- Section dark gradient backgrounds

**2. Inline `<style>` blocks in `slides.md`** (22 blocks at lines 29, 79, 116, 201, 318, 336, 409, 439, 487, 506, 524, 566, 605, 646, 710, 737, 804, 895, 1015, 1040, 1074, 1094)
- Cover gradient
- Appointment card (medical look)
- Slack mock UI dark theme
- Prescription box (yellow bg, red dashed border)
- Protocol step circles
- Donut chart legend
- Quote author styling
- Fade animations
- Grid layouts (examples-grid, conclusion-grid)
- ~10 more component-specific styles

**3. Frontmatter theme config (`slides.md` lines 1-14)**
- `theme: default` (already minimal — built-in)
- `themeConfig.primary: '#1e6091'` (custom medical blue)
- Cover slide: `class: text-center`, `background: none`

**4. Unused component**
- `components/Counter.vue` — never referenced in slides.md (safe delete)

**5. Inline SVG content** (these CONVEY information, not just decoration):
- Cover cross decoration (lines 16-21) — DECORATIVE
- Brain diagram AVANT/APRÈS (line 361) — CONTENT (compares states)
- Slack message mock UI (lines 174-199) — CONTENT (illustrates example)
- Donut chart with stats (lines 701-730) — CONTENT (data viz)
- Timeline/chart (lines 1000-1012) — CONTENT (data viz)

**6. UnoCSS** (`uno.config.ts`, 37 lines)
- Safelist for Slidev navbar icons (functional, not visual customization)

**7. Layouts used** (built-in Slidev layouts, not custom files)
- cover, center, section, two-cols, two-cols-header, statement, fact, quote
- All are Slidev defaults — only padding is overridden in index.css

**8. Dependencies (`package.json`)**
- @slidev/theme-default (active)
- @slidev/theme-seriph (installed unused)

### What is NOT customization
- `snippets/external.ts` (code snippet utility, content not visual)
- `pages/imported-slides.md` (doc, not in deck)
- `netlify.toml`, `vercel.json` (deploy)

## Decisions Made (user-confirmed)
- [Q1 SVGs]: **Replace with placeholder text** — convert each content SVG to a markdown placeholder so they're noted for later redo
- [Q2 Mock UIs]: **Convert to reusable Vue components** — extract Slack/appointment/prescription/protocol-step mocks out of inline HTML into `.vue` files
- [Q3 Removal]: **Delete files outright** — remove styles/index.css and components/Counter.vue, recover via git if needed
- [Q4 Cleanup]: **Full cleanup** — remove unused @slidev/theme-seriph, simplify uno.config.ts (keep only functional safelist), run pnpm install

## Open Questions (partially resolved — Metis flagged contradiction)
- [Q5 Mock styling]: **Styled — preserve current look** ← FLAGGED BY METIS as inconsistent with overall goal
- [Q6 Verification]: **Build-only** ← FLAGGED BY METIS as insufficient (build success ≠ visual correctness)

## Metis Findings (CRITICAL — must resolve before plan generation)

### The Philosophical Contradiction (BLOCKER)
- User said: "remove visual customization, keep things minimal, I'll do it later"
- Q5 answer ("styled components") **RELOCATES** visual customization into .vue files instead of removing it
- These are opposite outcomes. Need explicit user choice:
  - **(A) True minimal**: Delete all CSS. Components are bare HTML scaffolds. Slides look broken/unstyled until user revisits. Matches "I'll do it later" literally.
  - **(B) Encapsulated**: Components contain scoped CSS. Slides look the same. Source is cleaner but visual customization still exists (just relocated).

### Layout vs Aesthetic Confusion (BLOCKER)
- `styles/index.css` mixes LAYOUT-CRITICAL rules (column gaps, h2 emoji flex alignment, section gradient bg, layout padding) with AESTHETIC rules (colors, fonts, shadows)
- 12 of 22 inline `<style>` blocks contain LAYOUT-CRITICAL CSS (display: grid for examples-grid + conclusion-grid, flex for slack/protocol/prescription/donut-legend)
- Stripping LAYOUT-CRITICAL CSS = slides VISIBLY BROKEN (content piles into single column, headings lose emoji alignment, etc.)
- Stripping AESTHETIC CSS only = layout intact, colors gone (closer to "minimal default" while staying readable)

### Specific Findings
- **5th component missed**: `demo-after` / `.slack-msg-good` Slack mock at line ~895 (style block #18) — needs same treatment as other 4
- **uno.config.ts is NOT visual customization**: Contains Slidev toolbar icon safelist. Removing breaks UI chrome. Should be UNTOUCHED, not "simplified".
- **Frontmatter has more keys**: `theme`, `themeConfig.primary`, `transition: slide-left`, `drawings`, `comark`, `duration`, plus per-slide `class`/`background`. Need explicit list of which to strip.
- **SVG donut chart inline styles**: `<span class="dot" style="background:#1e6091">` depends on style block #15 (`.dot { width/height/border-radius }`). SVG replacement and style removal MUST be atomic.
- **pages/imported-slides.md not audited yet**: Could reference styles/components. Probe in flight.
- **Build success ≠ visual correctness**: Slidev compiles HTML successfully even with broken layout. Need executable acceptance checks (grep counts, file existence) plus mandatory user visual review.

### Metis Directives Captured
- **MUST**: Stop and resolve philosophical contradiction before generating plan
- **MUST**: Treat component extraction + style block migration as ATOMIC pairs in same task
- **MUST**: Delete `uno.config.ts` simplification task entirely (file is infrastructure)
- **MUST**: Enumerate exact frontmatter keys to remove (not vague "strip frontmatter")
- **MUST**: Add `demo-after` Slack as 5th component or explicit handling
- **MUST**: Add executable acceptance checks (grep counts, build, file existence)
- **MUST NOT**: Strip `uno.config.ts` safelist
- **MUST NOT**: Add props/TypeScript/slots to extracted components (user said extract, not abstract)
- **MUST NOT**: Treat all 22 style blocks as equivalent

## Final Scope (LOCKED)

### INCLUDE
- Delete `styles/index.css` (191-line global stylesheet)
- Delete `components/Counter.vue` (unused)
- Remove all 22 inline `<style>` blocks from `slides.md`
- Remove `themeConfig.primary: '#1e6091'` from `slides.md` frontmatter (keep `theme: default`)
- Remove cover slide inline `class: text-center` and `background: none`
- Remove cover SVG cross decoration (lines 16-21) — decorative
- Replace 3 content SVGs with markdown placeholders:
  - Brain AVANT/APRÈS diagram (line 361) → `> [TODO: Brain diagram comparing AVANT/APRÈS]`
  - Donut chart with stats (lines 701-730) → `> [TODO: Donut chart with stats]`
  - Timeline/chart (lines 1000-1012) → `> [TODO: Timeline chart]`
- Extract 4 mock UI blocks to STYLED Vue components (scoped CSS inside):
  - `components/SlackMock.vue` (from slides.md lines 174-199 + corresponding `<style>` block)
  - `components/AppointmentCard.vue` (extract structure + scoped styles)
  - `components/PrescriptionBox.vue` (extract structure + scoped styles)
  - `components/ProtocolSteps.vue` (extract structure + scoped styles)
- Replace inline HTML mocks with component tags (`<SlackMock />`, etc.)
- Remove `@slidev/theme-seriph` from `package.json` devDependencies
- Run `pnpm install` to update lockfile
- Simplify `uno.config.ts` to keep only Slidev navbar safelist (remove any other customization if present)

### EXCLUDE
- Layout declarations in slide frontmatter (cover, center, section, two-cols, statement, fact, quote) — structural, Slidev built-ins
- `snippets/external.ts` (utility, not visual)
- All textual content, code blocks, headings, lists
- `@slidev/cli`, `vue` dependencies (core, untouched)
- Deploy configs (`netlify.toml`, `vercel.json`)
- `pages/imported-slides.md` (doc file, not part of deck)
- `pnpm-lock.yaml` (auto-updated by pnpm install)
- `README.md`, `.gitignore`, `.npmrc`

## Test Strategy
- **Infrastructure exists**: NO (no test scripts in package.json)
- **Automated tests**: NONE
- **Framework**: N/A
- **Agent QA**: `pnpm build` must succeed (Slidev compiles entire deck). Build success implies all components import correctly and slides.md parses cleanly.
- **User-led verification**: Manual visual review post-build (out of plan scope)

## Plan Structure Sketch
- **Wave 1** (8 parallel tasks — independent file creation/deletion/config edits)
  - T1: Delete `styles/index.css`
  - T2: Delete `components/Counter.vue`
  - T3: Simplify `uno.config.ts`
  - T4: Remove `@slidev/theme-seriph` + `pnpm install`
  - T5: Create `components/SlackMock.vue`
  - T6: Create `components/AppointmentCard.vue`
  - T7: Create `components/PrescriptionBox.vue`
  - T8: Create `components/ProtocolSteps.vue`
- **Wave 2** (4 sequential tasks — all touch `slides.md`)
  - T9: Strip frontmatter customization (themeConfig.primary, cover class/background, cover SVG decoration)
  - T10: Replace 4 mock HTML blocks with component tags
  - T11: Replace 3 content SVGs with markdown placeholders
  - T12: Remove all 22 inline `<style>` blocks
- **Final Wave** (4 parallel review agents — F1-F4)

## Scope Boundaries (proposed, awaiting Q5/Q6)
- INCLUDE:
  - Delete `styles/index.css`
  - Delete `components/Counter.vue`
  - Remove all 22 inline `<style>` blocks from `slides.md`
  - Remove `themeConfig.primary` from frontmatter
  - Remove cover slide inline `class`/`background`
  - Replace 4 content SVGs (brain, donut, timeline, plus cover cross decoration?) with markdown placeholders
  - Extract 4 mock UI blocks to `components/*.vue` (SlackMock, AppointmentCard, PrescriptionBox, ProtocolSteps)
  - Remove `@slidev/theme-seriph` from package.json
  - Simplify `uno.config.ts` to bare minimum
  - Run `pnpm install`
- EXCLUDE:
  - Layout declarations in slide frontmatter (structural)
  - `snippets/external.ts` (utility, not visual)
  - Content text, code blocks, headings
  - Slidev core deps (@slidev/cli, vue)
  - Deploy configs (netlify.toml, vercel.json)
  - `pages/imported-slides.md` (doc only)

## Test Strategy
- Slidev projects: no unit tests typical
- Verification: `pnpm dev` boot test + `pnpm build` succeeds + visual smoke test via Playwright (slide deck renders, no broken styles)
- Agent QA: Playwright snapshot of first 3 slides post-cleanup to confirm defaults render
