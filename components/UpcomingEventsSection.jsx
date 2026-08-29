"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // 1. Import createPortal
import Image from "next/image";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ComingSoonTile from "@/components/ComingSoonTile";

const upcomingEvents = [
  { 
    title: "BRAND NEW YEAR — Freshers Orientation",
    image: "/assests/events1/brand-new-year.jpg",
  },
  { 
     
    image: "/assests/events1/smartgect.png",
  },
];

export default function UpcomingEventsSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  // 2. We use this to make sure Next.js only renders the portal on the client-side
  useEffect(() => {
    setMounted(true);
    
    // Optional: Prevent background scrolling when popup is open
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => { document.body.style.overflow = "unset"; }
  }, [selectedImage]);

  return (
    <>
      <RevealOnScroll className="container mx-auto px-4 mb-16">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Upcoming Events
        </h2>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index}
              onClick={() => setSelectedImage(event.image)}
              className="w-full sm:w-[45%] lg:w-[40%] xl:w-[35%] cursor-zoom-in transition-transform hover:scale-[1.02]"
            >
              <ComingSoonTile
                title={event.title}
                image={event.image}
                hideBanner={event.hideBanner}
              />
            </div>
          ))}
        </div>
      </RevealOnScroll>

      {/* 3. The Portal perfectly escapes all parent containers! */}
      {mounted && selectedImage && createPortal(
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity duration-300"
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 text-white text-xl backdrop-blur-md transition-colors z-50"
          >
            ✕
          </button>

          <div className="relative w-full max-w-4xl h-[80vh] md:h-[90vh]">
            <Image 
              src={selectedImage} 
              alt="Enlarged Event Poster" 
              fill 
              className="object-contain drop-shadow-2xl" 
              priority
            />
          </div>
        </div>,
        document.body // This forces the popup to attach directly to the main body tag
      )}
    </>
  );
}