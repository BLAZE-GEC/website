'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Activity, Zap, ChevronRight, Layers, Sparkles } from 'lucide-react';
import ThemeDetailModal from './ThemeDetailModal';
import TiltCard from './TiltCard';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function AIThemesSection() {
  const [selectedTheme, setSelectedTheme] = useState(null);

  const themes = [
    {
      id: 'autonomous',
      category: 'TRACK 01',
      title: 'Autonomous Systems & Robotics',
      shortDescription: 'Design intelligent path planning, SLAM navigation, and obstacle avoidance models using MATLAB Robotics System Toolbox.',
      fullDescription: 'Develop autonomous mobile robot (AMR) control algorithms capable of real-time multi-sensor fusion, LiDAR-based map building, and path optimization in unpredictable environments. Build digital twins in Simulink.',
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-emerald-500/20 to-cyan-500/20',
      objectives: [
        'SLAM & 2D/3D Map Generation',
        'Trajectory Planning & Obstacle Avoidance',
        'Sensor Fusion (LiDAR + Camera + IMU)',
        'ROS 2 Node Integration in MATLAB'
      ],
      toolboxes: ['Robotics System Toolbox', 'Navigation Toolbox', 'Automated Driving Toolbox', 'ROS Toolbox']
    },
    {
      id: 'vision',
      category: 'TRACK 02',
      title: 'Signal Processing & Computer Vision',
      shortDescription: 'Build deep learning models for real-time automated visual defect detection, biometric security, and radar signal classification.',
      fullDescription: 'Leverage MATLAB Deep Learning & Computer Vision Toolboxes to train high-accuracy convolutional neural networks (YOLO, ResNet) for automated industrial inspection, thermal vision analysis, and audio signal filtering.',
      icon: <Eye className="w-6 h-6" />,
      gradient: 'from-cyan-500/20 to-blue-500/20',
      objectives: [
        'Automated Industrial Surface Inspection',
        'Real-time Multi-Object Detection (YOLOv8)',
        'Audio/Radar Signal Spectrogram Classification',
        'Edge AI C/C++ Code Generation'
      ],
      toolboxes: ['Computer Vision Toolbox', 'Image Processing Toolbox', 'Signal Processing Toolbox', 'Deep Learning Toolbox']
    },
    {
      id: 'healthcare',
      category: 'TRACK 03',
      title: 'Predictive AI in Healthcare & Bio-Engineering',
      shortDescription: 'Develop predictive diagnostic AI models analyzing physiological ECG/EEG signals, medical imaging, and patient vital telemetry.',
      fullDescription: 'Utilize MATLAB signal feature extraction and neural network classifiers to build non-invasive diagnostic tools that detect cardiac arrhythmia, neurological anomalies, and bio-telemetry patterns early.',
      icon: <Activity className="w-6 h-6" />,
      gradient: 'from-rose-500/20 to-orange-500/20',
      objectives: [
        'ECG / EEG Wavelet Feature Extraction',
        'Arrhythmia & Anomaly Detection',
        'Medical Image Segmentation (MRI/CT)',
        'Predictive Patient Telemetry Alerting'
      ],
      toolboxes: ['Bio-Signal Processing', 'Deep Learning Toolbox', 'Statistics & Machine Learning', 'Medical Imaging Toolbox']
    },
    {
      id: 'energy',
      category: 'TRACK 04',
      title: 'Smart Energy & MATLAB Simulation',
      shortDescription: 'Optimize renewable energy micro-grids, smart battery management systems (BMS), and predictive power grid maintenance.',
      fullDescription: 'Engineers will simulate green micro-grids using MATLAB Simscape to predict battery state-of-health (SOH), balance peak solar/wind grid loads, and prevent power failures using reinforcement learning algorithms.',
      icon: <Zap className="w-6 h-6" />,
      gradient: 'from-amber-500/20 to-emerald-500/20',
      objectives: [
        'Simscape Micro-grid Digital Twin',
        'BMS Battery State of Health Estimation',
        'Predictive Maintenance & Fault Diagnosis',
        'Reinforcement Learning Load Balancing'
      ],
      toolboxes: ['Simscape Electrical', 'Reinforcement Learning Toolbox', 'Predictive Maintenance Toolbox', 'Simulink']
    }
  ];

  return (
    <section id="themes" className="py-24 relative">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#39FF14]/5 dark:bg-[#39FF14]/5 light:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#00E5FF]/5 dark:bg-[#00E5FF]/5 light:bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-emerald-950/60 light:bg-emerald-100 border border-[#39FF14]/30 dark:border-[#39FF14]/30 light:border-emerald-400/40 text-xs font-mono dark:text-[#39FF14] light:text-emerald-800 mb-4 font-semibold"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>AI ENGINEERING TRACKS</span>
          </motion.div>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-black dark:text-white light:text-slate-900 tracking-tight mb-5"
          >
            Choose Your AI Domain
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="dark:text-gray-400 light:text-slate-600 text-sm sm:text-base"
          >
            Select a focus domain powered by MathWorks AI toolsets. Click any card to explore the full problem scope.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={fadeUp}
              className="h-full flex flex-col"
            >
              <TiltCard maxTilt={8} className="h-full">
                <div
                  onClick={() => setSelectedTheme(theme)}
                  className="glass-card glass-card-hover rounded-3xl p-8 cursor-pointer relative group overflow-hidden h-full flex flex-col justify-between"
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="text-xs font-mono font-bold tracking-widest dark:text-[#39FF14] light:text-emerald-700 dark:bg-emerald-950/80 light:bg-emerald-100 px-3 py-1 rounded-full border border-[#39FF14]/30 dark:border-[#39FF14]/30 light:border-emerald-400/40">
                        {theme.category}
                      </span>
                      <div className="p-3 rounded-2xl dark:bg-gray-900/90 light:bg-slate-100 border dark:border-gray-700 light:border-slate-300 dark:text-[#39FF14] light:text-emerald-700 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                        {theme.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold dark:text-white light:text-slate-900 mb-3 group-hover:text-[#39FF14] dark:group-hover:text-[#39FF14] light:group-hover:text-emerald-700 transition-colors">
                      {theme.title}
                    </h3>
                    
                    <p className="text-sm dark:text-gray-400 light:text-slate-600 leading-relaxed mb-6">
                      {theme.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {theme.toolboxes.slice(0, 3).map((tb, i) => (
                        <span key={i} className="text-[11px] font-mono dark:text-gray-300 light:text-slate-700 dark:bg-gray-900/80 light:bg-slate-100 px-2.5 py-1 rounded-lg border dark:border-gray-800 light:border-slate-300">
                          {tb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center gap-1.5 text-xs font-mono font-bold dark:text-[#39FF14] light:text-emerald-700 group-hover:translate-x-2 transition-transform duration-300">
                    <span>VIEW DOMAIN DETAILS & OBJECTIVES</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Theme Detail Modal */}
      <ThemeDetailModal
        theme={selectedTheme}
        onClose={() => setSelectedTheme(null)}
      />
    </section>
  );
}
