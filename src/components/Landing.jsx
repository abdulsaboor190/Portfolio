import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FloatingShapes } from './3D/FloatingShapes'
import { InteractiveParticles } from './3D/InteractiveParticles'
import { TypingText } from './TypingText'
import { Code, Briefcase, Award, User, Mail, Github, Linkedin, FileText } from 'lucide-react'

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
      <FloatingShapes />
      <InteractiveParticles count={150} />
    </>
  )
}

const navigationCards = [
  {
    id: 'projects',
    title: 'Projects',
    description: 'Explore my work',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    href: '#projects',
  },
  {
    id: 'skills',
    title: 'Skills',
    description: 'Technical expertise',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    href: '#skills',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    description: 'Achievements & credentials',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
    href: '#certificates',
  },
  {
    id: 'about',
    title: 'About Me',
    description: 'My story & journey',
    icon: User,
    color: 'from-green-500 to-emerald-500',
    href: '#about',
  },
]

export default function Landing() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      // Use Lenis for smooth scroll if available
      if (window.lenis) {
        window.lenis.scrollTo(targetId, { offset: -80 })
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      {/* Enhanced 3D Canvas - Reduced opacity for better performance */}
      <div className="absolute inset-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }} performance={{ min: 0.5 }}>
          <Scene3D />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-purple-400 text-lg font-semibold mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[gradient_5s_ease_infinite]">
                  [Your Name]
                </span>
              </h1>
            </motion.div>

            {/* Role/Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-2xl md:text-3xl text-white/90 font-light mb-4 min-h-[3rem]"
            >
              <TypingText text="Full Stack Developer & CS Student" delay={1} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-white/70 leading-relaxed max-w-xl"
            >
              Passionate about creating innovative solutions that blend creativity with
              cutting-edge technology. I love building applications that make a difference.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex gap-6 flex-wrap"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-gray-400">Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-purple-500/50 transition-all"
              >
                <Github size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-purple-500/50 transition-all"
              >
                <Linkedin size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:border-purple-500/50 transition-all"
              >
                <Mail size={24} className="text-white" />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"
              >
                <FileText size={24} className="text-white" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Navigation Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {navigationCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleSmoothScroll(e, card.href)}
                  className="group relative p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 cursor-pointer transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  
                  {/* Icon */}
                  <div className={`relative z-10 inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color} mb-4`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-400">{card.description}</p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-6 h-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

