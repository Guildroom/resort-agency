"use client";

import { Printer } from "lucide-react";

export default function PrintReceiptButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
    >
      <Printer size={18} />
      Print Receipt
    </button>
  );
}
