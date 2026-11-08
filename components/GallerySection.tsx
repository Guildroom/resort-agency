"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "BR0A9579.jpg",
  "BR0A9586.jpg",
  "BR0A9615.jpg",
  "BR0A9643.jpg",
  "BR0A9685.jpg",
  "BR0A9697.jpg",
  "BR0A9700.jpg",
  "BR0A9712.jpg",
  "BR0A9717.jpg",
  "BR0A9732.jpg",
  "BR0A9753.jpg",
  "BR0A9774.jpg",
  "BR0A9876.jpg",
];

export default function GallerySection() {
  return (
    <section
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16 px-6"
      >
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "var(--color-primary)" }}
        >
          Explore L'escapade
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A visual journey through our stunning resort and natural surroundings
        </p>
      </motion.div>

      {/* Infinite Scrolling Gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="marquee">
          <div className="marquee-content">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div key={index} className="marquee-item">
                <div className="relative w-80 md:w-96 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`/hero/${image}`}
                    alt={`L'escapade Resort Gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 768px) 320px, 384px"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          user-select: none;
        }

        .marquee-content {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
        }

        .marquee-item {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
