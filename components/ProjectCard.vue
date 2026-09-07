<script setup lang="ts">
import type { Project, ProjectLabels } from '~/types/portfolio'

const props = defineProps<{
  project: Project
  labels: ProjectLabels
}>()

const accentClasses: Record<NonNullable<Project['accent']>, string> = {
  primary: 'bg-primary/10 text-primary',
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error: 'bg-error/10 text-error',
  info: 'bg-info/10 text-info',
  neutral: 'bg-muted text-toned'
}

const mediaClass = computed(() =>
  accentClasses[props.project.accent ?? 'neutral']
)
</script>

<template>
  <UCard
    variant="outline"
    :ui="{
      root: 'group flex h-full flex-col overflow-hidden rounded-lg',
      body: 'flex flex-1 flex-col p-0 sm:p-0'
    }"
  >
    <div class="flex h-full flex-col">
      <div class="aspect-[4/3] w-full overflow-hidden" :class="mediaClass">
        <NuxtImg
          v-if="project.image"
          :src="project.image"
          :alt="`${project.title} preview`"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          width="640"
          height="480"
          loading="lazy"
        />
        <div
          v-else
          class="flex h-full items-center justify-center"
          aria-hidden="true"
        >
          <UIcon :name="project.icon ?? 'i-lucide-panels-top-left'" class="size-20" />
        </div>
      </div>

      <div class="flex flex-1 flex-col p-4">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h3 class="truncate text-base font-semibold text-highlighted">
              {{ project.title }}
            </h3>
            <p class="mt-1 text-sm text-muted">
              {{ project.summary }}
            </p>
          </div>
          <UBadge
            v-if="project.featured"
            :label="labels.featured"
            color="primary"
            variant="subtle"
            size="sm"
          />
        </div>

        <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-toned">
          {{ project.description }}
        </p>

        <ul class="mt-4 flex flex-wrap gap-1.5" :aria-label="labels.technologies">
          <li v-for="tech in project.techStack" :key="tech">
            <UBadge color="neutral" variant="soft" size="sm" :label="tech" />
          </li>
        </ul>

        <div class="mt-auto flex items-center gap-2 pt-5">
          <UButton
            v-if="project.liveUrl"
            :to="project.liveUrl"
            :label="labels.liveDemo"
            trailing-icon="i-lucide-arrow-up-right"
            color="primary"
            size="sm"
            target="_blank"
            rel="noopener noreferrer"
          />
          <UTooltip :text="labels.githubTooltip">
            <UButton
              :to="project.githubUrl"
              icon="i-simple-icons-github"
              :aria-label="labels.githubTooltip"
              color="neutral"
              variant="ghost"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            />
          </UTooltip>
        </div>
      </div>
    </div>
  </UCard>
</template>
