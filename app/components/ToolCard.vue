<script setup lang="ts">
const props = defineProps<{ slug: string }>()
const c = useContent()
const localePath = useLocalePath()
const t = computed(() => c.value.tools[props.slug as keyof typeof c.value.tools])
</script>

<template>
  <NuxtLink :to="localePath(`/tools/${slug}`)" class="block h-full rounded-xl border border-line bg-surface p-4 transition-colors hover:border-fg">
    <h3 class="font-semibold">{{ t.name }}</h3>
    <p class="mt-1 text-sm text-muted">{{ t.short }}</p>
  </NuxtLink>
</template>
