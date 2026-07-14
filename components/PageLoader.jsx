"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Optimized timing: show for a brief beat (400ms) so the animation is visible,
    // then fade out and remove quickly (700ms total) to speed up page availability.
    const fadeTimer = setTimeout(() => setFadingOut(true), 400);
    const removeTimer = setTimeout(() => setVisible(false), 700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-bgPrimary transition-opacity duration-600"
      style={{
        opacity: fadingOut ? 0 : 1,
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      <div className="text-center">
        <svg width="160" height="160" viewBox="0 0 100 100" className="mx-auto mb-2">
          {/* Spinning gear background */}
          <g
            className="loader-gear-spin"
            stroke="var(--tw-color-secondary, #4a5c4e)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.3"
          >
            <circle cx="50" cy="50" r="16" />
            <path d="M50,24 L50,30 M50,70 L50,76 M24,50 L30,50 M70,50 L76,50 M32,32 L36,36 M64,64 L68,68 M32,64 L36,60 M64,32 L68,36" />
            <path d="M50,15 A35,35 0 0,1 85,50" strokeDasharray="4 4" />
          </g>
          {/* Glowing lightbulb outline */}
          <path
            className="loader-bulb-glow"
            d="M50,30 C40,30 35,38 35,48 C35,55 39,60 41,63 L41,70 C41,72 43,74 45,74 L55,74 C57,74 59,72 59,70 L59,63 C61,60 65,55 65,48 C65,38 60,30 50,30 Z"
            fill="none"
            stroke="#d28b26"
            strokeWidth="2.5"
          />
          <path
            d="M44,78 L56,78 M46,82 L54,82"
            stroke="#d28b26"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <div className="font-heading text-2xl md:text-3xl font-bold text-primary mb-1">
          CLUB IDEATOR GECT
        </div>
        <div className="text-xs font-semibold tracking-[2px] text-textMuted uppercase">
          Prototyping Sandbox...
        </div>
      </div>
    </div>
  );
}