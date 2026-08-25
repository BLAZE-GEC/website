"use client";

import { useEffect, useState } from "react";
import TiltCard from "@/components/ui/TiltCard";

const shirts = [
  { front: "/assests/merch/polo-front.png", back: "/assests/merch/polo-back.png", label: "Polo Fit" },
];

// Club Convener's WhatsApp — clicking the tile opens a chat here.
// TODO: update this if the convener ever changes.
const CONVENER_WHATSAPP =
  "https://wa.me/919846851957?text=Hi%2C%20I'm%20interested%20in%20getting%20an%20Ideator%20merch%20t-shirt!";

function FlippingShirt({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flip-outer" style={{ perspective: "1200px" }}>
      <div
        className="flip-inner"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <img src={front} alt="Shirt front" className="flip-face flip-front" />
        <img src={back} alt="Shirt back" className="flip-face flip-back" />
      </div>

      <style jsx>{`
        .flip-outer {
          width: 100%;
          height: 100%;
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 1.2s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
          animation: floatY 4s ease-in-out infinite;
        }
        .flip-face {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          backface-visibility: hidden;
        }
        .flip-back {
          transform: rotateY(180deg);
        }
        @keyframes floatY {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -8px; }
        }
      `}</style>
    </div>
  );
}

export default function MerchTile() {
  const handleClick = () => {
    window.open(CONVENER_WHATSAPP, "_blank", "noopener,noreferrer");
  };

  return (
    <TiltCard
      onClick={handleClick}
      className="bg-cardBg rounded-2xl p-6 shadow-sm cursor-pointer"
      maxTilt={4}
    >
      <h3 className="font-heading text-2xl font-bold text-primary mb-1">
        Wear the Spark<span className="text-accent">.</span>
      </h3>
      <p className="text-secondary text-sm mb-4">
        Official Ideator merch — tap to grab yours before the batch runs out.
      </p>

      {/* Changed grid-cols-2 to grid-cols-1 to center the single shirt */}
      <div className="grid grid-cols-1 gap-4 mb-5">
        {shirts.map((shirt) => (
          <div key={shirt.label} className="flex flex-col items-center">
            <div className="w-full h-40">
              <FlippingShirt front={shirt.front} back={shirt.back} />
            </div>
            <span className="text-xs font-semibold text-textMuted uppercase tracking-wide mt-2">
              {shirt.label}
            </span>
          </div>
        ))}
      </div>

      <div className="block text-center bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2.5 rounded-md transition-colors">
        CLAIM YOURS
      </div>
    </TiltCard>
  );
}