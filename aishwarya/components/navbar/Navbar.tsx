"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-white relative">
        
        {/* LEFT MENU */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="#">Our Locations</Link>
          <Link href="#">Community</Link>
          <Link href="#">Stay With Us</Link>
        </nav>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-xl font-semibold tracking-wide">
          Aishwarya
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-sm">
          
          <span className="hidden md:block text-gray-300">
            Find Your Place
          </span>

          <button className="bg-sky-600 hover:bg-sky-700 px-5 py-2 rounded-full text-sm font-medium transition">
            Contact Us
          </button>

          {/* Mobile Menu */}
          <button className="md:hidden text-xl">☰</button>
        </div>

      </div>
    </header>
  );
}