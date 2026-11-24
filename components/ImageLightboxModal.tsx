"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxModalProps {
  images: string[];
  initialIndex: number;
  roomName: string;
  onClose: () => void;
}

export default function ImageLightboxModal({
  images,
  initialIndex,
  roomName,
  onClose,
}: ImageLightboxModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose, goToNext, goToPrev]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors duration-200"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "var(--color-linen)",
        }}
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors duration-200 z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "var(--color-linen)",
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors duration-200 z-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "var(--color-linen)",
        }}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      <div
        className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
          <Image
            src={images[currentIndex]}
            alt={`${roomName} - Image ${currentIndex + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            className="transition-all duration-200 rounded-full"
            style={{
              width: index === currentIndex ? "32px" : "8px",
              height: "8px",
              backgroundColor:
                index === currentIndex
                  ? "var(--color-bronze)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-sm font-medium px-3 py-1.5 rounded-full"
        style={{
          backgroundColor: "rgba(48, 37, 30, 0.75)",
          color: "var(--color-linen)",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
