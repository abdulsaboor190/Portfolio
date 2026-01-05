import { motion } from 'framer-motion'

export default function MonochromeBlobs() {
  const blobs = [
    {
      id: 1,
      className: 'blob-gradient-1',
      size: 'w-80 h-80',
      position: 'top-20 left-10',
      animation: 'blob',
      delay: 0,
      blur: 'blur-[80px]',
    },
    {
      id: 2,
      className: 'blob-gradient-2',
      size: 'w-96 h-96',
      position: 'top-1/2 right-20',
      animation: 'blob-2',
      delay: 2,
      blur: 'blur-[100px]',
    },
    {
      id: 3,
      className: 'blob-gradient-3',
      size: 'w-72 h-72',
      position: 'bottom-20 left-1/3',
      animation: 'blob-3',
      delay: 4,
      blur: 'blur-[90px]',
    },
    {
      id: 4,
      className: 'blob-gradient-1',
      size: 'w-64 h-64',
      position: 'top-1/3 right-1/4',
      animation: 'blob',
      delay: 1,
      blur: 'blur-[70px]',
    },
  ]

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} ${blob.position} ${blob.className} ${blob.blur} rounded-full opacity-40`}
          animate={{
            scale: [1, 1.15, 0.95, 1],
            x: [0, 40, -30, 0],
            y: [0, -60, 30, 0],
          }}
          transition={{
            duration: 8 + blob.id * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: blob.delay,
          }}
          style={{
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}

