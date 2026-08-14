'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Code, Sparkles } from 'lucide-react';

export default function ThemeDetailModal({ theme, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (theme) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [theme]);

  if (!theme) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 dark:bg-[#060A07]/92 light:bg-slate-900/70 backdrop-blur-xl"
        />

        {/* Modal Container with strict max-height and internal scrolling */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 24 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl dark:bg-[#0D110E] light:bg-white border dark:border-[#39FF14]/40 light:border-slate-300 shadow-[0_0_50px_rgba(57,255,20,0.25)] p-6 sm:p-8 z-10 my-auto overflow-hidden"
        >
          {/* Faint Background Grid */}
          <div className="absolute inset-0 opacity-10 matrix-signal-lines pointer-events-none" />

          {/* Fixed Header inside Modal */}
          <div className="flex items-start justify-between gap-4 mb-5 pb-4 border-b dark:border-gray-800/80 light:border-slate-200 relative z-10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl dark:bg-emerald-950/80 light:bg-emerald-100 border dark:border-[#39FF14]/40 light:border-emerald-400/40 dark:text-[#39FF14] light:text-emerald-800 shrink-0">
                {theme.icon}
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest dark:text-[#39FF14] light:text-emerald-800 uppercase">
                  {theme.category}
                </span>
                <h3 className="text-lg sm:text-xl font-black dark:text-white light:text-slate-900 leading-snug">
                  {theme.title}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-xl dark:bg-gray-900 light:bg-slate-100 border dark:border-gray-700 light:border-slate-300 dark:text-gray-300 light:text-slate-700 hover:text-white dark:hover:border-[#39FF14] light:hover:border-emerald-600 transition-all cursor-pointer shrink-0"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Body */}
          <div className="space-y-6 relative z-10 text-xs sm:text-sm overflow-y-auto pr-1 flex-1">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 dark:text-[#39FF14] light:text-emerald-700" /> Problem Scope & Objectives
              </h4>
              <p className="dark:text-gray-300 light:text-slate-800 leading-relaxed dark:bg-gray-900/60 light:bg-slate-50 p-4 rounded-xl border dark:border-gray-800 light:border-slate-200">
                {theme.fullDescription}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <h4 className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 dark:text-[#39FF14] light:text-emerald-700" /> Challenge Objectives
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
                {theme.objectives.map((obj, i) => (
                  <li key={i} className="flex items-center gap-2 p-2.5 rounded-lg dark:bg-emerald-950/40 light:bg-emerald-50 border dark:border-emerald-900/50 light:border-emerald-200 dark:text-gray-200 light:text-slate-900 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full dark:bg-[#39FF14] light:bg-emerald-600 shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested MATLAB Toolboxes */}
            <div>
              <h4 className="text-xs font-mono font-bold dark:text-gray-400 light:text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-[#E16725]" /> Recommended MathWorks Toolboxes
              </h4>
              <div className="flex flex-wrap gap-2">
                {theme.toolboxes.map((tb, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg dark:bg-[#E16725]/15 light:bg-orange-100 border dark:border-[#E16725]/40 light:border-orange-300 text-[#E16725] dark:text-[#E16725] light:text-orange-900 font-mono text-xs font-bold">
                    {tb}
                  </span>
                ))}
              </div>
            </div>

            {/* Starter Kit Link / Footer inside Modal */}
            <div className="pt-4 border-t dark:border-gray-800 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs font-mono dark:text-gray-400 light:text-slate-600 text-center sm:text-left">
                Free License & Datasets Provided Upon Registration
              </span>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#39FF14] dark:bg-[#39FF14] light:bg-emerald-600 dark:text-[#060A07] light:text-white font-bold text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:scale-105 transition-all cursor-pointer"
              >
                SELECT THIS THEME
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
