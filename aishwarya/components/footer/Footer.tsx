"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#c8020e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <Link href="/" className="relative inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={40}
                className="object-contain filter brightness-0 invert sepia to-blue-500 saturate-[5]"
              />
            </Link>

            <p className="text-sm text-[#f1e7e7]">
              Comfortable and affordable Luxury Living  accommodations with modern amenities.
              Your home away from home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#f0d5e3]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#f0d5e3]">About</Link></li>
              <li><Link href="/rooms" className="hover:text-[#f0d5e3]">Rooms</Link></li>
              <li><Link href="/contact" className="hover:text-[#f0d5e3]">Contact</Link></li>
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Facilities</h3>
            <ul className="space-y-2 text-sm text-[#f1e7e7]">
              <li>WiFi & Internet</li>
              <li>24/7 Security</li>
              <li>Housekeeping</li>
              <li>Food & Laundry</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-[#f1e7e7] mb-2">
             19, Ramaiah Garden Sadduguntepalya Rd, near Domino's Pizza, Venkateshwara Layout, S.G. Palya, Bengaluru, Karnataka 560030
            </p>
            <p className="text-sm text-[#f1e7e7] mb-2">
              9845389055 / 720466204
            </p>
            <p className="text-sm text-[#f1e7e7] mb-4">
               aishwaryapgblr@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-twitter text-sm"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#f0d5e3] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#f1e7e7]">
          <p>© {new Date().getFullYear()}   Aishwarya Residences. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with ❤️ for better living</p>
        </div>

      </div>
    </footer>
  );
}