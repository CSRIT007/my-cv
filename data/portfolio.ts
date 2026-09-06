import type {
  AboutContent,
  CertificatesData,
  ContactContent,
  EducationData,
  ExperienceData,
  PortfolioData,
  ProfileData,
  ProjectsData,
  SiteData,
  SkillsData
} from '~/types/portfolio'
import aboutJson from '~/data/about.json'
import certificatesJson from '~/data/certificates.json'
import contactJson from '~/data/contact.json'
import educationJson from '~/data/education.json'
import experienceJson from '~/data/experience.json'
import profileJson from '~/data/profile.json'
import projectsJson from '~/data/projects.json'
import siteJson from '~/data/site.json'
import skillsJson from '~/data/skills.json'

const profile = profileJson as ProfileData
const about = aboutJson as AboutContent
const skills = skillsJson as SkillsData
const projects = projectsJson as ProjectsData
const experience = experienceJson as ExperienceData
const education = educationJson as EducationData
const certificates = certificatesJson as CertificatesData
const contact = contactJson as ContactContent
const site = siteJson as SiteData

export const isPlaceholderUrl = (url: string): boolean =>
  !url || url.startsWith('[') || url === '#'

export const portfolioData: PortfolioData = {
  personal: profile.personal,
  hero: profile.hero,
  about,
  navigation: site.navigation,
  socialLinks: site.socialLinks,
  header: site.header,
  footer: site.footer,
  skills: skills.categories,
  skillsContent: {
    title: skills.title,
    description: skills.description,
    countLabel: skills.countLabel
  },
  projects: projects.items,
  projectsContent: {
    title: projects.title,
    description: projects.description,
    labels: projects.labels
  },
  experience: experience.items,
  experienceContent: {
    title: experience.title
  },
  certificates: certificates.items,
  certificatesContent: {
    title: certificates.title,
    description: certificates.description,
    previewAriaLabel: certificates.previewAriaLabel,
    openInNewTabLabel: certificates.openInNewTabLabel,
    labels: certificates.labels
  },
  education: education.items,
  educationContent: {
    title: education.title,
    description: education.description
  },
  contact
}
