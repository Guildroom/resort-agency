"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Users,
  MessageSquare,
  ShoppingCart,
  Check,
} from "lucide-react";
import { useCart, serializeCart } from "@/lib/cart-context";
import { getRoomById, formatPrice } from "@/lib/rooms";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, clearCart, getCartTotal } = useCart();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [specialRequests, setSpecialRequests] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const minCheckOut = checkIn
    ? new Date(new Date(checkIn).getTime() + 86400000).toISOString().split("T")[0]
    : "";

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    return Math.max(0, Math.round(diff / 86400000));
  }, [checkIn, checkOut]);

  const subtotalPerNight = getCartTotal();
  const total = subtotalPerNight * (nights || 1);

  const isValid =
    cart.length > 0 &&
    checkIn &&
    checkOut &&
    fullName.trim() &&
    email.trim() &&
    adults >= 1;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValid || submitting) return;
    setSubmitting(true);

    const bookingId = `BOOK-${Date.now().toString(36).toUpperCase()}`;
    const params = new URLSearchParams({
      cart: serializeCart(cart),
      checkIn,
      checkOut,
      fullName,
      email,
      phone,
      adults: String(adults),
      children: String(children),
      specialRequests,
      total: String(total),
      nights: String(nights),
    });

    clearCart();
    router.push(`/booking/details/${bookingId}?${params.toString()}`);
  }

  if (cart.length === 0) {
    return (
      <main
        className="relative w-full min-h-screen py-12 md:py-20 px-6 md:px-12"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 mb-8 text-sm transition-colors duration-200"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <ArrowLeft size={16} />
            Back to Rooms
          </Link>

          <div
            className="p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <ShoppingCart
              size={48}
              className="mx-auto mb-4"
              style={{ color: "var(--color-text-secondary)" }}
            />
            <h1
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "var(--color-primary)" }}
            >
              Your cart is empty
            </h1>
            <p
              className="text-base mb-6"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Add some rooms to your cart to proceed with booking.
            </p>
            <Link
              href="/booking"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Browse Rooms
            </Link>
          </div>
        </div>
      </main>
    );
  }

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

        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Complete Your Booking
          </h1>
          <p
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Review your selection and enter your details
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Cart Summary */}
          <div
            className="p-6 md:p-8 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart size={24} style={{ color: "var(--color-accent-gold)" }} />
              <h3
                className="text-lg md:text-xl font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Your Rooms
              </h3>
            </div>
            <div className="space-y-3">
              {cart.map((item) => {
                const room = getRoomById(item.roomId);
                if (!room) return null;
                const lineTotal = room.price * item.quantity;
                return (
                  <div
                    key={item.roomId}
                    className="flex items-center justify-between p-4 rounded-lg"
                    style={{ backgroundColor: "var(--color-background)" }}
                  >
                    <div>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {room.name}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {formatPrice(room.price)} × {item.quantity} {item.quantity === 1 ? "room" : "rooms"}
                      </p>
                    </div>
                    <span
                      className="font-bold"
                      style={{ color: "var(--color-accent-gold)" }}
                    >
                      {formatPrice(lineTotal)}
                    </span>
                  </div>
                );
              })}
              <div
                className="flex items-center justify-between pt-3 border-t text-base md:text-lg"
                style={{ borderColor: "var(--color-border)" }}
              >
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Subtotal per night
                </span>
                <span
                  className="font-bold text-xl"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  {formatPrice(subtotalPerNight)}
                </span>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div
            className="p-6 md:p-8 rounded-lg border"
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
                  required
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
                  style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
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
                  required
                  min={minCheckOut || today}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  disabled={!checkIn}
                  className="w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 disabled:opacity-50"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
                />
              </div>
            </div>
            {checkIn && checkOut && (
              <p
                className="mt-3 text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {nights} {nights === 1 ? "night" : "nights"}
              </p>
            )}
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
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded border"
                  style={{ borderColor: "var(--color-border)" }}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Guests */}
          <div
            className="p-6 md:p-8 rounded-lg border"
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
                  required
                  min={1}
                  value={adults}
                  onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded border"
                  style={{ borderColor: "var(--color-border)" }}
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
                  min={0}
                  value={children}
                  onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))}
                  className="w-full px-4 py-3 rounded border"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div
            className="p-6 md:p-8 rounded-lg border"
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
            <textarea
              rows={4}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="w-full px-4 py-3 rounded border resize-none"
              style={{ borderColor: "var(--color-border)" }}
              placeholder="Any special requests or requirements?"
            />
          </div>

          {/* Total & Submit */}
          <div
            className="p-6 md:p-8 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <p
                  className="text-sm mb-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {nights > 0
                    ? `${nights} ${nights === 1 ? "night" : "nights"} × ${formatPrice(subtotalPerNight)}`
                    : "Select dates to see total"}
                </p>
                <span
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "var(--color-accent-gold)" }}
                >
                  {formatPrice(total)}
                </span>
              </div>
            </div>
            <button
              type="submit"
              disabled={!isValid || submitting}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 px-12 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Check size={20} />
              {submitting ? "Processing..." : "Complete Booking"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
