<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'
import ProductNav from './ProductNav.vue'
import ProductHero from './ProductHero.vue'
import ProductMetrics from './ProductMetrics.vue'
import ProductFeatures from './ProductFeatures.vue'
import ProductPricingPreview from './ProductPricingPreview.vue'
import CTASection from '../home/CTASection.vue'
import { getProduct, products } from '../../data/products'

const props = defineProps<{
  productId?: string
}>()

const route = useRoute()

const product = computed(() => {
  if (props.productId) {
    return getProduct(props.productId) || products[0]
  }
  // Try matching route path
  const match = products.find(p => route.path.includes(p.pageLink.replace(/^\/|\/$/g, '')))
  return match || products[0]
})
</script>

<template>
  <div class="tl-product-layout">
    <!-- Sub-Navigation specific to this product -->
    <ProductNav :product="product" />

    <!-- Product Hero -->
    <ProductHero :product="product" />

    <!-- Verified Metrics Bar -->
    <ProductMetrics :metrics="product.metrics" />

    <!-- Feature Architecture -->
    <ProductFeatures :product="product" />

    <!-- Slot for extra markdown content -->
    <div class="tl-container tl-product-custom-content">
      <slot />
    </div>

    <!-- Pricing Preview -->
    <ProductPricingPreview :product="product" />

    <!-- Bottom CTA -->
    <CTASection />
  </div>
</template>

<style scoped>
.tl-product-layout {
  width: 100%;
}

.tl-product-custom-content {
  padding: 2rem 0;
}
</style>
