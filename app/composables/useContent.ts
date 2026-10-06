import en from '~/content/en'
import ms from '~/content/ms'
import type { Content } from '~/content/en'

const all: Record<string, Content> = { en, ms }

/** Copy for the active locale. To add a language: new app/content/<code>.ts, register it here and in nuxt.config i18n.locales. */
export function useContent() {
  const { locale } = useI18n()
  return computed(() => all[locale.value] ?? en)
}
