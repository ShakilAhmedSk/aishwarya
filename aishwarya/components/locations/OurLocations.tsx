"use client";
import { useState } from "react";
import AishwaryaContact from "../community/AishwaryaContact";
import "./OurLocations.css";
import LeadPopup from "../LeadForm/LeadPopup";

const locations = [
  {
    title: "Aishwarya Estrella",
    area: "S.G Palya, Bangalore",
    subtitle: "Near Christ Front Gate",
    img: "/pgr.jpg",
    desc: "Premium co-living space with modern amenities, spacious rooms, and a vibrant community. Ideal for students and working professionals.",
  },
  {
    title: "Aishwarya Solaris",
    area: "Venkateshwara Layout, S.G Palya",
    subtitle: "",
    img: "/pgr2.jpg",
    desc: "Comfortable and affordable living with excellent connectivity and peaceful surroundings.",
  },
  {
    title: "Aishwarya 9",
    area: "Dairy Colony, Adugodi",
    subtitle: "",
    img: "/pgr3.jpg",
    desc: "Well-maintained property with all essential facilities and a safe environment.",
  },
  {
    title: "Aishwarya Sunshine",
    area: "Bharathi Layout, S.G Palya",
    subtitle: "",
    img: "/pgr4.jpg",
    desc: "Bright and spacious rooms with great community vibes and easy accessibility.",
  },
  {
    title: "Aishwarya Gardenia",
    area: "Bhavani Nagar, S.G Palya",
    subtitle: "Near Christ Back Gate",
    img: "/pgr.jpg",
    desc: "Peaceful living space close to college area with all daily needs nearby.",
  },
];

export default function OurLocations() {
  const [selected, setSelected] = useState<any>(null);
  const [open,setOpen]=useState(false)

  return (
    <div className="loc-container">
      <h2 className="loc-heading">Our Locations</h2>

      {locations.map((loc, index) => (
        <div
          key={index}
          className={`loc-card ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="loc-img">
            <img src={loc.img} alt={loc.title} />
          </div>

          <div className="loc-content">
            <h3>{loc.title}</h3>
            <p className="loc-area">{loc.area}</p>
            {loc.subtitle && <p className="loc-sub">{loc.subtitle}</p>}

            <button className="loc-btn" onClick={() => setSelected(loc)}>
              View Details
            </button>
          </div>
        </div>
      ))}

      {/* 🔥 MODAL */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelected(null)}>
              ✕
            </span>

            <div className="modal-img">
              <img src={selected.img} alt={selected.title} />
            </div>

            <div className="modal-content">
              <h2>{selected.title}</h2>
              <p className="modal-area">{selected.area}</p>
              {selected.subtitle && (
                <p className="modal-sub">{selected.subtitle}</p>
              )}

              <p className="modal-desc">{selected.desc}</p>

              <button onClick={()=>setOpen(true)}
              className="modal-btn">Book Now</button>
            </div>
            {open && (
              <LeadPopup onClose={()=>setOpen(false)} open={open}/>
            )}
          </div>
        </div>
      )}

      <AishwaryaContact />
    </div>
  );
}