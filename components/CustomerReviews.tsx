"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Building2, Globe, Award } from "lucide-react";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  initial: string;
}

interface PlatformRating {
  name: string;
  rating: number;
  reviewCount: number;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; strokeWidth?: number }>;
}

const platformRatings: PlatformRating[] = [
  { name: "Google Maps", rating: 4.9, reviewCount: 342, icon: MapPin },
  { name: "Booking.com", rating: 4.8, reviewCount: 456, icon: Building2 },
  { name: "Agoda", rating: 4.7, reviewCount: 189, icon: Globe },
  { name: "TripAdvisor", rating: 4.8, reviewCount: 260, icon: Award }
];

const overallRating = 4.8;
const totalReviews = 1247;

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    location: "New York, USA",
    rating: 5,
    text: "An absolutely magical experience! The perfect blend of luxury and nature. The staff went above and beyond to make our stay unforgettable.",
    initial: "S"
  },
  {
    id: 2,
    name: "James Rodriguez",
    location: "Miami, USA",
    rating: 5,
    text: "L'escapade exceeded all expectations. The attention to detail, stunning views, and impeccable service made this the best vacation we've ever had.",
    initial: "J"
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "San Francisco, USA",
    rating: 5,
    text: "A true sanctuary away from the city. The rooms are gorgeous, the amenities are top-notch, and the natural surroundings are breathtaking.",
    initial: "E"
  },
  {
    id: 4,
    name: "Michael Thompson",
    location: "London, UK",
    rating: 5,
    text: "We've stayed at luxury resorts around the world, but L'escapade stands out. The combination of comfort, nature, and exceptional service is unmatched.",
    initial: "M"
  },
  {
    id: 5,
    name: "Sophia Martinez",
    location: "Los Angeles, USA",
    rating: 5,
    text: "Perfect for a romantic getaway. Every detail was thoughtfully curated. We can't wait to return!",
    initial: "S"
  },
  {
    id: 6,
    name: "David Park",
    location: "Seattle, USA",
    rating: 5,
    text: "The most relaxing vacation I've ever experienced. From the moment we arrived to the moment we left, everything was perfection.",
    initial: "D"
  },
  {
    id: 7,
    name: "Isabella Laurent",
    location: "Paris, France",
    rating: 5,
    text: "Extraordinary! The landscape is stunning and the resort seamlessly integrates with nature. A five-star experience in every way.",
    initial: "I"
  },
  {
    id: 8,
    name: "Robert Williams",
    location: "Chicago, USA",
    rating: 5,
    text: "Highly recommend L'escapade for anyone seeking peace and luxury. The staff's hospitality and the beautiful setting made our anniversary truly special.",
    initial: "R"
  }
];

export default function CustomerReviews() {
  return (
    <section
      className="relative w-full px-6 md:px-12 lg:px-24 py-20 md:py-32"
      style={{ backgroundColor: "var(--color-light-beige)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "var(--color-primary)" }}
          >
            What Our Guests Say
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Discover why travelers choose L&apos;escapade for their luxury escape
          </p>
        </motion.div>

        {/* Ratings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Platform Ratings */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
            {platformRatings.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center gap-3 p-3 md:p-4 rounded-lg border text-left"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <platform.icon
                  size={20}
                  style={{ color: "var(--color-walnut)" }}
                  strokeWidth={1.5}
                />
                <div>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {platform.name}
                  </p>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {platform.rating.toFixed(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span
                className="text-5xl md:text-6xl font-bold"
                style={{ color: "var(--color-espresso)" }}
              >
                {overallRating}
              </span>
              <span
                className="text-3xl md:text-4xl font-light"
                style={{ color: "var(--color-text-secondary)" }}
              >
                / 5.0
              </span>
            </div>

            {/* Overall Stars */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => {
                const fillPercentage = Math.min(Math.max(overallRating - i, 0), 1) * 100;
                return (
                  <div key={i} className="relative">
                    {/* Background star (empty) */}
                    <Star
                      size={28}
                      style={{ color: "var(--color-border)" }}
                      strokeWidth={1.5}
                    />
                    {/* Foreground star (filled) */}
                    <div
                      className="absolute top-0 left-0 overflow-hidden"
                      style={{ width: `${fillPercentage}%` }}
                    >
                      <Star
                        size={28}
                        fill="var(--color-bronze)"
                        style={{ color: "var(--color-bronze)" }}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className="text-sm md:text-base"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Based on {totalReviews.toLocaleString('en-US')} reviews
            </p>
          </div>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-8"
        >
          <div
            className="flex gap-6 overflow-x-auto px-2 py-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {/* Add padding to first and last items */}
            <div className="flex-shrink-0 w-0 md:w-6" />
            
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
              >
                <div
                  className="h-full p-6 md:p-8 rounded-lg border"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                    boxShadow: "0 2px 8px rgba(48, 37, 30, 0.08)"
                  }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill={i < review.rating ? "var(--color-bronze)" : "none"}
                        style={{
                          color: i < review.rating ? "var(--color-bronze)" : "var(--color-border)"
                        }}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p
                    className="text-base leading-relaxed mb-6"
                    style={{ color: "var(--color-primary)" }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                    {/* Avatar */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                      style={{
                        backgroundColor: "var(--color-forest)",
                        color: "var(--color-linen)"
                      }}
                    >
                      {review.initial}
                    </div>

                    {/* Name and Location */}
                    <div>
                      <p
                        className="font-semibold text-base"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {review.name}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Add padding to last item */}
            <div className="flex-shrink-0 w-0 md:w-6" />
          </div>
        </motion.div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 text-sm"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Scroll to see more reviews →
        </motion.p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
