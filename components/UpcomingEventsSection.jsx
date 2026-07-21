"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ComingSoonTile from "@/components/ComingSoonTile";

// Add upcoming events here
const upcomingEvents = [
  "SMART GECT CHALLENGE",
  "IGNITE.X WORKSHOP SERIES 2026",
];

export default function UpcomingEventsSection() {
  return (
    <RevealOnScroll className="container mx-auto px-4 mb-16">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center max-w-4xl mx-auto">
        {upcomingEvents.map((title) => (
          <ComingSoonTile key={title} title={title} />
        ))}
      </div>
    </RevealOnScroll>
  );
}