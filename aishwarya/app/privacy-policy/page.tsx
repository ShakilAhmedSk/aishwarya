"use client";

import "./PrivacyPolicy.css";

export default function Page() {
  return (
    <section className="policy-section">
      
      {/* HEADER */}
      <h2 className="policy-heading">Privacy Policy</h2>
      <p className="policy-subtitle">
        Your privacy is important to us at Aishwarya Residences
      </p>

      <div className="policy-container">

        {/* CARD */}
        <div className="policy-card">
          <h3>1. Information We Collect</h3>
          <ul>
            <li>Name, phone number, and email address</li>
            <li>Booking or inquiry details</li>
            <li>Information shared via forms or WhatsApp</li>
            <li>Basic device and browser data</li>
          </ul>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>Respond to inquiries and bookings</li>
            <li>Provide room and availability details</li>
            <li>Improve our services</li>
            <li>Send updates or offers</li>
          </ul>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>3. WhatsApp Communication</h3>
          <p>
            When you contact us via WhatsApp, we may store your details and
            messages to assist you better. We do not sell or share your data.
          </p>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>4. Data Protection</h3>
          <p>
            We implement appropriate security measures to protect your personal
            data, but no system is completely secure.
          </p>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>5. Third-Party Services</h3>
          <p>
            We may use third-party tools such as analytics or WhatsApp to enhance
            user experience. These services have their own privacy policies.
          </p>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>6. Cookies</h3>
          <p>
            Our website may use cookies to improve your browsing experience. You
            can disable them in your browser settings.
          </p>
        </div>

        {/* CARD */}
        <div className="policy-card">
          <h3>7. Contact Us</h3>
          <p>
            📍 No. 76, 2nd Cross Rd, Adugodi, Bengaluru – 560030
          </p>
          <p>📞 9845389055 / 720466204</p>
          <p>📧 aishwaryapgblr@gmail.com</p>
        </div>

      </div>

      {/* FOOT NOTE */}
      <p className="policy-footer">
        Last updated: April 2026
      </p>
    </section>
  );
}