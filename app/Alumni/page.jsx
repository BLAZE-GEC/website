"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { RiLinkedinFill } from "react-icons/ri";
const members = [
  {
    id: "1",
    name: "Nishanth Gopinathan",
    img: "",
    branch: "Chemical",
    link: "https://www.linkedin.com/in/nishanth-gopinathan-4457776?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    year:"1993-97"
  },
];

const Alumni = () => {
  const [member, setMember] = useState(members[0]);
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 "
      >
        <div>
          <h1 className="text-center text-xl md:text-3xl  py-8 ">
            Meet our Alumni
          </h1>
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
                  <div className="text-sm md:text-base text-base3">
                    {member.name}
                  </div>
                  <div className="font-semibold text-xs md:text-sm text-base3">
                  {member.branch},{member.year}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.section>
    </>
  );
};
export default Alumni;
