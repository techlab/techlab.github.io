---
title: Smart Wizard Changelog & Migration Guide
description: Release notes, version history, and migration guides for Smart Wizard v1.
ads: false
---

<script setup>
import ProductNav from '../.vitepress/theme/components/product/ProductNav.vue'
import { getProduct } from '../.vitepress/theme/data/products'

const product = getProduct('smart-wizard')
</script>

<ProductNav :product="product" />

<div class="tl-container" style="padding-top: 2rem;">

# Smart Wizard Changelog

Detailed release timeline and migration notes for Smart Wizard.

---

## [v1.0.1] — 2026

### Added
- **Swipe Extension**: Official release of `@smart-wizard/extension-swipe` with momentum scrolling and touch gesture recognition.
- **URL Hash Navigation**: `@smart-wizard/extension-url-hash` for seamless browser history back/forward buttons and deep links.
- **React 19 Compatibility**: Verified peer dependency support and SSR hydratability.

### Improved
- Optimized bundle footprint: core package reduced to `< 5.8 KB` gzipped.
- Improved ARIA tab accessibility on mobile screen readers.
- Fixed layout flashing on dynamically loaded steps with variable heights.

---

## [v1.0.0] — 2026

**Initial Stable Release of Smart Wizard v1 (Standalone)**

Smart Wizard v1 represents the official modern rebirth of the popular jQuery Smart Wizard plugin as an independent, framework-agnostic platform:

### Key Highlights
- **100% Written in TypeScript**: Clean type definitions, zero runtime dependencies.
- **Official React & Vue 3 Adapters**: First-class reactive components.
- **W3C WAI-ARIA Accessible**: Full keyboard traversal and screen reader roles.
- **Modular CSS Variable Themes**: `default`, `arrows`, `pills`, and `glow` with light/dark auto modes.
- **Built-in Animations**: `fade`, `slideHorizontal`, `slideVertical`, `slideSwing`, and external CSS animations (Animate.css).
- **Asynchronous Content Loader**: Dynamic step loading via standard Promise callbacks.

---

## Migration from jQuery Smart Wizard

If you are upgrading from `jquery-smartwizard` (v6 or v7):

1. **Remove jQuery dependency**: You no longer need to import jQuery before the wizard.
2. **Package change**: Replace `smartwizard` with `@smart-wizard/core`:
   ```bash
   npm uninstall smartwizard
   npm install @smart-wizard/core
   ```
3. **Initialization change**:
   ```javascript
   // Before (jQuery):
   $('#smartwizard').smartWizard({ theme: 'arrows' });

   // After (v1 Modern):
   import { SmartWizard } from '@smart-wizard/core';
   const wizard = new SmartWizard('#smartwizard', { theme: 'arrows' });
   ```
4. **CSS update**:
   ```javascript
   // Import modular stylesheet
   import '@smart-wizard/ui/dist/smartwizard-full.min.css';
   ```

</div>
