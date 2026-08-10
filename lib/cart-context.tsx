"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { getRoomById } from "@/lib/rooms";

export interface CartItem {
  roomId: string;
  quantity: number;
}

interface CartContextValue {
  cart: CartItem[];
  addToCart: (roomId: string, quantity: number) => void;
  updateQuantity: (roomId: string, quantity: number) => void;
  removeFromCart: (roomId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

const STORAGE_KEY = "lanscade-cart-v1";
const emptyCart: CartItem[] = [];

let currentCart: CartItem[] = [];
let initialized = false;
const listeners = new Set<() => void>();

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        item &&
        typeof item === "object" &&
        typeof item.roomId === "string" &&
        typeof item.quantity === "number" &&
        item.quantity > 0 &&
        Boolean(getRoomById(item.roomId))
    );
  } catch {
    return [];
  }
}

function writeStorage(cart: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // ignore quota/permission errors
  }
}

function getSnapshot(): CartItem[] {
  return currentCart;
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      currentCart = readStorage();
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", onStorage);
  };
}

function updateCart(updater: (prev: CartItem[]) => CartItem[]) {
  currentCart = updater(currentCart);
  writeStorage(currentCart);
  listeners.forEach((l) => l());
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(subscribe, getSnapshot, () => emptyCart);

  useEffect(() => {
    if (!initialized && typeof window !== "undefined") {
      initialized = true;
      currentCart = readStorage();
      listeners.forEach((l) => l());
    }
  }, []);

  const addToCart = useCallback((roomId: string, quantity: number) => {
    if (quantity <= 0) return;
    updateCart((prev) => {
      const existing = prev.find((item) => item.roomId === roomId);
      if (existing) {
        return prev.map((item) =>
          item.roomId === roomId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { roomId, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((roomId: string, quantity: number) => {
    updateCart((prev) => {
      if (quantity <= 0) {
        return prev.filter((item) => item.roomId !== roomId);
      }
      return prev.map((item) =>
        item.roomId === roomId ? { ...item, quantity } : item
      );
    });
  }, []);

  const removeFromCart = useCallback((roomId: string) => {
    updateCart((prev) => prev.filter((item) => item.roomId !== roomId));
  }, []);

  const clearCart = useCallback(() => {
    updateCart(() => []);
  }, []);

  const getCartTotal = useCallback(() => {
    return currentCart.reduce((sum, item) => {
      const room = getRoomById(item.roomId);
      return room ? sum + room.price * item.quantity : sum;
    }, 0);
  }, []);

  const getCartCount = useCallback(() => {
    return currentCart.reduce((sum, item) => sum + item.quantity, 0);
  }, []);

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      addToCart,
      updateQuantity,
      removeFromCart,
      clearCart,
      getCartTotal,
      getCartCount,
    }),
    [cart, addToCart, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartCount]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

export function serializeCart(cart: CartItem[]): string {
  return cart.map((item) => `${item.roomId}:${item.quantity}`).join(",");
}

export function deserializeCart(serialized: string): CartItem[] {
  if (!serialized) return [];
  return serialized
    .split(",")
    .map((pair) => {
      const [roomId, qty] = pair.split(":");
      const quantity = Number(qty);
      if (!roomId || !Number.isFinite(quantity) || quantity <= 0) return null;
      return { roomId, quantity };
    })
    .filter((item): item is CartItem => item !== null)
    .filter((item) => Boolean(getRoomById(item.roomId)));
}
