import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { deserializeCart } from "@/lib/cart-context";
import { getRoomById, formatPrice } from "@/lib/rooms";
import PrintReceiptButton from "@/components/PrintReceiptButton";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BookingConfirmationPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const query = await searchParams;

  if (!id.startsWith("BOOK-")) {
    return notFound();
  }

  const cartSerialized = query.cart as string;
  const checkIn = query.checkIn as string;
  const checkOut = query.checkOut as string;
  const fullName = query.fullName as string;
  const email = query.email as string;
  const phone = query.phone as string;
  const adults = query.adults as string;
  const children = query.children as string;
  const specialRequests = query.specialRequests as string;
  const total = query.total as string;
  const nights = query.nights as string;

  if (!cartSerialized || !checkIn || !checkOut || !fullName || !email || !total || !nights) {
    return notFound();
  }

  const cart = deserializeCart(cartSerialized);

  if (cart.length === 0) {
    return notFound();
  }

  return (
    <main
      className="relative w-full min-h-screen py-12 md:py-20 px-6 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-sm transition-colors duration-200"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div
          className="p-8 md:p-12 rounded-lg border text-center"
          style={{
            backgroundColor: "var(--color-surface)",
            borderColor: "var(--color-border)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: "rgba(77, 93, 74, 0.15)" }}
          >
            <CheckCircle2 size={32} style={{ color: "var(--color-forest-green)" }} />
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            Booking Confirmed!
          </h1>

          <p
            className="text-lg mb-8"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Your reservation has been successfully confirmed.
          </p>

          <div
            className="text-left space-y-4 mb-8 p-6 rounded-lg"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="flex justify-between">
              <span style={{ color: "var(--color-text-secondary)" }}>Booking ID</span>
              <span
                className="font-mono font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                {id}
              </span>
            </div>

            <div
              className="pt-3 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span
                className="block mb-3 font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                Rooms Booked
              </span>
              <div className="space-y-2">
                {cart.map((item) => {
                  const room = getRoomById(item.roomId);
                  if (!room) return null;
                  return (
                    <div key={item.roomId} className="flex justify-between text-sm">
                      <span style={{ color: "var(--color-text-secondary)" }}>
                        {room.name} × {item.quantity}
                      </span>
                      <span style={{ color: "var(--color-primary)" }}>
                        {formatPrice(room.price * item.quantity)} / night
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="pt-3 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>Guest Name</span>
                <span
                  className="font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {fullName}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <span style={{ color: "var(--color-text-secondary)" }}>Email</span>
              <span style={{ color: "var(--color-primary)" }}>{email}</span>
            </div>

            {phone && (
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>Phone</span>
                <span style={{ color: "var(--color-primary)" }}>{phone}</span>
              </div>
            )}

            <div
              className="pt-3 border-t"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex justify-between">
                <span style={{ color: "var(--color-text-secondary)" }}>Check-in</span>
                <span style={{ color: "var(--color-primary)" }}>
                  {new Date(checkIn).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <span style={{ color: "var(--color-text-secondary)" }}>Check-out</span>
              <span style={{ color: "var(--color-primary)" }}>
                {new Date(checkOut).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{ color: "var(--color-text-secondary)" }}>Duration</span>
              <span style={{ color: "var(--color-primary)" }}>
                {nights} {Number(nights) === 1 ? "night" : "nights"}
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{ color: "var(--color-text-secondary)" }}>Guests</span>
              <span style={{ color: "var(--color-primary)" }}>
                {adults} {Number(adults) === 1 ? "adult" : "adults"}
                {children && Number(children) > 0
                  ? `, ${children} ${Number(children) === 1 ? "child" : "children"}`
                  : ""}
              </span>
            </div>

            {specialRequests && (
              <div className="pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
                <span
                  className="block mb-2 font-semibold"
                  style={{ color: "var(--color-primary)" }}
                >
                  Special Requests
                </span>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {specialRequests}
                </p>
              </div>
            )}

            <div
              className="flex justify-between pt-4 border-t text-lg"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="font-semibold" style={{ color: "var(--color-primary)" }}>
                Total Amount
              </span>
              <span
                className="font-bold text-xl"
                style={{ color: "var(--color-accent-gold)" }}
              >
                {formatPrice(Number(total))}
              </span>
            </div>
          </div>

          <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
            A confirmation email has been sent to <strong>{email}</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Return to Home
            </Link>
            <PrintReceiptButton />
          </div>
        </div>
      </div>
    </main>
  );
}
