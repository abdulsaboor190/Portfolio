import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Code, Rocket, Heart, Award, Lightbulb } from 'lucide-react'

const timelineEvents = [
  {
    id: 1,
    year: '2023',
    title: 'FAST NUCES — Islamabad',
    description:
      'Started CS at FAST Islamabad, grounding myself in programming fundamentals and problem solving.',
    icon: GraduationCap,
    color: 'from-gray-600 to-gray-500',
  },
  {
    id: 2,
    year: '2024',
    title: 'Shift to Karachi Campus',
    description:
      'Transitioned to FAST Karachi for broader exposure and collaboration on larger team projects.',
    icon: Rocket,
    color: 'from-gray-600 to-gray-500',
  },
  {
    id: 3,
    year: '2025',
    title: 'ML & Systems Focus',
    description:
      'Dove deep into machine learning, deep learning, and systems courses—pairing theory with hands-on builds.',
    icon: Lightbulb,
    color: 'from-gray-600 to-gray-500',
  },
  {
    id: 4,
    year: '2025',
    title: 'Capstone Projects',
    description:
      'Shipped GoTaxi, ChatNet, and graph-theory-based fake-news analysis, applying design, networking, and data rigor.',
    icon: Code,
    color: 'from-gray-600 to-gray-500',
  },
  {
    id: 5,
    year: '2026',
    title: 'Certifications & Craft',
    description:
      'Stacked ML/DL, NLP, data, and IBM career certifications to strengthen applied foundations.',
    icon: Award,
    color: 'from-gray-600 to-gray-500',
  },
]

function TimelineItem({ event, index, scrollYProgress }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const IconComponent = event.icon

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 mb-12`}
    >
      {/* Timeline Line */}
      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#2563eb] to-[#22d3ee] relative">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#22d3ee] origin-left"
        />
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shadow-lg`}
      >
        <IconComponent className="text-white" size={28} />
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${event.color} blur-xl opacity-50`} />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
        className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'text-center md:text-right' : 'text-center md:text-left'}`}
      >
        <div className="glass-mono p-6 hover:border-white/25 transition-all duration-300">
          <span className="text-gray-400 font-semibold text-sm">{event.year}</span>
          <h3 className="text-2xl font-bold text-white mt-2 mb-2">{event.title}</h3>
          <p className="text-gray-400">{event.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] noise-overlay"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey in computer science and what drives my passion for technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">My Story</h3>
            <p className="text-gray-300 leading-relaxed">
              I’m Abdul Saboor, a Computer Science student at FAST NUCES. I spent my first two years at the Islamabad campus, laying a strong foundation in algorithms, logic design, and programming. Midway through my degree I shifted to the Karachi campus to immerse myself in larger, more collaborative projects.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My curiosity pulled me toward machine learning and deep learning—fields where rigor meets creativity. I love designing systems that are both intelligent and dependable, whether that’s a ride-finding platform, a real-time chat app, or a graph-theory approach to detecting fake news.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Certifications in ML/DL, NLP, data analytics, and IBM career tracks keep me grounded in best practices, while projects in C++, assembly, and systems programming sharpen my low-level thinking. At the core, I’m driven by problem solving, elegant design, and the belief that well-crafted technology should feel effortless for the people who use it.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="glass-mono p-4">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-semibold">shahabdulsaboor208@gmail.com</p>
              </div>
              <div className="glass-mono p-4">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-semibold">0319 165 9370</p>
              </div>
              <div className="glass-mono p-4">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/abdul-saboor-a572a0289/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                >
                  abdul-saboor-a572a0289
                </a>
              </div>
              <div className="glass-mono p-4">
                <p className="text-sm text-gray-400">GitHub</p>
                <a
                  href="https://github.com/abdulsaboor190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:underline"
                >
                  github.com/abdulsaboor190
                </a>
              </div>
            </div>
          </motion.div>

          {/* Photo with Creative Effects */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/saboor.jfif"
                alt="Abdul Saboor"
                className="w-full h-full object-cover"
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.15), transparent)',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  padding: '4px',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* What Drives Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">What Drives Me</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Heart,
                title: 'Passion for Innovation',
                description: 'I love exploring new technologies and finding creative solutions to complex problems.',
                color: 'from-gray-600 to-gray-500',
              },
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Writing maintainable, efficient code that others can understand and build upon.',
                color: 'from-gray-600 to-gray-500',
              },
              {
                icon: Rocket,
                title: 'Continuous Growth',
                description: 'Always learning, always improving, and never settling for good enough.',
                color: 'from-gray-600 to-gray-500',
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="glass-mono p-6 hover:border-white/25 transition-all duration-300"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <h3 className="text-3xl font-bold text-white mb-12 text-center">My Journey</h3>
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#2563eb] via-[#06b6d4] to-[#22d3ee] opacity-20" />

            {/* Timeline Items */}
            <div className="space-y-0">
              {timelineEvents.map((event, index) => (
                <TimelineItem
                  key={event.id}
                  event={event}
                  index={index}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

