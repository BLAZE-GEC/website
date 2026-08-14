'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AnnouncementsTicker() {
  const announcements = [
    {
      id: 1,
      badge: 'BOOTCAMP KICKOFF',
      text: '📢 MATLAB & Simulink Technical Bootcamp on August 27 & 28 conducted by MathWorks experts.',
      date: 'AUG 27 & 28',
      color: 'border-[#39FF14] text-[#39FF14]'
    },
    {
      id: 2,
      badge: 'SUBMISSION DEADLINE',
      text: '💡 Project Submission Deadline on September 14 via official portal.',
      date: 'SEP 14',
      color: 'border-[#E16725] text-[#E16725]'
    },
    {
      id: 3,
      badge: 'TOP 12 FINALISTS',
      text: '🚀 Top 12 Finalist Teams announcement on September 18 after 2-tier screening.',
      date: 'SEP 18',
      color: 'border-[#00E5FF] text-[#00E5FF]'
    },
    {
      id: 4,
      badge: 'GRAND FINALE',
      text: '🏆 Grand Finale & Live Challenge at GEC Thrissur! ₹30,000 Prize Pool.',
      date: 'Announced Later',
      color: 'border-[#39FF14] text-[#39FF14]'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    // Set to 5000ms (5 seconds) so contestants have plenty of time to read each message
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, announcements.length]);

  const item = announcements[currentIndex];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0D110E] via-emerald-950/60 to-[#0D110E] border border-[#39FF14]/40 p-4 mb-8 shadow-[0_0_20px_rgba(57,255,20,0.2)]"
    >
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Icon Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="p-2 rounded-xl bg-emerald-950 border border-[#39FF14]/50 text-[#39FF14] animate-pulse">
            <Bell className="w-4 h-4" />
          </div>
          <span className="hidden sm:inline text-xs font-mono font-extrabold text-[#39FF14] tracking-wider uppercase">
            LIVE TICKER:
          </span>
        </div>

        {/* Sliding Card Content */}
        <div className="flex-1 overflow-hidden min-h-[32px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="flex items-center gap-3 w-full"
            >
              <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${item.color} shrink-0`}>
                {item.badge}
              </span>
              <span className="text-xs font-mono font-medium text-white truncate">
                {item.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1))}
            className="p-1 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % announcements.length)}
            className="p-1 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
            aria-label="Next announcement"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}