"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="fade-down">Επικοινωνία</h2>

      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <a href="tel:+306948379057">+30 694 837 9057</a>
          </div>

          <div className="contact-item">
            <Mail className="contact-icon" />
            <a href="mailto:geranometaforesnikos@gmail.com">geranometaforesnikos@gmail.com</a>
          </div>

          <div className="contact-item">
            <MapPin className="contact-icon" />
            <span>Λάρισα, Ελλάδα</span>
          </div>
        </div>

        <div className="contact-map" data-aos="fade-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.563046701994!2d22.41912531535068!3d39.639022979460205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a76bd453df1b5d%3A0x400bd2ce2b97490!2sLarisa!5e0!3m2!1sen!2sgr!4v1695900000000!5m2!1sen!2sgr"
            width="100%"
            height="350"
            title="Λάρισα, Γερανομεταφορές Νίκος"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
