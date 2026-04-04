import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          // Stagger children if .stagger class
          if (el.classList.contains('stagger')) {
            Array.from(el.children).forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 110)
            })
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

// Hook to observe multiple elements
export function useRevealAll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('visible')
          if (entry.target.classList.contains('stagger')) {
            Array.from(entry.target.children).forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 110)
            })
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger')
    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
