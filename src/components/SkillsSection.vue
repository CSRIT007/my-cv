<template>
  <section 
    id="skills" 
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 backdrop-blur-sm"
  >
        <h2 class="section-title">
          <ScrollTypingAnimation 
            :text="skillsTitle"
            :type-speed="100"
            :start-delay="200"
          />
        </h2>
    
    <div class="max-w-5xl mx-auto">
                  <div
                    v-for="(skillList, category, index) in skills"
                    :key="`${category}-${currentLanguage}`"
                    class="mb-8"
                  >
                    <h3 class="text-2xl font-semibold mb-6 text-center capitalize text-gray-800 dark:text-gray-200">
                      <ScrollTypingAnimation 
                        :text="categoryNames[category] || category"
                        :type-speed="60"
                        :start-delay="500 + (index * 300)"
                        :show-cursor="false"
                      />
                    </h3>
        <div class="flex flex-wrap justify-center gap-3">
          <span 
            v-for="skill in skillList" 
            :key="skill"
            class="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 border border-gray-200 dark:border-gray-600"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { skills as originalSkills } from '../data/skills.js'
import ScrollTypingAnimation from './ScrollTypingAnimation.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Get translated skills - reactive to language changes
const skills = computed(() => {
  // Access currentLanguage to make this computed reactive
  const lang = currentLanguage.value
  const translatedSkills = t('skills.items')
  if (!translatedSkills) {
    return originalSkills
  }
  
  return {
    frontend: translatedSkills.frontend || originalSkills.frontend,
    backend: translatedSkills.backend || originalSkills.backend,
    tools: translatedSkills.tools || originalSkills.tools
  }
})

const skillsTitle = computed(() => {
  const lang = currentLanguage.value
  return t('skills.title')
})

// Get translated category names - reactive to language changes
const categoryNames = computed(() => {
  const lang = currentLanguage.value
  return {
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    tools: t('skills.tools')
  }
})
</script>

