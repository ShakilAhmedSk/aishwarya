"use client";
import "./Locations.css";

export default function Locations() {
  return (
    <section className="location-section">
      
      {/* HEADING */}
      <h2>Our Location</h2>
      <p className="subtitle">
        Visit our premium PG residence in Bangalore
      </p>

      <div className="location-container">
        
        {/* LEFT - MAP */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=Indiranagar%20Bangalore&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="details">
          <h3>Aishwarya Residences</h3>

          <p>
            123, 5th Main Road,<br />
            Indiranagar Stage 2,<br />
            Bangalore, Karnataka 560038
          </p>

          <p className="contact">
            📞 +91 98765 43210 <br />
            ✉️ info@aishwaryaresidences.com
          </p>

          <button className="visit-btn">
            Get Directions
          </button>
        </div>

      </div>
    </section>
  );
}