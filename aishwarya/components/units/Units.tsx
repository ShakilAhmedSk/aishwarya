"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import LeadPopup from "../LeadForm/LeadPopup";

import { FaBuilding, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type TabType =
  | "Aishwarya Aurellia"
  | "Aishwarya Estrella"
  | "Aishwarya Solaris"
  | "Aishwarya 9"
  | "Aishwarya Sunshine"
  | "Aishwarya Gardenia"
  | "Upcoming Branches";

type PropertyType = {
  id: number;
  location: string;
  isNew?: boolean;
  tag: string;
  title: string;
  image: string;
  gallery?: string[];
};

const propertyData: Record<TabType, PropertyType[]> = {
  "Aishwarya Aurellia": [
    {
      id: 1,
      location:
        "1st cross, Venkateshwara Layout, S.G Palya. Near Christ University Front Gate",
      isNew: false,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/aurellia/a1.png",
    },
    {
      id: 2,
      location:
        "1st cross, Venkateshwara Layout, S.G Palya. Near Christ University Front Gate",
      isNew: false,
      tag: "Private",
      title: "Double Sharing Room",
      image: "/aurellia/a2.png",
    },
    {
      id: 3,
      location:
        "1st cross, Venkateshwara Layout, S.G Palya. Near Christ University Front Gate",
      isNew: false,
      tag: "Private",
      title: "Community Area",
      image: "/aurellia/a3.png",
    },
    {
      id: 4,
      location:
        "1st cross, Venkateshwara Layout, S.G Palya. Near Christ University Front Gate",
      tag: "Living area",
      title: "Living area ",
      image: "/aurellia/a4.png",
    },
  ],

  "Aishwarya Estrella": [
    {
      id: 1,
      location:
        "39/8, 6th cross rd, Bharati Layout, S.G Palya. Near Christ University Back Gate.",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/Estrella/1.jpeg",
    },
    {
      id: 2,
      location:
        "39/8, 6th cross rd, Bharati Layout, S.G Palya. Near Christ University Back Gate.",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/Estrella/2.jpeg",
    },
  ],

  "Aishwarya Solaris": [
    {
      id: 1,
      location:
        "2nd cross, Venkateshwara Layout. Near Christ University Front Gate",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/solaris/1.jpeg",
    },
    {
      id: 2,
      location:
        "2nd cross, Venkateshwara Layout. Near Christ University Front Gate",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/solaris/2.jpeg",
    },
    {
      id: 3,
      location:
        "2nd cross, Venkateshwara Layout. Near Christ University Front Gate",
      tag: "Studio",
      title: "1RK",
      image: "/solaris/1rk.jpeg",
    },
    {
      id: 4,
      location:
        "2nd cross, Venkateshwara Layout. Near Christ University Front Gate",
      tag: "Common Area",
      title: "Common Area",
      image: "/solaris/common.jpeg",
    },
  ],

  "Aishwarya 9": [
    {
      id: 1,
      location:
        "building no 9, 2nd cross rd, dairy colony, adugodi. Near Christ University Front Gate",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/Aishwarya9/as9-1.jpeg",
    },
    {
      id: 2,
      location:
        "building no 9, 2nd cross rd, dairy colony, adugodi. Near Christ University Front Gate",
      tag: "Private",
      title: "Double Sharing Room",
      image: "/Aishwarya9/as9-2.jpeg",
    },
    {
      id: 3,
      location:
        "building no 9, 2nd cross rd, dairy colony, adugodi. Near Christ University Front Gate",
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/Aishwarya9/as9-3.jpeg",
    },
    {
      id: 4,
      location:
        "building no 9, 2nd cross rd, dairy colony, adugodi. Near Christ University Front Gate",
      tag: "Common Area",
      title: "Common Area",
      image: "/Aishwarya9/as9-4.jpeg",
    },
  ],

  "Aishwarya Sunshine": [
    {
      id: 1,
      location:
        "9, 1st cross rd, Bharati Layout, S.g palya. Near Christ University Back Gate",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/sunshine/su1.jpeg",
    },
    {
      id: 2,
      location:
        "9, 1st cross rd, Bharati Layout, S.g palya. Near Christ University Back Gate",
      isNew: false,
      tag: "Private",
      title: "Double Sharing Room",
      image: "/sunshine/su2.jpeg",
    },
    {
      id: 3,
      location:
        "9, 1st cross rd, Bharati Layout, S.g palya. Near Christ University Back Gate",
      isNew: false,
      tag: "Private",
      title: "Triple Sharing Room",
      image: "/sunshine/su3.jpeg",
    },
    {
      id: 4,
      location:
        "9, 1st cross rd, Bharati Layout, S.g palya. Near Christ University Back Gate",
      isNew: false,
      tag: "Common Area",
      title: "Common Area",
      image: "/sunshine/common.jpeg",
    },
  ],

  "Aishwarya Gardenia": [
    {
      id: 1,
      location:
        "2, 7 th cross rd, Bhavani nagar, S.G Palya. Near Christ University Back Gate.",
      isNew: true,
      tag: "Studio",
      title: "Single Sharing Room",
      image: "/gardenia/1.jpeg",
    },
    {
      id: 2,
      location:
        "2, 7 th cross rd, Bhavani nagar, S.G Palya. Near Christ University Back Gate.",
      isNew: false,
      tag: "Private",
      title: "Double Sharing Room",
      image: "/gardenia/2.jpeg",
    },
    // {
    //   id: 3,
    //   location:
    //     "2, 7 th cross rd, Bhavani nagar, S.G Palya. Near Christ University Back Gate.",
    //   isNew: false,
    //   tag: "Private",
    //   title: "Triple Sharing Room",
    //   image: "/gardenia/3.jpeg",
    // },
    {
      id: 4,
      location:
        "2, 7 th cross rd, Bhavani nagar, S.G Palya. Near Christ University Back Gate.",
      isNew: false,
      tag: "Common Area",
      title: "Common Area",
      image: "/gardenia/common.jpeg",
    },
  ],

  "Upcoming Branches": [],
};

export default function Units() {
  const [activeTab, setActiveTab] = useState<TabType>("Aishwarya Aurellia");

  const [selectedCard, setSelectedCard] = useState<PropertyType | null>(null);

  const [open, setOpen] = useState(false);

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
    "Aishwarya Gardenia",
    "Upcoming Branches",
  ];

  return (
    <section className="bg-[#f1e7e7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Our{" "}
            <span className="text-[#c8020e]">Premium Luxury Living Spaces</span>
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
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth px-12"
          >
            {propertyData[activeTab].map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCard(item)}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
                bg-white rounded-[20px] shadow-sm hover:shadow-md
                transition duration-300 cursor-pointer"
              >
                {/* IMAGE */}
                <div className="relative h-[160px] sm:h-[180px] md:h-[200px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
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
                        {item.location}
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

      {/* PROPERTY POPUP */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black/70 z-[9999]
          flex items-center justify-center p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-5xl
            rounded-[24px] overflow-hidden
            relative grid md:grid-cols-2"
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-5 right-5 z-30
              w-11 h-11 rounded-full
              bg-white text-black
              shadow-xl border border-gray-200
              flex items-center justify-center
              text-lg font-semibold
              hover:bg-[#c8020e]
              hover:text-white
              transition duration-300"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="relative min-h-[320px]">
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 flex flex-col justify-center">
              <span
                className="bg-[#c8020e]
                text-white text-xs
                px-4 py-2 rounded-full
                w-fit mb-5"
              >
                {selectedCard.tag}
              </span>

              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCard.title}
              </h2>

              <p className="text-gray-600 mt-5 leading-relaxed">
                {selectedCard.location}
              </p>

              <p className="text-gray-500 mt-5 text-sm leading-relaxed">
                Experience premium luxury student living with modern interiors,
                comfort, security, and vibrant community spaces near Christ
                University.
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#c8020e]
                  hover:bg-[#b5232d]
                  px-6 py-3 rounded-xl
                  text-white cursor-pointer transition"
                >
                  Book Now
                </button>

                <button
                  onClick={() => setSelectedCard(null)}
                  className="bg-gray-100
                   hover:bg-gray-200
                   text-gray-800
                   px-6 py-3 rounded-xl
                   cursor-pointer transition
                   font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LEAD POPUP */}
      {open && <LeadPopup onClose={() => setOpen(false)} open={open} />}
    </section>
  );
}
