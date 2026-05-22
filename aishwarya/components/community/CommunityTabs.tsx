"use client";

import { useState } from "react";
import "./CommunityTabs.css";

const categories = [
  "Halloween",
  "Galentine",
] as const;

type CategoryType = (typeof categories)[number];

const galleryData: Record<CategoryType, string[]> = {
  Halloween: [
    "/halloween/h1.png",
    "/halloween/h2.png",
    "/halloween/h3.png",
    "/halloween/h4.png",
  ],

  Galentine: [
    "/Galentine/g1.png",
    "/Galentine/g2.png",
    "/Galentine/g3.png",
    "/Galentine/g4.png",
  ],
};

const CommunityTabs = () => {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>(categories[0]);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const images = galleryData[activeCategory];

  return (
    <section className="ct-sec">

      {/* HEADER */}
      <div className="ct-head">
        <h2>Our Community Moments</h2>

        <p>
          A glimpse of memories, events, and experiences
          shared by our residents.
        </p>
      </div>

      {/* CATEGORY TABS */}
      <div className="ct-tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`ct-tab ${
              activeCategory === category
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* GALLERY */}
      <div className="ct-gallery">
        {images.map((img, i) => (
          <div
            className="ct-card"
            key={i}
            onClick={() =>
              setSelectedImage(img)
            }
          >
            <img
              src={img}
              alt={`community-${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="ct-lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >
          <span className="ct-close">
            ×
          </span>

          <img
            src={selectedImage}
            alt="Full View"
            className="ct-lightbox-img"
          />
        </div>
      )}
    </section>
  );
};

export default CommunityTabs;