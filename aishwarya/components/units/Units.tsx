import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

const properties = [
  {
    id: 1,
    location: "Indiranagar, Bangalore",
    isNew: true,
    tag: "Studio",
    title: "Cozy Studio",
    image: "/pgr.jpg",
  },
  {
    id: 2,
    location: "Whitefield, Bangalore",
    tag: "Private",
    title: "Furnished Apartment – 1 Bed 1 Bath (4F)",
    image: "/pgr2.jpg",
  },
  {
    id: 3,
    location: "Koramangala, Bangalore",
    tag: "Private",
    title: "Furnished Apartment – 1 Bed 1 Bath (2R)",
    image: "/pgr3.jpg",
  },
  {
    id: 4,
    location: "HSR Layout, Bangalore",
    tag: "Studio",
    title: "Penthouse Studio",
    image: "/pgr4.jpg",
  },
];

export default function PropertyCards() {
  return (
    <section className="bg-[#f1e7e7] py-16 flex justify-center">
      <div className="w-full max-w-7xl px-6">

        {/* 🔥 HEADING */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Our <span className="text-[#c8020e]">Premium PG Spaces</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Discover thoughtfully designed living spaces across Bangalore. 
            From cozy studios to fully furnished private rooms, find a place 
            that perfectly fits your lifestyle and comfort.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {properties.map((item) => (
            <div
              key={item.id}
              className="w-[350px] bg-white rounded-[22px] shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Image */}
              <div className="relative h-[200px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-[22px]"
                />

                <span className="absolute top-4 right-4 bg-[#c8020e] text-white text-xs px-4 py-1.5 rounded-full font-medium">
                  Available now
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaBuilding className="text-[#c8020e]" />
                    <span>
                      {item.location}{" "}
                      {item.isNew && (
                        <span className="text-gray-400">(NEW)</span>
                      )}
                    </span>
                  </div>

                  <span className="bg-[#c8020e] text-white text-xs px-4 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-[20px] font-semibold text-gray-800 leading-snug">
                  {item.title}
                </h3>

                <div className="mt-4 border-t border-gray-200"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}