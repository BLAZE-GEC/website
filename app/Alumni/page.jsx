import { FaLinkedin } from "react-icons/fa";

import Link from "next/link";

const alumni = [
  {
    id: "1",
    name: "Libin Babu ",
    image: "",
    role: "Ideator Convenor : 2012 – 13",
    linkedin: "https://www.linkedin.com/in/libin-babu-engineer/",
    
  },
  {
    id: "2",
    name: "Arvind SA",
    image: "",
    role: "Ideator Convenor : 2011 – 12",
    linkedin: "https://www.linkedin.com/in/arvindsa90/",
    
  },
  {
    id: "3",
    name: "Don Paul ",
    image: "",
    role: "Ideator Convenor : 2015 – 16",
    linkedin: "https://www.linkedin.com/in/hidon/",
    
  },
  {
    id: "4",
    name: "Nishanth Gopinathan",
    image: "",
    role: "1993 -97 BTech Chemical Eng",
    linkedin: "https://www.linkedin.com/in/nishanth-gopinathan-4457776?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
  },
  {
    id: "5",
    name: "Feroze Gani",
    image: "",
    role: "1988 – 92 BTech Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/ferozegani/",
    
  },
  {
    id: "6",
    name: "Prasad Pillai",
    image: "",
    role: "1996 – 99  BTech Electrical & Electronics Engineering",
    linkedin: "https://www.linkedin.com/in/prasadppillai/",
    
  },
  {
    id: "7",
    name: "Jayaraj Shankar",
    image: "",
    role: "1995 – 99 BTech Mathematics & Computer Science",
    linkedin: "https://www.linkedin.com/in/jayarajshankar/",
    
  },
  {
    id: "8",
    name: "Najeeb Kuzhiyil ",
    image: "",
    role: "BS Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/najeeb-kuzhiyil/",
    
  },
  {
    id: "9",
    name: "Krishnakumar T",
    image: "",
    role: "Former Ideator faculty Advisor ",
    linkedin: "https://www.linkedin.com/in/krishnakumar-t-bb559b18/",
    
  }
  

];
const Alumni=()=>{
  
  
  return(<>
  <section className="py-10 bg-gray-100">
      
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Guiding Lights – Our Alumni & Supporters</h1>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Innovation doesn’t just come from ideas—it comes from people who nurture and support them.
        </h2>
        <p className="text-lg text-gray-700">
          At <span className="font-semibold">Ideator Club</span>, we are proud to have an incredible network of alumni and supporters who continue to shape the future by mentoring, guiding, and investing in the next generation of innovators.
        </p>
        <div className="mt-6 space-y-2 text-gray-700 text-lg">
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-600 text-2xl">💡</span> They are founders, engineers, researchers, and leaders.
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-600 text-2xl">💡</span> They have been where we are today and walked the path ahead.
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-blue-600 text-2xl">💡</span> They inspire, mentor, and empower students to turn ideas into reality.
          </p>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-gray-900">
          🌟 Meet Our Alumni & Supporters
        </h3>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {alumni.map((member, index) => (
          <div key={index} className="flex flex-col  items-center text-center">
            <div className="w-48 h-48 rounded-full  overflow-hidden shadow-lg bg-gray-200 border-4 border-gray-400">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>
            
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-blue-500 hover:text-blue-700"
              >
                <FaLinkedin size={28} />
              </a>
            )}
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center mt-16 px-4">
        <h2 className="text-3xl font-bold text-gray-800">🏆 Hall of Impact – Contributions Over the Years</h2>
        <p className="text-lg text-gray-700 mt-4">
          From mentoring product development to funding breakthrough projects, our supporters have played a key role in helping students build real-world solutions.
        </p>
      </div>

     
      <div className="max-w-3xl mx-auto text-center mt-12 px-4">
        <h3 className="text-2xl font-semibold text-gray-900">🚀 Want to Give Back? Become a Supporter!</h3>
        <p className="text-lg text-gray-700 mt-4">
          Are you an alumnus or industry professional looking to guide the next generation of innovators?
        </p>
        <p className="text-lg text-gray-700 mt-2">
          👉 Sign up to mentor, support, or fund breakthrough student projects.
        </p>
        <Link href="https://ideator.gectcr.ac.in/">
        <button className="mt-6 backgro bg-acccent-hover
 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-base2" >
          Join as a Mentor/Supporter
        </button></Link>
        
      </div>
    </section></>)
}
export default Alumni;


















