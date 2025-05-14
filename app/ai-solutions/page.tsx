'use client';

import React from 'react'
import { motion } from 'framer-motion';
import AiSolutionsHeroSection from '@/components/ai-solutions/hero-section'
import Navbar from '@/components/layout/navbar'
import Features from '@/components/ai-solutions/features'
import AiSolutionsServices from '@/components/ai-solutions/services'
import AiSolutionsContactForm from '@/components/ai-solutions/contact-form'
import Footer from '@/components/layout/footer'

const AISolutions = () => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
      >
        <AiSolutionsHeroSection />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
      >
        <AiSolutionsServices />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      >
        <Features />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
      >
        <AiSolutionsContactForm />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
      >
        <Footer />
      </motion.div>
    </main>
  )
}

export default AISolutions