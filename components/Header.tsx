"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const leftNavLinks = [{ label: "Rooms", href: "/#rooms" }];
const rightNavLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/#gallery" },
];
const mobileNavLinks = [...leftNavLinks, ...rightNavLinks];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 30);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  const solidHeader = scrolled || mobileMenuOpen || pathname !== "/";

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 text-white transition-[background-color,box-shadow] duration-300 ease-out"
      style={{
        backgroundColor: solidHeader ? "var(--color-primary)" : "transparent",
        backgroundImage: solidHeader
          ? "none"
          : "linear-gradient(180deg, rgba(48, 37, 30, 0.78), rgba(48, 37, 30, 0.25) 75%, transparent)",
        boxShadow: solidHeader ? "0 1px 0 rgba(255, 255, 255, 0.125)" : "none",
      }}
    >
      <div className="grid h-[88px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-[112px] md:px-[4.5%]">
        <button
          className="justify-self-start p-2 -ml-2 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className="hidden items-center gap-[25px] text-[10px] uppercase tracking-[0.15em] md:flex"
          aria-label="Main navigation"
        >
          {leftNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-[3px] py-1.5"
          aria-label="L'escapade home"
        >
          <span className="relative block h-[57px] w-[90px] md:h-[78px] md:w-[120px]">
            <Image
              src="/logo.svg"
              alt="L'escapade Resort"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </span>
          <span className="text-[7px] uppercase leading-tight tracking-[0.22em] md:text-[8px] md:tracking-[0.28em]">
            Resort Bali
          </span>
        </Link>

        <nav
          className="flex items-center justify-end gap-[25px] text-[10px] uppercase tracking-[0.15em]"
          aria-label="Secondary navigation"
        >
          {rightNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hidden transition-opacity duration-200 hover:opacity-70 md:inline"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={scrollToFooter}
            className="hidden uppercase transition-opacity duration-200 hover:opacity-70 md:inline"
          >
            Contact
          </button>
          <Link
            href="/booking"
            className="inline-flex min-h-[36px] items-center justify-center border border-white px-[9px] text-[9px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 hover:bg-[#faf7f0] hover:text-[var(--color-primary)] md:min-h-[48px] md:px-6 md:py-2.5 md:text-[10px]"
          >
            Book Your Stay
          </Link>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-[var(--color-primary)] px-6 pb-8 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block border-b border-white/15 py-[15px] text-sm uppercase tracking-[0.15em]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToFooter}
              className="block border-b border-white/15 py-[15px] text-left text-sm uppercase tracking-[0.15em]"
            >
              Contact
            </button>
          </nav>
          <Link
            href="/booking"
            className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center border border-white px-6 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-200 hover:bg-[#faf7f0] hover:text-[var(--color-primary)]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Your Stay
          </Link>
        </div>
      )}
    </header>
  );
}
