"use client"

import { motion } from "framer-motion"
const SideTransition = () => {
  return (
    <div>
        
        <div className="absolute lg:h-[500px] lg:w-2/3 md:h-[750px] md:w-[750px] h-[400px] w-[400px] lg:-top-1/4  md:-top-1/3 md:-left-1/2 top-[100px] lg:-left-3/5 right-3/4 bg-base1  rounded-3xl rotate-45  opacity-85 "></div>
<motion.div>
    <motion.svg className="lg:h-[500px] lg:w-2/3 md:h-[750px] md:w-[750px] h-[400px] w-[400px] lg:-top-1/4  md:-top-1/3 md:-left-1/2 top-[100px] lg:-left-3/5 right-3/4   rounded-3xl rotate-45  opacity-85 ">
        <motion.div/>
    </motion.svg>
</motion.div>
    </div>
  )
}

export default SideTransition