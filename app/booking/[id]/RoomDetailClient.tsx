"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users, Bed } from "lucide-react";
import { getRoomById, getRoomImages, formatPrice } from "@/lib/rooms";
import CartSidebar from "@/components/CartSidebar";
import AddToCartButton from "@/components/AddToCartButton";
import ImageGalleryGrid from "@/components/ImageGalleryGrid";

interface RoomDetailClientProps {
  roomId: string;
}

export default function RoomDetailClient({ roomId }: RoomDetailClientProps) {
  const room = getRoomById(roomId);
  const [quantity, setQuantity] = useState(1);

  if (!room) {
    return notFound();
  }

  const images = getRoomImages(room);

  return (
    <main
      className="relative w-full min-h-screen py-12 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-5xl mx-auto">
        <Link
          href="/booking"
          className="inline-flex items-center gap-2 mb-8 text-sm transition-colors duration-200"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Rooms
        </Link>

        <div className="mb-8">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            {room.name}
          </h1>
          <p
            className="text-xl md:text-2xl italic mb-6"
            style={{ color: "var(--color-accent-gold)" }}
          >
            {room.content.tagline}
          </p>
          <p
            className="text-base md:text-lg mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {room.content.summary}
          </p>

          <div className="flex items-center gap-6 text-sm md:text-base">
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Users size={18} style={{ color: "var(--color-accent-gold)" }} />
              Up to {room.occupancy} guests
            </div>
            <div
              className="flex items-center gap-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <Bed size={18} style={{ color: "var(--color-accent-gold)" }} />
              {room.total} rooms available
            </div>
          </div>
        </div>

        <ImageGalleryGrid images={images} roomName={room.name} />

        <div
          className="mb-8 p-6 md:p-8 rounded-lg border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            About This {room.name}
          </h2>
          {room.content.mainDescription.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed mb-4 last:mb-0"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div
          className="mb-8 p-6 md:p-8 rounded-lg border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            The Space & Experience
          </h2>
          <div className="space-y-4">
            {room.content.spaces.map((space, i) => (
              <div key={i}>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  {space.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {space.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mb-8 p-6 md:p-8 rounded-lg border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            Features & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {room.content.features.map((feature, i) => (
              <div key={i} className="flex gap-3">
                <span
                  className="font-semibold shrink-0"
                  style={{ color: "var(--color-primary)" }}
                >
                  {feature.label}:
                </span>
                <span style={{ color: "var(--color-text-secondary)" }}>
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mb-8 p-6 md:p-8 rounded-lg border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p
                className="text-sm md:text-base mb-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Starting from
              </p>
              <span
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "var(--color-accent-gold)" }}
              >
                {formatPrice(room.price)}
              </span>
              <span
                className="text-base md:text-lg ml-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                / night
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Quantity
                </label>
                <input
                  type="number"
                  min={1}
                  max={room.total}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(room.total, Number(e.target.value))))}
                  className="w-full sm:w-20 px-4 py-3 rounded border text-center font-semibold"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-primary)",
                  }}
                />
              </div>

              <AddToCartButton roomId={room.id} initialQuantity={quantity} />
            </div>
          </div>
        </div>
      </div>

      <CartSidebar />
    </main>
  );
}
