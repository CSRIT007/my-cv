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
  ]
}))
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
