"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathaname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathaname}>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity:0,
          transition: { delay: 1, duration:1, ease: "easeInOut" },
        }}
        
        className="h-screen w-screen fixed bg-base1 top-0 z-30 pointer-events-none "
      />
      {children}</div>
    </AnimatePresence>
  );
};
export default PageTransition;
