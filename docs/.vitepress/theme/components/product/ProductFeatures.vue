<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { resolveRoute } from '../../utils/route'

const route = useRoute()

// Get page data reactively bound to route.path
const routeData = computed(() => resolveRoute(route.path))
const product = computed(() => routeData.value?.pageData || {} as any);
</script>

<template>
  <section class="tl-pfeatures-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Features & Capabilities</span>
        <h2 class="tl-section-title">Explore the features & capabilities</h2>
      </div>

      <div class="tl-pfeatures-grid">
        <div v-for="(feat, idx) in product.features" :key="idx" class="tl-pfeature-card">
          <div class="tl-pfeat-icon">
            <div v-if="feat.icon" class="tl-pfeatures-icon-box">{{ feat.icon }}</div>
            <svg v-if="!feat.icon" class="tl-pfeatures-icon-box" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
          </div>
          <div class="tl-pfeat-content">
            <h3 class="tl-pfeat-title">{{ feat.title }}</h3>
            <p class="tl-pfeat-desc">{{ feat.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-pfeatures-section {
  padding: 2rem 0;
}

.tl-pfeatures-icon-box {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
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
