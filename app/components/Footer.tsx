"use client";
import "../styles/footer.css";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Quick Links */}
        <div className="footer-column">
          <h3>Γρήγοροι Σύνδεσμοι</h3>
          <ul>
            <li><a href="#home">Αρχική</a></li>
            <li><a href="#about">Σχετικά με εμάς</a></li>
            <li><a href="#services">Υπηρεσίες</a></li>
            <li><a href="#contact">Επικοινωνία</a></li>
          </ul>
        </div>

        {/* Business Info */}
        <div className="footer-column">
          <h3>Επικοινωνία</h3>
          <p><Phone size={16}/> +30 6948 379057</p>
          <p><Mail size={16}/> info@gecranes.gr</p>
          <p><MapPin size={16}/> Λάρισα, Ελλάδα</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Ακολουθήστε μας</h3>
          <div className="social-icons">
            <a href="#"><Facebook /></a>
            <a href="#"><Instagram /></a>
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
