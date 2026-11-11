<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, withBase } from 'vitepress'
import Breadcrumbs from '../../components/global/Breadcrumbs.vue'
import { resolveRoute } from '../../utils/route'
import type { ProductSubMenuItem } from '../../data/products'

const props = defineProps<{
  product?: any
}>()

const route = useRoute()

// Get page data reactively bound to route.path
const routeData = computed(() => resolveRoute(route.path))
const product = computed(() => {
  if (props.product && props.product.name) {
    return props.product
  }
  return routeData.value?.pageData || {}
})

const subMenuList = computed<ProductSubMenuItem[]>(() => {
  const menu = (product.value as any)?.subMenu
  if (!menu) return []
  if (Array.isArray(menu)) return menu
  return Object.values(menu)
})

const isMobileMenuOpen = ref(false)

function isItemActive(link: string): boolean {
  if (!link) return false
  const current = route.path.replace(/\/+$/, '').toLowerCase()
  const target = link.replace(/\/+$/, '').toLowerCase()

  if (current === target) return true

  // Handle root product page vs default version overview link
  // e.g. route.path is '/smart-wizard' and link is '/smart-wizard/v1'
  // or route.path is '/jquery-smartwizard' and link is '/jquery-smartwizard/v7'
  const currentSegments = current.split('/').filter(Boolean)
  const targetSegments = target.split('/').filter(Boolean)

  if (currentSegments.length === 1 && targetSegments.length === 2) {
    if (targetSegments[0] === currentSegments[0]) {
      const p = product.value as any
      if (p?.versions && targetSegments[1] === p.versions[0]?.toLowerCase()) {
        return true
      }
    }
  }

  return false
}

const activeItem = computed(() => {
  return subMenuList.value.find(item => isItemActive(item.link)) || subMenuList.value[0]
})

watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target || !target.isConnected) return
  if (!target.closest('.tl-product-nav')) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <nav class="tl-product-nav" aria-label="Product Navigation">
    <div class="tl-container tl-product-nav-inner">

      <!-- Breadcrumbs: Hidden on mobile view to save space -->
      <Breadcrumbs />

      <!-- Desktop Sub Menu -->
      <div class="tl-pnav-links">
        <a
          v-for="item in subMenuList"
          :key="item.title"
          :href="withBase(item.link)"
          class="tl-pnav-link"
          :class="{ 'tl-pnav-active': isItemActive(item.link) }"
        >
          {{ item.title }}
        </a>
      </div>

      <!-- Mobile Sub Menu Toggle Button -->
      <div v-if="subMenuList.length > 0" class="tl-pnav-mobile-wrap">
        <button
          type="button"
          class="tl-pnav-mobile-btn"
          :aria-expanded="isMobileMenuOpen"
          @click.stop="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="tl-pnav-mobile-title">{{ activeItem?.title || 'Menu' }}</span>
          <svg class="tl-chevron" :class="{ 'tl-chevron-rotated': isMobileMenuOpen }" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Quick Action: GitHub -->
      <div v-if="(product as any).repository" class="tl-pnav-actions">
        <a
          :href="(product as any).repository"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-btn"
          :title="`View ${(product as any).name} on GitHub`"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Mobile Sub Menu Dropdown -->
    <div v-show="isMobileMenuOpen && subMenuList.length > 0" class="tl-pnav-mobile-dropdown">
      <div class="tl-container">
        <a
          v-for="item in subMenuList"
          :key="item.title"
          :href="withBase(item.link)"
          class="tl-pnav-mobile-link"
          :class="{ 'tl-pnav-mobile-active': isItemActive(item.link) }"
          @click="isMobileMenuOpen = false"
        >
          <span>{{ item.title }}</span>
          <svg v-if="isItemActive(item.link)" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" class="tl-pnav-check">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
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

.tl-pnav-breadcrumbs {
  display: none;
}

@media (min-width: 768px) {
  .tl-pnav-breadcrumbs {
    display: block;
  }
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

/* Desktop links */
.tl-pnav-links {
  display: none;
}

@media (min-width: 768px) {
  .tl-pnav-links {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    overflow-x: auto;
  }
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

/* Mobile dropdown button */
.tl-pnav-mobile-wrap {
  display: flex;
  align-items: center;
  position: relative;
}

@media (min-width: 768px) {
  .tl-pnav-mobile-wrap {
    display: none;
  }
}

.tl-pnav-mobile-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.65rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-sm);
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-pnav-mobile-btn:hover {
  color: var(--tl-brand-glow);
  border-color: var(--tl-border-subtle);
}

.tl-chevron {
  transition: transform var(--tl-transition-fast);
  color: var(--tl-text-muted);
}

.tl-chevron-rotated {
  transform: rotate(180deg);
}

/* Mobile dropdown panel */
.tl-pnav-mobile-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--tl-surface);
  border-bottom: 1px solid var(--tl-border);
  box-shadow: var(--tl-shadow-lg);
  padding: 0.5rem 0;
  z-index: 50;
  animation: tl-dropdown-fade 180ms ease-out forwards;
}

@media (min-width: 768px) {
  .tl-pnav-mobile-dropdown {
    display: none;
  }
}

.tl-pnav-mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 0.75rem;
  border-radius: var(--tl-radius-sm);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  text-decoration: none !important;
  transition: all var(--tl-transition-fast);
}

.tl-pnav-mobile-link:hover {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
}

.tl-pnav-mobile-active {
  color: var(--tl-brand-glow) !important;
  font-weight: 600;
  background-color: var(--tl-surface-hover);
}

.tl-pnav-check {
  color: var(--tl-brand-glow);
}

@keyframes tl-dropdown-fade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
