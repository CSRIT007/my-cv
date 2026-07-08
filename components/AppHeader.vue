<script setup lang="ts">
import type { NavItem } from '~/types/portfolio'

const { personal, navigation, header, heroSocialLinks } = usePortfolio()
const mobileOpen = ref(false)

const sectionIds = navigation.map((item: NavItem) => item.id)
const { activeSection } = useActiveSection(sectionIds)

const toggleMobileMenu = () => {
  mobileOpen.value = !mobileOpen.value
}

const handleNavClick = (href: string) => {
  mobileOpen.value = false
  scrollToSection(href)
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-default bg-default/90 backdrop-blur supports-[backdrop-filter]:bg-default/75"
  >
    <div class="section-container flex h-16 items-center justify-between gap-4">
      <NuxtLink
        to="/"
        class="flex items-center gap-3 rounded-md font-extrabold text-highlighted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        :aria-label="header.homeLabel"
        @click.prevent="scrollToTop()"
      >
        <UAvatar
          :src="personal.profileImage"
          :alt="personal.profileImageAlt"
          size="sm"
          class="ring-1 ring-default"
        />
        <span class="hidden text-sm sm:inline">{{ personal.name }}</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex" :aria-label="header.primaryNavigationLabel">
        <UButton
          v-for="item in navigation"
          :key="item.id"
          :label="item.label"
          color="neutral"
          variant="ghost"
          size="sm"
          class="font-semibold"
          :class="activeSection === item.id ? 'text-primary' : ''"
          @click="handleNavClick(item.href)"
        />
      </nav>

      <div class="flex items-center gap-2">
        <div class="hidden items-center gap-1 lg:flex">
          <SocialLinkButtons :links="heroSocialLinks" size="xs" />
        </div>

        <ColorModeButton />

        <UButton
          class="md:hidden"
          :icon="mobileOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          color="neutral"
          variant="ghost"
          size="sm"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-navigation"
          :aria-label="header.toggleNavigationLabel"
          @click="toggleMobileMenu"
        />
      </div>
    </div>

    <nav
      v-show="mobileOpen"
      id="mobile-navigation"
      class="border-t border-default md:hidden"
      :aria-label="header.mobileNavigationLabel"
    >
      <div class="section-container flex flex-col gap-1 py-3">
        <UButton
          v-for="item in navigation"
          :key="item.id"
          :label="item.label"
          color="neutral"
          variant="ghost"
          block
          class="justify-start font-semibold"
          :class="activeSection === item.id ? 'text-primary' : ''"
          @click="handleNavClick(item.href)"
        />

        <SocialLinkButtons
          class="mt-3 border-t border-default pt-3 lg:hidden"
          :links="heroSocialLinks"
          size="sm"
        />
      </div>
    </nav>
  </header>
</template>
