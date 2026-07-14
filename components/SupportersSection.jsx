"use client";

import Image from "next/image";
import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// TODO: replace with your real sponsors/alumni supporters.
// Set "logo" to an image path once you have their logo file, e.g.
// "/assests/supporters/companyname.png" — until then it just shows the
// name as text, so this section is safe to ship with placeholders.
const supporters = [
  {
    name: "GECT Alumni Association",
    logo: null,
  },
  {
    name: "Shaju Memorial Fund",
    logo: null,
  },
  {
    name: "Groovy Tusker",
    logo: "/assests/supporters/groovy-tusker.png",
  },
];

export default function SupportersSection() {
  return (
    <RevealOnScroll className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-3">
          Our Supporters
        </h2>
        <p className="text-secondary text-sm md:text-base max-w-xl mx-auto">
          Club Ideator is proud to be backed by alumni and organizations who share our belief in
          student-led innovation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 max-w-3xl mx-auto">
        {supporters.map((supporter) => (
          <TiltCard
            key={supporter.name}
            maxTilt={4}
            className={`${
              supporter.logo ? "bg-white p-1" : "bg-cardBg p-4"
            } h-28 w-full sm:w-64 flex-shrink-0 rounded-xl border border-primary/10 flex items-center justify-center`}
          >
            {supporter.logo ? (
              <div className="relative w-full h-full">
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <span className="text-primary/50 text-sm font-semibold text-center">
                {supporter.name}
              </span>
            )}
          </TiltCard>
        ))}
      </div>
    </RevealOnScroll>
  );
}