<script setup lang="ts">
import type { ToolDefinition } from '../../data/tools'

defineProps<{
  tool: ToolDefinition
}>()
</script>

<template>
  <a :href="tool.link" class="tl-tool-card">
    <div class="tool-card-header">
      <div class="tool-card-icon-box">
        <span class="tool-card-icon">{{ tool.icon }}</span>
      </div>
      <div class="tool-card-badges">
        <span class="tool-category-badge">{{ tool.category }}</span>
        <span v-if="tool.badge" class="tool-status-badge">{{ tool.badge }}</span>
      </div>
    </div>

    <div class="tool-card-body">
      <h3 class="tool-card-title">{{ tool.name }}</h3>
      <p class="tool-card-tagline">{{ tool.tagline }}</p>
      <p class="tool-card-desc">{{ tool.description }}</p>
    </div>

    <div class="tool-card-footer">
      <span class="tool-action-link">
        Launch Tool
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="tool-privacy-pill">Client-side</span>
    </div>
  </a>
</template>

<style scoped>
.tl-tool-card {
  display: flex;
  flex-direction: column;
  background: var(--tl-bg-surface);
  border: 1px solid var(--tl-border-subtle);
  border-radius: var(--tl-radius-xl);
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.tl-tool-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: transparent;
  transition: background 0.25s ease;
}

.tl-tool-card:hover {
  transform: translateY(-3px);
  border-color: var(--tl-border-accent);
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.35), 0 0 20px -8px var(--tl-accent-cyan-glow);
}

.tl-tool-card:hover::before {
  background: linear-gradient(90deg, var(--tl-accent-cyan), var(--tl-accent-blue));
}

.tool-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.tool-card-icon-box {
  width: 44px;
  height: 44px;
  border-radius: var(--tl-radius-lg);
  background: var(--tl-bg-elevated);
  border: 1px solid var(--tl-border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.tl-tool-card:hover .tool-card-icon-box {
  border-color: var(--tl-border-accent);
  background: var(--tl-accent-cyan-subtle);
}

.tool-card-icon {
  font-family: var(--tl-font-mono);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--tl-accent-cyan);
}

.tool-card-badges {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.tool-category-badge {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--tl-text-muted);
  background: var(--tl-bg-elevated);
  padding: 0.2rem 0.55rem;
  border-radius: var(--tl-radius-pill);
  border: 1px solid var(--tl-border-subtle);
}

.tool-status-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--tl-accent-cyan);
  background: var(--tl-accent-cyan-subtle);
  padding: 0.2rem 0.55rem;
  border-radius: var(--tl-radius-pill);
  border: 1px solid var(--tl-border-accent);
}

.tool-card-body {
  flex: 1;
}

.tool-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0 0 0.35rem 0;
  letter-spacing: -0.01em;
  transition: color 0.2s ease;
}

.tl-tool-card:hover .tool-card-title {
  color: var(--tl-accent-cyan);
}

.tool-card-tagline {
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--tl-text-secondary);
  margin: 0 0 0.75rem 0;
  line-height: 1.4;
}

.tool-card-desc {
  font-size: 0.82rem;
  color: var(--tl-text-muted);
  line-height: 1.55;
  margin: 0 0 1.25rem 0;
}

.tool-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--tl-border-subtle);
}

.tool-action-link {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--tl-accent-cyan);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: transform 0.2s ease;
}

.tl-tool-card:hover .tool-action-link {
  transform: translateX(4px);
}

.tool-privacy-pill {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--tl-text-muted);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.tool-privacy-pill::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--tl-color-success);
}
</style>
