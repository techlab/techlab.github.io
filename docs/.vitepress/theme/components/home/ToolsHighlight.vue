<script setup lang="ts">
import { withBase } from 'vitepress'
import { developerTools } from '../../data/tools'
</script>

<template>
  <section class="tl-tools-highlight-section">
    <div class="tl-container">
      <div class="tl-section-header">
        <span class="tl-section-eyebrow">Zero Server Latency</span>
        <h2 class="tl-section-title">Developer Utilities Suite</h2>
        <p class="tl-section-desc">
          Essential developer utilities executed entirely in your browser. No sensitive data ever touches external servers.
        </p>
      </div>

      <div class="tl-tools-highlight-grid">
        <a
          v-for="tool in developerTools"
          :key="tool.id"
          :href="withBase(tool.link)"
          class="tl-tool-card tl-card-interactive"
        >
          <div class="tl-tool-icon-box">
            <span class="tl-tool-icon-symbol">{{ tool.icon }}</span>
          </div>
          <div class="tl-tool-info">
            <div class="tl-tool-header">
              <h3 class="tl-tool-name">{{ tool.name }}</h3>
              <span v-if="tool.badge" class="tl-badge tl-badge-blue tl-badge-sm">{{ tool.badge }}</span>
            </div>
            <p class="tl-tool-desc">{{ tool.description }}</p>
            <div class="tl-tool-footer">
              <span class="tl-tool-action">Open Utility →</span>
              <span class="tl-tool-cat">{{ tool.category }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-tools-highlight-section {
  padding: 5rem 0;
}

.tl-tools-highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

@media (max-width: 960px) {
  .tl-tools-highlight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tl-tools-highlight-grid {
    grid-template-columns: 1fr;
  }
}

.tl-tool-card {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  text-decoration: none !important;
  color: inherit;
  transition: all var(--tl-transition-normal);
}

.tl-tool-card:hover {
  transform: translateY(-2px);
  border-color: var(--tl-border-glow);
  box-shadow: var(--tl-shadow-md);
}

.tl-tool-icon-box {
  width: 44px;
  height: 44px;
  border-radius: var(--tl-radius-md);
  background-color: var(--tl-brand-soft);
  border: 1px solid rgba(2, 132, 199, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tl-tool-icon-symbol {
  font-family: var(--tl-font-mono);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--tl-brand-glow);
}

.tl-tool-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.tl-tool-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.35rem;
}

.tl-tool-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0;
}

.tl-tool-desc {
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.tl-tool-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-top: auto;
}

.tl-tool-action {
  font-weight: 600;
  color: var(--tl-brand-glow);
}

.tl-tool-cat {
  font-family: var(--tl-font-mono);
  color: var(--tl-text-muted);
}
</style>
