<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'
import { VPNavBarSearch } from 'vitepress/theme'
import { products } from '../../data/products'

const { isDark } = useData()
const route = useRoute()

const isProductsOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
}

function closeAllMenus() {
  isProductsOpen.value = false
  isMobileMenuOpen.value = false
}

watch(() => route.path, () => {
  closeAllMenus()
})

function handleScroll() {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 10
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const activeSection = computed(() => {
  const p = route.path
  if (p.includes('/smart-wizard') || p.includes('/jquery-') || p.includes('/copify') || p.includes('/react-smarttab')) return 'products'
  if (p.startsWith('/docs')) return 'docs'
  if (p.startsWith('/demos')) return 'demos'
  if (p.startsWith('/tools')) return 'tools'
  if (p.startsWith('/articles')) return 'articles'
  return ''
})

const featuredProducts = computed(() => products.filter(p => p.featured || p.status === 'popular'))
const otherProducts = computed(() => products.filter(p => !p.featured && p.status !== 'popular'))
</script>

<template>
  <header class="tl-header" :class="{ 'tl-header-scrolled': isScrolled }">
    <div class="tl-header-inner tl-container">
      <!-- Logo & Brand Title -->
      <a :href="withBase('/')" class="tl-brand-link" aria-label="TechLaboratory Home">
        <div class="tl-brand-logo-wrap">
          <img src="/images/logo.png" alt="TechLaboratory" class="tl-brand-logo" width="30" height="30" />
        </div>
        <div class="tl-brand-text">
          <span class="tl-brand-title">Tech<span class="tl-brand-accent">Lab</span></span>
          <span class="tl-brand-v">v8</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="tl-desktop-nav" aria-label="Main Navigation">
        <!-- Products Mega Dropdown -->
        <div
          class="tl-nav-item tl-dropdown-wrap"
          @mouseenter="isProductsOpen = true"
          @mouseleave="isProductsOpen = false"
        >
          <button
            type="button"
            class="tl-nav-link tl-dropdown-btn"
            :class="{ 'tl-nav-active': activeSection === 'products' || isProductsOpen }"
            :aria-expanded="isProductsOpen"
            aria-haspopup="true"
            @click="isProductsOpen = !isProductsOpen"
          >
            <span>Products</span>
            <svg class="tl-chevron" :class="{ 'tl-chevron-rotated': isProductsOpen }" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <!-- Dropdown Menu -->
          <div v-show="isProductsOpen" class="tl-mega-menu" role="menu">
            <div class="tl-mega-inner">
              <div class="tl-mega-col tl-mega-secondary">
                <!-- <div class="tl-mega-heading">Plugins & Utilities</div> -->
                <div class="tl-mega-list">

                  <a
                    v-for="prod in featuredProducts"
                    :key="prod.id"
                    :href="withBase(prod.pageLink)"
                    class="tl-product-row"
                    role="menuitem"
                    @click="isProductsOpen = false"
                  >
                    <div class="tl-product-icon">
                      <span class="tl-icon-box">⚡</span>
                    </div>
                    <div class="tl-product-info">
                      <div class="tl-product-header">
                        <span class="tl-product-name">{{ prod.name }}</span>
                        <span v-if="prod.badge" class="tl-badge tl-badge-blue">{{ prod.badge }}</span>
                      </div>
                      <p class="tl-product-tagline">{{ prod.tagline }}</p>
                    </div>
                  </a>

                  <a
                    v-for="prod in otherProducts"
                    :key="prod.id"
                    :href="withBase(prod.pageLink)"
                    class="tl-product-row-compact"
                    role="menuitem"
                    @click="isProductsOpen = false"
                  >
                    <div class="tl-product-compact-header">
                      <span class="tl-product-compact-name">{{ prod.name }}</span>
                      <span class="tl-product-compact-cat">{{ prod.category }}</span>
                    </div>
                    <span class="tl-product-compact-desc">{{ prod.tagline }}</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="tl-mega-footer">
              <span class="tl-mega-footer-text">All projects are MIT licensed & community-driven.</span>
              <a :href="withBase('/smart-wizard/')" class="tl-mega-footer-cta">
                Explore Smart Wizard v1 →
              </a>
            </div>
          </div>
        </div>

        <a :href="withBase('/docs/')" class="tl-nav-link" :class="{ 'tl-nav-active': activeSection === 'docs' }">
          Docs
        </a>

        <a :href="withBase('/demos/')" class="tl-nav-link" :class="{ 'tl-nav-active': activeSection === 'demos' }">
          Demos
        </a>

        <a :href="withBase('/tools/')" class="tl-nav-link" :class="{ 'tl-nav-active': activeSection === 'tools' }">
          Tools
        </a>

        <a :href="withBase('/articles/')" class="tl-nav-link" :class="{ 'tl-nav-active': activeSection === 'articles' }">
          Articles
        </a>
      </nav>

      <!-- Right Action Items: Search, GitHub, Dark Toggle, Mobile Toggle -->
      <div class="tl-header-actions">
        <!-- Integrated VitePress Search -->
        <div class="tl-search-box">
          <VPNavBarSearch />
        </div>

        <!-- GitHub External Link -->
        <a
          href="https://github.com/techlab"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-icon-btn"
          aria-label="TechLaboratory on GitHub"
          title="GitHub Repository"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        <!-- Dark/Light Mode Switcher -->
        <button
          type="button"
          class="tl-icon-btn"
          aria-label="Toggle color theme"
          :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          @click="toggleTheme"
        >
          <!-- Sun Icon (shown in dark mode) -->
          <svg v-if="isDark" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <!-- Moon Icon (shown in light mode) -->
          <svg v-else viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        <!-- Mobile Menu Hamburger -->
        <button
          type="button"
          class="tl-icon-btn tl-mobile-toggle"
          aria-label="Toggle navigation menu"
          :aria-expanded="isMobileMenuOpen"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <svg v-if="!isMobileMenuOpen" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-show="isMobileMenuOpen" class="tl-mobile-drawer">
      <div class="tl-mobile-menu-inner tl-container">
        <div class="tl-mobile-section">
          <div class="tl-mobile-heading">Products</div>
          <a
            v-for="prod in products"
            :key="prod.id"
            :href="withBase(prod.pageLink)"
            class="tl-mobile-product-link"
            @click="closeAllMenus"
          >
            <span class="tl-mobile-prod-title">{{ prod.name }}</span>
            <span v-if="prod.badge" class="tl-badge tl-badge-blue">{{ prod.badge }}</span>
          </a>
        </div>

        <div class="tl-mobile-section">
          <div class="tl-mobile-heading">Platform</div>
          <a :href="withBase('/docs/')" class="tl-mobile-nav-link" @click="closeAllMenus">Documentation</a>
          <a :href="withBase('/demos/')" class="tl-mobile-nav-link" @click="closeAllMenus">Interactive Demos</a>
          <a :href="withBase('/tools/')" class="tl-mobile-nav-link" @click="closeAllMenus">Developer Tools</a>
          <a :href="withBase('/articles/')" class="tl-mobile-nav-link" @click="closeAllMenus">Articles & Insights</a>
          <a :href="withBase('/about')" class="tl-mobile-nav-link" @click="closeAllMenus">About TechLaboratory</a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.tl-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--tl-header-height);
  z-index: 100;
  background-color: var(--tl-surface-glass);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--tl-border);
  transition: all var(--tl-transition-fast);
}

