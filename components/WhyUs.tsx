"use client";

import { motion } from "framer-motion";
import { Mountain, Sparkles, Leaf, Heart } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Mountain,
    title: "Unmatched Natural Beauty",
    description:
      "Surrounded by pristine wilderness and breathtaking mountain vistas that create an unforgettable backdrop for your stay.",
    highlight: {
      value: "Room to breathe",
      label: "Untouched natural surroundings",
    },
  },
  {
    icon: Sparkles,
    title: "Luxury Redefined",
    description:
      "Premium amenities and accommodations designed for discerning guests who appreciate the finer things in life.",
    highlight: {
      value: "Quietly indulgent",
      label: "Comfort without compromise",
    },
  },
  {
    icon: Leaf,
    title: "Sustainable Excellence",
    description:
      "Award-winning eco-friendly practices preserving nature for future generations while providing uncompromising comfort.",
    highlight: {
      value: "Rooted in care",
      label: "Kind to the land",
    },
  },
  {
    icon: Heart,
    title: "Exceptional Service",
    description:
      "Dedicated concierge team available around the clock ensuring every moment of your stay exceeds expectations.",
    highlight: {
      value: "Warmly welcomed",
      label: "Looked after, always",
    },
  },
];

const promises = [
  { value: "Slow mornings", label: "No rush, no schedule" },
  { value: "Deep rest", label: "Sleep like you mean it" },
  { value: "Quiet luxury", label: "Comfort without noise" },
  { value: "Timeless memories", label: "Take the feeling home" },
];

export default function WhyUs() {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-20"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Why Choose L&apos;escapade
          </h2>
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Experience the perfect harmony of luxury and nature, where every
            detail is crafted for your ultimate comfort and peace.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlight={feature.highlight}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Promise Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {promises.map((promise, index) => (
            <motion.div
              key={promise.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div
                className="text-2xl md:text-3xl font-semibold mb-2 font-serif"
                style={{ color: "var(--color-walnut)" }}
              >
                {promise.value}
              </div>
              <div
                className="text-xs md:text-sm uppercase tracking-wider"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {promise.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
