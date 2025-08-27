"use client";
import { useEffect } from "react";
import '../styles/services.css';
import Aos from "aos";
import "aos/dist/aos.css";
export default function Services() {
      useEffect(() => {
        Aos.init({ duration: 1000, once: true }); // 1000ms animation, play once
      }, []);

  const services = [
    "Ανεγέρσεις πυλώνων",
    "Ανέλκυση - καθέλκυση σκαφών",
    "Ανυψώσεις",
    "Ανύψωση κάθε είδους αντικειμένου",
    "Ανυψωτικές εργασίες με καλάθι",
    "Ενοικίαση γερανών",
    "Μεταφορές βαρέως τύπου",
    "Μεταφορές και ανυψώσεις αλουμινίων και τζαμιών",
    "Μεταφορές και ανυψώσεις πάνελ",
    "Μεταφορές και ανυψώσεις σιδηροκατασκευών",
  ];

  return (
    <section id="services" className="services-section">
      <h2>Οι Υπηρεσίες μας</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" data-aos="zoom-in">
            <span className="service-icon" >✔</span>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
