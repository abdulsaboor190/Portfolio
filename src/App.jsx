import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Loading from './components/Loading'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import SkillsPage from './pages/SkillsPage'
import CertificatesPage from './pages/CertificatesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCursor, setShowCursor] = useState(false)

  useSmoothScroll()

  useEffect(() => {
    // Show custom cursor only on desktop
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches
    setShowCursor(isDesktop)

    // Hide default cursor when custom cursor is active
    if (isDesktop) {
      document.body.style.cursor = 'none'
      return () => {
        document.body.style.cursor = 'auto'
      }
    }
  }, [])

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white min-h-screen">
          {showCursor && <CustomCursor />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      )}
    </Router>
  )
}

export default App
