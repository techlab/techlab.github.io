<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import SiteHeader from '../components/global/SiteHeader.vue'
import SiteFooter from '../components/global/SiteFooter.vue'
import ProductNav from '../components/product/ProductNav.vue'
</script>

<template>
  <div class="tl-site-wrapper">
    <!-- TechLaboratory Global Navigation Header -->
    <SiteHeader />

    <div class="tl-content-body">
      <!-- Product sub-nav (sticky, always shown for product pages) -->
      <ProductNav />

      <!-- Product page -->
      <Content />
      
    </div>

    <!-- TechLaboratory Developer Footer -->
    <SiteFooter />
  </div>
</template>

<style scoped>
.tl-site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--tl-bg);
  color: var(--tl-text-primary);
}

.tl-content-body {
  flex: 1 0 auto;
  /* account for fixed SiteHeader + sticky ProductNav */
  /* padding-top: calc(var(--tl-header-height) + 48px); */
}

/* ── Product home/overview markdown content ── */
.tl-md-content {
  padding: 2.5rem 0 1rem;
}

/* ── Product doc page layout ── */
.tl-product-doc-wrap {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  gap: 2.5rem;
}

.tl-product-doc-aside {
  flex-shrink: 0;
  width: 220px;
  display: none;
}

@media (min-width: 1024px) {
  .tl-product-doc-aside {
    display: block;
  }
}

.tl-aside-inner {
  position: sticky;
  top: calc(var(--tl-header-height) + 48px + 1.5rem);
}

.tl-product-doc-main {
  flex: 1;
  min-width: 0;
}

.tl-product-doc-content {
  margin-top: 1rem;
}

.tl-ad-slot {
  margin: 1.5rem 0;
}
</style>
