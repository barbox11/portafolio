import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(elRef, options = { threshold: 0.1 }) {
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(el)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { isVisible }
}