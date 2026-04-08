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
    <section className="bg-[#f1e7e7] text-black py-24 md:py-32 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-black">
              Why Choose <br /> 
              <span className="text-[#c8020e]">Aishwarya Residences?</span>
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              At Aishwarya Residences, we don’t just offer PG accommodation — we
              create a space that truly feels like home. With multiple locations
              for both boys and girls, our residences are thoughtfully designed
              for comfort, safety, and everyday ease.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Where mornings begin with peace and nights end with comfort, every
              corner is maintained with care and purpose. From clean living
              spaces to essential amenities and reliable management, we ensure a
              stay that is smooth and worry-free.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              Blending affordability with quality, Aishwarya Residences is where
              convenience meets calm — making everyday living effortless.
            </p>
          </div>

          {/* RIGHT SLIDER (UNCHANGED LAYOUT) */}
          <div className="relative w-[120%] md:translate-x-20 lg:translate-x-32">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              speed={900}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full"
            >
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden group">
                    
                    {/* IMAGE */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* GRADIENT (slightly lighter) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-200 mb-4">{item.desc}</p>

                      <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#c8020e] transition">
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* RIGHT ARROW */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 
              bg-[#c8020e] text-white p-4 rounded-full 
              border border-white/30 hover:bg-red-700 transition z-10"
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