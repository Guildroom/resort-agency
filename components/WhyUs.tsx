"use client";

import { motion } from "framer-motion";
import { Mountain, Sparkles, Leaf, Heart } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Mountain,
    title: "Sanctuary in the Wild",
    description:
      "Immerse yourself in the gentle embrace of pristine nature and quiet grandeur, where every vista is a part of your journey.",
    highlight: {
      label: "EMBRACE OF THE WILDERNESS",
    },
  },
  {
    icon: Sparkles,
    title: "Harmonious Luxury",
    description:
      "Discreet elegance and mindful comforts designed for those who find richness in quiet, thoughtful details.",
    highlight: {
      label: "GENUINE HOSPITALITY",
    },
  },
  {
    icon: Leaf,
    title: "Living with the Earth",
    description:
      "A thoughtful dedication to preserving our natural heritage, offering gentle comfort in harmony with the forest.",
    highlight: {
      label: "ECO-CONSCIOUS LIVING",
    },
  },
  {
    icon: Heart,
    title: "Gentle Attentiveness",
    description:
      "A devoted team anticipating your needs with warmth and grace, ensuring a seamless, deeply personal stay.",
    highlight: {
      label: "PERSONALIZED CARE",
    },
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
