<template>
  <section id="hero"
    class="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
    <!-- Enhanced Hero Effects (on top of global Matrix background) -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Additional Matrix layer for hero intensity -->
      <div class="absolute inset-0 bg-black/5 dark:bg-black/20">
        <MatrixRain :density="0.5" :speed="1.0" :opacity="0.3" />
      </div>

      <!-- Hero-specific overlay gradients -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 dark:to-black/30">
      </div>

      <!-- Floating light effects for hero -->
      <div class="absolute inset-0 opacity-50 dark:opacity-40">
        <div
          class="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-300/25 dark:bg-primary-400/15 rounded-full blur-3xl animate-float-slow">
        </div>
        <div
          class="absolute top-3/4 right-1/4 w-48 h-48 bg-accent-300/30 dark:bg-accent-400/20 rounded-full blur-3xl animate-float-medium">
        </div>
        <div
          class="absolute top-1/2 right-1/3 w-32 h-32 bg-blue-200/35 dark:bg-blue-400/15 rounded-full blur-2xl animate-float-fast">
        </div>
      </div>
    </div>
    <!-- Content overlay -->
    <div class="section-container text-center relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Profile Image -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <img :src="profileImage" alt="Profile"
              class="profile-image rounded-full border-4 border-white dark:border-gray-800 shadow-2xl object-cover  object-left-top" />
          </div>
        </div>

        <!-- Name -->
        <h1 class="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ translatedName }}
        </h1>

        <!-- Role with Typing Animation -->
        <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-primary-600 dark:text-primary-400">
          <TypingAnimation :texts="roleTexts" :type-speed="80" :back-speed="40" :back-delay="2500" :start-delay="1000"
            :loop="true" />
        </h2>

        <!-- Tagline with Typing Animation -->
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          <TypingAnimation :texts="taglineTexts" :type-speed="60" :back-speed="30" :back-delay="3000"
            :start-delay="2000" :loop="true" />
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-row gap-2 sm:gap-4 justify-center items-center flex-wrap">
          <a :href="cvPdf" target="_blank" rel="noopener noreferrer"
            class="btn-secondary inline-block relative overflow-hidden group hover:animate-shimmer"
            @mouseenter="handleButtonHover" @mouseleave="handleButtonLeave">
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {{ viewCVLabel }}
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-primary-200/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
            </div>
          </a>
          <a :href="cvPdf" :download="`${translatedName} CV.pdf`"
            class="btn-secondary inline-block relative overflow-hidden group hover:animate-bounce-gentle"
            @mouseenter="handleButtonHover" @mouseleave="handleButtonLeave">
            <span class="relative z-10 flex items-center gap-2">
              <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ downloadCVLabel }}
            </span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-green-200/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out">
            </div>
          </a>
        </div>

        <!-- Social Links -->
        <div class="mt-12 flex flex-wrap justify-center gap-6">
          <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            aria-label="GitHub">
            <svg class="w-6 h-6 transition-transform duration-300 hover:animate-spin-slow" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            aria-label="LinkedIn">
            <svg class="w-6 h-6 transition-transform duration-300 hover:rotate-180" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a :href="personalInfo.facebook" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
            aria-label="Facebook">
            <svg class="w-6 h-6 transition-transform duration-300 hover:-rotate-12" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a :href="personalInfo.tiktok" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
            aria-label="TikTok">
            <svg class="w-6 h-6 transition-transform duration-300 hover:rotate-45" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </a>
          <a :href="personalInfo.youtube" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            aria-label="YouTube">
            <svg class="w-6 h-6 transition-transform duration-300 hover:-rotate-6" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a :href="personalInfo.line" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-rotate-12"
            aria-label="LINE">
            <svg class="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.058 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
          </a>
          <a :href="personalInfo.telegram" target="_blank" rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:rotate-45"
            aria-label="Telegram">
            <svg class="w-6 h-6 transition-transform duration-300 hover:-rotate-45" fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a :href="`mailto:${personalInfo.email}`"
            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
            aria-label="Email">
            <svg class="w-6 h-6 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import profileImage from '../assets/profile.jpg'
import cvPdf from '../assets/Moeng Kimheang .pdf'
import { personalInfo } from '../data/personalInfo.js'
import TypingAnimation from './TypingAnimation.vue'
import MatrixRain from './MatrixRain.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Get translated name - reactive to language changes
const translatedName = computed(() => {
  const lang = currentLanguage.value
  return t('personalInfo.name') || personalInfo.name
})

// Typing animation texts for role (using translations) - reactive to language changes
const roleTexts = computed(() => {
  const lang = currentLanguage.value
  return t('hero.roles')
})

// Typing animation texts for tagline (using translations) - reactive to language changes
const taglineTexts = computed(() => {
  const lang = currentLanguage.value
  return t('hero.taglines')
})

// Button labels - reactive to language changes
const viewCVLabel = computed(() => {
  const lang = currentLanguage.value
  return t('hero.viewCV')
})

const downloadCVLabel = computed(() => {
  const lang = currentLanguage.value
  return t('hero.downloadCV')
})

// Button interaction handlers
const handleButtonHover = (event) => {
  event.target.classList.add('animate-button-press')
  setTimeout(() => {
    event.target.classList.remove('animate-button-press')
  }, 150)
}

const handleButtonLeave = (event) => {
  // Optional: Add any leave animations here
}

// No emits needed since we're opening CV in new tab
</script>
