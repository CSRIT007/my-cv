<script setup lang="ts">
const { personal, socialLinks, contact } = usePortfolio()
const toast = useToast()
const { form, errors, status, statusMessage, submit } = useContactForm(contact)

watch(status, (value) => {
  if (value === 'success') {
    toast.add({
      title: contact.toast.successTitle,
      description: statusMessage.value,
      color: 'success',
      icon: 'i-lucide-check-circle'
    })
  }

  if (value === 'error' && statusMessage.value) {
    toast.add({
      title: contact.toast.errorTitle,
      description: statusMessage.value,
      color: 'error',
      icon: 'i-lucide-alert-circle'
    })
  }
})
</script>

<template>
  <section id="contact" class="section-padding">
    <div class="section-container">
      <h2 class="section-title">{{ contact.title }}</h2>

      <div class="mx-auto grid max-w-4xl gap-10 lg:grid-cols-2">
        <div class="space-y-6">
          <p class="text-sm leading-relaxed text-muted sm:text-base">
            {{ contact.description }}
          </p>

          <div class="space-y-3">
            <UButton
              :to="`mailto:${personal.email}`"
              :label="personal.email"
              icon="i-lucide-mail"
              color="neutral"
              variant="ghost"
              class="justify-start"
            />
            <UButton
              :to="`tel:${personal.phone}`"
              :label="personal.phone"
              icon="i-lucide-phone"
              color="neutral"
              variant="ghost"
              class="justify-start"
            />
            <UButton
              :label="personal.location"
              icon="i-lucide-map-pin"
              color="neutral"
              variant="ghost"
              class="justify-start"
              :title="`View ${personal.location} on Google Maps`"
              @click="openLocation(personal.location)"
            />
          </div>

          <SocialLinkButtons
            :links="socialLinks"
            variant="outline"
            show-label
          />
        </div>

        <UCard>
          <form class="space-y-4" novalidate @submit.prevent="submit">
            <UFormField :label="contact.fields.name.label" :error="errors.name" required>
              <UInput
                v-model="form.name"
                name="name"
                autocomplete="name"
                :placeholder="contact.fields.name.placeholder"
                :disabled="status === 'loading'"
              />
            </UFormField>

            <UFormField :label="contact.fields.email.label" :error="errors.email" required>
              <UInput
                v-model="form.email"
                name="email"
                type="email"
                autocomplete="email"
                :placeholder="contact.fields.email.placeholder"
                :disabled="status === 'loading'"
              />
            </UFormField>

            <UFormField :label="contact.fields.message.label" :error="errors.message" required>
              <UTextarea
                v-model="form.message"
                name="message"
                :rows="5"
                :placeholder="contact.fields.message.placeholder"
                :disabled="status === 'loading'"
              />
            </UFormField>

            <UButton
              type="submit"
              :label="contact.submitLabel"
              icon="i-lucide-send"
              :loading="status === 'loading'"
              block
            />

            <p
              v-if="status === 'success'"
              class="text-sm text-success"
              role="status"
              aria-live="polite"
            >
              {{ statusMessage }}
            </p>
            <p
              v-else-if="status === 'error' && statusMessage"
              class="text-sm text-error"
              role="alert"
              aria-live="assertive"
            >
              {{ statusMessage }}
            </p>
          </form>
        </UCard>
      </div>
    </div>
  </section>
</template>
