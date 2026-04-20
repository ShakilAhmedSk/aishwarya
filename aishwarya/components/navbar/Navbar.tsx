"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadPopup from "../LeadForm/LeadPopup";
import { usePathname } from "next/navigation";
import useScrollNav from "@/Utils/useScrollNav";

export default function Navbar() {
  const { handleNavScroll } = useScrollNav();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      if (menuOpen) setMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  // ✅ Dynamic colors
  const base = "cursor-pointer transition font-medium";
  const active = "text-[#c8020e]";
  const inactive = scrolled
    ? "text-black hover:text-[#c8020e]"
    : "text-white hover:text-[#c8020e]";

  return (
    <>
      {openPopup && <LeadPopup />}

      {/* 🔥 NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-[var(--font-montserrat)] ${
          scrolled
            ? "bg-white text-black shadow-lg"
            : "bg-black/30 backdrop-blur-md text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-[70px] md:h-[80px] flex items-center justify-between relative">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            {/* MOBILE LOGO */}
            <div className="md:hidden">
              <Image
                src="/logo.png"
                alt="Aishwarya Residences"
                width={110}
                height={30}
                priority
                className={scrolled ? "" : "invert"}
              />
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex gap-6 lg:gap-8 text-sm">
              <Link
                href="/"
                className={`${base} ${pathname === "/" ? active : inactive}`}
              >
                Home
              </Link>

              <Link
                href="/our-locations"
                className={`${base} ${
                  pathname === "/our-locations" ? active : inactive
                }`}
              >
                Our Locations
              </Link>

              <Link
                href="/community"
                className={`${base} ${
                  pathname === "/community" ? active : inactive
                }`}
              >
                Community
              </Link>

              <Link
                href="/stay-with-us"
                className={`${base} ${
                  pathname === "/stay-with-us" ? active : inactive
                }`}
              >
                Stay With Us
              </Link>
            </nav>
          </div>

          {/* CENTER LOGO */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center h-full">
            <Image
              src="/logo.png"
              alt="Aishwarya Residences"
              width={140}
              height={40}
              priority
            />
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 md:gap-6 text-sm">
            {/* FIND YOUR PLACE */}
            <Link
              href="/find-your-place"
              className={`hidden lg:block ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Find Your Place
            </Link>

            {/* CONTACT BUTTON */}
            <button
              onClick={() => handleNavScroll("contact")}
              className={`cursor-pointer px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition ${
                scrolled ? "bg-[#c8020e] text-white" : "bg-[#b9242e] text-white"
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
          <Link href="/our-locations" onClick={() => setMenuOpen(false)}>
            Our Locations
          </Link>

          <Link href="/community" onClick={() => setMenuOpen(false)}>
            Community
          </Link>

          <Link href="/stay-with-us" onClick={() => setMenuOpen(false)}>
            Stay With Us
          </Link>

          <button
            onClick={() => {
              handleNavScroll("contact");
              setMenuOpen(false);
            }}
            className="bg-[#c8020e] px-6 py-2 rounded-full mt-4"
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  );
}
