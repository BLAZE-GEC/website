'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Layers, Code, Zap, Trophy } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import TiltCard from './TiltCard';
import AnnouncementsTicker from './AnnouncementsTicker';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#00E5FF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Header Badges */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D110E]/90 border border-emerald-500/40 backdrop-blur-md text-gray-200 shadow-sm" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}>
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping" />
              <span className="text-gray-200">ORGANIZER: IDEATOR CLUB | GEC THRISSUR</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#0D110E]/90 border border-[#E16725]/40 backdrop-blur-md text-[#E16725] shadow-sm" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px' }}>
              LEAD SPONSORS: MathWorks & CoreEL
            </div>
          </motion.div>

          {/* Subtitle Tagline */}
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="text-gray-300 mb-4 uppercase tracking-widest" style={{ fontFamily: "'Silkscreen', monospace", fontSize: '14px' }}
          >
            IDEATOR CLUB <span className="italic lowercase text-[#39FF14]" style={{ fontFamily: "'VT323', monospace", fontSize: '22px' }}>presents</span>
          </motion.p>

          {/* MATRIX Logo Image with green drop shadow glow */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="relative mb-5 flex flex-col items-center"
          >
            <TiltCard maxTilt={8}>
              <Image
                src="/assets/MATRIX.png"
                alt="Ideator Hackathon Logo"
                width={360}
                height={180}
                className="h-28 sm:h-36 md:h-44 w-auto object-contain animate-float-3d filter drop-shadow-[0_0_16px_#39FF14]"
              />
            </TiltCard>
          </motion.div>

          {/* Subtitle Banner — Pure White Text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
            className="flex flex-col items-center max-w-3xl mb-8"
          >
            <h1 className="text-lg sm:text-xl md:text-3xl tracking-tight text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap" style={{ fontFamily: "'Press Start 2P', monospace", textShadow: '0 0 12px rgba(57,255,20,0.5), 3px 3px 0 rgba(0,229,255,0.2)' }}>
              IDEATOR HACKATHON 2026
            </h1>
            <p className="text-emerald-400 whitespace-nowrap" style={{ fontFamily: "'VT323', monospace", fontSize: '18px', letterSpacing: '0.06em' }}>
              Premier 4-Week MATLAB & Simulink Challenge for Engineering Students Across Kerala
            </p>
          </motion.div>

          {/* Live Countdown Clock */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} variants={fadeUp}
            className="w-full max-w-3xl mb-8"
          >
            <div className="text-center mb-2">
              <span className="text-white tracking-wider" style={{ fontFamily: "'Silkscreen', monospace", fontSize: '13px', textShadow: '0 0 8px rgba(57,255,20,0.4)' }}>
                ⏱️ Registration Deadline & Bootcamp Kick-off: August 28
              </span>
            </div>
            <CountdownTimer targetDate="2026-08-28T00:00:00+05:30" />
          </motion.div>

          {/* Dual CTAs — Dark Glassy Buttons */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5} variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#39FF14] to-[#00FF66] text-[#060A07] font-extrabold text-sm font-mono tracking-wider shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>REGISTER TEAM NOW (2-4 MEMBERS)</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => scrollToSection('prizes')}
              className="px-8 py-3.5 rounded-xl bg-[#0D110E]/90 border border-[#39FF14]/40 text-gray-100 font-bold text-sm font-mono tracking-wider hover:border-[#39FF14] hover:text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-[#39FF14]" />
              <span>EXPLORE ₹25,000 PRIZE POOL</span>
            </button>
          </motion.div>

          {/* Key Event Highlights */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6} variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-emerald-950/80"
          >
            {[
              { icon: <Award className="w-5 h-5 text-[#E16725]" />, val: '₹25,000', label: 'Prize Pool + Certificates' },
              { icon: <Layers className="w-5 h-5 text-[#39FF14]" />, val: '4 Weeks', label: 'Total Program Duration' },
              { icon: <Code className="w-5 h-5 text-[#00E5FF]" />, val: 'MATLAB & Simulink', label: 'Primary Engineering Tools' },
              { icon: <Zap className="w-5 h-5 text-[#39FF14]" />, val: '2–4 Members', label: 'Kerala College Students' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-between p-4 rounded-xl bg-[#0D110E]/95 border border-gray-800 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.4)] h-full">
                {item.icon}
                <span className="text-lg font-bold font-mono text-white mt-1">{item.val}</span>
                <span className="text-[10px] font-bold text-gray-400 mt-0.5 text-center">{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7} variants={fadeUp}
            className="w-full max-w-4xl mt-12"
          >
            <AnnouncementsTicker />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
