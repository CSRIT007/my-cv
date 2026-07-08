export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/eslint'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@400;600;700;800&family=Poppins:wght@400;600;700;800&display=swap'
        }
      ]
    }
  }
})
