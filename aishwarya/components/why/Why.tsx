"use client";

import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

export default function Why() {
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    {
      id: 1,
      img: "/about1.jpg",
      title: "Food & Drinks",
      desc: "Enjoy healthy and delicious meals everyday.",
    },
    {
      id: 2,
      img: "/about2.jpg",
      title: "Community Life",
      desc: "Meet amazing people and build connections.",
    },
    {
      id: 3,
      img: "/about3.jpg",
      title: "Premium Rooms",
      desc: "Fully furnished rooms designed for comfort.",
    },
    {
      id: 4,
      img: "/about4.jpg",
      title: "Events & Fun",
      desc: "Regular events, games and social activities.",
    },
  ];

  return (
    <section className="bg-[#f1e7e7] text-black py-14 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 text-center md:text-left">

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Why Choose <br />
              <span className="text-[#c8020e]">
                Aishwarya Residences?
              </span>
            </h2>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              At Aishwarya Residences, we don’t just offer accommodation — we
              create a space that truly feels like home. Designed for comfort,
              safety, and ease.
            </p>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Clean living spaces, essential amenities, and reliable management
              ensure a smooth, worry-free stay.
            </p>

            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Blending affordability with quality, where convenience meets calm.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full">

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              loop
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              observer={true}
              observeParents={true}
              grabCursor
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="w-full"
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[540px] rounded-2xl overflow-hidden group">

                    {/* IMAGE */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      priority={item.id === 1}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 text-white">

                      <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-1 md:mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-2 md:mb-4 leading-snug">
                        {item.desc}
                      </p>

                      <button className="border border-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full text-xs sm:text-sm hover:bg-white hover:text-[#c8020e] transition">
                        Read More
                      </button>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* ARROW */}
            <button
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 
              bg-[#c8020e] text-white p-2 sm:p-3 md:p-4 rounded-full 
              hover:bg-red-700 transition z-10 shadow-lg"
              onClick={() => swiperRef.current?.slideNext()}
            >
              →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}