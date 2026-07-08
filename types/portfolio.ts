export interface NavItem {
  id: string
  label: string
  href: string
}

export interface SocialLink {
  id: string
  label: string
  href: string
  icon: string
}

export interface PersonalInfo {
  name: string
  role: string
  roles: string[]
  tagline: string
  location: string
  email: string
  phone: string
  yearsOfExperience: string
  status: string
  currentFocus: string
  profileImage: string
  profileImageAlt: string
  cvUrl: string
}

export interface HeroContent {
  eyebrow: string
  rolesLabel: string
  primaryAction: string
  secondaryAction: string
}

export interface ProfileData {
  personal: PersonalInfo
  hero: HeroContent
}

export interface AboutContent {
  title: string
  biography: string
  focusLabel: string
  currentFocus: string
  stats: {
    locationLabel: string
    experienceLabel: string
    availabilityLabel: string
  }
}

export interface Skill {
  name: string
  icon: string
  color?: string
}

export interface SkillCategory {
  id: string
  label: string
  description: string
  skills: Skill[]
}

export interface SkillsData {
  title: string
  description: string
  countLabel: string
  categories: SkillCategory[]
}

export interface Project {
  id: string
  title: string
  summary: string
  description: string
  techStack: string[]
  githubUrl: string
  liveUrl?: string
  image?: string
  icon?: string
  accent?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'
  featured?: boolean
}

export interface ProjectsData {
  title: string
  description: string
  labels: ProjectLabels
  items: Project[]
}

export interface ProjectLabels {
  featured: string
  liveDemo: string
  githubTooltip: string
  technologies: string
}

export interface WorkExperience {
  role: string
  company: string
  dateRange: string
  achievements: string[]
}

export interface EducationEntry {
  institution: string
  degree: string
  dateRange: string
  status?: string
  description: string
}

export interface Certificate {
  id: string
  title: string
  summary?: string
  url: string
  image?: string
}

export interface CertificateLabels {
  preview: string
  openInNewTab: string
}

export interface CertificatesData {
  title: string
  description: string
  previewAriaLabel: string
  openInNewTabLabel: string
  labels: CertificateLabels
  items: Certificate[]
}

export interface ExperienceData {
  title: string
  items: WorkExperience[]
  education: EducationEntry[]
}

export interface HeaderContent {
  homeLabel: string
  primaryNavigationLabel: string
  mobileNavigationLabel: string
  toggleNavigationLabel: string
}

export interface FooterContent {
  copyrightText: string
  backToTopLabel: string
}

export interface SiteData {
  navigation: NavItem[]
  socialLinks: SocialLink[]
  header: HeaderContent
  footer: FooterContent
}

export interface ContactContent {
  title: string
  description: string
  fields: {
    name: {
      label: string
      placeholder: string
      requiredMessage: string
      minimumLength: number
      minimumMessage: string
    }
    email: {
      label: string
      placeholder: string
      requiredMessage: string
      invalidMessage: string
    }
    message: {
      label: string
      placeholder: string
      requiredMessage: string
      minimumLength: number
      minimumMessage: string
    }
  }
  submitLabel: string
  toast: {
    successTitle: string
    errorTitle: string
  }
  messages: {
    fixFields: string
    success: string
    submitError: string
    fallbackError: string
  }
}

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  message?: string
}

export type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error'

export interface PortfolioData {
  personal: PersonalInfo
  hero: HeroContent
  about: AboutContent
  navigation: NavItem[]
  socialLinks: SocialLink[]
  header: HeaderContent
  footer: FooterContent
  skills: SkillCategory[]
  skillsContent: Omit<SkillsData, 'categories'>
  projects: Project[]
  projectsContent: Omit<ProjectsData, 'items'>
  experience: WorkExperience[]
  experienceContent: Pick<ExperienceData, 'title'>
  certificates: Certificate[]
  certificatesContent: Omit<CertificatesData, 'items'>
  education: EducationEntry[]
  contact: ContactContent
}
