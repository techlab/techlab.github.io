---
title: Smart Wizard Interactive Demos & Playgrounds
description: Interactive showcases, theme variations, vertical layouts, and StackBlitz playgrounds for Smart Wizard.
ads: false
---

<script setup>
import ProductNav from '../.vitepress/theme/components/product/ProductNav.vue'
import { getProduct } from '../.vitepress/theme/data/products'

const product = getProduct('smart-wizard')
</script>

<ProductNav :product="product" />

<div class="tl-container" style="padding-top: 2rem;">

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

</div>

<style>
@media (max-width: 860px) {
  .tl-demo-cards-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
