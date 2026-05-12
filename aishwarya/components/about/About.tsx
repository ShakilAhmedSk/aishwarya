"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 LEFT IMAGE SECTION */}
        <div className="grid grid-cols-2 gap-4 h-[420px]">
          {/* Boys Hostel */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="/boys-hostel.jpg"
              alt="Boys Hostel"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                Boys Hostel
              </h3>
              <p className="text-gray-200 text-sm">
                Comfortable & Modern Living
              </p>
            </div>
          </div>

          {/* Girls Hostel */}
          <div className="relative rounded-2xl overflow-hidden group">
            <Image
              src="/girls-hostel.jpg"
              alt="Girls Hostel"
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Text */}
            <div className="absolute bottom-4 left-4 z-10">
              <h3 className="text-white text-lg md:text-xl font-semibold">
                Girls Hostel
              </h3>
              <p className="text-gray-200 text-sm">
                Safe & Premium Stay Experience
              </p>
            </div>
          </div>
        </div>

        {/* 🔥 RIGHT CONTENT */}
        <div className="space-y-6">
          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Aishwarya Residences – Discover comfortable and modern Luxury Living
            in Bengaluru
          </h2>

          {/* TEXT */}
          <p className="text-gray-600 leading-relaxed">
            At Aishwarya Residences, we offer thoughtfully designed Luxury
            Living spaces for both boys and girls across prime locations. Our
            residences are built to provide comfort, safety, and convenience —
            all under one roof.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We focus on creating a balanced living experience where community
            and personal space come together. Whether you&apos;re staying
            short-term or long-term, our spaces are designed to feel like home.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With clean environments, essential amenities, and reliable
            management, Aishwarya Residences ensures a smooth, hassle-free
            lifestyle for every resident.
          </p>
        </div>
      </div>
    </section>
  );
}
