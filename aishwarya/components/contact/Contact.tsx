"use client";

import { useState } from "react";
import { toast } from "sonner";

type FormType = {
  name: string;
  phone: string;
  email: string;
  roomType: string;
  moveIn: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    roomType: "",
    moveIn: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  setLoading(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbxE_BxMk-QVgMGP8HEbH7raHt8oFZ6DMaxw_sTxkMGp35th2WgAvG6_XQpmvsUiIqHy/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }
    );

    toast.success("Inquiry submitted successfully!");

    setForm({
      name: "",
      phone: "",
      email: "",
      roomType: "",
      moveIn: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    toast.error("Submission failed!");
  } finally {
    setLoading(false);
  }
};

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-[#f1e7e7] via-white to-[#f0d5e3] overflow-hidden"
    >
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
            Aishwarya Residences offers premium Luxury Living with comfort,
            security, and a vibrant lifestyle. Get in touch with us today.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-map-marker-alt text-[#c8020e]"></i>

              <span className="text-sm text-gray-700">
                79/76, 2nd Main Road, 2nd Cross Chikkalakshmi Layout,
                D.R.C Post, Bangalore – 560029
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-phone text-[#c8020e]"></i>

              <span className="text-sm text-gray-700">
                9845389055 / 7204662204
              </span>
            </div>

            <div className="flex items-center gap-4 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm">
              <i className="fas fa-envelope text-[#c8020e]"></i>

              <span className="text-sm text-gray-700">
                aishwaryapgblr@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/90 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-semibold text-[#c8020e] mb-6">
            Enquiry Form
          </h3>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none text-[#000]"
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
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none text-[#000]"
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
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#c8020e] outline-none text-[#000]"
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Room Type
              </label>

              <select
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 
                bg-white text-gray-800 appearance-none
                focus:ring-2 focus:ring-[#c8020e]
                focus:border-[#c8020e]
                outline-none transition"
              >
                <option value="">Select Room</option>

                <option value="single">
                  Single Sharing
                </option>

                <option value="double">
                  Double Sharing
                </option>

                <option value="triple">
                  Triple Sharing
                </option>
              </select>
            </div>

            {/* Move In */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Move In Date
              </label>

              <input
                type="date"
                name="moveIn"
                value={form.moveIn}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                bg-white text-gray-800
                focus:ring-2 focus:ring-[#c8020e]
                focus:border-[#c8020e]
                outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Message
              </label>

              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5
                bg-white text-gray-800 placeholder-gray-400
                focus:ring-2 focus:ring-[#c8020e]
                focus:border-[#c8020e]
                outline-none transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-3 bg-[#c8020e] text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition shadow-md disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}