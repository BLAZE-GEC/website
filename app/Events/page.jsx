import Image from "next/image";
import events from "./eventsData";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import TiltCard from "@/components/ui/TiltCard";

const Events = () => {
  return (
    <section className="min-h-[80vh] w-full flex flex-col justify-center xl:px-0 mt-16">
      <div className="container mx-auto text-center h-full">
        <UpcomingEventsSection />

        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary text-center mb-8">
          Past Events
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, index) => {
            const isOpen = event.status?.toLowerCase().includes("open");
            return (
              <RevealOnScroll
                key={event.id}
                delay={(index % 3) * 0.08}
                className="w-full md:w-[48%] lg:w-[30%] xl:w-[30%]"
              >
                <TiltCard maxTilt={5} className="p-4 bg-cardBg rounded-xl shadow-md h-full flex flex-col">
                  <div className="w-full h-[220px] md:h-[260px] relative rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={event.img} fill className="object-cover" alt={event.title} />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-primary">{event.title}</h3>
                    <p className="text-sm md:text-base text-secondary opacity-95 font-light py-2 flex-1">
                      {event.des}
                    </p>
                    <div className="flex justify-between text-sm font-semibold text-textMuted py-1">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    {event.venue && (
                      <div className="text-sm font-semibold text-textMuted py-1">{event.venue}</div>
                    )}
                    <div className="mt-auto pt-3">
                      {isOpen ? (
                        <a href={event.link || "#"} className="block">
                          <button className="w-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold py-2.5 rounded-full transition-colors">
                            {event.status}
                          </button>
                        </a>
                      ) : (
                        <button
                          disabled
                          className="w-full bg-primary/8 text-primary/40 text-sm font-semibold py-2.5 rounded-full cursor-not-allowed"
                        >
                          {event.status}
                        </button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;