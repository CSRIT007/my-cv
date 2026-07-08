import type {
  ContactContent,
  ContactFormErrors,
  ContactFormStatus,
  ContactFormValues
} from '~/types/portfolio'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateContactForm(
  values: ContactFormValues,
  content: ContactContent
): ContactFormErrors {
  const errors: ContactFormErrors = {}

  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) {
    errors.name = content.fields.name.requiredMessage
  } else if (name.length < content.fields.name.minimumLength) {
    errors.name = content.fields.name.minimumMessage
  }

  if (!email) {
    errors.email = content.fields.email.requiredMessage
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = content.fields.email.invalidMessage
  }

  if (!message) {
    errors.message = content.fields.message.requiredMessage
  } else if (message.length < content.fields.message.minimumLength) {
    errors.message = content.fields.message.minimumMessage
  }

  return errors
}

/**
 * Isolated submission handler. Replace the body with a real API call later.
 */
export async function submitContactForm(
  values: ContactFormValues,
  content: ContactContent
): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, 900)
  })

  if (values.email.toLowerCase().includes('error')) {
    throw new Error(content.messages.submitError)
  }
}

export function useContactForm(content: ContactContent) {
  const form = reactive<ContactFormValues>({
    name: '',
    email: '',
    message: ''
  })

  const errors = reactive<ContactFormErrors>({})
  const status = ref<ContactFormStatus>('idle')
  const statusMessage = ref('')

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.message = ''
    errors.name = undefined
    errors.email = undefined
    errors.message = undefined
  }

  const applyErrors = (nextErrors: ContactFormErrors) => {
    errors.name = nextErrors.name
    errors.email = nextErrors.email
    errors.message = nextErrors.message
  }

  const submit = async () => {
    statusMessage.value = ''
    const validationErrors = validateContactForm(form, content)
    applyErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      status.value = 'error'
      statusMessage.value = content.messages.fixFields
      return
    }

    status.value = 'loading'

    try {
      await submitContactForm({ ...form }, content)
      status.value = 'success'
      statusMessage.value = content.messages.success
      resetForm()
    } catch (error) {
      status.value = 'error'
      statusMessage.value =
        error instanceof Error
          ? error.message
          : content.messages.fallbackError
    }
  }

  return {
    form,
    errors,
    status,
    statusMessage,
    submit,
    resetForm
  }
}
