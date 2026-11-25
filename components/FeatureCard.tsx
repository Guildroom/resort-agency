"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: {
    label: string;
  };
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  highlight,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative p-6 rounded-lg border transition-all duration-300"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      {/* Icon */}
      <div
        className="mb-4 inline-flex p-3 rounded-full"
        style={{ backgroundColor: "var(--color-light-beige)" }}
      >
        <Icon
          size={24}
          style={{ color: "var(--color-walnut)" }}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className="text-lg md:text-xl font-semibold mb-3"
        style={{ color: "var(--color-primary)" }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="text-sm md:text-base leading-relaxed mb-4"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      {/* Optional Highlight */}
      {highlight && (
        <div className="mt-4 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
          <div
            className="text-xs uppercase tracking-wider"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {highlight.label}
          </div>
        </div>
      )}

      {/* Hover effect overlay */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "0 20px 40px rgba(101, 70, 49, 0.12)",
        }}
      />
    </motion.div>
  );
}
