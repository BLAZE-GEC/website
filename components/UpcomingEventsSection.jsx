"use client";

import TiltCard from "@/components/ui/TiltCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

// Add more entries here as new upcoming events get announced.
// TODO: swap the gradient placeholder below for a real poster image once
// one exists — set `img: "/assests/events1/yourfile.jpg"` and it'll show
// automatically in place of the gradient.
const upcomingEvents = [
  {
    id: "smart-gect-challenge",
    title: "SMART GECT CHALLENGE",
    img: null,
  },
];

export default function UpcomingEventsSection() {
  return (
    <RevealOnScroll className="container mx-auto px-4 mb-16">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        Upcoming Events
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <TiltCard
            key={event.id}
            maxTilt={5}
            className="relative rounded-xl overflow-hidden h-64 flex items-end"
          >
            {/* Background — real poster image if we have one, otherwise a themed gradient */}
            {event.img ? (
              <img
                src={event.img}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent" />
            )}

            {/* Darken bottom so the title stays readable over any image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Event title */}
            <h3
              className="relative z-10 font-heading text-xl md:text-2xl font-bold p-5 pb-14"
              style={{ color: "#ffffff", textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
            >
              {event.title}
            </h3>

            {/* Always-moving "Coming Soon" marquee banner */}
            <div className="absolute bottom-0 left-0 w-full bg-accent overflow-hidden py-2 z-10">
              <div className="marquee-track flex whitespace-nowrap">
                <span className="marquee-text">
                  COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp;
                </span>
                <span className="marquee-text" aria-hidden="true">
                  COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp; COMING SOON &nbsp;•&nbsp;
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </RevealOnScroll>
  );
}