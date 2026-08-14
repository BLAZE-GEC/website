'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Trophy } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    document.body.style.overflow = '';
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 200);
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Themes', id: 'themes' },
    { label: 'Prizes', id: 'prizes', icon: <Trophy className="w-3 h-3" /> },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'FAQ', id: 'faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-16 transition-all duration-300 flex items-center ${
        scrolled
          ? 'bg-[#060A07]/95 backdrop-blur-xl border-b border-[#39FF14]/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => {
            document.body.style.overflow = '';
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center cursor-pointer group shrink-0"
        >
          <Image 
            src="/assets/MATRIX.png" 
            alt="MATRIX Logo" 
            width={140}
            height={32}
            className="h-6 sm:h-8 w-auto object-contain group-hover:scale-105 transition-transform filter drop-shadow-[0_0_12px_#39FF14]"
          />
        </div>

        {/* Desktop Nav Links — Retro Game Style */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              onMouseEnter={() => setHoveredLink(link.id)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-3 py-2 cursor-pointer group"
            >
              {/* Retro hover highlight bg */}
              <span
                className={`absolute inset-0 rounded-lg transition-all duration-200 ${
                  hoveredLink === link.id
                    ? 'bg-[#39FF14]/10 scale-100'
                    : 'scale-95 opacity-0'
                }`}
              />
              
              <span
                className="relative flex items-center gap-1.5 transition-colors duration-200"
                style={{ fontFamily: "'Press Start 2P', 'VT323', monospace", fontSize: '11px', letterSpacing: '0.05em' }}
              >
                {link.icon && (
                  <span className={`transition-colors ${hoveredLink === link.id ? 'text-[#39FF14]' : 'text-emerald-500/80'}`}>
                    {link.icon}
                  </span>
                )}
                <span className={`transition-colors uppercase font-extrabold ${
                  hoveredLink === link.id
                    ? 'text-[#39FF14]'
                    : 'text-gray-200'
                }`}>
                  {link.label}
                </span>
              </span>

              {/* Retro underline pixel bar */}
              <span
                className={`absolute bottom-0.5 left-3 right-3 h-[2px] transition-all duration-200 ${
                  hoveredLink === link.id
                    ? 'bg-[#39FF14] opacity-100'
                    : 'opacity-0'
                }`}
                style={{ imageRendering: 'pixelated' }}
              />
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://unstop.com/o/sIzxCAY?utm_medium=Share&utm_source=iecyrqwn36473&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-4 py-2.5 rounded-lg bg-[#39FF14] text-[#060A07] hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.5)] transition-all cursor-pointer flex items-center gap-1.5 font-bold"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
          >
            <span>REGISTER</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-gray-900/90 border border-emerald-500/30 text-gray-200 active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#39FF14]" /> : <Menu className="w-5 h-5 text-[#39FF14]" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                document.body.style.overflow = '';
                setMobileMenuOpen(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] md:hidden"
            />
            
            {/* Drawer panel with viewport height fallback */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 320 }}
              className="fixed top-0 right-0 h-dvh w-[85vw] max-w-[290px] bg-[#090E0B] border-l border-[#39FF14]/30 shadow-[0_0_50px_rgba(57,255,20,0.25)] z-[100] md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-800/80 shrink-0">
                <Image
                  src="/assets/MATRIX.png"
                  alt="MATRIX Logo"
                  width={100}
                  height={24}
                  className="h-5 w-auto object-contain filter drop-shadow-[0_0_12px_#39FF14]"
                />
                <button
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-xl bg-gray-900 border border-gray-700 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1.5">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left py-3 px-3.5 rounded-xl text-gray-200 hover:bg-emerald-950/60 hover:text-[#39FF14] border border-transparent hover:border-[#39FF14]/30 transition-all flex items-center gap-3 cursor-pointer font-extrabold active:scale-98"
                    style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
                  >
                    {link.icon && <span className="text-[#39FF14]">{link.icon}</span>}
                    <span>{link.label}</span>
                  </motion.button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="p-4 border-t border-gray-800/80 space-y-2.5 bg-[#060A07] shrink-0">
                <a
                  href="https://unstop.com/o/sIzxCAY?utm_medium=Share&utm_source=iecyrqwn36473&utm_campaign=Online_coding_challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl block bg-[#39FF14] text-[#060A07] font-bold text-center shadow-[0_0_20px_rgba(57,255,20,0.5)] cursor-pointer active:scale-98 transition-all"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
                >
                  REGISTER TEAM
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}