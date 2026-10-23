<script setup lang="ts">
import { withBase } from 'vitepress'
import type { Article } from '../../data/articles.data'

defineProps<{
  article: Article
}>()
</script>

<template>
  <a :href="withBase(article.url)" class="tl-featured-article-card">
    <div class="tl-farticle-grid">
      <div v-if="article.cover" class="tl-farticle-cover-wrap">
        <img :src="withBase(article.cover)" :alt="article.title" class="tl-farticle-cover" loading="lazy" />
      </div>

      <div class="tl-farticle-body">
        <div class="tl-farticle-top">
          <span class="tl-badge tl-badge-blue">Featured Story</span>
          <span class="tl-farticle-read">{{ article.readTime }}</span>
        </div>

        <h2 class="tl-farticle-title">{{ article.title }}</h2>
        <p class="tl-farticle-desc">{{ article.description }}</p>

        <div class="tl-farticle-meta">
          <span class="tl-farticle-author">{{ article.author }}</span>
          <span class="tl-farticle-dot">•</span>
          <span class="tl-farticle-date">{{ article.formattedDate }}</span>
        </div>

        <div class="tl-farticle-cta">
          <span>Read Full Article →</span>
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.tl-featured-article-card {
  display: block;
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  overflow: hidden;
  text-decoration: none !important;
  color: inherit;
  margin-bottom: 3.5rem;
  transition: all var(--tl-transition-normal);
}

.tl-featured-article-card:hover {
  transform: translateY(-2px);
  border-color: var(--tl-border-glow);
  box-shadow: var(--tl-shadow-md);
}

.tl-farticle-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
}

@media (max-width: 860px) {
  .tl-farticle-grid {
    grid-template-columns: 1fr;
  }
}

.tl-farticle-cover-wrap {
  height: 100%;
  min-height: 280px;
  overflow: hidden;
  background-color: var(--tl-bg-alt);
}

.tl-farticle-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--tl-transition-smooth);
}

.tl-featured-article-card:hover .tl-farticle-cover {
  transform: scale(1.03);
}

.tl-farticle-body {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

@media (max-width: 640px) {
  .tl-farticle-body {
    padding: 1.5rem;
  }
}

.tl-farticle-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.tl-farticle-read {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  color: var(--tl-text-muted);
}

.tl-farticle-title {
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.25;
  color: var(--tl-text-primary);
  margin: 0 0 0.85rem 0;
}

@media (max-width: 640px) {
  .tl-farticle-title {
    font-size: 1.35rem;
  }
}

.tl-farticle-desc {
  font-size: 0.9375rem;
  color: var(--tl-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.tl-farticle-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-muted);
  margin-bottom: 1.25rem;
}

.tl-farticle-author {
  color: var(--tl-text-primary);
  font-weight: 600;
}

.tl-farticle-cta {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--tl-brand-glow);
}
</style>
