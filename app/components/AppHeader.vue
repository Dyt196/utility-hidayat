<script setup lang="ts">
const c = useContent()
const { locale, locales } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

const others = computed(() => locales.value.filter(l => l.code !== locale.value))
const dark = ref<boolean>()

onMounted(() => { dark.value = document.documentElement.classList.contains('dark') })
function toggleTheme() {
  dark.value = document.documentElement.classList.toggle('dark')
  try { localStorage.setItem('theme', dark.value ? 'dark' : 'light') } catch { /* storage blocked: theme just won't persist */ }
}
</script>

<template>
  <header class="border-b border-line">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider" :aria-label="c.nav.home">
        <img src="/favicon.svg" alt="" width="32" height="32" class="rounded-lg">
        <span>{{ c.site.name }}</span>
      </NuxtLink>
      <nav :aria-label="c.nav.main" class="flex items-center gap-1 text-sm sm:gap-3">
        <NuxtLink :to="localePath('/tools')" class="rounded px-2 py-2 hover:underline">{{ c.nav.tools }}</NuxtLink>
        <NuxtLink :to="localePath('/about')" class="rounded px-2 py-2 hover:underline">{{ c.nav.about }}</NuxtLink>
        <NuxtLink
          v-for="l in others" :key="l.code" :to="switchLocalePath(l.code)" :hreflang="l.language" :lang="l.language"
          class="rounded px-2 py-2 hover:underline" :aria-label="`${c.nav.language}: ${l.name}`"
        >
          {{ l.code.toUpperCase() }}
        </NuxtLink>
        <button
          type="button" class="rounded-lg border border-line p-2 hover:bg-surface" :aria-label="c.nav.theme"
          :aria-pressed="dark" @click="toggleTheme"
        >
          <!-- Icon swaps via the .dark class, so it is correct before hydration -->
          <svg class="size-5 dark:hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg class="hidden size-5 dark:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
      </nav>
    </div>
  </header>
</template>
