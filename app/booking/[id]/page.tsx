import { notFound } from "next/navigation";
import { rooms } from "@/lib/rooms";
import RoomDetailClient from "./RoomDetailClient";

export async function generateStaticParams() {
  return rooms.map((room) => ({
    id: room.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BookingDetailPage({ params }: PageProps) {
  const { id } = await params;

  if (!rooms.some((room) => room.id === id)) {
    return notFound();
  }

  return <RoomDetailClient roomId={id} />;
}
