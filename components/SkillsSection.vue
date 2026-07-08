<script setup lang="ts">
const { skills, skillsContent } = usePortfolio()
</script>

<template>
  <section id="skills" class="section-padding border-b border-default">
    <div class="section-container">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-extrabold text-highlighted md:text-4xl">
          {{ skillsContent.title }}
        </h2>
      </div>

      <div class="mx-auto max-w-5xl space-y-12 border-l border-default pl-6">
        <section
          v-for="category in skills"
          :key="category.id"
          class="relative"
          :aria-labelledby="`skill-category-${category.id}`"
        >
          <span
            class="absolute -left-8 top-1.5 size-3 rounded-full bg-primary ring-4 ring-default"
            aria-hidden="true"
          />

          <div class="mb-5 flex items-center gap-4">
            <USeparator
              :id="`skill-category-${category.id}`"
              position="start"
              :label="category.label"
              class="min-w-0 flex-1"
              :ui="{ label: 'text-lg font-semibold text-highlighted' }"
            />
            <span class="shrink-0 text-xs font-semibold text-toned">
              {{ category.skills.length }} {{ skillsContent.countLabel }}
            </span>
          </div>
          <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            <li
              v-for="skill in category.skills"
              :key="skill.name"
              class="group flex min-h-24 items-center gap-3 rounded-lg border border-default bg-default px-4 py-4 transition-colors hover:bg-elevated"
            >
              <UIcon
                :name="skill.icon"
                class="size-9 shrink-0 transition-transform duration-200 group-hover:scale-105"
                :class="skill.color ? '' : 'text-highlighted'"
                :style="skill.color ? { color: skill.color } : undefined"
                aria-hidden="true"
              />
              <span class="min-w-0 text-sm font-semibold leading-snug text-highlighted">
                {{ skill.name }}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </section>
</template>
