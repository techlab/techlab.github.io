<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import SiteHeader from '../components/global/SiteHeader.vue'
import SiteFooter from '../components/global/SiteFooter.vue'
import Breadcrumbs from '../components/global/Breadcrumbs.vue'

const { frontmatter } = useData()

// fullWidth: true means the page manages its own layout (e.g. home page with <HomeView />)
// fullWidth: false (default) wraps content in a prose container with vp-doc styling
const isFullWidth = computed(() => frontmatter.value.fullWidth === true)
</script>

<template>
  <div class="tl-site-wrapper">
    <!-- TechLaboratory Global Navigation Header -->
    <SiteHeader />

    <div class="tl-content-body">

      <!-- Full-width page (e.g. home, landing pages with custom Vue components) -->
      <template v-if="isFullWidth">
        <div class="tl-fullwidth-page">
          <Content />
        </div>
      </template>

      <!-- Standard prose/markdown page (about, privacy, etc.) -->
      <template v-else>
        <div class="tl-general-page">
          <div class="tl-container">
            <Breadcrumbs />

            <!-- vp-doc applies VitePress markdown typography / code styles -->
            <div class="vp-doc tl-general-content">
              <Content />
            </div>

          </div>
        </div>
      </template>

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
}

/* Full-width page: content handles its own padding/layout */
.tl-fullwidth-page {
  padding-top: var(--tl-header-height);
  width: 100%;
}

/* Prose/markdown page */
.tl-general-page {
  padding-top: var(--tl-header-height);
}

.tl-general-content {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem 0 4rem;
}

.tl-ad-slot {
  margin: 1.5rem 0;
}
</style>
