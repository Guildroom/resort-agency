import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { rooms, formatPrice, getRoomImages } from "@/lib/rooms";

export default function RoomShowcase() {
  const gridLayout =
    rooms.length <= 2
      ? "grid-cols-1 sm:grid-cols-2 max-w-4xl"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl";

  return (
    <section
      className="relative w-full pt-20 md:pt-28 pb-10 md:pb-14"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p
              className="text-xs uppercase tracking-[0.25em] mb-3"
              style={{ color: "var(--color-walnut)" }}
            >
              Stay With Us
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Rooms & Villas
            </h2>
          </div>
          <p
            className="max-w-md text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Choose the space that fits your kind of escape.
          </p>
        </div>

        <div className={`mx-auto grid gap-6 ${gridLayout}`}>
          {rooms.map((room) => {
            const image = getRoomImages(room)[0];

            return (
              <Link
                key={room.id}
                href={`/booking/${room.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg border transition-shadow duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  style={{ backgroundColor: "var(--color-border)" }}
                >
                  <Image
                    src={image}
                    alt={room.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl md:text-2xl font-semibold mb-4"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {room.name}
                  </h3>

                  <div
                    className="pt-4 border-t flex items-center justify-between gap-4"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div>
                      <span
                        className="text-lg md:text-xl font-bold"
                        style={{ color: "var(--color-espresso)" }}
                      >
                        {formatPrice(room.price)}
                      </span>
                      <span
                        className="text-xs md:text-sm ml-1"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        / night
                      </span>
                    </div>
                    <span className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-300">
                      Read more
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
