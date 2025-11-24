<template>
  <section 
    id="education" 
    class="py-8 sm:py-12 backdrop-blur-sm"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
        <div class="text-center sm:text-left mb-8 sm:mb-10">
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          <ScrollTypingAnimation 
            :text="educationTitle"
            :type-speed="100"
            :start-delay="200"
          />
        </h2>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          <ScrollTypingAnimation 
            :text="educationDescription"
            :type-speed="40"
            :start-delay="800"
            :show-cursor="false"
          />
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

        <!-- Education Items -->
        <div class="space-y-6 sm:space-y-8">
          <article
            v-for="(item, index) in education"
            :key="index"
            class="relative ml-12 sm:ml-16"
          >
            <!-- Timeline Dot -->
            <div class="absolute -left-14 sm:-left-16 top-6 h-4 w-4 rounded-full bg-primary-600 ring-4 ring-primary-600/20 dark:ring-primary-400/20"></div>

            <!-- Education Card -->
            <div class="relative bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100/80 dark:border-slate-700/60 p-5 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <!-- Card Header -->
              <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div class="flex-1">
                  <!-- Degree -->
                  <h3 class="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-50 mb-2">
                    {{ item.degree }}
                  </h3>
                  
                  <!-- Institution -->
                  <p class="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    {{ item.institution }}
                  </p>
                  
                  <!-- Location -->
                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ item.location }}
                  </p>
                </div>

                <!-- Date Range & Status -->
                <div class="flex flex-col sm:items-end gap-2">
                  <!-- Date Range -->
                  <div class="flex items-center gap-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {{ item.startDate }} – {{ item.endDate }}
                  </div>
                  
                  <!-- Status Badge -->
                  <span 
                    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
                    :class="getStatusBadgeClass(item.status)"
                  >
                    {{ item.status }}
                  </span>
                </div>
              </div>

              <!-- Description -->
              <div class="mb-4">
                <ul class="space-y-2">
                  <li 
                    v-for="(desc, descIndex) in item.description"
                    :key="descIndex"
                    class="text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                  >
                    <span class="text-primary-600 dark:text-primary-400 mt-1.5 flex-shrink-0">•</span>
                    <span>{{ desc }}</span>
                  </li>
                </ul>
              </div>

              <!-- Highlights -->
              <div v-if="item.highlights && item.highlights.length > 0" class="mb-4">
                <h4 class="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3">{{ keyHighlightsLabel }}</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="(highlight, highlightIndex) in item.highlights"
                    :key="highlightIndex"
                    class="inline-flex items-center rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 text-xs font-medium"
                  >
                    {{ highlight }}
                  </span>
                </div>
              </div>

              <!-- Certificate Button -->
              <div v-if="item.certificate" class="flex justify-end">
                <button
                  v-if="item.certificate.available"
                  @click="openCertificate(item.certificate)"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {{ viewCertificateLabel }}
                </button>
                <span
                  v-else
                  class="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-sm font-medium rounded-lg cursor-not-allowed"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {{ item.certificate.name }}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- Certificate Modal -->
    <Transition name="modal">
      <div
        v-if="showCertificate"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        @click.self="closeCertificate"
      >
        <div class="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
            <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {{ selectedCertificate?.name }}
            </h3>
            <button
              @click="closeCertificate"
              class="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
              aria-label="Close certificate"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Certificate Image -->
          <div class="p-4 overflow-auto max-h-[calc(90vh-120px)]">
            <div class="flex justify-center">
              <img
                :src="selectedCertificate?.image"
                :alt="selectedCertificate?.name"
                class="max-w-full h-auto rounded-lg shadow-lg"
                @error="handleImageError"
              />
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="flex justify-end gap-3 p-4 border-t border-slate-200 dark:border-slate-700">
            <button
              @click="closeCertificate"
              class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
            >
              {{ closeLabel }}
            </button>
            <a
              :href="selectedCertificate?.image"
              :download="selectedCertificate?.name"
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {{ downloadLabel }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { education as originalEducation } from '../data/education.js'
import ScrollTypingAnimation from './ScrollTypingAnimation.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Get translated education - reactive to language changes
const education = computed(() => {
  // Access currentLanguage to make this computed reactive
  const lang = currentLanguage.value
  const translatedEdu = t('education.items')
  if (!translatedEdu || !Array.isArray(translatedEdu)) {
    return originalEducation
  }
  
  return originalEducation.map((edu, index) => ({
    ...edu,
    degree: translatedEdu[index]?.degree || edu.degree,
    institution: translatedEdu[index]?.institution || edu.institution,
    location: translatedEdu[index]?.location || edu.location,
    description: translatedEdu[index]?.description || edu.description,
    highlights: translatedEdu[index]?.highlights || edu.highlights,
    status: translatedEdu[index]?.status || edu.status
  }))
})

const educationTitle = computed(() => {
  const lang = currentLanguage.value
  return t('education.title')
})

const educationDescription = computed(() => {
  const lang = currentLanguage.value
  return t('education.description')
})

const viewCertificateLabel = computed(() => {
  const lang = currentLanguage.value
  return t('education.viewCertificate')
})

const keyHighlightsLabel = computed(() => {
  const lang = currentLanguage.value
  return t('education.keyHighlights')
})

const closeLabel = computed(() => {
  const lang = currentLanguage.value
  return t('education.close')
})

const downloadLabel = computed(() => {
  const lang = currentLanguage.value
  return t('education.download')
})

// Certificate modal state
const showCertificate = ref(false)
const selectedCertificate = ref(null)

// Function to get status badge styling
const getStatusBadgeClass = (status) => {
  switch (status.toLowerCase()) {
    case 'in progress':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    case 'graduated':
    case 'completed':
      return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    case 'on hold':
    case 'deferred':
      return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300'
    default:
      return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
  }
}

// Certificate modal functions
const openCertificate = (certificate) => {
  selectedCertificate.value = certificate
  showCertificate.value = true
  document.body.style.overflow = 'hidden'
}

const closeCertificate = () => {
  showCertificate.value = false
  selectedCertificate.value = null
  document.body.style.overflow = ''
}

// Handle image loading errors
const handleImageError = (event) => {
  console.error('Certificate image failed to load:', event.target.src)
  // You could set a placeholder image here
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzIwMCAxNjEuMDQ2IDE5MS4wNDYgMTcwIDE4MCAxNzBDMTY4Ljk1NCAxNzAgMTYwIDE2MS4wNDYgMTYwIDE1MEMxNjAgMTM4Ljk1NCAxNjguOTU0IDEzMCAxODAgMTMwQzE5MS4wNDYgMTMwIDIwMCAxMzguOTU0IDIwMCAxNTBaIiBmaWxsPSIjOUI5QkEwIi8+CjxwYXRoIGQ9Ik0yNDAgMTkwSDE2MFYxODBIMjQwVjE5MFoiIGZpbGw9IiM5QjlCQTAiLz4KPHRleHQgeD0iMjAwIiB5PSIyMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlCOUJBMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2VydGlmaWNhdGUgTm90IEF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+'
}

// Close modal on ESC key
const handleKeydown = (event) => {
  if (event.key === 'Escape' && showCertificate.value) {
    closeCertificate()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Modal transition animations */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content,
.modal-leave-active .modal-content {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-content,
.modal-leave-to .modal-content {
  transform: scale(0.9);
}
</style>
