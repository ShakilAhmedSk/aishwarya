"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-24">
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/pg.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🧩 Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-between text-white">
        
        {/* LEFT SIDE */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Luxury PG Living <br /> in Bengaluru
          </h1>

          <p className="text-gray-300 max-w-md">
            Premium rooms, healthy food, and a vibrant community.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-[#c8020e] hover:bg-[#b5232d] px-6 py-3 rounded-xl">
              Book Now
            </button>

            <button className="border border-white px-6 py-3 rounded-xl">
              Explore
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:block max-w-sm text-right">
          <p className="text-lg text-gray-200">
            A premium co-living experience designed for comfort,
            convenience, and community.
          </p>
        </div>
      </div>

    </section>
  );
}