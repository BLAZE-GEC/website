'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Building2, Zap } from 'lucide-react';
import TiltCard from './TiltCard';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function SponsorsSection() {
  const organizers = [
    {
      name: 'Ideator GECT',
      role: 'Organizer & Prototyping Host',
      description: 'The Centre for Innovation at Govt. Engineering College Thrissur, empowering student innovators with state-of-the-art incubation, hardware labs, and mentorship.',
      tag: 'ORGANIZER',
      logo: '/assets/logos/ideator.png',
      website: 'https://ideator.gectcr.ac.in/',
      accent: 'dark:border-[#39FF14] light:border-emerald-400 dark:text-[#39FF14] light:text-emerald-800'
    },
    {
      name: 'Govt. Engg. College Thrissur',
      role: 'Host Institution',
      description: 'Kerala\'s premier engineering institution established in 1957, driving technical research, regional technological advances, and entrepreneurship.',
      tag: 'HOST INSTITUTION',
      logo: '/assets/logos/GEC.png',
      website: 'https://gectcr.ac.in/',
      accent: 'dark:border-emerald-500 light:border-emerald-400 dark:text-emerald-400 light:text-emerald-800'
    }
  ];

  const sponsors = [
    {
      name: 'MathWorks',
      role: 'Lead AI Sponsor & Software Provider',
      description: 'The world leading developer of mathematical computing software, providing official MATLAB, Simulink, and AI Toolboxes to all hackathon teams.',
      tag: 'PRIMARY LEAD SPONSOR',
      logo: '/assets/logos/Matlab.png',
      website: 'https://www.mathworks.com/',
      accent: 'dark:border-[#E16725] light:border-orange-400 dark:text-[#E16725] light:text-orange-800'
    },
    {
      name: 'CoreEL Technologies',
      role: 'Official Technology Partner',
      description: 'Premier Technology Solutions Provider delivering advanced engineering design software, hardware systems, and industry mentorship.',
      tag: 'TECHNOLOGY PARTNER',
      logo: '/assets/logos/CoreEL Technologies.png',
      website: 'https://coreel.com/',
      accent: 'dark:border-cyan-400 light:border-sky-400 dark:text-cyan-400 light:text-sky-800'
    }
  ];

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lt-badge-bg inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-emerald-950/60 light:bg-emerald-50 border dark:border-[#39FF14]/30 light:border-emerald-300 text-xs font-mono dark:text-[#39FF14] light:text-emerald-800 mb-4 font-semibold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ORGANIZERS & SPONSORS</span>
          </motion.div>
          <motion.h2
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} variants={fadeUp}
            className="retro-heading text-3xl sm:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight mb-4"
          >
            Organizers & Lead Sponsors
          </motion.h2>
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} variants={fadeUp}
            className="dark:text-gray-300 light:text-slate-700 text-sm sm:text-base"
          >
            Organized by Ideator GECT and sponsored by global AI technology pioneers.
          </motion.p>
        </div>

        {/* Organizers */}
        <div className="mb-16">
          <h3 className="retro-text text-[10px] dark:text-[#39FF14] light:text-emerald-800 mb-6 flex items-center gap-2 justify-center">
            <Building2 className="w-4 h-4" /> Organizing Bodies & Host
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizers.map((item, i) => (
              <motion.div key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="h-full flex flex-col">
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card glass-card-hover rounded-3xl p-8 relative group flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="h-14 px-4 py-2 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                          <Image src={item.logo} alt={item.name} width={140} height={40} className="h-10 max-w-[140px] w-auto object-contain" />
                        </a>
                        <span className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${item.accent} dark:bg-gray-900/60 light:bg-emerald-50`}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold dark:text-white light:text-slate-900 mb-1">{item.name}</h4>
                      <p className="text-xs font-mono dark:text-[#39FF14] light:text-emerald-700 mb-4 font-semibold">{item.role}</p>
                      <p className="text-sm dark:text-gray-300 light:text-slate-700 leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold dark:text-[#39FF14] light:text-emerald-700 hover:underline pt-4 border-t dark:border-gray-800/60 light:border-slate-200">
                      <span>VISIT OFFICIAL WEBSITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sponsors */}
        <div>
          <h3 className="retro-text text-[10px] text-[#E16725] dark:text-[#E16725] light:text-orange-800 mb-6 flex items-center gap-2 justify-center">
            <Zap className="w-4 h-4" /> Primary AI Sponsors & Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.map((item, i) => (
              <motion.div key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="h-full flex flex-col">
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card glass-card-hover rounded-3xl p-8 relative group flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <a href={item.website} target="_blank" rel="noopener noreferrer" className="h-14 px-4 py-2 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
                          <Image src={item.logo} alt={item.name} width={140} height={40} className="h-10 max-w-[140px] w-auto object-contain" />
                        </a>
                        <span className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${item.accent} dark:bg-gray-900/60 light:bg-orange-50`}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold dark:text-white light:text-slate-900 mb-1">{item.name}</h4>
                      <p className="text-xs font-mono text-[#E16725] dark:text-[#E16725] light:text-orange-700 mb-4 font-semibold">{item.role}</p>
                      <p className="text-sm dark:text-gray-300 light:text-slate-700 leading-relaxed mb-4">{item.description}</p>
                    </div>
                    <a href={item.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E16725] dark:text-[#E16725] light:text-orange-700 hover:underline pt-4 border-t dark:border-gray-800/60 light:border-slate-200">
                      <span>VISIT OFFICIAL WEBSITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
