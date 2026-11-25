"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section
      id="discover"
      className="relative w-full px-6 py-24 text-center md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[850px]"
      >
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.25em]"
          style={{ color: "var(--color-walnut)" }}
        >
          Welcome to Lescapade
        </p>

        <h2
          className="my-5 text-4xl font-bold md:text-6xl"
          style={{ color: "var(--color-primary)" }}
        >
          Far from the everyday.
          <br />
          Closer to what matters.
        </h2>

        <p
          className="mx-auto max-w-[600px] text-base leading-relaxed"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Hidden in the village of Pacung, Lescapade invites you to discover a
          more intimate side of North Bali. Tropical gardens, warm timber
          architecture and a gentle sense of stillness create space to slow
          down, reconnect and simply be.
        </p>

        <div
          className="mx-auto mt-9 h-[55px] w-px"
          style={{ backgroundColor: "var(--color-border)" }}
        />
      </motion.div>
    </section>
  );
}
