import Image from "next/image";
import WhyUs from "@/components/WhyUs";
import BookingSection from "@/components/BookingSection";
import CustomerReviews from "@/components/CustomerReviews";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <main className="relative w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="background.gif"
            alt="Lanscade Resort Background"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28, 27, 26, 0.4)' }}></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl animate-fade-in">
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 tracking-wide"
            style={{ color: 'var(--color-surface)' }}
          >
            Lanscade
          </h1>
          
          <p 
            className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
            style={{ color: 'var(--color-light-beige)' }}
          >
            Where Nature Meets Luxury
          </p>
          
          <p 
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--color-surface)' }}
          >
            Nestled in the heart of pristine wilderness, Lanscade offers an unparalleled escape 
            where modern comfort harmonizes with natural beauty. Experience tranquility like never before.
          </p>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

      {/* Booking Section */}
      <BookingSection />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Gallery Section */}
      <GallerySection />
    </main>
  );
}
