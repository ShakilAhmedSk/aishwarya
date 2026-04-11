import React from "react";
import "./Neighbour.css";

const Neighbour = () => {
  return (
    <section className="lx-sec">
      <div className="lx-wrap">

        {/* LEFT VIDEO */}
        <div className="lx-video">
          <iframe
            src="https://www.youtube.com/embed/ej2fZkqXi6I"
            title="Luxari Living Bangalore"
            allowFullScreen
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="lx-content">
          <h2>
            Know Your Neighbour <br />
            Elevate Living in Bangalore
          </h2>

          <p>
            At <strong>Luxari Living</strong>, we make city living effortless.
            Whether you're moving to Bangalore or shifting within the city, our
            premium co-living spaces in Indiranagar, Whitefield, and Koramangala
            offer comfort, convenience, and community.
          </p>

          <p>
            Designed for modern lifestyles, Luxari Living combines fully
            furnished homes with a vibrant social environment — helping you feel
            at home while building meaningful connections.
          </p>

          <p>
            Experience curated spaces, smart amenities, and a lifestyle that
            blends luxury with everyday ease — right here in Bangalore.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Neighbour;