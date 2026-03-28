import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aishwarya PG | Luxury PG in Bengaluru",
  description:
    "Premium PG in Bengaluru with modern rooms, healthy food, high-speed WiFi, and a vibrant community. Book your stay at Aishwarya PG today.",
  keywords: [
    "PG in Bengaluru",
    "Luxury PG Bangalore",
    "Coliving Bengaluru",
    "PG near Koramangala",
    "Best PG for professionals",
  ],
  authors: [{ name: "Aishwarya PG" }],
  openGraph: {
    title: "Aishwarya PG | Premium Coliving in Bengaluru",
    description:
      "Experience premium PG living with modern amenities and community lifestyle.",
    url: "https://yourdomain.com",
    siteName: "Aishwarya PG",
    locale: "en_IN",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-gradient-to-b from-slate-950 via-sky-950/20 to-indigo-950/20 text-white flex flex-col">
        
        {/* 🔥 Global Navbar */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="flex-1">{children}</main>

        {/* 🔻 Footer */}
        <Footer />

      </body>
    </html>
  );
}