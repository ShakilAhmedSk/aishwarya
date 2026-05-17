"use client";

import { useState } from "react";
import "./CommunityTabs.css";

const years = [
  "Halloween",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
] as const;

type YearType = (typeof years)[number];

const galleryData: Record<YearType, string[]> = {
  Halloween: [
    "/halloween/h1.png",
    "/halloween/h2.png",
    "/halloween/h3.png",
    "/halloween/h4.png",
  ],

  "2022": [
    "/g5.jpg",
    "/g6.jpg",
    "/g7.jpg",
    "/g8.jpg",
  ],

  "2023": [
    "/g9.jpg",
    "/g10.jpg",
    "/g11.jpg",
    "/g12.jpg",
  ],

  "2024": [
    "/g1.jpg",
    "/g5.jpg",
    "/g9.jpg",
    "/g3.jpg",
  ],

  "2025": [
    "/g2.jpg",
    "/g6.jpg",
    "/g10.jpg",
    "/g4.jpg",
  ],

  "2026": [
    "/g7.jpg",
    "/g8.jpg",
    "/g11.jpg",
    "/g12.jpg",
  ],
};

const CommunityTabs = () => {
  const [activeYear, setActiveYear] =
    useState<YearType>(years[0]);

  const images = galleryData[activeYear];

  return (
    <section className="ct-sec">

      {/* HEADER */}
      <div className="ct-head">
        <h2>Our Community Moments</h2>

        <p>
          A glimpse of memories, events, and experiences
          shared by our residents over the years.
        </p>
      </div>

      {/* YEAR TABS */}
      <div className="ct-tabs">
        {years.map((year) => (
          <button
            key={year}
            className={`ct-tab ${
              activeYear === year ? "active" : ""
            }`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button> 
        ))}
      </div>

      {/* GALLERY */}
      <div className="ct-gallery">
        {images.map((img, i) => (
          <div className="ct-card" key={i}>
            <img
              src={img}
              alt={`community-${i}`}
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default CommunityTabs;