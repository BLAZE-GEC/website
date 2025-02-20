"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Press_Start_2P } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Load Google Pixelated Font
const pixelFont = Press_Start_2P({ subsets: ["latin"], weight: "400" });

const imageSlides = [
  "/assests/s/p1.jpeg",
  "/assests/s/p2.jpeg",
  "/assests/s/p3.jpeg",
  "/assests/s/p4.jpeg"
];

const Shristi = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      
      {/* Parallax Background Section */}
      <div className="relative w-full h-[80vh] bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assests/s/sbg1.png')" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-4">
          <h1 className={`${pixelFont.className} text-2xl md:text-4xl tracking-widest`}>Welcome to Shristi</h1>
          <p className={`${pixelFont.className} mt-2 text-xs md:text-lg`}>This is the Shristi page.</p>
        </div>
      </div>

      {/* Additional Pixelated Text Below the Image */}
      <div className={`relative text-center mt-6 px-4 py-12 bg-fixed bg-cover bg-center`} style={{ backgroundImage: "url('/assets/s/sbg2.jpg')" }}>
        <p className={`${pixelFont.className} text-sm md:text-xl text-white bg-black/50 p-4 inline-block`}>Not just an idea pitch – we craft, we engineer, and we deliver!</p>
      </div>

      {/* Pixelated Chatbox Section */}
      <div className="relative w-full flex items-center justify-center text-center text-white px-6 py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assets/s/sbg3.jpg')" }}>
        <div className="relative z-10 max-w-4xl bg-black text-white p-6 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] clip-path-[polygon(5%_0%,95%_0%,100%_20%,100%_80%,95%_100%,5%_100%,0%_80%,0%_20%)]">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>Get to know Shristi better</h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">Srishti 2025 is not just another idea pitch—it is about crafting, engineering, and delivering real solutions. Unlike traditional events that focus solely on presenting ideas, Srishti is a space where ideas are transformed into tangible prototypes. Participants will engage in hands-on problem-solving, designing, and executing their visions from start to finish.</p>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">This event stands apart by offering ten distinct challenge areas, guiding participants from concept to prototype, and providing long-term support for up to a year. There are no abandoned projects—every idea is nurtured with purpose and impact in mind.</p>
        </div>
      </div>

      {/* New Section with Auto Image Carousel on the Right and Text on the Left */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center text-white px-6 py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}>
        {/* Text Section */}
        <div className="md:w-1/2 p-6 text-black">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>Discover the Experience</h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">Experience the energy, passion, and innovation that define Srishti. Explore cutting-edge projects, witness groundbreaking ideas, and be part of a movement that turns concepts into reality.</p>
        </div>

        {/* Auto Carousel Section */}
        <div className="relative md:w-1/2 p-6 flex items-center justify-center w-full">
          <button onClick={prevSlide} className="absolute left-0 bg-black/50 p-2 rounded-full">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <div className="w-[400px] h-[400px] relative">
            <Image src={imageSlides[currentSlide]} alt="Shristi Slide" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <button onClick={nextSlide} className="absolute right-0 bg-black/50 p-2 rounded-full">
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Register Now Button */}
      <div className="w-full flex justify-center py-10">
      <a href="https://example.com" className={`${pixelFont.className} px-6 py-3 bg-black text-white text-lg font-bold rounded-full shadow-lg transition duration-300 hover:bg-gray-800 !important`}
      >Register Now</a>
      </div>
    </div>
  );
};

export default Shristi;