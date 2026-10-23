<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'
import { getFeaturedProduct } from '../../data/products'

const product = computed(() => getFeaturedProduct())

const activeTheme = ref<'arrows' | 'pills' | 'checkout' | 'glow'>('arrows')

const themePreviews = {
  arrows: {
    title: 'Arrows Theme',
    image: '/media/jquery-smart-wizard/v7/arrows.png',
    desc: 'Classic directional chevron navigation with clean state progression.'
  },
  pills: {
    title: 'Pills Theme',
    image: '/media/jquery-smart-wizard/v7/glow.png',
    desc: 'Modern rounded badges suitable for vertical dashboards and minimal interfaces.'
  },
  checkout: {
    title: 'Checkout Flow',
    image: '/media/jquery-smart-wizard/v7/checkout.png',
    desc: 'E-commerce multi-step flow with field validation and asynchronous step validation.'
  },
  glow: {
    title: 'Showcase Grid',
    image: '/media/jquery-smart-wizard/v7/smart-wizard-showcase.png',
    desc: 'Comprehensive step states including active, completed, error, and warning.'
  }
}
</script>

<template>
  <section id="flagship" class="tl-flagship-section">
    <div class="tl-container">
      <div class="tl-flagship-card">
        <!-- Top Flagship Header -->
        <div class="tl-flagship-header">
          <div class="tl-flagship-eyebrow">
            <span class="tl-badge tl-badge-blue">Flagship Product</span>
            <span class="tl-version-badge">v1.0 TypeScript Core</span>
          </div>

          <h2 class="tl-flagship-title">{{ product.name }}</h2>
          <p class="tl-flagship-tagline">{{ product.tagline }}</p>
          <p class="tl-flagship-desc">{{ product.description }}</p>

          <div class="tl-flagship-ctas">
            <a :href="withBase(product.pageLink)" class="tl-btn tl-btn-primary tl-btn-lg">
              Explore {{ product.name }}
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a v-if="product.demoLink" :href="withBase(product.demoLink)" class="tl-btn tl-btn-secondary tl-btn-lg">
              Live Demos
            </a>
            <a v-if="product.docsLink" :href="withBase(product.docsLink)" class="tl-btn tl-btn-ghost tl-btn-lg">
              Documentation
            </a>
          </div>
        </div>

        <!-- Middle Showcase: Interactive Preview Switcher -->
        <div class="tl-flagship-showcase">
          <div class="tl-showcase-nav">
            <button
              v-for="(val, key) in themePreviews"
              :key="key"
              type="button"
              class="tl-showcase-tab"
              :class="{ 'tl-showcase-tab-active': activeTheme === key }"
              @click="activeTheme = key as any"
            >
              {{ val.title }}
            </button>
          </div>

          <div class="tl-showcase-display">
            <div class="tl-image-frame">
              <img
                :src="withBase(themePreviews[activeTheme].image)"
                :alt="`${product.name} ${themePreviews[activeTheme].title}`"
                class="tl-preview-img"
                loading="lazy"
              />
              <div class="tl-preview-caption">
                <span class="tl-caption-title">{{ themePreviews[activeTheme].title }}</span>
                <span class="tl-caption-desc">{{ themePreviews[activeTheme].desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Feature Highlights Grid -->
        <div class="tl-flagship-features-grid">
          <div class="tl-feature-col">
            <div class="tl-feat-icon-box">⚡</div>
            <h4 class="tl-feat-name">Zero Dependencies</h4>
            <p class="tl-feat-desc">Written in modern TypeScript. Extremely lightweight footprint without heavy runtime bloat.</p>
          </div>

          <div class="tl-feature-col">
            <div class="tl-feat-icon-box">⚛️</div>
            <h4 class="tl-feat-name">Official Adapters</h4>
            <p class="tl-feat-desc">First-class React and Vue 3 wrappers, plus vanilla JavaScript and jQuery compatibility.</p>
          </div>

          <div class="tl-feature-col">
            <div class="tl-feat-icon-box">♿</div>
            <h4 class="tl-feat-name">W3C WAI-ARIA</h4>
            <p class="tl-feat-desc">Fully accessible keyboard navigation, screen-reader role announcements, and focus management.</p>
          </div>

          <div class="tl-feature-col">
            <div class="tl-feat-icon-box">🎨</div>
            <h4 class="tl-feat-name">CSS Variable Themes</h4>
            <p class="tl-feat-desc">Default, Arrows, Pills, and Glow themes with automatic dark/light mode and custom color presets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-flagship-section {
  padding: 4rem 0;
}

.tl-flagship-card {
  background: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  padding: 3rem;
  box-shadow: var(--tl-shadow-md);
  position: relative;
  overflow: hidden;
}

@media (max-width: 640px) {
  .tl-flagship-card {
    padding: 1.5rem;
  }
}

.tl-flagship-header {
  max-width: 760px;
  margin-bottom: 2.5rem;
}

.tl-flagship-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.tl-version-badge {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  color: var(--tl-text-muted);
}

.tl-flagship-title {
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--tl-text-primary);
  margin: 0 0 0.75rem 0;
  line-height: 1.15;
}

@media (max-width: 640px) {
  .tl-flagship-title {
    font-size: 1.875rem;
  }
}

.tl-flagship-tagline {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--tl-brand-glow);
  margin: 0 0 0.75rem 0;
}

.tl-flagship-desc {
  font-size: 1rem;
  color: var(--tl-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.75rem 0;
}

.tl-flagship-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

/* Showcase Display */
.tl-flagship-showcase {
  background: var(--tl-bg-alt);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  overflow: hidden;
  margin-bottom: 2.75rem;
}

.tl-showcase-nav {
  display: flex;
  border-bottom: 1px solid var(--tl-border);
  background: var(--tl-surface);
  overflow-x: auto;
}

.tl-showcase-tab {
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--tl-text-secondary);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--tl-transition-fast);
}

.tl-showcase-tab:hover {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
}

.tl-showcase-tab-active {
  color: var(--tl-brand-glow);
  border-bottom-color: var(--tl-brand-glow);
  background-color: var(--tl-surface-hover);
}

.tl-showcase-display {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tl-image-frame {
  width: 100%;
  max-width: 1000px;
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-md);
  overflow: hidden;
}

.tl-preview-img {
  width: 100%;
  height: auto;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

.tl-preview-caption {
  padding: 0.85rem 1.25rem;
  background-color: var(--tl-surface);
  border-top: 1px solid var(--tl-border);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.tl-caption-title {
  font-weight: 700;
  font-size: 0.875rem;
  color: var(--tl-text-primary);
}

.tl-caption-desc {
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
}

/* Features Grid */
.tl-flagship-features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--tl-border-subtle);
}

@media (max-width: 960px) {
  .tl-flagship-features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tl-flagship-features-grid {
    grid-template-columns: 1fr;
  }
}

.tl-feat-icon-box {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.tl-feat-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0 0 0.4rem 0;
}

.tl-feat-desc {
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  line-height: 1.5;
  margin: 0;
}
</style>
