'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/matrix/LoadingScreen';
import HeroSection from '@/components/matrix/HeroSection';
import AboutSection from '@/components/matrix/AboutSection';
import TimelineSection from '@/components/matrix/TimelineSection';
import AIThemesSection from '@/components/matrix/AIThemesSection';
import PrizesSection from '@/components/matrix/PrizesSection';
import SponsorsSection from '@/components/matrix/SponsorsSection';
import FAQSection from '@/components/matrix/FAQSection';
import MatrixBackground from '@/components/matrix/MatrixBackground';
import MatrixFooter from '@/components/matrix/Footer';
import MatrixNavbar from '@/components/matrix/Navbar';

export default function MatrixPage() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="text-[#F3F4F6] min-h-screen relative overflow-x-hidden">
      {/* Fixed dark background layer — sits behind the rain canvas */}
      <div className="fixed inset-0 bg-[#060A07] z-[-1]" />
      <MatrixBackground />
      <MatrixNavbar />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10"
          >
            <HeroSection />
            <AboutSection />
            <TimelineSection />
            <AIThemesSection />
            <PrizesSection />
            <SponsorsSection />
            <FAQSection />
            <MatrixFooter />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
