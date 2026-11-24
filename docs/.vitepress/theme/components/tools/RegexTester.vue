<script setup lang="ts">
import { ref, computed } from 'vue'

const pattern = ref('([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})')
const flagGlobal = ref(true)
const flagCaseInsensitive = ref(true)
const flagMultiline = ref(false)
const testString = ref('Contact our engineering team at support@techlaboratory.net or dipu@techlaboratory.net for inquiries.')

interface MatchResult {
  match: string
  index: number
  groups: string[]
}

const matchResults = computed<MatchResult[]>(() => {
  if (!pattern.value) return []
  try {
    let flags = ''
    if (flagGlobal.value) flags += 'g'
    if (flagCaseInsensitive.value) flags += 'i'
    if (flagMultiline.value) flags += 'm'

    const regex = new RegExp(pattern.value, flags)
    const results: MatchResult[] = []

    if (flagGlobal.value) {
      let match: RegExpExecArray | null
      let count = 0
      while ((match = regex.exec(testString.value)) !== null && count < 100) {
        results.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1)
        })
        count++
        if (!regex.global) break
      }
    } else {
      const match = regex.exec(testString.value)
      if (match) {
        results.push({
          match: match[0],
          index: match.index,
          groups: match.slice(1)
        })
      }
    }

    return results
  } catch {
    return []
  }
})

const error = computed(() => {
  if (!pattern.value) return ''
  try {
    new RegExp(pattern.value)
    return ''
  } catch (err: any) {
    return err.message
  }
})
</script>

<template>
  <div class="tl-tool-wrapper">
    <!-- Pattern Input & Flags Bar -->
    <div class="tl-regex-input-bar">
      <div class="tl-pattern-group">
        <span class="tl-regex-slash">/</span>
        <input
          v-model="pattern"
          type="text"
          placeholder="Regular Expression pattern..."
          class="tl-pattern-input"
          spellcheck="false"
        />
        <span class="tl-regex-slash">/</span>
      </div>

      <div class="tl-regex-flags">
        <label class="tl-flag-label">
          <input v-model="flagGlobal" type="checkbox" />
          <span>g (global)</span>
        </label>
        <label class="tl-flag-label">
          <input v-model="flagCaseInsensitive" type="checkbox" />
          <span>i (ignore case)</span>
        </label>
        <label class="tl-flag-label">
          <input v-model="flagMultiline" type="checkbox" />
          <span>m (multiline)</span>
        </label>
      </div>
    </div>

    <div v-if="error" class="tl-tool-error-alert" role="alert">
      <span>{{ error }}</span>
    </div>

    <!-- Match Summary Banner -->
    <div class="tl-match-summary">
      <span class="tl-summary-stat">
        <strong>{{ matchResults.length }}</strong> match{{ matchResults.length === 1 ? '' : 'es' }} found
      </span>
    </div>

    <!-- Test String Editor -->
    <div class="tl-regex-editor-area">
      <div class="tl-editor-header">
        <span class="tl-editor-label">Test String</span>
      </div>
      <textarea
        v-model="testString"
        class="tl-editor-textarea"
        rows="6"
        placeholder="Insert test text here..."
        spellcheck="false"
      ></textarea>
    </div>

    <!-- Matches Table -->
    <div v-if="matchResults.length > 0" class="tl-matches-table-wrap">
      <div class="tl-editor-header">
        <span class="tl-editor-label">Captured Matches & Groups</span>
      </div>
      <table class="tl-matches-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Index</th>
            <th>Matched Text</th>
            <th>Capturing Groups</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(m, idx) in matchResults" :key="idx">
            <td class="tl-td-mono">{{ idx + 1 }}</td>
            <td class="tl-td-mono">{{ m.index }}</td>
            <td class="tl-td-match">{{ m.match }}</td>
            <td class="tl-td-groups">
              <span v-for="(g, gIdx) in m.groups" :key="gIdx" class="tl-group-pill">
                ${{ gIdx + 1 }}: "{{ g }}"
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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

.tl-regex-input-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background-color: var(--tl-bg-alt);
  border-bottom: 1px solid var(--tl-border);
  gap: 1rem;
}

.tl-pattern-group {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 280px;
}

.tl-regex-slash {
  font-family: var(--tl-font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--tl-brand-glow);
  padding: 0 0.35rem;
}

.tl-pattern-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-family: var(--tl-font-mono);
  font-size: 0.9375rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-primary);
  outline: none;
}

.tl-pattern-input:focus {
  border-color: var(--tl-border-focus);
}

.tl-regex-flags {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.tl-flag-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
  color: var(--tl-text-secondary);
  cursor: pointer;
}

.tl-tool-error-alert {
  padding: 0.75rem 1.25rem;
  background-color: var(--tl-rose-soft);
  color: #e11d48;
  font-size: 0.8125rem;
  font-family: var(--tl-font-mono);
  border-bottom: 1px solid rgba(244, 63, 94, 0.2);
}

.tl-match-summary {
  padding: 0.5rem 1.25rem;
  background-color: var(--tl-surface);
  border-bottom: 1px solid var(--tl-border-subtle);
  font-size: 0.8125rem;
  color: var(--tl-text-secondary);
}

.tl-summary-stat strong {
  color: var(--tl-brand-glow);
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

.tl-matches-table-wrap {
  border-top: 1px solid var(--tl-border);
}

.tl-matches-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8125rem;
}

.tl-matches-table th,
.tl-matches-table td {
  padding: 0.65rem 1rem;
  border-bottom: 1px solid var(--tl-border-subtle);
  text-align: left;
}

.tl-matches-table th {
  background-color: var(--tl-bg-alt);
  color: var(--tl-text-muted);
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  text-transform: uppercase;
}

.tl-td-mono {
  font-family: var(--tl-font-mono);
  color: var(--tl-text-muted);
}

.tl-td-match {
  font-family: var(--tl-font-mono);
  font-weight: 700;
  color: var(--tl-brand-glow);
}

.tl-td-groups {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tl-group-pill {
  font-family: var(--tl-font-mono);
  font-size: 0.75rem;
  padding: 0.15rem 0.4rem;
  border-radius: var(--tl-radius-xs);
  background-color: var(--tl-surface-hover);
  border: 1px solid var(--tl-border);
  color: var(--tl-text-secondary);
}
</style>
