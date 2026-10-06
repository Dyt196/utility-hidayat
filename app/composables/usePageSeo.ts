interface PageSeo {
  title: string
  description: string
  /** Extra JSON-LD objects for this page. Only add markup that accurately describes it. */
  jsonLd?: Record<string, unknown>[]
}

/**
 * Per-page title, description and Open Graph tags. Canonical + hreflang + og:url + og:locale come from
 * useLocaleHead in app.vue; og:image/site_name/twitter:card defaults live in nuxt.config.
 */
export function usePageSeo({ title, description, jsonLd = [] }: PageSeo) {
  useSeoMeta({ title, description, ogTitle: title, ogDescription: description, twitterTitle: title, twitterDescription: description })
  if (jsonLd.length) {
    useHead({ script: jsonLd.map(j => ({ type: 'application/ld+json', innerHTML: JSON.stringify({ '@context': 'https://schema.org', ...j }) })) })
  }
}

/** Absolute URL for a localized route path. */
export function useAbsoluteUrl() {
  const base = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
  const localePath = useLocalePath()
  return (path: string) => base + localePath(path)
}
