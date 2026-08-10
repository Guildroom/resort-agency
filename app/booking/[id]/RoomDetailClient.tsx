"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Bed } from "lucide-react";
import { getRoomById, getRoomImages, formatPrice } from "@/lib/rooms";
import CartSidebar from "@/components/CartSidebar";
import AddToCartButton from "@/components/AddToCartButton";

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
            className="text-base md:text-lg mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {room.description}
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

        {images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden"
                style={{ backgroundColor: "var(--color-border)" }}
              >
                <Image
                  src={src}
                  alt={`${room.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

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
