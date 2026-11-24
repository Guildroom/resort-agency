"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Star, Sparkles } from "lucide-react";

const highlights = [
  { icon: Calendar, label: "Easy Booking", color: "var(--color-walnut)" },
  { icon: MapPin, label: "Prime Location", color: "var(--color-forest)" },
  { icon: Star, label: "5-Star Service", color: "var(--color-bronze)" },
  { icon: Sparkles, label: "Luxury Amenities", color: "var(--color-espresso)" },
];

export default function BookingSection() {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden"
      style={{ 
        backgroundColor: "var(--color-walnut)",
        backgroundImage: "url('/hero/BR0A9717.jpg')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Walnut gradient - top left to bottom right */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to bottom right, var(--color-walnut) 0%, rgba(101, 70, 49, 0.95) 16%, rgba(101, 70, 49, 0.65) 34%, rgba(101, 70, 49, 0.25) 48%, transparent 60%)"
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
              Ready to Experience L&apos;escapade?
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "var(--color-light-beige)" }}
            >
              Reserve your luxury escape today and discover where nature meets
              unparalleled comfort. Your perfect getaway awaits.
            </p>
            <Link
              href="/booking"
              className="btn-light inline-block px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
            >
              Book Your Stay
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
                  size={34}
                  style={{ color: item.color }}
                  strokeWidth={1.5}
                  className="mb-3"
                />
                <span
                  className="text-sm font-medium text-center"
                  style={{ color: "var(--color-espresso)" }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
