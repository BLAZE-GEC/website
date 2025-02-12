'use client'

import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="relative text-black overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0,
              transition: { delay: 2, duration: 0.5, ease: "easeInOut" },
            }}
            className="absolute lg:h-[670px] h-full -mt-6 lg:mt-0 lg:w-[75px] w-[19px] bg-base2 right-0 opacity-70"
          ></motion.div>
          <div className="bg-transparent flex">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" },
              }}
              className="bg-transparent mx-auto py-6 md:text-4xl text-xl lg:mt-10"
            >
              {" "}
              About This club
            </motion.span>
          </div>
          <div
            data-aos="fade-right"
            className="relative bg-transparent flex lg:py-20 lg:mx-20 mx-5 lg:pb-32 pb-8"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" },
              }}
              className="mx-auto md:text-base text-xs"
            ><div style={{ backgroundColor: "#F5F5F5", opacity: "100%" , padding: "10px", borderRadius: "5px" }}>
              Ideator, the innovation club at Government Engineering College, Thrissur, was constituted with the aim of nurturing the element of innovation among fellow GEC students. The college has witnessed the most active version of Ideator since its inception.
              <br /><br />
              Ideator is inspired by the innovation of the late DRDO scientist K.P. Shaji. To commemorate his ideas and encourage bright young minds at GEC, we present annual awards for the best two innovative projects of the college in his honor. Additionally, we provide financial assistance as sponsorship or individual contributions to worthy projects through our alumni associations.
              <br /><br />
              We organize valuable workshops featuring eminent personalities, providing students with first-hand experiences of technical and innovative ideas. We also support students in patenting their projects, ensuring they receive technical, social, and financial aid to secure patents for their innovative works.
              <br /><br />
              Our dedicated team is always open to welcoming new ideas and ensuring they develop into useful products. We also host project expos, inviting eminent personalities and school students, to showcase innovative projects from GEC. Our mission remains to nurture innovation and bring together brilliant minds from all departments to collaborate and transform ideas into reality.
              </div>
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;