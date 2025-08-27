"use client";

import { useEffect } from "react";
import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import "../styles/aboutus.css";

// Import images
import Crane1 from "../../public/assets/crane1.jpg";
import Crane2 from "../../public/assets/crane2.jpg";
import Crane3 from "../../public/assets/crane3.jpg";

export default function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-down">Σχετικά με Εμάς</h2>

      <div className="about-content">
        <p data-aos="fade-up" data-aos-delay="100">
          Η επιχείρηση ΦΕΪΖΟ ΝΙΚΟΣ δραστηριοποιείται, εδώ και πολλά χρόνια, στο χώρο των γερανών και των γερανομεταφορών και έχει την έδρα της στη Λάρισα.
        </p>
        <div className="about-image" data-aos="fade-up" data-aos-delay="150">
          <Image src={Crane1} alt="Γερανοφόρο 1" width={600} height={400} className="rounded-image"  data-aos="zoom-in-up"/>
        </div>

        <p data-aos="fade-up" data-aos-delay="200">
          Αναλαμβάνει υπηρεσίες ανύψωσης και μεταφοράς και απευθύνεται σε ιδιώτες και επαγγελματίες.
        </p>
        <div className="about-image" data-aos="fade-up" data-aos-delay="250">
          <Image src={Crane2} alt="Γερανοφόρο 2" width={600} height={400} className="rounded-image"  data-aos="zoom-in-up"/>
        </div>

        <p data-aos="fade-up" data-aos-delay="300">
          Προσφέρει τις υπηρεσίες του με υπευθυνότητα, συνέπεια και επαγγελματισμό και πάντα τηρώντας τους αυστηρότερους κανόνες ασφαλείας.
        </p>
        <div className="about-image" data-aos="fade-up" data-aos-delay="350">
          <Image src={Crane3} alt="Γερανοφόρο 3" width={600} height={400} className="rounded-image"  data-aos="zoom-in-up"/>
        </div>
      </div>
    </section>
  );
}
