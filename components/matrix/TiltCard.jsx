'use client';

import React, { useRef, useState, useCallback } from 'react';

export default function TiltCard({ children, className = '', maxTilt = 12 }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.4s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
  });

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setStyle({
        transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`,
        transition: 'transform 0.1s ease-out'
      });
    });
  }, [maxTilt]);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    });
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className={`will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
