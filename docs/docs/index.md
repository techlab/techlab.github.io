---
title: TechLaboratory Documentation Portal
description: Developer documentation, API references, framework integrations, and guides across all TechLaboratory components.
ads: false
---

<div class="tl-container" style="padding-top: 2rem;">

# TechLaboratory Documentation

Welcome to the TechLaboratory developer documentation portal. Find installation guides, API references, configuration options, and framework integrations for all our open-source frontend components and plugins.

---

## Products & Libraries

<div class="tl-docs-portal-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin: 2rem 0;">
  <div class="tl-card">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span class="tl-badge tl-badge-blue">Flagship Stepper</span>
      <span style="font-family: var(--tl-font-mono); font-size: 0.75rem; color: var(--tl-text-muted);">v1.0 (TS)</span>
    </div>
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem 0;">
      <a href="/smart-wizard/v1/" style="color: inherit; text-decoration: none;">Smart Wizard v1</a>
    </h3>
    <p style="font-size: 0.875rem; color: var(--tl-text-secondary); line-height: 1.5; margin: 0 0 1rem 0;">
      Next-generation framework-agnostic multi-step wizard. Built with zero runtime dependencies in TypeScript with official React and Vue 3 adapters.
    </p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <a href="/smart-wizard/v1/#installation" class="tl-btn tl-btn-primary tl-btn-sm">Getting Started</a>
      <a href="/smart-wizard/v1/#options" class="tl-btn tl-btn-secondary tl-btn-sm">API Options</a>
      <a href="/smart-wizard/demos" class="tl-btn tl-btn-ghost tl-btn-sm">Demos</a>
    </div>
  </div>

  <div class="tl-card">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span class="tl-badge tl-badge-blue">jQuery Plugin</span>
      <span style="font-family: var(--tl-font-mono); font-size: 0.75rem; color: var(--tl-text-muted);">v7.0</span>
    </div>
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem 0;">
      <a href="/jquery-smartwizard/v7/" style="color: inherit; text-decoration: none;">jQuery Smart Wizard</a>
    </h3>
    <p style="font-size: 0.875rem; color: var(--tl-text-secondary); line-height: 1.5; margin: 0 0 1rem 0;">
      The classic step wizard plugin for jQuery applications. Includes rich transition animations, responsive themes, and event hooks.
    </p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <a href="/jquery-smartwizard/v7/#quick-start" class="tl-btn tl-btn-primary tl-btn-sm">Quick Start</a>
      <a href="/jquery-smartwizard/v7/#parameters" class="tl-btn tl-btn-secondary tl-btn-sm">API Reference</a>
    </div>
  </div>

  <div class="tl-card">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span class="tl-badge tl-badge-emerald">E-Commerce</span>
      <span style="font-family: var(--tl-font-mono); font-size: 0.75rem; color: var(--tl-text-muted);">v3.0</span>
    </div>
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem 0;">
      <a href="/jquery-smartcart/v3/" style="color: inherit; text-decoration: none;">jQuery Smart Cart</a>
    </h3>
    <p style="font-size: 0.875rem; color: var(--tl-text-secondary); line-height: 1.5; margin: 0 0 1rem 0;">
      Interactive shopping cart with PayPal integration, Bootstrap support, custom event triggers, and clean checkout UI.
    </p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <a href="/jquery-smartcart/v3/" class="tl-btn tl-btn-primary tl-btn-sm">Documentation</a>
    </div>
  </div>

  <div class="tl-card">
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
      <span class="tl-badge tl-badge-violet">Tabs Control</span>
      <span style="font-family: var(--tl-font-mono); font-size: 0.75rem; color: var(--tl-text-muted);">v4.0</span>
    </div>
    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem 0;">
      <a href="/jquery-smarttab/v4/" style="color: inherit; text-decoration: none;">jQuery Smart Tab</a>
    </h3>
    <p style="font-size: 0.875rem; color: var(--tl-text-secondary); line-height: 1.5; margin: 0 0 1rem 0;">
      Flexible jQuery tab control with multiple visual themes, URL hash integration, Ajax loading, and auto-progress timers.
    </p>
    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
      <a href="/jquery-smarttab/v4/" class="tl-btn tl-btn-primary tl-btn-sm">Documentation</a>
    </div>
  </div>
</div>

---

## Core Engineering Concepts

### 1. Zero-Dependency & Progressive Enhancement
All TechLaboratory modern components are written in native TypeScript without heavyweight dependencies. They can be introduced into existing projects without requiring a full framework rewrite.

### 2. State & Lifecycle Architecture
Multi-step flows rely on structured step progression:
- `active`: Current visible step.
- `completed`: Successfully validated and past steps.
- `disabled`: Steps inaccessible until prerequisite steps are filled.
- `hidden`: Conditionally skipped steps.
- `error` / `warning`: Highlighted steps requiring user attention.

### 3. Styling via CSS Custom Properties
Rather than requiring rigid utility classes or runtime style injection, all themes expose standard CSS variables (e.g. `--sw-border-color`, `--sw-theme-color`, `--sw-bg-color`) supporting both manual overrides and automatic dark/light display mode detection.

</div>

<style>
@media (max-width: 800px) {
  .tl-docs-portal-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
