import Certificates from '../components/Certificates'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function CertificatesPage() {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white min-h-screen">
      <Navigation />
      <Certificates />
      <Footer />
    </div>
  )
}

