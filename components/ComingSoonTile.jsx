"use client";

import { useState, useEffect } from "react";
import TiltCard from "./ui/TiltCard";

/**
 * A reusable "Coming Soon" announcement tile.
 * - Pass `images` (array) -> cycles through them every 2 seconds if not expanded.
 * - Pass `image` (string) -> single static image fallback.
 * - Pass `title` -> shows title text.
 * - Pass `hideBanner` -> skips the moving "COMING SOON" banner.
 */
export default function ComingSoonTile({ title, image, images, hideBanner = false, className = "" }) {
  const [expanded, setExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalize images into an array (supports both single `image` and multiple `images`)
  const imageList = images && images.length > 0 ? images : image ? [image] : [];

  // Slideshow effect: Change image every 2 seconds unless expanded
  useEffect(() => {
    if (imageList.length <= 1 || expanded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imageList.length, expanded]);

  const activeImage = imageList[currentIndex];

  return (
    <TiltCard
      maxTilt={5}
      className={`relative rounded-xl overflow-hidden h-64 flex items-end ${className}`}
    >
      {activeImage ? (
        <div
          onClick={() => setExpanded((prev) => !prev)}
          className={`absolute inset-0 cursor-pointer transition-colors duration-500 ${
            expanded ? "bg-black" : ""
          }`}
        >
          <img
            key={currentIndex} // Triggers a smooth fade/transition when image swaps
            src={activeImage}
            alt={title || "Coming soon"}
            className={`w-full h-full transition-all duration-500 ${
              expanded ? "object-contain p-2" : "object-cover animate-fade"
            }`}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      )}

      {!expanded && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      )}

      {title && !expanded && (
        <h3
          className="relative z-10 font-heading text-xl md:text-2xl font-bold p-5 pb-14 pointer-events-none"
          style={{ color: "#ffffff", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
        >
          {title}
        </h3>
      )}

      {!hideBanner && !expanded && (
        <div className="marquee-wrap absolute bottom-0 left-0 w-full bg-accent overflow-hidden py-2 z-10">
          <div className="marquee-track flex whitespace-nowrap">
            <span className="marquee-text">
              COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp;
            </span>
            <span className="marquee-text" aria-hidden="true">
              COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp;
            </span>
          </div>
        </div>
      )}

      <style jsx>{`
        .marquee-wrap {
          white-space: nowrap;
        }
        .marquee-track {
          width: max-content;
          animation: marqueeScrollLocal 8s linear infinite;
        }
        .marquee-text {
          color: white;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 1px;
          display: inline-block;
        }
        @keyframes marqueeScrollLocal {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </TiltCard>
  );
}