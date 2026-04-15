"use client"
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Why from "@/components/why/Why";
import Locations from "@/components/locations/Locations";

import Features from "@/components/features/Features";
import Community from "@/components/community/Community";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Units from "@/components/units/Units";
import LeadPopup from "@/components/LeadForm/LeadPopup";
import { useEffect } from "react";

export default function Home() {

    useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");

      const scrollToSection = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      };

      // delay needed because DOM loads after route change
      setTimeout(scrollToSection, 100);
    }
  }, []);
  return (
    <>
    <LeadPopup/>
      <Hero />
      <About />
      <Why />
      <Locations />
       <Units/>
      {/* <Features /> */}
      {/* <Community /> */}
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}