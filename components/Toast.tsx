"use client";

import { useEffect } from "react";
import { Check, ShoppingCart } from "lucide-react";

interface ToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

export default function Toast({ show, message, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-24 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg transition-all duration-300"
      style={{
        backgroundColor: "var(--color-forest-green)",
        color: "var(--color-surface)",
        animation: "slideInRight 0.3s ease-out",
      }}
    >
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
      >
        <Check size={16} />
      </div>
      <div className="flex items-center gap-2">
        <ShoppingCart size={16} />
        <span className="font-medium text-sm md:text-base">{message}</span>
      </div>
    </div>
  );
}
