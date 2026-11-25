"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageLightboxModal from "./ImageLightboxModal";

const featuredGallery = [
  { src: "BR0A9753.jpg", alt: "Bedroom opening onto the pool" },
  { src: "BR0A9615.jpg", alt: "Carved timber entrance" },
  { src: "BR0A9643.jpg", alt: "Villa living room" },
  { src: "BR0A9700.jpg", alt: "Open-air bathtub" },
  { src: "BR0A9732.jpg", alt: "Villa pool terrace" },
];

const allGalleryImages = [
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

const gallerySources = allGalleryImages.map((image) => `/hero/${image}`);

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      id="gallery"
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
        <div className="grid grid-cols-2 grid-rows-[240px_135px_135px] gap-2 md:grid-cols-[1.25fr_1fr_1fr] md:grid-rows-[190px_190px] md:gap-3">
          {featuredGallery.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => openLightbox(allGalleryImages.indexOf(image.src))}
              aria-label={`Open gallery photo ${index + 1}`}
              className={`group relative block cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-bronze)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] ${
                index === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <Image
                src={`/hero/${image.src}`}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
              <span
                className="pointer-events-none absolute bottom-2.5 right-3 text-xl text-white"
                style={{ textShadow: "0 1px 8px rgba(0, 0, 0, 0.6)" }}
                aria-hidden="true"
              >
                ↗
              </span>
            </button>
          ))}
        </div>

        <div className="mt-[30px] text-center">
          <button
            type="button"
            onClick={() => openLightbox(0)}
            className="inline-block border-b border-current pb-[7px] text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors duration-200 hover:text-[var(--color-forest)]"
          >
            View all {allGalleryImages.length} photographs ↗
          </button>
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
