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
      <div
        className="relative w-full h-[80vh] bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/s/sbg1.png')" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 px-4">
          <h1 className={`${pixelFont.className} text-2xl md:text-4xl tracking-widest`}>
            Welcome to Srishti
          </h1>
          <p className={`${pixelFont.className} mt-2 text-xs md:text-lg`}>
            Experience the energy, passion, and innovation
          </p>
        </div>
      </div>

      {/* Additional Pixelated Text Below the Image */}
      <div
        className="relative text-center mt-6 px-4 py-12 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/s/sbg2.jpg')" }}
      >
        <p className={`${pixelFont.className} text-sm md:text-xl text-white bg-black/50 p-4 inline-block`}>
          Not just an idea pitch – we craft, we engineer, and we deliver!
        </p>
      </div>

      {/* Pixelated Chatbox Section */}
      <div
        className="relative w-full flex items-center justify-center text-white px-6 py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/s/sbg3.jpg')" }}
      >
        <div className="relative z-10 max-w-4xl bg-black text-white p-6 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)]">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>
            Get to know Shristi better
          </h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            Srishti 2025 is not just another idea pitch—it is about crafting, engineering, and delivering real solutions.
          </p>
        </div>
      </div>

      {/* Carousel Section */}
      <div
        className="relative w-full flex flex-col md:flex-row items-center justify-center text-white px-6 py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}
      >
        <div className="md:w-1/2 p-6 text-black">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>
            Discover the Experience
          </h2>
        </div>

        <div className="relative md:w-1/2 p-6 flex items-center justify-center w-full">
          <button onClick={prevSlide} className="absolute left-0 bg-black/50 p-2 rounded-full">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <div className="w-[450px] h-[450px] relative">
            <Image
              src={imageSlides[currentSlide]}
              alt="Shristi Slide"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <button onClick={nextSlide} className="absolute right-0 bg-black/50 p-2 rounded-full">
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Winners Section */}
      <div className="w-full py-10 bg-black/80">
        <div className="px-6">
          <h2 className={`${pixelFont.className} text-2xl md:text-4xl text-white text-center`}>
            WINNERS OF EACH DOMAIN
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              {
                domain: "Sustainable Living Solutions",
                winner: "PowerSense",
                image: "/assests/living.jpeg",
              },
              {
                domain: "Agronomic Agriculture Industry Innovation",
                winner: "Agronomatic",
                image: "/assests/agritech.jpeg",
              },
              {
                domain: "IoT Solutions and AI",
                winner: "Xenia",
                image: "/assests/iot-ai.jpeg", // FIXED (no space)
              },
              {
                domain: "Affordable Healthcare",
                winner: "Haptic Minds",
                image: "/assests/health.jpeg", // FIXED (no space)
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-[280px] bg-black/60 border border-white p-4 rounded-lg text-center shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.winner}
                  width={250}
                  height={150}
                  className="rounded-md mb-4 mx-auto"
                />

                <h3 className={`${pixelFont.className} text-sm md:text-lg text-white`}>
                  {item.domain}
                </h3>

                <p className={`${pixelFont.className} mt-3 text-sm md:text-lg text-blue-400`}>
                  {item.winner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Events */}
      <div className="w-full py-10 bg-black/80">
        <div className="px-6">
          <h2 className={`${pixelFont.className} text-2xl md:text-4xl text-white text-center`}>
            SRISHTI Inauguration
          </h2>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Image src="/assests/s/news1.jpg" width={300} height={200} alt="Event 1" />
            <Image src="/assests/s/news12.jpg" width={300} height={200} alt="Event 2" />
            <Image src="/assests/s/news15.jpg" width={300} height={200} alt="Event 3" />
            <Image src="/assests/s/news14.jpg" width={300} height={200} alt="Event 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shristi;