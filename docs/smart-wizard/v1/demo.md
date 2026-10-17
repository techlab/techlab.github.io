---
title: SmartWizard v1 - Interactive Demos
description: Interactive showcases and variations of SmartWizard v1
head:
  - - meta
    - name: description
      content: Interactive showcases and variations of SmartWizard v1
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

# SmartWizard <span class="text-gray-400">v1</span> Demos

Interactive demos demonstrating themes, layouts, form validation, and asynchronous content loading.

[← Back to Documentation](/smart-wizard/)

<ClientOnly>

## Demo 1: Vertical Layout & Pills Theme

Vertical orientation with the pills theme, ideal for side navigation or complex settings flows.

<div id="wizard-vertical"
     data-theme="pills"
     data-layout="vertical"
     data-color="ocean"
     data-color-scheme="auto">

  <nav class="sw-nav" role="tablist" aria-label="Vertical wizard steps">
    <div class="sw-nav-item" role="tab" aria-controls="vert-step-1">
      <div class="badge">1</div>
      <div class="info">
        <span class="title">General</span>
        <span class="desc">App preferences</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="vert-step-2">
      <div class="badge">2</div>
      <div class="info">
        <span class="title">Security</span>
        <span class="desc">2FA & Access</span>
      </div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="vert-step-3">
      <div class="badge">3</div>
      <div class="info">
        <span class="title">Notifications</span>
        <span class="desc">Alert settings</span>
      </div>
    </div>
  </nav>

  <div class="sw-panels">
    <section class="sw-panel" id="vert-step-1" role="tabpanel" hidden>
      <div class="sw-title">General Preferences</div>
      <div class="sw-desc">Configure your workspace name and language.</div>
      <div class="mt-4 space-y-3">
        <div>
          <label class="block text-sm font-medium mb-1">Workspace Name</label>
          <input type="text" class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" value="My Project Workspace" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Interface Language</label>
          <select class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700">
            <option>English (US)</option>
            <option>Spanish</option>
            <option>German</option>
          </select>
        </div>
      </div>
    </section>

    <section class="sw-panel" id="vert-step-2" role="tabpanel" hidden>
      <div class="sw-title">Security & Credentials</div>
      <div class="sw-desc">Manage two-factor authentication and session timeouts.</div>
      <div class="mt-4 space-y-3">
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="enable-2fa" checked class="rounded" />
          <label for="enable-2fa" class="text-sm font-medium">Require Two-Factor Authentication (2FA)</label>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Session Inactivity Timeout</label>
          <select class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700">
            <option>15 Minutes</option>
            <option selected>30 Minutes</option>
            <option>1 Hour</option>
          </select>
        </div>
      </div>
    </section>

    <section class="sw-panel" id="vert-step-3" role="tabpanel" hidden>
      <div class="sw-title">Notification Channels</div>
      <div class="sw-desc">Choose how you receive activity notifications.</div>
      <div class="mt-4 space-y-2">
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="email-notif" checked class="rounded" />
          <label for="email-notif" class="text-sm">Email summary digests</label>
        </div>
        <div class="flex items-center space-x-2">
          <input type="checkbox" id="browser-notif" checked class="rounded" />
          <label for="browser-notif" class="text-sm">Desktop push notifications</label>
        </div>
      </div>
    </section>
  </div>

  <div class="sw-toolbar sw-toolbar-bottom">
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
    </div>
    <div class="sw-toolbar-group">
      <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
    </div>
  </div>
</div>

## Demo 2: Form Validation on Step Transition

This wizard intercepts the `leaveStep` event and blocks forward navigation if required fields are empty.

<div id="wizard-validation"
     data-theme="arrows"
     data-color="violet"
     data-color-scheme="auto">

  <nav class="sw-nav" role="tablist">
    <div class="sw-nav-item" role="tab" aria-controls="val-step-1">
      <div class="badge">1</div>
      <div class="info"><span class="title">Required Fields</span></div>
    </div>
    <div class="sw-nav-item" role="tab" aria-controls="val-step-2">
      <div class="badge">2</div>
      <div class="info"><span class="title">Confirmation</span></div>
    </div>
  </nav>

  <div class="sw-panels">
    <section class="sw-panel" id="val-step-1" role="tabpanel" hidden>
      <div class="sw-title">Mandatory Information</div>
      <div class="sw-desc">Both fields are required to proceed to the next step.</div>
      <div class="mt-4 space-y-3">
        <div>
          <label class="block text-sm font-medium mb-1">Full Name *</label>
          <input id="val-name" type="text" required class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="Required" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Work Email *</label>
          <input id="val-email" type="email" required class="w-full px-3 py-2 border rounded-md dark:bg-gray-900 dark:border-gray-700" placeholder="name@company.com" />
        </div>
      </div>
      <div id="val-error-msg" class="text-red-500 text-sm mt-3 hidden">⚠️ Please complete all required fields correctly before advancing.</div>
    </section>

    <section class="sw-panel" id="val-step-2" role="tabpanel" hidden>
      <div class="sw-title">Success!</div>
      <div class="sw-desc">Validation passed successfully. You can navigate back or reset.</div>
    </section>
  </div>

  <div class="sw-toolbar sw-toolbar-bottom">
    <button type="button" class="sw-btn sw-btn-outline sw-btn-prev">← Back</button>
    <button type="button" class="sw-btn sw-btn-primary sw-btn-next">Next →</button>
  </div>
</div>

<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, watch } from 'vue'

const { isDark } = useData()

let wizVert: any = null;
let wizVal: any = null;

watch(isDark, (dark) => {
  const scheme = dark ? 'dark' : 'light';
  if (wizVert) wizVert.setOptions({ colorScheme: scheme });
  if (wizVal) wizVal.setOptions({ colorScheme: scheme });
});

onMounted(async () => {
  if (typeof window === 'undefined') return;

  const { SmartWizard } = await import('@smart-wizard/core');

  const elVert = document.getElementById('wizard-vertical');
  if (elVert) {
    wizVert = new SmartWizard(elVert, {
      layout: 'vertical',
      theme: 'pills',
      color: 'ocean',
      colorScheme: isDark.value ? 'dark' : 'light',
    });
  }

  const elVal = document.getElementById('wizard-validation');
  if (elVal) {
    wizVal = new SmartWizard(elVal, {
      theme: 'arrows',
      color: 'violet',
      colorScheme: isDark.value ? 'dark' : 'light',
    });

    wizVal.on('leaveStep', (e: CustomEvent) => {
      const { stepIndex, stepDirection } = e.detail;
      if (stepDirection === 'forward' && stepIndex === 0) {
        const nameInput = document.getElementById('val-name') as HTMLInputElement;
        const emailInput = document.getElementById('val-email') as HTMLInputElement;
        const errEl = document.getElementById('val-error-msg');

        const valid = Boolean(nameInput?.value.trim()) && Boolean(emailInput?.value.trim()) && emailInput.checkValidity();

        if (!valid) {
          e.preventDefault();
          wizVal.step(0).error();
          if (errEl) errEl.classList.remove('hidden');
        } else {
          wizVal.step(0).removeState('error').complete();
          if (errEl) errEl.classList.add('hidden');
        }
      }
    });
  }
});
</script>

</ClientOnly>
