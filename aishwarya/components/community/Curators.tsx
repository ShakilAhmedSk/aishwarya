import React from "react";
import "./Curators.css";

const Curators = () => {
  return (
    <section className="cr-sec">
      {/* HEADER */}
      <div className="cr-head">
        <h2>Your Community Curators</h2>
        <p>
          At Aishwarya Residences, our community curators help residents
          connect, settle in comfortably, and enjoy a welcoming living
          experience through engaging activities and shared moments.
        </p>
      </div>

      {/* CARDS */}
      <div className="cr-grid">
        {/* CARD 1 */}
        <div className="cr-card">
          <div className="cr-img">
            <img src="RimaSoni.jpeg" />
            <div className="cr-overlay">
              <h3>Rima Sony</h3>
              <span>Community Curator</span>
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
            <img src="/KajalPaul.jpeg" />
            <div className="cr-overlay">
              <h3>Kajal Paul</h3>
              <span>Community Curator</span>
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
