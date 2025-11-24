<template>
  <!-- Floating Back to Top Button -->
  <Transition name="fade-slide">
    <button
      v-if="showBackToTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Back to top"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </Transition>

  <!-- Simple Footer -->
  <footer class="backdrop-blur-sm text-gray-300 py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-sm">
        &copy; {{ currentYear }} {{ personalInfo.name }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { personalInfo as originalPersonalInfo } from '../data/personalInfo.js'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Get translated name - reactive to language changes
const personalInfo = computed(() => {
  const lang = currentLanguage.value
  return {
    ...originalPersonalInfo,
    name: t('personalInfo.name') || originalPersonalInfo.name
  }
})

const currentYear = new Date().getFullYear()
const showBackToTop = ref(false)

// Show/hide back to top button based on scroll position
const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

// Smooth scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Fade and slide transition for back to top button */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}
</style>
