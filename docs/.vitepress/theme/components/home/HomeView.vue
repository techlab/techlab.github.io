<script setup lang="ts">
import HomeHero from './HomeHero.vue'
import FlagshipShowcase from './FlagshipShowcase.vue'
import ProductGrid from './ProductGrid.vue'
import DemosHighlight from './DemosHighlight.vue'
import ToolsHighlight from './ToolsHighlight.vue'
import CTASection from './CTASection.vue'
</script>

<template>
  <div class="tl-home-view">
    <HomeHero />
    <FlagshipShowcase />
    <ProductGrid />
    <DemosHighlight />
    <ToolsHighlight />
    <CTASection />
  </div>
</template>

<style scoped>
.tl-home-view {
  width: 100%;
}
</style>
