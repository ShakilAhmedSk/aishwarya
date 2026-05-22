"use client";

import { useState } from "react";
import Image from "next/image";
import LeadPopup from "../LeadForm/LeadPopup";
import AishwaryaContact from "../community/AishwaryaContact";

import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaBed,
  FaWifi,
  FaShieldAlt,
  FaUtensils,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import "./OurLocations.css";

interface LocationType {
  title: string;
  area: string;
  subtitle: string;
  images: string[];
  desc: string;
}

const locations: LocationType[] = [
  {
    title: "Aishwarya Aurellia",
    area: "S.G Palya, Bangalore",
    subtitle: "Near Christ Front Gate",

    images: [
      "/aurellia/a1.png",
      "/aurellia/a2.png",
      "/aurellia/a3.png",
      "/aurellia/a4.png",
    ],

    desc: "Premium luxury living space with spacious interiors, modern amenities, premium comfort, and vibrant community experience.",
  },

  {
    title: "Aishwarya Solaris",
    area: "Venkateshwara Layout, S.G Palya",
    subtitle: "Premium Student Living",

    images: [
      "/solaris/1.jpeg",
      "/solaris/2.jpeg",
      "/solaris/1rk.jpeg",
      "/solaris/common.jpeg",
    ],

    desc: "Modern lifestyle-focused living with premium rooms, elegant design, comfort, and peaceful surroundings.",
  },

  {
    title: "Aishwarya 9",
    area: "Dairy Colony, Adugodi",
    subtitle: "Near Christ Front Gate",

    images: [
      "/Aishwarya9/as9-1.jpeg",
      "/Aishwarya9/as9-2.jpeg",
      "/Aishwarya9/as9-3.jpeg",
      "/Aishwarya9/as9-4.jpeg",
    ],

    desc: "Safe and comfortable premium property designed for students and professionals seeking quality living.",
  },

  {
    title: "Aishwarya Sunshine",
    area: "Bharathi Layout, S.G Palya",
    subtitle: "Near Christ Back Gate",

    images: [
      "/sunshine/su1.jpeg",
      "/sunshine/su2.jpeg",
      "/sunshine/common.jpeg",
    ],

    desc: "Bright interiors, peaceful atmosphere, and modern amenities crafted for comfortable community living.",
  },

  {
    title: "Aishwarya Gardenia",
    area: "Bhavani Nagar, S.G Palya",
    subtitle: "Near Christ Back Gate",

    images: [
      "/Gardenia/1.jpeg",
      "/Gardenia/2.jpeg",
      "/Gardenia/3.jpeg",
      "/Gardenia/common.jpeg",
    ],

    desc: "Luxury-inspired living with premium comfort, safety, and vibrant student-friendly surroundings.",
  },
];

