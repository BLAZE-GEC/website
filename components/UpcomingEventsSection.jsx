"use client";

import RevealOnScroll from "@/components/ui/RevealOnScroll";
import ComingSoonTile from "@/components/ComingSoonTile";

// Add more entries here as new upcoming events get announced.
// "image" is optional — leave it out to get the dark gradient look
// (like Smart GECT Challenge), or set a path to use a real poster instead.
// "hideBanner" removes the moving Coming Soon strip for tiles whose poster
// already has its own "coming soon" messaging baked in (like Ignite.X).
const upcomingEvents = [
  { title: "SMART GECT CHALLENGE" },
  { title: null, image: "/assests/ignitex-poster.jpeg", hideBanner: true },
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
            key={event.title || event.image}
            title={event.title}
            image={event.image}
            hideBanner={event.hideBanner}
          />
        ))}
      </div>
    </RevealOnScroll>
  );
}