"use client";

import HeroCarousel from "./components/Hero-carousel";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Services />
      <AboutUs />
      <Contact />
      <Showcase />
    </div>
  );
}
