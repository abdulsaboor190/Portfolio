import { useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, X } from 'lucide-react'
import MonochromeBlobs from './MonochromeBlobs'

// Real project data (images are in public/Projects)
const projects = [
  {
    id: 1,
    title: 'FAST Past Papers Website',
    description: 'Responsive platform for FAST students to browse and download past papers.',
    longDescription:
      'Built a responsive academic resource hub with organized subjects, search, and fast access to downloadable past papers for FAST University students.',
    image: '/Projects/FastPastPapers.PNG',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON', 'Responsive Web Design'],
    github: 'https://github.com/abdulsaboor190/FAST-Past-Papers',
    demo: 'https://fast-past-papers.vercel.app',
    category: 'Web Platform',
  },
  {
    id: 2,
    title: 'GoTaxi – Online Ride Finding System',
    description: 'Ride-finding web app with modular architecture and booking simulation.',
    longDescription:
      'Designed a ride-finding experience similar to modern taxi platforms using React and JSON data. Focused on modular design, UI/UX, and booking flows for the Software Design and Analysis course.',
    image: '/Projects/GoTaxi.PNG',
    technologies: ['React.js', 'JavaScript', 'JSON', 'Software Design', 'UI/UX'],
    github: 'https://go-taxi-alpha.vercel.app/#/',
    demo: 'https://go-taxi-alpha.vercel.app/#/',
    category: 'Web App',
  },
  {
    id: 3,
    title: 'ChatNet – Real-Time Chatting Application',
    description: 'Group chat with voice calls, media sharing, and real-time updates.',
    longDescription:
      'Built for the Computer Networks course: real-time messaging with socket programming, Firebase backend, voice notes, media sharing, and group chat UX.',
    image: '/Projects/ChatNet.PNG',
    technologies: ['React.js', 'Firebase', 'Socket Programming', 'Real-Time Systems', 'Computer Networks'],
    github: 'https://github.com/abdulsaboor190/ChatNet',
    demo: null,
    category: 'Real-Time',
  },
  {
    id: 4,
    title: 'Fake News Analysis Using Graph Theory',
    description: 'Graph-based analysis for fake news detection (Gossip vs Lie datasets).',
    longDescription:
      'Constructed similarity and bipartite graphs to study structural patterns in fake news, applying graph theory metrics to differentiate gossip and lie datasets.',
    image: '/Projects/FakeNews.PNG',
    technologies: ['Graph Theory', 'Similarity Index', 'Bipartite Graphs', 'Data Analysis'],
    github: 'https://github.com/abdulsaboor190/FakeNews',
    demo: null,
    category: 'Data / Research',
  },
  {
    id: 5,
    title: 'Airline Simulation',
    description: 'C++ airline system simulation with multithreading and synchronization.',
    longDescription:
      'Simulated coordinated planes, runways, and control systems using mutexes and thread management to ensure safe concurrent operations.',
    image: '/Projects/AirlineSimulation.png',
    technologies: ['C++', 'Operating Systems', 'Multithreading', 'Synchronization', 'Logic Design'],
    github: 'https://github.com/abdulsaboor190/AirlineSimulation',
    demo: null,
    category: 'Systems',
  },
  {
    id: 6,
    title: 'GitHub Lite (Version Control System)',
    description: 'Lightweight VCS inspired by GitHub using advanced tree structures.',
    longDescription:
      'Implemented a simplified VCS in C++ leveraging Red-Black, AVL, and N-ary trees for efficient storage and retrieval of files and versions.',
    image: '/Projects/GithubLite.PNG',
    technologies: ['C++', 'Data Structures', 'Algorithms', 'File Management'],
    github: null,
    demo: null,
    category: 'Systems',
  },
  {
    id: 7,
    title: 'Zuma Deluxe (Assembly Language)',
    description: 'x86 Assembly implementation of a Zuma-inspired game.',
    longDescription:
      'Recreated core Zuma mechanics in x86 Assembly with focus on memory handling, low-level rendering, and gameplay loops.',
    image: '/Projects/ZumaDeluxe.PNG',
    technologies: ['Assembly Language', 'x86', 'Low-Level Programming', 'Game Logic'],
    github: 'https://github.com/abdulsaboor190/ZumaDeluxe',
    demo: null,
    category: 'Games / Low-Level',
  },
  {
    id: 8,
    title: 'Plants vs. Zombies',
    description: 'C++ take on Plants vs. Zombies with OOP principles.',
    longDescription:
      'Implemented core gameplay with inheritance, polymorphism, and encapsulation to model plants, zombies, and interactions.',
    image: '/Projects/PlantsVsZombies.PNG',
    technologies: ['C++', 'OOP', 'Game Logic', '2D Graphics'],
    github: 'https://github.com/abdulsaboor190/PlantsVsZombies',
    demo: null,
    category: 'Games',
  },
  {
    id: 9,
    title: 'Centipede Game',
    description: 'Console-based Centipede in C++ with collision and scoring.',
    longDescription:
      'Built a classic Centipede experience in the console with movement, enemy generation, collision detection, and score tracking.',
    image: '/Projects/Centipede.PNG',
    technologies: ['C++', 'Problem Solving', 'Game Logic'],
    github: 'https://github.com/abdulsaboor190/Centipede_Game_in_C',
    demo: null,
    category: 'Games',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => setIsHovered(true)}
          onClick={() => setIsModalOpen(true)}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          className="relative h-full cursor-pointer"
        >
          <div className="relative h-full glass-mono overflow-hidden p-6 transition-all duration-300 group-hover:border-white/25 group-hover:shadow-2xl group-hover:shadow-gray-500/30">
            {/* Image */}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-2 left-2 px-3 py-1 bg-gradient-to-r from-gray-600/60 to-gray-500/60 backdrop-blur-sm rounded-2xl text-xs font-semibold shadow-lg shadow-gray-800/30">
                {project.category}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isHovered ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-2xl border border-gray-500/30"
                >
                  {tech}
                </motion.span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-sm transition-colors"
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600/60 to-gray-500/60 rounded-2xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-gray-500/40"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>

            {/* 3D Effect Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/40 to-gray-500/40 rounded-2xl blur-xl opacity-20" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-mono p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-700 rounded-lg transition-colors"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <div className="flex gap-3">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Github size={20} />
                  <span>View Code</span>
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600/60 to-gray-500/60 rounded-2xl font-semibold"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-2 text-white tracking-tight">{project.title}</h2>
            <span className="inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-2xl text-sm mb-4 border border-gray-500/30">
              {project.category}
            </span>
            <p className="text-gray-300 mb-6 leading-relaxed">{project.longDescription}</p>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-2xl text-sm border border-gray-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="projects"
      className="section-padding relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] noise-overlay"
    >
      <MonochromeBlobs />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills and passion for creating innovative
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

