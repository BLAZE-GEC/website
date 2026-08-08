"use client";

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TiltCard from "@/components/ui/TiltCard";

const workshops = [
  {
    id: 5,
    img: "/assests/events1/matlab.jpeg",
    title: "MATLAB Workshop",
    des: "A hands-on MATLAB workshop introducing students to computational tools and techniques for engineering analysis, simulation, and problem solving.",
    department: "EEE, CPS & CHE",
    date: "05-08-2026",
    resourcePerson: "Antony, Kashinath — S7 ECE",
  },
  {
    id: 4,
    img: "/assests/events1/patch-antenna.jpeg",
    title: "Patch Antenna",
    des: "A technical workshop introducing participants to the fundamentals, design concepts, and applications of patch antennas in communication systems.",
    department: "ECE",
    date: "04-08-2026",
    resourcePerson: "Naveen P Suresh",
  },
  {
    id: 3,
    img: "/assests/events1/rag.jpeg",
    title: "Basics of RAG",
    des: "An introductory workshop on Retrieval-Augmented Generation, covering the fundamentals of connecting AI models with external knowledge sources.",
    department: "CS",
    date: "03-08-2026",
    resourcePerson: "Sooraj KR — S5 CSE",
  },
  {
    id: 2,
    img: "/assests/events1/sketchup.jpeg",
    title: "SketchUp Workshop",
    des: "A practical SketchUp workshop introducing participants to 3D modelling and design workflows.",
    department: "CE",
    date: "30-07-2026",
    resourcePerson: "Suhail, Riza — S9 ARCH",
  },
  {
    id: 1,
    img: "/assests/events1/solidworks.jpeg",
    title: "SolidWorks Workshop",
    des: "A hands-on SolidWorks workshop introducing participants to 3D CAD modelling and practical mechanical design workflows.",
    department: "ME & PE",
    date: "29-07-2026",
    resourcePerson: "Adwaith — S5 MECH",
  },
];

export default function IgniteXPage() {
  return (
    <section className="min-h-[80vh] w-full flex flex-col mt-16">
      <div className="container mx-auto text-center px-4">

        <RevealOnScroll>
          <Link
            href="/Events"
            className="inline-block mb-6 text-sm font-semibold text-accent hover:underline"
          >
            ← Back to Events
          </Link>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary">
            IGNITE.X
          </h1>

          <p className="font-heading text-xl md:text-2xl font-semibold text-primary/80 mt-2">
            Workshop Series
          </p>

          <p className="max-w-2xl mx-auto text-secondary mt-4 mb-12">
            A series of technical workshops conducted by IDEATOR GECT,
            bringing practical learning experiences across multiple
            engineering and technology domains.
          </p>
        </RevealOnScroll>

        <div className="flex flex-wrap justify-center gap-6">
          {workshops.map((workshop, index) => (
            <RevealOnScroll
              key={workshop.id}
              delay={(index % 3) * 0.08}
              className="w-full md:w-[48%] lg:w-[30%]"
            >
              <TiltCard
                maxTilt={5}
                className="p-4 bg-cardBg rounded-xl shadow-md h-full flex flex-col"
              >
                <div className="w-full h-[220px] md:h-[260px] relative rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={workshop.img}
                    fill
                    className="object-cover"
                    alt={workshop.title}
                  />
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg md:text-xl font-bold text-primary">
                    {workshop.title}
                  </h2>

                  <p className="text-sm md:text-base text-secondary opacity-95 font-light py-2 flex-1">
                    {workshop.des}
                  </p>

                  <div className="text-sm font-semibold text-textMuted py-1">
                    {workshop.date}
                  </div>

                  <div className="text-sm font-semibold text-textMuted py-1">
                    {workshop.department}
                  </div>

                  <div className="text-sm text-textMuted py-1">
                    Resource Person: {workshop.resourcePerson}
                  </div>

                  <div className="mt-auto pt-3">
                    <button
                      disabled
                      className="w-full bg-primary/8 text-primary/40 text-sm font-semibold py-2.5 rounded-full cursor-not-allowed"
                    >
                      Workshop Completed
                    </button>
                  </div>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}