
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Prof. Lalgy Gopi",
    role: "Staff Advisor",
    image: "/assests/team/lalgygopi.jpg", 
    linkedin: "",
  },
  {
    name: "Prof. Soni",
    role: "Faculty Advisor(CSE)",
    image: "/assests/team/soni.jpg",
    linkedin: "",
  },
  {
    name: "Prof. Sajith babu c",
    role: "Faculty Advisor(ME)",
    image: "/assests/team/sajithbabuc.jpg",
    linkedin: "",
  },
  {
    name: "Prof. Sammil",
    role: "Faculty Advisor(PE)",
    image: "/assests/team/sammil.jpg",
    linkedin: "",
  },
  {
    name: "Prof. Sajith Kumar M",
    role: "Faculty Advisor(ECE)",
    image: "/assests/team/sajithkumarm.jpg",
    linkedin: "",
  },
  {
    name: "Prof. Saurabh Sahadev AP",
    role: "Faculty Advisor(CHE)",
    image: "/assests/team/saurabhsahadevap.jpg",
    linkedin: "",
  },
  {
    name: "Hima Tj",
    role: "Convenor",
    image: "/assests/team/himatj.jpg",
    linkedin: "",
  },
  {
    name: "Krishna S",
    role: "Secretary",
    image: "/assests/team/krishnas.jpg",
    linkedin: "",
  },
  {
    name: "Emil Jose Maliakal",
    role: "Joint-Convenor",
    image: "/assests/team/EmilJoseMaliakal.jpg",
    linkedin: "",
  },
  {
    name: "Maria Denny",
    role: "Joint Secretary",
    image: "/assests/team/mariadenny.jpg",
    linkedin: "",
  },
  {
    name: "Saphal S Brijesh",
    role: "Joint Treasurer",
    image: "/assests/team/saphalsbrijesh.jpg",
    linkedin: "",
  },
  {
    name: "Naveen P Suresh",
    role: "Project Head",
    image: "/assests/team/naveenpsuresh.jpg",
    linkedin: "",
  },
  {
    name: "Navadeep C K",
    role: "Project Sub-Head",
    image: "/assests/team/navadeepck.jpg",
    linkedin: "",
  },
  {
    name: "Jishnu P",
    role: "Robotics Head",
    image: "/assests/team/jishnup.jpg",
    linkedin: "",
  },
  {
    name: "Kasinath Salim",
    role: "Electronics Lab Coordinator",
    image: "/assests/team/KasinathSalim.jpg",
    linkedin: "",
  },
  {
    name: "Nandhukrishna B",
    role: "Tools & Machines Coordinator",
    image: "/assests/team/NandhukrishnaB.jpg",
    linkedin: "",
  },
  {
    name: "Diya Ravi",
    role: "Dept Innovation Lead(EEE)",
    image: "/assests/team/diyaravi.jpg",
    linkedin: "",
  },
  {
    name: "Adwaith Aswakumar",
    role: "Dept Innovation Lead(CSE)",
    image: "/assests/team/adwaithaswakumar.jpg",
    linkedin: "",
  },
  {
    name: "Harinanda V",
    role: "Dept Innovation Lead(CHE)",
    image: "/assests/team/harinandav.jpg",
    linkedin: "",
  },
  {
    name: "Muhammed Shazmil",
    role: "Dept Innovation Lead(CE)",
    image: "/assests/team/muhammedshazmil.jpg",
    linkedin: "",
  },
  {
    name: "Afnan A",
    role: "Dept Innovation Lead(PE)",
    image: "/assests/team/afnana.jpg",
    linkedin: "",
  },
  {
    name: "Anamika c s",
    role: "Program Head",
    image: "/assests/team/Anamikacs.jpg",
    linkedin: "",
  },
  {
    name: "Akash M Vijay",
    role: "Program Coordinator",
    image: "/assests/team/akashmvijay.jpg",
    linkedin: "",
  },
  {
    name: "Nafiha Nazar",
    role: "Program Coordinator",
    image: "/assests/team/nafinazar.jpg",
    linkedin: "",
  },
  {
    name: "Nandana S",
    role: "Sponsorship Head",
    image: "/assests/team/nandanas.jpg",
    linkedin: "",
  },
  {
    name: "Aswin",
    role: "Webmaster",
    image: "/assests/team/aswin.jpg",
    linkedin: "",
  },
  {
    name: "Varada Vinod",
    role: "Publicity Head",
    image: "/assests/team/varadavinod.jpg",
    linkedin: "",
  },
  {
    name: "Pooja Deependran",
    role: "Content Lead",
    image: "/assests/team/poojadeependran.jpg",
    linkedin: "",
  },
  {
    name: "Nadiya Sharafudheen",
    role: "Content Lead",
    image: "/assests/team/nadiyasharafudheen.jpg",
    linkedin: "",
  },
  {
    name: "Akash B",
    role: "Video Editor",
    image: "/assests/team/akashb.jpg",
    linkedin: "",
  },
];


export default function TeamSection() {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Introducing Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Circular Profile Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg bg-gray-200 border-4 border-gray-400">
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

            {/* Name & Role (Outside the Circle) */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-600">{member.role}</p>

            {/* Clickable LinkedIn Icon */}
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
    </section>
  );
}