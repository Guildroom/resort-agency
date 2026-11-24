import Link from "next/link";
import { MapPin, Clock, Plane, Mountain, Waves, Palmtree } from "lucide-react";

export const metadata = {
  title: "About L'escapade Resort - Northern Bali Sanctuary",
  description: "Discover L'escapade Resort, a secluded sanctuary nestled along Bali's serene northern coast in Buleleng, featuring ocean views, tropical gardens, and authentic island hospitality.",
};

export default function AboutPage() {
  return (
    <main className="relative w-full">
      <section
        className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32"
        style={{ backgroundColor: "var(--color-background)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              About L&apos;escapade Resort
            </h1>
            <p
              className="text-xl md:text-2xl italic"
              style={{ color: "var(--color-walnut)" }}
            >
              A Secluded Northern Bali Sanctuary
            </p>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed"
                 style={{ color: "var(--color-text-secondary)" }}>
              <p>
                Born from a desire to offer genuine tranquility along Bali’s quiet northern coast, L&apos;escapade Resort is an intimate sanctuary where unspoiled nature meets effortless comfort. Set within 1.7 hectares of lush land in Buleleng, our resort provides a peaceful retreat where time slows down and every detail is thoughtfully crafted around your well-being.
              </p>
              <p>
                We believe true luxury lies in quiet simplicity and heartfelt hospitality. From our private bungalows and villas that blend seamlessly with the surrounding gardens to our expansive pool and bar area nestled within the gardens, every space is designed to honor the natural beauty around us. Here, we invite you to pause, unwind, and reconnect with what matters most: peace, comfort, and the simple joy of coastal living.
              </p>
            </div>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Location & Setting
            </h2>
            <div className="space-y-4 text-base md:text-lg leading-relaxed"
                 style={{ color: "var(--color-text-secondary)" }}>
              <p>
                Positioned in North Bali&apos;s unspoiled countryside, just 1.7 kilometers from the quiet shores of Ponjok Batu Beach, the resort enjoys the rare serenity of Bali&apos;s northern coast. Here, volcanic mountains meet the sea, creating a landscape of dramatic beauty far from the crowded southern beaches.
              </p>
              <p>
                Our location in the Buleleng region places you at the heart of authentic Bali—where traditional villages dot the hillsides, rice terraces stretch toward distant peaks, and the rhythm of island life remains unhurried and genuine. Wake to the sound of tropical birds, spend your days exploring hidden waterfalls and colonial-era towns, and return each evening to watch the sun set over the Java Sea from your private terrace.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3">
                <Waves size={24} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Ocean Views</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Breathtaking vistas of the Java Sea and distant horizon</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Palmtree size={24} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Tropical Gardens</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>1.7 hectares of lush, manicured tropical landscape</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mountain size={24} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Mountain Backdrop</h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>Surrounded by volcanic peaks and verdant hillsides</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Our Facilities – Accommodation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-lg border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-light-beige)" }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                  Bungalow
                </h3>
                <p className="text-base mb-3" style={{ color: "var(--color-text-secondary)" }}>
                  Experience intimate luxury in our Bungalows, offering 74 m² of carefully designed, serene living space with traditional accents and modern comfort.
                </p>
                <Link
                  href="/booking/2"
                  className="text-sm font-semibold inline-flex items-center gap-2 hover:underline"
                  style={{ color: "var(--color-walnut)" }}
                >
                  View Garden Bungalow →
                </Link>
              </div>
              <div
                className="p-6 rounded-lg border"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-light-beige)" }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                  Villa
                </h3>
                <p className="text-base mb-3" style={{ color: "var(--color-text-secondary)" }}>
                  Our expansive Villas feature 262 m² of Total Private Area, including a private pool, garden, and terrace, subject to floor plan verification. Perfectly suited for those seeking the ultimate private sanctuary.
                </p>
                <Link
                  href="/booking/1"
                  className="text-sm font-semibold inline-flex items-center gap-2 hover:underline"
                  style={{ color: "var(--color-walnut)" }}
                >
                  View Private Pool Villa →
                </Link>
              </div>
            </div>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Resort Facilities
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-walnut)" }}>
                Tropical Swimming Pool & Pool Bar
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Nestled at the heart of our lush tropical gardens, our 22-meter swimming pool and integrated poolside bar offer a serene sanctuary for effortless relaxation. Surrounded by vibrant Balinese foliage and comfortable sun loungers, it is an intimate haven to unwind under the sun while enjoying freshly crafted cocktails, chilled refreshments, and light bites throughout the day.
              </p>
            </div>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Our Facilities – Restaurant
            </h2>
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "var(--color-walnut)" }}>
                Restaurant
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Savor authentic Balinese flavors at our open-air restaurant. Welcoming up to 100 guests, we craft every dish from fresh, locally sourced ingredients—ideal for romantic dinners or celebratory gatherings.
              </p>
            </div>
          </div>

          <div
            className="mb-12 p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Nearby Attractions
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6"
               style={{ color: "var(--color-text-secondary)" }}>
              Beyond the resort, North Bali reveals its treasures—a quieter, more authentic side of the island where natural wonders and cultural heritage await your discovery.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "var(--color-bronze)" }}></div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Ponjok Batu Beach</h3>
                  <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>Just 1.7 km (4 minutes) away—pristine black sand shores perfect for peaceful morning walks</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "var(--color-bronze)" }}></div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Lovina Beach</h3>
                  <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>Famous for dolphin watching at sunrise and calm waters ideal for swimming and snorkeling</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "var(--color-bronze)" }}></div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>Singaraja</h3>
                  <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>Bali&apos;s former capital, rich with Dutch colonial architecture and the historic Royal Palace of Buleleng</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full mt-2" style={{ backgroundColor: "var(--color-bronze)" }}></div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-primary)" }}>GitGit Waterfall</h3>
                  <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>One of Bali&apos;s most spectacular waterfalls, cascading through lush jungle in the nearby highlands</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="p-8 md:p-12 rounded-lg border"
            style={{
              backgroundColor: "var(--color-surface)",
              borderColor: "var(--color-border)",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              Getting Here
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2" style={{ color: "var(--color-walnut)" }}>
                <MapPin size={24} />
                Our Address
              </h3>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Alassari, Desa Pacung<br />
                Kec. Tejakula, Kabupaten Buleleng<br />
                Bali 81173, Indonesia
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--color-walnut)" }}>
                <Plane size={24} />
                Travel Times
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock size={18} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-primary)" }}>From Ngurah Rai International Airport</p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>97 km - Approximately 3 hours by car</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-primary)" }}>From Denpasar City</p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>86 km - Approximately 2 hours 20 minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} style={{ color: "var(--color-walnut)" }} className="flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold" style={{ color: "var(--color-primary)" }}>From Gilimanuk Harbour</p>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>111 km - Approximately 2 hours 40 minutes</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              The journey to our northern sanctuary is part of the experience—winding through terraced rice fields, traditional villages, and volcanic landscapes that define Bali&apos;s timeless beauty. As the road climbs toward the coast and the air grows cooler, you&apos;ll know you&apos;re approaching a different kind of Bali—quieter, more authentic, and utterly unforgettable.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="btn-primary inline-block px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
