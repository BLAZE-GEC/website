"use client"

import Photo from '@/components/Photo';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useState } from 'react';
import Image from 'next/image';


const lists=[
  {
    id:1,
    img:"/assests/idtr_logo_nw.png",
    title:"Empowering Innovation, Inspiring Change",
des:"The Ideator Club at GECT is where visionary ideas become real-world solutions. We foster creativity and collaboration across engineering disciplines, igniting minds and fueling innovation."  },
  {
    id:2,
    img:"/assests/inaugration.png",
    title:"IDEATOR LAB",
    des:"Ideator had its lab inaugurated at a grand function blessed by the presence of former ISRO Chairman Dr. G. Madhavan Nair on 15th August 2013. AASHRAYA-Role of science and technology in alleviating the suffering and bettering the quality of life,was the theme of the event based on the first project(SMART MOTIVE)."
  },
  {
    id:3,
    img:"/assests/smartmotive.jpg",
    title:"Smart Motive",
des:"Smart motive was one of the most successful project developed under ideator. It was of immense importance in the medical field.Smart motive received numerous prices in project expos all over Kerala."  },
  {
    id:4,
    img:"/assests/completed/Bigmaclite.jpg",
    title:"Big Mac Lite",
des:"Big Mac Lite is a speech aid device designed to help bedridden individuals communicate with their caregivers. Our goal is to enhance their quality of life by providing a simple, effective, and user-friendly solution for essential communication."  }
]


export default function Home() {


  const [list, setlist] = useState(lists[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setlist(lists[currentIndex]);
  };
  return (
    <section className=" h-full w-screen  pt-24  ">
      
     {/*} <div className="absolute lg:h-[500px] z-0 lg:w-2/3 md:h-[750px] md:w-[750px] h-[400px] w-[400px] lg:-top-1/4  md:-top-1/3 md:-left-1/2 top-[100px] lg:-left-3/5 right-3/4 bg-base1  rounded-3xl rotate-45  opacity-85 "></div>

      <div className="relative container mx-auto h-full  ">

        <div className="flex flex-col lg:flex-row  items_center w-full justify-between lg:pt-32 lg:pb-24 ">
          <div className="text-center mx-auto my-auto w-3/4 lg:w-1/2  lg:text-2xl text-lg  py-16 px-4 ">
          <motion.span           initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }} className=''>orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the standard
                    dummy text ever since the 1500s,</motion.span>
          </div>

          <div className='mb-8 xl:mb-0 mx-auto lg:w-1/2 my-auto py-16 lg:py-0'>
          <Photo/>
        </div>
        </div>

      </div>*/}
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className=" w-screen flex flex-col justify-center xl:px-0 -z-10"
    >
      <div className="container mx-auto  h-full">
        <div className="flex flex-col md:flex-row md:gap-[30px] mx-auto text-left bg-base1 bg-opacity-30  py-2 rounded-lg">
          <div className="w-full md:w-[50%] xl:h-[400px] flex flex-col md:justify-between order-2 md:order-none  ">
            <div className="my-auto">
              <div className="md:text-3xl text-lg py-4 px-2 font-semibold leading-none stroke-primary   text-center group-hover:text-acccent transition-all duration-500 capitalize">
                {list.title}
              </div>
              <p className="text-base2 md:text-lg text-sm text-center  font-medium px-2 lg:px-5 lg:text-left">
                {list.des}
              </p>
              
             
            </div>
          </div>
          <div className="w-full  my-auto md:w-[50%]  ">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[400px] mb-12"
              onSlideChange={handleSlideChange}
              
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}

              
              modules={[Autoplay, Pagination, Navigation]}
            >
              {lists.map((list, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-1/2   w-full mx-auto flex justify-center items-center ">
                      <div></div>
                      <div className=" w-full h-[250px] ">
                        <Image src={list.img} fill className="object-contain z-0" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}


            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>

    </section>
  );
}
