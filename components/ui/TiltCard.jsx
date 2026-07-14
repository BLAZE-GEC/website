"use client";

import { useRef, useState } from "react";

/**
 * Wrap any card content in this to get the same 3D tilt-on-hover
 * effect used throughout the target design (project cards, team cards,
 * the About Us card, etc).
 *
 * Usage:
 *   <TiltCard className="bg-cardBg rounded-2xl p-6">
 *     ...your card content...
 *   </TiltCard>
 */
export default function TiltCard({ children, className = "", maxTilt = 8 }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = ((centerY - y) / centerY) * maxTilt;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease-out", ...style }}
      className={className}
    >
      {children}
    </div>
  );
}