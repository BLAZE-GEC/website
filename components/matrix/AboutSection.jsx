'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function AboutSection() {
  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      iconBg: 'dark:bg-orange-950/60 light:bg-orange-100 dark:border-[#E16725]/40 light:border-orange-300',
      iconColor: 'text-[#E16725]',
      title: 'MATLAB & Simulink Ecosystem',
      desc: 'The primary tools for the hackathon. Learn simulation-based problem solving, AI workflows, and model design with official MathWorks documentation and Onramp resources.',
      bullets: ['MATLAB & Simulink Onramps', 'AI Workflows in MATLAB', 'Simulation-Based Problem Solving']
    },
    {
      icon: <Globe className="w-6 h-6" />,
      iconBg: 'dark:bg-emerald-950/60 light:bg-emerald-100 dark:border-[#39FF14]/40 light:border-emerald-300',
      iconColor: 'dark:text-[#39FF14] light:text-emerald-700',
      title: 'Ideator Club & Host Venue',
      desc: 'Organized by Ideator Club for engineering college students across Kerala. Grand Finale hosted at Government Engineering College, Thrissur',
      bullets: ['Target: Kerala Engineering Students', 'Team Size: 3 to 4 Members', 'Venue: Government Engineering College, Thrissur']
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      iconBg: 'dark:bg-cyan-950/60 light:bg-sky-100 dark:border-[#00E5FF]/40 light:border-sky-300',
      iconColor: 'dark:text-[#00E5FF] light:text-sky-700',
      title: 'Mentorship & Problem-Solving',
      desc: 'To ensure a fair and level playing field, organizers and mentors will provide structured learning support through official bootcamps and orientation sessions. Teams are expected to independently apply the concepts and skills gained during the bootcamps to develop and implement their solutions.',
      bullets: ['Structured Learning Support', 'Independent Solution Development', 'Fair & Equal Participation']
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 dark:bg-[#39FF14]/5 light:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lt-badge-bg inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-emerald-950/60 light:bg-emerald-50 border dark:border-[#39FF14]/30 light:border-emerald-300 text-xs font-mono dark:text-[#39FF14] light:text-emerald-800 mb-4 font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT IDEATOR HACKATHON</span>
          </motion.div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="retro-heading text-3xl sm:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight mb-5"
          >
            Kerala&apos;s Flagship Engineering &amp; AI Challenge
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="dark:text-gray-300 light:text-slate-700 text-sm sm:text-base leading-relaxed mb-8"
          >
            Organized by <strong className="dark:text-white light:text-slate-900 font-bold">Ideator Club</strong> for engineering college students across Kerala, <strong className="text-[#39FF14] font-bold">Ideator Hackathon 2026</strong> is a 4-week program centered on MATLAB &amp; Simulink innovation. Teams of 3 to 4 members compete for top honors and exciting rewards.
          </motion.p>

          {/* 2-Line Formatted Heading */}
          <motion.h3
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} variants={fadeUp}
            className="retro-heading text-2xl sm:text-4xl md:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight"
          >
            <span className="block">
              Total Prize Pool of
            </span>
            <span className="block mt-2">
              <span className="text-[#39FF14] whitespace-nowrap">₹30,000</span> + Certificates + Perks
            </span>
          </motion.h3>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <motion.div
              key={feat.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }} custom={index} variants={fadeUp}
              className="h-full flex flex-col"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl p-7 relative group h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${feat.iconBg} border flex items-center justify-center mb-6 ${feat.iconColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      {feat.icon}
                    </div>
                    <h3 className="text-xl font-bold dark:text-white light:text-slate-900 mb-3 group-hover:text-[#39FF14] dark:group-hover:text-[#39FF14] light:group-hover:text-emerald-700 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm dark:text-gray-300 light:text-slate-700 leading-relaxed mb-5">
                      {feat.desc}
                    </p>
                  </div>
                  <ul className="space-y-2 pt-4 border-t border-gray-800/40">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-mono font-semibold dark:text-[#39FF14] light:text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}