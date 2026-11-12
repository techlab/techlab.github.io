<script setup lang="ts">
import { useData } from 'vitepress'
import GeneralLayout from './layouts/GeneralLayout.vue'
import ProductLayout from './layouts/ProductLayout.vue'
import ArticleLayout from './layouts/ArticleLayout.vue'
import NotFoundLayout from './layouts/NotFoundLayout.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <!-- Route to 404 layout first when page is not found -->
  <NotFoundLayout v-if="page.isNotFound" />
  <!-- Route to the correct layout based on the `layout` frontmatter key -->
  <ProductLayout v-else-if="frontmatter.layout === 'product'" />
  <ArticleLayout v-else-if="frontmatter.layout === 'article'" />
  <GeneralLayout v-else />
</template>
