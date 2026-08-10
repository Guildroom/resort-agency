"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { ShoppingCart, Plus, Minus, Trash2, X, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getRoomById, formatPrice } from "@/lib/rooms";

const subscribe = () => () => {};

export default function CartSidebar() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount,
  } = useCart();
  const [open, setOpen] = useState(false);
  
  const isClient = useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );

  if (!isClient || cart.length === 0) {
    return null;
  }

  const total = getCartTotal();
  const count = getCartCount();

  return (
    <>
      {/* Floating toggle button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105"
        style={{
          backgroundColor: "var(--color-accent-gold)",
          color: "var(--color-surface)",
        }}
      >
        <ShoppingCart size={22} />
        <span
          className="absolute -top-1 -right-1 min-w-5 h-5 px-1.5 rounded-full text-xs font-bold flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-forest-green)",
            color: "var(--color-surface)",
          }}
        >
          {count}
        </span>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(28, 27, 26, 0.5)" }}
      />

      {/* Sidebar / Drawer */}
      <aside
        className={`fixed z-50 bg-white shadow-xl transition-transform duration-300 flex flex-col
          top-0 right-0 h-full w-full sm:w-96 md:w-[28rem]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        style={{
          backgroundColor: "var(--color-surface)",
          borderLeft: "1px solid var(--color-border)",
        }}
        aria-hidden={!open}
      >
        <header
          className="flex items-center justify-between p-4 md:p-6 border-b"
          style={{ borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center gap-3">
            <ShoppingCart size={22} style={{ color: "var(--color-accent-gold)" }} />
            <h2
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--color-primary)" }}
            >
              Your Cart
            </h2>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "rgba(200, 169, 126, 0.15)",
                color: "var(--color-accent-gold)",
              }}
            >
              {count} {count === 1 ? "item" : "items"}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            className="p-1.5 rounded-md hover:bg-black/5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
          {cart.map((item) => {
            const room = getRoomById(item.roomId);
            if (!room) return null;
            const lineTotal = room.price * item.quantity;
            return (
              <div
                key={item.roomId}
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="min-w-0">
                    <p
                      className="font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {room.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {formatPrice(room.price)} / night
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.roomId)}
                    aria-label={`Remove ${room.name}`}
                    className="p-1 rounded-md hover:bg-black/5"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div
                    className="inline-flex items-center rounded-md border"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.roomId, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      className="w-8 h-8 flex items-center justify-center hover:bg-black/5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      className="w-8 text-center text-sm font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.roomId, item.quantity + 1)}
                      aria-label="Increase quantity"
                      className="w-8 h-8 flex items-center justify-center hover:bg-black/5"
                      style={{ color: "var(--color-primary)" }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span
                    className="font-bold"
                    style={{ color: "var(--color-accent-gold)" }}
                  >
                    {formatPrice(lineTotal)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <footer
          className="p-4 md:p-6 border-t space-y-4"
          style={{
            borderColor: "var(--color-border)",
            backgroundColor: "var(--color-background)",
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-sm"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Subtotal per night
            </span>
            <span
              className="text-xl font-bold"
              style={{ color: "var(--color-accent-gold)" }}
            >
              {formatPrice(total)}
            </span>
          </div>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Final total will be calculated based on your stay duration.
          </p>
          <Link
            href="/booking/details"
            onClick={() => setOpen(false)}
            className="btn-primary w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Proceed to Checkout
            <ArrowRight size={18} />
          </Link>
        </footer>
      </aside>
    </>
  );
}
