"use client";

import { motion } from "framer-motion";

/**
 * Wrap any section in this to get the same fade-up-on-scroll effect
 * used throughout the target design (the ".reveal" / ".reveal-delay-N"
 * classes in the original HTML/CSS).
 *
 * Usage:
 *   <RevealOnScroll>...</RevealOnScroll>
 *   <RevealOnScroll delay={0.15}>...</RevealOnScroll>   // for staggered sections
 */
export default function RevealOnScroll({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}