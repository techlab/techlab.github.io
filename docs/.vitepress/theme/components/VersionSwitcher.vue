<template>
  <div v-if="versions && versions.length > 0" class="version-switcher">
    <span class="version-label">Version:</span>
    <select v-model="selected" @change="goToVersion">
      <option 
        v-for="v in versions" 
        :key="v"
        :value="v"
      >
        {{ getVersionLabel(v) }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useRouter, useData, withBase } from 'vitepress'
import { ref, computed, watch } from 'vue'
import { products } from '../siteConfig'

const router = useRouter()
const { site } = useData()
const base = computed(() => site.value.base.replace('/', '').replace('/', ''))

const pagePath = computed(() => router.route.path);
const segments = computed(() => pagePath.value.split('/').filter(segment => segment.length > 0 && segment != base.value));

const plugin = computed(() => segments.value[0])
const currentVersion = computed(() => segments.value[1])

const productData = computed(() => getProductData(plugin.value));

// Get versions from centralized config with null safety
const versions = computed(() => productData.value?.versions || [])
const latestVersion = computed(() => versions.value[0] || '')
const selected = ref(currentVersion.value ?? latestVersion.value)
// Watch for page changes and update selected version
watch(currentVersion, (newVersion) => {
  selected.value = newVersion ?? latestVersion.value
})
watch(productData, () => {
  selected.value = latestVersion.value
})

// Format version label with indicators
function getVersionLabel(version) {
  let label = version
  
  if (version === latestVersion.value) {
    label += ' (latest)'
  }
  
  return label
}

function goToVersion() {
  const target = selected.value
  // Get path segments after version, excluding 'index.md'
  const rest = segments.value
    .slice(2)
    .filter(seg => seg && seg !== 'index.md')
    .join('/')
  
  // Construct clean URL
  const newPath = rest 
    ? `/${plugin.value}/${target}/${rest}` 
    : `/${plugin.value}/${target}/`

  router.go(withBase(newPath))
}

function getProductData(pageLink) {
  return products.filter(product => product.pageLink === pageLink)[0] ?? null;
}
</script>

<style scoped>
.version-switcher {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  margin-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.version-label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.version-switcher select {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.version-switcher select:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.version-switcher select:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}
</style>
