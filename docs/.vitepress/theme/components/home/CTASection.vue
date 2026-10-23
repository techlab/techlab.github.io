<script setup lang="ts">
import { withBase } from 'vitepress'
</script>

<template>
  <section class="tl-cta-section">
    <div class="tl-container">
      <div class="tl-cta-box">
        <div class="tl-cta-content">
          <span class="tl-badge tl-badge-blue tl-cta-badge">Open Source & Free</span>
          <h2 class="tl-cta-title">Ready to build better web experiences?</h2>
          <p class="tl-cta-desc">
            Integrate Smart Wizard or any TechLaboratory plugin in minutes with zero lock-in and complete TypeScript support.
          </p>

          <div class="tl-cta-buttons">
            <a :href="withBase('/smart-wizard/')" class="tl-btn tl-btn-primary tl-btn-lg">
              Get Started with Smart Wizard
            </a>
            <a href="https://github.com/techlab" target="_blank" rel="noopener noreferrer" class="tl-btn tl-btn-secondary tl-btn-lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tl-cta-section {
  padding: 4rem 0 6rem 0;
}

.tl-cta-box {
  background: linear-gradient(135deg, var(--tl-surface) 0%, var(--tl-bg-alt) 100%);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--tl-shadow-lg);
}

.tl-cta-content {
  max-width: 640px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.tl-cta-badge {
  margin-bottom: 1.25rem;
}

.tl-cta-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--tl-text-primary);
  margin: 0 0 1rem 0;
  line-height: 1.2;
}

@media (max-width: 640px) {
  .tl-cta-title {
    font-size: 1.75rem;
  }
}

.tl-cta-desc {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: var(--tl-text-secondary);
  margin: 0 0 2rem 0;
}

.tl-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
