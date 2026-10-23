<script setup lang="ts">
import type { ProductDefinition } from '../../data/products'

defineProps<{
  product: ProductDefinition
}>()
</script>

<template>
  <section class="tl-pfeatures-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Architecture & Capabilities</span>
        <h2 class="tl-section-title">Engineered for Modern Web Engineering</h2>
        <p class="tl-section-desc">
          Built from the ground up to solve complex multi-step form orchestration, user onboarding, and application state.
        </p>
      </div>

      <div class="tl-pfeatures-grid">
        <div v-for="(feat, idx) in product.features" :key="idx" class="tl-pfeature-card">
          <div class="tl-pfeat-icon">
            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="tl-pfeat-content">
            <h3 class="tl-pfeat-title">Key Capability #{{ idx + 1 }}</h3>
            <p class="tl-pfeat-desc">{{ feat }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-pfeatures-section {
  padding: 5rem 0;
}

.tl-pfeatures-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 768px) {
  .tl-pfeatures-grid {
    grid-template-columns: 1fr;
  }
}

.tl-pfeature-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all var(--tl-transition-fast);
}

.tl-pfeature-card:hover {
  border-color: var(--tl-border-glow);
  transform: translateY(-2px);
  box-shadow: var(--tl-shadow-sm);
}

.tl-pfeat-icon {
  color: var(--tl-brand-glow);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.tl-pfeat-title {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0 0 0.35rem 0;
}

.tl-pfeat-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.55;
  margin: 0;
}
</style>
