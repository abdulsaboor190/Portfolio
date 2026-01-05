import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function TypingText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 80)
        return () => clearTimeout(timeout)
      } else {
        setIsComplete(true)
      }
    }, delay * 1000)

    return () => clearTimeout(startTimeout)
  }, [currentIndex, text, delay])

  return (
    <span className="inline-block">
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-8 bg-purple-400 ml-1"
        />
      )}
    </span>
  )
}

