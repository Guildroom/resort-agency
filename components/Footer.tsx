"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Book a Stay", href: "/booking" },
  { name: "Guest Reviews", href: "/#reviews" },
  { name: "Gallery", href: "/#gallery" },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full border-t"
      style={{
        backgroundColor: "var(--color-primary)",
        borderColor: "rgba(200, 169, 126, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <h3
                className="text-2xl md:text-3xl font-bold mb-3"
                style={{ color: "var(--color-accent-gold)" }}
              >
                Lanscade
              </h3>
            </Link>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-light-beige)" }}
            >
              Where Nature Meets Luxury
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-light-beige)" }}
            >
              Experience unparalleled luxury in pristine wilderness. Your perfect escape awaits.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: "rgba(200, 169, 126, 0.1)",
                    color: "var(--color-light-beige)",
                  }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-surface)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors duration-300 hover:text-white"
                    style={{ color: "var(--color-light-beige)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-semibold mb-4"
              style={{ color: "var(--color-surface)" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent-gold)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--color-light-beige)" }}
                >
                  123 Serenity Ridge, Whispering Pines
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent-gold)" }}
                />
                <a
                  href="tel:+15550123456"
                  className="text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: "var(--color-light-beige)" }}
                >
                  +1 (555) 012-3456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent-gold)" }}
                />
                <a
                  href="mailto:reservations@lanscade.com"
                  className="text-sm transition-colors duration-300 hover:text-white"
                  style={{ color: "var(--color-light-beige)" }}
                >
                  reservations@lanscade.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  size={18}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-accent-gold)" }}
                />
                <span
                  className="text-sm"
                  style={{ color: "var(--color-light-beige)" }}
                >
                  24/7 Concierge Service
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-light-beige)" }}
          >
            © 2026 Lanscade Resort. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm transition-colors duration-300 hover:text-white"
              style={{ color: "var(--color-light-beige)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm transition-colors duration-300 hover:text-white"
              style={{ color: "var(--color-light-beige)" }}
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
