"use client"
import React, { useState } from "react";
import Image from "next/image";
import LeadPopup from "../LeadForm/LeadPopup";

export default function AishwaryaResidences() {
  const [open,setOpen]=useState(false)
  const listings = [
  {
    title: "1 RK Studio",
    type: "1 RK",
    hostelType: "boys",
    city: "bangalore",
    roomType: "Single",
    price: 8000,
    image: "/pgr.jpg",
    available: "Available now",
  },
  {
    title: "1 BHK Apartment",
    type: "1BHK",
    hostelType: "girls",
    city: "bangalore",
    roomType: "Double",
    price: 12000,
    image: "/pgr2.jpg",
    available: "Available from May 01",
  },
  {
    title: "1 Bed Furnished Apartment",
    type: "Suites",
    hostelType: "boys",
    city: "bangalore",
    roomType: "Triple",
    price: 6500,
    image: "/pgr3.jpg",
    available: "Available from June 01",
  },
  {
    title: "Luxury Studio Suite",
    type: "Suites",
    hostelType: "girls",
    city: "bangalore",
    roomType: "Single",
    price: 15000,
    image: "/pgr4.jpg",
    available: "Available now",
  },
];

  const [filters,setFilters]=useState({
    hostelType:"",
    city:"",
    apartmentType:"",
    occupancy:"",
    sort:""
  })
const filteredListings = listings
  .filter((item) => {
    return (
      (!filters.hostelType || item.hostelType === filters.hostelType) &&
      (!filters.city || item.city === filters.city) &&
      (!filters.apartmentType || item.type === filters.apartmentType) &&
      (!filters.occupancy || item.roomType === filters.occupancy)
    );
  })
  .sort((a, b) => {
    if (filters.sort === "1") return a.price - b.price;
    if (filters.sort === "2") return b.price - a.price;
    return 0;
  })
  .slice(0, 4); // 👈 THIS LINE IS THE KEY
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

      <select onChange={(e)=>
      setFilters({...filters,hostelType:e.target.value})
    }
      className="ar-native-select">
  <option value="">Hostel Type</option>
  <option value="boys">Boys Hostel</option>
  <option value="girls">Girls Hostel</option>
  
</select>
      
    </div>

    <div className="ar-dropdown">
      <i className="fas fa-map-marker-alt"></i>

      <select onChange={(e)=>
        setFilters({...filters,city:e.target.value})
      }
      className="ar-native-select">
  <option value="">Select city</option>
  <option value="bangalore">Bangalore</option>
  
</select>
      
    </div>

    <div className="ar-dropdown">
      <i className="fas fa-home"></i>
      
      <select onChange={(e)=>
        setFilters({...filters,apartmentType:e.target.value})
      }
      className="ar-native-select">
  <option value="">Type of Apartment</option>
  <option value="Suites">Suites </option>
  <option value="1 RK">1 RK </option>
  <option value="1BHK"> 1BHK</option>
</select>
      
    </div>

    <div className="ar-dropdown">
      <i className="fas fa-user"></i>
      
      <select onChange={(e)=>
        setFilters({...filters,occupancy:e.target.value})
      }
      className="ar-native-select">
  <option value="">Occupancy</option>
  <option value="Single">Single</option>
  <option value="Double">Double</option>
  <option value="Triple">Triple</option>
 
</select>
     
    </div>

    <div className="ar-dropdown">
      <select onChange={(e)=>
        setFilters({...filters,sort:e.target.value})
      }>
      <option value="">Order by</option>
  <option value="1">Price(Lower)</option>
  <option value="2">Price(Higher)</option>
 
</select>
    </div>

  </div>
</div>

      {/* CARDS */}
      <div className="ar-grid">
        {filteredListings.map((item, i) => (
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
              <p className="ar-location">{item.city}</p>

              <h3 className="ar-title">{item.title}</h3>

              <div className="ar-info">
                <span>1 bedroom</span>
                <span>1 bath</span>
                <span>{item.roomType}</span>
              </div>

              <div className="ar-bottom">
                <p className="ar-price">From {item.price}/month</p>
                <button onClick={()=>setOpen(true)}
                className="ar-btn">Book</button>
              </div>
             
            </div>
          </div>
        ))}
      </div>
       {open && (
                <LeadPopup onClose={()=>setOpen(false)} open={open}/>
              )}
    </section>
  );
}