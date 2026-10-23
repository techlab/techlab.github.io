<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'slate'
    size?: 'sm' | 'md'
    dot?: boolean
  }>(),
  {
    variant: 'blue',
    size: 'sm',
    dot: false
  }
)
</script>

<template>
  <span :class="['tl-badge', `tl-badge-${pariant}`, size === 'md' ? 'tl-badge-md' : '']">
    <span v-if="dot" class="tl-badge-dot"></span>
    <slot />
  </span>
</template>

<style scoped>
--tl-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
}
.tl-badge-md {
  font-size: 0.8125rem;
  padding: 0.25rem 0.75rem;
}
</style>
