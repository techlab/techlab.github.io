<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { products } from '../../data/products'

const { site } = useData()
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="tl-footer" role="contentinfo">
    <div class="tl-container">
      <div class="tl-footer-grid">
        <!-- Brand & Mission Column -->
        <div class="tl-footer-brand-col">
          <a :href="withBase('/')" class="tl-footer-brand-link">
            <img src="/images/logo.png" alt="TechLaboratory" width="40" height="40" class="tl-footer-logo" />
            <span class="tl-footer-brand-title">TechLaboratory</span>
          </a>
          <p class="tl-footer-mission">
            Open-source UI components and engineering utilities for building modern web applications.
            <br/>
            Built and maintained for over a decade.
          </p>
        </div>

        <!-- Products Column -->
        <div class="tl-footer-col">
          <h4 class="tl-footer-heading">Products</h4>
          <ul class="tl-footer-links">
            <li>
              <a :href="withBase('/smart-wizard/')" class="tl-footer-link">
                Smart Wizard
              </a>
            </li>
            <li><a :href="withBase('/jquery-smartwizard/')" class="tl-footer-link">jQuery Smart Wizard</a></li>
            <li><a :href="withBase('/jquery-smartcart/')" class="tl-footer-link">jQuery Smart Cart</a></li>
            <li><a :href="withBase('/jquery-smarttab/')" class="tl-footer-link">jQuery Smart Tab</a></li>
            <li><a :href="withBase('/copify/')" class="tl-footer-link">Copify JS</a></li>
            <li><a :href="withBase('/react-smarttab/')" class="tl-footer-link">React Smart Tab</a></li>
            <li><a :href="withBase('/create-jquery-plugin/')" class="tl-footer-link">create-jquery-plugin</a></li>
          </ul>
        </div>

        <!-- Resources Column -->
        <div class="tl-footer-col">
          <h4 class="tl-footer-heading">Resources</h4>
          <ul class="tl-footer-links">
            <li>
              <a href="https://github.com/techlab" target="_blank" rel="noopener noreferrer" class="tl-footer-link">
                View on GitHub
              </a>
            </li>
            <li>
              <a href="https://www.npmjs.com/~dipuraj" target="_blank" rel="noopener noreferrer" class="tl-footer-link">
                NPM Packages
              </a>
            </li>
            <li>
              <a href="https://github.com/sponsors/techlab" target="_blank" rel="noopener noreferrer" class="tl-footer-link">
                Sponsor on GitHub ❤️
              </a>
            </li>
            <li><a :href="withBase('/about')" class="tl-footer-link">About TechLaboratory</a></li>
            <li><a :href="withBase('/privacy')" class="tl-footer-link">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="tl-footer-bottom">
        <div class="tl-footer-copy">
          © {{ currentYear }} TechLaboratory. Independent developer platform created by <a href="https://github.com/techlab" target="_blank" rel="noopener">Dipu Rajendran</a>.
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.tl-footer {
  margin-top: auto;
  background-color: var(--tl-surface);
  border-top: 1px solid var(--tl-border);
  padding: 4.5rem 0 2.5rem 0;
  color: var(--tl-text-secondary);
  font-size: 0.875rem;
}

.tl-footer-grid {
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
  gap: 2.5rem;
  margin-bottom: 3.5rem;
}

@media (max-width: 1024px) {
  .tl-footer-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .tl-footer-brand-col {
    grid-column: span 3;
  }
}

@media (max-width: 640px) {
  .tl-footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .tl-footer-brand-col {
    grid-column: span 1;
  }
}

.tl-footer-brand-link {
  display: flex;
  flex-direction: column;
  align-items: s;
  gap: 0.625rem;
  text-decoration: none !important;
  color: var(--tl-text-primary);
  margin-bottom: 1rem;
}

.tl-footer-brand-title {
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--tl-brand-glow);
}

.tl-footer-mission {
  color: var(--tl-text-secondary);
  line-height: 1.6;
  margin: 0 0 1.25rem 0;
  max-width: 340px;
  font-size: 0.875rem;
}

.tl-footer-status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--tl-text-muted);
  font-family: var(--tl-font-mono);
}

.tl-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--tl-emerald);
  box-shadow: 0 0 8px var(--tl-emerald);
}

.tl-footer-heading {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--tl-text-primary);
  margin: 0 0 1.125rem 0;
}

.tl-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.tl-footer-link {
  color: var(--tl-text-secondary);
  text-decoration: none !important;
  transition: color var(--tl-transition-fast);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.tl-footer-link:hover {
  color: var(--tl-brand-glow);
}

.tl-badge-mini {
  font-size: 0.625rem;
  padding: 0.1rem 0.375rem;
}

.tl-footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--tl-border-subtle);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.8125rem;
  color: var(--tl-text-muted);
}

.tl-footer-copy a {
  color: var(--tl-text-secondary);
  text-decoration: none;
}

.tl-footer-copy a:hover {
  color: var(--tl-brand-glow);
}

.tl-footer-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tl-meta-pill {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  padding: 0.2rem 0.5rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface-hover);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-muted);
}
</style>