.tl-header-scrolled {
  box-shadow: var(--tl-shadow-sm);
  border-bottom-color: var(--tl-border-subtle);
}

.tl-header-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand */
.tl-brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none !important;
  color: inherit;
  flex-shrink: 0;
}

.tl-brand-logo-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--tl-radius-sm);
  background: var(--tl-surface);
  border: 1px solid var(--tl-border);
  overflow: hidden;
}

.tl-brand-logo {
  object-fit: contain;
}

.tl-brand-text {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.tl-brand-title {
  font-size: 1.125rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--tl-text-primary);
}

.tl-brand-accent {
  color: var(--tl-brand-glow);
}

.tl-brand-v {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  font-weight: 700;
  padding: 0.1rem 0.35rem;
  border-radius: var(--tl-radius-xs);
  background: var(--tl-brand-soft);
  color: var(--tl-brand-glow);
}

/* Desktop Navigation */
.tl-desktop-nav {
  display: none;
  align-items: center;
  gap: 0.25rem;
}

@media (min-width: 860px) {
  .tl-desktop-nav {
    display: flex;
  }
}

.tl-nav-link {
  padding: 0.45rem 0.85rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  border-radius: var(--tl-radius-md);
  text-decoration: none !important;
  transition: all var(--tl-transition-fast);
  cursor: pointer;
  background: transparent;
  border: none;
}

