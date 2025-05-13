import React from 'react'
import AiSolutionsHeroSection from '@/components/ai-solutions/hero-section'
import Navbar from '@/components/layout/navbar'
import Features from '@/components/ai-solutions/features'
import AiSolutionsServices from '@/components/ai-solutions/services'
import AiSolutionsContactForm from '@/components/ai-solutions/contact-form'
import Footer from '@/components/layout/footer'

const AISolutions = () => {
  return (
    <main>
        <Navbar />
        <AiSolutionsHeroSection />
        <Features />
        <AiSolutionsServices />
        <AiSolutionsContactForm />
        <Footer />
    </main>
  )
}

export default AISolutions