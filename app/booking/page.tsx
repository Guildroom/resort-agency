"use client";

import {
  Calendar,
  Users,
  Bed,
  ArrowLeft,
  Ban,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { rooms, formatPrice, getAvailability, getRoomImages } from "@/lib/rooms";
import AddToCartButton from "@/components/AddToCartButton";
import Toast from "@/components/Toast";
import RoomCarousel from "@/components/RoomCarousel";
import CartSidebar from "@/components/CartSidebar";

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  function handleAdded(roomName: string) {
    setToastMessage(`${roomName} added to cart`);
  }

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
            <Calendar size={24} style={{ color: "var(--color-accent-gold)" }} />
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
            <Bed size={28} style={{ color: "var(--color-accent-gold)" }} />
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
                  className={`block w-full text-left rounded-lg border p-4 md:p-10 lg:p-12 transition-all duration-300 ${
                    soldOut ? "cursor-not-allowed" : "cursor-pointer hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                    opacity: soldOut ? 0.6 : 1,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
                    {/* Room Info */}
                    <div className="flex-1 min-w-0 flex flex-col md:flex-row items-start gap-4 md:gap-8">
                      <div className="flex-shrink-0 w-full md:w-40 h-48 md:h-40 lg:w-64 lg:h-64 rounded-lg overflow-hidden relative md:self-start -mx-4 md:mx-0">
                        <RoomCarousel
                          images={getRoomImages(room)}
                          roomName={room.name}
                          compact
                        />
                      </div>
                      <div className="min-w-0 w-full">
                        <p
                          className="font-semibold text-xl md:text-3xl lg:text-4xl mb-2 md:mb-3"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {room.name}
                        </p>
                        <p
                          className="text-sm md:text-lg leading-relaxed md:leading-loose mb-3 md:mb-4"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {room.description}
                        </p>
                        <p
                          className="flex items-center gap-2 text-sm md:text-base"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <Users size={16} className="md:hidden" style={{ color: "var(--color-accent-gold)" }} />
                          <Users size={18} className="hidden md:block" style={{ color: "var(--color-accent-gold)" }} />
                          Up to {room.occupancy} guests
                        </p>
                      </div>
                    </div>

                    {/* Price / Availability / Add to Cart */}
                    <div className="flex flex-col gap-4 w-full md:w-auto md:items-end">
                      <div className="text-left md:text-right">
                        <span
                          className="text-2xl md:text-4xl lg:text-5xl font-bold"
                          style={{ color: "var(--color-accent-gold)" }}
                        >
                          {formatPrice(room.price)}
                        </span>
                        <span
                          className="text-sm md:text-lg"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {" "}
                          / night
                        </span>
                      </div>

                      <div className="flex md:justify-end">
                        {soldOut ? (
                          <span
                            className="inline-flex items-center gap-2 text-sm md:text-base font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: "rgba(220, 38, 38, 0.1)",
                              color: "#DC2626",
                            }}
                          >
                            <Ban size={16} className="md:hidden" />
                            <Ban size={18} className="hidden md:block" />
                            Sold out
                          </span>
                        ) : lowStock ? (
                          <span
                            className="inline-flex items-center text-sm md:text-base font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: "rgba(217, 119, 6, 0.12)",
                              color: "#B45309",
                            }}
                          >
                            Only {available} left!
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center text-sm md:text-base font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: "rgba(77, 93, 74, 0.12)",
                              color: "var(--color-forest-green)",
                            }}
                          >
                            {available} rooms available
                          </span>
                        )}
                      </div>

                      <div
                        className="w-full md:w-auto"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onKeyDown={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        {!soldOut && (
                          <AddToCartButton
                            roomId={room.id}
                            onAdd={(roomId, qty) => {
                              const room = rooms.find((r) => r.id === roomId);
                              if (room) {
                                handleAdded(
                                  qty > 1
                                    ? `${qty} × ${room.name} added to cart`
                                    : `${room.name} added to cart`
                                );
                              }
                            }}
                          />
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
            className="btn-secondary w-full md:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <Headphones size={20} />
            Contact Our Personnel
          </a>
        </div>
      </div>

      <CartSidebar />
      {toastMessage && (
        <Toast show={!!toastMessage} message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </main>
  );
}
