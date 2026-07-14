"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Copy,
  Check,
  MessageCircle,
} from "lucide-react";

const contacts = [
  {
    role: "Convener",
    name: "Naveen P Suresh",
    phone: "+91 98468 51957",
    image: "/assests/team/01-naveen-p-suresh.jpg",
    whatsapp:
      "https://wa.me/919846851957?text=Hi%20I'm%20interested%20in%20joining%20Ideator.",
  },
  {
    role: "Manager",
    name: "Harinanda V",
    phone: "+91 98954 13063",
    image: "/assests/team/03-harinanda-v.jpg",
    whatsapp:
      "https://wa.me/919895413063?text=Hi%20I'm%20interested%20in%20joining%20Ideator.",
  },
  {
    role: "Project Head",
    name: "Sahal K K",
    phone: "+91 99954 15429",
    image: "/assests/team/sahalkk.jpg",
    whatsapp:
      "https://wa.me/919995415429?text=Hi%20I'm%20interested%20in%20joining%20Ideator.",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState("");

  const copyNumber = async (number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(number);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Contact Our Team
          </h2>

          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Have questions about Ideator or want to join our community?
            Connect directly with our team through WhatsApp.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {contacts.map((person) => (
            <motion.div
              key={person.name}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="bg-base1 rounded-2xl shadow-xl border border-white/10 p-8 flex flex-col items-center"
            >

              {/* Avatar — real photo if we have one, otherwise the letter placeholder */}
              {person.image ? (
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent mb-6 relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 rounded-full bg-accent/15 border-2 border-accent flex items-center justify-center text-3xl font-bold text-accent mb-6">
                  {person.name.charAt(0)}
                </div>
              )}

              {/* Role */}
              <h3 className="text-2xl font-bold text-primary text-center">
                {person.role}
              </h3>

              {/* Name */}
              <p className="text-white mt-2 text-center font-medium">
                {person.name}
              </p>

              {/* Phone */}
              <div className="w-full mt-7 bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">

                <div className="flex items-center gap-2 text-white text-sm">
                  <Phone size={16} />
                  <span>{person.phone}</span>
                </div>

                <button
                  onClick={() => copyNumber(person.phone)}
                  className="hover:text-accent transition"
                  title="Copy Number"
                >
                  {copied === person.phone ? (
                    <Check
                      size={18}
                      className="text-green-400"
                    />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>

              </div>

              {/* WhatsApp */}
              <a
                href={person.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover transition-all duration-300 text-white font-semibold px-6 py-2.5 rounded-full"
              >
                <span>Connect</span>

                <MessageCircle size={18} />
              </a>

            </motion.div>
          ))}

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;