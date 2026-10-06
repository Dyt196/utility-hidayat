<script setup lang="ts">
const c = useContent()
const p = computed(() => c.value.pages.contact)
const email = useRuntimeConfig().public.contactEmail
usePageSeo({ title: p.value.metaTitle, description: p.value.metaDescription })
</script>

<template>
  <article class="max-w-2xl">
    <h1 class="text-3xl font-bold sm:text-4xl">{{ p.h1 }}</h1>
    <p class="mt-4 text-lg">{{ p.intro }}</p>
    <p v-if="email" class="mt-4">{{ p.emailLabel }} <a :href="`mailto:${email}`" class="link">{{ email }}</a></p>
    <p v-else class="mt-4 text-muted">{{ p.noEmail }}</p>
    <p class="mt-4 text-sm text-muted">{{ p.note }}</p>
  </article>
</template>
