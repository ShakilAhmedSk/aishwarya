"use client"
import React from 'react'
import './Stay.css'
import Image from "next/image";
import AishwaryaSteps from './AishwaryaSteps';
import Testimonials from '../testimonials/Testimonials';
import ContactSection from '../contact/Contact';
import AishwaryaContact from '../community/AishwaryaContact';
import { useRouter } from "next/navigation";


const Stay = () => {
  const router=useRouter()
  return (
    <>
     <div className="stay-hero-unique">
      {/* Background Image */}
      <Image
        src="/stay.jpg"
        alt="Stay with us"
        fill
        priority
        className="stay-hero-bg-unique"
      />

      {/* Overlay */}
      <div className="stay-hero-overlay-unique"></div>

      {/* Content */}
      <div className="stay-hero-content-unique">
        <h1 className="stay-hero-title-unique">Stay with us</h1>
        <p className="stay-hero-subtitle-unique">
          Discover a new way of urban living
        </p>
      </div>
    </div>
     <section className="aish-concept-unique">
      {/* Header */}
      <div className="aish-concept-header-unique">
        <h2>
          One concept, <br /> two ways of living
        </h2>
        <p>
          Experience premium living in Bengaluru with thoughtfully designed
          spaces, flexible stays, and a vibrant community at Aishwarya Residence.
        </p>
      </div>

      {/* Cards */}
      <div className="aish-concept-grid-unique">
        {/* Card 1 */}
        <div className="aish-card-unique">
          <div className="aish-card-img-unique">
            <Image
              src="/rs.webp"
              alt="Aishwarya Boutique Homes"
              fill
              className="aish-img-unique"
            />
            <div className="aish-card-title-unique">
              Aishwarya Boys Hostels
            </div>
          </div>

          <p>
            Boutique homes in Bengaluru offering privacy, comfort, and premium
            living in prime areas like Indiranagar and Whitefield.
          </p>
        </div>

        {/* Card 2 */}
        <div className="aish-card-unique">
          <div className="aish-card-img-unique">
            <Image
              src="/rs1.jpg"
              alt="Aishwarya Living Hubs"
              fill
              className="aish-img-unique"
            />
            <div className="aish-card-title-unique">
              Aishwarya Girls Hostels
            </div>
          </div>

          <p>
            Modern living hubs with WiFi, working spaces, and community
            zones designed for professionals and students in Bengaluru.
          </p>
        </div>
      </div>
      <AishwaryaSteps/>
      <Testimonials/>
        <section className="aish-cta-unique">
      {/* Left Image */}
      <div className="aish-cta-imgWrap-unique">
        <Image
          src="/elevate.jpg"
          alt="Aishwarya Residences"
          fill
          className="aish-cta-img-unique"
        />
        <div className="aish-cta-overlay-unique"></div>
      </div>

      {/* Right Content */}
      <div className="aish-cta-content-unique">
        <h2>
          Elevate your lifestyle <br /> with Aishwarya Residences
        </h2>

        <p>
          Experience premium living in Bengaluru with modern spaces,
          vibrant communities, and unmatched comfort tailored for you.
        </p>

        <button  onClick={() => router.push("/find-your-place")}
        className="aish-cta-btn-unique">
          Explore Residences
        </button>
      </div>
    </section>
    </section>
  
     <AishwaryaContact/>
    </>
   
  )
}

export default Stay