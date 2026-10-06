<script setup lang="ts">
/** Plain text pages (about, privacy, terms) rendered from app/content/<locale>.ts pages[page]. */
const props = defineProps<{ page: 'about' | 'privacy' | 'terms' }>()
const c = useContent()
const p = computed(() => c.value.pages[props.page])
usePageSeo({ title: p.value.metaTitle, description: p.value.metaDescription })
</script>

<template>
  <article class="max-w-2xl">
    <h1 class="text-3xl font-bold sm:text-4xl">{{ p.h1 }}</h1>
    <p v-if="'updated' in p" class="mt-2 text-sm text-muted">{{ p.updated }}</p>
    <section v-for="s in p.sections" :key="s.h" class="prose-block mt-8">
      <h2 class="text-xl font-semibold">{{ s.h }}</h2>
      <p v-for="(para, i) in s.p" :key="i">{{ para }}</p>
    </section>
  </article>
</template>
