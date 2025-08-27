import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeroCarousel from "./components/Hero-carousel";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <Services />
      <AboutUs />
    <h1>welcome</h1>
    </div>
  );
}
