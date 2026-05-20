"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./FindPlaces.css";
import LeadPopup from "../LeadForm/LeadPopup";
import AishwaryaContact from "../community/AishwaryaContact";

const FindPlaces = () => {
  const [open, setOpen] = useState(false);

  const listings = [
    {
      title: "1 RK Studio",
      type: "1 RK",
      hostelType: "boys",
      city: "bangalore",
      roomType: "Single",
      image: "/pgr.jpg",
      available: "Available Now",
    },
    {
      title: "1 BHK Apartment",
      type: "1BHK",
      hostelType: "girls",
      city: "bangalore",
      roomType: "Double",
      image: "/pgr2.jpg",
      available: "Available from May 01",
    },
    {
      title: "Luxury Studio Suite",
      type: "Suites",
      hostelType: "girls",
      city: "bangalore",
      roomType: "Single",
      image: "/pgr4.jpg",
      available: "Available Now",
    },
    {
      title: "1 Bed Furnished Apartment",
      type: "Suites",
      hostelType: "boys",
      city: "bangalore",
      roomType: "Triple",
      image: "/pgr3.jpg",
      available: "Available from June 01",
    },
  ];

  const [filters, setFilters] = useState({
    hostelType: "",
    city: "",
    apartmentType: "",
    occupancy: "",
  });

  const filteredListings = listings.filter((item) => {
    return (
      (!filters.hostelType ||
        item.hostelType === filters.hostelType) &&
      (!filters.city || item.city === filters.city) &&
      (!filters.apartmentType ||
        item.type === filters.apartmentType) &&
      (!filters.occupancy ||
        item.roomType === filters.occupancy)
    );
  });

  return (
    <>
      {/* HERO */}
      <section className="find-place-unique">

        <Image
          src="/find.jpg"
          alt="Find your new place"
          fill
          priority
          className="find-place-bg-unique"
        />

        <div className="find-place-overlay-unique"></div>

        <div className="find-place-content-unique">
          <h1>
            Find your <br /> new place
          </h1>
        </div>
      </section>

      {/* RESIDENCE SECTION */}
      <section className="ar-section">

        <div className="ar-head">
          <p className="ar-subtitle">
            Premium Living Spaces
          </p>

          <h2>
            Discover Beautiful Apartments & Suites
          </h2>

          <p className="ar-desc">
            Find fully furnished modern living spaces
            with premium amenities and comfortable
            occupancy options.
          </p>
        </div>

        {/* FILTERS */}

        <div className="ar-filter-bar">

          <div className="ar-filter-left">
            <i className="fas fa-building"></i>

            <span>
              {filteredListings.length} units fit your search
            </span>
          </div>

          <div className="ar-filter-right">

            <div className="ar-dropdown">
              <i className="fas fa-users"></i>

              <select
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    hostelType: e.target.value,
                  })
                }
                className="ar-native-select"
              >
                <option value="">Hostel Type</option>
                <option value="boys">Boys Hostel</option>
                <option value="girls">Girls Hostel</option>
              </select>
            </div>

            <div className="ar-dropdown">
              <i className="fas fa-map-marker-alt"></i>

              <select
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    city: e.target.value,
                  })
                }
                className="ar-native-select"
              >
                <option value="">Select City</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>

            <div className="ar-dropdown">
              <i className="fas fa-home"></i>

              <select
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    apartmentType: e.target.value,
                  })
                }
                className="ar-native-select"
              >
                <option value="">Apartment Type</option>
                <option value="Suites">Suites</option>
                <option value="1 RK">1 RK</option>
                <option value="1BHK">1BHK</option>
              </select>
            </div>

            <div className="ar-dropdown">
              <i className="fas fa-user"></i>

              <select
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    occupancy: e.target.value,
                  })
                }
                className="ar-native-select"
              >
                <option value="">Occupancy</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                <option value="Triple">Triple</option>
              </select>
            </div>

          </div>
        </div>

        {/* CARDS */}

        <div className="ar-grid">

          {filteredListings.map((item, i) => (

            <div key={i} className="ar-card">

              <div className="ar-img-box">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="ar-img"
                />

                <div className="ar-overlay"></div>

                <span className="ar-badge">
                  {item.available}
                </span>

                <div className="ar-top-tags">
                  <span>{item.type}</span>
                  <span>{item.roomType}</span>
                </div>

              </div>

              <div className="ar-content">

                <p className="ar-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {item.city}
                </p>

                <h3 className="ar-title">
                  {item.title}
                </h3>

                <div className="ar-info">

                  <span>
                    <i className="fas fa-bed"></i>
                    1 Bedroom
                  </span>

                  <span>
                    <i className="fas fa-bath"></i>
                    1 Bath
                  </span>

                  <span>
                    <i className="fas fa-user"></i>
                    {item.roomType}
                  </span>

                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="ar-btn"
                >
                  Book Now
                  <i className="fas fa-arrow-right"></i>
                </button>

              </div>
            </div>

          ))}
        </div>
      </section>

      <AishwaryaContact />

      {open && (
        <LeadPopup
          onClose={() => setOpen(false)}
          open={open}
        />
      )}
    </>
  );
};

export default FindPlaces;