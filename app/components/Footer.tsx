"use client";
import { useEffect } from "react";

import "../styles/footer.css";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

import "../styles/contact.css";
export default function Footer() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links */}
                <div className="footer-column">
                    <h3>Γρήγοροι Σύνδεσμοι</h3>
                    <ul>
                        <li data-aos="fade-up"><a href="#home"  >Αρχική</a></li>
                        <li data-aos="fade-right" data-aos-duration="1200"><a href="#about">Σχετικά με εμάς</a></li>
                        <li data-aos="fade-right" data-aos-duration="1400"><a href="#services" >Υπηρεσίες</a></li>
                        <li data-aos="fade-up" data-aos-duration="1600"><a href="#contact" >Επικοινωνία</a></li>
                    </ul>
                </div>

                {/* Business Info */}
                <div className="footer-column">
                    <h3>Επικοινωνία</h3>
                    <p data-aos="fade-up"><Phone size={16} /> +30 6948 379057</p>
                    <p data-aos="fade-right"><Mail size={16} /> geranometaforesnikos@gmail.com</p>
                    <p data-aos="fade-up"><MapPin size={16} /> Λάρισα, Ελλάδα</p>
                </div>

                {/* Social Media */}
                <div className="footer-column">
                    <h3>Ακολουθήστε μας</h3>
                    <div className="social-icons">
                        <a href="#"   aria-label='Facebook Γερανομεταφορές Νίκοσ Λάρισα'><Facebook /></a>
                        <a href="#"  aria-label='Instagram Γερανομεταφορές Νίκοσ Λάρισα'><Instagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Γερανομεταφορές Νίκος. Όλα τα δικαιώματα κατοχυρωμένα.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a> | <a href="#">Όροι Χρήσης</a> | <a href="#">Sitemap</a>
                </div>
            </div>
        </footer>
    );
}
