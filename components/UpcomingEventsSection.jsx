"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ComingSoonTile from "@/components/ComingSoonTile";

// Add more entries here as new upcoming events get announced.
const upcomingEvents = [
  { title: "SMART GECT CHALLENGE" },
];

export default function UpcomingEventsSection() {
  return (
    <RevealOnScroll className="container mx-auto px-4 mb-16">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <ComingSoonTile
            key={event.title}
            title={event.title}
            image={event.image}
            hideBanner={event.hideBanner}
          />
        ))}
      </div>
    </RevealOnScroll>
  );
}