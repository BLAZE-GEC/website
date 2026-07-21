"use client";

import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const supporters = [
  { name: "GECT Alumni Association", logo: null },
  { name: "Shaju Memorial Fund", logo: null },
  { name: "Groovy Tusker", logo: "/assests/supporters/groovy-tusker.png" },
  { name: "CTF", logo: "/assests/supporters/ctf.png" },
];

export default function SupportersSection() {
  return (
    <RevealOnScroll className="container mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3">
          Our Supporters
        </h2>

        <p className="text-secondary text-sm md:text-base max-w-2xl mx-auto">
          Club Ideator is proud to be backed by alumni and organizations who
          share our belief in student-led innovation.
        </p>
      </div>

      {/* Supporters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 items-center justify-items-center">

        {supporters.map((supporter) => (
          <div
            key={supporter.name}
            className="group flex items-center justify-center h-40 w-full"
          >
            {supporter.logo ? (
              <div
                className={`relative transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2
                  ${
                    supporter.name === "CTF"
                      ? "w-[28rem] h-[16rem]"
                      : supporter.name === "Groovy Tusker"
                      ? "w-60 h-28"
                      : "w-48 h-20"
                  }`}
              >
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="font-heading text-2xl md:text-3xl font-bold text-primary text-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:text-accent">
                {supporter.name}
              </span>
            )}
          </div>
        ))}

      </div>
    </RevealOnScroll>
  );
}