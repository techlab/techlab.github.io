<script setup lang="ts">
import { ref } from 'vue'

const rawInput = ref('TechLaboratory — Precision Developer Tools')
const base64Output = ref('')
const isUrlSafe = ref(false)
const mode = ref<'encode' | 'decode'>('encode')
const errorMessage = ref('')
const copied = ref(false)

function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  let b64 = btoa(binary)
  if (isUrlSafe.value) {
    b64 = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  }
  return b64
}

function base64ToUtf8(b64: string): string {
  let cleaned = b64.trim()
  if (isUrlSafe.value) {
    cleaned = cleaned.replace(/-/g, '+').replace(/_/g, '/')
    while (cleaned.length % 4 !== 0) {
      cleaned += '='
    }
  }
  const binary = atob(cleaned)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return new TextDecoder().decode(bytes)
}

function process() {
  errorMessage.value = ''
  if (!rawInput.value) {
    base64Output.value = ''
    return
  }
  try {
    if (mode.value === 'encode') {
      base64Output.value = utf8ToBase64(rawInput.value)
    } else {
      base64Output.value = base64ToUtf8(rawInput.value)
    }
  } catch (err: any) {
    errorMessage.value = err.message || 'Failed to process Base64 conversion'
  }
}

function setMode(m: 'encode' | 'decode') {
  mode.value = m
  // Swap values
  const currentOutput = base64Output.value
  if (currentOutput) {
    rawInput.value = currentOutput
  }
  process()
}

function copyOutput() {
  if (base64Output.value && typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(base64Output.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  }
}

// Initial calculation
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
          @click="setMode('encode')"
        >
          Text → Base64
        </button>
        <button
          type="button"
          class="tl-btn tl-btn-sm"
          :class="mode === 'decode' ? 'tl-btn-primary' : 'tl-btn-secondary'"
          @click="setMode('decode')"
        >
          Base64 → Text
        </button>
      </div>

      <div class="tl-tool-options">
        <label class="tl-tool-checkbox-label">
          <input v-model="isUrlSafe" type="checkbox" @change="process" />
          <span>URL-Safe Base64</span>
        </label>
        <button
          type="button"
          class="tl-btn tl-btn-secondary tl-btn-sm"
          :disabled="!base64Output"
          @click="copyOutput"
        >
          <span v-if="copied">Copied!</span>
          <span v-else>Copy Result</span>
        </button>
      </div>
    </div>

    <div v-if="errorMessage" class="tl-tool-error-alert" role="alert">
      <span>{{ errorMessage }}</span>
    </div>

    <div class="tl-tool-editors-grid">
      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">{{ mode === 'encode' ? 'Plain Text Input' : 'Base64 Input' }}</span>
        </div>
        <textarea
          v-model="rawInput"
          class="tl-editor-textarea"
          :placeholder="mode === 'encode' ? 'Enter text to encode...' : 'Enter base64 to decode...'"
          rows="12"
          spellcheck="false"
          @input="process"
        ></textarea>
      </div>

      <div class="tl-editor-col">
        <div class="tl-editor-header">
          <span class="tl-editor-label">{{ mode === 'encode' ? 'Base64 Output' : 'Decoded Text' }}</span>
        </div>
        <textarea
          v-model="base64Output"
          class="tl-editor-textarea tl-editor-readonly"
          rows="12"
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
}

.tl-tool-options {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.tl-tool-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
  cursor: pointer;
}

.tl-tool-error-alert {
  padding: 0.75rem 1.25rem;
  background-color: var(--tl-rose-soft);
  color: #e11d48;
  border-bottom: 1px solid rgba(244, 63, 94, 0.2);
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
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
</style>
