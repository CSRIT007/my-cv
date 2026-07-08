<script setup lang="ts">
const colorMode = useColorMode()

const nextTheme = computed<'light' | 'dark'>(() =>
  colorMode.value === 'dark' ? 'light' : 'dark'
)

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const startViewTransition = (event: MouseEvent) => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!document.startViewTransition || reduceMotion) {
    switchTheme()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(switchTheme)

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0 at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)'
      }
    )
  })
}
</script>

<template>
  <ClientOnly>
    <UTooltip :text="`Switch to ${nextTheme} mode`">
      <UButton
        :aria-label="`Switch to ${nextTheme} mode`"
        :icon="nextTheme === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
        color="neutral"
        variant="ghost"
        size="sm"
        class="rounded-full"
        @click="startViewTransition"
      />
    </UTooltip>

    <template #fallback>
      <div class="size-8" aria-hidden="true" />
    </template>
  </ClientOnly>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-old(root) {
  z-index: 1;
}
</style>
