<script setup lang="ts">
import { withBase } from 'vitepress'

const rows = [
  { feature: 'Core TypeScript Engine', community: 'Full', dev: 'Full', team: 'Full', enterprise: 'Full' },
  { feature: 'Zero Runtime Dependencies', community: 'Yes', dev: 'Yes', team: 'Yes', enterprise: 'Yes' },
  { feature: 'Official React & Vue Adapters', community: 'Yes', dev: 'Yes', team: 'Yes', enterprise: 'Yes' },
  { feature: 'Built-in Themes (Arrows, Pills, Glow)', community: 'Yes', dev: 'Yes', team: 'Yes', enterprise: 'Yes' },
  { feature: 'Commercial Closed-Source Use', community: 'MIT License', dev: 'Commercial License', team: 'Commercial License', enterprise: 'Custom License' },
  { feature: 'Attribution in Source Code', community: 'Required (MIT)', dev: 'Not Required', team: 'Not Required', enterprise: 'Not Required' },
  { feature: 'Touch Swipe & URL Hash Extensions', community: 'Open Source', dev: 'Included', team: 'Included', enterprise: 'Included' },
  { feature: 'Number of Developers', community: 'Unlimited', dev: '1 Developer', team: 'Up to 10 Developers', enterprise: 'Unlimited' },
  { feature: 'Support SLA', community: 'Community GitHub', dev: 'Email Priority (48h)', team: 'Priority (24h)', enterprise: 'Dedicated Slack / 4h' },
  { feature: 'Custom Theme Architecture Review', community: 'No', dev: 'No', team: '1 Session', enterprise: 'Full Architecture Audit' }
]
</script>

<template>
  <div class="tl-pricing-table-wrap">
    <div class="tl-table-responsive">
      <table class="tl-pricing-table">
        <thead>
          <tr>
            <th class="tl-th-feature">Capabilities & Benefits</th>
            <th class="tl-th-tier">Community</th>
            <th class="tl-th-tier tl-th-highlight">Developer</th>
            <th class="tl-th-tier">Team</th>
            <th class="tl-th-tier">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in rows" :key="idx">
            <td class="tl-td-feature">{{ row.feature }}</td>
            <td class="tl-td-val">{{ row.community }}</td>
            <td class="tl-td-val tl-td-highlight">{{ row.dev }}</td>
            <td class="tl-td-val">{{ row.team }}</td>
            <td class="tl-td-val">{{ row.enterprise }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.tl-pricing-table-wrap {
  margin: 3rem 0;
  border: 1px solid var(--tl-border);
  border-radius: var(--tl-radius-lg);
  background-color: var(--tl-surface);
  overflow: hidden;
  box-shadow: var(--tl-shadow-sm);
}

.tl-table-responsive {
  width: 100%;
  overflow-x: auto;
}

.tl-pricing-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
}

.tl-pricing-table th,
.tl-pricing-table td {
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--tl-border-subtle);
}

.tl-th-feature {
  width: 40%;
  font-family: var(--tl-font-mono);
  font-size: 0.8125rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--tl-text-muted);
}

.tl-th-tier {
  font-weight: 700;
  color: var(--tl-text-primary);
  font-size: 0.9375rem;
}

.tl-th-highlight,
.tl-td-highlight {
  background-color: var(--tl-surface-hover);
  color: var(--tl-brand-glow) !important;
  font-weight: 600;
}

.tl-td-feature {
  color: var(--tl-text-primary);
  font-weight: 500;
}

.tl-td-val {
  color: var(--tl-text-secondary);
}
</style>
