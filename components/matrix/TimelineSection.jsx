'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Rocket, BookOpen, Send, Award, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function TimelineSection() {
  const milestones = [
    {
      id: '01',
      date: 'AUG 15 – AUG 28',
      title: 'Stage 1: Registration & Team Onboarding',
      description: 'Engineering college participants across Kerala register teams (2–4 members), select preferred challenge statement, access participant handbook, event guidelines, timeline & FAQs, and receive access to the official participant dashboard.',
      icon: Rocket,
      accent: 'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10',
      status: 'REGISTRATION WINDOW'
    },
    {
      id: '02',
      date: 'STARTS AUG 28',
      title: 'Stage 2: Hackathon Kick-off & Technical Bootcamp',
      description: 'Conducted by MathWorks experts. Covers MATLAB & Simulink Onramps, AI workflows in MATLAB, hackathon themes, engineering design methodology, simulation problem solving, best practices, live demos & Q&A. Goal: build MATLAB/Simulink proficiency.',
      icon: BookOpen,
      accent: 'border-[#00E5FF] dark:border-[#00E5FF] light:border-sky-600 text-[#00E5FF] dark:text-[#00E5FF] light:text-sky-700 bg-[#00E5FF]/10',
      status: 'BOOTCAMP KICKOFF'
    },
    {
      id: '03',
      date: 'AUG 25 – SEP 14',
      title: 'Stage 3: Innovation & Development Phase',
      description: 'Teams analyze problem statements, design solution architecture, develop algorithms/simulation models, train/evaluate AI models, validate & document engineering methodology. Supported via portal under strict independent work policy (no direct technical assistance).',
      icon: Calendar,
      accent: 'border-emerald-400 text-emerald-400 bg-emerald-400/10',
      status: 'DEVELOPMENT PHASE'
    },
    {
      id: '04',
      date: 'SEP 14 (RESULTS: SEP 18)',
      title: 'Stage 4: Online Submission & Preliminary Evaluation',
      description: 'Submit Abstract, MATLAB/Simulink Files, Source Code, Presentation Deck & Video Demo by Sept 14. Ideator Tech Committee shortlists Top 20; MathWorks Jury Panel selects Top 12 Finalists published on Sept 18.',
      icon: Send,
      accent: 'border-[#E16725] text-[#E16725] bg-[#E16725]/10',
      status: 'SUBMISSION DEADLINE'
    },
    {
      id: '05',
      date: 'SEP 25 (FRIDAY)',
      title: 'Stage 5: Grand Finale & Live Challenge at GEC Thrissur',
      description: 'Top 12 finalist teams present at Government Engineering College, Thrissur. 20-min Project Presentation & Demo (50% weightage) + Live Engineering Challenge using MathWorks "Hackathon in a Box" (50% weightage).',
      icon: Award,
      accent: 'border-purple-400 text-purple-400 bg-purple-400/10',
      status: 'ON-SITE FINALE'
    },
    {
      id: '06',
      date: 'SEP 25 (FRIDAY)',
      title: 'Stage 6: Final Evaluation & Awards Ceremony',
      description: 'Finalists evaluated on 6 core criteria (Innovation, MATLAB/Simulink Use, Technical Excellence, Feasibility, Impact, Presentation). Winner, 1st Runner-up, 2nd Runner-up announced. ₹25,000 Prize Pool + Certificates.',
      icon: Award,
      accent: 'border-[#39FF14] text-[#39FF14] bg-[#39FF14]/10',
      status: 'AWARDS & CEREMONY'
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 dark:bg-emerald-950/60 light:bg-emerald-100 border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] dark:text-[#39FF14] light:text-emerald-800 mb-4 font-semibold"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>EVENT ROADMAP</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight mb-4"
          >
            Interactive Milestone Track
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 dark:text-gray-400 light:text-slate-600 text-sm sm:text-base font-medium"
          >
            Follow the key timeline checkpoints from kickoff to final presentation.
          </motion.p>
        </div>

        {/* Timeline Track */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#39FF14] via-[#00E5FF] to-[#E16725] -translate-x-1/2 shadow-[0_0_15px_rgba(57,255,20,0.6)]" />

          <div className="space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } gap-8 group`}
                >
                  
                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <TiltCard maxTilt={8}>
                      <div className="glass-card glass-card-hover rounded-2xl p-6 relative">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <span className="text-xs font-mono font-bold tracking-widest text-[#39FF14] dark:text-[#39FF14] light:text-emerald-700 bg-emerald-950/80 dark:bg-emerald-950/80 light:bg-emerald-100 px-3 py-1 rounded-full border border-[#39FF14]/30">
                            {item.date}
                          </span>
                          <span className="text-[10px] font-mono text-gray-400 dark:text-gray-400 light:text-slate-600 font-bold">
                            PHASE {item.id}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-bold dark:text-white light:text-slate-900 mb-2 group-hover:text-[#39FF14] dark:group-hover:text-[#39FF14] light:group-hover:text-emerald-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-400 dark:text-gray-400 light:text-slate-600 leading-relaxed mb-4 font-medium">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 text-[11px] font-mono text-gray-400 dark:text-gray-400 light:text-slate-700 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#39FF14] dark:text-[#39FF14] light:text-emerald-700" />
                          <span>STATUS: {item.status}</span>
                        </div>
                      </div>
                    </TiltCard>
                  </div>

                  {/* Central Node Badge */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full border-2 ${item.accent} flex items-center justify-center backdrop-blur-md shadow-md group-hover:scale-125 transition-transform bg-gray-900 dark:bg-gray-900 light:bg-white`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Spacer */}
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
