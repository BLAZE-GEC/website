'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Who is eligible to participate in Ideator Hackathon 2026?",
    a: "The hackathon is open to engineering college students across Kerala. Teams must consist of 3 to 4 members."
  },
  {
    q: "What software tools are required for the hackathon?",
    a: "The primary tools for the hackathon are MATLAB and Simulink. Participants will gain technical training through the MATLAB Technical Bootcamp starting August 27 & 28."
  },
   
  {
    q: "What is required in the final online submission package?",
    a: "Submissions are due by September 14 on the official portal. The package must include: (1) Project Abstract, (2) MATLAB / Simulink Files, (3) Source Code (where applicable), (4) Demonstration Video."
  },
 
   
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-emerald-950/60 light:bg-emerald-100 border border-[#39FF14]/20 mb-6"
          >
            <HelpCircle className="w-4 h-4 dark:text-[#39FF14] light:text-emerald-800" />
            <span className="text-sm font-medium dark:text-[#39FF14] light:text-emerald-800 uppercase tracking-wider">FAQ</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold dark:text-white light:text-slate-900 mb-4"
          >
            Got Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="dark:text-gray-400 light:text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Everything you need to know about the event, registration, and participation.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden transition-all duration-300 border dark:border-gray-800 light:border-slate-200 hover:border-[#39FF14]/40"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-start justify-between gap-4 focus:outline-none"
              >
                <div className="flex gap-4">
                  <span className="font-mono text-[#39FF14] dark:text-[#39FF14] light:text-emerald-700 mt-1">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium dark:text-white light:text-slate-900">
                    {faq.q}
                  </span>
                </div>
                <div className="mt-1 flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-[#39FF14] dark:text-[#39FF14] light:text-emerald-700 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t dark:border-gray-900/80 light:border-slate-200 ml-10">
                      <p className="dark:text-gray-400 light:text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
