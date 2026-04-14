import React from 'react'
import Image from "next/image";
import './EventsSection.css'
const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="events-section__image-wrapper">
        <Image
          src="/event.jpg"
          alt="Events Illustration"
          width={600}
          height={400}
          className="events-section__image"
        />
      </div>

      <div className="events-section__content">
        <h2 className="events-section__title">Discover Upcoming Events</h2>

        <p className="events-section__description">
          Join exciting events, meet new people, and explore experiences curated just for you.
        </p>

        <button className="events-section__button">Explore Events</button>
      </div>
    </section>
  )
}

export default EventsSection