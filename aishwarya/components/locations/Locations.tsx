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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5555689794587!2d77.6090201!3d12.9362613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144d17fa3f57%3A0x51a2f6ff51dcde58!2sAishwarya%20Residences!5e0!3m2!1sen!2sin!4v1776408084681!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
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
