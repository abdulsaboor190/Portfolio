import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, X, Award, Brain, MessageSquare, Code, Cloud, Database, Briefcase, BookOpen } from 'lucide-react'
import MonochromeBlobs from './MonochromeBlobs'

const certificateCategories = {
  'Machine Learning & Deep Learning': {
    icon: Brain,
    certificates: [
      {
        id: 1,
        title: 'Advanced Machine Learning, Big Data, and Deep Learning',
        issuer: 'Packt',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera 8KZ84WENCR7X.pdf',
        credentialId: '8KZ84WENCR7X',
        description: 'Comprehensive course covering advanced ML techniques, big data processing, and deep learning architectures.',
        link: 'https://www.coursera.org/account/accomplishments/verify/8KZ84WENCR7X',
      },
      {
        id: 2,
        title: 'Introduction to Deep Learning & Neural Networks with Keras',
        issuer: 'IBM',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera 8JPNNWATNGQ3.pdf',
        credentialId: '8JPNNWATNGQ3',
        description: 'Foundational knowledge of deep learning and neural networks using Keras framework.',
        link: 'https://www.coursera.org/account/accomplishments/records/8JPNNWATNGQ3',
      },
      {
        id: 3,
        title: 'Introduction to Machine Learning',
        issuer: 'Duke University',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera FTZ9ZNNCU0ZM.pdf',
        credentialId: 'FTZ9ZNNCU0ZM',
        description: 'Core concepts and algorithms of machine learning from Duke University.',
        link: 'https://www.coursera.org/account/accomplishments/verify/FTZ9ZNNCU0ZM',
      },
      {
        id: 4,
        title: 'Introduction to Neural Networks',
        issuer: 'The Johns Hopkins University',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera DAE4K4F7T8AB.pdf',
        credentialId: 'DAE4K4F7T8AB',
        description: 'Understanding neural network architectures and their applications.',
        link: 'https://www.coursera.org/account/accomplishments/verify/DAE4K4F7T8AB',
      },
      {
        id: 5,
        title: 'Neural Networks and Deep Learning',
        issuer: 'DeepLearning.AI',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera O64KKCY3J818.pdf',
        credentialId: 'O64KKCY3J818',
        description: 'Deep dive into neural networks and deep learning fundamentals.',
        link: 'https://www.coursera.org/account/accomplishments/verify/O64KKCY3J818',
      },
      {
        id: 6,
        title: 'Supervised Machine Learning: Regression and Classification',
        issuer: 'DeepLearning.AI',
        date: 'Oct 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera PF2CDZWERVUG.pdf',
        credentialId: 'PF2CDZWERVUG',
        description: 'Master supervised learning algorithms for regression and classification tasks.',
        link: 'https://www.coursera.org/account/accomplishments/verify/PF2CDZWERVUG',
      },
      {
        id: 7,
        title: 'Scikit-Learn to Solve Regression Machine Learning Problems',
        issuer: 'Coursera',
        date: 'Dec 2025',
        category: 'Machine Learning & Deep Learning',
        image: '/Certificates/Coursera ZDNJJPRD2PFF.pdf',
        credentialId: 'ZDNJJPRD2PFF',
        description: 'Practical application of Scikit-Learn for solving regression problems.',
        link: 'https://www.coursera.org/account/accomplishments/verify/ZDNJJPRD2PFF',
      },
    ],
  },
  'Natural Language Processing & Chatbots': {
    icon: MessageSquare,
    certificates: [
      {
        id: 8,
        title: 'Chatbots with Keras & NLP: Build & Evaluate',
        issuer: 'EDUCBA',
        date: 'Dec 2025',
        category: 'Natural Language Processing & Chatbots',
        image: '/Certificates/Coursera HZBVQTXUNTYM.pdf',
        credentialId: 'HZBVQTXUNTYM',
        description: 'Build and evaluate chatbots using Keras and natural language processing techniques.',
        link: 'https://www.coursera.org/account/accomplishments/verify/HZBVQTXUNTYM',
      },
      {
        id: 9,
        title: 'Natural Language Processing with Classification and Vector Spaces',
        issuer: 'DeepLearning.AI',
        date: 'Dec 2025',
        category: 'Natural Language Processing & Chatbots',
        image: '/Certificates/Coursera AG9CD0AG23QM.pdf',
        credentialId: 'AG9CD0AG23QM',
        description: 'NLP techniques including text classification and vector space models.',
        link: 'https://www.coursera.org/account/accomplishments/verify/AG9CD0AG23QM',
      },
    ],
  },
  'Python & MLOps': {
    icon: Code,
    certificates: [
      {
        id: 10,
        title: 'Python Essentials for MLOps',
        issuer: 'Duke University',
        date: 'Dec 2025',
        category: 'Python & MLOps',
        image: '/Certificates/Coursera TCANXTOUMHBN.pdf',
        credentialId: 'TCANXTOUMHBN',
        description: 'Essential Python skills for Machine Learning Operations and deployment.',
        link: 'https://www.coursera.org/account/accomplishments/verify/TCANXTOUMHBN',
      },
      {
        id: 11,
        title: 'Get Started with Python',
        issuer: 'Google',
        date: 'Nov 2025',
        category: 'Python & MLOps',
        image: '/Certificates/Coursera I4QBWOZA75JO.pdf',
        credentialId: 'I4QBWOZA75JO',
        description: 'Foundational Python programming skills from Google.',
        link: 'https://www.coursera.org/account/accomplishments/verify/I4QBWOZA75JO',
      },
      {
        id: 12,
        title: 'Python Project for Data Science',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Python & MLOps',
        image: '/Certificates/Coursera 95P8XBX0DW5W.pdf',
        credentialId: '95P8XBX0DW5W',
        description: 'Hands-on Python projects for data science applications.',
        link: 'https://www.coursera.org/account/accomplishments/verify/95P8XBX0DW5W',
      },
      {
        id: 13,
        title: 'Python for Data Science, AI & Development',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Python & MLOps',
        image: '/Certificates/Coursera 8W84CXEKQ2SB.pdf',
        credentialId: '8W84CXEKQ2SB',
        description: 'Comprehensive Python course for data science, AI, and software development.',
        link: 'https://www.coursera.org/account/accomplishments/verify/8W84CXEKQ2SB',
      },
    ],
  },
  'Cloud & Computing Essentials': {
    icon: Cloud,
    certificates: [
      {
        id: 14,
        title: 'Cloud Computing Essentials with Azure Management',
        issuer: 'Microsoft',
        date: 'Dec 2025',
        category: 'Cloud & Computing Essentials',
        image: '/Certificates/Coursera UBZ6TDM8QCTJ.pdf',
        credentialId: 'UBZ6TDM8QCTJ',
        description: 'Essential cloud computing concepts and Azure management practices.',
        link: 'https://www.coursera.org/account/accomplishments/verify/UBZ6TDM8QCTJ',
      },
      {
        id: 15,
        title: 'Learn MLOps for Machine Learning',
        issuer: 'Pearson',
        date: 'Dec 2025',
        category: 'Cloud & Computing Essentials',
        image: '/Certificates/Coursera 1VXSPDBOF3B1.pdf',
        credentialId: '1VXSPDBOF3B1',
        description: 'MLOps practices for deploying and managing machine learning models.',
        link: 'https://www.coursera.org/account/accomplishments/verify/1VXSPDBOF3B1',
      },
    ],
  },
  'Data Analytics & Data Science': {
    icon: Database,
    certificates: [
      {
        id: 16,
        title: 'Data Visualization and Dashboards with Excel and Cognos',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera 1ZN4S2YLQBWM.pdf',
        credentialId: '1ZN4S2YLQBWM',
        description: 'Create compelling data visualizations and dashboards using Excel and Cognos.',
        link: 'https://www.coursera.org/account/accomplishments/verify/1ZN4S2YLQBWM',
      },
      {
        id: 17,
        title: 'Data Visualization with Python',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera 5PLZFVEVKUB9.pdf',
        credentialId: '5PLZFVEVKUB9',
        description: 'Advanced data visualization techniques using Python libraries.',
        link: 'https://www.coursera.org/account/accomplishments/verify/5PLZFVEVKUB9',
      },
      {
        id: 18,
        title: 'Databases and SQL for Data Science with Python',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera 50MYSTN1L0QN.pdf',
        credentialId: '50MYSTN1L0QN',
        description: 'Database management and SQL queries for data science workflows.',
        link: 'https://www.coursera.org/account/accomplishments/verify/50MYSTN1L0QN',
      },
      {
        id: 19,
        title: 'Excel Basics for Data Analysis',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera 87XL6IN94CDE.pdf',
        credentialId: '87XL6IN94CDE',
        description: 'Fundamental Excel skills for data analysis and manipulation.',
        link: 'https://www.coursera.org/account/accomplishments/verify/87XL6IN94CDE',
      },
      {
        id: 20,
        title: 'Foundations of Data Science',
        issuer: 'Google',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera RWWYPCBFFFXY.pdf',
        credentialId: 'RWWYPCBFFFXY',
        description: 'Core foundations of data science from Google.',
        link: 'https://www.coursera.org/account/accomplishments/verify/RWWYPCBFFFXY',
      },
      {
        id: 21,
        title: 'Regression Analysis: Simplify Complex Data Relationships',
        issuer: 'Google',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera IAFEWADS7YJ8.pdf',
        credentialId: 'IAFEWADS7YJ8',
        description: 'Master regression analysis techniques for understanding data relationships.',
        link: 'https://www.coursera.org/account/accomplishments/verify/IAFEWADS7YJ8',
      },
      {
        id: 22,
        title: 'The Power of Statistics',
        issuer: 'Google',
        date: 'Nov 2025',
        category: 'Data Analytics & Data Science',
        image: '/Certificates/Coursera 1C87VSK9FOUO.pdf',
        credentialId: '1C87VSK9FOUO',
        description: 'Statistical methods and their applications in data analysis.',
        link: 'https://www.coursera.org/account/accomplishments/verify/1C87VSK9FOUO',
      },
    ],
  },
  'IBM Career & AI Certifications': {
    icon: Briefcase,
    certificates: [
      {
        id: 23,
        title: 'IBM Data Analyst',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'IBM Career & AI Certifications',
        image: '/Certificates/Coursera TEQL5NR120SH.pdf',
        credentialId: 'TEQL5NR120SH',
        description: 'Professional IBM Data Analyst specialization certificate.',
        link: 'https://www.coursera.org/account/accomplishments/specialization/TEQL5NR120SH',
      },
      {
        id: 24,
        title: 'IBM Data Analyst Capstone Project',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'IBM Career & AI Certifications',
        image: '/Certificates/Coursera JIA18HJW6UQ1.pdf',
        credentialId: 'JIA18HJW6UQ1',
        description: 'Capstone project demonstrating comprehensive data analysis skills.',
        link: 'https://www.coursera.org/account/accomplishments/verify/JIA18HJW6UQ1',
      },
      {
        id: 25,
        title: 'Introduction to Data Analytics',
        issuer: 'IBM',
        date: 'Nov 2025',
        category: 'IBM Career & AI Certifications',
        image: '/Certificates/Coursera PCET0I2FI2QA.pdf',
        credentialId: 'PCET0I2FI2QA',
        description: 'Introduction to data analytics concepts and methodologies.',
        link: 'https://www.coursera.org/account/accomplishments/verify/PCET0I2FI2QA',
      },
      {
        id: 26,
        title: 'Data Analyst Career Guide and Interview Preparation',
        issuer: 'IBM',
        date: 'Oct 2025',
        category: 'IBM Career & AI Certifications',
        image: '/Certificates/Coursera 07A3CVRP1SHC.pdf',
        credentialId: '07A3CVRP1SHC',
        description: 'Career guidance and interview preparation for data analyst roles.',
        link: 'https://www.coursera.org/account/accomplishments/verify/07A3CVRP1SHC',
      },
      {
        id: 27,
        title: 'Generative AI: Enhance your Data Analytics Career',
        issuer: 'IBM',
        date: 'Oct 2025',
        category: 'IBM Career & AI Certifications',
        image: '/Certificates/Coursera GQMT6NNIZYSI.pdf',
        credentialId: 'GQMT6NNIZYSI',
        description: 'Leverage generative AI to advance your data analytics career.',
        link: 'https://www.coursera.org/account/accomplishments/verify/GQMT6NNIZYSI',
      },
    ],
  },
  'Research & Academic Skills': {
    icon: BookOpen,
    certificates: [
      {
        id: 28,
        title: 'How to Write a Research Paper',
        issuer: 'Higher Education Commission, Pakistan',
        date: 'Oct 2025',
        category: 'Research & Academic Skills',
        image: '/Certificates/Coursera NN9EPRL6CGFG.pdf',
        credentialId: 'NN9EPRL6CGFG',
        description: 'Comprehensive guide to writing academic research papers.',
        link: 'https://www.coursera.org/account/accomplishments/verify/NN9EPRL6CGFG',
      },
      {
        id: 29,
        title: 'Understanding Research Methods',
        issuer: 'SOAS University of London',
        date: 'Oct 2025',
        category: 'Research & Academic Skills',
        image: '/Certificates/Coursera DQYJ42KHXN0B.pdf',
        credentialId: 'DQYJ42KHXN0B',
        description: 'Fundamental research methodologies and their applications.',
        link: 'https://www.coursera.org/account/accomplishments/verify/DQYJ42KHXN0B',
      },
      {
        id: 30,
        title: 'AI For Everyone',
        issuer: 'DeepLearning.AI',
        date: 'Oct 2025',
        category: 'Research & Academic Skills',
        image: '/Certificates/Coursera 7BNOZB40BYUW.pdf',
        credentialId: '7BNOZB40BYUW',
        description: 'Introduction to AI concepts for non-technical audiences.',
        link: 'https://www.coursera.org/account/accomplishments/verify/7BNOZB40BYUW',
      },
    ],
  },
}

