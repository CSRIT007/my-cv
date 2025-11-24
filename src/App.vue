<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Global Matrix Background -->
    <div class="fixed inset-0 z-0">
      <div class="absolute inset-0 bg-white/5 dark:bg-black/30">
        <MatrixRain 
          :density="0.6"
          :speed="1.2"
          :opacity="0.25"
        />
        
        <!-- Global theme-aware overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/20 dark:from-black/20 dark:via-black/10 dark:to-black/20"></div>
        
        <!-- Subtle color enhancement -->
        <div class="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-accent-50/30 dark:from-primary-900/10 dark:to-accent-900/10"></div>
      </div>
    </div>

    <!-- Main content with proper layering -->
    <div class="relative z-10">
      <NavBar 
        :dark-mode="darkMode" 
        @toggle-dark-mode="toggleDarkMode"
      />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
import MatrixRain from './components/MatrixRain.vue'
import { useLanguage } from './composables/useLanguage.js'

// Dark mode state management
const darkMode = ref(false)
const { initLanguage, currentLanguage } = useLanguage()

// Load dark mode preference from localStorage or system preference
onMounted(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved !== null) {
    darkMode.value = saved === 'true'
  } else {
    darkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  
  // Initialize language
  initLanguage()
})

// Automatically apply dark mode class when darkMode changes
watchEffect(() => {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})

// Automatically apply Battambang font when Khmer language is selected
watchEffect(() => {
  if (currentLanguage.value === 'km') {
    document.documentElement.classList.add('battambang-regular')
  } else {
    document.documentElement.classList.remove('battambang-regular')
  }
})

// Toggle dark mode and save preference
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value.toString())
}
</script>

