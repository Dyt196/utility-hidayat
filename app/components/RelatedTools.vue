<script setup lang="ts">
defineProps<{ slugs: string[] }>()
const c = useContent()
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold">{{ c.common.related }}</h2>
    <ul class="mt-4 grid gap-3 sm:grid-cols-2">
      <li v-for="s in slugs" :key="s"><ToolCard :slug="s" /></li>
    </ul>
  </section>
</template>
