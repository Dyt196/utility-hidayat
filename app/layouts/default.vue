<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg">
      {{ useContent().value.nav.skip }}
    </a>
    <AppHeader />
    <main id="main" class="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:py-12">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
