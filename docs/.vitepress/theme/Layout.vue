<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import SiteHeader from './components/global/SiteHeader.vue'
import SiteFooter from './components/global/SiteFooter.vue'
import Breadcrumbs from './components/global/Breadcrumbs.vue'
import AdSlot from './components/global/AdSlot.vue'
import VersionSwitcher from './components/VersionSwitcher.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <div class="tl-site-wrapper">
    <!-- TechLaboratory Global Navigation Header -->
    <SiteHeader />

    <!-- Default Theme Layout (Doc, Home, Page) -->
    <div class="tl-content-body">
      <Layout>
        <template #doc-before>
          <Breadcrumbs />
          <div v-if="frontmatter.ads !== false" class="tl-ad-slot-doc-top">
            <AdSlot placement="content-top" />
          </div>
        </template>

        <template #doc-after>
          <div v-if="frontmatter.ads !== false" class="tl-ad-slot-doc-bottom">
            <AdSlot placement="content-bottom" />
          </div>
        </template>

        <template #aside-outline-after>
          <VersionSwitcher />
        </template>
      </Layout>
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
</style>
