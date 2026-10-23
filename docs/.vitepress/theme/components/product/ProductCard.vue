<script setup lang="ts">
import { withBase } from 'vitepress'
import type { ProductDefinition } from '../../data/products'

defineProps<{
  product: ProductDefinition
  featured?: boolean
}>()
</script>

<template>
  <div class="tl-product-card" :class="{ 'tl-product-card-featured': featured || product.featured }">
    <div class="tl-card-top">
      <div class="tl-card-header-row">
        <span class="tl-category-tag">{{ product.category }}</span>
        <span v-if="product.badge" class="tl-badge tl-badge-blue">{{ product.badge }}</span>
      </div>

      <a :href="withBase(product.pageLink)" class="tl-card-title-link">
        <h3 class="tl-card-title">{{ product.name }}</h3>
      </a>

      <p class="tl-card-desc">{{ product.description }}</p>

      <!-- Framework badges -->
      <div v-if="product.frameworks && product.frameworks.length > 0" class="tl-frameworks-row">
        <span v-for="fw in product.frameworks" :key="fw" class="tl-framework-pill">
          {{ fw }}
        </span>
      </div>

      <!-- Feature highlights -->
      <ul v-if="product.features && product.features.length > 0" class="tl-card-features">
        <li v-for="(feat, idx) in product.features.slice(0, 3)" :key="idx" class="tl-feature-item">
          <svg class="tl-check-icon" viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <span>{{ feat }}</span>
        </li>
      </ul>
    </div>

    <!-- Card Footer Links -->
    <div class="tl-card-footer">
      <div class="tl-card-primary-actions">
        <a :href="withBase(product.pageLink)" class="tl-btn tl-btn-primary tl-btn-sm">
          Overview
        </a>
        <a v-if="product.docsLink" :href="withBase(product.docsLink)" class="tl-btn tl-btn-secondary tl-btn-sm">
          Docs
        </a>
        <a v-if="product.demoLink" :href="withBase(product.demoLink)" class="tl-btn tl-btn-ghost tl-btn-sm">
          Demo
        </a>
      </div>

      <div class="tl-card-meta-links">
        <a
          v-if="product.repository"
          :href="product.repository"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-card-icon-link"
          title="GitHub Repository"
          aria-label="GitHub Repository"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a
          v-if="product.npm"
          :href="`https://www.npmjs.com/package/${product.npm}`"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-card-icon-link"
          title="npm package"
          aria-label="npm package"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.16H5.13z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tl-product-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  transition: all var(--tl-transition-normal);
  position: relative;
}

.tl-product-card:hover {
  transform: translateY(-2px);
  border-color: var(--tl-border-glow);
  box-shadow: var(--tl-shadow-md);
}

.tl-product-card-featured {
  border-color: rgba(2, 132, 199, 0.4);
  background: linear-gradient(180deg, var(--tl-surface) 0%, var(--tl-bg-alt) 100%);
}

.tl-card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.85rem;
}

.tl-category-tag {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--tl-text-muted);
}

.tl-card-title-link {
  text-decoration: none !important;
  color: inherit;
}

.tl-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.tl-card-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.55;
  margin: 0 0 1.25rem 0;
}

.tl-frameworks-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: 1.25rem;
}

.tl-framework-pill {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  padding: 0.2rem 0.5rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface-hover);
  border: 1px solid var(--tl-border-subtle);
  color: var(--tl-text-secondary);
}

.tl-card-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tl-feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  line-height: 1.4;
}

.tl-check-icon {
  color: var(--tl-brand-glow);
  flex-shrink: 0;
  margin-top: 0.15rem;
}

.tl-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px solid var(--tl-border-subtle);
  gap: 0.75rem;
}

.tl-card-primary-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tl-card-meta-links {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.tl-card-icon-link {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--tl-radius-sm);
  color: var(--tl-text-muted);
  transition: all var(--tl-transition-fast);
}

.tl-card-icon-link:hover {
  color: var(--tl-text-primary);
  background-color: var(--tl-surface-hover);
}
</style>
