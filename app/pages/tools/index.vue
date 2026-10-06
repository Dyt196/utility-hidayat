<script setup lang="ts">
const c = useContent()
const localePath = useLocalePath()
const abs = useAbsoluteUrl()
const p = c.value.toolsIndex
usePageSeo({
  title: p.metaTitle,
  description: p.metaDescription,
  jsonLd: [{
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': c.value.nav.homeCrumb, 'item': abs('/') },
      { '@type': 'ListItem', 'position': 2, 'name': c.value.nav.tools }
    ]
  }]
})
</script>

<template>
  <div class="space-y-10">
    <div>
      <BreadcrumbNav :items="[{ label: c.nav.homeCrumb, to: localePath('/') }, { label: c.nav.tools }]" />
      <h1 class="text-3xl font-bold sm:text-4xl">{{ p.h1 }}</h1>
      <p class="mt-3 max-w-2xl text-lg text-muted">{{ p.intro }}</p>
    </div>
    <CategoryCard v-for="cat in categoryOrder" :key="cat" :category="cat" />
  </div>
</template>
