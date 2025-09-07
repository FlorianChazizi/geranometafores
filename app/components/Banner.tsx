import Image from "next/image";
import "../styles/banner.css";
import banner from '../../public/assets/banner2.jpg';
export default function Banner() {
  return (
    <section className="banner">
      {/* Background image */}
      <Image
        src={banner} // put your truck image inside /public
        alt="Γερανοφόρο φορτηγό"
        fill
        priority
        className="banner-image"
      />

      {/* Overlay */}
      <div className="banner-overlay"></div>

      {/* Text content */}
      <div className="banner-content">
        <h1>Γερανομεταφορές Νίκος</h1>
        <p>Μεταφορές, Ανυψώσεις & Ασφάλεια σε κάθε έργο</p>
        <a href="tel:+306948379057" aria-label="Τηλέφωνο Γερανομεταφορές Λάρισα" className="banner-btn">
         Καλέστε μας τώρα
        </a>
      </div>
    </section>
  );
}
