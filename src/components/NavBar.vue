<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-gray-200/30 dark:border-gray-800/30 transition-colors duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <a href="#hero" class="flex items-center gap-3 text-xl font-bold text-gray-600 dark:text-white-400 hover:opacity-80 transition-opacity group">
            <img 
              :src="profileImage" 
              :alt="personalInfo.name" 
              class="w-10 h-10 rounded-full dark:border-primary-400 object-cover object-left-top transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span class="hidden sm:inline">
              Portfolio
            </span>
          </a>
        </div>

                    <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-4">
          <a 
            v-for="link in translatedNavLinks" 
            :key="link.id"
            :href="`#${link.id}`"
            class="nav-link text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-500 relative"
            :class="{ 
              'text-primary-600 dark:text-primary-400': activeSection === link.id
            }"
          >
            <span class="relative z-10">{{ link.translatedLabel }}</span>
            <!-- Active indicator -->
            <span 
              v-if="activeSection === link.id"
              class="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-600 dark:bg-primary-400"
            ></span>
          </a>
        </div>

        <!-- Language Switcher, Dark Mode Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-3">
          <!-- Language Switcher -->
          <LanguageSwitcher />
          
          <!-- Dark Mode Toggle -->
          <button
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            <svg v-if="darkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 space-y-2"
      >
        <a 
          v-for="link in translatedNavLinks" 
          :key="link.id"
          :href="`#${link.id}`"
          @click="mobileMenuOpen = false"
          class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-all duration-500"
          :class="{ 
            'text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30': activeSection === link.id
          }"
        >
          <span class="relative">
            {{ link.translatedLabel }}
            <span v-if="activeSection === link.id" class="absolute -right-2 top-0 w-2 h-2 bg-primary-500 rounded-full animate-ping"></span>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import profileImage from '../assets/profile.jpg'
import { personalInfo as originalPersonalInfo } from '../data/personalInfo.js'
import { useLanguage } from '../composables/useLanguage.js'
import LanguageSwitcher from './LanguageSwitcher.vue'

const { t, currentLanguage } = useLanguage()

// Get translated name - reactive to language changes
const personalInfo = computed(() => {
  const lang = currentLanguage.value
  return {
    ...originalPersonalInfo,
    name: t('personalInfo.name') || originalPersonalInfo.name
  }
})

defineProps({
  darkMode: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle-dark-mode'])

const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { id: 'hero', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'experience', label: 'nav.experience' },
  { id: 'education', label: 'nav.education' },
  { id: 'contact', label: 'nav.contact' }
]

// Get translated nav links - reactive to language changes
const translatedNavLinks = computed(() => {
  const lang = currentLanguage.value
  return navLinks.map(link => ({
    ...link,
    translatedLabel: t(link.label)
  }))
})


// Update active section on scroll
const handleScroll = () => {
  const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean)
  const scrollPosition = window.scrollY + 100

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.offsetTop <= scrollPosition) {
      activeSection.value = navLinks[i].id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Nav link styles */
.nav-link {
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.5s ease-in-out;
}

/* Active link subtle glow */
.nav-link.text-primary-600 {
  text-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
}

.dark .nav-link.text-primary-400 {
  text-shadow: 0 0 5px rgba(56, 189, 248, 0.3);
}
</style>

