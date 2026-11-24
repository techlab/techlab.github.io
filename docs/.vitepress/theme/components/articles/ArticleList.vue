<script setup lang="ts">
import { ref, computed } from 'vue'
import { data as rawArticles } from '../../data/articles.data'
import FeaturedArticle from './FeaturedArticle.vue'
import ArticleCard from './ArticleCard.vue'

const searchQuery = ref('')
const selectedTag = ref('All')

const allTags = computed(() => {
  const set = new Set<string>()
  rawArticles.forEach(a => a.tags.forEach(t => set.add(t)))
  return ['All', ...Array.from(set)]
})

const featured = computed(() => {
  return rawArticles.find(a => a.featured) || rawArticles[0]
})

const filteredArticles = computed(() => {
  return rawArticles.filter(a => {
    const matchesTag = selectedTag.value === 'All' || a.tags.includes(selectedTag.value)
    const matchesSearch = !searchQuery.value ||
      a.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesTag && matchesSearch
  })
})
</script>

<template>
  <div class="tl-article-list-wrap">
    <!-- Featured Article Banner -->
    <FeaturedArticle v-if="featured" :article="featured" />

    <!-- Filter & Search Controls -->
    <div class="tl-articles-controls">
      <!-- Tag Pills -->
      <div class="tl-article-tags-bar">
        <button
          v-for="tag in allTags"
          :key="tag"
          type="button"
          class="tl-art-tag-btn"
          :class="{ 'tl-art-tag-btn-active': selectedTag === tag }"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Search Input -->
      <div class="tl-article-search">
        <input
          v-model="searchQuery"
          type="search"
          placeholder="Search engineering articles..."
          class="tl-art-search-input"
        />
      </div>
    </div>

    <!-- Article Grid -->
    <div v-if="filteredArticles.length > 0" class="tl-articles-grid">
      <ArticleCard
        v-for="art in filteredArticles"
        :key="art.url"
        :article="art"
      />
    </div>

    <div v-else class="tl-no-articles">
      <p>No articles match your search criteria.</p>
    </div>
  </div>
</template>

<style scoped>
.tl-article-list-wrap {
  margin: 2rem 0;
}

.tl-articles-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--tl-border-subtle);
}

.tl-article-tags-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tl-art-tag-btn {
  padding: 0.35rem 0.85rem;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
  border-radius: var(--tl-radius-full);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-secondary);
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-art-tag-btn:hover {
  color: var(--tl-text-primary);
  border-color: var(--tl-border-focus);
}

.tl-art-tag-btn-active {
  background: var(--tl-brand-gradient);
  color: #ffffff !important;
  border-color: transparent;
}

.tl-article-search {
  min-width: 260px;
}

.tl-art-search-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: var(--tl-radius-md);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-primary);
  font-size: 0.875rem;
  transition: all var(--tl-transition-fast);
}

.tl-art-search-input:focus {
  outline: none;
  border-color: var(--tl-border-focus);
  box-shadow: 0 0 0 2px var(--tl-brand-soft);
}

.tl-articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

@media (max-width: 960px) {
  .tl-articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tl-articles-grid {
    grid-template-columns: 1fr;
  }
}

.tl-no-articles {
  text-align: center;
  padding: 3rem;
  color: var(--tl-text-muted);
}
</style>
