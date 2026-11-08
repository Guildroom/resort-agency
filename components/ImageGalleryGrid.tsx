"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightboxModal from "./ImageLightboxModal";

interface ImageGalleryGridProps {
  images: string[];
  roomName: string;
}

export default function ImageGalleryGrid({
  images,
  roomName,
}: ImageGalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const displayImages = images.slice(0, 4);
  const remainingCount = images.length - 4;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {displayImages.map((src, index) => {
          const isLastImage = index === 3 && remainingCount > 0;

          return (
            <div
              key={index}
              className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group"
              style={{ backgroundColor: "var(--color-border)" }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`${roomName} - Image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 40vw"
              />

              {isLastImage && (
                <div
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(60, 40, 23, 0.75)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="text-5xl md:text-6xl font-bold mb-2"
                      style={{ color: "var(--color-surface)" }}
                    >
                      +{remainingCount}
                    </div>
                    <div
                      className="text-base md:text-lg font-medium"
                      style={{ color: "var(--color-light-beige)" }}
                    >
                      More Photos
                    </div>
                  </div>
                </div>
              )}

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          );
        })}
      </div>

      {lightboxOpen && (
        <ImageLightboxModal
          images={images}
          initialIndex={lightboxIndex}
          roomName={roomName}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
