import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    id: 3,
    img: "/assests/spacerover.jpg",
    title: "Space Rover",
des:"Our project involves designing an autonomous rover using actual space rover technology to explore extraterrestrial terrains. The rover will navigate using advanced sensors, including soil analysis sensors, and conduct scientific experiments. Key features include obstacle detection, soil analysis sensors, and solar-powered energy management. The aim is to enhance our capabilities in space exploration and robotics.",    aosdelay: "",
  },
  {
    id: 2,
    img: "/assests/super_talker.jpg",
    title: "Super Talker",
    des: "Super Talker is an advanced speech aid device designed for children with autism and cerebral palsy. Featuring eight customizable commands with visual aids, it facilitates essential communication with caregivers. Its user-friendly design and robust build ensure reliability and ease of use, making everyday interactions smoother and more effective. Join us in supporting this transformative project and help create a more inclusive world.",
    aosdelay: "",
  },
  {
    id: 1,
    img: "/assests/eauto.jpg",
    title: "E Auto",
    des: "Our E-Auto Project is dedicated to converting an old autorickshaw into an innovative electric vehicle with startup potential. This initiative focuses on creating a sustainable and efficient transportation solution that can be scaled for commercial use. By integrating cutting-edge technology and forward-thinking design, we aim to revolutionize urban mobility while fostering environmental consciousness. This project not only advances green transportation but also cultivates entrepreneurial skills and startup culture among students. Join us in driving the future of sustainable innovation.",
    aosdelay: "",
  },
];
const list = projects.length;
const UpcomingProjects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="min-h-[80vh] w-screen flex flex-col justify-center xl:px-0 "
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row md:gap-[30px] mx-auto text-left">
          <div className="w-full md:w-[50%] xl:h-[400px] flex flex-col md:justify-between order-2 md:order-none ">
            <div className="my-auto">
              <div className="md:text-6xl text-5xl py-3 leading-none font-extrabold text-transparent text-outline">
                {list - project.id + 1}
              </div>
              <div className="md:text-2xl text-lg py-2 font-bold leading-none text-base1 group-hover:text-acccent transition-all duration-500 capitalize">
                {project.title}
              </div>
              <p className="text-base2 md:text-sm text-xs py-2 opacity-95 font-light">
                {project.des}
              </p>
              <div className="border border-base1"></div>
            </div>
          </div>
          <div className="w-full h-full md:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] md:mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full my-auto">
                    <div className="lg:h-[400px] h-[200px] relative group w-3/4 mx-auto flex justify-center items-center bg-base2 ">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-primary"></div>
                      <div className="relative w-full h-full ">
                        <Image
                          src={project.img}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0  xl:mx-auto  z-30 w-full justify-between xl:w-max xl:jutify-none "
                btnStyles="bg-base1 text-primary hover:text-base1 hover:bg-primary text-base1 text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default UpcomingProjects;
