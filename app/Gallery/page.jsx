"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import galleryPhotos from "./galleryData";

const filters = [
  { label: "All Photos", value: "all" },
  { label: "Makerspace Lab", value: "lab" },
  { label: "Workshops", value: "workshops" },
  { label: "Prototypes", value: "prototypes" },
  { label: "Meetings", value: "team" },
];

// --- AUTO-SWIPING COMPONENT ---
function AutoSwipeImage({ slides, altText }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides]);

  return (
    <>
      {slides.map((slideSrc, index) => (
        <Image
          key={index}
          src={slideSrc}
          alt={`${altText} ${index + 1}`}
          fill
          className={`object-cover transition-all duration-1000 ease-in-out group-hover:scale-110 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </>
  );
}
// ----------------------------------

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null); 
  const [slideIndex, setSlideIndex] = useState(0); // NEW: Tracks which slide inside a tile we are viewing

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#team-meeting") {
      setActiveFilter("team");
    }
  }, []);

  const filteredPhotos =
    activeFilter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeFilter);

  // Open Lightbox and reset the slide index to 0
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setSlideIndex(0);
  };
  
  const closeLightbox = () => setLightboxIndex(null);

  // Navigate Previous (Handles slides inside a tile, or moves to the previous tile)
  const showPrev = () => {
    const currentItem = filteredPhotos[lightboxIndex];
    if (currentItem.slides && slideIndex > 0) {
      // Go back one slide inside the current event
      setSlideIndex((i) => i - 1);
    } else {
      // Go to the previous event in the grid
      const prevIndex = (lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
      setLightboxIndex(prevIndex);
      // If the previous event has slides, start at its last slide
      const prevItem = filteredPhotos[prevIndex];
      setSlideIndex(prevItem.slides ? prevItem.slides.length - 1 : 0);
    }
  };

  // Navigate Next (Handles slides inside a tile, or moves to the next tile)
  const showNext = () => {
    const currentItem = filteredPhotos[lightboxIndex];
    if (currentItem.slides && slideIndex < currentItem.slides.length - 1) {
      // Go forward one slide inside the current event
      setSlideIndex((i) => i + 1);
    } else {
      // Go to the next event in the grid
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
      setSlideIndex(0); // Start at the first slide of the new event
    }
  };

  return (
    <section id="team-meeting" className="container mx-auto px-4 pt-10 pb-20 scroll-mt-24">
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
          Makerspace Gallery
        </h1>
        <p className="text-secondary max-w-xl mx-auto">
          Take a visual tour inside our lab facilities, check out weekly workshop meetups, and
          examine active prototypes.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActiveFilter(f.value)}
            className={`px-4 py-2 rounded-md text-sm font-semibold border transition-colors ${
              activeFilter === f.value
                ? "bg-accent text-white border-accent"
                : "bg-transparent text-primary border-primary/20 hover:border-accent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative cursor-pointer rounded-xl overflow-hidden bg-cardBg border border-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30"
          >
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              
              {photo.slides && photo.slides.length > 1 ? (
                <AutoSwipeImage slides={photo.slides} altText={photo.title} />
              ) : (
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                <Expand className="text-white w-10 h-10 transition-transform duration-300 group-hover:scale-125" />
              </div>
            </div>

            <div className="p-3">
              {/* Removed the category label (e.g. TEAM) from here entirely! */}
              <h3 className="font-semibold text-primary text-sm mt-1">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[200] flex flex-col items-center justify-center px-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute top-5 right-5 text-white"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full w-11 h-11 flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full w-11 h-11 flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative w-full max-w-3xl h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Show the specific slide image if it exists, otherwise fallback to the main src */}
            <Image
              src={
                filteredPhotos[lightboxIndex].slides 
                  ? filteredPhotos[lightboxIndex].slides[slideIndex] 
                  : filteredPhotos[lightboxIndex].src
              }
              alt={filteredPhotos[lightboxIndex].title}
              fill
              className="object-contain"
            />
          </div>
          
          <p className="text-white font-heading text-lg mt-4 text-center">
            {filteredPhotos[lightboxIndex].title} 
            {/* Optional: Add a little slide counter so people know they are looking at a multi-image event */}
            {filteredPhotos[lightboxIndex].slides && (
              <span className="text-sm opacity-70 ml-2">
                ({slideIndex + 1} / {filteredPhotos[lightboxIndex].slides.length})
              </span>
            )}
          </p>
        </div>
      )}
    </section>
  );
}