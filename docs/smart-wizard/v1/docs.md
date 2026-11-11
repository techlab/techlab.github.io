---
layout: product
title: Documentation - Smart Wizard 
description: A modern, framework-agnostic wizard and multi-step component for JavaScript, React, and Vue
head:
  - - meta
    - name: description
      content: A modern, framework-agnostic wizard and multi-step component for JavaScript, React, and Vue
  - - meta
    - name: keywords
      content: wizard, stepper, multi-step, form, component, javascript, typescript, react, vue, smartwizard
---

<div class="tl-md-container tl-md-container-mt vp-doc">

# Installation  

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
<script type="module" lang="ts">
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
<script type="module" lang="ts">
  import { SmartWizard } from 'https://unpkg.com/@smart-wizard/core@1.0.1/dist/index.mjs';
  const wizard = new SmartWizard('#wizard', { theme: 'arrows' });
</script>
```
:::

## Quick Start — Vanilla JS

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
<script type="module" lang="ts">
  import { SmartWizard } from '@smart-wizard/core';

  const wizard = new SmartWizard('#wizard', {
    theme: 'arrows',
    transition: { effect: 'slideHorizontal', speed: 400 },
  });
</script>
```

## HTML Structure

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

## Configuration Options

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

## Methods & Properties

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

## Step Fluent API

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

## Events

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

## Extension System

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

## Loader

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

## Custom Transitions & Animations

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

## Themes & Color Schemes

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

## Layouts

SmartWizard supports both **horizontal** (default) and **vertical** orientations:

```javascript
wizard.setOptions({ layout: 'vertical' });
```

## React Adapter

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

## Vue 3 Adapter

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

## Security Notes

- **XSS Protection**: The core never assigns untrusted user strings to `innerHTML`. Use `setContent(element, content)` (exported by `@smart-wizard/core`) when building custom extensions.
- **CSP Friendly**: No `eval()` or unvetted inline script evaluation.
- **Prototype Pollution Defense**: Internal option merge utilities explicitly sanitize `__proto__`, `constructor`, and `prototype` object properties.
</div>