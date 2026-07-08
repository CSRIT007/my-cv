import { portfolioData } from '~/data/portfolio'
import type { NavItem, SocialLink } from '~/types/portfolio'

export function usePortfolio() {
  const personal = portfolioData.personal
  const hero = portfolioData.hero
  const about = portfolioData.about
  const navigation = portfolioData.navigation
  const header = portfolioData.header
  const footer = portfolioData.footer
  const skills = portfolioData.skills
  const skillsContent = portfolioData.skillsContent
  const projects = portfolioData.projects
  const projectsContent = portfolioData.projectsContent
  const experience = portfolioData.experience
  const experienceContent = portfolioData.experienceContent
  const certificates = portfolioData.certificates
  const certificatesContent = portfolioData.certificatesContent
  const education = portfolioData.education
  const contact = portfolioData.contact

  const socialLinks = portfolioData.socialLinks

  const heroSocialLinks = computed<SocialLink[]>(() =>
    socialLinks.filter((link) => link.id !== 'email')
  )

  const featuredProjects = computed(() =>
    projects.filter((project) => project.featured)
  )

  return {
    personal,
    hero,
    about,
    navigation,
    header,
    footer,
    socialLinks,
    heroSocialLinks,
    skills,
    skillsContent,
    projects,
    projectsContent,
    featuredProjects,
    experience,
    experienceContent,
    certificates,
    certificatesContent,
    education,
    contact
  }
}

export function useActiveSection(sectionIds: NavItem['id'][]) {
  const activeSection = ref(sectionIds[0] ?? 'hero')

  const updateActiveSection = () => {
    const offset = 96
    const scrollPosition = window.scrollY + offset

    for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
      const sectionId = sectionIds[index]
      if (!sectionId) continue

      const element = document.getElementById(sectionId)
      if (element && element.offsetTop <= scrollPosition) {
        activeSection.value = sectionId
        return
      }
    }
  }

  onMounted(() => {
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection }
}

export function isExternalLink(href: string): boolean {
  return href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
}

export function getLinkTarget(href: string): '_blank' | undefined {
  return href.startsWith('http') ? '_blank' : undefined
}

export function getLinkRel(href: string): string | undefined {
  return href.startsWith('http') ? 'noopener noreferrer' : undefined
}

export function scrollToSection(href: string): void {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function openLocation(location: string): void {
  const query = encodeURIComponent(location)
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${query}`,
    '_blank',
    'noopener,noreferrer'
  )
}
