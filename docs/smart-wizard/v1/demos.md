---
layout: product
title: Smart Wizard Interactive Demos & Playgrounds
description: Interactive showcases, theme variations, vertical layouts, and StackBlitz playgrounds for Smart Wizard.
head:
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


<div class="tl-md-container tl-md-container-mt vp-doc">

# Smart Wizard Interactive Demos

Explore live examples of Smart Wizard in action across various themes, orientations, and validation workflows.

---

<div class="tl-demo-cards-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin: 2.5rem 0;">
  <!-- Demo 1 -->
  <div class="tl-card">
    <div style="margin-bottom: 1rem;">
      <span class="tl-badge tl-badge-blue">Flagship Theme</span>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 0.25rem 0;">Horizontal Stepper — Arrows Theme</h3>
      <p style="font-size: 0.875rem; color: var(--tl-text-secondary);">Classic directional chevron navigation. Ideal for standard registration workflows and linear step forms.</p>
    </div>
    <img src="/media/jquery-smart-wizard/v7/arrows.png" alt="Arrows Theme" style="border-radius: var(--tl-radius-md); width: 100%; border: 1px solid var(--tl-border); margin-bottom: 1.25rem;" />
    <div style="display: flex; gap: 0.75rem;">
      <a href="/smart-wizard/v1/demo" class="tl-btn tl-btn-primary tl-btn-sm">Launch Live Demo</a>
      <a href="/smart-wizard/v1/#horizontal-layout" class="tl-btn tl-btn-secondary tl-btn-sm">View Code</a>
    </div>
  </div>

  <!-- Demo 2 -->
  <div class="tl-card">
    <div style="margin-bottom: 1rem;">
      <span class="tl-badge tl-badge-emerald">Vertical Sidebar</span>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 0.25rem 0;">Vertical Orientation — Pills Theme</h3>
      <p style="font-size: 0.875rem; color: var(--tl-text-secondary);">Modern rounded pills with vertical progress indicators. Designed for account settings, dashboards, and complex profiles.</p>
    </div>
    <img src="/media/jquery-smart-wizard/v7/glow.png" alt="Pills Theme" style="border-radius: var(--tl-radius-md); width: 100%; border: 1px solid var(--tl-border); margin-bottom: 1.25rem;" />
    <div style="display: flex; gap: 0.75rem;">
      <a href="/smart-wizard/v1/demo" class="tl-btn tl-btn-primary tl-btn-sm">Launch Live Demo</a>
      <a href="/smart-wizard/v1/#vertical-layout" class="tl-btn tl-btn-secondary tl-btn-sm">View Code</a>
    </div>
  </div>

  <!-- Demo 3 -->
  <div class="tl-card">
    <div style="margin-bottom: 1rem;">
      <span class="tl-badge tl-badge-violet">E-Commerce</span>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 0.25rem 0;">Checkout Workflow & Validation</h3>
      <p style="font-size: 0.875rem; color: var(--tl-text-secondary);">Multi-step order confirmation with client-side field validation and asynchronous payment status checks.</p>
    </div>
    <img src="/media/jquery-smart-wizard/v7/checkout.png" alt="Checkout Flow" style="border-radius: var(--tl-radius-md); width: 100%; border: 1px solid var(--tl-border); margin-bottom: 1.25rem;" />
    <div style="display: flex; gap: 0.75rem;">
      <a href="/smart-wizard/v1/demo" class="tl-btn tl-btn-primary tl-btn-sm">Launch Live Demo</a>
      <a href="/smart-wizard/v1/#form-validation" class="tl-btn tl-btn-secondary tl-btn-sm">View Code</a>
    </div>
  </div>

  <!-- Demo 4 -->
  <div class="tl-card">
    <div style="margin-bottom: 1rem;">
      <span class="tl-badge tl-badge-amber">Dynamic</span>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0.5rem 0 0.25rem 0;">Asynchronous Content Loading</h3>
      <p style="font-size: 0.875rem; color: var(--tl-text-secondary);">Dynamically fetch step content on-demand via Promises, with automatic spinner overlay and error retry handling.</p>
    </div>
    <img src="/media/jquery-smart-wizard/v7/all-screens.png" alt="Asynchronous Loading" style="border-radius: var(--tl-radius-md); width: 100%; border: 1px solid var(--tl-border); margin-bottom: 1.25rem;" />
    <div style="display: flex; gap: 0.75rem;">
      <a href="/smart-wizard/v1/demo" class="tl-btn tl-btn-primary tl-btn-sm">Launch Live Demo</a>
      <a href="/smart-wizard/v1/#dynamic-content-loading" class="tl-btn tl-btn-secondary tl-btn-sm">View Code</a>
    </div>
  </div>
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


<style>
@media (max-width: 860px) {
  .tl-demo-cards-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
