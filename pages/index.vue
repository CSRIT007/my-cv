<script setup lang="ts">
const { personal, about } = usePortfolio()

const title = `${personal.name} | ${personal.role}`
const description = about.biography

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogImage: personal.profileImage,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: personal.profileImage
})
</script>

<template>
  <div class="min-h-screen bg-default text-default">
    <AppHeader />
    <main id="main-content">
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>
