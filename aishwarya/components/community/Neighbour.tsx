import React from "react";
import "./Neighbour.css";

const Neighbour = () => {
  return (
    <section className="lx-sec">
      <div className="lx-wrap">
        {/* LEFT VIDEO */}
        <div className="lx-video">
          <iframe
            src="https://www.youtube.com/embed/oIq1aqeg6BU"
            title="Luxari Living Bangalore"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lx-content">
          <h2>
            Know Your Aishwarya,<br />
            Luxury Living in Bangalore
          </h2>

          <p>
            At <strong>Luxury Living</strong>, we make city living effortless. Whether you're moving to Bangalore or shifting within the city, our premium spaces in S.G. Palya near Christ University offer comfort, convenience, and community.</p>

          <p>
           Designed for modern lifestyles, Luxury Living combines fully furnished rooms with a vibrant social environment — helping you feel at home while building meaningful connections.
          </p>

          <p>
            Experience curated spaces, smart amenities, and a lifestyle that blends luxury with everyday ease — right here in Bengaluru, near Christ University, S.G. Palya, and Nexus Mall.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Neighbour;
