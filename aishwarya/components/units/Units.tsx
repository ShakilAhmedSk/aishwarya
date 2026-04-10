"use client";

import { useState } from "react";
import PropertyCards from "../units/PropertyCards";
import PropertyCardsTwo from "./PropertyCardsTwo";
import PropertyCardsThree from "./PropertyCardsThree";
import PropertyCardsFour from "./PropertyCardsFour";
import PropertyCardsFive from "./PropertyCardsFive";


type TabType = "Aishwarya Aurus" | "Aishwarya Solaris" | "Aishwarya 9" | "Aishwarya Sunshine" | "Aishwarya Gardenia";

export default function Units() {
  const [activeTab, setActiveTab] = useState<TabType>("Aishwarya Aurus");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Aishwarya Aurus":
        return <PropertyCards/>;
      case "Aishwarya Solaris":
        return <PropertyCardsTwo/>;
      case "Aishwarya 9":
        return <PropertyCardsThree/>;
      case "Aishwarya Sunshine":
        return <PropertyCardsFour/>;
      case "Aishwarya Gardenia":
        return <PropertyCardsFive/>;
      default:
        return null;
    }
  };

  return (
    <div>
       {/* 🔥 HEADING */}
        <div className="text-center pb-10 bg-[#f1e7e7]">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Our <span className="text-[#c8020e]">Premium  Luxury Living Spaces</span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
           Discover thoughtfully designed living spaces near Christ College, Bangalore. From cozy rooms to fully furnished accommodations, find a place that perfectly fits your lifestyle and comfort — just steps away from campus.
          </p>
        </div>
        <div className="pg-tabs-wrapper">
      <div className="pg-tabs-header">
        
        {["Aishwarya Aurus", "Aishwarya Solaris", "Aishwarya 9", "Aishwarya Sunshine", "Aishwarya Gardenia"].map(
          (tab) => (
            <button
              key={tab}
              className={`pg-tab-item ${
                activeTab === tab ? "pg-tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab as TabType)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      <div className="pg-tabs-content">
        {renderTabContent()}
      </div>
    </div>
    </div>
      
   
    
  );
}