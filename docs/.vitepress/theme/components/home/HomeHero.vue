<script setup lang="ts">
import { ref, computed } from 'vue'
import { withBase } from 'vitepress'

const activeTab = ref<'sw' | 'react' | 'copify'>('sw')
const copied = ref(false)

const codeSnippets = {
  sw: `// Install Smart Wizard v1
import { SmartWizard } from '@smart-wizard/core'
import '@smart-wizard/ui/dist/smartwizard-full.min.css'

const wizard = new SmartWizard('#my-wizard', {
  theme: 'arrows',
  autoAdjustHeight: true,
  transition: { animation: 'slideHorizontal' },
  toolbar: { position: 'bottom' }
})`,
  react: `// React Adapter Example
import { Wizard, Step } from '@smart-wizard/react'
import '@smart-wizard/ui/dist/themes/pills.min.css'

export default function CheckoutFlow() {
  return (
    <Wizard theme="pills" colorScheme="auto">
      <Step title="Shipping">...</Step>
      <Step title="Payment">...</Step>
      <Step title="Confirm">...</Step>
    </Wizard>
  )
}`,
  copify: `// Zero-Dependency Clipboard Utility
import { copify } from 'copify'

const result = await copify.writeText('Precision developer tool')
if (result.success) {
  console.log('Copied with fallback support!')
}`
}

function copyActiveCode() {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(codeSnippets[activeTab.value])
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

const maintainedYear = computed(() => (new Date().getFullYear() - 2015))
</script>

<template>
  <section class="tl-hero">
    <div class="tl-container">
      <div class="tl-hero-grid">
        <!-- Left: Copy & Actions -->
        <div class="tl-hero-content">
          <h1 class="tl-hero-title">
            Build better web experiences with
            <span class="tl-gradient-text"><strong>smarter components</strong> for the modern web</span>
          </h1>

          <p class="tl-hero-subtitle">
            Open-source UI components, multi-step navigation engines, and practical engineering utilities. Engineered for TypeScript, accessible by default, and trusted for over a decade.
          </p>

          <div class="tl-hero-actions">
            <a href="#flagship" class="tl-btn tl-btn-primary tl-btn-lg">
              Explore Products
              <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="https://github.com/techlab" class="tl-btn tl-btn-secondary tl-btn-lg">
              <svg data-v-417d27fb="" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path data-v-417d27fb="" fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>View on GitHub
            </a>
          </div>

          <!-- Quick Metrics Bar -->
          <div class="tl-hero-stats">
            <div class="tl-stat-item">
              <span class="tl-stat-val">15M+</span>
              <span class="tl-stat-lbl">CDN Requests Monthly</span>
            </div>

            <div class="tl-stat-divider"></div>
            <div class="tl-stat-item">
              <span class="tl-stat-val">20K+</span>
              <span class="tl-stat-lbl">NPM Downloads Monthly</span>
            </div>

            <div class="tl-stat-divider"></div>
            <div class="tl-stat-item">
              <span class="tl-stat-val">{{ maintainedYear }}+</span>
              <span class="tl-stat-lbl">Years of Maintenance</span>
            </div>
            
          </div>
        </div>

        <!-- Right: Technical Interactive Terminal/Code Window -->
        <div class="tl-hero-visual">

          <img
                :src="withBase('images/hero2.png')"
                alt="TechLaboratory"
                class="tl-preview-img"
                loading="lazy"
              />

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-hero {
  padding: 5rem 0 4rem 0;
  position: relative;
  overflow: hidden;
}

@media (min-width: 1024px) {
  .tl-hero {
    padding: 6.5rem 0 5.5rem 0;
  }
}

.tl-hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
}

@media (max-width: 960px) {
  .tl-hero-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

.tl-hero-badge-wrap {
  margin-bottom: 1.25rem;
}

.tl-badge-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--tl-brand-glow);
  box-shadow: 0 0 8px var(--tl-brand-glow);
  animation: tl-pulse 2s infinite;
}

@keyframes tl-pulse {
  0% { transform: scale(0.95); opacity: 0.8; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.8; }
}

.tl-hero-title {
  font-size: 2.75rem;
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.035em;
  color: var(--tl-text-primary);
  margin: 0 0 1.25rem 0;
}

@media (max-width: 640px) {
  .tl-hero-title {
    font-size: 2.125rem;
  }
}

.tl-gradient-text {
  background: var(--tl-brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.tl-hero-subtitle {
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--tl-text-secondary);
  margin: 0 0 2rem 0;
  max-width: 580px;
}

.tl-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.75rem;
}

.tl-hero-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: 1px solid var(--tl-border-subtle);
}

.tl-stat-item {
  display: flex;
  flex-direction: column;
}

.tl-stat-val {
  font-size: 1.25rem;
  font-weight: 800;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-primary);
}

.tl-stat-lbl {
  font-size: 0.75rem;
  color: var(--tl-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tl-stat-divider {
  width: 1px;
  height: 28px;
  background-color: var(--tl-border);
}

/* Terminal Window */
.tl-terminal-window {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  box-shadow: var(--tl-shadow-lg);
  overflow: hidden;
  position: relative;
}

.tl-terminal-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: var(--tl-bg-alt);
  border-bottom: 1px solid var(--tl-border);
}

.tl-window-dots {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tl-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.tl-dot-red { background-color: #ef4444; }
.tl-dot-yellow { background-color: #f59e0b; }
.tl-dot-green { background-color: #10b981; }

.tl-terminal-tabs {
  display: flex;
  gap: 0.25rem;
}

.tl-terminal-tab {
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  font-family: var(--tl-font-mono);
  font-weight: 600;
  border-radius: var(--tl-radius-xs);
  border: none;
  background: transparent;
  color: var(--tl-text-muted);
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-terminal-tab:hover {
  color: var(--tl-text-primary);
}

.tl-terminal-tab-active {
  background-color: var(--tl-surface);
  color: var(--tl-brand-glow);
  box-shadow: var(--tl-shadow-xs);
}

.tl-copy-code-btn {
  background: transparent;
  border: none;
  color: var(--tl-text-muted);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: var(--tl-radius-xs);
  display: inline-flex;
  align-items: center;
  transition: color var(--tl-transition-fast);
}

.tl-copy-code-btn:hover {
  color: var(--tl-text-primary);
}

.tl-copied-tag {
  font-size: 0.6875rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-emerald);
  font-weight: 600;
}

.tl-terminal-body {
  padding: 1.25rem 1.25rem;
  background-color: var(--tl-code-bg);
  overflow-x: auto;
}

.tl-code-pre {
  margin: 0;
  font-family: var(--tl-font-mono);
  font-size: 0.8125rem;
  line-height: 1.6;
  color: var(--tl-code-text);
}

.tl-terminal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background-color: var(--tl-bg-alt);
  border-top: 1px solid var(--tl-border);
  font-size: 0.75rem;
}

.tl-install-snippet {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-secondary);
}

.tl-prompt {
  color: var(--tl-brand-glow);
  font-weight: 700;
}

.tl-tech-tag {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  color: var(--tl-text-muted);
}
</style>
