<script setup lang="ts">
import { withBase } from 'vitepress'
import type { Article } from '../../data/articles.data'

defineProps<{
  article: Article
}>()
</script>

<template>
  <a :href="withBase(article.url)" class="tl-article-card tl-card-interactive">
    <div v-if="article.cover" class="tl-acard-cover-wrap">
      <img :src="withBase(article.cover)" :alt="article.title" class="tl-acard-cover" loading="lazy" />
    </div>

    <div class="tl-acard-body">
      <div class="tl-acard-tags">
        <span v-for="tag in article.tags.slice(0, 2)" :key="tag" class="tl-badge tl-badge-blue tl-badge-sm">
          {{ tag }}
        </span>
        <span class="tl-acard-read-time">{{ article.readTime }}</span>
      </div>

      <h3 class="tl-acard-title">{{ article.title }}</h3>
      <p class="tl-acard-desc">{{ article.description }}</p>

      <div class="tl-acard-footer">
        <span class="tl-acard-author">{{ article.author }}</span>
        <span class="tl-acard-dot">•</span>
        <span class="tl-acard-date">{{ article.formattedDate }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.tl-article-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.tl-acard-cover-wrap {
  width: 100%;
  height: 180px;
  overflow: hidden;
  background-color: var(--tl-bg-alt);
}

.tl-acard-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--tl-transition-smooth);
}

.tl-article-card:hover .tl-acard-cover {
  transform: scale(1.04);
}

.tl-acard-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.tl-acard-tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.tl-acard-read-time {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  color: var(--tl-text-muted);
}

.tl-acard-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  line-height: 1.35;
  margin: 0 0 0.5rem 0;
}

.tl-acard-desc {
  font-size: 0.875rem;
  color: var(--tl-text-secondary);
  line-height: 1.55;
  margin: 0 0 1.25rem 0;
  flex: 1;
}

.tl-acard-footer {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  color: var(--tl-text-muted);
  font-family: var(--tl-font-mono);
}

.tl-acard-author {
  color: var(--tl-text-secondary);
  font-weight: 600;
}
</style>
