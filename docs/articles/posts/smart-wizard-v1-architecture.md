---
title: "Rebuilding Smart Wizard: From jQuery Plugin to Zero-Dependency TypeScript Core"
description: An inside look at the technical architecture behind migrating a 12-year-old open-source library into a modern framework-agnostic stepper engine.
date: 2026-10-15
author: Dipu Rajendran
tags:
  - TypeScript
  - Architecture
  - Open Source
featured: false
---

# Rebuilding Smart Wizard: From jQuery Plugin to Zero-Dependency TypeScript Core

*Published on October 15, 2026 • By Dipu Rajendran • 7 min read*

---

For over a decade, **jQuery Smart Wizard** has powered multi-step checkouts, registration wizards, and onboarding flows for millions of web applications worldwide. When the project began in 2012, jQuery was the undisputed runtime of the web.

However, the modern frontend landscape in 2026 looks vastly different. Frameworks like React, Vue, Svelte, and solid-js dominate application architecture, while the native DOM API has matured to the point where external DOM manipulation libraries are completely unnecessary.

In this deep dive, we examine the architectural decisions that shaped **Smart Wizard v1**—a total rewrite from the ground up into a framework-agnostic, zero-dependency TypeScript core.

---

## 1. The Decision to Decouple

When approaching a major version rewrite of an established library, the first temptation is often to pick the current most popular framework—for instance, writing a React-only stepper component.

We deliberately resisted this temptation. Why?
1. **Framework Churn**: Web frameworks and their paradigms evolve every 2–3 years (class components → hooks → signals → server components).
2. **Ecosystem Fragmentation**: A React-only component leaves out Vue, Angular, Svelte, and multi-page PHP/Laravel/Rails developers.
3. **Core Logic is Universal**: The core responsibility of a stepper—managing an index, orchestrating step state transitions, validating step exits, and updating ARIA attributes—is purely functional and DOM-centric.

### The Inverted Adapter Architecture

Instead of tying the core to a framework, we inverted the relationship:

```
┌──────────────────────────────────────────────┐
│        @smart-wizard/core (TypeScript)       │
│  - State Machine & Transition Controller     │
│  - WAI-ARIA & Keyboard Navigation Management │
│  - Plugin Pipeline & Event Dispatcher        │
└──────────────────────┬───────────────────────┘
                       │
         ┌─────────────┴─────────────┐
         ▼                           ▼
┌──────────────────┐       ┌──────────────────┐
│  @smart-wizard/  │       │  @smart-wizard/  │
│      react       │       │       vue        │
└──────────────────┘       └──────────────────┘
```

The core is pure TypeScript. The React and Vue packages are thin reactive adapters that bridge component lifecycles to the core controller.

---

## 2. Zero Runtime Dependencies

One of the strict non-negotiable constraints of Smart Wizard v1 was **zero runtime dependencies**.

Every single byte bundled with `@smart-wizard/core` is code we author and verify:
- No polyfills for ancient Internet Explorer versions.
- No heavy utility libraries like Lodash.
- No animation runtime packages; transitions leverage native CSS classes and CSS Custom Properties.

The entire core bundle weighs under **6 KB gzipped**.

---

## 3. Accessible by Default (W3C WAI-ARIA)

In legacy web development, accessibility was frequently bolted on as an afterthought. For Smart Wizard v1, ARIA specifications were the foundation of the DOM model:

- The navigation container is semantically marked as `role="tablist"` with appropriate `aria-orientation`.
- Each step item is a `role="tab"`, linked via `aria-controls` to its corresponding `role="tabpanel"`.
- Keyboard handlers listen for ArrowLeft, ArrowRight, Home, and End, mirroring standard OS accessibility conventions.

When assistive technology users encounter Smart Wizard, screen readers immediately communicate total step count, current step progress, and error states without confusion.

---

## 4. CSS Architecture: The Power of Variables

Rather than bundling opinionated CSS-in-JS or rigid utility classes, Smart Wizard v1 separates themes into clean CSS files parameterized via custom properties:

```css
:root {
  --sw-border-color: #e2e8f0;
  --sw-theme-color: #0284c7;
  --sw-bg-color: #ffffff;
  --sw-text-color: #0f172a;
}

[data-color-scheme="dark"] {
  --sw-border-color: rgba(148, 163, 184, 0.15);
  --sw-theme-color: #38bdf8;
  --sw-bg-color: #0f172a;
  --sw-text-color: #f8fafc;
}
```

This allows developers to customize colors, radii, spacing, and transitions without touching JavaScript options or battling specificity wars.

---

## Looking Forward

Smart Wizard v1 represents the future of TechLaboratory: modern, accessible, zero-dependency tools built to withstand the test of time.

Try Smart Wizard today:
```bash
npm install @smart-wizard/core
```
