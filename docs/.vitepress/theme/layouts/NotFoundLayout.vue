<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'
import SiteHeader from '../components/global/SiteHeader.vue'
import SiteFooter from '../components/global/SiteFooter.vue'
import ProductCard from '../components/product/ProductCard.vue'
import { products, type ProductDefinition } from '../data/products'
import { resolveLegacyRedirect, findSuggestedProducts } from '../data/redirects'

const router = useRouter()

const requestedPath = ref('')
const redirectingTo = ref<string | null>(null)
const suggestedProducts = ref<ProductDefinition[]>([])
const activeCategory = ref<string>('All')

const categories = computed(() => {
  const unique = Array.from(new Set(products.map(p => p.category)))
  return ['All', ...unique]
})

const filteredProducts = computed(() => {
  if (activeCategory.value === 'All') {
    return products
  }
  return products.filter(p => p.category === activeCategory.value)
})

onMounted(() => {
  if (typeof window === 'undefined') return

  const { pathname, search } = window.location
  requestedPath.value = `${pathname}${search}`

  const redirectTarget = resolveLegacyRedirect(pathname, search)
  if (redirectTarget) {
    redirectingTo.value = redirectTarget
    router.go(withBase(redirectTarget))
    return
  }

  suggestedProducts.value = findSuggestedProducts(pathname, search)
})
</script>

<template>
  <div class="tl-site-wrapper">
    <SiteHeader />

    <main class="tl-content-body">
      <div class="tl-container tl-notfound-container">
        <!-- Redirecting Banner (shown briefly for mapped legacy URLs) -->
        <section v-if="redirectingTo" class="tl-notfound-hero tl-notfound-redirecting">
          <span class="tl-section-eyebrow">Page Moved</span>
          <h1 class="tl-notfound-title">Redirecting you to the new page…</h1>
          <p class="tl-notfound-desc">
            The URL <code>{{ requestedPath }}</code> has moved to a new location.
          </p>
          <div class="tl-notfound-actions">
            <a :href="withBase(redirectingTo)" class="tl-btn tl-btn-primary">
              Continue to {{ redirectingTo }}
            </a>
          </div>
        </section>

        <!-- Standard 404 Hero -->
        <section v-else class="tl-notfound-hero">
          <div class="tl-notfound-code">404</div>
          <span class="tl-section-eyebrow">Page Not Found</span>
          <h1 class="tl-notfound-title">We couldn't find that page</h1>
          <p class="tl-notfound-desc">
            <template v-if="requestedPath">
              The requested path <code>{{ requestedPath }}</code> may have been moved or renamed.
            </template>
            <template v-else>
              The page you are looking for may have been moved or renamed.
            </template>
            Explore our products below to find what you need.
          </p>

          <div class="tl-notfound-actions">
            <a :href="withBase('/')" class="tl-btn tl-btn-primary">
              Back to Home
            </a>
            <a href="#all-products" class="tl-btn tl-btn-secondary">
              Browse All Products
            </a>
          </div>
        </section>

        <!-- Contextual "Did You Mean?" Suggestions -->
        <section v-if="!redirectingTo && suggestedProducts.length > 0" class="tl-notfound-section">
          <div class="tl-notfound-section-header">
            <span class="tl-section-eyebrow">Closest Match</span>
            <h2 class="tl-notfound-section-title">Were you looking for one of these?</h2>
          </div>
          <div class="tl-products-grid">
            <ProductCard
              v-for="prod in suggestedProducts"
              :key="`suggested-${prod.id}`"
              :product="prod"
            />
          </div>
        </section>

        <!-- Full Product Directory -->
        <section id="all-products" class="tl-notfound-section">
          <div class="tl-notfound-section-header">
            <span class="tl-section-eyebrow">Product Directory</span>
            <h2 class="tl-notfound-section-title">All TechLaboratory Products</h2>
            <p class="tl-notfound-section-desc">
              Jump directly to any product overview, documentation, or live demo.
            </p>
          </div>

          <div class="tl-filter-bar">
            <button
              v-for="cat in categories"
              :key="cat"
              type="button"
              class="tl-filter-pill"
              :class="{ 'tl-filter-pill-active': activeCategory === cat }"
              @click="activeCategory = cat"
            >
              {{ cat === 'All' ? 'All Products' : cat + 's' }}
            </button>
          </div>

          <div class="tl-products-grid">
            <ProductCard
              v-for="prod in filteredProducts"
              :key="prod.id"
              :product="prod"
            />
          </div>
        </section>
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<style scoped>
.tl-site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--tl-bg);
  color: var(--tl-text-primary);
}

.tl-content-body {
  flex: 1;
}

.tl-notfound-container {
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.tl-notfound-hero {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 4rem;
  padding: 2.5rem 1.5rem;
  border-radius: var(--tl-radius-xl, 1rem);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
}

.tl-notfound-code {
  font-family: var(--vp-font-family-mono);
  font-size: clamp(3.5rem, 8vw, 5.5rem);
  font-weight: 800;
  line-height: 1;
  margin-bottom: 0.75rem;
  background: var(--tl-brand-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tl-notfound-title {
  font-size: clamp(1.75rem, 3.5vw, 2.25rem);
  font-weight: 800;
  color: var(--tl-text-primary);
  margin: 0.5rem 0 1rem;
  line-height: 1.2;
}

.tl-notfound-desc {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--tl-text-secondary);
  margin: 0 0 1.75rem;
}

.tl-notfound-desc code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.875em;
  padding: 0.15rem 0.45rem;
  border-radius: 0.375rem;
  background-color: var(--tl-bg);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-primary);
  word-break: break-all;
}

.tl-notfound-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.tl-notfound-section {
  margin-top: 3.5rem;
}

.tl-notfound-section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.tl-notfound-section-title {
  font-size: clamp(1.375rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--tl-text-primary);
  margin: 0.375rem 0 0.5rem;
}

.tl-notfound-section-desc {
  font-size: 0.95rem;
  color: var(--tl-text-secondary);
  margin: 0;
}

.tl-filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tl-filter-pill {
  padding: 0.5rem 1.125rem;
  border-radius: var(--tl-radius-full);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--tl-text-secondary);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-filter-pill:hover {
  color: var(--tl-text-primary);
  border-color: var(--tl-border-focus);
}

.tl-filter-pill-active {
  background: var(--tl-brand-gradient);
  color: #ffffff !important;
  border-color: transparent;
  box-shadow: 0 2px 10px rgba(2, 132, 199, 0.3);
}

.tl-products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 860px) {
  .tl-products-grid {
    grid-template-columns: 1fr;
  }
}
</style>

