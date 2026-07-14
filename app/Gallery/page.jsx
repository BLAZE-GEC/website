"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import galleryPhotos from "./galleryData";

const filters = [
  { label: "All Photos", value: "all" },
  { label: "Makerspace Lab", value: "lab" },
  { label: "Workshops", value: "workshops" },
  { label: "Prototypes", value: "prototypes" },
  { label: "Team Meetings", value: "team" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null); // index within filteredPhotos, or null when closed

  const filteredPhotos =
    activeFilter === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeFilter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + filteredPhotos.length) % filteredPhotos.length);
  const showNext = () =>
    setLightboxIndex((i) => (i + 1) % filteredPhotos.length);

  return (
    <section className="container mx-auto px-4 pt-10 pb-20">
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
    <Image
      src={photo.src}
      alt={photo.title}
      fill
      className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
      <Expand className="text-white w-10 h-10 transition-transform duration-300 group-hover:scale-125" />
    </div>
  </div>

  <div className="p-3">
    <span className="text-xs font-semibold text-accent uppercase tracking-wide">
      {photo.category}
    </span>

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
            <Image
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].title}
              fill
              className="object-contain"
            />
          </div>
          <p className="text-white font-heading text-lg mt-4 text-center">
            {filteredPhotos[lightboxIndex].title}
          </p>
        </div>
      )}
    </section>
  );
}