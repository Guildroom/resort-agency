"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Star, Sparkles } from "lucide-react";

export default function BookingSection() {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32 overflow-hidden"
      style={{ 
        backgroundColor: "var(--color-forest-green)",
        backgroundImage: "url('/hero/pexels-rebornfilmes-27624001.jpg')",
        backgroundPosition: "right center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Gradient overlay - left to right */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(to right, var(--color-forest-green) 0%, var(--color-forest-green) 40%, rgba(77, 93, 74, 0.7) 60%, rgba(77, 93, 74, 0.3) 80%, transparent 100%)"
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
              style={{ color: "var(--color-surface)" }}
            >
              Ready to Experience Lanscade?
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
              className="btn-primary inline-block px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
            >
              Book Your Stay
            </Link>
          </motion.div>

          {/* Right Visual - Decorative Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden md:grid grid-cols-2 gap-8"
          >
            {[
              { icon: Calendar, label: "Easy Booking", color: "var(--color-accent-gold)" },
              { icon: MapPin, label: "Prime Location", color: "var(--color-olive)" },
              { icon: Star, label: "5-Star Service", color: "var(--color-surface)" },
              { icon: Sparkles, label: "Luxury Amenities", color: "var(--color-secondary)" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center justify-center p-6 rounded-lg backdrop-blur-md"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}
              >
                <item.icon
                  size={40}
                  style={{ color: item.color }}
                  strokeWidth={1.5}
                  className="mb-3"
                />
                <span
                  className="text-sm font-medium text-center"
                  style={{ color: "var(--color-surface)" }}
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
