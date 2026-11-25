import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageOffset from "@/components/PageOffset";
import "./globals.css";

const cormorant = localFont({
  src: [
    {
      path: "../public/font/Cormorant_Garamond/CormorantGaramond-VariableFont_wght.ttf",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../public/font/Cormorant_Garamond/CormorantGaramond-Italic-VariableFont_wght.ttf",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const dmSans = localFont({
  src: [
    {
      path: "../public/font/DM_Sans/DMSans-VariableFont_opsz,wght.ttf",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "../public/font/DM_Sans/DMSans-Italic-VariableFont_opsz,wght.ttf",
      weight: "100 1000",
      style: "italic",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "L'escapade Resort - Where Nature Meets Luxury",
  description: "Experience unparalleled luxury in pristine wilderness. L'escapade Resort offers world-class amenities, sustainable practices, and breathtaking mountain vistas for the ultimate escape.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <PageOffset>{children}</PageOffset>
        <Footer />
      </body>
    </html>
  );
}
