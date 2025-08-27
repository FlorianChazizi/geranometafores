"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/aboutus.css";

export default function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // 1000ms animation, play once
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 data-aos="fade-down">Σχετικά με Εμάς</h2>

      <div className="about-content">
        <p data-aos="fade-up" data-aos-delay="100">
          Η επιχείρηση ΦΕΪΖΟ ΝΙΚΟΣ δραστηριοποιείται, εδώ και πολλά χρόνια, στο χώρο των γερανών και των γερανομεταφορών και έχει την έδρα της στη Λάρισα.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          Αναλαμβάνει υπηρεσίες ανύψωσης και μεταφοράς και απευθύνεται σε ιδιώτες και επαγγελματίες.
        </p>

        <p data-aos="fade-up" data-aos-delay="300">
          Προσφέρει τις υπηρεσίες του με υπευθυνότητα, συνέπεια και επαγγελματισμό και πάντα τηρώντας τους αυστηρότερους κανόνες ασφαλείας.
        </p>
      </div>
    </section>
  );
}
