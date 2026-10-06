import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://utility.hidayat.my'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/sitemap', '@nuxtjs/robots'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },

  site: { url: siteUrl, name: 'Hidayat Utility' },
  runtimeConfig: {
    public: {
      siteUrl,
      contactEmail: '' // NUXT_PUBLIC_CONTACT_EMAIL
    }
  },

  // UI copy lives in app/content/<locale>.ts, not in i18n messages; the module only does routing + hreflang.
  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false, // keeps pages static and cookie-free
    locales: [
      { code: 'en', language: 'en-US', name: 'English' },
      { code: 'ms', language: 'ms-MY', name: 'Bahasa Melayu' }
    ]
  },

  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }
      ],
      meta: [
        { name: 'theme-color', content: '#14213D' },
        { property: 'og:site_name', content: 'Hidayat Utility' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${siteUrl}/og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${siteUrl}/og-image.png` }
      ],
      // Applies the saved/system theme before first paint to avoid a flash.
      script: [{
        innerHTML: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`
      }]
    }
  }
})
