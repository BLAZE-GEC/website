"use client";

import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const alumni = [
  { id: "1",
    name: "Feroze Gani",
    image: "/assests/firoz.jpeg",
    role: "1988 – 92 BTech Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/ferozegani/",
    description: `<p style="text-align: justify;">Feroze Gani is an entrepreneur based in the USA. He is the President of iXi gAI, Inc and co-founded the company along with other MIT graduates. The company helps large enterprises enable AI in various solutions including ERP and Cyber security.</p>
    <p style="text-align: justify;">Mr. Gani is the founder of Rational Foci, focused on large and complex ERP implementations and global solutions roll-out for mega cap companies. He was the co-founder of Inavista Solutions, a US-based technology company providing services in business consulting, enterprise architecture, ERP implementation, and program management. Mr. Gani is also the President of Ganisys group of companies with operations in the Middle East, USA, and India, providing various technology-related services in hardware, networking, infrastructure, and security.</p>
    <p style="text-align: justify;">Mr. Gani is a passionate supporter of socially responsible initiatives. He is a co-founder of Grain-Ed, a non-profit educational initiative started by four college mates—alumni of Government Engineering College, Thrissur. Since 2007, he has been involved with the environmental project Punarjani, an afforestation model developed on the foothills of the ecologically fragile Western Ghats in Kerala.</p>
    <p style="text-align: justify;">He’s also the President of the charity organization Arise Kerala Inc, registered in the USA, engaged in humanitarian efforts in the fields of disaster relief, hunger elimination, education support, and healthcare support in his home state of Kerala.</p>
    <p style="text-align: justify;"><strong>Message</strong></p>
    <p style="text-align: justify;">The passion of students engaged in the Ideator Club is encouraging. Many of the students and teams that I have interacted with show purpose, skills, and capabilities required to become successful with the help of some guidance and mentoring. As an alumnus, I am glad to support and mentor some of these students in their journey in college and future career.</p>`
  
    },
  {id: "2",
    name: "Jayaraj Shankar",
    image: "/assests/jayashankar.jpeg",
    role: "1995 – 99 BTech Mathematics & Computer Science",
    linkedin: "https://www.linkedin.com/in/jayarajshankar/",
    description: `<p>Jayaraj Shankar
1995 – 99 BTech Computer Science & Engineering
Jayaraj Shankar is an entrepreneur and business consultant with a background in Computer Science & Engineering (University of Calicut) and an MBA in Business Analytics (BITS Pilani). Through his consulting practice, Groovy Tusker, he focuses on R&D, conceptualizing, and building innovative solutions for industries and communities. A dedicated advocate for social impact, he serves as an Executive Member of the GEC Thrissur Alumni Association and actively participates in community-building efforts within and beyond the campus</p>`
  },
  {
    id: "3",
    name: "Don Paul ",
    image: "/assests/nopic.png",
    role: "Ideator Convenor : 2015 – 16",
    linkedin: "https://www.linkedin.com/in/hidon/",
    description: "<p>Don Paul served as the convenor for 2015-16, encouraging students to engage in creative problem-solving and technical projects.</p>"
  },
  {
    id: "4",
    name: "Nishanth Gopinathan",
    image: "/assests/nopic.png",
    role: "1993 -97 BTech Chemical Eng",
    linkedin: "https://www.linkedin.com/in/nishanth-gopinathan-4457776",
    description: "<p>An experienced chemical engineer, Nishanth Gopinathan has contributed significantly to the field with his expertise and knowledge.</p>"
  },
  {
   id: "5", 
    name: "Libin Babu", 
    role: "Ideator Convenor : 2012 – 13", 
    linkedin: "https://www.linkedin.com/in/libin-babu-engineer/", 
    image: "/assests/nopic.png",
    description: "<p>Libin Babu was the convenor of Ideator Club for the year 2012-13, actively mentoring young innovators and driving multiple innovation-focused initiatives.</p>"
   },
  {
    id: "6",
    name: "Prasad Pillai",
    image: "/assests/nopic.png",
    role: "1996 – 99 BTech Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/prasadppillai/",
    description: "<p>Prasad Pillai has made notable contributions to the electrical and electronics engineering field, leveraging his technical acumen.</p>"
  },
  {
    id: "7",
    name: "Arvind SA",
    image: "/assests/nopic.png",
    role: "Ideator Convenor : 2011 – 12",
    linkedin: "https://www.linkedin.com/in/arvindsa90/",
    description: "<p>Arvind SA led the Ideator Club during 2011-12, fostering innovation and entrepreneurship among students.</p>"
  },
  {
    id: "8",
    name: "Najeeb Kuzhiyil ",
    image: "/assests/nopic.png",
    role: "BS Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/najeeb-kuzhiyil/",
    description: "<p>Najeeb Kuzhiyil is a chemical engineer known for his extensive work in process optimization and sustainable practices.</p>"
  },
  {
    id: "9",
    name: "Krishnakumar T",
    image: "/assests/nopic.png",
    role: "Former Ideator faculty Advisor ",
    linkedin: "https://www.linkedin.com/in/krishnakumar-t-bb559b18/",
    description: "<p>As a former faculty advisor, Krishnakumar T played a crucial role in guiding and mentoring young innovators at Ideator Club.</p>"
  }
];

