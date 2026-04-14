"use client";
import "./Locations.css";

export default function Locations() {
  return (
    <section className="location-section" id="location">
      {/* HEADING */}
      <h2>Our Location</h2>
      <p className="subtitle">Visit our premium Luxury Living in Bangalore</p>

      <div className="location-container">
        {/* LEFT - MAP */}
        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=19%2C%20Ramaiah%20Garden%20Sadduguntepalya%20Rd%2C%20near%20Domino%27s%20Pizza%2C%20Venkateshwara%20Layout%2C%20S.G.%20Palya%2C%20Bengaluru%2C%20Karnataka%20560030&output=embed"
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
            No. 76, 2nd Cross Rd,
            <br />
            Dairy Colony,
            <br />
            Adugodi,
            <br />
            Bengaluru, Karnataka 560030
          </p>

          <p className="contact">
            📞 9845389055 / 720466204 <br />
            ✉️ aishwaryapgblr@gmail.com
          </p>

          <button className="visit-btn">Get Directions</button>
        </div>
      </div>
    </section>
  );
}
