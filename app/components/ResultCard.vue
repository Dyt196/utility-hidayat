<script setup lang="ts">
defineProps<{ empty?: string, error?: string }>()
const c = useContent()
</script>

<template>
  <!-- Always rendered so screen readers announce changes inside the live region -->
  <section aria-live="polite" class="mt-6 rounded-xl border border-line bg-bg p-4">
    <h2 class="text-xs font-semibold uppercase tracking-wide text-muted">{{ c.common.result }}</h2>
    <p v-if="error" class="mt-2 font-medium text-danger">{{ error }}</p>
    <p v-else-if="empty" class="mt-2 text-muted">{{ empty }}</p>
    <div v-else class="mt-2"><slot /></div>
  </section>
</template>
