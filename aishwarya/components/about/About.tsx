"use client";

import Image from "next/image";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// ✅ TYPE FIX (NO ANY)
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function About() {
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
    <section className="bg-black text-white py-24 md:py-32 overflow-hidden">
      
      {/* 🔥 MAIN CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* 🔥 LEFT CONTENT */}
          <div className="space-y-6">
            
            <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Why Aishwarya <br /> Residences?
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              It’s more than just a PG. Aishwarya Residences offers a premium 
              co-living experience with fully furnished rooms, healthy meals, 
              and a vibrant community designed for modern living.
            </p>

          </div>

          {/* 🔥 RIGHT SIDE (WIDE SLIDER) */}
          <div className="relative w-[120%] md:translate-x-20 lg:translate-x-32">
            
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={2.4}
              loop
              speed={800}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".custom-next",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                },
                640: {
                  slidesPerView: 1.6,
                },
                1024: {
                  slidesPerView: 2.4,
                },
              }}
              className="w-full"
            >
              
              {/* 🔥 SLIDES */}
              {slides.map((item) => (
                <SwiperSlide key={item.id}>
                  
                  <div className="relative h-[320px] md:h-[450px] rounded-2xl overflow-hidden group cursor-pointer">
                    
                    {/* IMAGE */}
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* GRADIENT */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-3">
                      
                      <h3 className="text-xl md:text-2xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-300">
                        {item.desc}
                      </p>

                      <button className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
                        Read More
                      </button>

                    </div>

                    {/* OPTIONAL HOVER ARROW */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                        →
                      </div>
                    </div>

                  </div>

                </SwiperSlide>
              ))}

            </Swiper>

            {/* 🔥 SINGLE RIGHT ARROW */}
            <button
              className="custom-next absolute right-4 top-1/2 -translate-y-1/2 
              bg-white/20 backdrop-blur-md p-4 rounded-full 
              border border-white/30 hover:bg-white/30 transition z-10"
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