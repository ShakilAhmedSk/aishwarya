"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import "./LeadPopup.css";

type LeadPopupProps = {
  onClose?: () => void;
  open?: boolean;
};

type FormType = {
  name: string;
  phone: string;
  email: string;
  roomType: string;
};

export default function LeadPopup({
  onClose,
  open = false,
}: LeadPopupProps) {
  const [autoOpen, setAutoOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormType>({
    name: "",
    phone: "",
    email: "",
    roomType: "",
  });

  // Auto popup after 5 sec
  useEffect(() => {
    const seen = localStorage.getItem("popupShown");

    if (!seen) {
      const timer = setTimeout(() => {
        setAutoOpen(true);

        localStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const showPopup = open || autoOpen;

  const handleClose = () => {
    setAutoOpen(false);

    onClose?.();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
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

      toast.success(
        "Lead submitted successfully!"
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        roomType: "",
      });

      handleClose();
    } catch (error) {
      console.error(error);

      toast.error("Submission failed!");
    } finally {
      setLoading(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div className="pgx-overlay">
      <div className="pgx-popup">
        {/* Close */}
        <button
          className="pgx-close"
          onClick={handleClose}
        >
          ×
        </button>

        {/* Left Content */}
        <div className="pgx-left">
          <h2>
            Find Your Perfect Luxury Living
          </h2>

          <p>
            Safe, Affordable & Comfortable
            Living
          </p>

          <ul>
            <li>✔ Furnished Rooms</li>
            <li>✔ WiFi & Food Included</li>
            <li>✔ Prime Locations</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="pgx-right">
          <h3>Get Details</h3>

          <form
            onSubmit={handleSubmit}
            className="pgx-form"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={handleChange}
              className="pgx-input"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="pgx-input"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="pgx-input"
            />

            <select
              required
              name="roomType"
              value={form.roomType}
              onChange={handleChange}
              className="pgx-input"
            >
              <option value="">
                Select Room Type
              </option>

              <option value="Single Room">
                Single Room
              </option>

              <option value="Double Sharing">
                Double Sharing
              </option>

              <option value="Triple Sharing">
                Triple Sharing
              </option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="pgx-btn"
            >
              {loading
                ? "Submitting..."
                : "Check Availability"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}