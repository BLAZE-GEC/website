"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const events = [
  {
    id: 13,
    img: "/assests/events1/dwsim.jpeg",
    title: "DWSIM Workshop",
    des: `DWSIM Workshop: A Resounding Success!

Our exclusive DWSIM workshop for chemical engineering students was a huge hit! On January 8th, participants gathered to learn the fundamentals of process plant modeling using DWSIM. With rigorous thermodynamic and unit operations models, our attendees enhanced their skills in chemical engineering process design and optimization. We're thrilled with the outcome and grateful for the enthusiasm and engagement of our participants!`,
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },

  {
    id: 12,
    img: "/assests/events1/ros.jpeg",
    title: "ROS Workshop",
    des: `We had an incredible ROS Software Workshop led by Harrison Seby, an esteemed alumnus and robotics expert from Black Coffee Robotics! Participants gained hands-on experience in building and programming virtual robots while exploring ROS fundamentals like navigation, motion planning, and sensor integration. The workshop sparked creativity and innovation, providing valuable insights that enriched our robotics community. Huge thanks to Harrison Seby for sharing his expertise and inspiring us all!`,
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 11,
    img: "/assests/events1/robowar.jpeg",
    title: "ROBO WARS",
    des: `Step into the arena of Robowar, where power, precision, and passion collide! 🤖⚔️ This year’s battles showcased fierce bots, strategic mastery, and cutting-edge innovation. More than just a competition, it was a display of engineering brilliance and teamwork. Watch as these mighty machines clash, igniting sparks of creativity and determination.`,
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },

  {
    id: 10,
    img: "/assests/events1/robotics.jpeg",
    title: "Robotics Workshop",
    des: `Robotics Workshop : Exploring the Future of Robotics

Ideator GECT successfully hosted an engaging "Introduction to Robotics" workshop on September 10th, 2024. Our esteemed speaker, Christo Kollannur, Co-founder of Estro Tech Robotics, led the session.

Key Highlights:
- Comprehensive introduction to robotics fundamentals
- Exploring potential applications in various industries (healthcare, manufacturing, transportation)
- Inspiring examples of robots shaping the future (AI, machine learning, innovation)

Special Thanks:
- Christo Kollannur for sharing his expertise
- Jayaraj Shankar for valuable support
- Ideator volunteer coordinators Jishnu, Mohammed Safvan, and Execom member Anjana V for exceptional coordination efforts

This workshop ignited a passion for robotics in our students. Stay tuned for future events that delve deeper into this fascinating field!`,
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 9,
    img: "/assests/events1/javascript.jpeg",
    title: "Javascript Workshop",
    des: `javaScript Workshop

Our offline JavaScript workshop, "Build, Create, Innovate," was a resounding success! From February 11-13, participants gathered at our venue, eager to master JavaScript fundamentals, intermediate concepts, and advanced techniques.

Hands-on sessions, interactive discussions, and networking opportunities made this offline event an unforgettable experience. We're thrilled with the enthusiasm, engagement, and progress shown by our attendees!

Thanks to our expert speakers, dedicated organizers, and passionate participants for making this event a huge hit!

Stay tuned for more exciting offline events and workshops!`,
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },















  
  {
    id: 8,
    img: "/assests/thinkercad.jpg",
    title: "ThinkerCad Workshop",
    des: "Ideator GECT is here with an exhilarating TinkerCad circuit design & simulation workshop. Vishak Mohan, our esteemed alumni, will be leading us to dive deep into the world of circuit modeling.",
    venue: "Online",
    date: "25-06-2024",
    time: "7:00pm",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 7,
    img: "/assests/powerpoint.jpg",
    title: "Power Point Workshop",
    des: "Elevate your presentation to the next level with our support. Ideator GECT brings you a workshop on PowerPoint Presentation. Our mentors will focus on: Basic use and options, Graphs and charts, Animations for a quiz template, Making your PPT 10 times advanced.",
    venue: "Room : 213",
    date: "6-02-2024",
    time: "4:15pm",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 6,
    img: "/assests/product.jpg",
    title: "Product Design Challenge",
    des: "Ideator GECT, in partnership with Spotcheck Global, presents to you the Product Design Challenge for a golden opportunity to revolutionize medical technology! Students are challenged to design a groundbreaking medical device aligning with Spotcheck's technology. Designs can take the form of CAD drawings or 3D models, with no constraints on dimensions. A prize of 5k awaits each of the shortlisted designs! Additionally, the top designs will be invited for a detailed discussion to delve deeper into the concepts presented.",
    venue: "",
    date: "Deadline: 3-02-2024",
    time: "",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 5,
    img: "/assests/iotwork.jpg",
    title: "IoT Workshop",
    des: "Ever contemplated the idea of a farm animal equipped with a biochip transponder or considered delving into the science behind smart homes? Allow us to introduce you to Internet of Things (IoT); the cornerstone of the digital age! Ideator GECT brings you IoT Workshop! Through this workshop you will gain insights about components, and workings, also witness a demonstration project by the mentee.",
    venue: "Ideator room",
    date: "16-11-2023",
    time: "4:15 pm",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 4,
    img: "/assests/placementpgm.jpg",
    title: "Programming",
    des: "With placement season right around the corner, is the aspect of Coding intimidating you? All right, we've got you covered. Ideator is holding a Coding Camp as part of Spectra, our workshop series, teaching you the very basics of coding, designed specifically for people taking placement tests. For 3rd and 4th Years!",
    time: "5:00 pm",
    venue: "ASAP Hall EC Department",
    date: "5|6|7 Oct 2023",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 3,
    img: "/assests/salvete.jpg",
    title: "Salvete",
    des: "An exciting program initiated by Ideator GECT, invites students to a collaborative brainstorming session. Here, the focus is on fostering innovative partnerships between Ideator and various departments within the institute. The event is an interactive session between freshers, faculties, and seniors who came before, introducing worlds and sharing ideas. Afterwards, we will have a tour of the Ideator room and its activities.",
    time: "4:15 pm",
    venue: "Respective Departments",
    date: "20 Sep 2023",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 2,
    img: "/assests/event2.png",
    title: "Photography Contest",
    des: "Celebrating the beauty of engineering and its often unseen or unsung contributions, Ideator GECT, as a pre-IDEATO event, presents an exciting photography contest exclusively for the young and smart freshers. Let us start that academic journey with a fresh perspective on the world, this time, with the keen eye and enthusiasm of an engineer. Topic: Engineering in everyday life.",
    time: "",
    venue: "",
    date: "Submission: 19 Sep 2023",
    link: "",
    status: "Registration Closed",
  },
  {
    id: 1,
    img: "/assests/cpwork2023.jpg",
    title: "C Programming Workshop",
    des: "Great News! Ideator GECT, as part of the Spectra workshop series, is holding an exam-oriented C Programming workshop to help you ace the exam. Whether you need help with basic syntax or more advanced topics, they've got you covered.",
    time: "6:30pm",
    venue: "Online",
    date: "29|30|31 July 2023",
    link: "",
    status: "Registration Closed",
  }
];

const Events = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 mt-16"
    >
      <div className="container mx-auto text-center h-full">
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="w-full md:w-[48%] lg:w-[30%] xl:w-[30%] p-4 bg-[#F5F5F5] opacity-100 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-[200px] md:h-[300px] relative">
                  <Image src={event.img} fill className="object-cover rounded-t-lg" alt={event.title} />
                </div>
                <div className="p-4">
                  <h3 className="text-lg md:text-xl font-bold text-base2">{event.title}</h3>
                  <p className="text-sm md:text-base text-base3 opacity-95 font-light py-2">{event.des}</p>
                  <div className="flex justify-between text-sm font-semibold text-[#7a7a7a] py-1">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="text-sm font-semibold text-[#7a7a7a] py-1">{event.venue}</div>
                </div>
              </div>
              <div className="py-2 mx-auto">
                <a href={event.link}>
                <button className="bg-base2 p-2 rounded-xl md:text-base text-sm text-[white] hover:text-base1">
                          {event.status}
                        </button>

                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
