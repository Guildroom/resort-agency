"use client";

import { ShoppingCart, Plus, Minus, Check } from "lucide-react";
import { useCart } from "@/lib/cart-context";

interface AddToCartButtonProps {
  roomId: string;
  initialQuantity?: number;
  compact?: boolean;
  onAdd?: (roomId: string, quantity: number) => void;
}

export default function AddToCartButton({
  roomId,
  initialQuantity = 1,
  compact = false,
}: AddToCartButtonProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  const item = cart.find((i) => i.roomId === roomId);
  const quantity = item?.quantity ?? 0;

  function handleAdd() {
    addToCart(roomId, initialQuantity);
  }

  function handleIncrement() {
    updateQuantity(roomId, quantity + 1);
  }

  function handleDecrement() {
    if (quantity <= 1) {
      updateQuantity(roomId, 0);
    } else {
      updateQuantity(roomId, quantity - 1);
    }
  }

  if (quantity === 0) {
    return (
      <button
        type="button"
        onClick={handleAdd}
        className={`btn-primary inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] ${
          compact
            ? "w-full md:w-auto px-4 py-2 text-sm"
            : "w-full px-6 py-3 text-base"
        }`}
      >
        <ShoppingCart size={compact ? 16 : 18} />
        Add to Cart
      </button>
    );
  }

  return (
    <div
      className={`w-full flex justify-center inline-flex items-center rounded-lg border overflow-hidden transition-all duration-300 ${
        compact ? "h-9" : "h-12"
      }`}
      style={{
        borderColor: "var(--color-accent-gold)",
        backgroundColor: "var(--color-accent-gold)",
      }}
    >
      <button
        type="button"
        onClick={handleDecrement}
        aria-label="Decrease quantity"
        className={`flex items-center justify-center hover:bg-black/10 transition-colors ${
          compact ? "w-9 h-9" : "w-12 h-12"
        }`}
        style={{ color: "var(--color-surface)" }}
      >
        <Minus size={compact ? 14 : 18} />
      </button>
      <div
        className={`flex items-center justify-center font-semibold min-w-0 px-2 ${
          compact ? "text-sm" : "text-base"
        }`}
        style={{ color: "var(--color-surface)" }}
      >
        <span className="flex items-center gap-1">
          <Check size={compact ? 12 : 14} />
          {quantity}
        </span>
      </div>
      <button
        type="button"
        onClick={handleIncrement}
        aria-label="Increase quantity"
        className={`flex items-center justify-center hover:bg-black/10 transition-colors ${
          compact ? "w-9 h-9" : "w-12 h-12"
        }`}
        style={{ color: "var(--color-surface)" }}
      >
        <Plus size={compact ? 14 : 18} />
      </button>
    </div>
  );
}
