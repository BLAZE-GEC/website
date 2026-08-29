'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function RegistrationCounter() {
  return (
    <div className="flex justify-center max-w-2xl mx-auto my-6 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative group w-full md:w-[500px] p-6 sm:p-8 rounded-2xl bg-[#0D110E]/96 border border-[#39FF14]/40 backdrop-blur-md text-center shadow-[0_0_20px_rgba(57,255,20,0.2)] hover:border-[#39FF14] hover:shadow-[0_0_40px_rgba(57,255,20,0.4)] transition-all"
      >
        {/* Faint Grid lines inside card */}
        <div className="absolute inset-0 opacity-10 matrix-signal-lines rounded-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="text-5xl sm:text-6xl md:text-7xl font-black font-mono tracking-tighter text-[#39FF14] filter drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
            1,400+
          </span>
          
          <span className="block mt-4 text-sm sm:text-base font-mono font-extrabold tracking-widest text-gray-200">
            TOTAL REGISTRATIONS
          </span>
          
          <span className="block mt-2 text-xs sm:text-sm font-mono text-[#39FF14]/70">
            Thank you for the overwhelming response!
          </span>
        </div>

        {/* Corner neon dashes */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#39FF14] rounded-tr-xl transition-all group-hover:w-6 group-hover:h-6" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#39FF14] rounded-bl-xl transition-all group-hover:w-6 group-hover:h-6" />
      </motion.div>
    </div>
  );
}