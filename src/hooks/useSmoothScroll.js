import { useEffect } from 'react'

// Lightweight smooth scroll: rely on native CSS smooth-behavior, no RAF loops.
export function useSmoothScroll() {
  useEffect(() => {
    const html = document.documentElement
    const prev = html.style.scrollBehavior
    html.style.scrollBehavior = 'smooth'
    return () => {
      html.style.scrollBehavior = prev
    }
  }, [])
}

