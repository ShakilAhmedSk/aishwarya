
export default function AishwaryaSteps() {
  const steps = [
    {
      id: "01",
      title: "Explore Properties",
      desc: "Browse premium Aishwarya Residences across Bengaluru and choose your ideal living space.",
    },
    {
      id: "02",
      title: "Schedule a Visit",
      desc: "Book a visit or virtual tour to experience the comfort and amenities firsthand.",
    },
    {
      id: "03",
      title: "Confirm Booking",
      desc: "Reserve your space with a simple and transparent booking process.",
    },
    {
      id: "04",
      title: "Hassle-Free Payment",
      desc: "Secure your stay with flexible payment options and clear pricing.",
    },
    {
      id: "05",
      title: "Move-In Ready",
      desc: "Step into a fully furnished home designed for modern urban living.",
    },
    {
      id: "06",
      title: "Live the Experience",
      desc: "Enjoy community living, events, and premium facilities at Aishwarya.",
    },
  ];

  return (
    <section className="aish-steps-unique">
      {/* Header */}
      <div className="aish-steps-header-unique">
        <h2>Your Journey with Aishwarya</h2>
        <p>
          From discovery to move-in, we make your Bengaluru living experience
          smooth, premium, and hassle-free.
        </p>
      </div>

      {/* Grid */}
      <div className="aish-steps-grid-unique">
        {steps.map((step) => (
          <div key={step.id} className="aish-step-card-unique">
            <span className="aish-step-number-unique">{step.id}</span>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}