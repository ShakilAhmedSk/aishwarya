"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Testimonials.css";

type Testimonial = {
  text: string;
  name: string;
  location: string;
  image: string;
};

const data: Testimonial[] = [
  {
    text: "Moving to Bangalore for work was not easy, but this Luxury Living  gave me a homely environment and amazing community.",
    name: "Kritika",
    location: "Indiranagar",
    image: "/Kritika.jpeg",
  },
  {
    text: "Clean rooms, great food, and very friendly people. Highly recommended!",
    name: "Amit Verma",
    location: "Whitefield",
    image: "/rm2.avif",
  },
  {
    text: "Best decision to stay here. Safe, comfortable, and well maintained.",
    name: "Chaitali",
    location: "Koramangala",
    image: "/chaitali.jpeg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const prevSlide = () => {
    setIndex(index === 0 ? data.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="testimonial-section">
      <h2>Resident stories</h2>
      <p className="subtitle">
        Take a look at what our Bangalore residents say about us
      </p>

      <div
        className="testimonial-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* LEFT */}
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>

        {/* SLIDER */}
        <div className="slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {data.map((item, i) => (
              <div className="testimonial-card" key={i}>
                <div className="text">
                  <p>"{item.text}"</p>
                  <h4>
                    {item.name}, {item.location}
                  </h4>
                </div>

                <div className="image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
}