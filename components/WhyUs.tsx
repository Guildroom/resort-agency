"use client";

import { motion } from "framer-motion";
import { Mountain, Sparkles, Leaf, Users, Award, Heart } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Mountain,
    title: "Unmatched Natural Beauty",
    description:
      "Surrounded by pristine wilderness and breathtaking mountain vistas that create an unforgettable backdrop for your stay.",
    stat: {
      value: "500+",
      label: "Acres of Wilderness",
    },
  },
  {
    icon: Sparkles,
    title: "Luxury Redefined",
    description:
      "Premium amenities and accommodations designed for discerning guests who appreciate the finer things in life.",
    stat: {
      value: "5-Star",
      label: "Premium Service",
    },
  },
  {
    icon: Leaf,
    title: "Sustainable Excellence",
    description:
      "Award-winning eco-friendly practices preserving nature for future generations while providing uncompromising comfort.",
    stat: {
      value: "100%",
      label: "Renewable Energy",
    },
  },
  {
    icon: Heart,
    title: "Exceptional Service",
    description:
      "Dedicated concierge team available 24/7 ensuring every moment of your stay exceeds expectations.",
    stat: {
      value: "98%",
      label: "Guest Satisfaction",
    },
  },
];

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "500+", label: "Acres of Nature" },
  { value: "98%", label: "Guest Satisfaction" },
  { value: "24/7", label: "Concierge Service" },
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
            Why Choose Lanscade
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
              stat={feature.stat}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-16 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
               <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "var(--color-accent-gold)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm uppercase tracking-wider"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
