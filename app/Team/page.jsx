"use client";

import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const facultyAdvisors = [
  { name: "Prof. Lalgy Gopi", role: "Staff Advisor", image: "/assests/team/lalgygopi.jpg" },
];

// Each section matches the official EXECOM list exactly, in the same order.
// image: null means we don't have their photo yet — shows a letter
// placeholder automatically, easy to swap in later (just fill the path).
const sections = [
{
  title: "Core Executive Leadership",
  members: [
    ...facultyAdvisors,
      { name: "Naveen P Suresh", role: "Convenor", image: "/assests/team/naveen convener.jpeg" },
      { name: "Pooja Deependran", role: "Joint Convenor", image: "/assests/team/02-pooja-deependran.jpg" },
      { name: "Harinanda V", role: "Manager", image: "/assests/team/03-harinanda-v.jpg" },
      { name: "Adwaith Ashwakumar", role: "Secretary", image: "/assests/team/adwaithaswakumar.jpg" },
      { name: "Saphal S Brijesh", role: "Treasurer", image: "/assests/team/05-saphal-s-brijesh.jpg" },
      { name: "Nandhukrishna", role: "Joint Treasurer", image: "/assests/team/06-nandhukrishna.jpg" },
    ],
  },
  {
    title: "Technical & Innovation Leadership",
    members: [
      { name: "Sahal K K", role: "Project Head", image: "/assests/team/07-sahal-k-k.jpg" },
      { name: "Rasal Kabir", role: "Tools & Machines Coordinator", image: "/assests/team/08-rasal-kabir.jpg" },
      { name: "Navadeep C K", role: "Electronics Lab Coordinator", image: "/assests/team/09-navadeep-c-k.jpg" },
    ],
  },
  {
    title: "Technical Committee Members",
    members: [
      { name: "Mohammed Midhlaj", role: "Technical Committee Member", image: null }, // TODO: photo needed
      { name: "Siddarth S Pramod", role: "Technical Committee Member", image: "/assests/team/11-siddarth-s-pramod.jpg" },
      { name: "Muhammed Irfan", role: "Technical Committee Member", image: "/assests/team/12-muhammed-irfan.jpg" },
      { name: "Abhishek R S", role: "Technical Committee Member", image: "/assests/team/13-abhishek-r-s.jpg" },
    ],
  },
  {
    title: "Department Wise Innovation Leads",
    members: [
      { name: "Kasinath Salim", role: "ECE Dept Innovation Lead", image: "/assests/team/14-kasinath-salim.jpg" },
      { name: "Pavithra S", role: "CSE Dept Innovation Lead", image: "/assests/team/15-pavithra-s.jpg" },
      { name: "Nadiya Sharafudheen", role: "EEE Dept Innovation Lead", image: "/assests/team/16-nadiya-sharafudheen.jpg" },
      { name: "Muhammed Shamrin", role: "MECH Dept Innovation Lead", image: "/assests/team/17-muhammed-shamrin.jpg" },
      { name: "Malavika Rajesh", role: "Chemical Innovation Lead", image: "/assests/team/18-malavika-rajesh.jpg" },
      { name: "Aparna Chandran EM", role: "Civil Innovation Lead", image: "/assests/team/19-aparna-chandran-em-01.jpg" },
      { name: "Fathima Rania", role: "CPS Innovation Lead", image: "/assests/team/20-fathima-rania.jpg" },
      { name: "Akhil Madhu", role: "Production Innovation Lead", image: "/assests/team/21-akhil-madhu.jpg" },
    ],
  },
  {
    title: "Program & Event Operations",
    members: [
      { name: "Diya D", role: "Program Head", image: "/assests/team/22-diya-d.jpg" },
      { name: "Abhijith", role: "Program Coordinator", image: "/assests/team/23-abhijith-s.jpg" },
      { name: "Sooraj V Suresh", role: "Program Coordinator", image: "/assests/team/sooraj-v-suresh.jpg" },
    ],
  },
  {
    title: "Program Committee Members",
    members: [
      { name: "Akash M Vijay", role: "Program Committee Member", image: "/assests/team/akashmvijay.jpg" },
      { name: "Diya Ravi", role: "Program Committee Member", image: "/assests/team/diyaravi.jpg" },
      { name: "Nafiha Nazar", role: "Program Committee Member", image: "/assests/team/27-nafiha-nazar.jpg" },
      { name: "Muhammed Shazmil", role: "Program Committee Member", image: "/assests/team/muhammedshazmil.jpg" },
      { name: "Fathima Rinsha", role: "Program Committee Member", image: null }, // TODO: photo needed
    ],
  },
  {
    title: "Media, Publicity & Outreach",
    members: [
      { name: "Gauri Kalyani", role: "Publicity Head", image: "/assests/team/30-gauri-kalyani.jpg" },
      { name: "Jyothis", role: "Poster Lead", image: "/assests/team/31-jyothis.jpg" },
      { name: "Vaiga Biju", role: "Poster Sub", image: null }, // TODO: photo needed
      { name: "Grace Mary Sunil", role: "Content Lead", image: "/assests/team/Grace Mary Sunil.png" },
      { name: "Aysha M Shaji", role: "Content Lead", image: "/assests/team/34-aysha-m-shaji.jpg" },
      { name: "Pavan", role: "Video Editor", image: "/assests/team/35-pavan.jpg" },
      { name: "Afnan", role: "Sponsorship Head", image: "/assests/team/36-afnan.jpg" },
      { name: "Albin Joby", role: "Web Master", image: "/assests/team/37-albin-joby.jpg" },
    ],
  },
];

function TeamTile({ member }) {
  return (
   <TiltCard
  maxTilt={5}
  className="relative rounded-xl overflow-hidden border border-primary/10 h-64 w-[220px] flex-shrink-0"
>
      <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <span className="text-5xl font-bold text-accent/40">
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      {/* Frosted glass name strip, flush to the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 px-3 py-2.5"
        style={{
          background: "rgba(26, 38, 28, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.15)",
        }}
      >
        <h3
          className="font-heading font-bold text-sm leading-snug"
          style={{ color: "#ffffff" }}
        >
          {member.name}
        </h3>
        <p
          className="text-[11px] font-semibold uppercase tracking-wide mt-0.5"
          style={{ color: "#e5a953" }}
        >
          {member.role}
        </p>
      </div>
    </TiltCard>
  );
}

export default function TeamPage() {
  return (
    <main className="container mx-auto px-4 pt-10 pb-20">
      <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          Our Executive Committee
        </h1>
        <p className="text-secondary">
          Meet the students and mentors managing the maker workspace, organizing workshops, and
          facilitating project development.
        </p>
      </RevealOnScroll>


      {/* Each section from the official EXECOM list */}
      {sections.map((section, i) => (
        <RevealOnScroll key={section.title} delay={0.1 + i * 0.05} className="mb-16">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary text-center mb-6">
            {section.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {section.members.map((member) => (
              <TeamTile key={member.name} member={member} />
            ))}
          </div>
        </RevealOnScroll>
      ))}
    </main>
  );
}