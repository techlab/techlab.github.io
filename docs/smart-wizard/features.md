---
title: Smart Wizard Features & Technical Architecture
description: Comprehensive feature breakdown of Smart Wizard v1, TypeScript architecture, and framework integrations.
ads: false
---

<script setup>
import ProductNav from '../.vitepress/theme/components/product/ProductNav.vue'
import { getProduct } from '../.vitepress/theme/data/products'

const product = getProduct('smart-wizard')
</script>

<ProductNav :product="product" />

<div class="tl-container" style="padding-top: 2rem;">

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

</div>
