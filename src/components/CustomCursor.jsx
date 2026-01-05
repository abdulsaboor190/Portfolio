import { useEffect, useRef, useState } from 'react'

// Lightweight cursor to reduce lag: single dot + subtle ring, no heavy animations
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let rafId
    let x = 0
    let y = 0

    const update = (e) => {
      x = e.clientX
      y = e.clientY
      if (!visible) setVisible(true)
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
        }
        if (ringRef.current) {
          ringRef.current.style.transform = `translate(${x - 10}px, ${y - 10}px)`
        }
      })
    }

    const hide = () => setVisible(false)
    const show = () => setVisible(true)

    window.addEventListener('mousemove', update, { passive: true })
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      window.removeEventListener('mousemove', update)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      cancelAnimationFrame(rafId)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-5 h-5 rounded-full border border-white/40 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transition: 'transform 80ms linear' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
        style={{ transition: 'transform 60ms linear' }}
      />
    </>
  )
}

