<script setup lang="ts">
import { ref, computed } from 'vue'
import { developerTools, type ToolDefinition } from '../../data/tools'
import ToolCard from './ToolCard.vue'

const selectedCategory = ref<string>('All')
const searchQuery = ref<string>('')

const categories = ['All', 'Formatting', 'Encoding', 'Generators', 'Testing']

const filteredTools = computed(() => {
  return developerTools.filter(tool => {
    const matchesCat = selectedCategory.value === 'All' || tool.category === selectedCategory.value
    const matchesSearch = searchQuery.value.trim() === '' || 
      tool.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCat && matchesSearch
  })
})
</script>

<template>
  <div class="tl-tools-container">
    <!-- Controls Header -->
    <div class="tools-controls">
      <!-- Search Box -->
      <div class="tools-search-wrap">
        <svg class="search-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Filter tools by name, utility, or keywords..."
          class="tools-search-input"
        />
        <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''" aria-label="Clear search">×</button>
      </div>

      <!-- Category Filter Pills -->
      <div class="tools-filter-pills">
        <button 
          v-for="cat in categories" 
          :key="cat"
          class="cat-pill"
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
          <span class="cat-count">
            {{ cat === 'All' ? developerTools.length : developerTools.filter(t => t.category === cat).length }}
          </span>
        </button>
      </div>
    </div>

    <!-- Results Grid -->
    <div v-if="filteredTools.length > 0" class="tools-grid">
      <ToolCard 
        v-for="tool in filteredTools" 
        :key="tool.id" 
        :tool="tool" 
      />
    </div>

    <!-- Empty State -->
    <div v-else class="tools-empty-state">
      <div class="empty-icon">🔍</div>
      <h3>No tools matching "{{ searchQuery }}"</h3>
      <p>Try searching for formatting, regex, base64, or clear filters.</p>
      <button class="tl-btn tl-btn-secondary" @click="selectedCategory = 'All'; searchQuery = ''">
        Reset Filters
      </button>
    </div>
  </div>
</template>

<style scoped>
.tl-tools-container {
  margin-top: 1.5rem;
}

.tools-controls {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  background: var(--tl-bg-surface);
  border: 1px solid var(--tl-border-subtle);
  border-radius: var(--tl-radius-xl);
  padding: 1.5rem;
}

.tools-search-wrap {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--tl-text-muted);
  pointer-events: none;
}

.tools-search-input {
  width: 100%;
  background: var(--tl-bg-elevated);
  border: 1px solid var(--tl-border-subtle);
  border-radius: var(--tl-radius-lg);
  padding: 0.75rem 2.5rem 0.75rem 2.75rem;
  font-size: 0.95rem;
  color: var(--tl-text-primary);
  font-family: inherit;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.tools-search-input:focus {
  outline: none;
  border-color: var(--tl-accent-cyan);
  box-shadow: 0 0 0 3px var(--tl-accent-cyan-subtle);
}

.clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  color: var(--tl-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  line-height: 1;
}

.clear-btn:hover {
  color: var(--tl-text-primary);
}

.tools-filter-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cat-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: var(--tl-radius-pill);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  background: var(--tl-bg-elevated);
  border: 1px solid var(--tl-border-subtle);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cat-pill:hover {
  color: var(--tl-text-primary);
  border-color: var(--tl-border-medium);
}

.cat-pill.active {
  background: var(--tl-accent-cyan-subtle);
  color: var(--tl-accent-cyan);
  border-color: var(--tl-border-accent);
  font-weight: 600;
}

.cat-count {
  font-size: 0.72rem;
  padding: 0.1rem 0.4rem;
  border-radius: var(--tl-radius-pill);
  background: var(--tl-bg-base);
  color: var(--tl-text-muted);
}

.cat-pill.active .cat-count {
  background: var(--tl-accent-cyan);
  color: #030712;
  font-weight: 700;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.tools-empty-state {
  text-align: center;
  padding: 4rem 1.5rem;
  background: var(--tl-bg-surface);
  border: 1px dashed var(--tl-border-subtle);
  border-radius: var(--tl-radius-xl);
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.tools-empty-state h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin-bottom: 0.5rem;
}

.tools-empty-state p {
  font-size: 0.95rem;
  color: var(--tl-text-muted);
  margin-bottom: 1.5rem;
}
</style>
