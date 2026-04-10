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
    <section className="bg-[#f1e7e7] text-black py-16 sm:py-20 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 md:space-y-8">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Why Choose <br />
              <span className="text-[#c8020e]">
                Aishwarya Residences?
              </span>
            </h2>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
              At Aishwarya Residences, we don’t just offer accommodation — we
              create a space that truly feels like home. Designed for comfort,
              safety, and ease.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
              Clean living spaces, essential amenities, and reliable management
              ensure a smooth, worry-free stay.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
              Blending affordability with quality, where convenience meets calm.
            </p>
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              touchRatio={1}
              grabCursor={true}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="w-full"
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  
                  {/* ✅ FIXED HEIGHT CARD */}
                  <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden group">
                    
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={item.id === 1} // optional for first image
                    />

                    {/* GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 left-3 sm:left-4 md:left-8 right-3 sm:right-4 md:right-8 text-white">
                      
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 md:mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-200 mb-2 md:mb-3 leading-tight">
                        {item.desc}
                      </p>

                      <button className="border border-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm hover:bg-white hover:text-[#c8020e] transition">
                        Read More
                      </button>
                    </div>
                  </div>

                </SwiperSlide>
              ))}
            </Swiper>

            {/* RIGHT ARROW */}
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