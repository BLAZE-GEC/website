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

  // Inline style object for the register buttons
  const registerButtonStyle = {
    margin: "auto",
    display: "block",
    backgroundColor: "#3b82f6", // Tailwind blue-500
  };

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
          <h2 className={`${pixelFont.className} text-xl md:text-3xl font-bold`}>
            Discover the Experience
          </h2>
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

      {/* Domains Section with Horizontally Stacked Cards */}
      <div className="w-full py-10 bg-black/80">
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {[
            {
              title: "IoT for Health and Educational Institutionss",
              form: "https://docs.google.com/forms/d/e/1FAIpQLScznOIU430O5AFX48YnTTiCp-cO56a26kujrsV89c_4HVktzw/viewform?usp=send_form",
              image: "/assests/s/IOT.jpg",
            },
            {
              title: "Agri Tech",
              form: "https://forms.gle/vg9TJ1AGXKRr2aZ99",
              image: "/assests/s/Agri tech.jpg",
            },
            {
              title: "Affordable Health Care Support",
              form: "https://forms.gle/e1JTNeeyx7iqvNmb7",
              image: "/assests/s/Affordable Health Care Support.jpg",
            },
            {
              title: "Health and Wellbeing Innovations",
              form: "https://forms.gle/eKzdsJUULBkGYd948",
              image: "/assests/s/Health and Wellbeing Innovations.jpg",
            },
            {
              title: "Sustainable Living Solutions",
              form: "https://forms.gle/pWeviQt7kzSFysTB9",
              image: "/assests/s/Sustainable Living Solutions.jpg",
            },
          ].map((domain, index) => (
            <div
              key={index}
              className="relative w-[320px] md:w-[400px] h-[500px] bg-cover bg-center rounded-xl flex flex-col justify-between"
              style={{ backgroundImage: "url('/assests/s/sbg4.png')" }}
            >
              <div className="bg-black/60 p-6 h-full flex flex-col justify-between rounded-xl shadow-lg">
                <div>
                  <h2 className={`${pixelFont.className} text-lg md:text-2xl font-bold text-white`}>
                    {domain.title}
                  </h2>
                  <p className="mt-4 text-xs md:text-base text-white leading-relaxed">
                    Explore the world of {domain.title}. Participate, innovate, and create solutions that shape the future.
                  </p>
                </div>
                <div className="mt-4">
                  <Image
                    src={domain.image}
                    alt={domain.title}
                    width={300}
                    height={200}
                    className="rounded-md mb-4"
                  />
                  <a
                    href={domain.form}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto block px-4 py-2 text-white font-bold uppercase rounded-full text-sm tracking-wider hover:bg-blue-600 transition"
                    style={registerButtonStyle}
                  >
                    <center>REGISTER NOW</center>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Events Section with Translucent Background */}
      <div className="w-full py-10">
        <div className="px-6 bg-black/50 backdrop-blur-md rounded-lg p-6">
          <h2 className={`${pixelFont.className} text-2xl md:text-4xl text-white text-center`}>
            LATEST EVENTS
          </h2>
          <p className="mt-4 text-center text-white text-sm md:text-lg">
            Check out our latest events and updates.
          </p>
          {/* Optionally, add event cards or additional content here */}
        </div>
     

      {/* SRISHTI Inauguration Section with Horizontally Arranged Images */}
      <div className="w-full py-10 bg-black/80">
        <div className="px-6">
          <h2 className={`${pixelFont.className} text-2xl md:text-4xl text-white text-center`}>
            SRISHTI Inauguration | IDEATOR, GEC Thrissur
          </h2>
          <p className="mt-4 text-center text-white text-sm md:text-lg">
            We proudly inaugurated SRISHTI on March 30, 2025, a platform to turn student ideas into impactful ventures.
            The event featured inspiring talks from alumni Feroze Gani, Nishanth Gopinathan, and Jayaraj Shankar,
            along with insights from Aysha P.T., Convenor of IDEATOR. A roadmap to startup success, reflections on
            innovation, and the unveiling of SRISHTI’s five key domains marked the session. Grateful for the continued
            support from our alumni and the enthusiasm of our student team. This is just the beginning—let’s innovate forward!
          </p>
          {/* Responsive horizontal image arrangement */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Image
              src="/assests/s/news1.jpg"
              width={300}
              height={200}
              className="mx-4"
              alt="Event 1"
            />
            <Image
              src="/assests/s/news12.jpg"
              width={300}
              height={200}
              className="mx-4"
              alt="Event 2"
            />
            <Image
              src="/assests/s/news15.jpg"
              width={300}
              height={200}
              className="mx-4"
              alt="Event 3"
            />
            <Image
              src="/assests/s/news14.jpg"
              width={300}
              height={200}
              className="mx-4"
              alt="Event 4"
            />
          </div>
        </div>
      </div>

      {/* Global Register Now Button (Placeholder, if needed) */}
      <div className="w-full flex justify-center py-10">
        {/* Add any additional content or a global register button here */}
      </div>
    </div>
    </div>
  );
};

export default Shristi;
