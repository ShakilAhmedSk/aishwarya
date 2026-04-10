import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

const properties = [
  {
    id: 1,
    location: "S.G palya Bangalore Christ front gate Pg",
    isNew: true,
    tag: "Studio",
    title: "Single Sharing Room",
    image: "/pgr.jpg",
  },
  {
    id: 2,
    location: "S.G palya Bangalore Christ front gate Pg",
    tag: "Private",
    title: "Double sharing Room",
    image: "/pgr2.jpg",
  },
  {
    id: 3,
    location: "S.G palya Bangalore Christ front gate Pg",
    tag: "Private",
    title: "Triple Sharing Room",
    image: "/pgr3.jpg",
  },
  {
    id: 4,
    location: "S.G palya Bangalore Christ front gate Pg",
    tag: "Studio",
    title: "1RK",
    image: "/pgr4.jpg",
  },
];

export default function PropertyCards() {
  return (
    <section className="bg-[#f1e7e7] py-12 sm:py-14 md:py-16 flex justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6">

        {/* 🔥 CARDS */}
        <div className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-2">
          {properties.map((item) => (
            <div
              key={item.id}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] bg-white rounded-[20px] shadow-sm hover:shadow-md transition duration-300"
            >
              {/* Image */}
              <div className="relative h-[160px] sm:h-[180px] md:h-[200px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-[20px]"
                />

                <span className="absolute top-3 right-3 bg-[#c8020e] text-white text-[10px] sm:text-xs px-3 sm:px-4 py-1 rounded-full font-medium">
                  Available now
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  
                  {/* Location */}
                  <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-500">
                    <FaBuilding className="text-[#c8020e] mt-1" />
                    
                    <span className="line-clamp-2 text-left">
                      {item.location}{" "}
                      {item.isNew && (
                        <span className="text-gray-400">(NEW)</span>
                      )}
                    </span>
                  </div>

                  {/* Tag */}
                  <span className="bg-[#c8020e] text-white text-[10px] sm:text-xs px-3 py-1 rounded-full whitespace-nowrap">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-gray-800 leading-snug text-left">
                  {item.title}
                </h3>

                <div className="mt-3 sm:mt-4 border-t border-gray-200"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}