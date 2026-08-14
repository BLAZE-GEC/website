'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronRight, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="relative bg-[#040705] border-t border-gray-900 pt-10 pb-8 text-gray-400 font-mono text-xs overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Pre-Footer CTA Banner */}
        <div className="glass-card p-6 sm:p-8 mb-10 rounded-3xl relative overflow-hidden border border-[#39FF14]/30 shadow-[0_0_40px_rgba(57,255,20,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-[#39FF14]/40 text-[#39FF14]"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
            >
              <Terminal className="w-3 h-3 text-[#39FF14]" />
              <span>[!] REGISTRATION PORTAL OPEN</span>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-white tracking-tight text-shadow-[#39FF14]"
              style={{ fontFamily: "'Press Start 2P', monospace", lineHeight: '1.5' }}
            >
              ENGINEER THE FUTURE WITH MATLAB AI — BY IDEATOR CLUB
            </h3>
          </div>
          <a
            href="url?id=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#39FF14] text-[#060A07] font-bold text-xs shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shrink-0"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
          >
            <span>REGISTER NOW</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-900 pt-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/MATRIX.png"
              alt="MATRIX Official Logo"
              width={100}
              height={26}
              className="h-6 w-auto object-contain filter drop-shadow-[0_0_10px_#39FF14]"
            />
            <span className="text-gray-500 text-[11px]">
              © 2026 MATRIX Hackathon. Ideator Club, Government Engineering College Thrissur.
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-gray-400">
            <button onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#39FF14] transition-colors">
              About
            </button>
            <button onClick={(e) => scrollToSection(e, 'timeline')} className="hover:text-[#39FF14] transition-colors">
              Timeline
            </button>
            <button onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[#39FF14] transition-colors">
              FAQ
            </button>
            <button onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-[#39FF14] transition-colors">
              Contact
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}