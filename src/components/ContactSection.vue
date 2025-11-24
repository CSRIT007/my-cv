<template>
  <section 
    id="contact" 
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 backdrop-blur-sm"
  >
    <h2 class="section-title">
      <ScrollTypingAnimation 
        :text="contactTitle"
        :type-speed="90"
        :start-delay="200"
      />
    </h2>
    
    <div class="max-w-2xl mx-auto text-center">
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
        <ScrollTypingAnimation 
          :text="contactDescription"
          :type-speed="35"
          :start-delay="800"
          :show-cursor="false"
        />
      </p>
      
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
            {{ contactInfo }}
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <!-- Phone Contact -->
          <a 
            :href="`tel:${personalInfo.phone}`"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-green-500">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ phoneLabel }}</h4>
              <p class="contact-text">{{ personalInfo.phone }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>

          <!-- Email Contact -->
          <a 
            :href="`mailto:${personalInfo.email}`"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-blue-500">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ emailLabel }}</h4>
              <p class="contact-text">{{ personalInfo.email }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>

          <!-- GitHub -->
          <a 
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-gray-800 dark:bg-gray-600">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ githubLabel }}</h4>
              <p class="contact-text">{{ viewProjectsLabel }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>

          <!-- LinkedIn -->
          <a 
            :href="personalInfo.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-blue-600">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ linkedinLabel }}</h4>
              <p class="contact-text">{{ professionalProfileLabel }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>

          <!-- Facebook -->
          <a 
            :href="personalInfo.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-blue-700">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ facebookLabel }}</h4>
              <p class="contact-text">{{ socialProfileLabel }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>

          <!-- Telegram -->
          <a 
            :href="personalInfo.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-card group relative overflow-hidden"
          >
            <div class="contact-icon-bg bg-blue-500">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <div class="contact-content">
              <h4 class="contact-title">{{ telegramLabel }}</h4>
              <p class="contact-text">{{ instantMessagingLabel }}</p>
            </div>
            <div class="contact-overlay"></div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { personalInfo } from '../data/personalInfo.js'
import ScrollTypingAnimation from './ScrollTypingAnimation.vue'
import { useLanguage } from '../composables/useLanguage.js'

const { t, currentLanguage } = useLanguage()

// Make all contact translations reactive by tracking currentLanguage
const contactTranslations = computed(() => {
  const lang = currentLanguage.value // Track language changes
  return {
    title: t('contact.title'),
    description: t('contact.description'),
    contactInfo: t('contact.contactInfo'),
    phone: t('contact.phone'),
    email: t('contact.email'),
    github: t('contact.github'),
    linkedin: t('contact.linkedin'),
    facebook: t('contact.facebook'),
    telegram: t('contact.telegram'),
    viewProjects: t('contact.viewProjects'),
    professionalProfile: t('contact.professionalProfile'),
    socialProfile: t('contact.socialProfile'),
    instantMessaging: t('contact.instantMessaging')
  }
})

// Individual computed properties for template use
const contactTitle = computed(() => contactTranslations.value.title)
const contactDescription = computed(() => contactTranslations.value.description)
const contactInfo = computed(() => contactTranslations.value.contactInfo)
const phoneLabel = computed(() => contactTranslations.value.phone)
const emailLabel = computed(() => contactTranslations.value.email)
const githubLabel = computed(() => contactTranslations.value.github)
const linkedinLabel = computed(() => contactTranslations.value.linkedin)
const facebookLabel = computed(() => contactTranslations.value.facebook)
const telegramLabel = computed(() => contactTranslations.value.telegram)
const viewProjectsLabel = computed(() => contactTranslations.value.viewProjects)
const professionalProfileLabel = computed(() => contactTranslations.value.professionalProfile)
const socialProfileLabel = computed(() => contactTranslations.value.socialProfile)
const instantMessagingLabel = computed(() => contactTranslations.value.instantMessaging)
</script>

<style scoped>
.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(229, 231, 235, 0.3);
  transition: all 0.3s ease;
  transform-origin: center;
  min-height: 160px;
  position: relative;
  overflow: hidden;
}

.dark .contact-card {
  background: rgba(31, 41, 55, 0.9);
  border-color: rgba(55, 65, 81, 0.3);
}

.contact-card:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.contact-icon-bg {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.contact-card:hover .contact-icon-bg {
  transform: scale(1.1) rotate(12deg);
}

.contact-content {
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.dark .contact-title {
  color: #ffffff;
}

.contact-card:hover .contact-title {
  color: #2563eb;
}

.dark .contact-card:hover .contact-title {
  color: #60a5fa;
}

.contact-text {
  font-size: 0.875rem;
  color: #6b7280;
  transition: color 0.3s ease;
}

.dark .contact-text {
  color: #d1d5db;
}

.contact-card:hover .contact-text {
  color: #374151;
}

.dark .contact-card:hover .contact-text {
  color: #e5e7eb;
}

.contact-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(217, 70, 239, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
}

.contact-card:hover .contact-overlay {
  opacity: 1;
}</style>

/* Enhanced hover effects */
.contact-card:hover .contact-icon-bg {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.contact-card:hover {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 250, 251, 0.95) 100%);
}

.dark .contact-card:hover {
  background: linear-gradient(135deg, rgba(31, 41, 55, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%);
}

/* Animation for icons */
.contact-card:hover .contact-icon-bg svg {
  animation: iconBounce 0.6s ease-in-out;
}

@keyframes iconBounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Shimmer effect */
.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease-in-out;
  border-radius: 1rem;
}

.contact-card:hover::before {
  left: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-card {
    min-height: 140px;
  }
  
  .contact-icon-bg {
    @apply w-12 h-12 mb-3;
  }
  
  .contact-icon-bg svg {
    @apply w-6 h-6;
  }
}


