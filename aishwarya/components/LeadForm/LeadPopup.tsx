"use client";
import { useEffect, useState } from "react";
import './LeadPopup.css'

export default function LeadPopup() {
  const [showPopup, setShowPopup] = useState(false);

  // ⏱ Auto open after 5 sec
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Lead Submitted ✅");
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="pgx-overlay">
      <div className="pgx-popup">

        {/* Close */}
        <button
          className="pgx-close"
          onClick={() => setShowPopup(false)}
        >
          ×
        </button>

        {/* Left Content */}
        <div className="pgx-left">
          <h2>Find Your Perfect Luxury Living</h2>
          <p>Safe, Affordable & Comfortable Living</p>

          <ul>
            <li>✔ Furnished Rooms</li>
            <li>✔ WiFi & Food Included</li>
            <li>✔ Prime Locations</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="pgx-right">
          <h3>Get Details</h3>

          <form onSubmit={handleSubmit} className="pgx-form">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="pgx-input"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="pgx-input"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="pgx-input"
            />

            <select required className="pgx-input">
              <option value="">Select Room Type</option>
              <option>Single Room</option>
              <option>Double Sharing</option>
              <option>Triple Sharing</option>
            </select>

            <button type="submit" className="pgx-btn">
              Check Availability
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}