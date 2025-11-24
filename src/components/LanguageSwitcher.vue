<template>
  <div class="relative">
    <!-- Language Toggle Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 px-3 py-2 rounded-lg  dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200/70 dark:hover:bg-gray-600/70 transition-all duration-200 border border-gray-200/30 dark:border-gray-600/30"
      :class="{ 'ring-2 ring-primary-500': isOpen }"
      aria-label="Change language"
    >
      <span class="text-sm font-medium">{{ currentLang.name }}</span>
      <svg 
        class="w-4 h-4 transition-transform duration-200" 
        :class="{ 'rotate-180': isOpen }" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Language Dropdown -->
    <Transition name="dropdown">
      <div 
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200/30 dark:border-gray-700/30 backdrop-blur-sm z-50"
      >
        <button
          v-for="(lang, code) in LANGUAGES"
          :key="code"
          @click="selectLanguage(code)"
          class="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          :class="{ 
            'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400': currentLanguage === code,
            'text-gray-700 dark:text-gray-300': currentLanguage !== code
          }"
        >
          <span class="font-medium">{{ lang.name }}</span>
          <svg 
            v-if="currentLanguage === code"
            class="w-4 h-4 ml-auto text-primary-600 dark:text-primary-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage.js'

const { currentLanguage, currentLang, setLanguage, LANGUAGES } = useLanguage()

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (langCode) => {
  setLanguage(langCode)
  isOpen.value = false
}

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}
</style>
