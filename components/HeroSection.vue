<script setup lang="ts">
const { personal, hero, about } = usePortfolio()
const { displayedRole } = useTypedRoles(personal.roles)

const scrollToContact = () => scrollToSection('#contact')
</script>

<template>
  <section id="hero" class="border-b border-default">
    <div class="section-container">
      <div class="grid items-center gap-8 py-10 sm:gap-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] md:gap-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
        <div class="order-2 text-center md:order-1 md:text-left">
          <p class="mt-5 text-sm font-semibold uppercase text-toned">
            {{ hero.eyebrow }}
          </p>

          <div class="mt-3 flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <UBadge
              color="neutral"
              variant="subtle"
              icon="i-lucide-map-pin"
              :label="personal.location"
              class="max-w-full cursor-pointer"
              :title="`View ${personal.location} on Google Maps`"
              @click="openLocation(personal.location)"
            />
            <UBadge
              color="neutral"
              variant="outline"
              icon="i-lucide-briefcase"
              :label="`${personal.yearsOfExperience} years`"
              :title="about.stats.experienceLabel"
            />
          </div>

          <h1 class="mt-4 text-4xl font-extrabold text-highlighted sm:text-5xl lg:text-6xl">
            {{ personal.name }}
          </h1>
          <div class="mt-4 min-h-8 text-xl font-semibold text-primary sm:min-h-9 sm:text-2xl">
            <span data-testid="typed-role" aria-hidden="true">{{ displayedRole }}</span>
            <span
              class="ml-0.5 inline-block h-6 w-0.5 translate-y-1 bg-primary animate-pulse sm:h-7"
              aria-hidden="true"
            />
            <span class="sr-only">
              {{ hero.rolesLabel }}: {{ personal.roles.join(', ') }}
            </span>
          </div>

          <p class="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
            {{ personal.tagline }}
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <UButton
              :label="hero.primaryAction"
              :to="personal.cvUrl"
              icon="i-lucide-file-text"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            />
            <UButton
              :label="hero.secondaryAction"
              icon="i-lucide-mail"
              color="neutral"
              variant="outline"
              size="lg"
              @click="scrollToContact"
            />
          </div>
        </div>

        <div class="order-1 mx-auto w-full max-w-[13.2rem] sm:max-w-[17.6rem] md:order-2 md:max-w-[19.8rem] lg:max-w-[22rem]">
          <div class="aspect-square overflow-hidden rounded-full border border-default bg-white p-4 shadow-sm sm:p-5">
            <NuxtImg
              :src="personal.profileImage"
              :alt="personal.profileImageAlt"
              width="689"
              height="886"
              fit="contain"
              sizes="282px md:396px"
              format="webp"
              preload
              class="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
