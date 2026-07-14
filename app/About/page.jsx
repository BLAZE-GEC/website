"use client";

import Image from "next/image";
import Link from "next/link";
import { Wrench, GraduationCap } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const timeline = [
  {
    year: "2014",
    title: "Club Establishment",
    desc: "Founded by a passionate group of students and advisors eager to set up a dedicated workspace for hardware projects.",
  },
  {
    year: "2017",
    title: "The First Maker Lab",
    desc: "Acquired dedicated room space on campus and initialized 3D printing services, open for member projects.",
  },
  {
    year: "2021",
    title: "Alumni Integration",
    desc: "Established the Shaju Memorial award fund backed by alumni, launching structured prototype sponsorship campaigns.",
  },
  {
    year: "2025",
    title: "Annual Prototyping Demo Day",
    desc: "Launched our annual showcase where student makers pitch completed hardware prototypes and IoT designs directly to alumni advisors and peers.",
  },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 pt-10 pb-20">

      {/* Page header */}
      <RevealOnScroll className="text-center mb-12 max-w-2xl mx-auto">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          Engineering The Future
        </h1>
        <p className="text-secondary">
          Founded in 2014 at Government Engineering College, Thrissur, Club Ideator is a
          student-managed ecosystem dedicated to hands-on creation and technical exploration.
        </p>
      </RevealOnScroll>

      {/* Makerspace + Mentor Network */}
      <RevealOnScroll delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <TiltCard className="bg-cardBg rounded-2xl p-6 md:p-8" maxTilt={5}>
          <Wrench className="text-accent w-9 h-9 mb-4" />
          <h3 className="font-heading text-2xl font-bold text-primary mb-3">
            The Makerspace Sandbox
          </h3>
          <p className="text-secondary text-sm md:text-base mb-3 leading-relaxed">
            Unlike standard academic labs, our space is entirely managed by students, offering a
            horizontal learning environment where seniors mentor juniors without administrative
            constraints.
          </p>
          <p className="text-secondary text-sm md:text-base leading-relaxed">
            Equipped with FDM 3D printers, precision tools, digital oscilloscopes, soldering bays,
            and micro-controller modules, it acts as the primary hardware incubator within GECT.
          </p>
        </TiltCard>

        <TiltCard className="bg-cardBg rounded-2xl p-6 md:p-8" maxTilt={5}>
          <GraduationCap className="text-accent w-9 h-9 mb-4" />
          <h3 className="font-heading text-2xl font-bold text-primary mb-3">
            Mentor & Alumni Network
          </h3>
          <p className="text-secondary text-sm md:text-base mb-3 leading-relaxed">
            We link students with a vast network of GECT alumni. Our alumni sponsor prototype
            costs, guide patent drafting, and provide financial assistance to worthy projects.
          </p>
          <p className="text-secondary text-sm md:text-base leading-relaxed">
            We organize workshops featuring eminent personalities and host project expos,
            bringing together brilliant minds from every department to turn ideas into reality.
          </p>
        </TiltCard>
      </RevealOnScroll>

      {/* K.P. Shaju Memorial Section */}
      {/* TODO: confirm correct spelling — real project files spell this "K.P. Shaji", target design spells it "K.P. Shaju". Update both places below once confirmed. */}
      <RevealOnScroll delay={0.15}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 bg-primary text-bgPrimary rounded-2xl p-6 md:p-12 my-16">
          <div>
            <span className="inline-block border border-accent-light text-accent-light text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-md mb-4">
              Inspirational Legacy
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-light mb-4">
              Honoring Late DRDO Scientist K.P. Shaju
            </h2>
            <p className="text-bgSecondary text-sm md:text-base leading-relaxed mb-4">
              Ideator is inspired by the innovation of the late DRDO scientist K.P. Shaju. To
              commemorate his ideas and encourage bright young minds at GEC, we present annual
              awards for the best two innovative projects of the college in his honor.
            </p>
            <p className="text-bgTertiary text-sm leading-relaxed mb-6">
              We also provide financial assistance — as sponsorship or individual contributions —
              to worthy student projects through our alumni associations, helping them move from
              breadboard prototypes to real, working products.
            </p>
            <Link
              href="/Projects"
              className="inline-block bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
            >
              VIEW SPONSORED PROJECTS
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white/20">
            <Image
              src="/assests/inaugration.jpg"
              alt="DRDO Lab Prototyping Showcase"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>

{/* Innovation Journey */}
<RevealOnScroll delay={0.2}>
  <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-4">
    Our Innovation Journey
  </h2>

  <p className="text-secondary text-center max-w-3xl mx-auto mb-12">
    Every milestone reflects the passion of students who transformed ideas into
    real engineering solutions through innovation, collaboration and hands-on
    learning.
  </p>

  <div className="relative max-w-7xl mx-auto">

    {/* Connecting Line */}
    <div className="hidden lg:block absolute top-16 left-0 right-0 h-[3px] bg-primary/10">
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-light to-accent rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {timeline.map((item) => (
        <TiltCard
          key={item.year}
          maxTilt={5}
          className="relative bg-cardBg rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center"
        >

          <div className="hidden lg:flex absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent border-4 border-white shadow-lg items-center justify-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
          </div>

          <h3 className="text-accent font-bold text-2xl mb-2">
            {item.year}
          </h3>

          <h4 className="font-heading text-xl font-bold text-primary mb-3">
            {item.title}
          </h4>

          <p className="text-secondary text-sm leading-relaxed">
            {item.desc}
          </p>

        </TiltCard>
      ))}

    </div>

  </div>
</RevealOnScroll>
    </main>
  );
}