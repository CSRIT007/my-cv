<template>
  <span 
    ref="textElement"
    class="inline-block"
    :class="{ 'opacity-0': !isVisible }"
  >
    <span class="typed-text">{{ displayedText }}</span>
    <span 
      v-if="showCursor && isTyping"
      class="cursor"
    >|</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  typeSpeed: {
    type: Number,
    default: 50
  },
  startDelay: {
    type: Number,
    default: 0
  },
  showCursor: {
    type: Boolean,
    default: true
  },
  triggerOnScroll: {
    type: Boolean,
    default: true
  }
})

const textElement = ref(null)
const displayedText = ref('')
const isVisible = ref(false)
const isTyping = ref(false)
const hasStarted = ref(false)

let timeoutId = null
let observer = null

const resetAnimation = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  displayedText.value = ''
  isTyping.value = false
  hasStarted.value = false
  isVisible.value = false
}

const typeText = () => {
  const fullText = props.text
  
  if (displayedText.value.length < fullText.length) {
    displayedText.value = fullText.substring(0, displayedText.value.length + 1)
    timeoutId = setTimeout(typeText, props.typeSpeed)
  } else {
    isTyping.value = false
  }
}

const startTyping = () => {
  if (hasStarted.value && displayedText.value === props.text) return
  resetAnimation()
  hasStarted.value = true
  isVisible.value = true
  isTyping.value = true
  
  timeoutId = setTimeout(() => {
    typeText()
  }, props.startDelay)
}

// Watch for text changes and restart animation
watch(() => props.text, () => {
  if (hasStarted.value) {
    startTyping()
  }
})

const setupIntersectionObserver = () => {
  if (!props.triggerOnScroll) {
    startTyping()
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted.value) {
          startTyping()
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  )

  if (textElement.value) {
    observer.observe(textElement.value)
  }
}

onMounted(() => {
  setupIntersectionObserver()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.cursor {
  font-weight: 100;
  color: currentColor;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.typed-text {
  border-right: none;
}
</style>
