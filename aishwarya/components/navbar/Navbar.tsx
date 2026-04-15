"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LeadPopup from "../LeadForm/LeadPopup";
import { usePathname } from "next/navigation";
import useScrollNav from "../Utils/useScrollNav";

export default function Navbar() {
  const {handleNavScroll}=useScrollNav()
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

  const handleScroll = () => {
  const section = document.getElementById("contact") as HTMLDivElement | null;
  section?.scrollIntoView({ behavior: "smooth" });
};
const pathname = usePathname();
const base = "cursor-pointer transition";
  const active = "text-[#c8020e]";
  const inactive = "text-white hover:text-[#c8020e]";

const [openPopup,setOpenPopup]=useState(false)
  return (
    <>
     {openPopup && <LeadPopup/>}
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

      <Link
        href="/"
        className={`${base} ${pathname === "/" ? active : inactive}`}
      >
        Home
      </Link>

      <Link
        href="/our-locations"
        className={`${base} ${pathname === "/locations" ? active : inactive}`}
      >
        Our Locations
      </Link>

      <Link
        href="/community"
        className={`${base} ${pathname === "/community" ? active : inactive}`}
      >
        Community
      </Link>

      {/* POPUP */}
      <Link
        href={'/Stay-with-us'}
        className={`${base} ${openPopup ? active : inactive}`}
      >
        Stay With Us
      </Link>

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
                scrolled ? "" : ""
              }`}
            />
          </div>

          {/* 🔥 RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-6 text-sm">
            
            <Link href={'/FInd-your-Place'}
            className="hidden lg:block">
              Find Your Place
            </Link>

            <button
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition cursor-pointer ${
                scrolled
                  ? "bg-[#c8020e] text-white"
                  : "bg-[#b9242e] text-white"
              }`}
               onClick={()=>handleNavScroll("contact")}
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