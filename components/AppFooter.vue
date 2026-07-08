<script setup lang="ts">
const { personal, socialLinks, footer } = usePortfolio()
const showBackToTop = ref(false)
const currentYear = new Date().getFullYear()

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 320
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <footer class="border-t border-default bg-elevated/40">
    <div class="section-container py-8">
      <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="text-center sm:text-left">
          <p class="font-bold text-highlighted">{{ personal.name }}</p>
          <p class="mt-1 text-sm text-toned">
            &copy; {{ currentYear }} {{ personal.name }}. {{ footer.copyrightText }}
          </p>
        </div>

        <SocialLinkButtons :links="socialLinks" />
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <UButton
        v-if="showBackToTop"
        class="fixed bottom-6 right-6 z-40"
        icon="i-lucide-arrow-up"
        :aria-label="footer.backToTopLabel"
        color="primary"
        @click="scrollToTop"
      />
    </Transition>
  </footer>
</template>
