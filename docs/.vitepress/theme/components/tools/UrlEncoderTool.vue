<script setup lang="ts">
import { ref, computed } from 'vue'

const inputUrl = ref('https://techlaboratory.net/smart-wizard/?utm_source=github&theme=arrows&step=2#demo')
const outputUrl = ref('')
const mode = ref<'encode' | 'decode'>('encode')
const encodeMode = ref<'component' | 'full'>('component')
const copied = ref(false)

function process() {
  if (!inputUrl.value) {
    outputUrl.value = ''
    return
  }
  try {
    if (mode.value === 'encode') {
      outputUrl.value = encodeMode.value === 'component'
        ? encodeURIComponent(inputUrl.value)
        : encodeURI(inputUrl.value)
    } else {
      outputUrl.value = decodeURIComponent(inputUrl.value)
    }
  } catch (err: any) {
    outputUrl.value = 'Error decoding URL: ' + err.message
  }
}

const parsedQueryParams = computed(() => {
  try {
    const url = new URL(inputUrl.value)
    const params: { key: string; value: string }[] = []
    url.searchParams.forEach((val, key) => {
      params.push({ key, value: val })
    })
    return {
      protocol: url.protocol,
      host: url.host,
      pathname: url.pathname,
      hash: url.hash,
      params
    }
  } catch {
    return null
  }
})

function copyOutput() {
  if (outputUrl.value && typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(outputUrl.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

process()
</script>

<template>
  <div class="tl-tool-wrapper">
    <div class="tl-tool-actions-bar">
      <div class="tl-tool-btn-group">
        <button
          type="button"
          class="tl-btn tl-btn-sm"
          :class="mode === 'encode' ? 'tl-btn-primary' : 'tl-btn-secondary'"
          @click="mode = 'encode'; process()"
        >
          Encode
        </button>
        <button
          type="button"
          class="tl-btn tl-btn-sm"
          :class="mode === 'decode' ? 'tl-btn-primary' : 'tl-btn-secondary'"
          @click="mode = 'decode'; process()"
        >
          Decode
        </button>
      </div>

      <div class="tl-tool-options">
        <label v-if="mode === 'encode'" class="tl-tool-opt-label">
          <span>Type:</span>
          <select v-model="encodeMode" class="tl-tool-select" @change="process">
            <option value="component">Component (encodeURIComponent)</option>
            <option value="full">Full URL (encodeURI)</option>
          </select>
        </label>
        <button
          type="button"
          class="tl-btn tl-btn-secondary tl-btn-sm"
          :disabled="!outputUrl"
          @click="copyOutput"
        >
          <span v-if="copied">Copied!</span>
          <span v-else>Copy Output</span>
        </button>
      </div>
    </div>

    <div class="tl-tool-editors-grid">
      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">Input URL or String</span>
        </div>
        <textarea
          v-model="inputUrl"
          class="tl-editor-textarea"
          rows="10"
          placeholder="Paste URL or text..."
          spellcheck="false"
          @input="process"
        ></textarea>
      </div>

      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">{{ mode === 'encode' ? 'Encoded Result' : 'Decoded Result' }}</span>
        </div>
        <textarea
          v-model="outputUrl"
          class="tl-editor-textarea tl-editor-readonly"
          rows="10"
          readonly
          spellcheck="false"
        ></textarea>
      </div>
    </div>

    <!-- URL Parameter Inspector -->
    <div v-if="parsedQueryParams" class="tl-url-inspector">
      <div class="tl-inspector-heading">Parsed URL Breakdown</div>
      <div class="tl-inspector-details">
        <span class="tl-insp-pill"><strong>Host:</strong> {{ parsedQueryParams.host }}</span>
        <span class="tl-insp-pill"><strong>Path:</strong> {{ parsedQueryParams.pathname }}</span>
        <span v-if="parsedQueryParams.hash" class="tl-insp-pill"><strong>Hash:</strong> {{ parsedQueryParams.hash }}</span>
      </div>

      <div v-if="parsedQueryParams.params.length > 0" class="tl-params-table-wrap">
        <table class="tl-params-table">
          <thead>
            <tr>
              <th>Query Parameter</th>
              <th>Decoded Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in parsedQueryParams.params" :key="p.key">
              <td class="tl-param-key">{{ p.key }}</td>
              <td class="tl-param-val">{{ p.value }}</td>
            </tr>
          </tbody>
        </table>
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

.tl-tool-btn-group,
.tl-tool-options {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tl-tool-opt-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
}

.tl-tool-select {
  padding: 0.25rem 0.5rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-primary);
  font-size: 0.8125rem;
}

.tl-tool-editors-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
  .tl-tool-editors-grid {
    grid-template-columns: 1fr;
  }
}

.tl-editor-col {
  display: flex;
  flex-direction: column;
}

.tl-editor-col:first-child {
  border-right: 1px solid var(--tl-border);
}

@media (max-width: 768px) {
  .tl-editor-col:first-child {
    border-right: none;
    border-bottom: 1px solid var(--tl-border);
  }
}

.tl-editor-header {
  padding: 0.5rem 1rem;
  background-color: var(--tl-bg-alt);
  border-bottom: 1px solid var(--tl-border-subtle);
}

.tl-editor-label {
  font-family: var(--tl-font-mono);
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--tl-text-muted);
}

.tl-editor-textarea {
  width: 100%;
  padding: 1rem;
  background-color: var(--tl-code-bg);
  color: var(--tl-code-text);
  font-family: var(--tl-font-mono);
  font-size: 0.875rem;
  line-height: 1.5;
  border: none;
  resize: vertical;
  outline: none;
}

.tl-editor-readonly {
  background-color: var(--tl-bg-alt);
}

.tl-url-inspector {
  padding: 1.25rem;
  border-top: 1px solid var(--tl-border);
  background-color: var(--tl-bg-alt);
}

.tl-inspector-heading {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--tl-text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.tl-inspector-details {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tl-insp-pill {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.625rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-secondary);
}

.tl-params-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.tl-params-table th,
.tl-params-table td {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--tl-border-subtle);
  text-align: left;
}

.tl-params-table th {
  background-color: var(--tl-surface);
  font-weight: 600;
  color: var(--tl-text-primary);
}

.tl-param-key {
  font-family: var(--tl-font-mono);
  font-weight: 600;
  color: var(--tl-brand-glow);
}

.tl-param-val {
  font-family: var(--tl-font-mono);
  color: var(--tl-text-secondary);
}
</style>
