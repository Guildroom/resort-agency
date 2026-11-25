"use client";

import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6281125062345";
const EMAIL_ADDRESS = "intouch@lescapaderesort.com";

interface RoomBookingButtonsProps {
  roomName: string;
  occupancy: number;
  quantity: number;
}

export default function RoomBookingButtons({
  roomName,
  occupancy,
  quantity,
}: RoomBookingButtonsProps) {
  const roomLabel = quantity > 1 ? `${quantity} rooms` : "1 room";
  const message = `Hello L'escapade Resort, I would like to book the ${roomName} (up to ${occupancy} guests) for ${roomLabel}. Could you please confirm availability and share more details?`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  const emailHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `Booking inquiry – ${roomName}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300"
      >
        <MessageCircle size={18} />
        Book with WhatsApp
      </a>
      <a
        href={emailHref}
        className="btn-secondary inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 font-semibold transition-all duration-300"
      >
        <Mail size={18} />
        Book with Email
      </a>
    </div>
  );
}
