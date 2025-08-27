"use client";

import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/services.css";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
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

  // Decide how many to show initially
  const initialCount = 5;
  const displayedServices = showAll ? services : services.slice(0, initialCount);

  return (
    <section id="services" className="services-section">
      <h2>Οι Υπηρεσίες μας</h2>
      <div className="services-grid">
        {displayedServices.map((service, index) => (
          <div key={index} className="service-card" data-aos="zoom-in">
            <span className="service-icon">✔</span>
            <p>{service}</p>
          </div>
        ))}
      </div>

      {services.length > initialCount && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Δείτε λιγότερα" : "Δείτε όλες τις υπηρεσίες"}
          </button>
        </div>
      )}
    </section>
  );
}
