"use client";

import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";

export default function TransitionProvider({ children }) {
  return (
    <TransitionRouter
      leave={(next) => {
        gsap.to(".page-transition", {
          opacity: 0,
          x: -180,
          y: -30,
          duration: 0.45,
          ease: "power2.inOut",
          onComplete: next,
        });
      }}
      enter={(next) => {
        gsap.fromTo(
          ".page-transition",
          {
            opacity: 0,
            x: 180,
            y: 120,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.55,
            ease: "power3.out",
            onComplete: next,
          }
        );
      }}
    >
      {children}
    </TransitionRouter>
  );
}