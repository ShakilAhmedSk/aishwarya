"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    roomType: "",
    moveIn: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! We'll contact you shortly.");
  };

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#f1e7e7] via-white to-[#f0d5e3] overflow-hidden">

      {/* Soft Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c8020e]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-[#c8020e] mb-4">
            Book Your Stay
          </h2>

          <p className="text-gray-700 mb-8">
            Aishwarya Residences offers premium PG living with comfort,
            security, and a vibrant lifestyle. Get in touch with us today.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-map-marker-alt text-[#c8020e]"></i>
              <span className="text-sm text-gray-700">Bengaluru, India</span>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-phone text-[#c8020e]"></i>
              <span className="text-sm text-gray-700">+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-envelope text-[#c8020e]"></i>
              <span className="text-sm text-gray-700">info@aishwaryaresidences.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8">

          <h3 className="text-2xl font-semibold text-[#c8020e] mb-6">
            Enquiry Form
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Type
              </label>
              <select
                name="roomType"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              >
                <option value="">Select Room</option>
                <option value="single">Single Sharing</option>
                <option value="double">Double Sharing</option>
                <option value="triple">Triple Sharing</option>
              </select>
            </div>

            {/* Move-in */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Move-in Date
              </label>
              <input
                type="date"
                name="moveIn"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>
              <textarea
                name="message"
                rows="3"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="mt-3 bg-[#c8020e] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md"
            >
              Submit Inquiry
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}