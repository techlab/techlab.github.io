<script setup lang="ts">
import { ref, computed } from 'vue'
import ProductCard from '../product/ProductCard.vue'
import { products } from '../../data/products'

const activeCategory = ref<string>('All')

const categories = ['All', 'Component', 'Plugin', 'Utility', 'CLI']

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') {
    return products
  }
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<template>
  <section id="products" class="tl-portfolio-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Product Ecosystem</span>
        <h2 class="tl-section-title">Open-Source Components & Plugins</h2>
        <p class="tl-section-desc">
          Engineered for production environments, modern frameworks, and rock-solid backwards compatibility.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="tl-filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="tl-filter-pill"
          :class="{ 'tl-filter-pill-active': activeCategory === cat }"
          @click="activeCategory = cat"
        >
          {{ cat === 'All' ? 'All Products' : cat + 's' }}
        </button>
      </div>

      <!-- Products Grid -->
      <div class="tl-products-grid">
        <ProductCard
          v-for="prod in filteredProducts"
          :key="prod.id"
          :product="prod"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-portfolio-section {
  padding: 5rem 0;
}

.tl-filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.tl-filter-pill {
  padding: 0.5rem 1.125rem;
  border-radius: var(--tl-radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--tl-text-secondary);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-filter-pill:hover {
  color: var(--tl-text-primary);
  border-color: var(--tl-border-focus);
}

.tl-filter-pill-active {
  background: var(--tl-brand-gradient);
  color: #ffffff !important;
  border-color: transparent;
  box-shadow: 0 2px 10px rgba(2, 132, 199, 0.3);
}

.tl-products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 860px) {
  .tl-products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
