'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Globe, Headphones } from 'lucide-react';
import TiltCard from './TiltCard';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function ContactSection() {
  const enquiryContacts = [
    {
      name: 'Akhil Madhu',
      phone: '+91 9846851957',
      accent: 'border-[#39FF14]/40 text-[#39FF14] bg-[#39FF14]/10',
    },
    {
      name: 'Sooraj V Suresh',
      phone: '+91 9895955027',
      accent: 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/10',
    },
    {
      name: 'Muhammad Shamrin',
      phone: '+91 9995618472',
      accent: 'border-[#E16725]/40 text-[#E16725] bg-[#E16725]/10',
    },
    {
      name: 'Harinanda V',
      phone: '+91 9895413060',
      accent: 'border-[#39FF14]/40 text-[#39FF14] bg-[#39FF14]/10',
    },
  ];

  const programOrganizers = [
    {
      role: 'Convenor',
      name: 'Naveen P Suresh',
      phone: '+91 9846851957',
      accent: 'border-[#39FF14]/40 text-[#39FF14] bg-[#39FF14]/10',
    },
    {
      role: 'Joint Convenor',
      name: 'Pooja Deependran',
      phone: '+91 8714169436',
      accent: 'border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/10',
    },
    {
      role: 'Program Head',
      name: 'Diya D',
      phone: '+91 7902695940',
      accent: 'border-[#E16725]/40 text-[#E16725] bg-[#E16725]/10',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-[#39FF14]/30 text-[9px] text-[#39FF14] mb-3 font-bold"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            <Headphones className="w-3 h-3 text-[#39FF14]" />
            <span>SUPPORT & ENQUIRIES</span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
            style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: '1.4' }}
          >
            FOR ENQUIRIES:
          </motion.h2>
        </div>

        {/* 4 Enquiry Contacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14">
          {enquiryContacts.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="h-full"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-gray-800 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-8 h-2.5 rounded-full border mb-4 ${contact.accent}`} />
                    <h3 className="text-sm sm:text-base font-bold text-white mb-6 group-hover:text-[#39FF14] transition-colors font-mono truncate">
                      {contact.name}
                    </h3>
                  </div>

                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-all font-mono text-[11px] xl:text-xs font-bold"
                  >
                    <span>{contact.phone}</span>
                    <Phone className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Program Organisers Subheader */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-lg sm:text-xl font-bold text-gray-300 tracking-wider font-mono uppercase flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-emerald-500/30"></span>
            Program Organizers
            <span className="h-px w-10 bg-emerald-500/30"></span>
          </motion.h3>
        </div>

        {/* 3 Organizers Grid (Centered beneath the 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-4 md:gap-5 mb-14">
          {programOrganizers.map((contact, i) => (
            <motion.div
              key={contact.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 4}
              variants={fadeUp}
              className="h-full"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div className="glass-card glass-card-hover rounded-2xl p-5 border border-gray-800 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-2.5 rounded-full border ${contact.accent}`} />
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-gray-800/80 text-gray-400 border border-gray-700/60">
                        {contact.role}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white mb-6 group-hover:text-[#39FF14] transition-colors font-mono truncate">
                      {contact.name}
                    </h3>
                  </div>

                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 group-hover:border-[#39FF14]/50 group-hover:text-[#39FF14] transition-all font-mono text-[11px] xl:text-xs font-bold"
                  >
                    <span>{contact.phone}</span>
                    <Phone className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* 3 Quick Social / Channel Cards Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={7}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {/* Email */}
          <a
            href="mailto:matrix.ideator@gmail.com"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-gray-800 flex items-center gap-4 group transition-all"
          >
            <div className="p-3 rounded-xl bg-emerald-950/70 border border-[#39FF14]/30 text-[#39FF14] group-hover:scale-110 transition-transform shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[8px] font-mono text-gray-500 font-bold uppercase mb-0.5">Official Mail</span>
              <span className="text-xs font-mono text-white group-hover:text-[#39FF14] transition-colors truncate block">
                matrix.ideator@gmail.com
              </span>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/matri.xlive/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-gray-800 flex items-center gap-4 group transition-all"
          >
            <div className="p-3 rounded-xl bg-orange-950/70 border border-[#E16725]/30 text-[#E16725] group-hover:scale-110 transition-transform shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[8px] font-mono text-gray-500 font-bold uppercase mb-0.5">Instagram Feed</span>
              <span className="text-xs font-mono text-white group-hover:text-[#E16725] transition-colors truncate block">
                @matri.xlive
              </span>
            </div>
          </a>

          {/* Host Portal */}
          <a
            href="https://ideator.gectcr.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card glass-card-hover p-5 rounded-2xl border border-gray-800 flex items-center gap-4 group transition-all"
          >
            <div className="p-3 rounded-xl bg-cyan-950/70 border border-[#00E5FF]/30 text-[#00E5FF] group-hover:scale-110 transition-transform shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block text-[8px] font-mono text-gray-500 font-bold uppercase mb-0.5">Host Portal</span>
              <span className="text-xs font-mono text-white group-hover:text-[#00E5FF] transition-colors truncate block">
                ideator.gectcr.ac.in
              </span>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}