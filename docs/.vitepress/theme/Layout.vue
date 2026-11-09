<script setup lang="ts">
import { useData } from 'vitepress'
import GeneralLayout from './layouts/GeneralLayout.vue'
import ProductLayout from './layouts/ProductLayout.vue'
import ArticleLayout from './layouts/ArticleLayout.vue'

const { frontmatter } = useData()
</script>

<template>
  <!-- Route to the correct layout based on the `layout` frontmatter key -->
  <ProductLayout v-if="frontmatter.layout === 'product'" />
  <ArticleLayout v-else-if="frontmatter.layout === 'article'" />
  <GeneralLayout v-else />
</template>
