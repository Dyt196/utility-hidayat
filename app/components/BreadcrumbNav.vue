<script setup lang="ts">
defineProps<{ items: { label: string, to?: string }[] }>()
const c = useContent()
</script>

<template>
  <nav :aria-label="c.nav.breadcrumb" class="mb-4 text-sm text-muted">
    <ol class="flex flex-wrap items-center gap-x-2">
      <li v-for="(item, i) in items" :key="i" class="flex items-center gap-2">
        <NuxtLink v-if="item.to" :to="item.to" class="link">{{ item.label }}</NuxtLink>
        <span v-else aria-current="page">{{ item.label }}</span>
        <span v-if="i < items.length - 1" aria-hidden="true">/</span>
      </li>
    </ol>
  </nav>
</template>
