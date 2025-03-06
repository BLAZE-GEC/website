
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Prof. Lalgy Gopi",
    role: "Staff Advisor",
    image: "/assests/team/lalgysir.jpg", 
    linkedin: "https://www.linkedin.com/in/lalgy-gopi-123456789",
  },
  {
    name: "Aysha PT",
    role: "Convenor",
    image: "/assests/team/Ayshapt.jpeg",
    linkedin: "https://www.linkedin.com/in/aysha-pt-987654321",
  },
  {
    name: "Abhay Krishna K",
    role: "Joint-Convenor",
    image: "/assests/team/abaykrishna.jpg",
    linkedin: "https://www.linkedin.com/in/abhay-krishna-k-654321987",
  },
  {
    name: "Krishna S",
    role: "Treasurer",
    image: "/assests/team/krishna.jpg",
    linkedin: "https://www.linkedin.com/in/krishna-s-789123456",
  },
  {
    name: "Athul S",
    role: "Project Head (Circuital)",
    image: "/assests/team/athuls.jpg",
    linkedin: "linkedin: https://www.linkedin.com/",
  },
  {
    name: "Akash C",
    role: "Project Head (Non Circuital)",
    image:"/assests/team/Akash.jpeg",
    linkedin: "https://www.linkedin.com/in/akash-c-2bb12a24a/",
  },
  {
    name: "Naveen P Suresh",
    role: "Electronics Lab Coordinator",
    image: "/assests/team/suresh.jpg",
    linkedin: "https://www.linkedin.com/in/naveen-p-suresh-9461762a1/",
  },
  {
    name: "Akhil Roy",
    role: "Tools & Machines Coordinator",
    image: "/assests/team/royy.JPG",
    linkedin: "https://www.linkedin.com/in/akhil-roy-abb034271/",
  },
  {
    name: "Anjana V",
    role: "Program Head",
    image: "/assests/team/anjanav.jpg",
    linkedin: "https://www.linkedin.com/in/anjana-v-837b94305/",
  },
  {
    name: "Rishikeshan MD",
    role: "Robogames Head",
    image: "/assests/team/rishikeshan.jpg",
    linkedin: "linkedin: https://www.linkedin.com/",
  },
  {
    name: "Abdul Hakkim",
    role: "Media & Publicity",
    image: "/assests/team/adwaithmk.jpg",
    linkedin: "https://www.linkedin.com/in/abdul-hakkim-64a50123a/",
  },
  {
    name: "Sreerag R",
    role: "Media & Publicity",
    image: "/assests/team/sreerag.jpg",
    linkedin: "https://www.linkedin.com/in/sreeragrayirath/",
  },
  
  {
    name: "Anamika CS",
    role: "Program Coordinator",
    image:"/assests/team/anamika.jpg",
    linkedin: "https://www.linkedin.com/in/anamika-c-s-726414270/",
  },
  {
    name: "Hima TJ",
    role: "Program Coordinator",
    image:"/assests/team/hima.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Navya MS",
    role: "Department Coordinator (PE)",
    image: "/assests/team/navyams.jpg",
    linkedin: "https://www.linkedin.com/in/navya-m-s-14803629b/",
  },
  {
    name: "Sniya Sunil",
    role: "Department Coordinator (CE)",
    image:"/assests/team/sniyasunil.jpg",
    linkedin: "https://www.linkedin.com/in/sniya-sunil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Maria Denny",
    role: "Department Coordinator (CS)",
    image: "/assests/team/mariyadenny.jpg",
    linkedin: "https://www.linkedin.com/in/maria-denny-042b91287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Irin Maria",
    role: "Department Coordinator (ECE)",
    image: "/assests/team/irinmaria.jpg",
    linkedin: "https://www.linkedin.com/in/irin-maria-bbb60b2b7/",
  },
  {
    name: "Nandhukrishna B",
    role: "Department Coordinator (ME)",
    image:"/assests/team/nandhukrishna.jpg",
    linkedin: "https://www.linkedin.com/in/nandhukrishnab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Diya Ravi",
    role: "Department Coordinator (EEE)",
    image: "/assests/team/Sidharthan.jpg",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Naveen Venugopal",
    role: "Department Coordinator (CHE)",
    image:"/assests/team/naveen.jpg",
    linkedin: "https://www.linkedin.com/in/",
  },
  {
    name: "Harichandana M",
    role: "Creative Director",
    image: "/assests/team/harich.jpeg",
    linkedin: "https://www.linkedin.com/in/harichandana-m/",
  },
  {
    name: "Amal chandran c",
    role: "Media & publicity Lead",
    image:"/assests/team/anamika.jpg",
    linkedin: "https://www.linkedin.com/in/amal-chandran-3776bb25a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
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
