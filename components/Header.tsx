"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const rooms = [
  { id: "1", name: "Villa", price: 250 },
  { id: "2", name: "Bungalow", price: 380 },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingDropdownOpen, setBookingDropdownOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b opacity-90"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >
      <nav className="mx-auto px-2 md:px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1
              className="text-2xl md:text-3xl font-bold tracking-wide"
              style={{ color: "var(--color-accent-gold)" }}
            >
              Lanscade
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setBookingDropdownOpen(true)}
              onMouseLeave={() => setBookingDropdownOpen(false)}
            >
              <Link
                href="/booking"
                className="flex items-center gap-1 text-base font-medium transition-colors duration-300"
                style={{ color: "var(--color-primary)" }}
              >
                Booking
                <ChevronDown size={16} />
              </Link>

              {bookingDropdownOpen && (
                <div
                  className="absolute top-full right-0 pt-2 w-64"
                >
                  <div
                    className="rounded-lg border shadow-lg overflow-hidden"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      borderColor: "var(--color-border)",
                    }}
                  >
                    {rooms.map((room) => (
                      <Link
                        key={room.id}
                        href={`/booking/${room.id}`}
                        className="block px-4 py-3 border-b last:border-b-0 transition-colors duration-200"
                        style={{
                          borderColor: "var(--color-border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "var(--color-light-beige)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <div className="flex justify-between items-center">
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--color-primary)" }}
                          >
                            {room.name}
                          </span>
                          <span
                            className="text-xs font-semibold"
                            style={{ color: "var(--color-accent-gold)" }}
                          >
                            ${room.price}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={scrollToFooter}
              className="text-base font-medium transition-colors duration-300"
              style={{ color: "var(--color-primary)" }}
            >
              About Us
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} style={{ color: "var(--color-primary)" }} />
            ) : (
              <Menu size={24} style={{ color: "var(--color-primary)" }} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 pt-4 border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between w-full">
                  <Link
                    href="/booking"
                    className="flex items-center text-base font-medium py-2"
                    style={{ color: "var(--color-primary)" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Booking
                  </Link>
                  <button
                    onClick={() => setBookingDropdownOpen(!bookingDropdownOpen)}
                    aria-label="Toggle booking rooms"
                    className="p-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        bookingDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {bookingDropdownOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {rooms.map((room) => (
                      <Link
                        key={room.id}
                        href={`/booking/${room.id}`}
                        className="flex justify-between items-center py-2 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{room.name}</span>
                        <span
                          className="font-semibold"
                          style={{ color: "var(--color-accent-gold)" }}
                        >
                          ${room.price}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={scrollToFooter}
                className="text-base font-medium py-2 text-left"
                style={{ color: "var(--color-primary)" }}
              >
                About Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
