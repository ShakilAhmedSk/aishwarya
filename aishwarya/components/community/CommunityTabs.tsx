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

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const images = galleryData[activeCategory];

  // OPEN IMAGE
  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  // CLOSE IMAGE
  const closeImage = () => {
    setSelectedIndex(null);
  };

  // NEXT IMAGE
  const nextImage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % images.length
    );
  };

  // PREVIOUS IMAGE
  const prevImage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + images.length) %
        images.length
    );
  };

  return (
    <section className="ct-sec">

      {/* HEADER */}
      <div className="ct-head">
        <h2>Our Community Moments</h2>

        <p>
          A glimpse of memories, events, and
          experiences shared by our residents.
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
            onClick={() => {
              setActiveCategory(category);
              setSelectedIndex(null);
            }}
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
            onClick={() => openImage(i)}
          >
            <img
              src={img}
              alt={`community-${i + 1}`}
            />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="ct-lightbox"
          onClick={closeImage}
        >

          {/* CLOSE BUTTON */}
          <span className="ct-close">
            ×
          </span>

          {/* PREV BUTTON */}
          <button
            className="ct-arrow ct-prev"
            onClick={prevImage}
          >
            ❮
          </button>

          {/* IMAGE */}
          <img
            src={images[selectedIndex]}
            alt="Full View"
            className="ct-lightbox-img"
          />

          {/* NEXT BUTTON */}
          <button
            className="ct-arrow ct-next"
            onClick={nextImage}
          >
            ❯
          </button>

        </div>
      )}
    </section>
  );
};

export default CommunityTabs;