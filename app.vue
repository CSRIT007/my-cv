<script setup lang="ts">
const colorMode = useColorMode()

const themeColor = computed(() =>
  colorMode.value === 'dark' ? '#0a0a0a' : '#ffffff'
)

useHead(() => ({
  meta: [
    {
      name: 'theme-color',
      content: themeColor.value
    }
  ],
  link: [
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon-precomposed.png' },
    { rel: 'icon', type: 'image/png', href: '/cs.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#2563EB' }
  ]
}))
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
