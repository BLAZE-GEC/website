'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const bootMessages = [
  'INITIALIZING NEURAL CORE...',
  'LOADING MATHWORKS AI ENGINE...',
  'CONFIGURING SIMULINK TOOLBOXES...',
  'CONNECTING IDEATOR GECT PORTAL...',
  'MATRIX SYSTEM ONLINE ✓'
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  const bootStep = Math.min(
    Math.floor((progress / 100) * bootMessages.length),
    bootMessages.length - 1
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#060A07] text-[#34D399] font-mono overflow-hidden"
        >
          {/* Decorative spinning rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] border border-[rgba(16,185,129,0.1)] rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
            className="absolute w-[600px] h-[600px] border border-[rgba(6,182,212,0.1)] rounded-full border-dotted"
          />

          <div className="relative z-10 w-full max-w-lg p-8 flex flex-col items-center">
            {/* Logo */}
            <motion.div
              animate={{ 
                filter: ['drop-shadow(0 0 10px rgba(57,255,20,0.5))', 'drop-shadow(0 0 20px rgba(57,255,20,0.8))', 'drop-shadow(0 0 10px rgba(57,255,20,0.5))'] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-4"
            >
              <Image src="/assets/MATRIX.png" alt="MATRIX" width={400} height={192} className="h-20 sm:h-24 object-contain" />
            </motion.div>
            
            <p className="text-white text-sm mb-12 tracking-widest uppercase opacity-80 text-center">
              Matlab-Simulink AI Engineering Hackathon
            </p>

            {/* Progress Bar */}
            <div className="w-full relative">
              <div className="w-full h-2 rounded-full bg-[#111827] border border-[#064E3B] overflow-hidden shadow-[0_0_15px_rgba(57,255,20,0.2)]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#39FF14] via-[#00FF66] to-[#00E5FF]"
                  style={{ width: `${progress}%` }}
                  animate={{ 
                    boxShadow: ['0 0 10px #39FF14', '0 0 20px #00E5FF', '0 0 10px #39FF14'] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Boot Log */}
            <div className="mt-6 w-full flex justify-between text-xs sm:text-sm text-[rgba(16,185,129,0.8)] h-6">
              <span>{`> ${bootMessages[bootStep]}`}</span>
              <span>{`${progress}%`}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