// Flatten all certificates for filtering
const allCertificates = Object.values(certificateCategories).flatMap((cat) => cat.certificates)

const categories = ['All', ...Object.keys(certificateCategories)]

function CertificateCard({ certificate, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
        transition={{ duration: 0.5, delay: index * 0.05 }}
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer"
      >
        <div className="relative h-full glass-mono overflow-hidden p-6 transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-gray-500/30">
          {/* Certificate Icon */}
          <div className="relative w-full h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
            <Award className="text-gray-600" size={64} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-2 right-2">
              <Award className="text-gray-400" size={24} />
            </div>
            <div className="absolute bottom-2 left-2 px-3 py-1 bg-gradient-to-r from-gray-600/80 to-gray-500/80 backdrop-blur-sm rounded-2xl text-xs font-semibold">
              {certificate.category.split(' ')[0]}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-white transition-colors line-clamp-2">
            {certificate.title}
          </h3>
          <p className="text-gray-400 text-sm mb-2">{certificate.issuer}</p>
          <p className="text-gray-500 text-xs mb-4">Issued: {certificate.date}</p>

          {/* View Details Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600/60 to-gray-500/60 rounded-2xl text-sm font-semibold"
          >
            <span>View Details</span>
            <ExternalLink size={16} />
          </motion.div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600/40 to-gray-500/40 rounded-2xl blur-xl opacity-20" />
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <CertificateModal
          certificate={certificate}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  )
}

function CertificateModal({ certificate, onClose }) {
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
        className="relative max-w-3xl w-full glass-mono p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-2xl transition-colors"
        >
          <X size={24} className="text-white" />
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center">
              <Award className="text-gray-600" size={80} />
              <div className="absolute top-4 right-4">
                <Award className="text-gray-400" size={32} />
              </div>
            </div>
            <motion.a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600/60 to-gray-500/60 rounded-2xl font-semibold"
            >
              <span>Verify Certificate</span>
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 px-6 py-3 mt-3 glass-mono border border-white/20 rounded-2xl font-semibold hover:border-white/30 transition-all"
            >
              <span>View PDF</span>
              <ExternalLink size={20} />
            </motion.a>
          </div>

          <div>
            <h2 className="text-3xl font-black mb-2 text-white tracking-tight">{certificate.title}</h2>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-2xl text-sm border border-gray-500/30">
                {certificate.category}
              </span>
              <span className="text-gray-400 text-sm">Issued: {certificate.date}</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{certificate.description}</p>

            <div className="glass-mono p-4 mb-4">
              <p className="text-sm text-gray-400 mb-1">Issued by</p>
              <p className="text-lg font-semibold text-white">{certificate.issuer}</p>
            </div>

            <div className="glass-mono p-4">
              <p className="text-sm text-gray-400 mb-1">Credential ID</p>
              <p className="text-sm font-mono text-gray-300">{certificate.credentialId}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function CategorySection({ categoryName, categoryData, index }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const IconComponent = categoryData.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-16"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="p-4 rounded-3xl bg-gradient-to-r from-gray-600/60 to-gray-500/60">
          <IconComponent className="text-white" size={32} />
        </div>
        <div>
          <h3 className="text-3xl font-black text-white tracking-tight mb-1">{categoryName}</h3>
          <p className="text-gray-400">{categoryData.certificates.length} certificates</p>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.certificates.map((certificate, certIndex) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={certIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredCertificates =
    selectedCategory === 'All'
      ? allCertificates
      : allCertificates.filter((cert) => cert.category === selectedCategory)

  const filteredCategories =
    selectedCategory === 'All'
      ? certificateCategories
      : { [selectedCategory]: certificateCategories[selectedCategory] }

  return (
    <section
      ref={ref}
      id="certificates"
      className="section-padding relative bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] noise-overlay"
    >
      <MonochromeBlobs />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 text-white tracking-tight">
            Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Professional credentials validating my expertise and continuous learning journey
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-2xl font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-gray-600/60 to-gray-500/60 text-white'
                    : 'bg-white/8 text-gray-400 hover:text-white hover:bg-white/12 border border-white/15'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certificates by Category */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedCategory === 'All' ? (
              // Show all categories grouped
              Object.entries(certificateCategories).map(([categoryName, categoryData], index) => (
                <CategorySection
                  key={categoryName}
                  categoryName={categoryName}
                  categoryData={categoryData}
                  index={index}
                />
              ))
            ) : (
              // Show filtered category
              filteredCategories[selectedCategory] && (
                <CategorySection
                  categoryName={selectedCategory}
                  categoryData={filteredCategories[selectedCategory]}
                  index={0}
                />
              )
            )}
          </motion.div>
        </AnimatePresence>

        {selectedCategory !== 'All' && filteredCertificates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No certificates found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
