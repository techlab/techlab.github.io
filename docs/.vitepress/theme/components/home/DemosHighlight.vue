<script setup lang="ts">
import { withBase } from 'vitepress'
import { getFeaturedDemos } from '../../data/demos'

const featuredDemos = getFeaturedDemos()
</script>

<template>
  <section class="tl-demos-highlight-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Interactive Playgrounds</span>
        <h2 class="tl-section-title">Experience Live Demonstrations</h2>
        <p class="tl-section-desc">
          Test themes, responsive layouts, asynchronous data loading, and transitions directly in your browser.
        </p>
      </div>

      <div class="tl-demos-grid">
        <div v-for="demo in featuredDemos" :key="demo.id" class="tl-demo-card">
          <div v-if="demo.previewImage" class="tl-demo-thumb">
            <img :src="withBase(demo.previewImage)" :alt="demo.title" class="tl-demo-img" loading="lazy" />
            <div class="tl-demo-thumb-overlay">
              <a :href="withBase(demo.link)" class="tl-btn tl-btn-primary tl-btn-sm">
                Launch Interactive Demo
              </a>
            </div>
          </div>

          <div class="tl-demo-card-body">
            <div class="tl-demo-top-row">
              <span class="tl-badge tl-badge-blue">{{ demo.framework }}</span>
              <span class="tl-demo-product-name">{{ demo.productName }}</span>
            </div>

            <h3 class="tl-demo-card-title">{{ demo.title }}</h3>
            <p class="tl-demo-card-desc">{{ demo.description }}</p>

            <div class="tl-demo-tags">
              <span v-for="tag in demo.tags" :key="tag" class="tl-demo-tag">#{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="tl-demos-footer-cta">
        <a :href="withBase('/demos/')" class="tl-btn tl-btn-secondary tl-btn-lg">
          Browse All Interactive Demos →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-demos-highlight-section {
  padding: 5rem 0;
  background: linear-gradient(180deg, transparent 0%, var(--tl-bg-alt) 50%, transparent 100%);
}

.tl-demos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 960px) {
  .tl-demos-grid {
    grid-template-columns: 1fr;
  }
}

.tl-demo-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--tl-transition-normal);
}

.tl-demo-card:hover {
  transform: translateY(-3px);
  border-color: var(--tl-border-glow);
  box-shadow: var(--tl-shadow-md);
}

.tl-demo-thumb {
  position: relative;
  height: 200px;
  background-color: var(--tl-bg-alt);
  overflow: hidden;
}

.tl-demo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--tl-transition-smooth);
}

.tl-demo-card:hover .tl-demo-img {
  transform: scale(1.04);
}

.tl-demo-thumb-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 13, 22, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--tl-transition-fast);
  backdrop-filter: blur(4px);
}

.tl-demo-card:hover .tl-demo-thumb-overlay {
  opacity: 1;
}

.tl-demo-card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tl-demo-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.tl-demo-product-name {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  color: var(--tl-text-muted);
}

.tl-demo-card-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.tl-demo-card-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.5;
  margin: 0 0 1.25rem 0;
  flex: 1;
}

.tl-demo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tl-demo-tag {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  color: var(--tl-text-muted);
}

.tl-demos-footer-cta {
  display: flex;
  justify-content: center;
}
</style>
