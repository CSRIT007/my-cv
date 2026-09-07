const githubRepo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase = process.env.GITHUB_PAGES === 'true' && githubRepo
  ? `/${githubRepo}/`
  : undefined

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
  image: {
    // Serve files from /public directly. IPX (/_ipx) needs a Node server and
    // breaks photos on GitHub Pages, Cloudflare Pages, and most static hosts.
    provider: 'none'
  },
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || githubPagesBase || '/',
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/profile-icon.png?v=4' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png?v=4' },
        { rel: 'shortcut icon', type: 'image/png', href: '/profile-icon.png?v=4' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png?v=4' },
        { rel: 'apple-touch-icon-precomposed', sizes: '180x180', href: '/apple-touch-icon-precomposed.png?v=4' },
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
