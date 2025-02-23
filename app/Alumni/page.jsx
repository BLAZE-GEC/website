"use client";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

const alumni = [
  { 
    id: "1", 
    name: "Libin Babu", 
    role: "Ideator Convenor : 2012 – 13", 
    linkedin: "https://www.linkedin.com/in/libin-babu-engineer/", 
    image: "/assests/nopic.png",
    description: "<p>Libin Babu was the convenor of Ideator Club for the year 2012-13, actively mentoring young innovators and driving multiple innovation-focused initiatives.</p>"
  },
  {
    id: "2",
    name: "Arvind SA",
    image: "/assests/nopic.png",
    role: "Ideator Convenor : 2011 – 12",
    linkedin: "https://www.linkedin.com/in/arvindsa90/",
    description: "<p>Arvind SA led the Ideator Club during 2011-12, fostering innovation and entrepreneurship among students.</p>"
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
  },  {
    id: "6",
    name: "Prasad Pillai",
    image: "/assests/nopic.png",
    role: "1996 – 99 BTech Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/prasadppillai/",
    description: "<p>Prasad Pillai has made notable contributions to the electrical and electronics engineering field, leveraging his technical acumen.</p>"
  },
  {
    id: "7",
    name: "Jayaraj Shankar",
    image: "/assests/nopic.png",
    role: "1995 – 99 BTech Mathematics & Computer Science",
    linkedin: "https://www.linkedin.com/in/jayarajshankar/",
    description: "<p>Jayaraj Shankar, with a strong background in mathematics and computer science, has been instrumental in developing cutting-edge solutions.</p>"
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


const Alumni = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Thank You for Your Support</h2>
        <p className="text-gray-600 mt-2">We deeply appreciate the guidance and mentorship of our esteemed alumni.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center relative">
        {alumni.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center text-center relative cursor-pointer transition-all duration-300"
            onMouseEnter={!isMobile ? () => setHoveredId(member.id) : undefined}
            onMouseLeave={!isMobile ? () => setHoveredId(null) : undefined}
            onClick={() => setHoveredId(hoveredId === member.id ? null : member.id)}
          >
            <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg bg-gray-200 border-4 border-gray-400 flex items-center justify-center">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-3 text-base font-semibold text-gray-900">{member.name}</h3>
            <p className="text-gray-600 text-sm">{member.role}</p>
            {hoveredId === member.id && (
              <div className="mt-2 text-gray-700 text-sm px-4 bg-white p-2 rounded shadow-lg">
                <div dangerouslySetInnerHTML={{ __html: member.description }}></div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center mt-2 text-blue-500 hover:text-blue-700"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;

















