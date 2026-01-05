import Projects from '../components/Projects'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ProjectsPage() {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white min-h-screen">
      <Navigation />
      <Projects />
      <Footer />
    </div>
  )
}

