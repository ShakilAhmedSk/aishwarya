"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // close menu on scroll (nice UX)
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white text-black shadow-md"
            : "bg-black/30 backdrop-blur-md text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[70px] md:h-[80px] flex items-center justify-between relative">

          {/* 🔥 LEFT SIDE (LOGO MOBILE + MENU DESKTOP) */}
          <div className="flex items-center gap-6">
            
            {/* LOGO (MOBILE ONLY) */}
            <div className="md:hidden">
              <Image
                src="/logo.png"
                alt="Aishwarya Residences"
                width={110}
                height={30}
                priority
                className={`${scrolled ? "" : "invert"}`}
              />
            </div>

            {/* MENU (DESKTOP ONLY) */}
            <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
              <Link href="#">Our Locations</Link>
              <Link href="#">Community</Link>
              <Link href="#">Stay With Us</Link>
            </nav>
          </div>

          {/* 🔥 CENTER LOGO (DESKTOP ONLY) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center h-full">
            <Image
              src="/logo.png"
              alt="Aishwarya Residences"
              width={140}
              height={40}
              priority
              className={`transition-all duration-300 ${
                scrolled ? "" : "invert"
              }`}
            />
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-6 text-sm">
            
            <span className="hidden lg:block">
              Find Your Place
            </span>

            <button
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition ${
                scrolled
                  ? "bg-sky-600 text-white"
                  : "bg-sky-500 text-white"
              }`}
            >
              Contact
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-[70px] left-0 w-full bg-black/95 text-white z-40 flex flex-col items-center gap-6 py-8 md:hidden">
          
          <Link href="#" onClick={() => setMenuOpen(false)}>
            Our Locations
          </Link>

          <Link href="#" onClick={() => setMenuOpen(false)}>
            Community
          </Link>

          <Link href="#" onClick={() => setMenuOpen(false)}>
            Stay With Us
          </Link>

          <button className="bg-sky-500 px-6 py-2 rounded-full mt-4">
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}