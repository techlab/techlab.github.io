<script setup lang="ts">
import { withBase } from 'vitepress'
import type { ProductDefinition } from '../../data/products'

defineProps<{
  product: ProductDefinition
}>()
</script>

<template>
  <section class="tl-ppricing-preview-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Licensing & Commercial Support</span>
        <h2 class="tl-section-title">Transparent Open-Source & Commercial Plans</h2>
        <p class="tl-section-desc">
          Smart Wizard is 100% Free and Open Source under the MIT license. We also offer commercial developer and team licenses with priority SLA support.
        </p>
      </div>

      <div class="tl-ppricing-grid">
        <!-- Community Plan -->
        <div class="tl-pplan-card">
          <div class="tl-pplan-header">
            <span class="tl-badge tl-badge-blue">Open Source</span>
            <h3 class="tl-pplan-title">Community</h3>
            <div class="tl-pplan-price">$0 <span>/ perpetual</span></div>
            <p class="tl-pplan-desc">For personal projects, open source, and standard commercial applications.</p>
          </div>

          <ul class="tl-pplan-features">
            <li>✓ MIT License</li>
            <li>✓ Full TypeScript core & zero runtime dependencies</li>
            <li>✓ Official React & Vue 3 adapters</li>
            <li>✓ Built-in themes (Default, Arrows, Pills, Glow)</li>
            <li>✓ Community GitHub Discussions & Issue tracking</li>
          </ul>

          <div class="tl-pplan-action">
            <a :href="withBase(product.docsLink || product.pageLink)" class="tl-btn tl-btn-secondary tl-btn-lg tl-btn-block">
              Get Started Free
            </a>
          </div>
        </div>

        <!-- Commercial Developer Plan -->
        <div class="tl-pplan-card tl-pplan-featured">
          <div class="tl-pplan-header">
            <span class="tl-badge tl-badge-emerald">Commercial</span>
            <h3 class="tl-pplan-title">Commercial Developer</h3>
            <div class="tl-pplan-price">$29 <span>/ one-time</span></div>
            <p class="tl-pplan-desc">For developers building client projects requiring priority email support and commercial indemnification.</p>
          </div>

          <ul class="tl-pplan-features">
            <li>✓ Commercial Perpetual License</li>
            <li>✓ No attribution required in closed-source code</li>
            <li>✓ Direct Email Priority Bug Resolution</li>
            <li>✓ Access to upcoming premium themes & extensions</li>
            <li>✓ Supports continued open-source development</li>
          </ul>

          <div class="tl-pplan-action">
            <a :href="withBase(`${product.pageLink}pricing`)" class="tl-btn tl-btn-primary tl-btn-lg tl-btn-block">
              View Licensing Options
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-ppricing-preview-section {
  padding: 5rem 0;
  background-color: var(--tl-bg-alt);
}

.tl-ppricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .tl-ppricing-grid {
    grid-template-columns: 1fr;
  }
}

.tl-pplan-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--tl-transition-normal);
}

.tl-pplan-card:hover {
  border-color: var(--tl-border-glow);
  transform: translateY(-2px);
  box-shadow: var(--tl-shadow-md);
}

.tl-pplan-featured {
  border-color: rgba(2, 132, 199, 0.4);
  background: linear-gradient(180deg, var(--tl-surface) 0%, var(--tl-bg) 100%);
  position: relative;
}

.tl-pplan-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--tl-text-primary);
  margin: 0.75rem 0 0.5rem 0;
}

.tl-pplan-price {
  font-size: 2.25rem;
  font-weight: 800;
  font-family: var(--tl-font-mono);
  color: var(--tl-brand-glow);
  margin-bottom: 0.75rem;
}

.tl-pplan-price span {
  font-size: 0.875rem;
  font-family: var(--tl-font-sans);
  color: var(--tl-text-muted);
  font-weight: 400;
}

.tl-pplan-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.tl-pplan-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
}

.tl-btn-block {
  width: 100%;
}
</style>
