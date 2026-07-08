<script setup lang="ts">
const { personal, about } = usePortfolio()
</script>

<template>
  <section id="about" class="section-padding border-b border-default">
    <div class="section-container">
      <h2 class="section-title">{{ about.title }}</h2>

      <div class="mx-auto max-w-3xl space-y-6">
        <p class="text-center text-base leading-relaxed text-muted sm:text-lg">
          {{ about.biography }}
        </p>

        <div class="rounded-lg border border-default bg-elevated/50 p-5">
          <h3 class="text-sm font-semibold uppercase text-toned">
            {{ about.focusLabel }}
          </h3>
          <p class="mt-2 text-sm leading-relaxed text-muted sm:text-base">
            {{ about.currentFocus }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
