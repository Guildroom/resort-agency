export interface Room {
  id: string;
  name: string;
  price: number;
  total: number;
  occupancy: number;
  description: string;
  img: string;
}

export const rooms: Room[] = [
  {
    id: "1",
    name: "Villa",
    price: 250,
    total: 8,
    occupancy: 2,
    img: "public/hero/pexels-aflah-1622600-10585565.jpg,public/hero/pexels-aybus-275580280-12968318.jpg",
    description: "Luxurious suite with a private balcony overlooking the serene mountains, featuring a king-sized bed and modern amenities.",
  },
  {
    id: "2",
    name: "Bungalow",
    price: 380,
    total: 5,
    occupancy: 2,
    img: "public/hero/pexels-cripsdog-19977303.jpg,public/hero/pexels-keeganjchecks-14524357.jpg",
    description: "Charming standalone bungalow nestled in the forest, offering a cozy retreat with a queen-sized bed, fireplace, and outdoor seating area.",
  },
];

export function getRoomById(id: string): Room | undefined {
  return rooms.find((room) => room.id === id);
}

export function getRoomImages(room: Room): string[] {
  return room.img
    .split(",")
    .map((path) => path.trim().replace(/^public\//, "/"))
    .filter(Boolean);
}

export function formatPrice(price: number): string {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getAvailability(room: Room, checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return room.total;
  const seed = hashString(`${room.id}|${checkIn}|${checkOut}`);
  const booked = seed % (room.total + 1);
  return room.total - booked;
}
