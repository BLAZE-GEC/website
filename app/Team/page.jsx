"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";
import { RiLinkedinFill } from "react-icons/ri";

const members = [
  {
    id: 25,
    img: "/assests/thinkercad.jpg",
    name: "Prof.Lalgy Gopi, Electrical",
    des: "Staff Advisor",
    link: "https://www.linkedin.com/in/lalgy-gopi-5454061ba/",
  },
  {
    id: 25,
    img: "/assests/thinkercad.jpg",
    name: "Aysha PT ",
    des: "Convenor",
    link: "https://www.linkedin.com/in/aysha-pt-b2509222b/",
  },
  {
    id: 24,
    img: "/assests/thinkercad.jpg",
    name: "Abhay Krishna K",
    des: "Joint-Convenor",
    link: "https://www.linkedin.com/in/abhay-krishna-k-596a4722a/",
  },
  {
    id: 23,
    img: "/assests/thinkercad.jpg",
    name: "Krishna S",
    des: "Treasurer",
    link: "https://www.linkedin.com/in/krishna-s-39a27b260/",
  },
  {
    id: 22,
    img: "/assests/thinkercad.jpg",
    name: "Irene Mary Froyd",
    des: "Editor",
    link: "https://www.linkedin.com/in/irene-mary-froyd-626423247/",
  },
  {
    id: 21,
    img: "/assests/thinkercad.jpg",
    name: "Vishnu Divakar",
    des: "Sponership & P.R. Head",
    link: "https://www.linkedin.com/in/vishnu-dk24/",
  },
  {
    id: 20,
    img: "/assests/thinkercad.jpg",
    name: "Harichandana M",
    des: "Creative Director",
    link: "https://www.linkedin.com/in/harichandana-m/",
  },
  {
    id: 19,
    img: "/assests/thinkercad.jpg",
    name: "Anjana RB",
    des: "Content Head",
    link: "https://www.linkedin.com/in/anjana-r-b-2238941bb/",
  },
  {
    id: 18,
    img: "/assests/thinkercad.jpg",
    name: "Athul S",
    des: "Project Head (Circuital)",
    link: "",
  },
  {
    id: 17,
    img: "/assests/thinkercad.jpg",
    name: "Akash C",
    des: "Project Head (Non Circuital)",
    link: "https://www.linkedin.com/in/akash-c-2bb12a24a/",
  },
  {
    id: 16,
    img: "/assests/thinkercad.jpg",
    name: "Naveen P Suresh",
    des: "Electronics Lab Coordinator",
    link: "https://www.linkedin.com/in/naveen-p-suresh-9461762a1/",
  },
  {
    id: 15,
    img: "/assests/thinkercad.jpg",
    name: "Akhil Roy",
    des: "Tools & Machines Coordinator",
    link: "https://www.linkedin.com/in/akhil-roy-abb034271/",
  },
  {
    id: 14,
    img: "/assests/thinkercad.jpg",
    name: "Devika P",
    des: "Program Head",
    link: "https://www.linkedin.com/in/devika-p-a7b741245/",
  },
  {
    id: 13,
    img: "/assests/thinkercad.jpg",
    name: "Rishikeshan MD",
    des: "Robogames Head",
    link: "",
  },
  {
    id: 12,
    img: "/assests/thinkercad.jpg",
    name: "Anjana V",
    des: "Media & Publicity",
    link: "https://www.linkedin.com/in/anjana-v-837b94305/",
  },
  {
    id: 11,
    img: "/assests/thinkercad.jpg",
    name: "Sreerag R",
    des: "Media & Publicity",
    link: "https://www.linkedin.com/in/sreeragrayirath/",
  },
  {
    id: 10,
    img: "/assests/thinkercad.jpg",
    name: "Dravid Desh D",
    des: "Media & Publicity",
    link: "https://www.linkedin.com/in/dravid-desh-d-b29a2a2bb/",
  },
  {
    id: 9,
    img: "/assests/thinkercad.jpg",
    name: "Anamika CS",
    des: "Program Coordinators",
    link: "https://www.linkedin.com/in/anamika-c-s-726414270/",
  },
  {
    id: 8,
    img: "/assests/thinkercad.jpg",
    name: "Abdul Hakkim S",
    des: "Program Coordinators",
    link: "https://www.linkedin.com/in/abdul-hakkim-64a50123a/",
  },
  {
    id: 7,
    img: "/assests/thinkercad.jpg",
    name: "Navya MS",
    des: "Department Coordinators(PE)",
    link: "https://www.linkedin.com/in/navya-m-s-14803629b/",
  },
  {
    id: 6,
    img: "/assests/thinkercad.jpg",
    name: "Saran VS",
    des: "Department Coordinators(CE)",
    link: "",
  },
  {
    id: 5,
    img: "/assests/thinkercad.jpg",
    name: "V Gopika Unni",
    des: "Department Coordinators(CS)",
    link: "",
  },
  {
    id: 4,
    img: "/assests/thinkercad.jpg",
    name: "Irin Maria",
    des: "Department Coordinators(ECE)",
    link: "https://www.linkedin.com/in/irin-maria-bbb60b2b7/",
  },
  {
    id: 3,
    img: "/assests/thinkercad.jpg",
    name: "Harishankar",
    des: "Department Coordinators(ME)",
    link: "",
  },
  {
    id: 2,
    img: "/assests/thinkercad.jpg",
    name: "Diya Ravi",
    des: "Department Coordinators(EEE)",
    link: "",
  },
  {
    id: 1,
    img: "/assests/thinkercad.jpg",
    name: "Naveen Venugopal",
    des: "Department Coordinators(CHE)",
    link: "",
  },
];
const list = members.length;
const Team = () => {
  const [member, setMember] = useState(members[0]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 "
    >
      <div>
        <h1 className="text-center text-xl md:text-3xl  py-8 ">Introducing Our Team</h1>
      </div>
      <div className="container mx-auto text-center h-full">
        <div className=" mx-auto py-8 text-left grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {members.map((member, index) => {
            return (
              <div className="py-6 mx-auto text-center" key={index}>
                <div className="">
                  <div className="mx-auto flex  md:h-48 md:w-48 w-32 h-32 rounded-full bg-acccent md:pt-36 pt-24 pl-12 md:pl-20  ">
                    <a href={member.link}>
                      
                      <div className=" md:h-10 md:w-10 h-6 w-6 my-auto mx-auto flex rounded-full bg-[white]  ">
                        <RiLinkedinFill className="mx-auto my-auto h-3 md:h-6 text-[blue]" />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="text-sm md:text-base text-base3">{member.name}</div>
                <div className="font-semibold text-xs md:text-sm text-base3">{member.des}</div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;