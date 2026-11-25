import Image from "next/image";
import Intro from "@/components/Intro";
import WhyUs from "@/components/WhyUs";
import BookingSection from "@/components/BookingSection";
import RoomShowcase from "@/components/RoomShowcase";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero/BR0A9586.jpg"
            alt="Covered terrace with lounge seating overlooking the tropical gardens at L'escapade Resort"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(48, 37, 30, 0.52)' }}></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl animate-fade-in">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-wide"
            style={{ color: 'var(--color-linen)' }}
          >
            L&apos;escapade
          </h1>
          
          <p 
            className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
            style={{ color: 'var(--color-light-beige)' }}
          >
            Luxury, Naturally.
          </p>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--color-linen)' }}
          >
            A quiet retreat in the heart of nature, designed for pure comfort, deep rest, and timeless memories. Come as a guest, leave renewed.
          </p>
        </div>
      </section>

      {/* Welcome Intro Section */}
      <Intro />

      {/* Why Us Section */}
      <WhyUs />

      {/* Booking Section */}
      <BookingSection />

      {/* Rooms & Villas */}
      <RoomShowcase />

      {/* Customer Reviews Section */}
      {/* <CustomerReviews /> */}

      {/* Gallery Section */}
      <GallerySection />
    </main>
  );
}
