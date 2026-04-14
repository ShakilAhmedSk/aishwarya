"use client";
import "./AishwaryaContact.css";

export default function AishwaryaContact() {
  return (
    <section className="ar-wrap">
      <div className="ar-left">
        <h2 className="ar-ttl">Contact Aishwarya Residence</h2>
        <p className="ar-desc">
          Looking for a comfortable stay in Bengaluru? Reach out to Aishwarya
          Residence for bookings, availability, or any queries. Our team will
          get back to you as soon as possible.
        </p>
      </div>

      <div className="ar-right">
        <form className="ar-form">
          <div className="ar-row">
            <input className="ar-inp" type="text" placeholder="First name*" />
            <input className="ar-inp" type="text" placeholder="Last name*" />
          </div>

          <div className="ar-row">
            <div className="ar-phone">
              <select className="ar-sel">
                <option>India (+91)</option>
              </select>
              <input className="ar-inp" type="text" placeholder="+91" />
            </div>
            <input className="ar-inp" type="email" placeholder="Email*" />
          </div>

          <select className="ar-sel ar-full">
            <option>Select preferred Bengaluru location*</option>
          </select>

          <textarea
            className="ar-txt"
            rows={4}
            placeholder="Tell us your requirement (room type, duration of stay, budget, etc.)"
          ></textarea>

          <div className="ar-check">
            <input type="checkbox" />
            <span>I agree to receive updates from Aishwarya Residence</span>
          </div>

          <button className="ar-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}