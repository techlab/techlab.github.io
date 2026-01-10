<script setup>
import DefaultTheme from 'vitepress/theme'
import Footer from './components/Footer.vue'
import VersionSwitcher from './components/VersionSwitcher.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <div>
    <Layout>
      <template #doc-before>
        <div id="carbon-ads-container"></div>
      </template>
      <template #aside-outline-after>
        <VersionSwitcher />
      </template>
    </Layout>
    <Footer />
  </div>
</template>