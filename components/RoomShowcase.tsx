import Image from "next/image";
import Link from "next/link";
import { rooms, getRoomImages } from "@/lib/rooms";

const roomCopy = {
  bungalow: {
    title: "Garden Bungalow",
    description:
      "A peaceful hideaway among tropical greenery, with warm natural textures and room to unwind.",
    cta: "Explore the bungalow",
  },
  villa: {
    title: "Two-Bedroom Pool Villa",
    description:
      "A private swimming pool, generous living areas and two bedrooms for unhurried time together.",
    cta: "Explore the villa",
  },
};

function getRoomCopy(name: string) {
  return name.toLowerCase().includes("bungalow") ? roomCopy.bungalow : roomCopy.villa;
}

export default function RoomShowcase() {
  const orderedRooms = [...rooms].sort((a, b) => {
    const rank = (name: string) => (name.toLowerCase().includes("bungalow") ? 0 : 1);
    return rank(a.name) - rank(b.name);
  });

  return (
    <section
      id="rooms"
      className="relative w-full px-6 py-16 md:px-12 md:py-20 md:pb-[105px] lg:px-[6%]"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-[38px] flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-[25px]">
          <div>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.25em]"
              style={{ color: "var(--color-walnut)" }}
            >
              01 / Stay
            </p>
            <h2
              className="mt-3 text-3xl font-bold md:text-4xl lg:text-5xl"
              style={{ color: "var(--color-primary)" }}
            >
              Somewhere to belong.
            </h2>
          </div>
          <p
            className="max-w-[350px] text-base leading-relaxed"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Two ways to retreat into the natural rhythms of the island, each
            with its own sense of privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-11 md:grid-cols-2 md:gap-[35px]">
          {orderedRooms.map((room, index) => {
            const image = getRoomImages(room)[0];
            const copy = getRoomCopy(room.name);

            return (
              <Link
                key={room.id}
                href={`/booking/${room.id}`}
                className="group block"
              >
                <div
                  className="relative h-[65vw] max-h-[430px] overflow-hidden md:h-[34vw] md:max-h-[480px] md:min-h-[240px]"
                  style={{ backgroundColor: "var(--color-border)" }}
                >
                  <Image
                    src={image}
                    alt={copy.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="pt-6">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                    style={{ color: "var(--color-walnut)" }}
                  >
                    {String(index + 1).padStart(2, "0")} — Up to{" "}
                    {room.occupancy} guests
                  </p>
                  <h3
                    className="mt-2.5 mb-3.5 text-xl font-semibold md:text-2xl"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {copy.title}
                  </h3>
                  <p
                    className="mb-5 max-w-[510px] text-base leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {copy.description}
                  </p>
                  <span className="inline-block border-b border-current pb-[7px] text-[10px] font-semibold uppercase tracking-[0.17em] transition-colors duration-200 group-hover:text-[var(--color-forest)]">
                    {copy.cta} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
