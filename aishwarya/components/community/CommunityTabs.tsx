"use client";
import { useState } from "react";
import "./CommunityTabs.css";

const tabs = [
  "Aishwarya Aurus",
  "Aishwarya Solaris",
  "Aishwarya 9",
  "Aishwarya Sunshine",
  "Aishwarya Gardenia",
];

const tabContent: any = {
  "Aishwarya Aurus": {
    title: "Aishwarya Aurus Community",
    desc: "Located in the heart of Whitefield, Aishwarya Aurus offers a vibrant co-living experience surrounded by tech parks, cafes, and premium lifestyle spaces. Residents enjoy modern amenities and a strong community vibe.",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  "Aishwarya Solaris": {
    title: "Aishwarya Solaris Community",
    desc: "Situated in Electronic City, Solaris is designed for working professionals seeking comfort and connectivity. With peaceful surroundings and well-designed spaces, it creates a balanced lifestyle.",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  "Aishwarya 9": {
    title: "Aishwarya 9 Community",
    desc: "Aishwarya 9 in Marathahalli offers easy access to offices, shopping hubs, and nightlife. A perfect mix of convenience and social living for young professionals.",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
  "Aishwarya Sunshine": {
    title: "Aishwarya Sunshine Community",
    desc: "Located in BTM Layout, Sunshine brings a warm and lively environment with thoughtfully designed interiors and engaging community events.",
    img: "https://images.unsplash.com/photo-1507089947367-19c1da9775ae",
  },
  "Aishwarya Gardenia": {
    title: "Aishwarya Gardenia Community",
    desc: "Nestled in HSR Layout, Gardenia blends greenery with modern living. A peaceful yet connected space ideal for relaxation and networking.",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
};

const CommunityTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const current = tabContent[activeTab];

  return (
    <section className="ct-sec">
      <div className="ct-head">
        <h2>5 Spaces, One Premium Living Experience</h2>
        <p>
          Discover Luxurious Co-Living Across Bangalore. Each Aishwarya property
          is designed to give you comfort, connectivity, and a vibrant community
          lifestyle.
        </p>
      </div>

      {/* TABS */}
      <div className="ct-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`ct-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="ct-content">
        
        <div className="ct-img">
          <img src={current.img} alt={current.title} />
        </div>

        <div className="ct-text">
          <h3>{current.title}</h3>
          <p>{current.desc}</p>
        </div>

      </div>
    </section>
  );
};

export default CommunityTabs;