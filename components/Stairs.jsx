import { animate, motion } from "framer-motion";

const Stairs = () => {
  return (
    <>
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.1,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        exit={{ top: ["100%", "0%"] }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="h-full w-1/6  bg-[#ffffff] relative"
      />
    </>
  );
};

export default Stairs;
