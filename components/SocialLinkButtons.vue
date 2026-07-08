<script setup lang="ts">
import { isPlaceholderUrl } from '~/data/portfolio'
import type { SocialLink } from '~/types/portfolio'

defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    links: SocialLink[]
    variant?: 'ghost' | 'outline' | 'soft' | 'solid'
    size?: 'xs' | 'sm' | 'md' | 'lg'
    showLabel?: boolean
    block?: boolean
  }>(),
  {
    variant: 'ghost',
    size: 'sm',
    showLabel: false,
    block: false
  }
)
</script>

<template>
  <div class="flex flex-wrap items-center gap-2" v-bind="$attrs">
    <UButton
      v-for="link in links"
      :key="link.id"
      :to="isPlaceholderUrl(link.href) ? undefined : link.href"
      :label="showLabel ? link.label : undefined"
      :icon="link.icon"
      :aria-label="link.label"
      :title="link.label"
      :disabled="isPlaceholderUrl(link.href)"
      color="neutral"
      :variant="variant"
      :size="size"
      :block="block"
      :class="showLabel ? 'justify-start' : undefined"
      :target="getLinkTarget(link.href)"
      :rel="getLinkRel(link.href)"
    />
  </div>
</template>