export default function OurLocations() {
  const [selected, setSelected] = useState<LocationType | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const [open, setOpen] = useState(false);

  const nextImage = () => {
    if (!selected) return;

    setSelectedIndex((prev) => (prev + 1) % selected.images.length);
  };

  const prevImage = () => {
    if (!selected) return;

    setSelectedIndex((prev) =>
      prev === 0 ? selected.images.length - 1 : prev - 1,
    );
  };

  return (
    <section className="relative bg-[#f8f4f4] py-24 overflow-hidden">
      {/* TOP BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c8020e]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <div className="text-center mb-20">
          <span
            className="inline-block bg-[#c8020e]/10
            text-[#c8020e] px-5 py-2 rounded-full
            text-sm font-semibold mb-5"
          >
            Premium Living Locations
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover Our <span className="text-[#c8020e]">Luxury Spaces</span>
          </h2>

          <p
            className="mt-5 text-gray-600
            max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Experience premium student living crafted with comfort, community,
            luxury interiors, and modern amenities near Christ University.
          </p>
        </div>

        {/* LOCATION CARDS */}
        <div className="space-y-24">
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative group">
                <div
                  className="absolute -inset-4
                  bg-gradient-to-r
                  from-[#c8020e]/20
                  to-pink-500/10
                  blur-2xl opacity-70"
                ></div>

                <div
                  className="relative overflow-hidden
                  rounded-[32px] shadow-2xl"
                >
                  <Image
                    src={loc.images[0]}
                    alt={loc.title}
                    width={900}
                    height={700}
                    className="w-full h-[420px]
                    object-cover group-hover:scale-105
                    transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div
                    className="absolute inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent"
                  ></div>

                  {/* BADGE */}
                  <div
                    className="absolute top-5 left-5
                    bg-white/90 backdrop-blur-md
                    px-4 py-2 rounded-full
                    text-sm font-semibold
                    text-[#c8020e]"
                  >
                    Premium Property
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                <span
                  className="inline-flex items-center gap-2
                  text-[#c8020e] font-semibold mb-4"
                >
                  <FaMapMarkerAlt />

                  {loc.area}
                </span>

                <h3
                  className="text-4xl font-bold
                  text-gray-900 leading-tight"
                >
                  {loc.title}
                </h3>

                {loc.subtitle && (
                  <p
                    className="text-lg text-gray-500
                    mt-3"
                  >
                    {loc.subtitle}
                  </p>
                )}

                <p
                  className="text-gray-600
                  leading-relaxed mt-6 text-lg"
                >
                  {loc.desc}
                </p>

                {/* FEATURES */}
                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-5 mt-8">
                  <div
                    className="bg-gradient-to-br
                       from-white to-[#fff5f5]
                       rounded-2xl p-5
                       border border-[#f3d6d8]
                       shadow-md hover:shadow-xl
                       transition duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl
                         bg-[#c8020e]/10
                         flex items-center justify-center
                         mb-4"
                    >
                      <FaBed className="text-[#c8020e] text-xl" />
                    </div>

                    <h4 className="font-bold text-gray-900 text-lg">
                      Premium Rooms
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      Spacious luxury interiors
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br
                               from-white to-[#fff5f5]
                               rounded-2xl p-5
                               border border-[#f3d6d8]
                               shadow-md hover:shadow-xl
                               transition duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl
                             bg-[#c8020e]/10
                             flex items-center justify-center
                             mb-4"
                    >
                      <FaWifi className="text-[#c8020e] text-xl" />
                    </div>

                    <h4 className="font-bold text-gray-900 text-lg">
                      High Speed WiFi
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      Unlimited internet access
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br
                             from-white to-[#fff5f5]
                             rounded-2xl p-5
                             border border-[#f3d6d8]
                             shadow-md hover:shadow-xl
                             transition duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl
                                 bg-[#c8020e]/10
                                 flex items-center justify-center
                                 mb-4"
                    >
                      <FaShieldAlt className="text-[#c8020e] text-xl" />
                    </div>

                    <h4 className="font-bold text-gray-900 text-lg">
                      Secure Living
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      Safe & monitored property
                    </p>
                  </div>

                  <div
                    className="bg-gradient-to-br
                           from-white to-[#fff5f5]
                           rounded-2xl p-5
                           border border-[#f3d6d8]
                           shadow-md hover:shadow-xl
                           transition duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl
                           bg-[#c8020e]/10
                           flex items-center justify-center
                           mb-4"
                    >
                      <FaUtensils className="text-[#c8020e] text-xl" />
                    </div>

                    <h4 className="font-bold text-gray-900 text-lg">
                      Healthy Food
                    </h4>

                    <p className="text-sm text-gray-600 mt-1">
                      Nutritious daily meals
                    </p>
                  </div>
                </div>
                {/* BUTTON */}
                <button
                  onClick={() => {
                    setSelected(loc);
                    setSelectedIndex(0);
                  }}
                  className="mt-10 inline-flex items-center gap-3
                  bg-[#c8020e] hover:bg-[#b5232d]
                  text-white px-8 py-4 rounded-2xl
                  transition duration-300 shadow-lg"
                >
                  View Luxury Details
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[9999]
          bg-black/80 backdrop-blur-sm
          flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-6xl
            rounded-[32px] overflow-hidden
            relative grid lg:grid-cols-2"
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 z-40
                w-12 h-12 rounded-full
                bg-white text-black
                border border-gray-200
                shadow-2xl
                flex items-center justify-center
                hover:bg-[#c8020e]
                hover:text-white
                transition duration-300"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* GALLERY */}
            <div className="relative min-h-[400px] bg-black">
              <Image
                src={selected.images[selectedIndex]}
                alt={selected.title}
                fill
                className="object-cover"
              />

              {/* LEFT */}
              <button
                onClick={prevImage}
                className="absolute left-5 top-1/2
                -translate-y-1/2
                w-12 h-12 rounded-full
                bg-white text-black
                border border-gray-200
                shadow-2xl z-30
                flex items-center justify-center
                hover:bg-[#c8020e]
                hover:text-white
                transition duration-300"
              >
                <FaChevronLeft className="text-lg" />
              </button>

              {/* RIGHT */}
              <button
                onClick={nextImage}
                className="absolute right-5 top-1/2
                  -translate-y-1/2
                  w-12 h-12 rounded-full
                  bg-white text-black
                  border border-gray-200
                  shadow-2xl z-30
                  flex items-center justify-center
                  hover:bg-[#c8020e]
                  hover:text-white
                  transition duration-300"
              >
                <FaChevronRight className="text-lg" />
              </button>

              {/* THUMBNAILS */}
              <div
                className="absolute bottom-5 left-1/2
                -translate-x-1/2 flex gap-3 z-20"
              >
                {selected.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative w-16 h-16
                      rounded-xl overflow-hidden
                      border-2 transition ${
                        selectedIndex === index
                          ? "border-white scale-105"
                          : "border-transparent opacity-80"
                      }`}
                  >
                    <Image
                      src={img}
                      alt="thumb"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-10 flex flex-col justify-center">
              <span
                className="inline-block
                bg-[#c8020e]/10 text-[#c8020e]
                px-5 py-2 rounded-full
                text-sm font-semibold w-fit"
              >
                Luxury Student Living
              </span>

              <h2
                className="text-4xl font-bold
                text-gray-900 mt-6"
              >
                {selected.title}
              </h2>

              <p className="text-lg text-gray-500 mt-3">{selected.area}</p>

              {selected.subtitle && (
                <p className="text-gray-400 mt-2">{selected.subtitle}</p>
              )}

              <p
                className="text-gray-600 leading-relaxed
                mt-6 text-lg"
              >
                {selected.desc}
              </p>

              {/* AMENITIES */}
              <div className="grid grid-cols-2 gap-5 mt-8">
                <div
                  className="bg-gradient-to-br
    from-white to-[#fff5f5]
    rounded-2xl p-5
    border border-[#f3d6d8]
    shadow-md hover:shadow-xl
    transition duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl
                               bg-[#c8020e]/10
                               flex items-center justify-center
                               mb-4"
                  >
                    <FaBed className="text-[#c8020e] text-xl" />
                  </div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    Spacious Rooms
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Luxury interiors & comfort
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br
                           from-white to-[#fff5f5]
                           rounded-2xl p-5
                           border border-[#f3d6d8]
                           shadow-md hover:shadow-xl
                           transition duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl
                             bg-[#c8020e]/10
                             flex items-center justify-center
                             mb-4"
                  >
                    <FaWifi className="text-[#c8020e] text-xl" />
                  </div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    Unlimited WiFi
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Fast seamless connectivity
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br
                             from-white to-[#fff5f5]
                             rounded-2xl p-5
                             border border-[#f3d6d8]
                             shadow-md hover:shadow-xl
                             transition duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl
                               bg-[#c8020e]/10
                               flex items-center justify-center
                               mb-4"
                  >
                    <FaShieldAlt className="text-[#c8020e] text-xl" />
                  </div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    24/7 Security
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Safe monitored environment
                  </p>
                </div>

                <div
                  className="bg-gradient-to-br
                   from-white to-[#fff5f5]
                   rounded-2xl p-5
                   border border-[#f3d6d8]
                   shadow-md hover:shadow-xl
                   transition duration-300"
                >
                  <div
                    className="w-12 h-12 rounded-xl
                             bg-[#c8020e]/10
                             flex items-center justify-center
                             mb-4"
                  >
                    <FaUtensils className="text-[#c8020e] text-xl" />
                  </div>

                  <h4 className="font-bold text-gray-900 text-lg">
                    Healthy Meals
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    Hygienic nutritious food
                  </p>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#c8020e]
                  hover:bg-[#b5232d]
                  px-8 py-4 rounded-2xl
                  text-white transition"
                >
                  Book Now
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="bg-white
                    border border-gray-300
                    text-gray-800 font-medium
                    hover:bg-gray-100
                    hover:border-gray-400
                    px-8 py-4 rounded-2xl
                    shadow-md hover:shadow-lg
                    transition duration-300"
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

      {/* CONTACT */}
      <div className="mt-28">
        <AishwaryaContact />
      </div>
    </section>
  );
}
