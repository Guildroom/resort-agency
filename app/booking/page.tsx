"use client";

import {
  Calendar,
  Users,
  Bed,
  ArrowLeft,
  ArrowRight,
  Ban,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { rooms, formatPrice, getAvailability, getRoomImages } from "@/lib/rooms";
import RoomCarousel from "@/components/RoomCarousel";
import CartSidebar from "@/components/CartSidebar";

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const availability = useMemo(() => {
    return rooms.reduce<Record<string, number>>((acc, room) => {
      acc[room.id] = getAvailability(room, checkIn, checkOut);
      return acc;
    }, {});
  }, [checkIn, checkOut]);

  const minCheckOut = checkIn
    ? new Date(new Date(checkIn).getTime() + 86400000).toISOString().split("T")[0]
    : "";

  return (
    <main
      className="relative w-full min-h-screen py-12 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-sm transition-colors duration-200"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Book Your Stay
          </h1>
          <p
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Choose your dates and select the perfect room for your escape
          </p>
        </div>

        {/* Date Selection */}
        <div
          className="p-6 md:p-8 rounded-lg border mb-8"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Calendar size={24} style={{ color: "var(--color-walnut)" }} />
            <h3
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Select Dates
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Check-in Date
              </label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (
                    checkOut &&
                    e.target.value &&
                    new Date(e.target.value) >= new Date(checkOut)
                  ) {
                    setCheckOut("");
                  }
                }}
                className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Check-out Date
              </label>
              <input
                type="date"
                min={minCheckOut || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                disabled={!checkIn}
                className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 disabled:opacity-50"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-primary)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Room List */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Bed size={28} style={{ color: "var(--color-walnut)" }} />
            <h3
              className="text-xl md:text-2xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Select a Room
            </h3>
          </div>
          <p
            className="text-base mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {checkIn && checkOut
              ? "Availability updated for your selected dates."
              : "Select your dates above to see live availability."}
          </p>

          <div className="space-y-6 md:space-y-8">
            {rooms.map((room) => {
              const available = availability[room.id];
              const soldOut = available === 0;
              const lowStock = available > 0 && available <= 2;

              return (
                <Link
                  key={room.id}
                  href={soldOut ? "#" : `/booking/${room.id}`}
                  aria-disabled={soldOut}
                  onClick={(e) => {
                    if (soldOut) e.preventDefault();
                  }}
                  className={`block w-full text-left rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
                    soldOut ? "cursor-not-allowed opacity-60" : "cursor-pointer"
                  }`}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Left side: Image Carousel */}
                    <div className="relative w-full md:w-72 lg:w-96 h-64 md:h-auto shrink-0 overflow-hidden">
                      {/* Availability Badge Overlay */}
                      <div className="absolute top-4 left-4 z-10">
                        {soldOut ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                            style={{ backgroundColor: "rgba(140, 45, 38, 0.95)", color: "var(--color-linen)" }}
                          >
                            <Ban size={14} />
                            Sold out
                          </span>
                        ) : lowStock ? (
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                            style={{ backgroundColor: "var(--color-bronze)", color: "var(--color-espresso)" }}
                          >
                            Only {available} left!
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md"
                            style={{ backgroundColor: "var(--color-forest)", color: "var(--color-linen)" }}
                          >
                            {available} available
                          </span>
                        )}
                      </div>
                      <RoomCarousel
                        images={getRoomImages(room)}
                        roomName={room.name}
                        compact
                      />
                    </div>

                    {/* Right side: Room Info & Actions */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3" style={{ color: "var(--color-primary)" }}>
                          {room.name}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
                          {room.content.summary}
                        </p>
                        <div className="flex items-center gap-2 text-sm md:text-base" style={{ color: "var(--color-text-secondary)" }}>
                          <Users size={18} style={{ color: "var(--color-walnut)" }} />
                          <span>Up to {room.occupancy} guests</span>
                        </div>
                      </div>

                      {/* Bottom Row: Price & Read More */}
                      <div 
                        className="mt-6 pt-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <div>
                          <span className="text-xl md:text-2xl lg:text-3xl font-bold" style={{ color: "var(--color-espresso)" }}>
                            {formatPrice(room.price)}
                          </span>
                          <span className="text-xs md:text-sm ml-1" style={{ color: "var(--color-text-secondary)" }}>
                            / night
                          </span>
                        </div>
                        {!soldOut && (
                          <span className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300">
                            Read more
                            <ArrowRight size={18} />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contact Button */}
        <div className="pt-8">
          <a
            href="mailto:reservations@lanscade.com"
            className="btn-secondary w-full md:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
          >
            <Headphones size={20} />
            Contact Our Personnel
          </a>
        </div>
      </div>

      <CartSidebar />
    </main>
  );
}
