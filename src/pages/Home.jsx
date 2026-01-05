import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  Briefcase, 
  Code, 
  Award, 
  User, 
  Mail, 
  ArrowRight,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react'
import MonochromeBlobs from '../components/MonochromeBlobs'
import WaveDivider from '../components/WaveDivider'

const navigationCards = [
  {
    id: 'projects',
    title: 'Projects',
    subtitle: 'Portfolio',
    description: 'Explore my creative work and innovative solutions',
    icon: Briefcase,
    delay: 0.1,
  },
  {
    id: 'skills',
    title: 'Skills',
    subtitle: 'Expertise',
    description: 'Technical proficiency and competencies',
    icon: Code,
    delay: 0.2,
  },
  {
    id: 'certificates',
    title: 'Certificates',
    subtitle: 'Achievements',
    description: 'Professional credentials and certifications',
    icon: Award,
    delay: 0.3,
  },
  {
    id: 'about',
    title: 'About',
    subtitle: 'Story',
    description: 'My journey and passion for technology',
    icon: User,
    delay: 0.4,
  },
  {
    id: 'contact',
    title: 'Contact',
    subtitle: 'Connect',
    description: 'Let\'s build something amazing together',
    icon: Mail,
    delay: 0.5,
  },
]

export default function Home() {
  const navigate = useNavigate()

  const handleCardClick = (path) => {
    navigate(`/${path}`)
  }

  return (
    <div className="relative min-h-screen overflow-hidden noise-overlay">
      {/* Monochrome Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] z-0" />
      
      {/* Subtle Noise/Grain Texture */}
      <div className="fixed inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] z-0" />
      
      {/* Animated Monochrome Blobs */}
      <MonochromeBlobs />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section - BOLD TYPOGRAPHY */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-5xl mx-auto"
        >
          {/* Name - EXTRA BOLD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
              <span className="text-white">
                Abdul Saboor
              </span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl text-gray-400 font-light tracking-wide">
              <span>CS @ FAST NUCES • ML / DL & Systems Enthusiast</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed tracking-wide"
          >
            Building reliable software with a blend of machine learning rigor, systems thinking, and human-centered design.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            {[
              { icon: Github, href: 'https://github.com/abdulsaboor190', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-saboor-a572a0289/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:shahabdulsaboor208@gmail.com', label: 'Email' },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-white/8 backdrop-blur-xl rounded-3xl border border-white/15 hover:border-white/25 hover:bg-white/12 transition-all duration-300 shadow-2xl shadow-gray-800/20"
                  aria-label={social.label}
                >
                  <IconComponent size={22} className="text-gray-300 hover:text-white transition-colors" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Navigation Cards Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {navigationCards.map((card) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: card.delay,
                    type: 'spring',
                    stiffness: 100,
                  }}
                  whileHover={{ 
                    scale: 1.03, 
                    y: -10,
                    rotate: 3,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(card.id)}
                  className="group relative p-10 glass-mono cursor-pointer overflow-hidden transition-all duration-500 shadow-2xl shadow-gray-500/20 hover:shadow-gray-500/30"
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gray-600/40 to-slate-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex p-5 rounded-3xl bg-gradient-to-br from-gray-600/60 to-gray-500/60 mb-6 shadow-lg shadow-gray-800/30"
                    >
                      <IconComponent className="text-white" size={32} />
                    </motion.div>

                    {/* Subtitle */}
                    <p className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      {card.subtitle}
                    </p>

                    {/* Title - BOLD */}
                    <h2 className="text-4xl font-black mb-4 text-white tracking-tight">
                      {card.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-400 mb-8 leading-relaxed text-white/70">
                      {card.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                      <span className="text-sm font-semibold tracking-wide">Explore</span>
                      <ArrowRight 
                        size={20} 
                        className="transform group-hover:translate-x-2 transition-transform"
                      />
                    </div>
                  </div>

                  {/* Decorative Glow Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center text-gray-500 text-sm tracking-wide"
        >
          <p>Select a section to explore</p>
        </motion.div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider />
      </div>
    </div>
  )
}
