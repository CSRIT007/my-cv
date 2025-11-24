<template>
  <div class="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm" @click.self="closeCV">
    <div class="min-h-screen px-4 py-8">
      <div class="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden">
        <!-- Close Button -->
        <div class="flex justify-end p-4 bg-gray-100 dark:bg-gray-900">
          <button
            @click="closeCV"
            class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close CV"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- CV Content -->
        <div class="flex flex-col">
          <!-- Header Section (Full Width at Top) -->
          <div class="bg-[#2C3E50] text-white p-6 md:p-8 flex items-center gap-6 md:gap-8">
            <div class="flex-shrink-0">
              <img 
                :src="profileImage" 
                :alt="personalInfo.name" 
                class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 border-white object-cover object-left-top shadow-xl"
              />
            </div>
            <div class="flex-1">
              <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white">{{ personalInfo.name.toUpperCase() }}</h1>
              <p class="text-lg md:text-xl text-gray-200">{{ personalInfo.role }}</p>
            </div>
          </div>

          <!-- Two Column Layout -->
          <div class="flex flex-col md:flex-row">
            <!-- Left Column -->
            <div class="w-full md:w-2/5 bg-gray-100 dark:bg-gray-700 p-6 space-y-6">
              <!-- Contact -->
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase">Contact</h3>
                <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{{ personalInfo.phone }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{{ personalInfo.email }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{{ personalInfo.location }}</span>
                  </div>
                  <div v-if="personalInfo.phone2" class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{{ personalInfo.phone2 }}</span>
                  </div>
                </div>
              </div>

              <!-- Skills -->
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase">Skills</h3>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li v-for="(category, catName) in skills" :key="catName">
                    <div v-for="skill in category" :key="skill" class="flex items-center gap-2">
                      <span class="text-blue-600 dark:text-blue-400">•</span>
                      <span>{{ skill }}</span>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- Languages -->
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase">Languages</h3>
                <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <li v-for="lang in languages" :key="lang.name" class="flex items-center gap-2">
                    <span class="text-blue-600 dark:text-blue-400">•</span>
                    <span>{{ lang.name }} ({{ lang.level }})</span>
                  </li>
                </ul>
              </div>

              <!-- Reference -->
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3 uppercase">Reference</h3>
                <div class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p class="font-semibold">Un Rithy</p>
                  <p>Accounting Teacher</p>
                  <p>Phone: +855 12456878</p>
                </div>
              </div>
            </div>

            <!-- Right Column -->
            <div class="w-full md:w-3/5 bg-white dark:bg-gray-800 p-6 space-y-6">
              <!-- Profile -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase">Profile</h3>
                </div>
                <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{{ aboutText }}</p>
              </div>

              <!-- Work Experience -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase">Work Experience</h3>
                </div>
                <div class="space-y-4">
                  <div v-for="(item, index) in experience" :key="index" class="relative pl-6 border-l-2 border-blue-600 dark:border-blue-400">
                    <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <div class="mb-2">
                      <h4 class="font-bold text-gray-900 dark:text-white">{{ item.role }}</h4>
                      <p class="text-sm text-blue-600 dark:text-blue-400 font-semibold">{{ item.company }} | {{ item.dateRange }}</p>
                    </div>
                    <ul class="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li v-for="(achievement, idx) in item.achievements" :key="idx" class="flex items-start gap-2">
                        <span class="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{{ achievement }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Education -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7M5 10.579a12.05 12.05 0 007 0M19 10.579a12.05 12.05 0 00-7 0" />
                  </svg>
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white uppercase">Education</h3>
                </div>
                <div class="space-y-4">
                  <div v-for="(edu, index) in education" :key="index" class="relative pl-6 border-l-2 border-blue-600 dark:border-blue-400">
                    <div class="absolute -left-2 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <div>
                      <h4 class="font-bold text-gray-900 dark:text-white">{{ edu.institution }}</h4>
                      <p class="text-sm text-gray-700 dark:text-gray-300">{{ edu.degree }}</p>
                      <p class="text-sm text-blue-600 dark:text-blue-400 font-semibold">{{ edu.dateRange }}</p>
                      <p v-if="edu.status" class="text-xs text-gray-600 dark:text-gray-400 mt-1">{{ edu.status }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Button -->
        <div class="p-6 bg-gray-100 dark:bg-gray-900 flex justify-center">
          <a 
            :href="cvPdf" 
            :download="`${personalInfo.name} CV.pdf`"
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { personalInfo, aboutText, languages } from '../data/personalInfo.js'
import { skills } from '../data/skills.js'
import { experience, education } from '../data/experience.js'
import profileImage from '../assets/profile.jpg'
import cvPdf from '../assets/Moeng Kimheang .pdf'

const emit = defineEmits(['close'])

const closeCV = () => {
  emit('close')
}

// Close on ESC key handler
const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeCV()
  }
}

// Prevent body scroll when CV is open
onMounted(() => {
  document.body.style.overflow = 'hidden'
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
/* Prevent body scroll when CV is open */
</style>

