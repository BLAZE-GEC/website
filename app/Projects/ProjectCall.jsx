"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    id: 8,
    img: "/assests/",
    title: "NEW PROJECTS",
    des: "Comming Soon",
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",

    link: "",
    status: "Registeration Soon",
  },
];
const list = projects.length;
const ProjectCall = () => {
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
      className="min-h-[80vh] lg:w-[1024px] flex flex-col justify-center xl:px-0 "
    >
      <div className="container mx-auto text-center h-full">
        <div className=" mx-auto text-left">
          {projects.map((project, index) => {
            return (
              <div className=" h-full my-auto  md:py-24 py-20 md:flex ">
                <div className="w-full my-auto h-full flex flex-col md:w-[50%] xl:h-[400px]  md:justify-between order-2 md:order-none  ">
                  <div className="my-auto flex flex-col">
                    <div className="md:text-3xl px-1 text-lg py-2 font-bold leading-none text-base2 group-hover:text-acccent transition-all duration-500 capitalize">
                      {project.title}
                    </div>
                    <p className="px-1 text-base3 md:text-sm text-xs py-8 opacity-95 font-light">
                      {project.des}
                    </p>

                    <div className="py-2 mx-auto">
                      <a href={project.link}>
                        <button className="bg-base2 p-2 rounded-xl md:text-base text-sm text-[white] hover:text-base1">
                          {project.status}
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  key={index}
                  className="w-full  md:pt-0 pt-4 my-auto md:w-[50%] "
                >
                  <div className="w-full">
                    <div className="lg:h-[400px] h-[200px] relative group w-3/4 mx-auto flex justify-center items-center bg-base2 ">
                      <div></div>
                      <div className="relative w-full h-full">
                        <Image src={project.img} fill className="object-fill" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectCall;
ProjectCall;
