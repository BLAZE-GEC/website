'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownTimer({ targetDate = "2026-08-28T00:00:00+05:30" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto my-6">
      {units.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group p-4 rounded-2xl bg-[#0D110E]/96 border border-[#39FF14]/30 backdrop-blur-md text-center shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all"
        >
          {/* Faint Grid lines inside card */}
          <div className="absolute inset-0 opacity-10 matrix-signal-lines rounded-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tighter text-[#39FF14] filter drop-shadow-[0_0_12px_rgba(57,255,20,0.6)]">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="block mt-1 text-[10px] sm:text-xs font-mono font-extrabold tracking-widest text-gray-300">
              {unit.label}
            </span>
          </div>

          {/* Corner neon dash */}
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#39FF14] rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#39FF14] rounded-bl-xl" />
        </motion.div>
      ))}
    </div>
  );
}
