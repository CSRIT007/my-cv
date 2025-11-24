<template>
  <div class="matrix-rain-container">
    <canvas 
      ref="matrixCanvas" 
      class="matrix-canvas"
      :width="canvasWidth" 
      :height="canvasHeight"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const matrixCanvas = ref(null)
const canvasWidth = ref(0)
const canvasHeight = ref(0)

let animationId = null
let drops = []

const props = defineProps({
  density: {
    type: Number,
    default: 0.8
  },
  speed: {
    type: Number,
    default: 1
  },
  opacity: {
    type: Number,
    default: 0.3
  }
})

// Matrix characters - mix of code symbols, numbers, and special characters
const matrixChars = [
  // Programming symbols
  '{', '}', '[', ']', '(', ')', '<', '>', 
  // Numbers
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  // Letters (some)
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  // Special programming characters
  '/', '\\', '|', '-', '_', '=', '+', '*', '&', '%', '$', '#', '@', '!',
  // Code-like symbols
  ';', ':', '.', ',', '?', '"', "'", '`', '~', '^'
]

const initCanvas = () => {
  const canvas = matrixCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  
  // Set canvas size
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight
  
  const fontSize = 14
  const columns = Math.floor(canvasWidth.value / fontSize)
  
  // Initialize drops array
  drops.length = 0
  for (let i = 0; i < columns * props.density; i++) {
    drops.push({
      x: Math.random() * canvasWidth.value,
      y: Math.random() * canvasHeight.value * -1, // Start above screen
      speed: Math.random() * 2 + props.speed,
      char: matrixChars[Math.floor(Math.random() * matrixChars.length)],
      opacity: Math.random() * 0.5 + 0.3
    })
  }

  const animate = () => {
    // Clear canvas with slight trail effect (theme-aware)
    const isDarkMode = document.documentElement.classList.contains('dark')
    ctx.fillStyle = isDarkMode ? `rgba(0, 0, 0, 0.05)` : `rgba(255, 255, 255, 0.08)`
    ctx.fillRect(0, 0, canvasWidth.value, canvasHeight.value)

    // Set text properties
    ctx.font = `${fontSize}px 'Courier New', monospace`
    ctx.textAlign = 'center'

    drops.forEach((drop, index) => {
      // Detect theme mode
      const isDarkMode = document.documentElement.classList.contains('dark')
      
      // Create gradient effect for each character with theme-aware colors
      const gradient = ctx.createLinearGradient(0, drop.y - 20, 0, drop.y + 20)
      
      if (isDarkMode) {
        // Dark mode: Classic green Matrix effect
        gradient.addColorStop(0, `rgba(0, 255, 0, 0)`)
        gradient.addColorStop(0.5, `rgba(0, 255, 0, ${drop.opacity * props.opacity})`)
        gradient.addColorStop(1, `rgba(0, 255, 0, 0)`)
      } else {
        // Light mode: Blue/cyan effect for better visibility
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`)
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${drop.opacity * props.opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
      }
      
      ctx.fillStyle = gradient

      // Draw character
      ctx.fillText(drop.char, drop.x, drop.y)

      // Update position
      drop.y += drop.speed

      // Reset drop when it goes off screen
      if (drop.y > canvasHeight.value + 20) {
        drop.y = Math.random() * -100 - 20
        drop.x = Math.random() * canvasWidth.value
        drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        drop.speed = Math.random() * 2 + props.speed
        drop.opacity = Math.random() * 0.5 + 0.3
      }

      // Occasionally change character while falling
      if (Math.random() < 0.01) {
        drop.char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
      }
    })

    animationId = requestAnimationFrame(animate)
  }

  animate()
}

const handleResize = () => {
  initCanvas()
}

onMounted(() => {
  initCanvas()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.matrix-rain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.matrix-canvas {
  display: block;
  background: transparent;
}
</style>
