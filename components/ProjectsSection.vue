<script setup lang="ts">
const { projects, projectsContent } = usePortfolio()
</script>

<template>
  <section id="projects" class="section-padding border-b border-default">
    <div class="section-container">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-extrabold text-highlighted md:text-4xl">
          {{ projectsContent.title }}
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {{ projectsContent.description }}
        </p>
      </div>

      <div class="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
          :labels="projectsContent.labels"
        />
      </div>
    </div>
  </section>
</template>