const AlumniCard = ({ member, hoveredId, setHoveredId }) => {
  const isHovered = hoveredId === member.id;

  return (
    <div
      className="relative flex flex-col items-center text-center p-6 bg-cardBg border border-primary/10 rounded-2xl shadow-sm hover:shadow-3d transition-all duration-300 w-full max-w-[260px] cursor-pointer group"
      onMouseEnter={() => setHoveredId(member.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => setHoveredId(isHovered ? null : member.id)}
    >
      {/* Circle Image Wrapper */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-md bg-bgSecondary border-4 border-accent/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/assests/nopic.png";
            }}
          />
        ) : (
          <span className="text-4xl font-bold text-accent/50">
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Details */}
      <h3 className="mt-4 font-heading text-lg font-bold text-primary leading-tight">
        {member.name}
      </h3>
      <p className="text-secondary text-sm mt-2 leading-snug">
        {member.role}
      </p>

      {/* Floating details overlay (AnimatePresence makes it smooth!) */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: -10, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="absolute top-[105%] left-1/2 z-50 w-[90vw] max-w-[340px] sm:max-w-[380px] p-6 bg-bgSecondary/95 backdrop-blur-md rounded-2xl shadow-2xl border border-accent/30 text-left flex flex-col gap-3 pointer-events-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking within overlay
          >
            {/* Header info */}
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-heading text-lg font-bold text-primary leading-tight">
                  {member.name}
                </h4>
                <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors flex-shrink-0 ml-2"
                >
                  <FaLinkedin size={22} />
                </a>
              )}
            </div>

            {/* Description area */}
            <div
              className="text-sm text-secondary leading-relaxed overflow-y-auto max-h-48 pr-2 scrollbar-thin text-justify"
              dangerouslySetInnerHTML={{ __html: member.description }}
            />

            {/* Decorative arrow pointing to the card */}
            <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 border-[8px] border-transparent border-b-bgSecondary/95"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AlumniPage = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <main className="container mx-auto px-4 pt-10 pb-20 min-h-screen">
      {/* 1. Header Section */}
      <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Alumni Network
        </h1>
        <p className="text-secondary">
          At Ideator Club, we celebrate our inspiring network of supporters and alumni who have guided us and empowered the next generation of innovators.
        </p>
      </RevealOnScroll>

      {/* 2. Grid of Alumni Cards (Moved to top) */}
      <RevealOnScroll className="mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {alumni.map((member) => (
            <AlumniCard
              key={member.id}
              member={member}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          ))}
        </div>
      </RevealOnScroll>

      {/* 3. Guiding Lights / CTA Section (Moved to bottom as a premium full-width card) */}
      <RevealOnScroll className="mt-16">
        <div className="bg-cardBg border border-primary/10 rounded-2xl p-8 md:p-10 shadow-3d flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">Guiding Lights</h2>
            <h3 className="text-lg font-bold text-accent mb-4">Innovation Thrives when nurtured by those who believe in it.</h3>
            <p className="text-secondary text-justify leading-relaxed">
              At <strong>Ideator Club</strong>, we celebrate an inspiring network of alumni and supporters who mentor, guide, and empower future innovators. Their contributions are vital to keeping our student-run makerspace running and growing.
            </p>
          </div>
          
          <div className="flex-1 md:border-l md:border-primary/10 md:pl-10 flex flex-col gap-4">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
              🚀 Want to Give Back? Become a Supporter!
            </h3>
            <p className="text-secondary text-justify">
              Are you an alumnus or industry professional looking to mentor young innovators or support our makerspace? Get in touch with us to explore collaboration opportunities.
            </p>
            <button
              onClick={() => window.open("https://wa.me/919846851957?text=Hi%20team,%20I%20would%20like%20to%20join%20as%20a%20Mentor%2FSupporter.",
    "_blank")}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-bold shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 self-start"
            >
              Join as a Mentor / Supporter
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </main>
  );
};

export default AlumniPage;
