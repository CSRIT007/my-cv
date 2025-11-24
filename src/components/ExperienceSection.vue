<template>
  <section 
    id="experience" 
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 backdrop-blur-sm"
  >
    <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
      <ScrollTypingAnimation 
        :text="experienceTitle"
        :type-speed="70"
        :start-delay="200"
      />
    </h2>
    
    <div class="max-w-4xl mx-auto">
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-700 transform md:-translate-x-0.5"></div>

            <div class="space-y-8">
          <div 
            v-for="(item, index) in experience" 
            :key="index"
            class="relative flex items-start"
            :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full transform -translate-x-2 md:-translate-x-1/2 z-10 border-4 border-white dark:border-gray-800"></div>

            <!-- Content card -->
            <div 
              class="ml-12 md:ml-0 md:w-5/12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
              :class="index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'"
            >
              <!-- Simplified View (Always Visible) -->
              <div class="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-1">
                {{ item.dateRange }}
              </div>
              <h3 class="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                {{ item.role }}
              </h3>
              <div class="text-gray-600 dark:text-gray-400 font-medium mb-4">
                {{ item.company }}
              </div>

              <!-- Expandable Details -->
              <div 
                v-if="expandedItems[index]"
                class="mt-4 space-y-2 animate-fade-in"
              >
                <ul class="space-y-2">
                  <li 
                    v-for="(achievement, idx) in item.achievements" 
                    :key="idx"
                    class="text-gray-700 dark:text-gray-300 flex items-start"
                  >
                    <span class="text-primary-600 dark:text-primary-400 mr-2 mt-1">•</span>
                    <span>{{ achievement }}</span>
                  </li>
                </ul>
              </div>

              <!-- View/Hide Button -->
              <button
                @click="toggleExpand(index)"
                class="mt-4 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <span>{{ expandedItems[index] ? hideDetailsLabel : viewDetailsLabel }}</span>
                <svg 
                  class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': expandedItems[index] }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { experience as originalExperience } from '../data/experience.js'
import { useLanguage } from '../composables/useLanguage.js'
import ScrollTypingAnimation from './ScrollTypingAnimation.vue'

const { t, currentLanguage } = useLanguage()

// Get translated experience - reactive to language changes
const experience = computed(() => {
  // Access currentLanguage to make this computed reactive
  const lang = currentLanguage.value
  const translatedExp = t('experience.items')
  if (!translatedExp || !Array.isArray(translatedExp)) {
    return originalExperience
  }
  
  return originalExperience.map((exp, index) => ({
    ...exp,
    role: translatedExp[index]?.role || exp.role,
    company: translatedExp[index]?.company || exp.company,
    achievements: translatedExp[index]?.achievements || exp.achievements
  }))
})

const experienceTitle = computed(() => {
  const lang = currentLanguage.value
  return t('experience.title')
})

const viewDetailsLabel = computed(() => {
  const lang = currentLanguage.value
  return t('experience.viewDetails')
})

const hideDetailsLabel = computed(() => {
  const lang = currentLanguage.value
  return t('experience.hideDetails')
})

// Track which items are expanded
const expandedItems = ref({})

const toggleExpand = (index) => {
  expandedItems.value[index] = !expandedItems.value[index]
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>

