"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  FaBuilding,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

type TabType =
  | "Aishwarya Aurellia"
  | "Aishwarya Estrella"
  | "Aishwarya Solaris"
  | "Aishwarya 9"
  | "Aishwarya Sunshine"
  | "Upcoming Branches";

type PropertyType = {
  id: number;
  location: string;
  isNew?: boolean;
  tag: string;
  title: string;
  image: string;
};

const propertyData: Record<TabType, PropertyType[]> = {
  "Aishwarya Aurellia": [
    {
      id: 1,
      location: "S.g palya, bhavani nagar Christ back gate Pg",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/aurellia/a1.png",
    },
    {
      id: 2,
      location: "S.g palya, bhavani nagar Christ back gate Pg",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/aurellia/a2.png",
    },
    {
      id: 3,
      location: "S.g palya, bhavani nagar Christ back gate Pg",
      tag: "Private",
      title: "Community Area",
      image: "/aurellia/a3.png",
    },
    {
      id: 4,
      location: "S.g palya, bhavani nagar Christ back gate Pg",
      tag: "Studio",
      title: "Common Area",
      image: "/aurellia/a4.png",
    },
  ],

  "Aishwarya Estrella": [
    {
      id: 1,
      location: "S.G palya Bangalore Christ front gate Pg",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/estrella/e1.jpg",
    },
    {
      id: 2,
      location: "S.G palya Bangalore Christ front gate Pg",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/estrella/e2.jpg",
    },
    {
      id: 3,
      location: "S.G palya Bangalore Christ front gate Pg",
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/estrella/e3.jpg",
    },
    {
      id: 4,
      location: "S.G palya Bangalore Christ front gate Pg",
      tag: "Studio",
      title: "Common Area",
      image: "/estrella/e4.jpg",
    },
  ],

  "Aishwarya Solaris": [
    {
      id: 1,
      location: "S.g palya Venkateshwara layout Pg",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/solaris/s1.jpg",
    },
    {
      id: 2,
      location: "S.g palya Venkateshwara layout Pg",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/solaris/s2.jpg",
    },
    {
      id: 3,
      location: "S.g palya Venkateshwara layout Pg",
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/solaris/s3.jpg",
    },
    {
      id: 4,
      location: "S.g palya Venkateshwara layout Pg",
      tag: "Studio",
      title: "1RK",
      image: "/solaris/s4.jpg",
    },
  ],

  "Aishwarya 9": [
    {
      id: 1,
      location: "Dairy colony, Adugodi Pg",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/a9/n1.jpg",
    },
    {
      id: 2,
      location: "Dairy colony, Adugodi Pg",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/a9/n2.jpg",
    },
    {
      id: 3,
      location: "Dairy colony, Adugodi Pg",
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/a9/n3.jpg",
    },
    {
      id: 4,
      location: "Dairy colony, Adugodi Pg",
      tag: "Studio",
      title: "1RK",
      image: "/a9/n4.jpg",
    },
  ],

  "Aishwarya Sunshine": [
    {
      id: 1,
      location: "S.g palya, bharathi layout Pg",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/sunshine/su1.jpg",
    },
    {
      id: 2,
      location: "S.g palya, bharathi layout Pg",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/sunshine/su2.jpg",
    },
    {
      id: 3,
      location: "S.g palya, bharathi layout Pg",
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/sunshine/su3.jpg",
    },
    {
      id: 4,
      location: "S.g palya, bharathi layout Pg",
      tag: "Studio",
      title: "1RK",
      image: "/sunshine/su4.jpg",
    },
  ],

  "Upcoming Branches": [],
};

export default function Units() {
  const [activeTab, setActiveTab] =
    useState<TabType>("Aishwarya Aurellia");

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const tabs: TabType[] = [
    "Aishwarya Aurellia",
    "Aishwarya Estrella",
    "Aishwarya Solaris",
    "Aishwarya 9",
    "Aishwarya Sunshine",
    "Upcoming Branches",
  ];

  return (
    <section className="bg-[#f1e7e7] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Our{" "}
            <span className="text-[#c8020e]">
              Premium Luxury Living Spaces
            </span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover thoughtfully designed living spaces near Christ College,
            Bangalore.
          </p>
        </div>

        {/* TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border
              ${
                activeTab === tab
                  ? "bg-[#c8020e] text-white border-[#c8020e]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-[#c8020e] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg w-10 h-10 rounded-full
            flex items-center justify-center
            hover:bg-[#c8020e] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            bg-white shadow-lg w-10 h-10 rounded-full
            flex items-center justify-center
            hover:bg-[#c8020e] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          {/* CARDS */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth px-12 pb-2"
          >
            {propertyData[activeTab].map((item) => (
              <div
                key={item.id}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
                bg-white rounded-[20px] shadow-sm hover:shadow-md transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-[160px] sm:h-[180px] md:h-[200px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-[20px]"
                  />

                  <span
                    className="absolute top-3 right-3 bg-[#c8020e]
                    text-white text-[10px] sm:text-xs
                    px-3 sm:px-4 py-1 rounded-full font-medium"
                  >
                    Available now
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">

                    {/* LOCATION */}
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-500">
                      <FaBuilding className="text-[#c8020e] mt-1" />

                      <span className="line-clamp-2 text-left">
                        {item.location}{" "}
                        {item.isNew && (
                          <span className="text-gray-400">(NEW)</span>
                        )}
                      </span>
                    </div>

                    {/* TAG */}
                    <span className="bg-[#c8020e] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {item.tag}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-gray-800 leading-snug text-left">
                    {item.title}
                  </h3>

                  <div className="mt-3 sm:mt-4 border-t border-gray-200"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}