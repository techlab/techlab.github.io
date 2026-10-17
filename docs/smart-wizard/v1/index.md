---
title: SmartWizard v1
description: A modern, framework-agnostic wizard and multi-step component for JavaScript, React, and Vue
head:
  - - meta
    - name: description
      content: A modern, framework-agnostic wizard and multi-step component for JavaScript, React, and Vue
  - - meta
    - name: keywords
      content: wizard, stepper, multi-step, form, component, javascript, typescript, react, vue, smartwizard
  - - link
    - rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/smartwizard-full.min.css
  - - link
    - rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/themes/arrows.min.css
  - - link
    - rel: stylesheet
      href: https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/themes/pills.min.css
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css
---

# SmartWizard <span class="text-gray-400">v1</span>

A modern, framework-agnostic wizard / multi-step component
<hr>

**SmartWizard** is the next-generation continuation of the popular [jQuery SmartWizard](https://github.com/techlab/jquery-smartwizard), rebuilt from the ground up for the modern web. Built in TypeScript with zero runtime dependencies, it provides an accessible, lightweight, and extensible interface for orchestrating multi-step processes such as registration forms, checkout screens, surveys, onboarding tours, and complex application wizards.

SmartWizard features official adapters for **React** and **Vue 3**, an extensible lifecycle plugin architecture, rich built-in transition animations and CSS animation library support (including [Animate.css](https://animate.style/)), modular themes, customizable color presets with automatic dark-mode support, and a fluent step manipulation API.

<div class="flex flex-wrap flex-row justify-start gap-1 gap-y-0">

[![npm version](https://badge.fury.io/js/@smart-wizard%2Fcore.svg)](https://www.npmjs.com/package/@smart-wizard/core)

[![jsDelivr Hits](https://data.jsdelivr.net/v1/package/npm/@smart-wizard/core/badge?style=rounded)](https://www.jsdelivr.com/package/npm/@smart-wizard/core)

[![Npm Downloads](https://badgen.net/npm/dm/@smart-wizard/core?icon=npm)](https://www.npmjs.com/package/@smart-wizard/core)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/techlab/smart-wizard/main/LICENSE)

[![GitHub Repo](https://badgen.net/badge/icon/smart-wizard?icon=github&label=&color=0da4d3)](https://github.com/techlab/smart-wizard)

[![GitHub Sponsor](https://img.shields.io/badge/Sponsor-techlab-blue.svg?logo=github)](https://github.com/sponsors/techlab)

</div>

## Live Demo

:::details SmartWizard Configuration & Controls
<div class="settings-panel grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <!-- Theme & Animation -->
    <div class="settings-section">
      <h4>Appearance</h4>
      <div class="form-group">
        <label for="theme_selector">Theme</label>
        <select id="theme_selector">
          <option value="default">Default</option>
          <option value="arrows" selected>Arrows</option>
          <option value="pills">Pills</option>
        </select>
      </div>
      <div class="form-group">
        <label for="animation_selector">Transition</label>
        <select id="animation_selector">
          <optgroup label="Built-in Animations">
            <option value="default">Default (None)</option>
            <option value="fade">Fade</option>
            <option value="slideHorizontal" selected>Slide Horizontal</option>
            <option value="slideVertical">Slide Vertical</option>
            <option value="slideSwing">Slide Swing</option>
          </optgroup>
          <optgroup label="CSS Animations (Animate.css)">
            <option value="cssSlideH">Slide Horizontal</option>
            <option value="cssSlideV">Slide Vertical</option>
            <option value="cssFade">Fade</option>
            <option value="cssFadeSlideH">Fade + Slide Horizontal</option>
            <option value="cssFadeSlideV">Fade + Slide Vertical</option>
            <option value="cssBounce">Bounce</option>
            <option value="cssFlipH">Flip Horizontal</option>
            <option value="cssLightspeed">Lightspeed</option>
            <option value="cssRotate">Rotate</option>
            <option value="cssZoom">Zoom</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group">
          <label for="color_selector">Color Preset</label>
          <select id="color_selector">
            <option value="default" selected>Default</option>
            <option value="ocean">Ocean</option>
            <option value="teal">Teal</option>
            <option value="forest">Forest</option>
            <option value="violet">Violet</option>
            <option value="crimson">Crimson</option>
            <option value="amber">Amber</option>
            <option value="indigo">Indigo</option>
            <option value="slate">Slate ♿</option>
            <option value="purple">Purple</option>
            <option value="green">Green</option>
          </select>
      </div>
      <div class="form-group">
          <label for="layout_selector">Layout</label>
          <select id="layout_selector">
            <option value="horizontal" selected>Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
      </div>
    </div>
    <div class="settings-section">
      <h4>Interactive Controls</h4>
      <div class="form-group">
        <label>Current Status</label>
        <div id="step-status-display" class="font-medium text-blue-600 dark:text-blue-400 py-1">Step 1 of 4</div>
      </div>
      <h4>Navigation Actions</h4>
      <div class="button-group mb-4">
        <button type="button" class="btn btn-secondary" id="demo-prev-btn" disabled>Previous</button>
        <button type="button" class="btn btn-secondary" id="demo-next-btn">Next</button>
        <button type="button" class="btn btn-danger" id="demo-reset-btn">Reset</button>
      </div>
      <h4>Step State Controls</h4>
      <div class="button-group">
        <button type="button" class="btn btn-secondary" id="toggle-step2-btn">Toggle Disable Step 2</button>
        <button type="button" class="btn btn-secondary" id="toggle-step3-err-btn">Toggle Error Step 3</button>
      </div>
    </div>
</div>
:::

<div id="smartwizard"
     data-theme="arrows"
     data-layout="horizontal"
     data-color="default"
     data-color-scheme="auto">
  <!-- Top Toolbar with Step Status -->
  <div class="sw-toolbar sw-toolbar-top">
    <div class="sw-toolbar-group">
      <span class="sw-badge sw-badge-primary" id="badge-step-info">Step 1 of 4</span>
    </div>
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
      <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>
  <!-- Steps Navigation -->
  <nav class="sw-nav" role="tablist" aria-label="Wizard steps">
    <div class="sw-nav-item" role="tab" aria-controls="demo-step-1">
      <div class="badge">1</div>
      <div class="info">
        <span class="title">Account</span>
        <span class="desc">Credentials</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="demo-step-2">
      <div class="badge">2</div>
      <div class="info">
        <span class="title">Profile</span>
        <span class="desc">Personal info</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="demo-step-3">
      <div class="badge">3</div>
      <div class="info">
        <span class="title">Shipping</span>
        <span class="desc">Delivery details</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="demo-step-4">
      <div class="badge">4</div>
      <div class="info">
        <span class="title">Confirm</span>
        <span class="desc">Review & order</span>
      </div>
    </div>
  </nav>
  <!-- Content Panels -->
  <div class="sw-panels">
    <section class="sw-panel" id="demo-step-1" role="tabpanel">
      <div class="sw-title">Account Credentials</div>
      <div class="sw-desc">Set up your username and secure password for your account.</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label class="block text-sm font-medium mb-1">Username</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="johndoe" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email Address</label>
          <input type="email" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="john@example.com" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input type="password" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="••••••••" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Confirm Password</label>
          <input type="password" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="••••••••" />
        </div>
      </div>
    </section>
    <section class="sw-panel" id="demo-step-2" role="tabpanel">
      <div class="sw-title">Profile Information</div>
      <div class="sw-desc">Tell us a bit about yourself and your preferences.</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label class="block text-sm font-medium mb-1">First Name</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="John" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Last Name</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="Doe" />
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-1">Company / Organization</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="Acme Corporation" />
        </div>
      </div>
    </section>
    <section class="sw-panel" id="demo-step-3" role="tabpanel">
      <div class="sw-title">Shipping & Delivery</div>
      <div class="sw-desc">Enter destination address for delivery and order fulfillment.</div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div class="md:col-span-2">
          <label class="block text-sm font-medium mb-1">Street Address</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="100 Market Street, Suite 400" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">City</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="San Francisco" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Postal Code</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="94105" />
        </div>
      </div>
    </section>
    <section class="sw-panel" id="demo-step-4" role="tabpanel">
      <div class="sw-title">Confirm & Complete</div>
      <div class="sw-desc">Please review your setup before completing the process.</div>
      <div class="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 space-y-3">
        <div class="flex justify-between text-sm py-1 border-b dark:border-gray-700">
          <span class="text-gray-500">Selected Product</span>
          <span class="font-medium text-gray-900 dark:text-white">SmartWizard Pro Package</span>
        </div>
        <div class="flex justify-between text-sm py-1 border-b dark:border-gray-700">
          <span class="text-gray-500">Architecture</span>
          <span class="font-medium text-gray-900 dark:text-white">Framework Agnostic (Zero Runtime Dependencies)</span>
        </div>
        <div class="flex justify-between text-sm py-1">
          <span class="text-gray-500">Status</span>
          <span class="font-semibold text-emerald-600 dark:text-emerald-400">✓ Ready to Deploy</span>
        </div>
      </div>
    </section>
  </div>
  <!-- Bottom Toolbar -->
  <div class="sw-toolbar sw-toolbar-bottom">
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
    </div>
    <div class="sw-toolbar-group">
      <!-- Progress Bar -->
      <div class="sw-progress">
        <div class="sw-progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-danger sw-btn-reset">Reset</button>
      <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>
</div>

<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, watch } from 'vue'
const { isDark } = useData()
// CSS Animation mappings (Animate.css)
const cssAnimations = {
  cssSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__slideInLeft', hide: 'animate__slideOutRight' }, backward: { show: 'animate__slideInRight', hide: 'animate__slideOutLeft' } },
  cssSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__slideInDown', hide: 'animate__slideOutDown' }, backward: { show: 'animate__slideInUp', hide: 'animate__slideOutUp' } },
  cssFade: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeIn', hide: 'animate__fadeOut' }, backward: { show: 'animate__fadeIn', hide: 'animate__fadeOut' } },
  cssFadeSlideH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInLeft', hide: 'animate__fadeOutRight' }, backward: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' } },
  cssFadeSlideV: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__fadeInDown', hide: 'animate__fadeOutDown' }, backward: { show: 'animate__fadeInUp', hide: 'animate__fadeOutUp' } },
  cssBounce: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__bounceIn', hide: 'animate__bounceOut' }, backward: { show: 'animate__bounceIn', hide: 'animate__bounceOut' } },
  cssFlipH: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__flipInY', hide: 'animate__flipOutY' }, backward: { show: 'animate__flipInY', hide: 'animate__flipOutY' } },
  cssLightspeed: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__lightSpeedInLeft', hide: 'animate__lightSpeedOutRight' }, backward: { show: 'animate__lightSpeedInRight', hide: 'animate__lightSpeedOutLeft' } },
  cssRotate: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__rotateIn', hide: 'animate__rotateOut' }, backward: { show: 'animate__rotateIn', hide: 'animate__rotateOut' } },
  cssZoom: { prefix: 'animate__animated animate__faster', forward: { show: 'animate__zoomIn', hide: 'animate__zoomOut' }, backward: { show: 'animate__zoomIn', hide: 'animate__zoomOut' } },
};
let wizardInstance: any = null;
// Watch dark mode toggle and update wizard colorScheme
watch(isDark, (dark) => {
  if (wizardInstance) {
    wizardInstance.setOptions({
      colorScheme: dark ? 'dark' : 'light'
    });
  }
});
const loadStyles = async () => {
  const loadStyle = (href: string) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`link[href="${href}"]`)) {
        return resolve(true);
      }
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  };
  try {
    await Promise.all([
      loadStyle('https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/smartwizard-full.min.css'),
      loadStyle('https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/themes/arrows.min.css'),
      loadStyle('https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/themes/pills.min.css'),
      loadStyle('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css')
    ]);
    return true;
  } catch (err) {
    console.error('Failed loading SmartWizard stylesheets', err);
    return false;
  }
};
const initDemo = async () => {
  const wizardEl = document.getElementById('smartwizard');
  if (!wizardEl) return;
  const { SmartWizard } = await import('@smart-wizard/core');
  wizardInstance = new SmartWizard(wizardEl, {
    initialStep: 0,
    theme: 'arrows',
    colorScheme: isDark.value ? 'dark' : 'light',
    layout: 'horizontal',
    color: 'default',
    transition: {
      effect: 'slideHorizontal',
      speed: 400
    }
  });
  const prevBtn = document.getElementById('demo-prev-btn') as HTMLButtonElement | null;
  const nextBtn = document.getElementById('demo-next-btn') as HTMLButtonElement | null;
  const resetBtn = document.getElementById('demo-reset-btn') as HTMLButtonElement | null;
  const statusEl = document.getElementById('step-status-display');
  const badgeInfo = document.getElementById('badge-step-info');
  const updateControls = (stepIndex: number, stepPosition: string) => {
    if (prevBtn) prevBtn.disabled = stepPosition === 'first';
    if (nextBtn) nextBtn.disabled = stepPosition === 'last';
    const text = `Step ${stepIndex + 1} of ${wizardInstance.stepLength}`;
    if (statusEl) statusEl.textContent = text;
    if (badgeInfo) badgeInfo.textContent = text;
  };
  wizardInstance.on('showStep', (e: CustomEvent) => {
    const { stepIndex, stepPosition } = e.detail;
    updateControls(stepIndex, stepPosition);
  });
  // External Action buttons
  if (prevBtn) prevBtn.onclick = () => wizardInstance.prev();
  if (nextBtn) nextBtn.onclick = () => wizardInstance.next();
  if (resetBtn) resetBtn.onclick = () => wizardInstance.reset();
  // State toggle buttons
  const toggleStep2Btn = document.getElementById('toggle-step2-btn');
  if (toggleStep2Btn) {
    toggleStep2Btn.onclick = () => {
      const step2 = wizardInstance.step(1);
      if (step2.isDisabled()) {
        step2.enable();
        toggleStep2Btn.textContent = 'Disable Step 2';
      } else {
        step2.disable();
        toggleStep2Btn.textContent = 'Enable Step 2';
      }
    };
  }
  const toggleStep3ErrBtn = document.getElementById('toggle-step3-err-btn');
  if (toggleStep3ErrBtn) {
    toggleStep3ErrBtn.onclick = () => {
      const step3 = wizardInstance.step(2);
      if (step3.hasState('error')) {
        step3.removeState('error');
        toggleStep3ErrBtn.textContent = 'Mark Step 3 Error';
      } else {
        step3.error();
        toggleStep3ErrBtn.textContent = 'Clear Step 3 Error';
      }
    };
  }
  // Settings dropdowns
  const themeSelect = document.getElementById('theme_selector') as HTMLSelectElement | null;
  if (themeSelect) {
    themeSelect.onchange = () => {
      wizardInstance.setOptions({ theme: themeSelect.value });
    };
  }
  const animSelect = document.getElementById('animation_selector') as HTMLSelectElement | null;
  if (animSelect) {
    animSelect.onchange = () => {
      const val = animSelect.value;
      if (val in cssAnimations) {
        wizardInstance.setOptions({
          transition: {
            effect: 'css',
            speed: 400,
            css: (cssAnimations as any)[val]
          }
        });
      } else {
        wizardInstance.setOptions({
          transition: { effect: val, speed: 400 }
        });
      }
    };
  }
  const colorSelect = document.getElementById('color_selector') as HTMLSelectElement | null;
  if (colorSelect) {
    colorSelect.onchange = () => {
      wizardInstance.setOptions({ color: colorSelect.value });
    };
  }
  const layoutSelect = document.getElementById('layout_selector') as HTMLSelectElement | null;
  if (layoutSelect) {
    layoutSelect.onchange = () => {
      wizardInstance.setOptions({ layout: layoutSelect.value });
    };
  }
};
onMounted(async () => {
  if (typeof window !== 'undefined') {
    await loadStyles();
    await initDemo();
  }
});
</script>

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

## 📥 Installation

### Using Package Managers

Install the core engine and design tokens:

::: code-group
```bash [npm]
npm install @smart-wizard/core @smart-wizard/ui
```

```bash [pnpm]
pnpm add @smart-wizard/core @smart-wizard/ui
```

```bash [yarn]
yarn add @smart-wizard/core @smart-wizard/ui
```
:::

### Optional Framework Adapters & Extensions

::: code-group
```bash [npm]
# React adapter
npm install @smart-wizard/react

# Vue 3 adapter
npm install @smart-wizard/vue

# Touch swipe & browser history extensions
npm install @smart-wizard/extension-swipe @smart-wizard/extension-url-hash
```

```bash [pnpm]
pnpm add @smart-wizard/react @smart-wizard/vue @smart-wizard/extension-swipe @smart-wizard/extension-url-hash
```

```bash [yarn]
yarn add @smart-wizard/react @smart-wizard/vue @smart-wizard/extension-swipe @smart-wizard/extension-url-hash
```
:::

### Using CDN

Quickly include via jsDelivr or UNPKG in standard HTML

::: code-group

```html [jsDelivr]
<!-- Base & Full CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/smartwizard-full.min.css" />

<!-- Optional Theme CSS (e.g. Arrows) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@smart-wizard/ui@1.0.1/dist/themes/arrows.min.css" />

<!-- Core JavaScript (ES Module) -->
<script type="module">
  import { SmartWizard } from 'https://cdn.jsdelivr.net/npm/@smart-wizard/core@1.0.1/dist/index.mjs';
  const wizard = new SmartWizard('#wizard', { theme: 'arrows' });
</script>
```

```html [UNPKG]
<!-- Base & Full CSS -->
<link rel="stylesheet" href="https://unpkg.com/@smart-wizard/ui@1.0.1/dist/smartwizard-full.min.css" />

<!-- Optional Theme CSS (e.g. Arrows) -->
<link rel="stylesheet" href="https://unpkg.com/@smart-wizard/ui@1.0.1/dist/themes/arrows.min.css" />

<!-- Core JavaScript (ES Module) -->
<script type="module">
  import { SmartWizard } from 'https://unpkg.com/@smart-wizard/core@1.0.1/dist/index.mjs';
  const wizard = new SmartWizard('#wizard', { theme: 'arrows' });
</script>
```
:::

## ⚡ Quick Start — Vanilla JS

```html
<!-- 1. Load styles -->
<link rel="stylesheet" href="node_modules/@smart-wizard/ui/dist/smartwizard-full.css" />
<link rel="stylesheet" href="node_modules/@smart-wizard/ui/dist/themes/arrows.css" />

<!-- 2. Wizard markup -->
<div id="wizard">
  <nav class="sw-nav" role="tablist">
    <div class="sw-nav-item" role="tab">
      <div class="badge">1</div>
      <div class="info">
        <span class="title">Account</span>
        <span class="desc">Your details</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab">
      <div class="badge">2</div>
      <div class="info">
        <span class="title">Address</span>
        <span class="desc">Location info</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab">
      <div class="badge">3</div>
      <div class="info">
        <span class="title">Finish</span>
        <span class="desc">Done!</span>
      </div>
    </div>
  </nav>

  <div class="sw-panels">
    <section class="sw-panel" id="panel-1" role="tabpanel" hidden>
      <div class="sw-title">Welcome</div>
      <div class="sw-desc">Fill in your account details.</div>
    </section>
    <section class="sw-panel" id="panel-2" role="tabpanel" hidden>
      <div class="sw-title">Address</div>
      <div class="sw-desc">Provide your shipping address.</div>
    </section>
    <section class="sw-panel" id="panel-3" role="tabpanel" hidden>
      <div class="sw-title">All Done!</div>
      <div class="sw-desc">Review and submit your order.</div>
    </section>
  </div>

  <div class="sw-toolbar sw-toolbar-bottom">
    <div class="sw-toolbar-group">
      <button class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
    </div>
    <div class="sw-toolbar-group">
      <button class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>
</div>

<!-- 3. Initialize with JavaScript -->
<script type="module">
  import { SmartWizard } from '@smart-wizard/core';

  const wizard = new SmartWizard('#wizard', {
    theme: 'arrows',
    transition: { effect: 'slideHorizontal', speed: 400 },
  });
</script>
```

## 🏗 HTML Structure

SmartWizard uses semantic markup and `sw-*` class conventions:

```html
<div id="wizard"
  data-theme="arrows"
  data-layout="horizontal"
  data-color="default"
  data-color-scheme="auto">

  <!-- Optional Top Toolbar -->
  <div class="sw-toolbar sw-toolbar-top">
    <div class="sw-toolbar-group">
      <span class="sw-badge sw-badge-primary">Step 1 of 4</span>
    </div>
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-danger sw-btn-reset">Reset</button>
      <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
      <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="sw-nav" role="tablist" aria-label="Wizard steps">
    <div class="sw-nav-item" role="tab" aria-controls="panel-1">
      <div class="badge">1</div>
      <div class="info">
        <span class="title">Account</span>
        <span class="desc">Personal details</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="panel-2">
      <div class="badge">2</div>
      <div class="info">
        <span class="title">Profile</span>
        <span class="desc">Profile info</span>
      </div>
    </div>
  </nav>

  <!-- Optional Progress Bar -->
  <div class="sw-progress">
    <div class="sw-progress-bar" role="progressbar"
         style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
    </div>
  </div>

  <!-- Content Panels -->
  <div class="sw-panels">
    <section class="sw-panel" id="panel-1" role="tabpanel" hidden>
      <div class="sw-title">Account</div>
      <div class="sw-desc">Fill in your account details.</div>
    </section>
    <section class="sw-panel" id="panel-2" role="tabpanel" hidden>
      <div class="sw-title">Profile</div>
      <div class="sw-desc">Provide your information.</div>
    </section>
  </div>

  <!-- Optional Bottom Toolbar -->
  <div class="sw-toolbar sw-toolbar-bottom">
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
    </div>
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>
</div>
```

### `data-*` Attribute Configuration

All options can be configured via `data-*` attributes on the root container element:

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-theme` | `default` \| `arrows` \| `pills` | Visual theme |
| `data-layout` | `horizontal` \| `vertical` | Navigation orientation layout |
| `data-color` | `default` \| `ocean` \| `forest` \| `violet` \| `crimson` \| `amber` \| `indigo` \| `slate` \| `teal` \| `purple` \| `green` | Color preset name |
| `data-color-scheme` | `auto` \| `dark` \| `light` \| `none` | Color scheme mode override |
| `data-transition` | `default` \| `none` \| `fade` \| `slideHorizontal` \| `slideVertical` \| `slideSwing` \| `css` | Transition effect |
| `data-initial-step` (or `data-start-step`) | `number` | Starting zero-based active step index |

## ⚙️ Configuration Options

All options are optional. Default parameters:

```typescript
const wizard = new SmartWizard('#wizard', {
  initialStep: 0,           // Starting step index (0-based)
  theme: 'default',         // 'default' | 'arrows' | 'pills'
  colorScheme: 'auto',      // 'auto' | 'dark' | 'light' | 'none'
  layout: 'horizontal',     // 'horizontal' | 'vertical'
  color: 'default',         // 'default' | 'ocean' | 'forest' | 'violet' | any custom string

  behavior: {
    autoHeight: true,               // Automatically animate panel container height
    useUrlHash: false,              // Synchronize active step with URL hash
    supportBrowserHistory: false,   // Integrate browser back/forward buttons
  },

  navigation: {
    enabled: true,              // Enable click navigation on step nav-items
    alwaysClickable: false,     // Allow clicking any nav-item at any time
    completed: {
      enabled: true,                    // Mark visited steps as 'completed'
      completeAllPreviousSteps: true,   // Mark all previous steps completed on hash nav
      clearOnBack: false,               // Remove 'completed' state when navigating back
      clickable: true,                  // Allow clicking completed nav-items
    },
  },

  transition: {
    effect: 'default',  // 'default'|'none'|'fade'|'slideHorizontal'|'slideVertical'|'slideSwing'|'css'
    speed: 400,         // Duration in ms
    easing: '',         // CSS easing curve string
    css: {              // Used when effect: 'css'
      prefix: '',
      forward:  { show: '', hide: '' },
      backward: { show: '', hide: '' },
    },
  },

  keyboardNavigation: {
    enabled: true,
    keys: {
      left:  ['ArrowLeft'],
      right: ['ArrowRight'],
    },
  },

  swipeNavigation: {
    enabled: false,   // Touch-swipe navigation
    threshold: 50,    // Minimum swipe px distance to trigger navigation
  },

  stepStates: {
    completed: [],  // Pre-mark step indices as completed
    disabled:  [],  // Pre-disable step indices
    hidden:    [],  // Pre-hide step indices
    error:     [],  // Pre-mark step indices as error
    warning:   [],  // Pre-mark step indices as warning
  },

  scrollToView: true,   // Scroll active nav item into view when overflowing
  contentLoader: null,  // Async content loader callback
});
```

### Dynamic Content Loading

Load panel HTML asynchronously on demand:

```typescript
new SmartWizard('#wizard', {
  contentLoader(stepIndex, direction, position, panelElement, done) {
    fetch(`/api/steps/${stepIndex}`)
      .then(response => response.text())
      .then(html => done(html))
      .catch(() => done('<p class="text-red-500">Failed to load content.</p>'));
  },
});
```

## 🔧 Methods & Properties

### Public Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `next()` | `void` | Navigate to the next accessible step |
| `prev()` | `void` | Navigate to the previous accessible step |
| `first()` | `void` | Jump directly to the first step |
| `last()` | `void` | Jump directly to the last step |
| `goTo(index, { force? })` | `void` | Navigate to specific step index; `force: true` bypasses disabled/hidden checks |
| `reset()` | `void` | Reset wizard to `initialStep` and reset step states |
| `setOptions(opts)` | `void` | Merge and apply new configuration options at runtime |
| `getOptions()` | `WizardOptions` | Return the current resolved options object |
| `updateHeight()` | `void` | Recalculate container height manually |
| `extend(...exts)` | `this` | Register one or more extensions (fluent chaining) |
| `step(index)` | `WizardStep` | Fluent wrapper for single step state management |
| `steps(indices?)` | `WizardStepCollection` | Fluent wrapper for multiple or all steps |
| `destroy()` | `void` | Tear down listeners, timers, and DOM mutations |
| `on(event, cb)` | `this` | Add typed event listener |
| `off(event, cb)` | `this` | Remove typed event listener |
| `once(event, cb)` | `this` | Add one-time typed event listener |

### Read-only Properties

| Property | Type | Description |
|----------|------|-------------|
| `activeIndex` | `number` | Zero-based index of the currently active step |
| `activeStep` | `WizardStep` | Fluent step wrapper for active step |
| `stepLength` | `number` | Total count of steps |
| `stepItems` | `StepItem[]` | Array of step nav anchor and panel DOM element pairs |
| `progress` | `number` | Current progress percentage (`0`–`100`) |
| `canGoNext` | `boolean` | True if a navigable forward step exists |
| `canGoPrev` | `boolean` | True if a navigable backward step exists |
| `info` | `WizardInfo` | Snapshot: `{ stepInfo, layout, colorScheme, width, height, contentDirection }` |
| `loader` | `WizardLoader` | Loader controller with `show()` and `hide()` |
| `options` | `WizardOptions` | Resolved options object |
| `id` | `string` | Unique instance ID |
| `main` | `HTMLElement` | Root wizard container element |
| `container` | `HTMLElement` | Content container element (`.sw-panels`) |

## 🪜 Step Fluent API

Manage step states cleanly using expressive chaining:

```typescript
// Single step operations
wizard.step(0).complete();
wizard.step(1).disable();
wizard.step(2).error();
wizard.step(3).warning();
wizard.step(4).hide();

// State queries
wizard.step(0).isActive();        // → boolean
wizard.step(0).isCompleted();     // → boolean
wizard.step(1).isDisabled();      // → boolean
wizard.step(2).hasState('error'); // → boolean

// Chaining operations
wizard.step(2).removeState('error').enable().complete();

// Bulk operations on all steps
wizard.steps().disable();
wizard.steps().reset();

// Bulk operations on specific indices
wizard.steps([1, 2, 3]).error();
wizard.steps([0, 1]).enable();

// Access DOM elements directly
const { element, page } = wizard.step(0);
// element -> nav item element (.sw-nav-item)
// page    -> panel element (.sw-panel)
```

### Step States Reference

| State | CSS Class | Effect |
|-------|-----------|--------|
| `active` | `sw-state-active` | Current active step (managed automatically) |
| `completed` | `sw-state-completed` | Marks step as completed / visited |
| `disabled` | `sw-state-disabled` | Prevents navigation to this step |
| `hidden` | `sw-state-hidden` | Hides step nav item and skips in flow |
| `error` | `sw-state-error` | Highlights step with error indicators |
| `warning` | `sw-state-warning` | Highlights step with warning indicators |

## 🎨 Events

Subscribe with the fluent typed API or native DOM events:

```typescript
// Typed listener via the wizard API
wizard.on('showStep', (e) => {
  const { stepIndex, stepElement, stepDirection, stepPosition } = e.detail;
  console.log(`Arrived at step ${stepIndex} (${stepPosition}) heading ${stepDirection}`);
});

wizard.once('loaded', () => console.log('SmartWizard is ready!'));
```

### Event Reference

| Event | Cancelable | `event.detail` |
|-------|------------|----------------|
| `initialized` | No | `{ wizard }` |
| `loaded` | No | `{ wizard }` |
| `showStep` | No | `{ stepIndex, stepElement, stepDirection, stepPosition }` |
| `leaveStep` | **Yes** | `{ stepIndex, nextStepIndex, stepElement, stepDirection, stepPosition }` |
| `stepChanged` | No | `{ currentStep, previousStep }` |

### Form Validation Example

Use `leaveStep` with `e.preventDefault()` to stop navigation until current step fields pass validation:

```javascript
wizard.on('leaveStep', (e) => {
  const { stepIndex, stepDirection } = e.detail;

  // Only validate when advancing forward
  if (stepDirection === 'forward') {
    const currentPanel = wizard.step(stepIndex).page;
    const inputs = currentPanel.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add('border-red-500');
      } else {
        input.classList.remove('border-red-500');
      }
    });

    if (!isValid) {
      e.preventDefault(); // Block step navigation
      wizard.step(stepIndex).error();
      return;
    }

    // Step passed validation
    wizard.step(stepIndex).removeState('error').complete();
  }
});
```

## 🔌 Extension System

Extensions hook cleanly into the wizard lifecycle:

```typescript
import type { WizardExtension } from '@smart-wizard/core';

const analyticsExtension: WizardExtension = {
  name: 'analytics',

  onInstall(wizard) {
    console.log('Installed analytics extension');
  },

  onLoad(wizard) {
    console.log('Wizard loaded step 0');
  },

  async onBeforeShow(wizard, { stepIdx, activeIndex, direction }) {
    if (direction === 'forward') {
      const ok = await checkRemoteQuota();
      if (!ok) return false; // Cancels navigation
    }
  },

  onAfterShow(wizard, { stepIdx, direction }) {
    trackStepView(stepIdx);
  },
};

const wizard = new SmartWizard('#wizard', options)
  .extend(analyticsExtension);
```

### Official Extensions

#### `@smart-wizard/extension-swipe` — Touch Swipe Navigation
Adds swipe gesture support on touch screens while preserving natural vertical page scrolling:

```typescript
import { SmartWizard } from '@smart-wizard/core';
import { createSwipeExtension } from '@smart-wizard/extension-swipe';

const wizard = new SmartWizard('#wizard', options)
  .extend(createSwipeExtension({ threshold: 50 }));
```

#### `@smart-wizard/extension-url-hash` — URL Hash & Browser History
Synchronizes active step with `window.location.hash` and supports browser back and forward navigation:

```typescript
import { SmartWizard } from '@smart-wizard/core';
import { createUrlHashExtension } from '@smart-wizard/extension-url-hash';

const wizard = new SmartWizard('#wizard', options)
  .extend(createUrlHashExtension({ supportHistory: true }));
```

## ⏳ Loader

Control the built-in loading overlay during asynchronous tasks:

```typescript
wizard.loader.show(); // Displays loading overlay
wizard.loader.hide(); // Hides loading overlay

// Example: Async form submission on step leave
wizard.on('leaveStep', async (e) => {
  e.preventDefault();
  wizard.loader.show();
  try {
    const success = await submitStepData(e.detail.stepIndex);
    if (success) {
      wizard.goTo(e.detail.nextStepIndex, { force: true });
    }
  } finally {
    wizard.loader.hide();
  }
});
```

## 🎬 Custom Transitions & Animations

Register your own animation transition handlers:

```typescript
import { SmartWizard, registerTransition } from '@smart-wizard/core';

registerTransition('customZoom', (next, current, direction, wizard, done) => {
  // Your custom animation logic...
  done(); // Call done() when animation finishes
});

const wizard = new SmartWizard('#wizard', {
  transition: { effect: 'customZoom', speed: 500 }
});
```

### CSS Animations (Animate.css)

```javascript
new SmartWizard('#wizard', {
  transition: {
    effect: 'css',
    speed: 400,
    css: {
      prefix: 'animate__animated animate__faster',
      forward:  { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
      backward: { show: 'animate__fadeInLeft',  hide: 'animate__fadeOutRight' }
    }
  }
});
```

## 🎨 Themes & Color Schemes

### Themes

| Theme | CSS File | Description |
|-------|----------|-------------|
| `default` | _Included in core full bundle_ | Clean, minimal flat design |
| `arrows` | `@smart-wizard/ui/dist/themes/arrows.css` | Chevron arrow connectors |
| `pills` | `@smart-wizard/ui/dist/themes/pills.css` | Rounded capsule / pill tabs |

Switch themes anytime at runtime:

```javascript
wizard.setOptions({ theme: 'pills' });
```

### Color Presets & Dark Mode

SmartWizard supports `colorScheme: 'auto' | 'dark' | 'light' | 'none'` and includes predefined color presets:

`default` · `ocean` · `forest` · `violet` · `crimson` · `amber` · `indigo` · `slate ♿` · `teal` · `purple` · `green`

```javascript
// Change color preset and force dark mode
wizard.setOptions({
  color: 'ocean',
  colorScheme: 'dark'
});
```

Define custom themes with CSS variables:

```css
[data-color="brand"] {
  --sw-primary: #3b82f6;
  --sw-on-primary: #ffffff;
  --sw-primary-hover: #2563eb;
}
```

## 📐 Layouts

SmartWizard supports both **horizontal** (default) and **vertical** orientations:

```javascript
wizard.setOptions({ layout: 'vertical' });
```

## ⚛️ React Adapter

```bash
npm install @smart-wizard/react @smart-wizard/core @smart-wizard/ui
```

```tsx
import { useRef } from 'react';
import { useSmartWizard } from '@smart-wizard/react';
import '@smart-wizard/ui/full';
import '@smart-wizard/ui/themes/arrows.css';

export function CheckoutWizard() {
  const wizardRef = useRef<HTMLDivElement>(null);

  const { next, prev, stepInfo, activeIndex } = useSmartWizard(wizardRef, {
    theme: 'arrows',
    transition: { effect: 'slideHorizontal', speed: 400 }
  });

  return (
    <div ref={wizardRef} id="wizard">
      <nav className="sw-nav" role="tablist">
        <div className="sw-nav-item" role="tab">
          <div class="badge">1</div>
          <div class="info"><span class="title">Billing</span></div>
        </div>
        <div className="sw-nav-item" role="tab">
          <div class="badge">2</div>
          <div class="info"><span class="title">Shipping</span></div>
        </div>
      </nav>

      <div className="sw-panels">
        <section className="sw-panel" role="tabpanel" hidden>
          <h3>Billing Details</h3>
        </section>
        <section className="sw-panel" role="tabpanel" hidden>
          <h3>Shipping Address</h3>
        </section>
      </div>

      <div className="sw-toolbar sw-toolbar-bottom">
        <button className="sw-btn sw-btn-outline" onClick={prev}>Back</button>
        <button className="sw-btn sw-btn-primary" onClick={next}>Next</button>
      </div>
    </div>
  );
}
```

### React Context API (`SmartWizardProvider`)

```tsx
import { SmartWizardProvider, useWizardContext } from '@smart-wizard/react';

function App() {
  return (
    <SmartWizardProvider options={{ theme: 'pills' }}>
      <WizardLayout />
    </SmartWizardProvider>
  );
}

function WizardLayout() {
  const { containerRef, next, prev, stepInfo } = useWizardContext();
  return (
    <div>
      <div ref={containerRef} id="wizard">
        {/* Nav and Panels */}
      </div>
      <div>
        <span>Step {stepInfo.currentStep + 1} of {stepInfo.totalSteps}</span>
        <button onClick={prev}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}
```

## 💚 Vue 3 Adapter

```bash
npm install @smart-wizard/vue @smart-wizard/core @smart-wizard/ui
```

```vue
<template>
  <div ref="wizardRef" id="wizard">
    <nav class="sw-nav" role="tablist">
      <div class="sw-nav-item" role="tab">
        <div class="badge">1</div>
        <div class="info"><span class="title">Account</span></div>
      </div>
      <div class="sw-nav-item" role="tab">
        <div class="badge">2</div>
        <div class="info"><span class="title">Review</span></div>
      </div>
    </nav>

    <div class="sw-panels">
      <section class="sw-panel" role="tabpanel" hidden>
        <h3>Account Setup</h3>
      </section>
      <section class="sw-panel" role="tabpanel" hidden>
        <h3>Final Review</h3>
      </section>
    </div>

    <div class="sw-toolbar sw-toolbar-bottom">
      <button class="sw-btn sw-btn-outline" @click="prev">Previous</button>
      <button class="sw-btn sw-btn-primary" @click="next">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSmartWizard } from '@smart-wizard/vue';
import '@smart-wizard/ui/full';
import '@smart-wizard/ui/themes/arrows.css';

const wizardRef = ref<HTMLElement | null>(null);

const { next, prev, stepInfo, activeIndex } = useSmartWizard(wizardRef, {
  theme: 'arrows',
  transition: { effect: 'slideHorizontal', speed: 400 }
});
</script>
```

## 🔐 Security Notes

- **XSS Protection**: The core never assigns untrusted user strings to `innerHTML`. Use `setContent(element, content)` (exported by `@smart-wizard/core`) when building custom extensions.
- **CSP Friendly**: No `eval()` or unvetted inline script evaluation.
- **Prototype Pollution Defense**: Internal option merge utilities explicitly sanitize `__proto__`, `constructor`, and `prototype` object properties.

## 📝 License

**SmartWizard** is dual-licensed:

**[MIT License](https://github.com/techlab/smart-wizard/blob/main/LICENSE)** — Free for personal and open-source projects.

**[Commercial License](https://techlaboratory.net/smart-wizard#license)** — Required for closed-source applications, commercial SaaS products, and client projects.  

> If you use **SmartWizard** in a commercial or client application, please purchase a commercial license to support active development and ongoing maintenance.

<a class="btn-main" href="https://tech-lab.lemonsqueezy.com/checkout/buy/7039e9a4-e3b0-4f06-bc4e-cb9892798cc8">Purchase Single Commercial License</a>

::: info 🎉 Special Launch Offer 🎉
Use coupon code `EARLY20` during checkout to receive **20% discount** on your license purchase.
:::

## 🤝 Contributing & Support

If you love SmartWizard, please star our repository and consider sponsoring:

- ⭐ Star on GitHub: [techlab/smart-wizard](https://github.com/techlab/smart-wizard)
- 💖 [GitHub Sponsor](https://github.com/sponsors/techlab)

Happy Coding ❤️
