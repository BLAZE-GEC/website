'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Gift, Sparkles } from 'lucide-react';
import TiltCard from './TiltCard';

const winners = [
  {
    place: "2nd Place",
    name: "First Runner-up",
    prize: "₹10K",
    accentBorder: "border-cyan-400/60",
    badgeBg: "bg-cyan-950/80 border-cyan-400/50 text-cyan-300",
    iconBg: "bg-[#091318] border-2 border-cyan-400 shadow-[0_0_25px_rgba(0,229,255,0.4)]",
    icon: <Award className="w-8 h-8 text-cyan-300" />,
    delay: 0.2,
    height: "h-72",
    perks: ["Runner-up Trophy", "Official Merit Certificate", "Finalist Certificate"]
  },
  {
    place: "1st Place",
    name: "Overall Winner",
    prize: "₹15K",
    accentBorder: "border-[#39FF14]",
    badgeBg: "bg-emerald-950/80 border-[#39FF14]/50 text-[#39FF14]",
    iconBg: "bg-[#0A160D] border-2 border-[#39FF14] shadow-[0_0_35px_rgba(57,255,20,0.55)]",
    icon: <Trophy className="w-10 h-10 text-yellow-400 animate-pulse" />,
    delay: 0,
    height: "h-80",
    perks: ["Ideator Champion Trophy", "Winner Merit Certificate", "MathWorks Industry Recognition"]
  },
  {
    place: "3rd Place",
    name: "Second Runner-up",
    prize: "₹5K",
    accentBorder: "border-amber-500/60",
    badgeBg: "bg-amber-950/80 border-amber-500/50 text-amber-400",
    iconBg: "bg-[#18100A] border-2 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.4)]",
    icon: <Award className="w-8 h-8 text-amber-400" />,
    delay: 0.4,
    height: "h-64",
    perks: ["Podium Trophy", "Merit Certificate", "Finalist Certificate"]
  }
];

const categoryPrizes = [
  {
    title: "Special Award Recipients",
    description: "Honoring outstanding performance in the Live Engineering Challenge & novel MATLAB implementations.",
    prize: "Attractive prizes",
    icon: <Sparkles className="w-7 h-7 text-[#39FF14]" />
  },
  {
    title: "Finalist Recognition",
    description: "Official Ideator Club & MathWorks certificates awarded to all Top 12 finalist teams.",
    prize: "Certificates",
    icon: <Award className="w-7 h-7 text-[#39FF14]" />
  },
  {
    title: "Engineering Excellence",
    description: "Special commendation for best simulation design & practical real-world feasibility.",
    prize: "Certificates",
    icon: <Gift className="w-7 h-7 text-[#39FF14]" />
  }
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/60 border border-[#39FF14]/30 mb-4"
          >
            <Trophy className="w-3.5 h-3.5 text-[#39FF14]" />
            <span className="text-xs font-mono font-bold text-[#39FF14] uppercase tracking-wider">Rewards & Recognition</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="retro-heading text-3xl sm:text-5xl font-black text-white tracking-tight mb-4"
          >
            Total Prize Pool of <span className="text-[#39FF14]">₹ 30,000</span> + Certificates + Perks
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Cash prizes, trophy honors, and official certificates awarded to winning teams and finalists at the Grand Finale (GEC Thrissur).
          </motion.p>
        </div>

        {/* Podium Winner Cards */}
        <div className="flex flex-col md:flex-row items-end justify-center gap-8 md:gap-6 mb-20 max-w-5xl mx-auto pt-10">
          {winners.map((winner, index) => (
            <motion.div
              key={winner.place}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: winner.delay, type: "spring", stiffness: 120 }}
              className={`w-full md:w-1/3 relative ${index === 1 ? 'order-first md:order-none z-10' : 'z-0'}`}
            >
              <TiltCard maxTilt={8}>
                <div className="relative pt-6">
                  {/* Floating Icon Badge — Completely Unclipped */}
                  <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl ${winner.iconBg} flex items-center justify-center z-20 transition-transform group-hover:scale-110`}>
                    {winner.icon}
                  </div>

                  {/* Podium Card */}
                  <div className={`glass-card glass-card-hover p-6 sm:p-7 pt-10 flex flex-col items-center justify-between ${winner.height} relative border-2 ${winner.accentBorder} rounded-3xl group`}>

                    {/* Background Signal Grid */}
                    <div className="absolute inset-0 opacity-10 matrix-signal-lines rounded-3xl pointer-events-none" />

                    <div className="text-center w-full relative z-10">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-extrabold tracking-widest uppercase mb-2 border ${winner.badgeBg}`}>
                        {winner.place}
                      </span>
                      <h3 className="text-xl font-extrabold text-white mb-1">{winner.name}</h3>
                      <div className="text-3xl sm:text-4xl font-black font-mono text-[#39FF14] my-3 tracking-tight drop-shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                        {winner.prize}
                      </div>

                      <ul className="space-y-2 text-xs font-mono text-gray-300 border-t border-gray-800/80 pt-4 w-full text-left">
                        {winner.perks.map((perk, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Special Category Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categoryPrizes.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="h-full flex flex-col"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="glass-card glass-card-hover p-6 h-full border border-gray-800 relative group flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="p-3 rounded-2xl bg-emerald-950/80 border border-[#39FF14]/30">
                        {category.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#E16725] bg-orange-950/60 px-3 py-1 rounded-full border border-[#E16725]/30">
                        {category.prize}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">{category.description}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PrizesSection;
