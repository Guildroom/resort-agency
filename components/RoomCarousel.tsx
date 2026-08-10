"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RoomCarouselProps {
  images: string[];
  roomName: string;
  compact?: boolean;
}

export default function RoomCarousel({
  images,
  roomName,
  compact = false,
}: RoomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, images.length]);

  if (images.length === 0) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ backgroundColor: "var(--color-border)" }}
      >
        <span
          className="text-xs"
          style={{ color: "var(--color-text-secondary)" }}
        >
          No image
        </span>
      </div>
    );
  }

  const showArrows = images.length > 1;

  return (
    <div
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-live="polite"
    >
      <Image
        src={images[currentIndex]}
        alt={`${roomName} - Image ${currentIndex + 1}`}
        fill
        className="object-cover transition-opacity duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 224px, 256px"
      />

      {showArrows && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrev();
            }}
            aria-label="Previous image"
            className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-opacity duration-200 ${
              compact ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" : "opacity-100"
            }`}
            style={{
              backgroundColor: "rgba(28, 27, 26, 0.6)",
              color: "var(--color-surface)",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
            className={`absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-opacity duration-200 ${
              compact ? "opacity-100 md:opacity-0 md:group-hover:opacity-100" : "opacity-100"
            }`}
            style={{
              backgroundColor: "rgba(28, 27, 26, 0.6)",
              color: "var(--color-surface)",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {showArrows && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              aria-label={`Go to image ${index + 1}`}
              className="w-2 h-2 rounded-full transition-all duration-200"
              style={{
                backgroundColor:
                  index === currentIndex
                    ? "var(--color-accent-gold)"
                    : "rgba(255, 255, 255, 0.6)",
                width: index === currentIndex ? "16px" : "8px",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
