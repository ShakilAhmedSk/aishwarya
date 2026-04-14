import React from 'react'
import Image from "next/image";
import './FindPlaces.css'
import AishwaryaResidences from './AishwaryaResidences';
import AishwaryaContact from '../community/AishwaryaContact';

const FindPlaces = () => {
  return (
    <>
      <section className="find-place-unique">
      {/* Background Image */}
      <Image
        src="/find.jpg"
        alt="Find your new place"
        fill
        priority
        className="find-place-bg-unique"
      />

      {/* Overlay */}
      <div className="find-place-overlay-unique"></div>

      {/* Content */}
      <div className="find-place-content-unique">
        <h1>
          Find your <br /> new place
        </h1>
      </div>
    </section>
     <AishwaryaResidences/>
     <AishwaryaContact/>
    </>
  )
}

export default FindPlaces