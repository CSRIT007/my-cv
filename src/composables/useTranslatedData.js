import { computed } from 'vue'
import { useLanguage } from './useLanguage.js'
import { personalInfo as originalPersonalInfo, aboutText as originalAboutText, languages as originalLanguages } from '../data/personalInfo.js'
import { projects as originalProjects } from '../data/projects.js'
import { experience as originalExperience, education as originalEducation } from '../data/experience.js'
import { skills as originalSkills } from '../data/skills.js'

export function useTranslatedData() {
  const { t, currentLanguage } = useLanguage()

  // Translated personal info
  const personalInfo = computed(() => {
    const lang = currentLanguage.value
    return {
      ...originalPersonalInfo,
      role: lang === 'en' ? originalPersonalInfo.role : t(`personalInfo.role`),
      tagline: lang === 'en' ? originalPersonalInfo.tagline : t(`personalInfo.tagline`),
      status: t('about.statusValue')
    }
  })

  // Translated about text
  const aboutText = computed(() => {
    return t('about.text')
  })

  // Translated languages
  const languages = computed(() => {
    return originalLanguages.map(lang => ({
      ...lang,
      level: t(`languages.${lang.name.toLowerCase()}.level`) || lang.level
    }))
  })

  // Translated projects
  const projects = computed(() => {
    const lang = currentLanguage.value
    const translatedProjects = t('projects.items')
    
    return originalProjects.map((project, index) => ({
      ...project,
      title: translatedProjects[index]?.title || project.title,
      description: translatedProjects[index]?.description || project.description
    }))
  })

  // Translated experience
  const experience = computed(() => {
    const lang = currentLanguage.value
    const translatedExp = t('experience.items')
    
    return originalExperience.map((exp, index) => ({
      ...exp,
      role: translatedExp[index]?.role || exp.role,
      company: translatedExp[index]?.company || exp.company,
      achievements: translatedExp[index]?.achievements || exp.achievements
    }))
  })

  // Translated education
  const education = computed(() => {
    const lang = currentLanguage.value
    const translatedEdu = t('education.items')
    
    return originalEducation.map((edu, index) => ({
      ...edu,
      degree: translatedEdu[index]?.degree || edu.degree,
      institution: translatedEdu[index]?.institution || edu.institution,
      location: translatedEdu[index]?.location || edu.location,
      description: translatedEdu[index]?.description || edu.description,
      highlights: translatedEdu[index]?.highlights || edu.highlights,
      status: t(`education.status.${edu.status.toLowerCase().replace(' ', '')}`) || edu.status
    }))
  })

  // Translated skills
  const skills = computed(() => {
    const lang = currentLanguage.value
    const translatedSkills = t('skills.items')
    
    return {
      frontend: translatedSkills?.frontend || originalSkills.frontend,
      backend: translatedSkills?.backend || originalSkills.backend,
      tools: translatedSkills?.tools || originalSkills.tools
    }
  })

  return {
    personalInfo,
    aboutText,
    languages,
    projects,
    experience,
    education,
    skills
  }
}


