"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageLightboxModal from "./ImageLightboxModal";

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
];

const gallerySources = galleryImages.map((image) => `/hero/${image}`);

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      className="relative w-full pt-10 md:pt-14 pb-20 md:pb-32"
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
          Explore L&apos;escapade
        </h2>
        <p
          className="text-base md:text-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          A visual journey through our stunning resort and natural surroundings
        </p>
      </motion.div>

      {/* Photo grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-3 md:grid-cols-4 auto-rows-[100px] sm:auto-rows-[140px] md:auto-rows-[210px] gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`Open gallery photo ${index + 1}`}
              className={`group relative block rounded-lg overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bronze)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={`/hero/${image}`}
                alt={`L'escapade Resort gallery photo ${index + 1}`}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 66vw, 50vw"
                    : "(max-width: 768px) 33vw, 25vw"
                }
              />
              <span
                className="absolute inset-0 bg-[rgba(48,37,30,0)] transition-colors duration-300 group-hover:bg-[rgba(48,37,30,0.12)]"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </motion.div>

      {lightboxOpen && (
        <ImageLightboxModal
          images={gallerySources}
          initialIndex={lightboxIndex}
          roomName="L'escapade Resort"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
