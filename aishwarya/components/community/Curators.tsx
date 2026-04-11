import React from "react";
import "./Curators.css";

const Curators = () => {
  return (
    <section className="cr-sec">
      
      {/* HEADER */}
      <div className="cr-head">
        <h2>Your Community Curators</h2>
        <p>
          Our Bangalore community curators bring residents together through
          events, local experiences, and shared moments. They help you connect,
          explore the city, and feel at home from day one.
        </p>
      </div>

      {/* CARDS */}
      <div className="cr-grid">

        {/* CARD 1 */}
        <div className="cr-card">
          <div className="cr-img">
            <img src="cr2.jpeg" />
            <div className="cr-overlay">
              <h3>Riya Sharma</h3>
              <span>Community Curator • Aishwarya Aurus</span>
            </div>
          </div>

          <div className="cr-info">
            <p>
              Known for her energetic vibe, Riya loves organizing rooftop
              gatherings and café meetups around Indiranagar. She ensures every
              resident feels welcomed and connected.
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="cr-card">
          <div className="cr-img">
            <img src="/cr.jpeg" />
            <div className="cr-overlay">
              <h3>Ananya Rao</h3>
              <span>Community Curator • Aishwarya Solaris</span>
            </div>
          </div>

          <div className="cr-info">
            <p>
              Ananya is known for creating cozy community events and wellness
              sessions. From yoga mornings to food walks, she brings people
              together effortlessly.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Curators;