'use client';

import React from 'react';
import Image from 'next/image';
import { ExternalLink, MapPin, Mail, ShieldCheck, ChevronRight, Terminal, Phone } from 'lucide-react';

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

  const officialLinks = [
    {
      name: 'Ideator GECT',
      sub: 'Centre for Innovation',
      url: 'https://ideator.gectcr.ac.in/',
      logo: '/assets/logos/ideator.png',
    },
    {
      name: 'GEC Thrissur',
      sub: 'Host Institution',
      url: 'https://gectcr.ac.in/',
      logo: '/assets/logos/GEC.png',
    },
    {
      name: 'MathWorks',
      sub: 'Lead AI Sponsor',
      url: 'https://www.mathworks.com/',
      logo: '/assets/logos/Matlab.png',
    },
    {
      name: 'CoreEL Technologies',
      sub: 'Technology Partner',
      url: 'https://coreel.com/',
      logo: '/assets/logos/CoreEL Technologies.png',
    }
  ];

  return (
    <footer className="relative bg-[#040705] border-t border-gray-900 pt-10 pb-6 text-gray-400 font-mono text-xs overflow-hidden z-10">

      {/* Top Gradient Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent" />

      {/* Background Matrix Signal Lines & Glowing Orbs */}
      <div className="absolute inset-0 opacity-10 matrix-signal-lines pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Pre-Footer Gamified Call to Action Banner */}
        <div className="glass-card p-6 sm:p-8 mb-8 rounded-3xl relative overflow-hidden border border-[#39FF14]/30 shadow-[0_0_40px_rgba(57,255,20,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
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
              ENGINEER THE FUTURE WITH MATLAB AI
            </h3>
            <p className="text-gray-400 text-xs max-w-xl font-mono">
              Free MATLAB software licenses, AI Toolboxes, and expert mentorship provided upon team registration.
            </p>
          </div>
          <a
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#39FF14] text-[#060A07] font-bold text-xs shadow-[0_0_20px_rgba(57,255,20,0.5)] hover:scale-105 transition-all flex items-center gap-2 cursor-pointer shrink-0"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
          >
            <span>REGISTER TEAM NOW</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Official Partner Logos Bar */}
        <div className="mb-8 border-b border-gray-800/80 pb-6">
          <h4
            className="text-gray-400 text-center mb-6 flex items-center justify-center gap-2 uppercase"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
          >
            <ShieldCheck className="w-4 h-4 text-[#39FF14]" /> Official Organizers & Partners
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {officialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 rounded-2xl border border-gray-800/80 hover:border-[#39FF14]/50 flex flex-col items-center justify-center text-center group transition-all"
              >
                <div className="h-10 px-3 py-1 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform">
                  <Image src={link.logo} alt={link.name} width={120} height={28} className="h-7 w-auto max-w-[120px] object-contain" />
                </div>
                <span
                  className="text-white group-hover:text-[#39FF14] transition-colors flex items-center gap-1"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
                >
                  {link.name} <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-[#39FF14]" />
                </span>
                <span className="text-[10px] text-gray-500 font-mono mt-1">{link.sub}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 4-Column Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">

          {/* Brand Col */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center">
              <Image
                src="/assets/MATRIX.png"
                alt="MATRIX Official Logo"
                width={140}
                height={36}
                className="h-9 w-auto object-contain filter drop-shadow-[0_0_14px_#39FF14]"
              />
            </div>
            <p
              className="text-[#39FF14] leading-relaxed"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}
            >
              Ideator Hackathon 2026
            </p>
            <p className="text-gray-400 text-xs leading-relaxed font-mono">
              Organized by Ideator Club for engineering college students across Kerala in direct collaboration with MathWorks & CoreEL Technologies.
            </p>

          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              className="text-white mb-3 uppercase flex items-center gap-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
            >
              <span className="w-1.5 h-1.5 bg-[#39FF14] rounded-full" /> NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}>
              <li>
                <button onClick={(e) => scrollToSection(e, 'about')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> About Event
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'timeline')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> Key Timeline
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'themes')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> AI Tracks
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'prizes')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> Rewards (₹25K)
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'sponsors')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> Partners
                </button>
              </li>
              <li>
                <button onClick={(e) => scrollToSection(e, 'faq')} className="hover:text-[#39FF14] transition-colors flex items-center gap-1.5 cursor-pointer">
                  <span className="text-[#39FF14]">&gt;</span> FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Links */}
          <div>
            <h4
              className="text-white mb-3 uppercase flex items-center gap-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" /> DIRECT LINKS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '8px' }}>
              <li>
                <a href="https://ideator.gectcr.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-[#39FF14] transition-colors inline-flex items-center gap-1.5">
                  <span>Ideator GECT</span>
                  <ExternalLink className="w-3 h-3 text-[#39FF14]" />
                </a>
              </li>
              <li>
                <a href="https://gectcr.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5">
                  <span>GEC Thrissur</span>
                  <ExternalLink className="w-3 h-3 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E16725] transition-colors inline-flex items-center gap-1.5">
                  <span>MathWorks</span>
                  <ExternalLink className="w-3 h-3 text-[#E16725]" />
                </a>
              </li>
              <li>
                <a href="https://coreel.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00E5FF] transition-colors inline-flex items-center gap-1.5">
                  <span>CoreEL Tech</span>
                  <ExternalLink className="w-3 h-3 text-[#00E5FF]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Venue */}
          <div>
            <h4
              className="text-white mb-3 uppercase flex items-center gap-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '9px' }}
            >
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> HOST & CONTACT
            </h4>
            <div className="space-y-2.5 text-gray-400 leading-relaxed text-xs font-mono">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                <span>
                  Government Engineering College Thrissur<br />
                  Ramavarmapuram, Thrissur, Kerala - 680009
                </span>
              </p>
              <p className="flex items-center gap-2 text-[#39FF14] font-bold">
                <Phone className="w-4 h-4 text-[#39FF14] shrink-0" />
                <span>+91 98468 51957</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
