"use client"
import React, { useState } from "react";
import "./CommunityHero.css";
import LeadPopup from "../LeadForm/LeadPopup";

const CommunityHero = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="ch-sec">

      {/* VIDEO BACKGROUND */}
      <div className="ch-video">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/oIq1aqeg6BU?autoplay=1&mute=1&controls=0&loop=1&playlist=oIq1aqeg6BU&start=0"
          title="Community Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      {/* OVERLAY */}
      <div className="ch-overlay"></div>

      {/* CONTENT */}
      <div className="ch-content">
        <h1>Experience Community Living in Bangalore</h1>
        <p>
          Discover premium co-living spaces by Aishwarya Residences where
          comfort meets connection. Live, connect, and grow in vibrant
          communities across Bangalore.
        </p>

        <button className="ch-btn" onClick={() => setOpen(true)}>Explore Communities</button>
      </div>
      {open && (
        <LeadPopup onClose={() => setOpen(false)} open={open} />
      )}
    </section>
  );
};

export default CommunityHero;