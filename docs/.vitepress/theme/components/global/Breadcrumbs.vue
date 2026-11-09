<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import VersionSwitcher from '../../components/VersionSwitcher.vue'
import { getCurrentRoute, isActive } from '../../utils/route'

const route = useRoute()

// Get page data
const routeData = computed(() => getCurrentRoute())
const pageData = computed(() => routeData.value?.pageData || []);

interface BreadcrumbItem {
  name: string
  url: string
}

const items = computed<BreadcrumbItem[]>(() => {
  const path = route.path.replace(/\/$/, '')
  if (!path) return []

  const segments = path.split('/').filter(Boolean)
  const list: BreadcrumbItem[] = [{ name: 'Home', url: '/' }]

  let accumulated = ''
  for (const seg of segments) {
    accumulated += `/${seg}`
    let label = seg.replace(/-/g, ' ')
    label = label.charAt(0).toUpperCase() + label.slice(1)

    if (routeData.value?.pageType == 'product' && seg == pageData.value?.id) {
      label = pageData.value?.name;
    } else if (routeData.value?.pageType == 'product' && seg == pageData.value?.currentVersion) {
      label = pageData.value?.currentVersion;
    } else {
      if (seg === 'docs') label = 'Docs'
      if (seg === 'demos') label = 'Demos'
      if (seg === 'tools') label = 'Tools'
      if (seg === 'articles') label = 'Articles'
    }

    list.push({ name: label, url: `${accumulated}/` })
  }

  return list
})
</script>

<template>
  <nav v-if="items.length > 1" class="tl-breadcrumbs" aria-label="Breadcrumbs">
    <ol itemscope itemtype="https://schema.org/BreadcrumbList">
      <li
        v-for="(item, idx) in items"
        :key="item.url"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <a
          v-if="idx < items.length - 1"
          :href="withBase(item.url)"
          itemprop="item"
          class="tl-breadcrumb-link"
        >
          <span itemprop="name">{{ item.name }}</span>
        </a>
        <span v-else class="tl-breadcrumb-current" itemprop="name" aria-current="page">
          {{ item.name }}
        </span>
        <meta itemprop="position" :content="String(idx + 1)" />
        <span v-if="idx < items.length - 1" class="tl-breadcrumb-separator" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>

  <!-- Product Brand -->
      <!-- <a href="/smart-wizard/" class="tl-pnav-brand">
        <span class="tl-pnav-title">Smart Wizard</span>

        <div class="tl-aside-inner">
          <VersionSwitcher />
        </div>
      </a> -->
</template>

<style scoped>
.tl-breadcrumbs {
  margin: 1rem 0 1.5rem 0;
  font-size: 0.8125rem;
  font-family: var(--tl-font-sans);
}

.tl-breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0.375rem;
}

.tl-breadcrumbs li {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  color: var(--tl-text-muted);
}

.tl-breadcrumb-link {
  color: var(--tl-text-secondary);
  text-decoration: none;
  transition: color var(--tl-transition-fast);
}

.tl-breadcrumb-link:hover {
  color: var(--tl-brand-glow);
}

.tl-breadcrumb-current {
  color: var(--tl-text-primary);
  font-weight: 600;
}

.tl-breadcrumb-separator {
  color: var(--tl-border);
  user-select: none;
}
</style>
