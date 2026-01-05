import { useState, useEffect } from 'react'

export default function TypingAnimation({ texts, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(speed)

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex]

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setTypingSpeed(deleteSpeed)
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setTypingSpeed(speed)
      }

      if (!isDeleting && currentText === fullText) {
        setTypingSpeed(pauseTime)
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseTime, typingSpeed])

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

