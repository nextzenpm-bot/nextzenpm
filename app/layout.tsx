import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NextZen Property Maintenance | Professional Property Services",
    template: "%s | NextZen Property Maintenance",
  },
  description:
    "NextZen Property Maintenance provides professional property preservation, maintenance, cleaning, landscaping, handyman, winterization and inspection services. Your trusted vendor partner.",
  keywords: [
    "property maintenance",
    "property preservation",
    "cleaning services",
    "landscaping",
    "handyman services",
    "winterization",
    "trash-out",
    "board-up",
    "photo inspection",
    "vendor partnership",
  ],
  openGraph: {
    title: "NextZen Property Maintenance",
    description: "Professional Property Maintenance & Preservation Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
