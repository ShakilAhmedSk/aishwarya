"use client";

import Link from "next/link";
import Image from "next/image";
import useScrollNav from "@/Utils/useScrollNav"; // 👈 HERE

export default function Footer() {
  const { handleNavScroll } = useScrollNav();

  return (
    <footer className="bg-[#c8020e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo-white.png"
                alt="Logo"
                width={140}
                height={40}
                className="object-contain drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
              />
            </Link>

            <p className="text-sm text-[#f1e7e7]">
              Comfortable and affordable luxury living accommodations with
              modern amenities. Your home away from home.
            </p>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Aishwarya</h3>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#f0d5e3]">
                  Home
                </Link>
              </li>

              <li
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#about";
                  } else {
                    handleNavScroll("about");
                  }
                }}
                className="hover:text-[#f0d5e3] cursor-pointer"
              >
                About
              </li>

              <li>
                <Link href="/find-your-place" className="hover:text-[#f0d5e3]">
                  Rooms
                </Link>
              </li>

              <li
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    window.location.href = "/#contact";
                  } else {
                    handleNavScroll("contact");
                  }
                }}
                className="hover:text-[#f0d5e3] cursor-pointer"
              >
                Contact
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-[#f1e7e7]">
              <li className="cursor-pointer">Blog</li>

              <li className="cursor-pointer">Facilities</li>

              <li
                className="cursor-pointer"
                onClick={() => handleNavScroll("faq")}
              >
                FAQ
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <p className="text-sm text-[#f1e7e7] mb-2">
                No. 76, 2nd Cross Rd, Adugodi, <br />Bengaluru – 560030{" "}
            </p>

            <p className="text-sm text-[#f1e7e7] mb-2">
              9845389055 / 720466204
            </p>

            <p className="text-sm text-[#f1e7e7] mb-4">
              aishwaryapgblr@gmail.com
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">
              <a className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>

              <a className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-instagram text-sm"></i>
              </a>

              <a className="bg-white text-[#c8020e] p-2 rounded-full hover:bg-[#f0d5e3] transition">
                <i className="fab fa-twitter text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-[#f0d5e3] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#f1e7e7]">
          {/* LEFT */}
          <p>
            © {new Date().getFullYear()} Aishwarya Residences. All rights
            reserved.
          </p>

          {/* RIGHT (ZUNOFIDE BRANDING) */}
          <div className="mt-2 md:mt-0 flex items-center gap-2">
            <span>Designed by</span>

            <a
              href="https://www.zunofide.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <Image
                src="/zunofide.png"
                alt="Zunofide"
                width={80}
                height={20}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
