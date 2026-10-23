<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import type { ProductDefinition } from '../../data/products'

const props = defineProps<{
  product: ProductDefinition
}>()

const route = useRoute()

const navLinks = computed(() => [
  { name: 'Overview', path: props.product.pageLink },
  { name: 'Features', path: `${props.product.pageLink}features` },
  { name: 'Demos', path: props.product.demoLink || `${props.product.pageLink}demos` },
  { name: 'Docs', path: props.product.docsLink || `${props.product.pageLink}v1/` },
  { name: 'Pricing', path: props.product.pricingLink || `${props.product.pageLink}pricing` },
  { name: 'Changelog', path: props.product.changelogLink || `${props.product.pageLink}changelog` },
])

function isActive(linkPath: string): boolean {
  const current = route.path.replace(/\/$/, '')
  const target = linkPath.replace(/\/$/, '')
  if (linkPath === props.product.pageLink) {
    return current === target
  }
  return current.startsWith(target)
}
</script>

<template>
  <nav class="tl-product-nav" aria-label="Product Navigation">
    <div class="tl-container tl-product-nav-inner">
      <!-- Product Brand -->
      <a :href="withBase(product.pageLink)" class="tl-pnav-brand">
        <span class="tl-pnav-title">{{ product.name }}</span>
        <span v-if="product.versions && product.versions.length > 0" class="tl-pnav-version">
          {{ product.versions[0] }}
        </span>
      </a>

      <!-- Sub Links -->
      <div class="tl-pnav-links">
        <a
          v-for="item in navLinks"
          :key="item.name"
          :href="withBase(item.path)"
          class="tl-pnav-link"
          :class="{ 'tl-pnav-active': isActive(item.path) }"
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Quick Action: GitHub -->
      <div v-if="product.repository" class="tl-pnav-actions">
        <a
          :href="product.repository"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-btn tl-btn-secondary tl-btn-sm"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.tl-product-nav {
  position: sticky;
  top: var(--tl-header-height);
  z-index: 40;
  background-color: var(--tl-surface-glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--tl-border);
  height: 48px;
}

.tl-product-nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.tl-pnav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none !important;
  color: var(--tl-text-primary);
  font-weight: 700;
  font-size: 0.9375rem;
}

.tl-pnav-version {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  color: var(--tl-brand-glow);
  background-color: var(--tl-brand-soft);
  padding: 0.1rem 0.35rem;
  border-radius: var(--tl-radius-xs);
}

.tl-pnav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  overflow-x: auto;
}

.tl-pnav-link {
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  padding: 0.35rem 0.75rem;
  border-radius: var(--tl-radius-sm);
  text-decoration: none !important;
  transition: all var(--tl-transition-fast);
  white-space: nowrap;
}

.tl-pnav-link:hover {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
}

.tl-pnav-active {
  color: var(--tl-brand-glow) !important;
  font-weight: 600;
  background-color: var(--tl-surface-hover);
}

.tl-pnav-actions {
  display: none;
}

@media (min-width: 768px) {
  .tl-pnav-actions {
    display: flex;
  }
}
</style>
