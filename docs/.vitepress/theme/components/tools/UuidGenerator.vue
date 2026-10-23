<script setup lang="ts">
import { ref } from 'vue'

const count = ref(5)
const isUppercase = ref(false)
const hasHyphens = ref(true)
const uuids = ref<string[]>([])
const copiedBatch = ref(false)
const copiedIndex = ref<number | null>(null)

function generateUUID(): string {
  let id = ''
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    id = crypto.randomUUID()
  } else {
    // Fallback RFC4122 v4
    id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  if (!hasHyphens.value) {
    id = id.replace(/-/g, '')
  }
  if (isUppercase.value) {
    id = id.toUpperCase()
  }
  return id
}

function regenerate() {
  const list: string[] = []
  for (let i = 0; i < count.value; i++) {
    list.push(generateUUID())
  }
  uuids.value = list
}

function copyAll() {
  if (uuids.value.length && typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(uuids.value.join('\n'))
    copiedBatch.value = true
    setTimeout(() => { copiedBatch.value = false }, 2000)
  }
}

function copyOne(index: number) {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(uuids.value[index])
    copiedIndex.value = index
    setTimeout(() => { copiedIndex.value = null }, 1500)
  }
}

// Initial generate
regenerate()
</script>

<template>
  <div class="tl-tool-wrapper">
    <div class="tl-tool-actions-bar">
      <div class="tl-tool-btn-group">
        <button type="button" class="tl-btn tl-btn-primary tl-btn-sm" @click="regenerate">
          Generate New UUIDs
        </button>
        <button
          type="button"
          class="tl-btn tl-btn-secondary tl-btn-sm"
          @click="copyAll"
        >
          <span v-if="copiedBatch">All Copied!</span>
          <span v-else>Copy All ({{ uuids.length }})</span>
        </button>
      </div>

      <div class="tl-tool-options">
        <label class="tl-tool-opt-label">
          <span>Count:</span>
          <select v-model.number="count" class="tl-tool-select" @change="regenerate">
            <option :value="1">1</option>
            <option :value="5">5</option>
            <option :value="10">10</option>
            <option :value="25">25</option>
            <option :value="50">50</option>
          </select>
        </label>
        <label class="tl-tool-checkbox-label">
          <input v-model="hasHyphens" type="checkbox" @change="regenerate" />
          <span>Hyphens</span>
        </label>
        <label class="tl-tool-checkbox-label">
          <input v-model="isUppercase" type="checkbox" @change="regenerate" />
          <span>Uppercase</span>
        </label>
      </div>
    </div>

    <!-- UUID Results List -->
    <div class="tl-uuid-results-list">
      <div v-for="(uuid, idx) in uuids" :key="idx" class="tl-uuid-row">
        <span class="tl-uuid-index">#{{ idx + 1 }}</span>
        <code class="tl-uuid-text">{{ uuid }}</code>
        <button
          type="button"
          class="tl-uuid-copy-btn"
          :title="copiedIndex === idx ? 'Copied!' : 'Copy this UUID'"
          @click="copyOne(idx)"
        >
          <span v-if="copiedIndex === idx" class="tl-row-copied">Copied!</span>
          <span v-else class="tl-row-copy-lbl">Copy</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tl-tool-wrapper {
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-xl);
  overflow: hidden;
  box-shadow: var(--tl-shadow-md);
  margin: 2rem 0;
}

.tl-tool-actions-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background-color: var(--tl-bg-alt);
  border-bottom: 1px solid var(--tl-border);
  gap: 1rem;
}

.tl-tool-btn-group {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tl-tool-options {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.tl-tool-opt-label,
.tl-tool-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  cursor: pointer;
}

.tl-tool-select {
  padding: 0.25rem 0.5rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-primary);
  font-size: 0.8125rem;
}

.tl-uuid-results-list {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--tl-code-bg);
  max-height: 480px;
  overflow-y: auto;
}

.tl-uuid-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-md);
  transition: all var(--tl-transition-fast);
}

.tl-uuid-row:hover {
  border-color: var(--tl-border-focus);
}

.tl-uuid-index {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  color: var(--tl-text-muted);
  width: 32px;
}

.tl-uuid-text {
  font-family: var(--tl-font-mono);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--tl-text-primary);
  flex: 1;
  text-align: center;
  letter-spacing: 0.03em;
}

.tl-uuid-copy-btn {
  background: var(--tl-surface-hover);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-secondary);
  border-radius: var(--tl-radius-xs);
  padding: 0.25rem 0.65rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--tl-transition-fast);
}

.tl-uuid-copy-btn:hover {
  color: var(--tl-text-primary);
  border-color: var(--tl-border-focus);
}

.tl-row-copied {
  color: var(--tl-emerald);
  font-weight: 600;
}
</style>
