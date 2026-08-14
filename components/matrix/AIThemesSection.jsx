'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Sprout,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

const domains = [
  {
    id: 1,
    number: '01',
    title: 'AI IN AGRICULTURE',
    description:
      'Apply artificial intelligence and computational thinking to real-world challenges in agriculture.',
    icon: Sprout,
    accent: '#39FF14',
    topics: [
      '4 problem statements will be provided upon registration.',
      'Choose only ONE problem statement from respective domain.',
    ],
  },
  {
    id: 2,
    number: '02',
    title: 'AI IN DISASTER MANAGEMENT',
    description:
      'Develop AI-driven solutions for real-world challenges related to disaster management.',
    icon: ShieldAlert,
    accent: '#00E5FF',
    topics: [
      '4 problem statements will be provided upon registration.',
      'Choose only ONE problem statement from respective domain.',
    ],
  },
];

export default function AIThemesSection() {
  const [openDomain, setOpenDomain] = useState(null);

  const toggleDomain = (id) => {
    setOpenDomain((current) => (current === id ? null : id));
  };

  return (
    <section
      id="themes"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===================================================== */}
        {/* SECTION HEADER */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          {/* Small label */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{
              background: 'rgba(13, 17, 14, 0.9)',
              border: '1px solid rgba(57,255,20,0.25)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />

            <span
              className="text-[#39FF14] text-xs uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
              }}
            >
              HACKATHON DOMAINS
            </span>
          </div>

          {/* Main heading */}
<h2
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white"
  style={{
    fontFamily: "'Space Mono', monospace",
    fontWeight: 900,
    letterSpacing: '-0.04em',
    lineHeight: '1.05',
    textShadow: `
      2px 2px 0 #061006,
      4px 4px 0 #0b2410,
      6px 6px 0 #123b18,
      8px 8px 0 rgba(57,255,20,0.12),
      0 0 20px rgba(57,255,20,0.2)
    `,
  }}
>
  CHOOSE YOUR DOMAIN
</h2>

          {/* Subtitle */}
          <p
            className="max-w-2xl mx-auto text-gray-400 mt-5"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.7',
            }}
          >
            Select one domain and work on one problem statement.
          </p>

        </motion.div>


        {/* ===================================================== */}
        {/* DOMAIN CARDS */}
        {/* ===================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {domains.map((domain, index) => {
            const Icon = domain.icon;
            const isOpen = openDomain === domain.id;

            return (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >

                {/* Card */}
                <div
                  className="relative overflow-hidden rounded-2xl transition-all duration-500"
                  style={{
                    background: 'rgba(7, 11, 8, 0.92)',
                    border: `1px solid ${
                      isOpen
                        ? domain.accent
                        : 'rgba(255,255,255,0.08)'
                    }`,
                    boxShadow: isOpen
                      ? `0 0 35px ${domain.accent}18`
                      : '0 0 20px rgba(0,0,0,0.35)',
                  }}
                >

                  {/* Top glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(
                        90deg,
                        transparent,
                        ${domain.accent},
                        transparent
                      )`,
                      opacity: isOpen ? 1 : 0.4,
                    }}
                  />

                  {/* ================================================= */}
                  {/* CLICKABLE CARD HEADER */}
                  {/* ================================================= */}

                  <button
                    type="button"
                    onClick={() => toggleDomain(domain.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-8 focus:outline-none"
                  >

                    <div className="flex items-start justify-between gap-5">

                      {/* Number */}
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${domain.accent}10`,
                          border: `1px solid ${domain.accent}40`,
                        }}
                      >
                        <span
                          className="text-sm"
                          style={{
                            color: domain.accent,
                            fontFamily: "'Space Mono', monospace",
                            fontWeight: 700,
                          }}
                        >
                          {domain.number}
                        </span>
                      </div>


                      {/* Content */}
                      <div className="flex-1 min-w-0">

                        {/* Domain label */}
                        <div className="flex items-center gap-3 mb-3">

                          <Icon
                            className="w-5 h-5"
                            style={{
                              color: domain.accent,
                            }}
                          />

                          <span
                            className="text-xs tracking-[0.18em] text-gray-500 uppercase"
                            style={{
                              fontFamily: "'Outfit', sans-serif",
                              fontWeight: 600,
                            }}
                          >
                            DOMAIN {domain.number}
                          </span>

                        </div>


                        {/* Domain title */}
                        <h3
                          className="text-2xl sm:text-3xl text-white mb-3"
                          style={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            lineHeight: '1.15',
                          }}
                        >
                          {domain.title}
                        </h3>


                        {/* Description */}
                        <p
                          className="text-gray-400"
                          style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '15px',
                            fontWeight: 400,
                            lineHeight: '1.7',
                          }}
                        >
                          {domain.description}
                        </p>

                      </div>


                      {/* Dropdown icon */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{
                          background: isOpen
                            ? `${domain.accent}15`
                            : 'rgba(255,255,255,0.04)',
                          border: `1px solid ${
                            isOpen
                              ? `${domain.accent}50`
                              : 'rgba(255,255,255,0.08)'
                          }`,
                        }}
                      >
                        <ChevronDown
                          className="w-5 h-5 transition-transform duration-300"
                          style={{
                            transform: isOpen
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                            color: isOpen
                              ? domain.accent
                              : '#d1d5db',
                          }}
                        />
                      </div>

                    </div>

                  </button>


                  {/* ================================================= */}
                  {/* DROPDOWN CONTENT */}
                  {/* ================================================= */}

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >

                        <div className="px-6 sm:px-8 pb-8">

                          {/* Divider */}
                          <div
                            className="h-px mb-6"
                            style={{
                              background: `linear-gradient(
                                90deg,
                                ${domain.accent}50,
                                transparent
                              )`,
                            }}
                          />

                          {/* Problem statement heading */}
                          <div className="flex items-center gap-2 mb-5">

                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{
                                background: domain.accent,
                                boxShadow:
                                  `0 0 8px ${domain.accent}`,
                              }}
                            />

                            <span
                              className="text-xs tracking-[0.15em] text-gray-400 uppercase"
                              style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontWeight: 600,
                              }}
                            >
                              PROBLEM STATEMENTS
                            </span>

                          </div>


                          {/* Topics */}
                          <div className="space-y-3">

                            {domain.topics.map((topic, topicIndex) => (
                              <div
                                key={topicIndex}
                                className="flex items-start gap-3 p-4 rounded-xl"
                                style={{
                                  background:
                                    topicIndex === 0
                                      ? `${domain.accent}08`
                                      : 'rgba(255,255,255,0.025)',
                                  border:
                                    topicIndex === 0
                                      ? `1px solid ${domain.accent}20`
                                      : '1px solid rgba(255,255,255,0.06)',
                                }}
                              >

                                {topicIndex === 0 ? (
                                  <span
                                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                    style={{
                                      background: domain.accent,
                                      boxShadow:
                                        `0 0 7px ${domain.accent}`,
                                    }}
                                  />
                                ) : (
                                  <ArrowRight
                                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                                    style={{
                                      color: domain.accent,
                                    }}
                                  />
                                )}

                                <p
                                  className="text-gray-300"
                                  style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: '15px',
                                    fontWeight: 400,
                                    lineHeight: '1.65',
                                  }}
                                >
                                  {topic}
                                </p>

                              </div>
                            ))}

                          </div>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </motion.div>
            );
          })}

        </div>


        {/* ===================================================== */}
        {/* BOTTOM NOTE */}
        {/* ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="mt-8 text-center"
        >
          <p
            className="text-gray-500"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '14px',
              fontWeight: 400,
            }}
          >
            A Team can only choose one domain  
          </p>
        </motion.div>

      </div>
    </section>
  );
}