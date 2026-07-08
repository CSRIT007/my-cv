<script setup lang="ts">
const { experience, experienceContent } = usePortfolio()
</script>

<template>
  <section id="experience" class="section-padding border-b border-default">
    <div class="section-container">
      <h2 class="section-title">{{ experienceContent.title }}</h2>

      <ol class="mx-auto max-w-3xl space-y-8 border-l border-default pl-6">
        <li
          v-for="(item, index) in experience"
          :key="`${item.company}-${item.role}`"
          class="relative"
        >
          <span
            class="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-primary ring-4 ring-default"
            aria-hidden="true"
          />

          <article class="space-y-3">
            <div class="space-y-1">
              <p class="text-sm font-semibold text-primary">
                {{ item.dateRange }}
              </p>
              <h3 class="text-lg font-semibold text-highlighted">
                {{ item.role }}
              </h3>
              <p class="text-sm text-toned">
                {{ item.company }}
              </p>
            </div>

            <ul class="space-y-2 text-sm leading-relaxed text-muted">
              <li
                v-for="(achievement, achievementIndex) in item.achievements"
                :key="`${index}-${achievementIndex}`"
                class="flex gap-2"
              >
                <span class="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{{ achievement }}</span>
              </li>
            </ul>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
