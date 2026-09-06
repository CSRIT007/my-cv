<script setup lang="ts">
import { isPlaceholderUrl } from '~/data/portfolio'
import type { Certificate, CertificateLabels } from '~/types/portfolio'

const props = defineProps<{
  certificate: Certificate
  labels: CertificateLabels
  previewAriaLabel: string
}>()

const isOpen = ref(false)

const imageExtensions = /\.(jpe?g|png|webp|gif)$/i
const pdfExtension = /\.pdf$/i

const certificateUrl = computed(() => props.certificate.url?.trim() || '')
const certificateImage = computed(() => props.certificate.image?.trim() || '')

const thumbnailImage = computed(() => {
  if (certificateImage.value && imageExtensions.test(certificateImage.value)) {
    return certificateImage.value
  }

  if (certificateUrl.value && imageExtensions.test(certificateUrl.value)) {
    return certificateUrl.value
  }

  return undefined
})

const isPdf = computed(() => pdfExtension.test(certificateUrl.value))

const previewImage = computed(() => {
  if (certificateImage.value && imageExtensions.test(certificateImage.value)) {
    return certificateImage.value
  }

  if (certificateUrl.value && imageExtensions.test(certificateUrl.value)) {
    return certificateUrl.value
  }

  return undefined
})

const hasPreview = computed(() => Boolean(previewImage.value || (certificateUrl.value && isPdf.value)))
const hasFile = computed(() => Boolean(certificateUrl.value && !isPlaceholderUrl(certificateUrl.value)))

const fullPreviewSrc = computed(() => previewImage.value || certificateUrl.value)

const openPreview = () => {
  if (!hasPreview.value) return
  isOpen.value = true
}
</script>

<template>
  <UCard variant="outline" :ui="{
    root: 'group flex h-full flex-col overflow-hidden rounded-lg',
    body: 'flex flex-1 flex-col p-0 sm:p-0'
  }">
    <div class="flex h-full flex-col">
      <button
        type="button"
        class="aspect-[4/3] w-full overflow-hidden bg-primary/10"
        :class="hasPreview ? 'cursor-zoom-in' : 'cursor-default'"
        :disabled="!hasPreview"
        :aria-label="`${previewAriaLabel}: ${certificate.title}`"
        @click="openPreview"
      >
        <div class="flex h-full items-center justify-center p-3">
          <NuxtImg v-if="thumbnailImage" :src="thumbnailImage" :alt="certificate.title"
            class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy" />
          <UIcon v-else name="i-lucide-award" class="size-20 text-primary" aria-hidden="true" />
        </div>
      </button>

      <div class="flex flex-1 flex-col p-4">
        <div class="min-w-0">
          <h3 class="text-base font-semibold text-highlighted">
            {{ certificate.title }}
          </h3>
          <p v-if="certificate.summary" class="mt-1 text-sm text-muted">
            {{ certificate.summary }}
          </p>
        </div>

        <div v-if="hasPreview || hasFile" class="mt-auto flex items-center gap-2 pt-5">
          <UButton
            v-if="hasPreview"
            :label="labels.preview"
            trailing-icon="i-lucide-arrow-up-right"
            color="primary"
            size="sm"
            :aria-label="`${previewAriaLabel}: ${certificate.title}`"
            @click="openPreview"
          />
          <UTooltip v-if="hasFile" :text="labels.openInNewTab">
            <UButton
              :to="certificateUrl"
              icon="i-lucide-external-link"
              :aria-label="`${labels.openInNewTab}: ${certificate.title}`"
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

  <UModal
    v-model:open="isOpen"
    :title="certificate.title"
    fullscreen
    scrollable
    :ui="{
      body: 'p-0 sm:p-0',
      footer: 'shrink-0'
    }"
  >
    <template #body>
      <div class="flex min-h-full justify-center bg-muted p-3 sm:p-6">
        <img
          v-if="previewImage"
          :src="previewImage"
          :alt="certificate.title"
          class="h-auto w-full max-w-5xl object-contain shadow-sm"
        >
        <iframe
          v-else-if="isPdf"
          :src="fullPreviewSrc"
          :title="certificate.title"
          class="h-[calc(100dvh-9rem)] w-full bg-default"
        />
        <p v-else class="self-center text-sm text-toned">Preview not available.</p>
      </div>
    </template>

    <template v-if="hasFile" #footer>
      <UButton :to="certificateUrl" :label="labels.openInNewTab" icon="i-lucide-external-link" color="neutral"
        variant="outline" target="_blank" rel="noopener noreferrer" block />
    </template>
  </UModal>
</template>
