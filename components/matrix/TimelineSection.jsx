'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Rocket,
  BookOpen,
  Send,
  CheckCircle2,
} from 'lucide-react';
import TiltCard from './TiltCard';

export default function TimelineSection() {
  const milestones = [
    {
      id: '01',
      date: 'AUG 15 – AUG 25',
      title: 'Registration & Team Onboarding',
      description:
        'Teams of 3 to 4 members from colleges across Kerala can register for MATRIX. After registration, teams receive access to the challenge information and can select one domain and one problem statement.',
      icon: Rocket,
      accent:
        'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10',
      status: 'REGISTRATION OPEN',
    },

    {
      id: '02',
      date: 'AUG 26',
      title: 'Hackathon Kick-off',
      description:
        'The hackathon officially begins on August 26. Participants are introduced to the MATRIX challenge, domains, workflow, and development process.',
      icon: Calendar,
      accent:
        'border-[#00E5FF] text-[#00E5FF] bg-[#00E5FF]/10',
      status: 'HACKATHON STARTS',
    },

    {
      id: '03',
      date: 'AUG 26 – SEP 14',
      title: 'Innovation & Development Phase',
      description:
        'Teams work independently on their selected problem statement, develop their solution using MATLAB and Simulink, and prepare their project for submission through the official Ideator MATRIX Hackathon Portal.',
      icon: Rocket,
      accent:
        'border-emerald-400 text-emerald-400 bg-emerald-400/10',
      status: 'DEVELOPMENT PHASE',
    },

    {
      id: '04',
      date: 'AUG 27 – AUG 28',
      title: 'MATLAB & Simulink Technical Bootcamp',
      description:
        'Technical bootcamp sessions conducted by MathWorks experts, subject to collaboration. Sessions cover MATLAB Onramp, Simulink Onramp, AI workflows in MATLAB, engineering design methodology, simulation-based problem solving, best practices, live demonstrations and interactive Q&A.',
      icon: BookOpen,
      accent:
        'border-[#E16725] text-[#E16725] bg-[#E16725]/10',
      status: 'TECHNICAL BOOTCAMP',
    },

    {
      id: '05',
      date: 'SEP 10- SEP14',
      title: 'Online Submission & Preliminary Evaluation',
      description:
        'Teams submit their completed project through the official Ideator MATRIX Hackathon Portal. Submitted projects proceed through the preliminary evaluation process.',
      icon: Send,
      accent:
        'border-[#E16725] text-[#E16725] bg-[#E16725]/10',
      status: 'SUBMISSION DEADLINE',
    },

    {
      id: '06',
      date: 'GRAND FINALE',
      title: 'Grand Finale at GEC Thrissur',
      description:
        'The top teams present at the Grand Finale, which includes a Live Engineering Challenge, held at GEC Thrissur.',
      icon: CheckCircle2,
      accent:
        'border-purple-400 text-purple-400 bg-purple-400/10',
      status: 'GRAND FINALE',
    },
  ];

  return (
    <section
      id="timeline"
      className="py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ===================================================== */}
        {/* HEADER */}
        {/* ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-[#39FF14]/30 text-xs text-[#39FF14] mb-4 font-semibold"
            style={{
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: '0.12em',
            }}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>EVENT ROADMAP</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold text-white mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '-0.02em',
            }}
          >
            Interactive Milestone Track
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base"
            style={{
              fontFamily: "'Outfit', sans-serif",
              lineHeight: '1.7',
            }}
          >
            Follow the key MATRIX milestones from registration
            to the Grand Finale.
          </motion.p>

        </div>


        {/* ===================================================== */}
        {/* TIMELINE */}
        {/* ===================================================== */}

        <div className="relative max-w-4xl mx-auto">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              bottom-0
              w-1
              bg-gradient-to-b
              from-[#39FF14]
              via-[#00E5FF]
              to-[#E16725]
              -translate-x-1/2
            "
            style={{
              boxShadow:
                '0 0 15px rgba(57,255,20,0.6)',
            }}
          />

          <div className="space-y-12">

            {milestones.map((item, index) => {

              const Icon = item.icon;

              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}

                  className={`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    items-start
                    ${isEven ? 'md:flex-row-reverse' : ''}
                    gap-8
                    group
                  `}
                >

                  {/* ================================================= */}
                  {/* TIMELINE CARD */}
                  {/* ================================================= */}

                  <div className="w-full md:w-1/2 pl-12 md:pl-0">

                    <TiltCard maxTilt={8}>

                      <div
                        className="
                          glass-card
                          glass-card-hover
                          rounded-2xl
                          p-6
                          relative
                          transition-all
                          duration-300
                        "
                      >

                        {/* Date + Event number */}

                        <div className="flex items-center justify-between gap-4 mb-4">

                          <span
                            className="
                              text-xs
                              font-bold
                              tracking-widest
                              text-[#39FF14]
                              bg-emerald-950/80
                              px-3
                              py-1
                              rounded-full
                              border
                              border-[#39FF14]/30
                            "
                            style={{
                              fontFamily:
                                "'Outfit', sans-serif",
                            }}
                          >
                            {item.date}
                          </span>

                          <span
                            className="
                              text-[10px]
                              text-gray-400
                              font-bold
                            "
                            style={{
                              fontFamily:
                                "'Space Mono', monospace",
                            }}
                          >
                            
                          </span>

                        </div>


                        {/* Title */}

                        <h3
                          className="
                            text-xl
                            sm:text-2xl
                            text-white
                            mb-3
                            transition-colors
                            duration-300
                            group-hover:text-[#39FF14]
                          "
                          style={{
                            fontFamily:
                              "'Playfair Display', serif",
                            fontWeight: 700,
                            lineHeight: '1.25',
                          }}
                        >
                          {item.title}
                        </h3>


                        {/* Description */}

                        <p
                          className="
                            text-gray-400
                            text-sm
                            leading-relaxed
                            mb-5
                          "
                          style={{
                            fontFamily:
                              "'Outfit', sans-serif",
                            lineHeight: '1.7',
                          }}
                        >
                          {item.description}
                        </p>


                        {/* Status */}

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            text-[11px]
                            text-gray-400
                            font-bold
                          "
                          style={{
                            fontFamily:
                              "'Outfit', sans-serif",
                            letterSpacing: '0.08em',
                          }}
                        >

                          <CheckCircle2
                            className="
                              w-3.5
                              h-3.5
                              text-[#39FF14]
                            "
                          />

                          <span>
                            {item.status}
                          </span>

                        </div>

                      </div>

                    </TiltCard>

                  </div>


                  {/* ================================================= */}
                  {/* CENTRAL NODE */}
                  {/* ================================================= */}

                  <div
                    className="
                      absolute
                      left-4
                      md:left-1/2
                      top-6
                      -translate-x-1/2
                      z-20
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <div
                      className={`
                        w-10
                        h-10
                        rounded-full
                        border-2
                        ${item.accent}
                        flex
                        items-center
                        justify-center
                        backdrop-blur-md
                        shadow-md
                        group-hover:scale-125
                        transition-transform
                        duration-300
                        bg-gray-900
                      `}
                    >

                      <Icon className="w-5 h-5" />

                    </div>

                  </div>


                  {/* ================================================= */}
                  {/* SPACER */}
                  {/* ================================================= */}

                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}