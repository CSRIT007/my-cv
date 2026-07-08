export function useTypedRoles(roles: readonly string[]) {
  const displayedRole = ref(roles[0] ?? '')
  let roleIndex = 0
  let characterIndex = displayedRole.value.length
  let deleting = true
  let timer: ReturnType<typeof setTimeout> | undefined

  const schedule = (callback: () => void, delay: number) => {
    timer = setTimeout(callback, delay)
  }

  const tick = () => {
    const currentRole = roles[roleIndex] ?? ''

    if (deleting) {
      characterIndex = Math.max(0, characterIndex - 1)
      displayedRole.value = currentRole.slice(0, characterIndex)

      if (characterIndex === 0) {
        roleIndex = (roleIndex + 1) % roles.length
        deleting = false
        schedule(tick, 300)
        return
      }

      schedule(tick, 35)
      return
    }

    const nextRole = roles[roleIndex] ?? ''
    characterIndex = Math.min(nextRole.length, characterIndex + 1)
    displayedRole.value = nextRole.slice(0, characterIndex)

    if (characterIndex === nextRole.length) {
      deleting = true
      schedule(tick, 1800)
      return
    }

    schedule(tick, 70)
  }

  onMounted(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || roles.length < 2) return

    schedule(tick, 1800)
  })

  onUnmounted(() => {
    if (timer) clearTimeout(timer)
  })

  return { displayedRole }
}
