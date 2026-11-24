<script setup lang="ts">
import { computed } from 'vue'
import { useData, Content } from 'vitepress'
import SiteHeader from '../components/global/SiteHeader.vue'
import SiteFooter from '../components/global/SiteFooter.vue'
import Breadcrumbs from '../components/global/Breadcrumbs.vue'
import ArticleList from '../components/articles/ArticleList.vue'

const { frontmatter } = useData()

// true  → article listing page  (hero + ArticleList component)
// false → article detail page   (markdown content with meta bar + cover image)
const isListingPage = computed(() => frontmatter.value.articleList === true)
</script>

<template>
  <div class="tl-site-wrapper">
    <!-- TechLaboratory Global Navigation Header -->
    <SiteHeader />

    <div class="tl-content-body">

      <!-- ── Article listing page ── -->
      <template v-if="isListingPage">
        <section class="tl-articles-hero">
          <div class="tl-container">
            <h1 class="tl-articles-hero-title">
              {{ frontmatter.heroTitle || 'Engineering Articles' }}
            </h1>
            <p class="tl-articles-hero-desc">
              {{ frontmatter.heroDescription || 'Deep-dives, architecture notes, and practical guides from the TechLaboratory team.' }}
            </p>
          </div>
        </section>

        <div class="tl-container tl-articles-listing-wrap">
          <ArticleList />
        </div>
      </template>

      <!-- ── Article detail page ── -->
      <template v-else>
        <div class="tl-article-detail-wrap">
          <article class="tl-article-main">
            <Breadcrumbs />

            <!-- Article meta bar: author · date · tags -->
            <div
              v-if="frontmatter.author || frontmatter.date || frontmatter.tags"
              class="tl-article-meta"
            >
              <span v-if="frontmatter.author" class="tl-art-meta-author">
                {{ frontmatter.author }}
              </span>
              <span
                v-if="frontmatter.author && (frontmatter.date || frontmatter.tags)"
                class="tl-art-meta-dot"
              >·</span>
              <span v-if="frontmatter.date" class="tl-art-meta-date">
                {{ new Date(frontmatter.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </span>
              <template v-if="frontmatter.tags && frontmatter.tags.length">
                <span class="tl-art-meta-dot">·</span>
                <span
                  v-for="tag in frontmatter.tags.slice(0, 3)"
                  :key="tag"
                  class="tl-badge tl-badge-blue tl-badge-sm"
                >{{ tag }}</span>
              </template>
            </div>

            <!-- Cover image -->
            <div v-if="frontmatter.cover" class="tl-article-cover-wrap">
              <img
                :src="frontmatter.cover"
                :alt="frontmatter.title"
                class="tl-article-cover"
                loading="eager"
              />
            </div>

            <!-- vp-doc applies VitePress markdown typography / code styles -->
            <div class="vp-doc tl-article-content">
              <Content />
            </div>

          </article>
        </div>
      </template>
    </div>

    <!-- TechLaboratory Developer Footer -->
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
  flex: 1 0 auto;
  padding-top: var(--tl-header-height);
}

/* ── Listing hero ── */
.tl-articles-hero {
  padding: 3rem 0 2.5rem;
  border-bottom: 1px solid var(--tl-border);
  background: linear-gradient(180deg, var(--tl-bg-alt) 0%, transparent 100%);
}

.tl-articles-hero-title {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--tl-text-primary);
  margin: 0 0 0.75rem;
}

.tl-articles-hero-desc {
  font-size: 1.0625rem;
  color: var(--tl-text-secondary);
  max-width: 600px;
  margin: 0;
  line-height: 1.6;
}

/* ── Listing content area ── */
.tl-articles-listing-wrap {
  padding-top: 3rem;
  padding-bottom: 4rem;
}

/* ── Article detail ── */
.tl-article-detail-wrap {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.tl-article-main {
  max-width: 800px;
  margin: 0 auto;
}

/* Meta bar */
.tl-article-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-muted);
}

.tl-art-meta-author {
  font-weight: 600;
  color: var(--tl-text-secondary);
}

.tl-art-meta-dot {
  color: var(--tl-border);
  user-select: none;
}

/* Cover image */
.tl-article-cover-wrap {
  margin-bottom: 1.5rem;
  border-radius: var(--tl-radius-lg);
  overflow: hidden;
  border: 1px solid var(--tl-border);
}

.tl-article-cover {
  width: 100%;
  max-height: 420px;
  object-fit: cover;
  display: block;
}

/* Article content */
.tl-article-content {
  margin-top: 1rem;
}

.tl-ad-slot {
  margin: 1.5rem 0;
}
</style>
