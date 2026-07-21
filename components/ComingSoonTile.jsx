"use client";

import TiltCard from "./ui/TiltCard";

/**
 * A reusable "Coming Soon" announcement tile — dark gradient background,
 * title, and a continuously scrolling gold banner across the bottom.
 *
 * The animation is defined right here with <style jsx>, so this component
 * never depends on globals.css having the right keyframes — it always
 * works, no matter what.
 *
 * Usage: <ComingSoonTile title="SMART GECT CHALLENGE" />
 */
export default function ComingSoonTile({ title, className = "" }) {
  return (
    <TiltCard
      maxTilt={5}
      className={`relative rounded-xl overflow-hidden h-64 flex items-end ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <h3
        className="relative z-10 font-heading text-xl md:text-2xl font-bold p-5 pb-14"
        style={{ color: "#ffffff", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
      >
        {title}
      </h3>

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