"use client"
import React, { useState } from "react";
import "./CommunityHero.css";
import LeadPopup from "../LeadForm/LeadPopup";

const CommunityHero = () => {
  const [open,setOpen]=useState(false)
  return (
    <section className="ch-sec">

      {/* VIDEO BACKGROUND */}
      <div className="ch-video">
        <iframe
          src="https://www.youtube-nocookie.com/embed/ej2fZkqXi6I?autoplay=1&mute=1&loop=1&playlist=ej2fZkqXi6I&controls=0"
          title="Community Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
          width="100%"
        />
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

        <button className="ch-btn" onClick={()=>setOpen(true)}>Explore Communities</button>
      </div>
      {open && (
        <LeadPopup/>
      )}
    </section>
  );
};

export default CommunityHero;