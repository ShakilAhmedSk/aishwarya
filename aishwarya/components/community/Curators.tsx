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
              Rima is known for her energetic vibe and passion for building a
              welcoming community at Aishwarya Residences. She loves organizing
              rooftop gatherings and café meetups that help residents connect
              and feel at home. Along with creating memorable experiences, she
              also enjoys capturing pictures and videos while managing social
              media content and posts for the community.
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
              Kajal is known for creating warm community events and managing
              residents with care and dedication. She brings people together
              effortlessly and ensures a comfortable living experience for
              everyone at Aishwarya Residences. From handling day-to-day
              operations to taking care of residents during medical emergencies,
              she plays an important role in keeping the community supportive
              and well-managed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curators;
