<script setup lang="ts">
const c = useContent()
const localePath = useLocalePath()
useHead({ title: c.value.notFound.title, meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <NuxtLayout>
    <div class="max-w-xl">
      <h1 class="text-3xl font-bold sm:text-4xl">{{ c.notFound.title }}</h1>
      <p class="mt-3 text-lg text-muted">{{ c.notFound.text }}</p>
      <NuxtLink :to="localePath('/')" class="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-accent-fg">{{ c.notFound.cta }}</NuxtLink>
    </div>
  </NuxtLayout>
</template>
