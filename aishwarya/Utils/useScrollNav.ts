"use client";

export default function useScrollNav() {
  const handleNavScroll = (id: string) => {
    if (typeof window === "undefined") return;

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Element with id "${id}" not found`);
    }
  };

  return { handleNavScroll };
}