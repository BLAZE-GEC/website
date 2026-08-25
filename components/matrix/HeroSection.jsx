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
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function HeroSection() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">

      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#39FF14]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#00E5FF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col items-center text-center">

          {/* =========================================================
              COLLABORATION PILL (SYMMETRICAL)
          ========================================================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              
              {/* Ideator Logo Pill */}
              <div className="h-8 px-3 py-1 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/assets/logos/ideator.png"
                  alt="Ideator GECT"
                  width={90}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
              </div>

              {/* Refined Cross */}
              <span className="text-gray-400 font-light text-xs tracking-widest select-none">
                ✕
              </span>

              {/* MathWorks Logo Pill */}
              <div className="h-8 px-3 py-1 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <Image
                  src="/assets/logos/Matlab.png"
                  alt="MathWorks"
                  width={90}
                  height={22}
                  className="h-5 w-auto object-contain"
                />
              </div>

            </div>
          </motion.div>

          {/* Subtitle Tagline */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-gray-300 mb-4 uppercase tracking-widest"
            style={{
              fontFamily: "'Silkscreen', monospace",
              fontSize: '14px',
            }}
          >
            IDEATOR CLUB{' '}
            <span
              className="italic lowercase text-[#39FF14]"
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: '22px',
              }}
            >
              presents
            </span>
          </motion.p>

          {/* MATRIX Logo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="relative mb-5 flex flex-col items-center"
          >
            <TiltCard maxTilt={8}>
              <Image
                src="/assets/MATRIX.png"
                alt="MATRIX 2026 Logo"
                width={360}
                height={180}
                className="h-28 sm:h-36 md:h-44 w-auto object-contain animate-float-3d filter drop-shadow-[0_0_16px_#39FF14]"
              />
            </TiltCard>
          </motion.div>

          {/* Subtitle Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="flex flex-col items-center max-w-3xl mb-8"
          >
            <h1
              className="text-lg sm:text-xl md:text-3xl tracking-tight text-white mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] whitespace-nowrap"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                textShadow:
                  '0 0 12px rgba(57,255,20,0.5), 3px 3px 0 rgba(0,229,255,0.2)',
              }}
            >
              MATLAB SIMULINK AI ENGINEERING HACKATHON
            </h1>

            <p
              className="text-emerald-400 whitespace-nowrap"
              style={{
                fontFamily: "'VT323', monospace",
                fontSize: '18px',
                letterSpacing: '0.06em',
              }}
            >
              An All-IndiaMATLAB Simulink AI Engineering Hackathon, Open to All
              College Students
            </p>
          </motion.div>

          {/* Live Countdown Clock */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            variants={fadeUp}
            className="w-full max-w-3xl mb-8"
          >
            <div className="text-center mb-2">
              <span
                className="text-white tracking-wider"
                style={{
                  fontFamily: "'Silkscreen', monospace",
                  fontSize: '13px',
                  textShadow: '0 0 8px rgba(57,255,20,0.4)',
                }}
              >
                ⏱️ Registration Closes: August 25
              </span>
            </div>

            <CountdownTimer targetDate="2026-08-25T23:59:59+05:30" />
          </motion.div>

          {/* Dual CTAs */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mb-14"
          >

            {/* Register Button */}
            <a
              href="https://unstop.com/o/pNE0AoV?lb=useZi1fZ&utm_medium=Share&utm_source=iecyrqwn36473&utm_campaign=Online_coding_challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#39FF14] to-[#00FF66] text-[#060A07] font-extrabold text-sm font-mono tracking-wider shadow-[0_0_30px_rgba(57,255,20,0.6)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>REGISTER TEAM NOW (3-4 MEMBERS)</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            {/* Prize Pool Button */}
            <button
              onClick={() => scrollToSection('prizes')}
              className="px-8 py-3.5 rounded-xl bg-[#0D110E]/90 border border-[#39FF14]/40 text-gray-100 font-bold text-sm font-mono tracking-wider hover:border-[#39FF14] hover:text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all flex items-center gap-2 backdrop-blur-md cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-[#39FF14]" />
              <span>EXPLORE ₹30,000 PRIZE POOL</span>
            </button>

          </motion.div>

          {/* Key Event Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={6}
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-emerald-950/80"
          >
            {[
              {
                icon: <Award className="w-5 h-5 text-[#E16725]" />,
                val: '₹30,000',
                label: 'Prize Pool + Rewards',
              },
              {
                icon: <Layers className="w-5 h-5 text-[#39FF14]" />,
                val: '4 Phases',
                label: 'Registration to Grand Finale',
              },
              {
                icon: <Code className="w-5 h-5 text-[#00E5FF]" />,
                val: 'MATLAB & Simulink',
                label: 'Primary Engineering Tools',
              },
              {
                icon: <Zap className="w-5 h-5 text-[#39FF14]" />,
                val: '3–4 Members',
                label: 'Open to All Indian Colleges',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-between p-4 rounded-xl bg-[#0D110E]/95 border border-gray-800 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.4)] h-full"
              >
                {item.icon}

                <span className="text-lg font-bold font-mono text-white mt-1">
                  {item.val}
                </span>

                <span className="text-[10px] font-bold text-gray-400 mt-0.5 text-center">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Announcements */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={7}
            variants={fadeUp}
            className="w-full max-w-4xl mt-12"
          >
            <AnnouncementsTicker />
          </motion.div>

        </div>
      </div>
    </section>
  );
}