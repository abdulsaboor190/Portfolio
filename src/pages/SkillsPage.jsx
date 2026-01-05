import Skills from '../components/Skills'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function SkillsPage() {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white min-h-screen">
      <Navigation />
      <Skills />
      <Footer />
    </div>
  )
}

