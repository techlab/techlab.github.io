<script setup lang="ts">
import { ref } from 'vue'

const inputJson = ref('{\n  "project": "TechLaboratory",\n  "version": 8,\n  "features": ["smart-wizard", "tools", "demos"],\n  "openSource": true\n}')
const outputJson = ref('')
const indentSize = ref(2)
const errorMessage = ref('')
const copied = ref(false)

function formatJson() {
  errorMessage.value = ''
  if (!inputJson.value.trim()) {
    outputJson.value = ''
    return
  }
  try {
    const parsed = JSON.parse(inputJson.value)
    outputJson.value = JSON.stringify(parsed, null, indentSize.value)
  } catch (err: any) {
    errorMessage.value = err.message || 'Invalid JSON syntax'
  }
}

function minifyJson() {
  errorMessage.value = ''
  if (!inputJson.value.trim()) return
  try {
    const parsed = JSON.parse(inputJson.value)
    outputJson.value = JSON.stringify(parsed)
  } catch (err: any) {
    errorMessage.value = err.message || 'Invalid JSON syntax'
  }
}

function copyOutput() {
  if (outputJson.value && typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(outputJson.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

function loadSample() {
  inputJson.value = JSON.stringify({
    name: "Smart Wizard",
    repository: "https://github.com/techlab/smart-wizard",
    stats: { stars: 3200, downloads: "50k/mo" },
    tags: ["typescript", "stepper", "zero-dep"]
  }, null, 2)
  formatJson()
}

function clearAll() {
  inputJson.value = ''
  outputJson.value = ''
  errorMessage.value = ''
}

// Initial format
formatJson()
</script>

<template>
  <div class="tl-tool-wrapper">
    <!-- Tool Actions Bar -->
    <div class="tl-tool-actions-bar">
      <div class="tl-tool-btn-group">
        <button type="button" class="tl-btn tl-btn-primary tl-btn-sm" @click="formatJson">
          Format / Beautify
        </button>
        <button type="button" class="tl-btn tl-btn-secondary tl-btn-sm" @click="minifyJson">
          Minify
        </button>
        <button type="button" class="tl-btn tl-btn-ghost tl-btn-sm" @click="loadSample">
          Sample
        </button>
        <button type="button" class="tl-btn tl-btn-ghost tl-btn-sm" @click="clearAll">
          Clear
        </button>
      </div>

      <div class="tl-tool-options">
        <label class="tl-tool-opt-label">
          <span>Indent:</span>
          <select v-model.number="indentSize" class="tl-tool-select" @change="formatJson">
            <option :value="2">2 spaces</option>
            <option :value="4">4 spaces</option>
          </select>
        </label>
        <button
          type="button"
          class="tl-btn tl-btn-secondary tl-btn-sm"
          :disabled="!outputJson"
          @click="copyOutput"
        >
          <span v-if="copied">Copied!</span>
          <span v-else>Copy Result</span>
        </button>
      </div>
    </div>

    <!-- Error Banner -->
    <div v-if="errorMessage" class="tl-tool-error-alert" role="alert">
      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      <span>{{ errorMessage }}</span>
    </div>

    <!-- Dual Editor Grid -->
    <div class="tl-tool-editors-grid">
      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">Input JSON</span>
        </div>
        <textarea
          v-model="inputJson"
          class="tl-editor-textarea"
          placeholder="Paste unformatted JSON here..."
          rows="14"
          spellcheck="false"
        ></textarea>
      </div>

      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">Formatted / Validated Output</span>
        </div>
        <textarea
          v-model="outputJson"
          class="tl-editor-textarea tl-editor-readonly"
          placeholder="Formatted JSON will appear here..."
          rows="14"
          readonly
          spellcheck="false"
        ></textarea>
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
  flex-wrap: wrap;
}

.tl-tool-options {
  display: flex;
  align-items: center;
  gap: 1rem;
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

.tl-tool-error-alert {
  padding: 0.75rem 1.25rem;
  background-color: var(--tl-rose-soft);
  color: #e11d48;
  border-bottom: 1px solid rgba(244, 63, 94, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
}

.dark .tl-tool-error-alert {
  color: #fb7185;
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
  letter-spacing: 0.05em;
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

.tl-editor-textarea:focus {
  background-color: var(--tl-surface);
}

.tl-editor-readonly {
  background-color: var(--tl-bg-alt);
}
</style>
