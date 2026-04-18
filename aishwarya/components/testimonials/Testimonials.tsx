"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Testimonials.css";

type Testimonial = {
  text: string;
  name: string;
  image: string;
};

const data: Testimonial[] = [
  {
    text: "Moving to Bangalore for work was not easy, but this Luxury Living gave me a homely environment and a welcoming community. The rooms are well maintained, the common areas are clean, and the management is always supportive. It truly feels like a comfortable and reliable place to stay.",
    name: "Kritika",
    image: "/Kritika.jpeg",
  },
  {
    text: "This has been one of the most comfortable living experiences for me. The cleanliness is consistent, the food is good, and everything is managed smoothly. The friendly environment and sense of safety make it a great place for anyone looking for a peaceful stay.",
    name: "Amit Verma",
    image: "/rm2.avif",
  },
  {
    text: "Choosing to stay here was a great decision. The property is well maintained, the atmosphere is calm, and the amenities make daily life easy. It’s not just about staying, it feels like a place where you can truly relax and feel at home.",
    name: "Chaitali",
    image: "/chaitali.jpeg",
  },
];
export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

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
        <button className="arrow left" onClick={prevSlide}>
          &#8249;
        </button>

        <div className="slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {data.map((item, i) => (
              <div className="testimonial-card" key={i}>
                
                {/* TEXT SECTION */}
                <div className="text">
                  <div className="text-top">
                    <p>"{item.text}"</p>
                  </div>

                  <div className="text-bottom">
                    <h4>{item.name}</h4>

                    <div className="rating">
                      ⭐⭐⭐⭐☆ <span>4.5</span>
                    </div>
                  </div>
                </div>

                {/* IMAGE SECTION */}
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

        <button className="arrow right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>
    </div>
  );
}