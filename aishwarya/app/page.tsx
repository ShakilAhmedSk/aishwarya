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

export default function Home() {
  return (
    <>
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