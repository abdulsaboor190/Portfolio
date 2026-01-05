export default function WaveDivider({ flip = false }) {
  return (
    <div className={`relative w-full ${flip ? 'rotate-180' : ''}`}>
      <svg
        className="relative block w-full h-24"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,46.29c47.79,22.2,103.59,48.07,158,28,77.83-18.13,167.54-16.14,245,2.05,57.5,13.06,135,30.67,221,28,77.83-2.33,149.83-18.13,221-18.13,77.83,0,135,15.8,221,15.8s167.54-7.14,245-15.8c77.83-8.66,135-15.8,221-15.8V0H0V46.29Z"
          fill="url(#waveGradient)"
          opacity="0.2"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#525252" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#a3a3a3" stopOpacity="0.18" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

