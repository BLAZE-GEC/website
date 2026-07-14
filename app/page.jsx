"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import events from "./Events/eventsData";
import galleryPhotos from "./Gallery/galleryData";
import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import SupportersSection from "@/components/SupportersSection";

// Hero slides — using real club photos already in /public/assests
const heroSlides = [
  {
    img: "/assests/inaugration.jpg",
    title: "Where Visionary Ideas Become Reality",
    desc: "Join GECT's premier engineering and maker club. Build physical prototypes, participate in Srishti, and shape tomorrow's technology.",
    cta: "EXPLORE LAB",
    href: "/About",
  },
  {
    img: "/assests/iotwork.jpg",
    title: "Weekly Ideation & Build Nights",
    desc: "Participate in regular technical sprints, embedded systems hackathons, and prototype reviews hosted by senior makers.",
    cta: "VIEW PROJECTS",
    href: "/Projects",
  },
  {
    img: "/assests/cpwork2023.jpg",
    title: "24/7 Student Managed Makerspace",
    desc: "Access high-grade machinery, 3D printers, and active mentorship networks. Our workspace never sleeps because ideas don't either.",
    cta: "JOIN OUR COMMUNITY",
    href: "/Contact?type=apply",
  },
];

const aboutGridImages = [
  { src: "/assests/ideate.jpg", alt: "Lab Work" },
  { src: "/assests/ideathon.jpg", alt: "3D Printing" },
  { src: "/assests/placementpgm.jpg", alt: "Brainstorming" },
];

