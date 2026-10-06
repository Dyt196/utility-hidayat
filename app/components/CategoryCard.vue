<script setup lang="ts">
const props = defineProps<{ category: CategoryId }>()
const c = useContent()
const inCategory = computed(() => tools.filter(t => t.category === props.category))
</script>

<template>
  <section>
    <h2 class="text-xl font-semibold">{{ c.categories[category].name }}</h2>
    <p class="mt-1 text-muted">{{ c.categories[category].description }}</p>
    <ul class="mt-4 grid gap-3 sm:grid-cols-2">
      <li v-for="t in inCategory" :key="t.slug"><ToolCard :slug="t.slug" /></li>
    </ul>
  </section>
</template>
