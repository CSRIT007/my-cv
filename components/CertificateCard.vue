<script setup lang="ts">
import type { Certificate, CertificateLabels } from '~/types/portfolio'

const props = defineProps<{
  certificate: Certificate
  labels: CertificateLabels
  previewAriaLabel: string
}>()

const isOpen = ref(false)

const imageExtensions = /\.(jpe?g|png|webp|gif)$/i
const pdfExtension = /\.pdf$/i

const thumbnailImage = computed(() => {
  if (props.certificate.image) {
    return props.certificate.image
  }

  if (imageExtensions.test(props.certificate.url)) {
    return props.certificate.url
  }

  return undefined
})

const isPdf = computed(() => pdfExtension.test(props.certificate.url))

const fullPreviewSrc = computed(() => {
  if (isPdf.value) {
    return props.certificate.url
  }

  if (imageExtensions.test(props.certificate.url)) {
    return props.certificate.url
  }

  return props.certificate.image
})

const openPreview = () => {
  isOpen.value = true
}
</script>

<template>
  <UCard variant="outline" :ui="{
    root: 'group flex h-full flex-col overflow-hidden rounded-lg',
    body: 'flex flex-1 flex-col p-0 sm:p-0'
  }">
    <div class="flex h-full flex-col">
      <div class="aspect-[4/3] w-full overflow-hidden bg-primary/10">
        <div class="flex h-full items-center justify-center p-3">
          <NuxtImg v-if="thumbnailImage" :src="thumbnailImage" :alt="certificate.title"
            class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy" />
          <UIcon v-else name="i-lucide-award" class="size-20 text-primary" aria-hidden="true" />
        </div>
      </div>

      <div class="flex flex-1 flex-col p-4">
        <div class="min-w-0">
          <h3 class="text-base font-semibold text-highlighted">
            {{ certificate.title }}
          </h3>
          <p v-if="certificate.summary" class="mt-1 text-sm text-muted">
            {{ certificate.summary }}
          </p>
        </div>

        <div class="mt-auto flex items-center gap-2 pt-5">
          <UButton :label="labels.preview" trailing-icon="i-lucide-arrow-up-right" color="primary" size="sm"
            :aria-label="`${previewAriaLabel}: ${certificate.title}`" @click="openPreview" />
          <UTooltip :text="labels.openInNewTab">
            <UButton :to="certificate.url" icon="i-lucide-external-link"
              :aria-label="`${labels.openInNewTab}: ${certificate.title}`" color="neutral" variant="ghost" size="sm"
              target="_blank" rel="noopener noreferrer" />
          </UTooltip>
        </div>
      </div>
    </div>
  </UCard>

  <UModal v-model:open="isOpen" :title="certificate.title" :ui="{
    content: 'w-[calc(100vw-2rem)] max-w-4xl max-h-[calc(100dvh-2rem)] overflow-hidden',
    body: 'overflow-hidden p-2 sm:p-3'
  }">
    <template #body>
      <div
        class="flex h-[calc(100dvh-11rem)] max-h-[calc(100dvh-11rem)] items-center justify-center overflow-hidden rounded-lg border border-default bg-muted">
        <iframe v-if="isPdf" :src="fullPreviewSrc" :title="certificate.title" class="h-full w-full bg-default" />
        <NuxtImg v-else-if="fullPreviewSrc" :src="fullPreviewSrc" :alt="certificate.title"
          class="max-h-full max-w-full object-contain" />
        <p v-else class="text-sm text-toned">Preview not available.</p>
      </div>
    </template>

    <template #footer>
      <UButton :to="certificate.url" :label="labels.openInNewTab" icon="i-lucide-external-link" color="neutral"
        variant="outline" target="_blank" rel="noopener noreferrer" block />
    </template>
  </UModal>
</template>
