<script setup lang="ts">
const { certificates, certificatesContent } = usePortfolio()
</script>

<template>
  <section id="certificates" class="section-padding border-b border-default">
    <div class="section-container">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-extrabold text-highlighted md:text-4xl">
          {{ certificatesContent.title }}
        </h2>
        <p class="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {{ certificatesContent.description }}
        </p>
      </div>

      <div class="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        <CertificateCard
          v-for="certificate in certificates"
          :key="certificate.id"
          :certificate="certificate"
          :labels="certificatesContent.labels"
          :preview-aria-label="certificatesContent.previewAriaLabel"
        />
      </div>
    </div>
  </section>
</template>
