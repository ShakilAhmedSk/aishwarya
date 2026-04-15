import AishwaryaContact from "../community/AishwaryaContact";
import "./OurLocations.css";

const locations = [
  {
    title: "Aishwarya Aurus",
    area: "S.G Palya, Bangalore",
    subtitle: "Near Christ Front Gate",
    img: "/pgr.jpg",
  },
  {
    title: "Aishwarya Solaris",
    area: "Venkateshwara Layout, S.G Palya",
    subtitle: "",
    img: "pgr2.jpg",
  },
  {
    title: "Aishwarya 9",
    area: "Dairy Colony, Adugodi",
    subtitle: "",
    img: "pgr3.jpg",
  },
  {
    title: "Aishwarya Sunshine",
    area: "Bharathi Layout, S.G Palya",
    subtitle: "",
    img: "pgr4.jpg",
  },
  {
    title: "Aishwarya Gardenia",
    area: "Bhavani Nagar, S.G Palya",
    subtitle: "Near Christ Back Gate",
    img: "pgr.jpg",
  },
];

export default function OurLocations() {
  return (
    <div className="loc-container">
      <h2 className="loc-heading">Our Locations</h2>

      {locations.map((loc, index) => (
        <div
          key={index}
          className={`loc-card ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          {/* IMAGE */}
          <div className="loc-img">
            <img src={loc.img} alt={loc.title} />
          </div>

          {/* CONTENT */}
          <div className="loc-content">
            <h3>{loc.title}</h3>
            <p className="loc-area">{loc.area}</p>
            {loc.subtitle && <p className="loc-sub">{loc.subtitle}</p>}

            <button className="loc-btn">View Details</button>
          </div>
        </div>
      ))}
      <AishwaryaContact/>
    </div>
  );
}