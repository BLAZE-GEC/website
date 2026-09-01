"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import events from "./eventsData";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TiltCard from "@/components/ui/TiltCard";

const Events = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 mt-16">
      <div className="container mx-auto text-center h-full">
        <UpcomingEventsSection />

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Past Events
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, index) => {
            const isOpen = event.status?.toLowerCase().includes("open");
            return (
              <RevealOnScroll
                key={event.id}
                delay={(index % 3) * 0.08}
                className="w-full md:w-[48%] lg:w-[30%] xl:w-[30%]"
              >
                <TiltCard maxTilt={5} className="p-4 bg-cardBg rounded-xl shadow-md h-full flex flex-col">
                  <div 
                    className="w-full h-[220px] md:h-[260px] relative rounded-lg overflow-hidden flex-shrink-0 cursor-pointer group"
                    onClick={() => setSelectedImage(event.img)}
                  >
                    <Image 
                      src={event.img} 
                      fill 
                      className="object-cover transition-transform duration-300 group-hover:scale-105" 
                      alt={event.title} 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-4 flex flex-col flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold text-primary">{event.title}</h3>
                    <p className="text-sm md:text-base text-secondary opacity-95 font-light py-2 flex-1">
                      {event.des}
                    </p>
                    <div className="flex justify-between text-sm font-semibold text-textMuted py-1">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    {event.venue && (
                      <div className="text-sm font-semibold text-textMuted py-1">{event.venue}</div>
                    )}
                    <div className="mt-auto pt-3">
                      {/* FIX: Removed nested button inside Link to fix Next.js hydration error */}
                      {event.link ? (
                        <Link 
                          href={event.link} 
                          className="block w-full text-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2.5 rounded-full transition-colors"
                        >
                          {event.status}
                        </Link>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-primary/8 text-primary/40 text-sm font-semibold py-2.5 rounded-full cursor-not-allowed"
                        >
                          {event.status}
                        </button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {mounted && selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[4/3] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <Image 
              src={selectedImage} 
              alt="Event Poster Full View" 
              fill 
              className="object-contain" 
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-accent rounded-full w-10 h-10 flex items-center justify-center transition-colors font-bold text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Events;