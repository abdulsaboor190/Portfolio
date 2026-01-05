import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Layers, Database, Brain, MessageSquare, Cloud, Cpu, Network, BookOpen, PenTool } from 'lucide-react'

const categories = [
  {
    title: 'Frontend Development',
    icon: Code,
    summary: 'Modern web interfaces with responsive design and UX focus.',
    skills: [
      { name: 'React.js & Component Architecture', level: 92 },
      { name: 'HTML5 / CSS3 / JavaScript (ES6+)', level: 90 },
      { name: 'Responsive Design & UI/UX', level: 88 },
      { name: 'Tailwind CSS / Framer Motion', level: 85 },
    ],
  },
  {
    title: 'Backend & Databases',
    icon: Layers,
    summary: 'Server-side architecture, APIs, and data management.',
    skills: [
      { name: 'Firebase (Auth, Realtime DB)', level: 85 },
      { name: 'SQL & Database Design', level: 82 },
      { name: 'JSON-Based Data Handling', level: 88 },
      { name: 'RESTful API Design', level: 80 },
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    icon: Brain,
    summary: 'Supervised learning, neural networks, and model optimization.',
    skills: [
      { name: 'ML Algorithms & Model Evaluation', level: 88 },
      { name: 'Deep Learning & Neural Networks', level: 86 },
      { name: 'Keras & Scikit-learn', level: 85 },
      { name: 'Regression & Classification', level: 87 },
    ],
  },
  {
    title: 'Natural Language Processing',
    icon: MessageSquare,
    summary: 'Text analysis, classification, and chatbot development.',
    skills: [
      { name: 'NLP Pipelines & Text Classification', level: 84 },
      { name: 'Vector Space Models', level: 82 },
      { name: 'Chatbot Development', level: 85 },
      { name: 'Similarity Measures', level: 80 },
    ],
  },
  {
    title: 'Data Science & Analytics',
    icon: Database,
    summary: 'Data analysis, visualization, and statistical modeling.',
    skills: [
      { name: 'Data Analysis & Visualization', level: 86 },
      { name: 'Statistical Analysis & Regression', level: 84 },
      { name: 'Python (Pandas, NumPy)', level: 88 },
      { name: 'Excel & Cognos Analytics', level: 80 },
    ],
  },
  {
    title: 'MLOps & Cloud',
    icon: Cloud,
    summary: 'Model deployment, cloud infrastructure, and operations.',
    skills: [
      { name: 'MLOps Fundamentals', level: 78 },
      { name: 'Python for MLOps', level: 82 },
      { name: 'Azure Cloud Fundamentals', level: 75 },
      { name: 'Model Deployment Concepts', level: 80 },
    ],
  },
  {
    title: 'Systems & Low-Level',
    icon: Cpu,
    summary: 'OS concepts, multithreading, and low-level programming.',
    skills: [
      { name: 'C++ / Multithreading & Synchronization', level: 85 },
      { name: 'Operating Systems Concepts', level: 83 },
      { name: 'Assembly Language (x86)', level: 78 },
      { name: 'Memory Management', level: 80 },
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    icon: BookOpen,
    summary: 'Advanced data structures and algorithm optimization.',
    skills: [
      { name: 'Trees (AVL, Red-Black, N-ary)', level: 88 },
      { name: 'Graph Theory & Algorithms', level: 85 },
      { name: 'Algorithm Design & Optimization', level: 87 },
      { name: 'Arrays, Linked Lists, Trees', level: 90 },
    ],
  },
  {
    title: 'Networking & Distributed Systems',
    icon: Network,
    summary: 'Network fundamentals and real-time communication.',
    skills: [
      { name: 'Computer Networks Fundamentals', level: 82 },
      { name: 'Socket Programming', level: 80 },
      { name: 'Real-Time Communication', level: 78 },
      { name: 'Distributed Systems Concepts', level: 75 },
    ],
  },
]

const programmingLanguages = [
  { name: 'Python', level: 88 },
  { name: 'C++', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'C', level: 82 },
  { name: 'Assembly (x86)', level: 78 },
  { name: 'SQL', level: 82 },
]

const toolsAndFrameworks = [
  'React.js',
  'Node.js',
  'Firebase',
  'Keras',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'TensorFlow',
  'Azure',
  'Git / GitHub',
  'Tailwind CSS',
  'Framer Motion',
  'Express',
  'Socket.io',
  'Excel',
  'Cognos',
  'VS Code',
  'Linux',
]

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section
      ref={ref}
      id="skills"
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
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-4">Technical Expertise</p>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, machine learning, data science, 
            and systems programming—optimized for building intelligent, scalable, and performant solutions.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="glass-mono p-6 h-full shadow-2xl shadow-gray-800/20 hover:shadow-gray-700/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/15 group-hover:bg-white/15 transition-colors">
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1">{cat.title}</h3>
                    <p className="text-sm text-gray-400">{cat.summary}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm text-gray-300 mb-1">
                        <span className="text-xs">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: idx * 0.05 + 0.3 }}
                          className="h-full bg-gradient-to-r from-gray-500/70 to-gray-300/70 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-mono p-6 mb-8 shadow-2xl shadow-gray-800/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <PenTool className="text-white" size={24} />
            <div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Programming Languages</h4>
              <p className="text-sm text-gray-400">Core languages for diverse project requirements</p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programmingLanguages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
                className="text-center"
              >
                <div className="text-3xl font-black text-white mb-1">{lang.level}%</div>
                <div className="text-sm text-gray-400">{lang.name}</div>
                <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + idx * 0.05 }}
                    className="h-full bg-gradient-to-r from-gray-500/70 to-gray-300/70"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-mono p-6 shadow-2xl shadow-gray-800/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-white" size={24} />
            <div>
              <h4 className="text-2xl font-bold text-white tracking-tight">Tools & Frameworks</h4>
              <p className="text-sm text-gray-400">Technologies that power my development workflow</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {toolsAndFrameworks.map((tool, idx) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + idx * 0.02 }}
                className="px-4 py-2 rounded-2xl bg-white/8 text-white/80 text-sm border border-white/10 hover:border-white/20 hover:bg-white/12 transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}