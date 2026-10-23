<script setup lang="ts">
import type { ProductMetric } from '../../data/products'

defineProps<{
  metrics?: ProductMetric[]
}>()
</script>

<template>
  <section v-if="metrics && metrics.length > 0" class="tl-pmetrics-section">
    <div class="tl-container">
      <div class="tl-pmetrics-grid">
        <div v-for="m in metrics" :key="m.label" class="tl-metric-card">
          <span class="tl-metric-val">{{ m.value }}</span>
          <span class="tl-metric-lbl">{{ m.label }}</span>
          <p v-if="m.description" class="tl-metric-desc">{{ m.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-pmetrics-section {
  padding: 3rem 0;
  border-top: 1px solid var(--tl-border);
  border-bottom: 1px solid var(--tl-border);
  background-color: var(--tl-bg-alt);
}

.tl-pmetrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

@media (max-width: 860px) {
  .tl-pmetrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .tl-pmetrics-grid {
    grid-template-columns: 1fr;
  }
}

.tl-metric-card {
  display: flex;
  flex-direction: column;
}

.tl-metric-val {
  font-family: var(--tl-font-mono);
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--tl-brand-glow);
  line-height: 1.1;
  margin-bottom: 0.25rem;
}

.tl-metric-lbl {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35rem;
}

.tl-metric-desc {
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  line-height: 1.4;
  margin: 0;
}
</style>
