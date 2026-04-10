"use client";
import { useState } from "react";
import "./FAQ.css";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: " Where are the Aishwarya Residences located?",
    answer:
      'Aishwarya Residences is located near Christ College, S.G. Palya, Bengaluru, within 1-minute walking distance from the campus.',
  },
  {
    question: "What type of accommodation do you offer?",
    answer:
      "We offer premium PG accommodation with comfortable and well-designed rooms for a convenient living experience.",
  },
  {
    question: "How far is it from Christ College?",
    answer:
      "Our PG is just a 1-minute walk from Christ College, making it extremely convenient for students.",
  },
  {
    question:
      "Is the PG suitable for students and working professionals?",
    answer:
      "Yes, Aishwarya Residences is ideal for both students and working professionals.",
  },
  {
    question:
    "How can I book a room?",
    answer:
    "You can contact us directly via phone or visit our location to check availability and book your room.",
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

          <button>Show me more FAQs</button>
        </div>

      </div>
    </div>
  );
}