"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const events = [
  {
    id: 8,
    img: "/assests/thinkercad.jpg",
    title: "ThinkerCad WOrkshop",
    des: "Ideator GECT is here with an exhilarating TinkerCad circuit design & simulation workshop.Vishak mohan ,our esteemed alumni will be leading us to dive deep into the world of circuit modelling",
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",

    link: "",
    status: "Registeration Closed",
  },
  {
    id: 7,
    img: "/assests/powerpoint.jpg",
    title: "Power Point Workshop",
    des: "Elevate your presentation to the next level with our support. Ideator GecT brings you a workshop on Powerpoint Presentation.Our mentors will focus on: Basic use and options,Graphs and charts,Animations for a quiz template,Making your PPT 10 times advanced",
    venue: "Room : 213",
    date: "6-02-2024",
    time: "4:15pm",

    link: "",
    status: "Registeration Closed",
  },
  {
    id: 6,
    img: "/assests/product.jpg",
    title: "Product Design Challenge",
    des: "*Ideator GECT* , in partnership with *Spotcheck Global* , presents to you the *Product Design Challenge* for a golden opportunity to revolutionize medical technology!Students are challenged to design a groundbreaking medical device aligning with Spotcheck's technology. Designs can take the form of CAD drawings or 3D models, with no constraints on dimensions.A prize of *5k* awaits each of the shortlisted designs! Additionally, the top designs will be invited for a detailed discussions to delve deeper into the concepts presented.",
    venue: "",
    date: "Deadline : 3-02-2024",
    time: "",

    link: "",
    status: "Registeration Closed",
  },
  {
    id: 5,
    img: "/assests/iotwork.jpg",
    title: "IOT Workshop",
    des: "Ever contemplated the idea of a farm animal equipped with a biochip transponder or considered delving into the science behind smart homes? Allow us to introduce you to Internet of Things (IoT); the cornerstone of the digital age! Ideator GECT brings you IoT Workshop! Through this workshop you will gain insights about components, and workings,also witness a demonstration project by the mentee.",
    venue: "Ideator room",
    date: "16-11-2023",
    time: "4:15 pm",

    link: "",
    status: "Registeration Closed",
  },
  {
    id: 4,
    img: "/assests/placementpgm.jpg",
    title: "Programming",
    des: "With placement season right around the corner, is the aspect of Coding intimidating you? All right, we've got you covered. Ideator is holding a Coding Camp as part of *Spectra* , our workshop series, teaching you the very basics of coding, designed specifically for people taking placement tests.* For 3rd And 4th Years ❗*",
    time: "5:00 pm",
    venue: "ASAP Hall EC Department",
    date: "5|6|7 Oct 2023",
    link: "",
    status: "Registeration Closed",
  },
  {
    id: 3,
    img: "/assests/salvete.jpg",
    title: "Salvete",
    des: "An exciting program initiated by *Ideator* *GECT* , invites students to a collaborative brainstorming session. Here, the focus is on fostering innovative partnerships between Ideator and various departments within the institute ✨The event is an interactive session between freshers, faculties and senior who came before, introducing worlds and sharing ideas. Afterwards we will have a tour of the Ideator room and its activities.",
    time: "4:15 pm",
    venue: "Respective Departments",
    date: "20 Sep 2023",
    link: "",
    status: "Registeration Closed",
  },
  {
    id: 2,
    img: "/assests/event2.png",
    title: "Photography Contest",
    des: "Celebrating the beauty of engineering and its often unseen or unsung contributions, *Ideator GECT* as a pre *IDEATO* event, presents an exciting photography contest exclusively for the young and smart freshers. Let us start that academic journey with a fresh perspective on the world, this time, with the keen eye and enthusiam of an engineer.*Topic: Engineering in everyday life*",
    time: "",
    venue: "",
    date: "Submition :19 Sep 2023",
    link: "",
    status: "Registeration Closed",
  },
  {
    id: 1,
    img: "/assests/cpwork2023.jpg",
    title: "C Programming Workshop",
    des: "Great News! *Ideator GECT*, as part of the *Spectra* workshop series, is holding an exam-oriented *C Programming workshop* to help you ace the exam. Whether you need help with basic syntax or more advanced topics, they've got you covered.",
    time: "6:30pm",
    venue: "Online",
    date: "29|30|31 July 2023",
    link: "",
    status: "Registeration Closed",
  },
];
const list = events.length;
const Events = () => {
  const [event, setEvent] = useState(events[0]);


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 "
    >
      <div className="container mx-auto text-center h-full">
        <div className=" mx-auto text-left">
          {events.map((event, index) => {
            return (
              <div className=" h-full my-auto  md:py-28 py-20 md:flex ">
                <div className="w-full my-auto h-full flex flex-col md:w-[50%] xl:h-[400px]  md:justify-between order-2 md:order-none  ">
                  <div className="my-auto flex flex-col">
                    <div className="md:text-3xl px-1 text-lg py-2 font-bold leading-none text-base2 group-hover:text-acccent transition-all duration-500 capitalize">
                      {event.title}
                    </div>
                    <p className="px-1 text-base3 md:text-sm text-xs py-2 opacity-95 font-light">
                      {event.des}
                    </p>
                    <div className="flex justify-between pr-6 md:text-sm text-xs py-2">
                      <div className="px-1 text-sm md:text-base font-semibold text-[#7a7a7a]">
                        {event.date}
                      </div>
                      <div className="px-1 text-sm md:text-base font-semibold text-[#7a7a7a]">
                        {event.time}
                      </div>
                    </div>
                    <div className="px-1 py-2 text-sm md:text-base font-semibold text-[#7a7a7a]">
                      {event.venue}
                    </div>
                    <div className="py-2 mx-auto">
                      <a href={event.link}>
                        <button className="bg-base2 p-2 rounded-xl md:text-base text-sm text-[white] hover:text-base1">
                          {event.status}
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
                        <Image src={event.img} fill className="object-fill" />
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

export default Events;
