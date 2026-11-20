<script setup lang="ts">
import { computed } from 'vue'
import { withBase, useRoute } from 'vitepress'
import { resolveRoute } from '../../utils/route'
import type { PricePlan } from '../../data/products'

const route = useRoute()

// Get page data reactively bound to route.path
const routeData = computed(() => resolveRoute(route.path))
const product = computed(() => (routeData.value?.pageData || {}) as any)
const prices = computed<PricePlan[]>(() => {
  return product.value?.prices || product.value?.versionDetails?.prices || []
})

function isExternal(url?: string): boolean {
  return Boolean(url && /^https?:\/\//i.test(url))
}

function resolveLink(url?: string): string {
  if (!url || url === '#') return '#'
  return isExternal(url) ? url : withBase(url)
}

function cleanFeature(feat: string): string {
  if (typeof feat !== 'string') return ''
  return feat.replace(/^[✓✔]\s*/, '')
}
</script>

<template>
  <div v-if="prices && prices.length > 0" class="tl-pricing-grid">
    <div
      v-for="(plan, idx) in prices"
      :key="plan.name + idx"
      class="tl-pricing-card"
      :class="{ 'tl-pricing-highlighted': plan.highlighted }"
    >
      <div class="tl-pcard-header">
        <div class="tl-pcard-badges">
          <span
            v-for="tag in (plan.tags || [])"
            :key="tag"
            class="tl-badge"
            :class="plan.highlighted ? 'tl-badge-emerald' : 'tl-badge-blue'"
          >
            {{ tag }}
          </span>
        </div>

        <h3 class="tl-pcard-name">{{ plan.name }}</h3>
        <div class="tl-pcard-price-row">
          <span class="tl-pcard-price">{{ plan.price }}</span>
          <span v-if="plan.period" class="tl-pcard-period">{{ plan.period }}</span>
        </div>
        <p class="tl-pcard-desc">{{ plan.description }}</p>
      </div>

      <ul class="tl-pcard-features">
        <li v-for="(feat, fIdx) in plan.features" :key="fIdx" class="tl-pcard-feat-item">
          <svg class="tl-check-svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>{{ cleanFeature(feat) }}</span>
        </li>
      </ul>

      <div class="tl-pcard-action">
        <a
          :href="resolveLink(plan.link)"
          :target="isExternal(plan.link) ? '_blank' : undefined"
          :rel="isExternal(plan.link) ? 'noopener noreferrer' : undefined"
          class="tl-btn tl-btn-block"
          :class="plan.highlighted ? 'tl-btn-primary tl-btn-lg' : 'tl-btn-secondary tl-btn-lg'"
        >
          {{ plan.linkText || 'Select Plan' }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tl-pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
}

@media (max-width: 960px) {
  .tl-pricing-grid {
    grid-template-columns: 1fr;
  }
}

.tl-pricing-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--tl-transition-normal);
  position: relative;
}

.tl-pricing-card:hover {
  border-color: var(--tl-border-glow);
  transform: translateY(-1px);
  box-shadow: var(--tl-shadow-md);
}

.tl-pricing-highlighted {
  border-color: rgba(2, 132, 199, 0.45);
  background: linear-gradient(180deg, var(--tl-surface) 0%, var(--tl-bg-alt) 100%);
  box-shadow: var(--tl-shadow-glow);
}

.tl-pcard-badges {
  min-height: 24px;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tl-pcard-name {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--tl-text-primary);
  margin: 0 0 0.5rem 0;
}

.tl-pcard-price-row {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}

.tl-pcard-price {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: var(--tl-font-mono);
  color: var(--tl-brand-glow);
}

.tl-pcard-period {
  font-size: 0.875rem;
  color: var(--tl-text-muted);
}

.tl-pcard-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.tl-pcard-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tl-pcard-feat-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.4;
}

.tl-check-svg {
  color: var(--tl-brand-glow);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.tl-btn-block {
  width: 100%;
}
</style>
