# TypeScript Visual Learning Site — Plan

## Goals
- ✅ Be the first stop for CS newcomers to master TypeScript through visual mental models, runnable code, and immediate feedback.
- ✅ Show “runtime + type system” together: stack/heap state, promises, and type narrowing side by side.
- ☐ Keep every lesson actionable with try-it labs, guardrails, and quizzes.

## Audience Expectations
- See what happens in memory: stack vs heap, copies vs references, promise lifecycle, call stack frames, discriminated union narrowing.
- Edit code, run, and watch the viz update; clear errors with why/how to fix.
- A guided path with checkpoints, quizzes, and “try to break it” challenges.
- Real-world patterns: API responses, async with AbortSignal, module interop, strict config guidance, and (optionally) React typing patterns.

## Experience Pillars
- ✅ Narrative + Viz + Code: concepts now have copy + memory viz + code examples.
- ✅ Timeline controls: play/pause/step; (compare mode pending).
- ☐ Safety-first: `unknown` + guards, `satisfies`, strict flags on by default; friendly error surfaces.
- ☐ Progression map: Basics → Intermediate → Advanced with prerequisite gating and confidence tracking.

## Core Features
- ✅ Concept pages: story, memory viz (stack/heap/links). Code lab exists; quizzes/pitfalls pending.
- ☐ Playground modes: Guided (goal-driven snippets) and Free (open editor with strict flags).
- ☐ Assessments: quick MCQ + “what does this narrow to?” + type tests (tsd/expectTypeOf style).
- ☐ Content search and progression tracking.

## Architecture (frontend)
- ✅ React + TypeScript + Vite; Framer Motion for animation; Monaco for editor.
- ✅ Visualization renderer: SVG-first (stack/heap/arrows/annotations).
- ✅ State model: content separate from viz scenes (data-driven).
- ✅ Runtime: in-browser TS compiler + sandboxed execution (playground).
- ☐ Routing enhancements: lazy-load heavy viz bundles (baseline routing exists).

## Data Models (sketch)
- ✅ Concept content: `id`, `title`, `description`, `longDescription`, `syntax`, `exampleCode`, `why`.
- ✅ Visualization scene: `title`, `steps[]`, stack/heap with address/size/refs.
- ☐ Playground snippet: `id`, `name`, `code`, `goal`, `hints`, `tests` (type-level + runtime).

## Visualization Behavior
- ✅ Controls: prev/next/play and auto-play (compare pending).
- ☐ Animations: <300ms default; respect prefers-reduced-motion (baseline anims present).
- ✅ Rendering: stack/heap, arrows, diff highlighting, annotations (addresses/sizes).

## Editor & Runtime Safety
- ✅ TypeScript diagnostics with strict config; surface line/col.
- ✅ Sandboxed runner: console/timers, timeouts; no network/local access.
- ☐ Highlight type errors in viz when relevant (planned).

## Accessibility & Performance
- ☐ Keyboard navigation + SR labels for viz controls/items.
- ☐ prefers-reduced-motion compliance.
- ☐ Lazy-load viz assets; cache for offline-friendly experience.

## Content Roadmap (initial)
- ✅ Basics: primitives vs objects (copy vs reference) implemented with viz; other basics have content and static viz.
- ✅ Intermediate: unions/guards, assertions/satisfies, type queries, modules/interop, async/await, tsconfig strict — enriched memory viz scenes.
- ☐ Advanced: generics, utility/mapped/conditional/template literals, ambient/augmentation (viz enrichment pending).
- ☐ Applied tracks: API modeling, React typing, testing types (future).

## MVP Slice to Ship
- ✅ Exemplar concept: Primitives (copy vs reference) with interactive viz.
- ✅ Exemplar concepts: Async/Await (promise lifecycle), Unions + Guards (discriminated responses) — scenes added.
- ✅ Memory viz with stepper (auto-play) — code lab present; wiring viz to live code pending.
- ☐ Quick quiz per concept; progression saved locally.
- ☐ Playground guided mode with 2-3 challenges.

## Next Steps
- ✅ Finalize content schema (concept + viz; quizzes replaced by problems with hints/solutions).
- ✅ Implement SVG viz renderer with stack/heap/arrows and step controls.
- ☐ Wire Monaco + TS compiler + sandbox runner to drive viz state from code (for select concepts).
- ✅ Build exemplar flows (Primitives, Async/Await, Unions/Guards) and problems section with LeetCode-style detail (hints/solution/expected output).***

