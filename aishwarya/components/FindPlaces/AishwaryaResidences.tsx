import React from "react";
import Image from "next/image";

export default function AishwaryaResidences() {
  const listings = [
    {
      title: "1 RK Studio",
      type: "Studio",
      location: "Bangalore - Aishwarya Residence",
      roomType: "Single",
      price: "₹8,000",
      image: "/pgr.jpg",
      available: "Available now",
    },
    {
      title: "1 BHK Apartment",
      type: "Private",
      location: "Bangalore - Aishwarya Residence",
      roomType: "Double",
      price: "₹12,000",
      image: "/pgr2.jpg",
      available: "Available from May 01",
    },
    {
      title: "1 Bed Furnished Apartment",
      type: "Private",
      location: "Bangalore - Aishwarya Residence",
      roomType: "Triple",
      price: "₹6,500",
      image: "/pgr3.jpg",
      available: "Available from June 01",
    },
  ];

  return (
    <section className="ar-section">
      
      {/* FILTER BAR */}
      <div className="ar-filter-bar">

  <div className="ar-filter-left">
    <i className="fas fa-building"></i>
    <span>3 units fits with your search</span>
  </div>

  <div className="ar-filter-right">

    <div className="ar-dropdown">
      <i className="fas fa-map-marker-alt"></i>
      <select className="ar-native-select">
  <option value="">Select city</option>
  <option value="bangalore">Bangalore</option>
  <option value="london">London</option>
</select>
      
    </div>

    <div className="ar-dropdown">
      <i className="fas fa-home"></i>
      
      <select className="ar-native-select">
  <option value="">Type of Apartment</option>
  <option value="1 RK ">1 RK </option>
  <option value=" 1BHK"> 1BHK</option>
</select>
      
    </div>

    <div className="ar-dropdown">
      <i className="fas fa-user"></i>
      
      <select className="ar-native-select">
  <option value="">Guests</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
     
    </div>

    <div className="ar-dropdown">
      <select>
      <option value="">Order by</option>
  <option value="1">Price(Lower)</option>
  <option value="2">Price(Higher)</option>
 
</select>
    </div>

  </div>
</div>

      {/* CARDS */}
      <div className="ar-grid">
        {listings.map((item, i) => (
          <div key={i} className="ar-card">
            
            <div className="ar-img-box">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="ar-img"
              />
              <span className="ar-badge">{item.available}</span>
            </div>

            <div className="ar-content">
              <p className="ar-location">{item.location}</p>

              <h3 className="ar-title">{item.title}</h3>

              <div className="ar-info">
                <span>1 bedroom</span>
                <span>1 bath</span>
                <span>{item.roomType}</span>
              </div>

              <div className="ar-bottom">
                <p className="ar-price">From {item.price}/month</p>
                <button className="ar-btn">View</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}