"use client";

import Image from "next/image";

const rooms = [
  {
    title: "2 Sharing Room (Double + Single)",
    location: "Salt Lake, Kolkata",
    price: "₹12,000",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Premium Rooftop Room",
    location: "New Town, Kolkata",
    price: "₹15,000",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
  },
  {
    title: "Room with Balcony",
    location: "Rajarhat, Kolkata",
    price: "₹13,500",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
  {
    title: "Deluxe 2 Sharing Room",
    location: "Park Street, Kolkata",
    price: "₹14,000",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
];

export default function RoomCards() {
  return (
    <section className="py-16 px-6 bg-[#f9f6f6]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[#c8020e] mb-10">
          Available Rooms in Kolkata
        </h2>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden group"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={room.img}
                  alt={room.title}
                  width={400}
                  height={250}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Badge */}
                <span className="absolute top-4 right-4 bg-[#c8020e] text-white text-xs px-3 py-1 rounded-full shadow">
                  Available now
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                {/* Location + Tag */}
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-gray-500 flex items-center gap-2">
                    <i className="fas fa-location-dot text-[#c8020e]"></i>
                    {room.location}
                  </span>

                  <span className="bg-[#f0d5e3] text-[#c8020e] text-xs px-3 py-1 rounded-full">
                    Private
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                  {room.title}
                </h3>

                {/* Divider */}
                <div className="border-t border-gray-200 my-3"></div>

                {/* Features */}
                <div className="flex justify-between text-sm text-gray-600 mb-4">

                  <span className="flex items-center gap-1">
                    <i className="fas fa-bed text-[#c8020e]"></i> 1
                  </span>

                  <span className="flex items-center gap-1">
                    <i className="fas fa-bath text-[#c8020e]"></i> 1
                  </span>

                  <span className="flex items-center gap-1">
                    <i className="fas fa-user text-[#c8020e]"></i> 2
                  </span>

                </div>

                {/* Price */}
                <p className="text-sm text-gray-600">
                  From{" "}
                  <span className="text-lg font-semibold text-[#c8020e]">
                    {room.price}
                  </span>{" "}
                  /month
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
