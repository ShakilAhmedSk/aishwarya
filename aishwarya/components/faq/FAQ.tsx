"use client";
import { useState } from "react";
import "./FAQ.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How do I make a reservation?",
    answer:
      'Simply click on the "BOOK NOW" button on the top right of the page and enjoy the best rates - only available on our website!',
  },
  {
    question: "Are there common areas to socialize?",
    answer:
      "Yes, we have shared lounges and co-working spaces where residents can relax and interact.",
  },
  {
    question: "Can I cancel or modify my reservation?",
    answer:
      "Yes, you can modify or cancel your booking based on our cancellation policy.",
  },
  {
    question:
      "How do I get to the Luxury Living  from the airport or train station?",
    answer:
      "You can take a cab, metro, or local transport. We also provide directions after booking.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        
        {/* LEFT */}
        <div className="faq-left">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          <h2>
            frequently <br /> asked <br /> questions
          </h2>

          <p>
            Find answers to common questions about our Bangalore Luxury Living stays —
            bookings, amenities, check-in time, and more.
          </p>

          <button>show me more FAQ's</button>
        </div>

      </div>
    </div>
  );
}