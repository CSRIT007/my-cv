<template>
  <section 
    id="about" 
    class="max-w-7xl mx-auto px-8 sm:px-0 lg:px-0 py-0 md:py-12 backdrop-blur-sm"
  >
    <h2 class="section-title">
      <ScrollTypingAnimation 
        :text="aboutTitle"
        :type-speed="80"
        :start-delay="200"
      />
    </h2>
    
    <div class="max-w-3xl mx-auto">
      <p class="text-sm sm:text-base md:text-lg text-center text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
        <ScrollTypingAnimation 
          :text="aboutText"
          :type-speed="30"
          :start-delay="800"
          :show-cursor="false"
        />
      </p>

      <div class="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mt-8">
        <div class="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <button
            @click="openGoogleMaps"
            class="text-xs sm:text-sm md:text-base font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 cursor-pointer hover:underline hover:decoration-solid"
            :title="`View ${personalInfo.location} on Google Maps`"
          >
            {{ personalInfo.location }}
          </button>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ locationLabel }}</div>
        </div>

        <div class="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-sm sm:text-base md:text-lg font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
            {{ personalInfo.yearsOfExperience }}
          </div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ experienceLabel }}</div>
        </div>

        <div class="text-center p-3 sm:p-4 md:p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <div class="text-xs sm:text-sm md:text-base font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
            {{ personalInfo.status }}
          </div>
          <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ statusLabel }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { personalInfo as originalPersonalInfo, aboutText as originalAboutText } from '../data/personalInfo.js'
import ScrollTypingAnimation from './ScrollTypingAnimation.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Use translated data - reactive to language changes
const personalInfo = computed(() => {
  // Access currentLanguage to make this computed reactive
  const lang = currentLanguage.value
  return {
    ...originalPersonalInfo,
    name: t('personalInfo.name') || originalPersonalInfo.name,
    status: t('about.statusValue') || originalPersonalInfo.status
  }
})

const aboutText = computed(() => {
  // Access currentLanguage to make this computed reactive
  const lang = currentLanguage.value
  return t('about.text') || originalAboutText
})

const aboutTitle = computed(() => {
  const lang = currentLanguage.value
  return t('about.title')
})

const locationLabel = computed(() => {
  const lang = currentLanguage.value
  return t('about.location')
})

const experienceLabel = computed(() => {
  const lang = currentLanguage.value
  return t('about.experience')
})

const statusLabel = computed(() => {
  const lang = currentLanguage.value
  return t('about.status')
})

// Function to open Google Maps with the location
const openGoogleMaps = () => {
  const location = encodeURIComponent(originalPersonalInfo.location)
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location}`
  window.open(googleMapsUrl, '_blank', 'noopener,noreferrer')
}
</script>

