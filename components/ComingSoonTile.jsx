"use client";

import { useState } from "react";
import TiltCard from "./ui/TiltCard";

/**
 * A reusable "Coming Soon" announcement tile.
 * - Pass just a title -> shows the dark gradient background (Smart GECT Challenge style)
 * - Pass an image too -> shows that real poster/photo as the background instead
 * - Pass hideBanner -> skips the moving "COMING SOON" banner entirely
 * - When an image is set, clicking the tile toggles between a cropped fill
 *   view and the full image centered/contained within the same tile —
 *   no separate popup, it "pops out" right where it already is.
 *
 * Usage:
 *   <ComingSoonTile title="SMART GECT CHALLENGE" />
 *   <ComingSoonTile image="/assests/ignitex-poster.jpeg" hideBanner />
 */
export default function ComingSoonTile({ title, image, hideBanner = false, className = "" }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltCard
      maxTilt={5}
      className={`relative rounded-xl overflow-hidden h-64 flex items-end ${className}`}
    >
      {image ? (
        <div
          onClick={() => setExpanded((prev) => !prev)}
          className={`absolute inset-0 cursor-pointer ${expanded ? "bg-black" : ""}`}
        >
          <img
            src={image}
            alt={title || "Coming soon"}
            className={`w-full h-full transition-all duration-300 ${
              expanded ? "object-contain p-2" : "object-cover"
            }`}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      )}

      {!expanded && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />}

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