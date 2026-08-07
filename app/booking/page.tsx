"use client";

import {
  Calendar,
  User,
  Users,
  Bed,
  MessageSquare,
  ArrowLeft,
  Check,
  CheckCircle2,
  Ban,
  Headphones,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

interface Room {
  id: string;
  name: string;
  price: number;
  total: number;
  occupancy: number;
  description: string;
}

const rooms: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe Room",
    price: 250,
    total: 8,
    occupancy: 2,
    description: "Comfortable room with a king bed, mountain views, and modern amenities.",
  },
  {
    id: "garden",
    name: "Garden Suite",
    price: 380,
    total: 5,
    occupancy: 2,
    description: "Spacious suite opening onto our lush private garden with a seating area.",
  },
  {
    id: "family",
    name: "Family Suite",
    price: 450,
    total: 5,
    occupancy: 4,
    description: "Two connected bedrooms with plenty of space for the whole family.",
  },
  {
    id: "premium",
    name: "Premium Suite",
    price: 520,
    total: 4,
    occupancy: 3,
    description: "Elevated floor suite with a private balcony and panoramic nature views.",
  },
  {
    id: "lakeside",
    name: "Lakeside Villa",
    price: 780,
    total: 3,
    occupancy: 4,
    description: "Standalone villa with direct lake access and an outdoor lounge deck.",
  },
  {
    id: "presidential",
    name: "Presidential Villa",
    price: 950,
    total: 2,
    occupancy: 4,
    description: "Our finest residence with a private infinity pool and dedicated butler.",
  },
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getAvailability(room: Room, checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return room.total;
  const seed = hashString(`${room.id}|${checkIn}|${checkOut}`);
  const booked = seed % (room.total + 1);
  return room.total - booked;
}

function formatPrice(price: number): string {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export default function BookingPage() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState<string>("");

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
            <Bed size={24} style={{ color: "var(--color-accent-gold)" }} />
            <h3
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Select a Room
            </h3>
          </div>
          <p
            className="text-sm mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {checkIn && checkOut
              ? "Availability updated for your selected dates."
              : "Select your dates above to see live availability."}
          </p>

          <div className="space-y-4">
            {rooms.map((room) => {
              const available = availability[room.id];
              const soldOut = available === 0;
              const lowStock = available > 0 && available <= 2;
              const selected = selectedRoomId === room.id;

              return (
                <button
                  key={room.id}
                  type="button"
                  onClick={() => !soldOut && setSelectedRoomId(room.id)}
                  disabled={soldOut}
                  className={`w-full text-left rounded-lg border p-4 md:p-6 transition-all duration-300 ${
                    soldOut ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: selected
                      ? "var(--color-accent-gold)"
                      : "var(--color-border)",
                    boxShadow: selected
                      ? "0 4px 12px rgba(200, 169, 126, 0.25)"
                      : "none",
                    opacity: soldOut ? 0.6 : 1,
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    {/* Room Info */}
                    <div className="flex-1 min-w-0 flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: "rgba(200, 169, 126, 0.15)" }}
                      >
                        <Bed
                          size={20}
                          className="md:hidden"
                          style={{ color: "var(--color-accent-gold)" }}
                        />
                        <Bed
                          size={24}
                          className="hidden md:block"
                          style={{ color: "var(--color-accent-gold)" }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="font-semibold text-base md:text-lg"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {room.name}
                        </p>
                        <p
                          className="text-xs md:text-sm leading-snug md:leading-relaxed mb-2"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {room.description}
                        </p>
                        <p
                          className="flex items-center gap-1.5 text-xs md:text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          <Users size={14} style={{ color: "var(--color-accent-gold)" }} />
                          Up to {room.occupancy} guests
                        </p>
                      </div>
                    </div>

                    {/* Price / Availability / Select */}
                    <div className="flex flex-col gap-3 w-full md:w-auto md:items-end">
                      <div className="text-left md:text-right">
                        <span
                          className="text-lg md:text-2xl font-bold"
                          style={{ color: "var(--color-accent-gold)" }}
                        >
                          {formatPrice(room.price)}
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {" "}
                          / night
                        </span>
                      </div>

                      <div className="flex md:justify-end">
                        {soldOut ? (
                          <span
                            className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(220, 38, 38, 0.1)",
                              color: "#DC2626",
                            }}
                          >
                            <Ban size={14} />
                            Sold out
                          </span>
                        ) : lowStock ? (
                          <span
                            className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(217, 119, 6, 0.12)",
                              color: "#B45309",
                            }}
                          >
                            Only {available} left!
                          </span>
                        ) : (
                          <span
                            className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full"
                            style={{
                              backgroundColor: "rgba(77, 93, 74, 0.12)",
                              color: "var(--color-forest-green)",
                            }}
                          >
                            {available} rooms available
                          </span>
                        )}
                      </div>

                      <span
                        className="w-full md:w-auto inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-4 py-2.5 md:py-2 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: selected
                            ? "var(--color-accent-gold)"
                            : "transparent",
                          color: selected ? "var(--color-surface)" : "var(--color-primary)",
                          border: `1.5px solid ${
                            selected
                              ? "var(--color-accent-gold)"
                              : "var(--color-border)"
                          }`,
                        }}
                      >
                        {selected ? (
                          <>
                            <CheckCircle2 size={16} />
                            Selected
                          </>
                        ) : (
                          <>
                            <Check size={16} />
                            Select
                          </>
                        )}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Guest Details */}
        <div
          className="p-6 md:p-8 rounded-lg border"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <User size={24} style={{ color: "var(--color-accent-gold)" }} />
            <h3
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Guest Information
            </h3>
          </div>
          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded border"
                style={{ borderColor: "var(--color-border)" }}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded border"
                style={{ borderColor: "var(--color-border)" }}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded border"
                style={{ borderColor: "var(--color-border)" }}
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Number of Guests */}
        <div
          className="p-6 md:p-8 rounded-lg border mt-8"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Users size={24} style={{ color: "var(--color-accent-gold)" }} />
            <h3
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Number of Guests
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Adults
              </label>
              <input
                type="number"
                min="1"
                className="w-full px-4 py-3 rounded border"
                style={{ borderColor: "var(--color-border)" }}
                placeholder="Number of adults"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Children
              </label>
              <input
                type="number"
                min="0"
                className="w-full px-4 py-3 rounded border"
                style={{ borderColor: "var(--color-border)" }}
                placeholder="Number of children"
              />
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div
          className="p-6 md:p-8 rounded-lg border mt-8"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare size={24} style={{ color: "var(--color-accent-gold)" }} />
            <h3
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Special Requests
            </h3>
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Additional Information
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 rounded border resize-none"
              style={{ borderColor: "var(--color-border)" }}
              placeholder="Any special requests or requirements?"
            />
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              className="btn-primary w-full md:w-auto px-12 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
            >
              Complete Booking
            </button>
            <a
              href="mailto:reservations@lanscade.com"
              className="btn-secondary w-full md:w-auto inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <Headphones size={20} />
              Contact Our Personnel
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
