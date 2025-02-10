'use client'

import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      {" "}
      <div
        
      >
        <div className="  relative    text-black overflow-hidden   ">
          <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: .5, ease: "easeInOut" }}} className="absolute lg:h-[670px] h-full -mt-6 lg:mt-0  lg:w-[75px] w-[19px]   bg-base2  right-0   opacity-70 "></motion.div>
          <div className=" bg-transparent flex ">
            <motion.span initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: .5, ease: "easeInOut" },
          }}  className="bg-transparent mx-auto  py-6  md:text-4xl text-xl lg:mt-10">
              {" "}
              About This club
            </motion.span>
          </div>
          <div
            data-aos="fade-right"
            className="relative bg-transparent flex lg:py-20 lg:mx-20 mx-5 lg:pb-32 pb-8 "
          >
            <motion.span initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: .5, ease: "easeInOut" },
          }}  className=" mx-auto  md:text-base  text-xs">
              Ideator, the innovation club at Government Engineering College,
              Thrissur was constituted with the aim of nurturing the element of
              innovation among fellow gec students. The college witnessed the
              most active version of Ideator since its inception. <br /> <br />
              Ideator is inspired by the innovation of late DRDO scientist K.P
              Shaji. To commemorate his ideas and encourage the bright young
              minds of gec to churn their brains we present awards annually for
              the best two innovative projects of the college in honour of late
              K.P Shaji We also make available financial assistance as
              sponsorship or individual contribution to the projects worthy of
              it from our alumni associations in the name of K.P Shaji through
              our alumni. We organise valuable workshop series on technical and
              innovative ideas by eminent personalities thereby providing the
              young brains of gec a first-hand experience. We also lend our
              helping hands to patent the projects of the innovators of gec. We
              provide technical, social and whatsoever support we can to help
              them get the patents for their innovative works. We have a team
              who possess an unparalleled willingness to help the innovative
              minds. Our team always keep our hands open to welcome the bright
              ideas and also see to it that the idea has developed into a useful
              product. We also provide exposure to the innovative projects of
              gec by conducting project expos inviting eminent personalities and
              school students. Organising and taking part in online discussions
              to help nurture a new idea also adds to our activities. Bringing
              out the potential from the bright minds of the country remains our
              first priority. We have been successful so far in encouraging the
              brilliant minds of the gec to churn their brain amidst the theory
              classes. The projects that come out of the gec are the flowers of
              our success. Another contribution of the Ideator is bringing of
              the innovative minds of all the departments together so that they
              can club their ideas and innovative thinkings.
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
