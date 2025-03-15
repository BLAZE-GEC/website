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
        <div className="relative z-10 max-w-4xl bg-black text-white p-6 border-4 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] clip-path-[polygon(5%_0%,95%_0%,100%_20%,100%_80%,95%_100%,5%_100%,0%_80%,0%_20%)]">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>
            Get to know Shristi better
          </h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            Srishti 2025 is not just another idea pitch—it is about crafting, engineering, and delivering real solutions.
            Unlike traditional events that focus solely on presenting ideas, Shristi is a space where ideas are transformed
            into tangible prototypes. Participants will engage in hands-on problem-solving, designing, and executing their visions
            from start to finish.
          </p>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            This event stands apart by offering ten distinct challenge areas, guiding participants from concept to prototype,
            and providing long-term support for up to a year. There are no abandoned projects—every idea is nurtured with purpose
            and impact in mind.
          </p>
        </div>
      </div>

      {/* New Section with Auto Image Carousel on the Right and Text on the Left */}
      <div
        className="relative w-full flex flex-col md:flex-row items-center justify-center text-white px-6 py-20 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}
      >
        {/* Text Section */}
        <div className="md:w-1/2 p-6 text-black">
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>Discover the Experience</h2>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            Experience the energy, passion, and innovation that define Srishti. Explore cutting-edge projects,
            witness groundbreaking ideas, and be part of a movement that turns concepts into reality.
          </p>
        </div>
        {/* Auto Carousel Section */}
        <div className="relative md:w-1/2 p-6 flex items-center justify-center w-full">
          <button onClick={prevSlide} className="absolute left-0 bg-black/50 p-2 rounded-full">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <div className="w-[450px] h-[450px] relative">
            <Image
              src={imageSlides[currentSlide]}
              alt="Shristi Slide"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <button onClick={nextSlide} className="absolute right-0 bg-black/50 p-2 rounded-full">
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Second IoT Section with spacing above */}
      <div
        className="relative w-full h-[60vh] flex items-center justify-center text-white bg-fixed bg-cover bg-center px-6 py-20 mt-8 mb-12"
        style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}
      >
        <div className="bg-black/60 p-6 shadow-lg text-white text-left w-full flex flex-col md:flex-row items-start">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>
              IoT for Health and Educational Institutions
            </h2>
            <p className="mt-4 text-sm md:text-lg leading-relaxed">
              Explore the world of IoT in health and education. Innovate, create, and develop smart solutions that make an impact.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSca0Hxd4XqkPcCvq09yEvxx85-XO9zMvEvxQxvV-gyPFwt6PQ/viewform?usp=send_form"
              className="mt-4 px-6 py-3 bg-black text-white text-lg md:text-xl font-bold uppercase tracking-wider rounded-full shadow-lg border-2 border-white transition duration-300 hover:bg-gray-800"
            >
              REGISTER NOW
            </a>
          </div>
          {/* Image on the Right */}
          <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
            <Image
              src="/assests/s/IOT.jpg"
              alt="IoT"
              width={350}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Domains Section with Parallax Effect */}
      {[
        "Sustainable Living Solutions",
        "Agri Tech",
        "Affordable Health Care Support",
        "Health and Wellbeing Innovations"
      ].map((domain, index) => (
        <div
          key={index}
          className="relative w-full h-[60vh] flex items-center justify-center text-white bg-fixed bg-cover bg-center px-6 py-20 mb-8"
          style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}
        >
          <div className="bg-black/60 p-6 shadow-lg text-white text-left w-full flex flex-col md:flex-row items-start">
            {/* Text Content */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>{domain}</h2>
              <p className="mt-4 text-sm md:text-lg leading-relaxed">
                Explore the world of {domain}. Participate, innovate, and create solutions that shape the future.
              </p>
              <a
                href={
                  domain === "Sustainable Living Solutions"
                    ? "https://forms.gle/pWeviQt7kzSFysTB9"
                    : domain === "Agri Tech"
                    ? "https://forms.gle/vg9TJ1AGXKRr2aZ99"
                    : domain === "Affordable Health Care Support"
                    ? "https://forms.gle/e1JTNeeyx7iqvNmb7"
                    : domain === "Health and Wellbeing Innovations"
                    ? "https://forms.gle/eKzdsJUULBkGYd948"
                    : "https://example.com/register"
                }
                className="mt-4 px-6 py-3 bg-black text-white text-lg md:text-xl font-bold uppercase tracking-wider rounded-full shadow-lg border-2 border-white transition duration-300 hover:bg-gray-800"
              >
                REGISTER NOW
              </a>
            </div>
            {/* Image on the Right */}
            <div className="w-full md:w-1/2 flex justify-end mt-6 md:mt-0">
              <Image
                src={
                  domain === "Sustainable Living Solutions"
                    ? "/assests/s/Sustainable Living Solutions.jpg"
                    : domain === "Agri Tech"
                    ? "/assests/s/Agri tech.jpg"
                    : domain === "Affordable Health Care Support"
                    ? "/assests/s/Affordable Health Care Support.jpg"
                    : domain === "Health and Wellbeing Innovations"
                    ? "/assests/s/Health and Wellbeing Innovations.jpg"
                    : ""
                }
                alt={domain}
                width={350}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Register Now Button */}
      <div className="w-full flex justify-center py-10">
       
      </div>
    </div>
  );
};

export default Shristi;
