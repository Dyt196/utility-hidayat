<script setup lang="ts">
const c = useContent()
const localePath = useLocalePath()
const links = computed(() => [['/about', c.value.nav.about], ['/contact', c.value.footer.contact], ['/privacy-policy', c.value.footer.privacy], ['/terms', c.value.footer.terms]] as const)
</script>

<template>
  <footer class="border-t border-line text-sm text-muted">
    <div class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p class="font-semibold text-fg">{{ c.site.name }}</p>
        <p class="mt-1 max-w-xs">{{ c.footer.blurb }}</p>
      </div>
      <nav :aria-label="c.footer.legal">
        <ul class="flex flex-wrap gap-x-5 gap-y-1">
          <li v-for="[path, label] in links" :key="path">
            <NuxtLink :to="localePath(path)" class="link inline-block py-1">{{ label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <p class="mx-auto max-w-5xl px-4 pb-8">© {{ new Date().getFullYear() }} {{ c.site.name }}. {{ c.footer.rights }}</p>
  </footer>
</template>
