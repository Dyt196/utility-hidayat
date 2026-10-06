<script setup lang="ts">
/**
 * Shared page for every tool: SEO + JSON-LD, H1, intro, the tool (default slot), explanation,
 * examples, FAQ and related tools. Copy comes from app/content/<locale>.ts under tools[slug].
 * Ads/analytics later: put a component in the `after-tool` slot or between the <section>s.
 */
const props = defineProps<{ slug: string }>()
const c = useContent()
const localePath = useLocalePath()
const abs = useAbsoluteUrl()

const meta = tools.find(t => t.slug === props.slug)!
const t = computed(() => c.value.tools[props.slug as keyof typeof c.value.tools])
const crumbs = computed(() => [
  { label: c.value.nav.homeCrumb, to: localePath('/') },
  { label: c.value.nav.tools, to: localePath('/tools') },
  { label: t.value.name }
])

usePageSeo({
  title: t.value.metaTitle,
  description: t.value.metaDescription,
  jsonLd: [
    {
      '@type': 'WebApplication',
      'name': t.value.name,
      'description': t.value.metaDescription,
      'url': abs(`/tools/${props.slug}`),
      'applicationCategory': 'UtilitiesApplication',
      'operatingSystem': 'Any',
      'inLanguage': c.value.lang,
      'isAccessibleForFree': true
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': c.value.nav.homeCrumb, 'item': abs('/') },
        { '@type': 'ListItem', 'position': 2, 'name': c.value.nav.tools, 'item': abs('/tools') },
        { '@type': 'ListItem', 'position': 3, 'name': t.value.name }
      ]
    }
  ]
})
</script>

<template>
  <article class="space-y-12">
    <div>
      <BreadcrumbNav :items="crumbs" />
      <h1 class="text-3xl font-bold sm:text-4xl">{{ t.h1 }}</h1>
      <p class="mt-3 max-w-2xl text-lg text-muted">{{ t.intro }}</p>
    </div>

    <section :aria-label="t.name" class="rounded-2xl border border-line bg-surface p-5 sm:p-6">
      <slot />
    </section>

    <slot name="after-tool" />

    <section class="prose-block">
      <h2 class="text-xl font-semibold">{{ c.common.howItWorks }}</h2>
      <p v-for="(p, i) in t.how" :key="i">{{ p }}</p>
    </section>

    <section>
      <h2 class="text-xl font-semibold">{{ c.common.examples }}</h2>
      <ul class="mt-3 space-y-3">
        <li v-for="e in t.examples" :key="e.title" class="rounded-lg border border-line p-4">
          <h3 class="font-semibold">{{ e.title }}</h3>
          <p class="mt-1 text-muted">{{ e.text }}</p>
        </li>
      </ul>
    </section>

    <section>
      <h2 class="text-xl font-semibold">{{ c.common.faq }}</h2>
      <div class="mt-3 space-y-5">
        <div v-for="f in t.faq" :key="f.q">
          <h3 class="font-semibold">{{ f.q }}</h3>
          <p class="mt-1 max-w-2xl text-muted">{{ f.a }}</p>
        </div>
      </div>
    </section>

    <RelatedTools :slugs="meta.related" />
  </article>
</template>
