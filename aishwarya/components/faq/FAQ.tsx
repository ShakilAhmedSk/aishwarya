// "use client";
// import { useState } from "react";
// import "./FAQ.css";

// type FAQ = {
//   question: string;
//   answer: string;
// };

// const faqs: FAQ[] = [
//   {
//     question: " Where are the Aishwarya Residences located?",
//     answer:
//       'Aishwarya Residences is located near Christ College, S.G. Palya, Bengaluru, within 1-minute walking distance from the campus.',
//   },
//   {
//     question: "What type of accommodation do you offer?",
//     answer:
//       "We offer premium PG accommodation with comfortable and well-designed rooms for a convenient living experience.",
//   },
//   {
//     question: "How far is it from Christ College?",
//     answer:
//       "Our PG is just a 1-minute walk from Christ College, making it extremely convenient for students.",
//   },
//   {
//     question:
//       "Is food included in the stay?",
//     answer:
//       "Yes, we provide 4times hygienic and nutritious meals as part of the package.",
//   },
//   {
//     question:
//     "How can I book a room?",
//     answer:
//     "You can contact us directly via phone or visit our location to check availability and book your room.",
//   },
// ];

// export default function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggle = (index: number) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-section">
//       <div className="faq-container">
        
//         {/* LEFT */}
//         <div className="faq-left">
//           {faqs.map((item, index) => (
//             <div
//               key={index}
//               className={`faq-item ${activeIndex === index ? "active" : ""}`}
//             >
//               <div
//                 className="faq-question"
//                 onClick={() => toggle(index)}
//               >
//                 <span>{item.question}</span>
//                 <span className="icon">
//                   {activeIndex === index ? "−" : "+"}
//                 </span>
//               </div>

//               {activeIndex === index && (
//                 <p className="faq-answer">{item.answer}</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* RIGHT */}
//         <div className="faq-right">
//           <h2>
//             frequently <br /> asked <br /> questions
//           </h2>

//           <p>
//             Find answers to common questions about our Bangalore Luxury Living stays —
//             bookings, amenities, check-in time, and more.
//           </p>

//           <button>Show me more FAQs</button>
//         </div>

//       </div>
//     </div>
//   );
// }
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
      "Aishwarya Residences is located near Christ College, S.G. Palya, Bengaluru, within 1-minute walking distance from the campus.",
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
    question: "Is food included in the stay?",
    answer:
      "Yes, we provide 4times hygienic and nutritious meals as part of the package.",
  },
  {
    question: "How can I book a room?",
    answer:
      "You can contact us directly via phone or visit our location to check availability and book your room.",
  },

  // 👇 dummy extra FAQs (you can replace later)
  {
    question: "Is WiFi available?",
    answer: "Yes, high-speed WiFi is available for all residents.",
  },
  {
    question: "Is laundry service included?",
    answer: "Yes, laundry service is available on request.",
  },
  {
    question: "Do you allow guests?",
    answer: "Guests are allowed during visiting hours with permission.",
  },
  {
    question: "Is parking available?",
    answer: "Limited parking space is available for residents.",
  },
  {
    question: "Is security provided?",
    answer: "Yes, 24/7 security and CCTV surveillance is available.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [visibleCount, setVisibleCount] = useState(5);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleToggle = () => {
    if (visibleCount >= faqs.length) {
      // reset to first 5
      setVisibleCount(5);
      setActiveIndex(null);
    } else {
      // show next 5
      setVisibleCount((prev) => prev + 5);
    }
  };

  const isAllShown = visibleCount >= faqs.length;

  return (
    <div className="faq-section">
      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          {faqs.slice(0, visibleCount).map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggle(index)}>
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

          <h2 className="faq-title">
            frequently <br /> asked <br /> questions
          </h2>

          <p className="faq-subtitle">
            Find answers to common questions about our Bangalore Luxury Living stays —
            bookings, amenities, check-in time, and more.
          </p>

          <button onClick={handleToggle}>
            {isAllShown ? "Show less FAQs" : "Show more FAQs"}
          </button>

        </div>

      </div>
    </div>
  );
}