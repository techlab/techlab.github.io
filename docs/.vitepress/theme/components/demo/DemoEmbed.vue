<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    title: string
    height?: string
    stackblitzId?: string
    framework?: string
    lazy?: boolean
  }>(),
  {
    height: '520px',
    lazy: true,
    framework: 'Vanilla JS'
  }
)

const containerRef = ref<HTMLElement | null>(null)
const iframeRef = ref<HTMLIFrameElement | null>(null)
const shouldRender = ref(!props.lazy)
const isLoading = ref(true)
const isFullscreen = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.lazy && typeof IntersectionObserver !== 'undefined' && containerRef.value) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        shouldRender.value = true
        if (observer) observer.disconnect()
      }
    }, { rootMargin: '200px' })
    observer.observe(containerRef.value)
  } else {
    shouldRender.value = true
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

function onIframeLoad() {
  isLoading.value = false
}

function reloadDemo() {
  if (iframeRef.value) {
    isLoading.value = true
    const current = iframeRef.value.src
    iframeRef.value.src = ''
    setTimeout(() => {
      if (iframeRef.value) iframeRef.value.src = current
    }, 50)
  }
}

function toggleFullscreen() {
  isFullscreen.value = !isFullscreen.value
}
</script>

<template>
  <div
    ref="containerRef"
    class="tl-demo-embed-wrap"
    :class="{ 'tl-embed-fullscreen': isFullscreen }"
    :style="{ height: isFullscreen ? '100vh' : height }"
  >
    <!-- Top Demo Toolbar -->
    <div class="tl-embed-bar">
      <div class="tl-embed-title-wrap">
        <span class="tl-embed-dot"></span>
        <span class="tl-embed-title">{{ title }}</span>
        <span v-if="framework" class="tl-badge tl-badge-blue tl-badge-sm">{{ framework }}</span>
      </div>

      <div class="tl-embed-controls">
        <button
          type="button"
          class="tl-ctrl-btn"
          title="Reload Demo"
          aria-label="Reload Demo"
          @click="reloadDemo"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
        </button>

        <button
          type="button"
          class="tl-ctrl-btn"
          :title="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
          :aria-label="isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'"
          @click="toggleFullscreen"
        >
          <svg v-if="!isFullscreen" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
          <svg v-else viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 14 10 14 10 20"></polyline>
            <polyline points="20 10 14 10 14 4"></polyline>
            <line x1="14" y1="10" x2="21" y2="3"></line>
            <line x1="10" y1="14" x2="3" y2="21"></line>
          </svg>
        </button>

        <a
          :href="src"
          target="_blank"
          rel="noopener noreferrer"
          class="tl-ctrl-btn"
          title="Open Demo in New Tab"
          aria-label="Open Demo in New Tab"
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>

    <!-- Iframe Container -->
    <div class="tl-embed-frame-wrap">
      <!-- Loading Skeleton / Spinner -->
      <div v-if="isLoading" class="tl-embed-loader">
        <div class="tl-spinner"></div>
        <span class="tl-loading-text">Loading interactive demonstration...</span>
      </div>

      <iframe
        v-if="shouldRender"
        ref="iframeRef"
        :src="src"
        :title="title"
        class="tl-demo-iframe"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        @load="onIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.tl-demo-embed-wrap {
  width: 100%;
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  overflow: hidden;
  box-shadow: var(--tl-shadow-md);
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  transition: all var(--tl-transition-normal);
}

.tl-embed-fullscreen {
  position: fixed !important;
  inset: 0 !important;
  z-index: 9999 !important;
  border-radius: 0 !important;
  margin: 0 !important;
}

.tl-embed-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 1rem;
  background-color: var(--tl-bg-alt);
  border-bottom: 1px solid var(--tl-border);
  gap: 0.75rem;
}

.tl-embed-title-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tl-embed-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--tl-emerald);
  box-shadow: 0 0 6px var(--tl-emerald);
}

.tl-embed-title {
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--tl-text-primary);
}

.tl-embed-controls {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.tl-ctrl-btn {
  width: 28px;
  height: 28px;
  border-radius: var(--tl-radius-xs);
  background: transparent;
  border: 1px solid transparent;
  color: var(--tl-text-secondary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none !important;
  transition: all var(--tl-transition-fast);
}

.tl-ctrl-btn:hover {
  background-color: var(--tl-surface-hover);
  color: var(--tl-text-primary);
  border-color: var(--tl-border);
}

.tl-embed-frame-wrap {
  flex: 1;
  position: relative;
  width: 100%;
  height: 100%;
}

.tl-demo-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background-color: #ffffff;
}

.tl-embed-loader {
  position: absolute;
  inset: 0;
  background-color: var(--tl-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  z-index: 2;
}

.tl-spinner {
  width: 28px;
  height: 28px;
  border: 2px solid var(--tl-border);
  border-top-color: var(--tl-brand-glow);
  border-radius: 50%;
  animation: tl-spin 0.8s linear infinite;
}

@keyframes tl-spin {
  to { transform: rotate(360deg); }
}

.tl-loading-text {
  font-size: 0.8125rem;
  color: var(--tl-text-muted);
  font-family: var(--tl-font-sans);
}
</style>
