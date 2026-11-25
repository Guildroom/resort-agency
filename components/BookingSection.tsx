"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, HeartHandshake, Trees } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "Easy Booking",
    label: "SIMPLE BOOKING",
    description: "Quick and easy reservation.",
    color: "var(--color-walnut)",
  },
  {
    icon: MapPin,
    title: "Prime Location",
    label: "PEACEFUL LOCATION",
    description: "Nestled in natural surroundings.",
    color: "var(--color-forest)",
  },
  {
    icon: HeartHandshake,
    title: "Our Service",
    label: "HERE FOR YOU",
    description: "Attentive hospitality to make you feel at home.",
    color: "var(--color-bronze)",
  },
  {
    icon: Trees,
    title: "Outdoor Spaces",
    label: "OPEN TO EXPLORE",
    description: "Shaded gardens, pathways, and quiet corners.",
    color: "var(--color-espresso)",
  },
];

export default function BookingSection() {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden"
      style={{ 
        backgroundColor: "var(--color-primary)",
        backgroundImage: "url('/hero/BR0A9717.jpg')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Header-colored gradient - top left to bottom right */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to bottom right, var(--color-primary) 0%, rgba(48, 37, 30, 0.95) 16%, rgba(48, 37, 30, 0.65) 34%, rgba(48, 37, 30, 0.25) 48%, transparent 60%)"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "var(--color-linen)" }}
            >
              Welcome to L&apos;escapade
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-light-beige)" }}
            >
              A quiet retreat where nature meets comfort. Explore our sanctuary.
            </p>
            <Link
              href="#rooms"
              className="btn-light inline-block px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
            >
              EXPLORE ↗
            </Link>
          </motion.div>

          {/* Right Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="hidden md:grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center justify-center p-5 rounded-lg border backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(240, 231, 218, 0.9)",
                  borderColor: "rgba(101, 70, 49, 0.18)",
                  boxShadow: "0 8px 24px rgba(48, 37, 30, 0.18)",
                }}
              >
                <item.icon
                  size={32}
                  style={{ color: item.color }}
                  strokeWidth={1.5}
                  className="mb-3"
                />
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em] text-center"
                  style={{ color: item.color }}
                >
                  {item.label}
                </span>
                <h3
                  className="mt-2 mb-1 text-base font-semibold text-center"
                  style={{ color: "var(--color-espresso)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs leading-relaxed text-center"
                  style={{ color: "var(--color-walnut)" }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