export default function Home() {
  // ---- Hero Carousel state ----
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ---- Newsletter form state ----
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // Load confetti only when needed, keeps the page fast for everyone else
    const confetti = (await import("canvas-confetti")).default;
    confetti({
      particleCount: 80,
      spread: 50,
      colors: ["#d28b26", "#1a261c"],
    });
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  // ---- RSVP placeholder ----
  const handleRSVP = (eventTitle) => {
    alert(`Thanks for your interest in "${eventTitle}"! We'll be in touch with details.`);
  };

  return (
    <main className="container mx-auto px-4 pt-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">

        {/* LEFT COLUMN — Carousel + About */}
        <RevealOnScroll>

          {/* Hero Carousel */}
          <div className="relative w-full h-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
            {heroSlides.map((s, i) => (
              <div
                key={i}
                className="absolute inset-0 transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(${(i - slide) * 100}%)`,
                }}
              >
                <Image src={s.img} alt={s.title} fill priority={i === 0} className="object-cover" />

                {/* Frosted glass strip — flush to the bottom edge, full width */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 md:px-6 md:py-4"
                  style={{
                    background: "rgba(26, 38, 28, 0.6)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <h2
                    className="font-heading text-lg md:text-2xl font-bold mb-1 max-w-lg"
                    style={{ color: "#ffffff" }}
                  >
                    {s.title}
                  </h2>
                  <p
                    className="text-xs md:text-sm mb-3 max-w-md"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="inline-block bg-accent hover:bg-accent-hover text-white text-xs md:text-sm font-semibold tracking-wide px-4 py-2 rounded-md transition-colors"
                  >
                    {s.cta}
                  </Link>
                </div>
              </div>
            ))}

            {/* Carousel dots */}
            <div className="absolute top-4 right-6 z-20 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === slide ? "bg-accent" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* About Us card */}
          <TiltCard className="bg-cardBg rounded-2xl p-6 md:p-10 mt-8 shadow-sm" maxTilt={4}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              About Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/assests/idtr_logo_nw.png"
                  alt="Ideator Club Logo"
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-lg text-primary">Who we are</h3>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Club Ideator is the premier innovation hub of Government Engineering College,
                  Thrissur. Founded in 2014, the club bridges the gap between theoretical
                  engineering and actual product prototyping. We manage a fully-equipped maker
                  lab, offering 24/7 workspace access to active builders, hackers, and creators.
                </p>
                <p className="text-secondary text-sm md:text-base leading-relaxed">
                  Inspired by the visionary work of the late DRDO scientist K.P. Shaju, we strive
                  to bring technical excellence to life. We guide student teams through product
                  development, patent drafting, and seed funding acquisitions.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {aboutGridImages.map((img) => (
                    <div key={img.src} className="relative aspect-square rounded-lg overflow-hidden">
                      <Image src={img.src} alt={img.alt} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <blockquote className="font-heading italic text-lg text-secondary border-l-4 border-accent pl-4 mt-2">
                  "Innovation is seeing what everybody has seen, and thinking what nobody has thought."
                </blockquote>
              </div>
            </div>
          </TiltCard>
        </RevealOnScroll>

        {/* RIGHT COLUMN — Events, Gallery, Newsletter */}
        <RevealOnScroll delay={0.15} className="flex flex-col gap-8">

          {/* Upcoming Events widget */}
{/* SMART GECT CHALLENGE */}
<TiltCard
  className="relative rounded-2xl overflow-hidden shadow-sm h-[340px]"
  maxTilt={4}
>
  {/* Background */}
{/* Dark Premium Background */}
<div
  className="absolute inset-0"
  style={{
    background: `
      radial-gradient(circle at top right, rgba(210,139,38,0.18), transparent 40%),
      radial-gradient(circle at bottom left, rgba(210,139,38,0.12), transparent 45%),
      linear-gradient(135deg, #0b1114 0%, #111827 45%, #1a261c 100%)
    `,
  }}
/>

{/* Soft Glow */}
<div
  className="absolute inset-0"
  style={{
    boxShadow: "inset 0 0 120px rgba(0,0,0,0.45)",
  }}
/>

  {/* Center Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    <h2
      style={{ color: "#fff" }}
      className="font-heading text-3xl md:text-4xl font-bold tracking-wide"
    >
      SMART GECT CHALLENGE
    </h2>

    <h3
      style={{ color: "#fff" }}
      className="font-heading text-5xl md:text-6xl font-bold mt-2"
    >
      2026
    </h3>
  </div>

  {/* News Ticker */}
  <div className="absolute bottom-0 left-0 w-full bg-accent overflow-hidden py-2">
    <div className="ticker-track">
      <span className="ticker-text">
        ● COMING SOON • COMING SOON • COMING SOON • COMING SOON • COMING SOON •
      </span>

      <span className="ticker-text">
        ● COMING SOON • COMING SOON • COMING SOON • COMING SOON • COMING SOON •
      </span>
    </div>
  </div>
</TiltCard>

          {/* Gallery widget */}
          <TiltCard className="bg-cardBg rounded-2xl p-6 shadow-sm" maxTilt={4}>
            <h3 className="font-heading text-2xl font-bold text-primary mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryPhotos.slice(0, 6).map((photo) => (
                <div key={photo.id} className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                  <Image src={photo.src} alt={photo.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                </div>
              ))}
            </div>
            <Link
              href="/Gallery"
              className="block text-center mt-5 border border-primary/20 hover:border-accent hover:text-accent text-primary text-sm font-semibold py-2.5 rounded-md transition-colors"
            >
              VIEW FULL GALLERY
            </Link>
          </TiltCard>

          {/* Newsletter */}
          <TiltCard className="relative rounded-2xl overflow-hidden shadow-sm min-h-[220px] flex items-end" maxTilt={4}>
            <Image
              src="/assests/iotwork.jpg"
              alt="Makerspace Abstract"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative z-10 p-6 w-full">
<h3
  className="font-heading text-xl font-bold mb-2"
  style={{ color: "#FFFFFF" }}
>
  Stay Updated with Ideator
</h3>

<p
  className="text-sm mb-4"
  style={{ color: "rgba(255,255,255,0.85)" }}
>
  Never miss workshop alerts, recruitment drives, and project showcases.
</p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="rounded-md px-3 py-2 text-sm text-primary outline-none"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2.5 rounded-md transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
              {subscribed && (
                <p className="text-accent-light text-xs mt-3">
                  Awesome! You're subscribed to GECT Ideator updates. 🎉
                </p>
              )}
            </div>
          </TiltCard>

        </RevealOnScroll>
      </div>

      <SupportersSection />
    </main>
  );
}