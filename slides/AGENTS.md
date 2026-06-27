# AGENTS.md

Instructions for AI agents working on this presentation. These rules codify good public-speaking and slide-design principles (adapted from Patrick Winston's "How to Speak") and map each one to how to implement it in Slidev. Follow them whenever you add or edit slides.

## Context

- This is a French Slidev conference talk. The deck content stays in French; these instructions are guidance for you, the agent, and are written in English.
- Slides usually live in `slides.md`. Slides are separated by `---`. The first frontmatter block is the deck headmatter; subsequent frontmatter blocks configure individual slides.
- HTML comments (`<!-- ... -->`) at the end of a slide are the presenter notes / spoken script. The spoken word carries the content; the slide only supports it.
- Reuse what the project already provides before adding anything new: existing layouts (in `layouts/`), components (in `components/`), and shared styling (UnoCSS config, `styles/`). Build animation with Slidev's `v-click` / `v-clicks` / `v-motion`.

## Talk structure and delivery

These shape the narrative arc and the presenter notes more than the visuals.

- Open with an empowerment promise, not a joke. The first slide should tell the audience what they will be able to do by the end that they cannot do now. Put the spoken promise in the intro slide's presenter-note `<!-- -->` block. Avoid opening jokes: the audience is still settling and adjusting to the speaker.
- Cycle on the subject. Important ideas should be stated about three times (preview, explain, recap), because at any moment a fraction of the audience is "fogged out". Use `v-clicks` to pace a build-up, and recap key points in presenter notes and on section dividers.
- Use verbal punctuation and landmarks so people can "get back on the bus". Add recurring outline / section slides (`layout: section`) and enumerate where you are in the talk. Number the steps so each transition is an obvious seam.
- Build a fence around each idea: define it by contrast with what it is NOT, so it isn't confused with a neighbouring concept. Implement the contrast on-slide with two columns (`layout: two-cols` plus a `::right::` slot) or with sequential `v-click` reveals (idea, then "not this").
- Ask a well-chosen question to re-engage the room. Keep the question on the slide or spoken, but keep the answer in the presenter notes, never pre-printed on the slide. The question should be neither trivial nor unanswerable.
- Express passion and situate the work: say why an idea is exciting and where it sits relative to other work. This belongs mostly in presenter notes.
- End with a Contributions slide, not "Thank you", not "Questions?", not a wall of collaborator logos. The final slide should restate what was accomplished and stay up during Q&A. Credit collaborators on the first slide instead. Final spoken words can salute the audience rather than thanking them.

## Slide-design principles

Each rule is DO / AVOID with concrete Slidev implementation.

### Text must be big and legible

- DO use large type. Use a dedicated headline layout (e.g. `layout: center` or a project "big" layout) for key statements, and large UnoCSS sizes (`text-3xl` and up) for primary content. Treat roughly 35pt-equivalent as the floor for body text.
- AVOID small fonts used as a trick to cram more words on. Few words per slide; the slide is a condiment to what you say, not the main event and not your script.

### Avoid raw bullet-point lists

- DO express one idea per slide, or render points as styled items / cards / reusable components. A common pattern is a `<ul class="list-none ...">` with items styled and revealed via `v-clicks` (optionally `v-motion`). Prefer a visual component over a text list when one exists.
- AVOID plain markdown `- ` / numbered lists dumped on a slide. If you must enumerate, reveal items progressively with `v-clicks` so the audience reads with you, not ahead of you.

### Visuals must be coherent

- DO keep a single consistent visual system: shared palette, spacing, and type scale defined centrally (UnoCSS config, shared styles) rather than per slide. Reuse existing layouts and components instead of inventing one-off styling. Apply one consistent image treatment, and keep a single deck-wide `transition` set in the headmatter.
- AVOID ad-hoc one-off styles, mismatched fonts/colours, logos, and background junk that vary slide to slide.

### Animations must serve a purpose

- DO use animation to control pacing and direct attention. Use `v-click` / `v-clicks` to reveal in step with the narration (supports cycling and fences), and `magic-move` for code that evolves. Use `v-motion` only when motion adds meaning. To point at something, use a static arrow / label or `v-mark` (e.g. `v-mark.circle`, `v-mark.underline`) rather than a laser pointer, which breaks eye contact with the audience.
- AVOID decorative motion that doesn't carry information, and animations that fire all at once and pre-empt what you're about to say.

### Reduce clutter and weight

- DO leave air: white space, few words, generous imagery. Strip redundant titles, logos, and decorative borders. Run the "print it and lay it on a table" test, a slide that looks too heavy on paper is too heavy.
- AVOID dense, text-heavy slides. A slide should be readable at a glance.

### One deliberately dense slide is allowed

- You may include exactly one intentionally overwhelming slide per deck (a hapax legomenon) when the point IS the complexity. Use it once, never as a habit.

### Don't depend on a dark room

- DO keep high contrast so the deck reads with the lights up. Dim rooms put audiences to sleep.
- AVOID low-contrast colour schemes that only work in the dark.

## Quick checklist

Run this against every slide you add or edit:

- Text is large (headline layout, body `text-3xl`+); few words.
- No raw bullet lists; ideas shown as one-per-slide, styled items, or components.
- Every animation serves pacing or attention; nothing purely decorative.
- Visuals are coherent with the rest of the deck (palette, spacing, layouts, single transition).
- Slide is light: air, no logos/background junk, passes the print-on-a-table test.
- Narrative duties are met where relevant: empowerment promise up front, cycling and verbal punctuation, a fence around each idea, re-engaging questions (answers in notes).
- Deck ends on a Contributions slide; collaborators credited on the first slide; no "Thank you" / "Questions?" final slide.
- At most one deliberately dense slide in the whole deck.
