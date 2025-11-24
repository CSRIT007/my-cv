<template>
  <span class="inline-block">
    <span class="typed-text">{{ displayedText }}</span>
    <span 
      class="cursor"
      :class="{ 'cursor-blink': showCursor }"
    >|</span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  texts: {
    type: Array,
    required: true,
    default: () => ['Hello World!']
  },
  typeSpeed: {
    type: Number,
    default: 100
  },
  backSpeed: {
    type: Number,
    default: 50
  },
  startDelay: {
    type: Number,
    default: 500
  },
  backDelay: {
    type: Number,
    default: 2000
  },
  loop: {
    type: Boolean,
    default: true
  },
  showCursor: {
    type: Boolean,
    default: true
  }
})

const displayedText = ref('')
const currentTextIndex = ref(0)
const isTyping = ref(true)
let timeoutId = null

const resetAnimation = () => {
  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = null
  }
  displayedText.value = ''
  currentTextIndex.value = 0
  isTyping.value = true
}

const typeText = () => {
  const currentText = props.texts[currentTextIndex.value]
  
  if (isTyping.value) {
    // Typing forward
    if (displayedText.value.length < currentText.length) {
      displayedText.value = currentText.substring(0, displayedText.value.length + 1)
      timeoutId = setTimeout(typeText, props.typeSpeed)
    } else {
      // Finished typing, wait before backspacing
      if (props.loop && props.texts.length > 1) {
        timeoutId = setTimeout(() => {
          isTyping.value = false
          typeText()
        }, props.backDelay)
      }
    }
  } else {
    // Backspacing
    if (displayedText.value.length > 0) {
      displayedText.value = displayedText.value.substring(0, displayedText.value.length - 1)
      timeoutId = setTimeout(typeText, props.backSpeed)
    } else {
      // Finished backspacing, move to next text
      isTyping.value = true
      currentTextIndex.value = (currentTextIndex.value + 1) % props.texts.length
      timeoutId = setTimeout(typeText, props.typeSpeed)
    }
  }
}

const startTyping = () => {
  resetAnimation()
  timeoutId = setTimeout(typeText, props.startDelay)
}

// Watch for texts changes and restart animation
watch(() => props.texts, () => {
  startTyping()
}, { deep: true })

onMounted(() => {
  startTyping()
})

onUnmounted(() => {
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})
</script>

<style scoped>
.cursor {
  font-weight: 100;
  color: currentColor;
  animation: blink 1s infinite;
}

.cursor-blink {
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
