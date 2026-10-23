<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

export type AdProvider = 'none' | 'carbon' | 'adsense'
export type AdPlacement = 'header' | 'sidebar' | 'content-top' | 'content-middle' | 'content-bottom' | 'footer'

const props = withDefaults(
  defineProps<{
    provider?: AdProvider
    placement?: AdPlacement
    enabled?: boolean
  }>(),
  {
    provider: 'carbon',
    placement: 'content-bottom',
    enabled: true
  }
)

const { frontmatter } = useData()
const route = useRoute()
const adContainer = ref<HTMLElement | null>(null)

const isEnabled = computed(() => {
  if (frontmatter.value.ads === false) return false
  if (props.enabled === false) return false
  return true
})

const activeProvider = computed<AdProvider>(() => {
  if (!isEnabled.value) return 'none'
  if (frontmatter.value.adProvider) return frontmatter.value.adProvider as AdProvider
  return props.provider
})

function loadCarbonAds() {
  if (typeof window === 'undefined' || !adContainer.value) return
  adContainer.value.innerHTML = ''
  
  const script = document.createElement('script')
  script.async = true
  script.id = '_carbonads_js'
  script.src = '//cdn.carbonads.com/carbon.js?serve=CE7D6K3E&placement=techlaboratorynet'
  adContainer.value.appendChild(script)
}

onMounted(() => {
  if (activeProvider.value === 'carbon') {
    loadCarbonAds()
  }
})

watch(
  () => route.path,
  () => {
    if (activeProvider.value === 'carbon') {
      setTimeout(loadCarbonAds, 300)
    }
  }
)
</script>

<template>
  <div v-if="isEnabled && activeProvider !== 'none'" class="tl-ad-slot-wrapper" :data-placement="placement">
    <div class="tl-ad-container">
      <div class="tl-ad-label">SPONSORED</div>
      
      <div v-if="activeProvider === 'carbon'" ref="adContainer" class="carbon-ads-target">
        <div class="tl-ad-placeholder">
          <span>Support open-source development on TechLaboratory</span>
        </div>
      </div>

      <div v-else-if="activeProvider === 'adsense'" class="adsense-target">
        <ins
          class="adsbygoogle"
          style="display:block; text-align:center;"
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-XXXXX"
          data-ad-slot="XXXXX"
        ></ins>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tl-ad-slot-wrapper {
  margin: 2.5rem 0 1.5rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
}

.tl-ad-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: var(--tl-radius-md);
  background-color: var(--tl-surface);
  border: 1px dashed var(--tl-border);
  transition: border-color var(--tl-transition-fast);
}

.tl-ad-container:hover {
  border-color: var(--tl-border-focus);
}

.tl-ad-label {
  font-family: var(--tl-font-mono);
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--tl-text-muted);
  margin-bottom: 0.5rem;
  align-self: flex-start;
}

.carbon-ads-target {
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tl-ad-placeholder {
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  font-family: var(--tl-font-sans);
  text-align: center;
  padding: 1rem;
}
</style>
