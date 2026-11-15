import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import FeaturesCarousel from './components/FeaturesCarousel'
import AboutSection from './components/AboutSection'
import FAQAccordion from './components/FAQAccordion'
import InformationSection from './components/InformationSection'
import Footer from './components/Footer'

export default function App() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-off-white text-primary-dark font-inter selection:bg-accent-lime selection:text-primary-dark">
      {showLoader && <Loader />}
      {!showLoader && (
        <>
          <Hero />
          <FeaturesCarousel />
          <AboutSection />
          <FAQAccordion />
          <InformationSection />
          <Footer />
        </>
      )}
    </div>
  )
}
