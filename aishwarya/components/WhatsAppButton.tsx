"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const WHATSAPP_PHONE = "919845389055";

export default function WhatsAppButton() {
  const [message, setMessage] = useState("");

  // ✅ Run ONLY on client
  useEffect(() => {
    const path = window.location.pathname
      .replaceAll("-", " ")
      .replace("/", "");

    setMessage(`Hi, I'm interested in ${path}`);
  }, []);

  // ❗ Avoid rendering until message is ready
  if (!message) return null;

  const whatsappURL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "90px",
        right: "32px",
        zIndex: 99999,
      }}
    >
      <div
        className="group relative flex items-center justify-center 
        bg-green-600 hover:bg-green-700 text-white
        w-14 h-14 rounded-full shadow-xl transition-all duration-300"
      >
        <Icon icon="ic:baseline-whatsapp" width={26} height={26} />

      </div>
    </a>
  );
}