"use client";

import { useState } from "react";
import PropertyCards from "../units/PropertyCards";
import PropertyCardsTwo from "./PropertyCardsTwo";
import PropertyCardsThree from "./PropertyCardsThree";
import PropertyCardsFour from "./PropertyCardsFour";
import PropertyCardsFive from "./PropertyCardsFive";

type TabType =
  | "Aishwarya Aurellia"
  | "Aishwarya Estrella"
  | "Aishwarya Solaris"
  | "Aishwarya 9"
  | "Aishwarya Sunshine"
  | "Upcoming Branches";

export default function Units() {
  const [activeTab, setActiveTab] =
    useState<TabType>("Aishwarya Aurellia");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Aishwarya Aurellia":
        return <PropertyCardsFive />;

      case "Aishwarya Estrella":
        return <PropertyCards />;

      case "Aishwarya Solaris":
        return <PropertyCardsTwo />;

      case "Aishwarya 9":
        return <PropertyCardsThree />;

      case "Aishwarya Sunshine":
        return <PropertyCardsFour />;

      default:
        return null;
    }
  };

  const tabs: TabType[] = [
    "Aishwarya Aurellia",
    "Aishwarya Estrella",
    "Aishwarya Solaris",
    "Aishwarya 9",
    "Aishwarya Sunshine",
    "Upcoming Branches",
  ];

  return (
    <section className="bg-[#f1e7e7] py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔥 HEADING */}
        <div className="text-center pb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Explore Our{" "}
            <span className="text-[#c8020e]">
              Premium Luxury Living Spaces
            </span>
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover thoughtfully designed living spaces near Christ College,
            Bangalore. From cozy rooms to fully furnished accommodations,
            find a place that perfectly fits your lifestyle and comfort —
            just steps away from campus.
          </p>
        </div>

        {/* 🔥 TAB BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border
                ${
                  activeTab === tab
                    ? "bg-[#c8020e] text-white border-[#c8020e] shadow-lg"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-[#c8020e] hover:text-white hover:border-[#c8020e]"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 🔥 CONTENT */}
        <div>{renderTabContent()}</div>
      </div>
    </section>
  );
}