.tl-nav-link:hover,
.tl-nav-active {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
}

/* Dropdown */
.tl-dropdown-wrap {
  position: relative;
}

.tl-dropdown-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.tl-chevron {
  transition: transform var(--tl-transition-fast);
  color: var(--tl-text-muted);
}

.tl-chevron-rotated {
  transform: rotate(180deg);
}

.tl-mega-menu {
  position: absolute;
  top: calc(100%);
  left: 0;
  width: 580px;
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  box-shadow: var(--tl-shadow-lg);
  overflow: hidden;
  animation: tl-dropdown-fade 180ms ease-out forwards;
}

@keyframes tl-dropdown-fade {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tl-mega-inner {
  display: grid;
  /* grid-template-columns: 1.15fr 0.85fr; */
  padding: 1.25rem;
  gap: 1.25rem;
}

.tl-mega-heading {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tl-text-muted);
  margin-bottom: 0.75rem;
}

.tl-mega-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tl-product-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--tl-radius-md);
  text-decoration: none !important;
  transition: background-color var(--tl-transition-fast);
}

.tl-product-row:hover {
  background-color: var(--tl-surface-hover);
}

.tl-product-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--tl-radius-sm);
  background: var(--tl-brand-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.tl-product-info {
  flex: 1;
}

.tl-product-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tl-product-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--tl-text-primary);
}

.tl-product-tagline {
  font-size: 0.75rem;
  color: var(--tl-text-secondary);
  line-height: 1.4;
  margin: 0.2rem 0 0 0;
}

.tl-product-row-compact {
  padding: 0.5rem 0.65rem;
  border-radius: var(--tl-radius-sm);
  text-decoration: none !important;
  display: block;
  transition: background-color var(--tl-transition-fast);
}

.tl-product-row-compact:hover {
  background-color: var(--tl-surface-hover);
}

.tl-product-compact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tl-product-compact-name {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--tl-text-primary);
}

.tl-product-compact-cat {
  font-size: 0.6875rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-muted);
}

.tl-product-compact-desc {
  font-size: 0.6875rem;
  color: var(--tl-text-secondary);
  display: block;
  margin-top: 0.15rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tl-mega-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background-color: var(--tl-bg-alt);
  border-top: 1px solid var(--tl-border);
  font-size: 0.75rem;
}

.tl-mega-footer-text {
  color: var(--tl-text-muted);
}

.tl-mega-footer-cta {
  color: var(--tl-brand-glow);
  font-weight: 600;
  text-decoration: none !important;
}

.tl-mega-footer-cta:hover {
  text-decoration: underline !important;
}

/* Header Actions */
.tl-header-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tl-search-box {
  display: flex;
  align-items: center;
}

.tl-icon-btn {
  width: 36px;
  height: 36px;
  border-radius: var(--tl-radius-md);
  border: 1px solid transparent;
  background: transparent;
  color: var(--tl-text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--tl-transition-fast);
  text-decoration: none !important;
}

.tl-icon-btn:hover {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
  border-color: var(--tl-border);
}

.tl-mobile-toggle {
  display: inline-flex;
}

@media (min-width: 860px) {
  .tl-mobile-toggle {
    display: none;
  }
}

/* Mobile Drawer */
.tl-mobile-drawer {
  position: absolute;
  top: var(--tl-header-height);
  left: 0;
  right: 0;
  background-color: var(--tl-surface);
  border-bottom: 1px solid var(--tl-border);
  box-shadow: var(--tl-shadow-lg);
  max-height: calc(100vh - var(--tl-header-height));
  overflow-y: auto;
  padding: 1.5rem 0;
}

.tl-mobile-section {
  margin-bottom: 1.5rem;
}

.tl-mobile-heading {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--tl-text-muted);
  letter-spacing: 0.08em;
  margin-bottom: 0.75rem;
}

.tl-mobile-product-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 0.5rem;
  border-radius: var(--tl-radius-sm);
  color: var(--tl-text-primary);
  text-decoration: none !important;
}

.tl-mobile-product-link:hover {
  background-color: var(--tl-surface-hover);
}

.tl-mobile-prod-title {
  font-size: 0.9375rem;
  font-weight: 600;
}

.tl-mobile-nav-link {
  display: block;
  padding: 0.6rem 0.5rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  text-decoration: none !important;
}

.tl-mobile-nav-link:hover {
  color: var(--tl-brand-glow);
}
</style>
