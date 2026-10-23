---
title: Interactive Demos & Playgrounds — TechLaboratory
description: Live interactive showcases, theme switchers, and playgrounds for Smart Wizard and TechLaboratory components.
ads: false
---

<script setup>
import DemoEmbed from '../.vitepress/theme/components/demo/DemoEmbed.vue'
import { demos } from '../.vitepress/theme/data/demos'
</script>

<div class="tl-container" style="padding-top: 2rem;">

# Interactive Demos & Playgrounds

Experience live demonstrations of TechLaboratory components directly in your browser. Test layout modes, transition animations, form validation hooks, and dynamic data loading.

---

## Featured: Smart Wizard v1 Playground

<DemoEmbed
  src="/demo/smartwizard/demo.html"
  title="Smart Wizard v1 — Live Full Interactive Suite"
  framework="Vanilla TypeScript"
  height="540px"
/>

---

## All Component Demos

<div class="tl-all-demos-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin: 2.5rem 0;">
  <div v-for="d in demos" :key="d.id" class="tl-card">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <span class="tl-badge tl-badge-blue">{{ d.framework }}</span>
      <span style="font-family: var(--tl-font-mono); font-size: 0.75rem; color: var(--tl-text-muted);">{{ d.productName }}</span>
    </div>

    <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0 0 0.5rem 0;">{{ d.title }}</h3>
    <p style="font-size: 0.875rem; color: var(--tl-text-secondary); line-height: 1.5; margin: 0 0 1.25rem 0;">{{ d.description }}</p>

    <div v-if="d.previewImage" style="margin-bottom: 1.25rem;">
      <img :src="d.previewImage" :alt="d.title" style="width: 100%; border-radius: var(--tl-radius-md); border: 1px solid var(--tl-border);" />
    </div>

    <div style="display: flex; gap: 0.75rem;">
      <a :href="d.link" class="tl-btn tl-btn-primary tl-btn-sm">Launch Demo</a>
      <a :href="`/smart-wizard/v1/`" class="tl-btn tl-btn-secondary tl-btn-sm">Documentation</a>
    </div>
  </div>
</div>

</div>

<style>
@media (max-width: 860px) {
  .tl-all-demos-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
