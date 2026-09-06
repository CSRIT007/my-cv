<script setup lang="ts">
const { education, educationContent } = usePortfolio()
</script>

<template>
  <section id="education" class="section-padding border-b border-default">
    <div class="section-container">
      <h2 class="section-title">{{ educationContent.title }}</h2>
      <p
        v-if="educationContent.description"
        class="mx-auto mb-10 max-w-3xl text-center text-base leading-relaxed text-muted"
      >
        {{ educationContent.description }}
      </p>

      <ol class="mx-auto max-w-3xl space-y-8 border-l border-default pl-6">
        <li
          v-for="item in education"
          :key="`${item.institution}-${item.degree}`"
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
                {{ item.degree }}
              </h3>
              <p class="text-sm text-toned">
                {{ item.institution }}
              </p>
              <UBadge
                v-if="item.status"
                color="primary"
                variant="subtle"
                :label="item.status"
                class="mt-1"
              />
            </div>

            <p class="text-sm leading-relaxed text-muted">
              {{ item.description }}
            </p>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>
