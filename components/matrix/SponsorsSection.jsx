'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Building2, Zap, Handshake } from 'lucide-react';
import TiltCard from './TiltCard';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function SponsorsSection() {
  const organizers = [
    {
      name: 'Ideator GECT',
      role: 'Organizer & Prototyping Host',
      description:
        'The Centre for Innovation at Govt. Engineering College Thrissur, empowering student innovators with state-of-the-art incubation, hardware labs, and mentorship.',
      tag: 'ORGANIZER',
      logo: '/assets/logos/ideator.png',
      website: 'https://ideator.gectcr.ac.in/',
      accent:
        'dark:border-[#39FF14] light:border-emerald-400 dark:text-[#39FF14] light:text-emerald-800',
    },
    {
      name: 'Govt. Engg. College Thrissur',
      role: 'Host Institution',
      description:
        "Kerala's premier engineering institution established in 1957, driving technical research, regional technological advances, and entrepreneurship.",
      tag: 'HOST INSTITUTION',
      logo: '/assets/logos/GEC.png',
      website: 'https://gectcr.ac.in/',
      accent:
        'dark:border-emerald-500 light:border-emerald-400 dark:text-emerald-400 light:text-emerald-800',
    },
  ];

  const sponsors = [
    {
      name: 'MathWorks',
      role: 'Lead AI Sponsor & Software Provider',
      description:
        'The world leading developer of mathematical computing software, providing official MATLAB, Simulink, and AI Toolboxes to all hackathon teams.',
      tag: 'PRIMARY LEAD SPONSOR',
      logo: '/assets/logos/Matlab.png',
      website: 'https://www.mathworks.com/',
      accent:
        'dark:border-[#E16725] light:border-orange-400 dark:text-[#E16725] light:text-orange-800',
    },
  ];

  const partners = [
    {
      name: 'CTF',
      logo: '/assests/supporters/ctf.png',
    },
    {
      name: 'Groovy Tusker',
      logo: '/assests/supporters/groovy-tusker.png',
    },
    {
      name: 'GECT Alumni Association',
      logo: null,
    },
  ];

  return (
    <section id="sponsors" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================
            ORGANIZERS HEADER
        ========================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lt-badge-bg inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-emerald-950/60 light:bg-emerald-50 border dark:border-[#39FF14]/30 light:border-emerald-300 text-xs font-mono dark:text-[#39FF14] light:text-emerald-800 mb-4 font-semibold"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ORGANIZERS</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="retro-heading text-3xl sm:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight mb-4"
          >
            ORGANISERS
          </motion.h2>
        </div>

        {/* =========================
            ORGANIZERS
        ========================== */}
        <div className="mb-16">
          <h3 className="retro-text text-[10px] dark:text-[#39FF14] light:text-emerald-800 mb-6 flex items-center gap-2 justify-center">
            <Building2 className="w-4 h-4" />
            Organizing Bodies & Host
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizers.map((item, i) => (
              <motion.div
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="h-full flex flex-col"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card glass-card-hover rounded-3xl p-8 relative group flex flex-col justify-between h-full">

                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">

                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-14 px-4 py-2 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                        >
                          <Image
                            src={item.logo}
                            alt={item.name}
                            width={140}
                            height={40}
                            className="h-10 max-w-[140px] w-auto object-contain"
                          />
                        </a>

                        <span
                          className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${item.accent} dark:bg-gray-900/60 light:bg-emerald-50`}
                        >
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold dark:text-white light:text-slate-900 mb-1">
                        {item.name}
                      </h4>

                      <p className="text-xs font-mono dark:text-[#39FF14] light:text-emerald-700 mb-4 font-semibold">
                        {item.role}
                      </p>

                      <p className="text-sm dark:text-gray-300 light:text-slate-700 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <a
                      href={item.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold dark:text-[#39FF14] light:text-emerald-700 hover:underline pt-4 border-t dark:border-gray-800/60 light:border-slate-200"
                    >
                      <span>VISIT OFFICIAL WEBSITE</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================
            MATHWORKS (CENTERED)
        ========================== */}
        <div className="mb-20">
          <h3 className="retro-text text-[10px] text-[#E16725] dark:text-[#E16725] light:text-orange-800 mb-6 flex items-center gap-2 justify-center">
            <Zap className="w-4 h-4" />
            In Association With
          </h3>

          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              {sponsors.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="h-full flex flex-col"
                >
                  <TiltCard maxTilt={8} className="h-full">
                    <div className="glass-card glass-card-hover rounded-3xl p-8 relative group flex flex-col justify-between h-full">

                      <div>
                        <div className="flex items-center justify-between gap-4 mb-6">

                          <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-14 px-4 py-2 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:scale-105 transition-transform"
                          >
                            <Image
                              src={item.logo}
                              alt={item.name}
                              width={140}
                              height={40}
                              className="h-10 max-w-[140px] w-auto object-contain"
                            />
                          </a>

                          <span
                            className={`text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full border ${item.accent} dark:bg-gray-900/60 light:bg-orange-50`}
                          >
                            {item.tag}
                          </span>

                        </div>

                        <h4 className="text-xl font-bold dark:text-white light:text-slate-900 mb-1">
                          {item.name}
                        </h4>

                        <p className="text-xs font-mono text-[#E16725] dark:text-[#E16725] light:text-orange-700 mb-4 font-semibold">
                          {item.role}
                        </p>

                        <p className="text-sm dark:text-gray-300 light:text-slate-700 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#E16725] dark:text-[#E16725] light:text-orange-700 hover:underline pt-4 border-t dark:border-gray-800/60 light:border-slate-200"
                      >
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

        {/* =========================
            OFFICIAL PARTNERS
        ========================== */}
        <div className="mt-8">

          {/* SIMPLE HEADING — NO BOX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-2 text-[#39FF14]">
              <Handshake className="w-4 h-4" />

              <span className="retro-text text-[11px] tracking-widest">
                OFFICIAL PARTNERS
              </span>
            </div>
          </motion.div>

          {/* PARTNER LOGO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {partners.map((partner, i) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-56"
              >
                <TiltCard maxTilt={8} className="h-full">
                  <div className="glass-card glass-card-hover rounded-3xl h-full w-full flex items-center justify-center p-8">

                    {partner.logo ? (
                      <div
                        className={`relative flex items-center justify-center ${
                          partner.name === 'CTF'
                            ? 'w-[30rem] h-[17rem]'
                            : 'w-[21rem] h-[12rem]'
                        }`}
                      >
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="font-heading text-3xl md:text-4xl font-bold text-white">
                          GECT Alumni
                        </span>

                        <span className="block font-heading text-3xl md:text-4xl font-bold text-white">
                          Association
                        </span>
                      </div>
                    )}

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