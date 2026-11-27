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
        {/* Background Video (loops silently, no controls) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            poster="/hero/BR0A9586.jpg"
            aria-hidden="true"
            tabIndex={-1}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src="/background.webm" type="video/webm" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(48, 37, 30, 0.52)' }}></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl animate-fade-in">
          <h1
            className="text-6xl md:text-[7rem] font-bold mb-6 tracking-tight"
            style={{ color: 'var(--color-linen)' }}
          >
            A quieter
            <br />
            side of Bali.
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--color-linen)' }}
          >
            A secluded retreat, where days unfold naturally.
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
