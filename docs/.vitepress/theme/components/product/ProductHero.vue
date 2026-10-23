<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'
import type { ProductDefinition } from '../../data/products'

const props = defineProps<{
  product: ProductDefinition
}>()

const copied = ref(false)

function copyInstall() {
  const cmd = `npm install ${props.product.npm || props.product.id}`
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(cmd)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}
</script>

<template>
  <header class="tl-product-hero">
    <div class="tl-container">
      <div class="tl-phero-inner">
        <div class="tl-phero-badges">
          <span class="tl-badge tl-badge-blue">{{ product.category }}</span>
          <span v-if="product.status" class="tl-badge tl-badge-emerald">{{ product.status }}</span>
          <span v-if="product.versions" class="tl-version-tag">{{ product.versions[0] }}</span>
        </div>

        <h1 class="tl-phero-title">{{ product.name }}</h1>
        <p class="tl-phero-tagline">{{ product.tagline }}</p>
        <p class="tl-phero-desc">{{ product.description }}</p>

        <!-- Install Snippet Bar -->
        <div class="tl-phero-install-wrap">
          <div class="tl-install-box">
            <span class="tl-install-prompt">$</span>
            <code class="tl-install-cmd">npm install {{ product.npm || product.id }}</code>
            <button
              type="button"
              class="tl-copy-install-btn"
              :title="copied ? 'Copied to clipboard!' : 'Copy install command'"
              @click="copyInstall"
            >
              <span v-if="copied" class="tl-copied-text">Copied!</span>
              <svg v-else viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Hero Actions -->
        <div class="tl-phero-actions">
          <a v-if="product.docsLink" :href="withBase(product.docsLink)" class="tl-btn tl-btn-primary tl-btn-lg">
            Documentation
          </a>
          <a v-if="product.demoLink" :href="withBase(product.demoLink)" class="tl-btn tl-btn-secondary tl-btn-lg">
            Interactive Demos
          </a>
          <a v-if="product.repository" :href="product.repository" target="_blank" rel="noopener noreferrer" class="tl-btn tl-btn-ghost tl-btn-lg">
            GitHub
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
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
