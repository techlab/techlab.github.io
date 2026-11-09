---
layout: product
title: Smart Wizard — Modern Framework-Agnostic Multi-Step Stepper & Wizard
description: Built from the ground up in TypeScript with zero runtime dependencies. Official React and Vue 3 adapters, modular themes, and fluent step APIs.
---

<ProductHero />
<ProductMetrics />
<ProductFeatures />

<div class="tl-md-container vp-doc">

**SmartWizard** is the next-generation continuation of the popular [jQuery SmartWizard](https://github.com/techlab/jquery-smartwizard), rebuilt from the ground up for the modern web. Built in TypeScript with zero runtime dependencies, it provides an accessible, lightweight, and extensible interface for orchestrating multi-step processes such as registration forms, checkout screens, surveys, onboarding tours, and complex application wizards.

SmartWizard features official adapters for **React** and **Vue 3**, an extensible lifecycle plugin architecture, rich built-in transition animations and CSS animation library support (including [Animate.css](https://animate.style/)), modular themes, customizable color presets with automatic dark-mode support, and a fluent step manipulation API.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![npm version](https://badge.fury.io/js/@smart-wizard%2Fcore.svg)](https://www.npmjs.com/package/@smart-wizard/core)

<!-- [![jsDelivr Hits](https://data.jsdelivr.net/v1/package/npm/@smart-wizard/core/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@smart-wizard/core)

[![Npm Downloads](https://badgen.net/npm/dm/@smart-wizard/core?icon=npm)](https://www.npmjs.com/package/@smart-wizard/core) -->

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/smart-wizard/main/LICENSE)

[![GitHub Repo](https://badgen.net/badge/icon/smart-wizard?icon=github&label=&color=0da4d3)](https://github.com/techlab/smart-wizard)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## 📦 Packages

SmartWizard is architected as an ecosystem of focused, composable packages:

| Package | Description | Version |
|---------|-------------|---------|
| [`@smart-wizard/core`](https://www.npmjs.com/package/@smart-wizard/core) | Framework-agnostic engine written in TypeScript | `1.0.1` |
| [`@smart-wizard/ui`](https://www.npmjs.com/package/@smart-wizard/ui) | CSS design system, themes, and design tokens | `1.0.1` |
| [`@smart-wizard/react`](https://www.npmjs.com/package/@smart-wizard/react) | React hooks + Context API adapter | `1.0.1` |
| [`@smart-wizard/vue`](https://www.npmjs.com/package/@smart-wizard/vue) | Vue 3 composables adapter | `1.0.1` |
| [`@smart-wizard/extension-swipe`](https://www.npmjs.com/package/@smart-wizard/extension-swipe) | Touch swipe navigation extension | `1.0.1` |
| [`@smart-wizard/extension-url-hash`](https://www.npmjs.com/package/@smart-wizard/extension-url-hash) | URL hash and browser history extension | `1.0.1` |

## ✨ Features

- **Zero Runtime Dependencies**: Ultra lightweight and fast with modern native DOM operations.
- **100% TypeScript**: Built from the ground up with strict typings and full TypeScript declarations.
- **Framework Agnostic**: Core runs anywhere — in Vanilla JS, Vite, Astro, Next.js, Nuxt, or alongside any framework.
- **Official Adapters**: First-class support for **React** (`useSmartWizard`, `SmartWizardProvider`) and **Vue 3** (`useSmartWizard`).
- **Accessible (a11y)**: Built according to W3C WAI-ARIA tablist & tabpanel authoring patterns with keyboard navigation support.
- **Modular Themes**: Included themes: `default`, `arrows`, and `pills`, with simple CSS variable extensibility.
- **Rich Color Presets & Dark Mode**: Built-in palettes (`ocean`, `forest`, `violet`, `slate ♿`, etc.) and CSS custom properties with auto dark-mode switching.
- **Layout Flexibility**: Switch between `horizontal` and `vertical` step layouts effortlessly.
- **Transitions & Animations**: Built-in smooth animations (`fade`, `slideHorizontal`, `slideVertical`, `slideSwing`) and seamless CSS animation library integration ([Animate.css](https://animate.style/)).
- **Comprehensive Step States**: Granular states: `active`, `completed`, `disabled`, `hidden`, `error`, and `warning`.
- **Fluent Step API**: Clean, chainable API for single or bulk step state manipulation (`wizard.step(0).complete()`).
- **Plugin / Extension Lifecycle**: Extensible hooks (`onInstall`, `onInit`, `onBeforeShow`, `onAfterShow`, etc.) with official touch-swipe and URL hash history plugins.
- **Progress Bar & Loader**: Built-in progress calculation and async loading overlay.
- **Auto Height & Overflow Scrolling**: Auto-resizes step panel container smoothly and supports horizontal step scrolling on mobile devices.



---


# Smart Wizard Features & Architecture

**Smart Wizard v1** is a ground-up modernization of the world's most widely adopted web stepper engine. Built without legacy baggage, it combines high-performance vanilla TypeScript with framework adapters for React and Vue 3.

---

## 1. Zero Runtime Dependencies

Smart Wizard v1 has **0 production dependencies**. The entire core compiles to lightweight ESM and UMD bundles:

- Core package: `< 6 KB` gzipped
- UI stylesheets: Modular CSS with zero CSS-in-JS overhead
- Written in TypeScript with 100% strict type safety and auto-generated `.d.ts` declaration files.

```bash
npm install @smart-wizard/core
```

---

## 2. Framework-Agnostic Core + Official Adapters

Whether you are authoring a server-rendered multipage application, a React 19 Single Page App, a Vue 3 dashboard, or microfrontends, Smart Wizard operates identically:

```typescript
// Vanilla TypeScript / JavaScript
import { SmartWizard } from '@smart-wizard/core'
import '@smart-wizard/ui/dist/smartwizard-full.min.css'

const sw = new SmartWizard('#wizard-container', {
  theme: 'arrows',
  toolbar: { position: 'bottom' },
  transition: { animation: 'slideHorizontal' }
})
```

### Official Framework Packages:
- **`@smart-wizard/react`**: Idiomatic React component with hook support (`useWizard()`).
- **`@smart-wizard/vue`**: Vue 3 Composition API wrapper with reactive props and slots.

---

## 3. Modular Themes & Color Presets

Smart Wizard includes 4 pre-built themes, each configured entirely through standard CSS variables:

| Theme Name | Description | Ideal Use Case |
| :--- | :--- | :--- |
| **`default`** | Clean underline indicator with rounded step badges | Standard forms, surveys |
| **`arrows`** | Chevron breadcrumb progression | E-commerce checkout, linear workflows |
| **`pills`** | Distinct modern pills with high-contrast active states | Vertical sidebars, complex settings |
| **`glow`** | Ambient luminous borders with futuristic accents | Modern dashboards, SaaS onboarding |

All themes automatically adapt to `light` and `dark` modes via `data-color-scheme="auto"`.

---

## 4. W3C WAI-ARIA Accessibility

Accessibility is not an afterthought:
- Full `role="tablist"`, `role="tab"`, and `role="tabpanel"` semantics.
- Automatic `aria-selected`, `aria-controls`, and `aria-disabled` management.
- Complete keyboard navigation (`Left`, `Right`, `Home`, `End`).
- Smooth focus trapping and screen reader announcements.

---

## 5. Extensible Plugin & Lifecycle Architecture

Smart Wizard features a hook-based extension pipeline:

- **Touch & Swipe (`@smart-wizard/extension-swipe`)**: Natural gesture navigation on mobile devices.
- **URL Hash & History (`@smart-wizard/extension-url-hash`)**: Deep linking directly to steps with browser back/forward button support.
- **Form Validation Hooks**: Intercept step transitions with asynchronous `leave.sw` listeners before moving to the next step.

---

## 6. Comparison: Smart Wizard v1 vs jQuery Smart Wizard v7

| Feature | Smart Wizard v1 | jQuery Smart Wizard v7 |
| :--- | :--- | :--- |
| **Language** | Modern TypeScript (ESM) | TypeScript / jQuery UMD |
| **Runtime Dependencies** | None (0 KB) | jQuery (>= 1.11.1) |
| **React / Vue Adapters** | Native Official Adapters | Requires jQuery wrappers |
| **Mobile Gestures** | Modular Extension | Built-in touch handler |
| **CSS Architecture** | Modern CSS Variables | Bootstrap & CSS Variables |



## Contributing & Support

If you love SmartWizard, please star our repository and consider sponsoring:

- ⭐ Star on GitHub: [techlab/smart-wizard](https://github.com/techlab/smart-wizard)
- 💖 [GitHub Sponsor](https://github.com/sponsors/techlab)

Happy Coding ❤️

</div>

<CTASection />