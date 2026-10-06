<script setup lang="ts">
const c = useContent()
const localePath = useLocalePath()
const abs = useAbsoluteUrl()
usePageSeo({
  title: c.value.home.metaTitle,
  description: c.value.site.description,
  jsonLd: [{ '@type': 'WebSite', 'name': c.value.site.name, 'url': abs('/'), 'description': c.value.site.description, 'inLanguage': c.value.lang }]
})
</script>

<template>
  <div class="space-y-14">
    <section>
      <h1 class="max-w-3xl text-3xl font-bold sm:text-5xl">{{ c.home.h1 }}</h1>
      <p class="mt-4 max-w-2xl text-lg text-muted">{{ c.home.intro }}</p>
      <NuxtLink :to="localePath('/tools')" class="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-accent-fg hover:brightness-95">
        {{ c.common.browseAll }}
      </NuxtLink>
    </section>

    <div class="space-y-10">
      <h2 class="sr-only">{{ c.home.toolsHeading }}</h2>
      <CategoryCard v-for="cat in categoryOrder" :key="cat" :category="cat" />
    </div>

    <section>
      <h2 class="text-xl font-semibold">{{ c.home.whyHeading }}</h2>
      <ul class="mt-4 grid gap-4 sm:grid-cols-3">
        <li v-for="w in c.home.why" :key="w.title">
          <h3 class="font-semibold">{{ w.title }}</h3>
          <p class="mt-1 text-muted">{{ w.text }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>
