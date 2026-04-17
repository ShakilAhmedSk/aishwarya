"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f5f5f5] py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* 🔥 LEFT IMAGE */}
        <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="/about.webp"
            alt="Aishwarya Residences Living"
            fill
            priority
            className="object-cover"
          />
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
