<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase, useRoute } from 'vitepress'
import { resolveRoute } from '../../utils/route'

const route = useRoute()
const copied = ref(false)

function copyInstall() {
  const cmd = `npm install ${product.value?.npm || ''}`
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(cmd)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

// Get page data reactively bound to route.path
const routeData = computed(() => resolveRoute(route.path))
const product = computed(() => routeData.value?.pageData || {} as any);
const docsLink = computed(() => product.value?.subMenu?.docs?.link || '');
const demoLink = computed(() => product.value?.subMenu?.demo?.link || '');
</script>

<template>
  <header class="tl-product-hero">
    <div class="tl-container">
      <div class="tl-phero-inner">

        <h1 class="tl-phero-title">{{ product.name }}</h1>
        <p class="tl-phero-tagline">{{ product.tagline }}</p>
        <p class="tl-phero-desc" v-html="product.description"></p>

        <!-- Hero Actions -->
        <div class="tl-phero-actions">
          <a v-if="docsLink" :href="withBase(docsLink)" class="tl-btn tl-btn-primary">
            Documentation
          </a>
          <a v-if="demoLink" :href="withBase(demoLink)" class="tl-btn tl-btn-secondary">
            Interactive Demos
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.tl-product-hero {
  padding: 4.5rem 0 3.5rem 0;
  background: linear-gradient(180deg, var(--tl-surface-glass) 0%, transparent 100%);
  border-bottom: 1px solid var(--tl-border-subtle);
}

.tl-phero-inner {
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  margin-top: 3.5rem;
}

.tl-phero-badges {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.tl-version-tag {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  color: var(--tl-text-muted);
}

.tl-phero-title {
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--tl-text-primary);
  margin: 0 0 0.85rem 0;
  line-height: 1.1;
}

@media (max-width: 640px) {
  .tl-phero-title {
    font-size: 2.25rem;
  }
}

.tl-phero-tagline {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--tl-brand-glow);
  margin: 0 0 1rem 0;
}

.tl-phero-desc {
  font-size: 1.0625rem;
  color: var(--tl-text-secondary);
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.tl-phero-install-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.tl-install-box {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1.25rem;
  border-radius: var(--tl-radius-md);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  box-shadow: var(--tl-shadow-sm);
  font-family: var(--tl-font-mono);
  font-size: 0.875rem;
}

.tl-install-prompt {
  color: var(--tl-brand-glow);
  font-weight: 700;
}

.tl-install-cmd {
  color: var(--tl-text-primary);
}

.tl-copy-install-btn {
  background: transparent;
  border: none;
  color: var(--tl-text-muted);
  cursor: pointer;
  padding: 0.2rem;
  border-radius: var(--tl-radius-xs);
  display: inline-flex;
  align-items: center;
  transition: color var(--tl-transition-fast);
}

.tl-copy-install-btn:hover {
  color: var(--tl-text-primary);
}

.tl-copied-text {
  font-size: 0.75rem;
  color: var(--tl-emerald);
  font-weight: 600;
}

.tl-phero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
