"use client";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

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
    name: "Jayaraj Shankar",
    image: "/assests/jayashankar.jpeg",
    role: "1995 – 99 BTech Mathematics & Computer Science",
    linkedin: "https://www.linkedin.com/in/jayarajshankar/",
    description: `<p>Jayaraj Shankar
1995 – 99 BTech Computer Science & Engineering
Jayaraj Shankar is an entrepreneur and business consultant with a background in Computer Science & Engineering (University of Calicut) and an MBA in Business Analytics (BITS Pilani). Through his consulting practice, Groovy Tusker, he focuses on R&D, conceptualizing, and building innovative solutions for industries and communities. A dedicated advocate for social impact, he serves as an Executive Member of the GEC Thrissur Alumni Association and actively participates in community-building efforts within and beyond the campus</p>`
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

  // Number of columns (4 for md:grid-cols-4 as in your original code)
  const numColumns = 4;
  const rows = [];
  for (let i = 0; i < alumni.length; i += numColumns) {
    rows.push(alumni.slice(i, i + numColumns));
  }
  
  // Get the details of the hovered alumni item
  const hoveredItem = alumni.find(item => item.id === hoveredId);

  return (
    <section className="py-0 bg-gray-100 flex flex-col md:flex-row items-center min-h-screen">
      {/* Left Side Content */}
      <div className="w-full md:w-1/4 px-6 mb-8 md:mb-0 bg-transparent p-6 rounded-lg shadow-md flex flex-col justify-center h-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Guiding Lights</h2>
        <h2 className="text-3xl font-bold text-gray-900 text-center">Innovation Thrives</h2>
        <p className="mt-2 text-gray-600 font-semibold text-justify">
          when nurtured by those who believe in it.
        </p>
        <p className="text-gray-600 mt-2 text-justify">
          At <strong>Ideator Club</strong>, we celebrate an inspiring network of alumni and supporters who mentor, guide, and empower future innovators.
        </p>
      
        <h3 className="mt-4 text-2xl font-bold text-gray-900 flex items-center text-center">
          🚀 Want to Give Back? Become a Supporter!
        </h3>
        <p className="text-gray-600 mt-2 text-justify">
          Are you an alumnus or industry professional looking to mentor young innovators?
        </p>
        <button
          style={{
            backgroundColor: '#808080',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            fontWeight: 'bold',
            boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#707070'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#808080'}
        >
          Join as a Mentor/Supporter
        </button>
      </div>

      {/* Right Side Alumni List */}
      <div className="w-full md:w-3/4 px-4">
        {rows.map((row, rowIndex) => (
          // Wrap each row (grid + its description row) in a container
          <div key={rowIndex} onMouseLeave={() => setHoveredId(null)}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
              {row.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center relative cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredId(member.id)}
                  onClick={() =>
                    setHoveredId(hoveredId === member.id ? null : member.id)
                  }
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg bg-gray-200 border-4 border-gray-400 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-tight">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
            {/* Render the full-width description row if any item in this row is active */}
            {row.some((member) => member.id === hoveredId) && hoveredItem && (
              <div
                // Keep the hovered state active if mouse is inside this description div
                onMouseEnter={() => setHoveredId(hoveredItem.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="mt-2 px-4"
              >
                <div className="text-gray-700 text-sm p-4 bg-white rounded shadow-lg border border-gray-300">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: hoveredItem.description,
                    }}
                  ></div>
                  {hoveredItem.linkedin && (
                    <a
                      href={hoveredItem.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center mt-2 text-blue-500 hover:text-blue-700"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alumni;
