"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css";
import Aos from "aos";
import "aos/dist/aos.css";
import logo from '../../public/assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // 1000ms animation, play once
  }, []);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navigation-bar ${isScrolled ? "scrolled" : ""} ${isOpen ? "is-open" : ""
        }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" data-aos="flip-left">
          <Link href="/" aria-label="Λογότυπο, For my baby spa Katerini">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={120}
              className="logo-img"
              priority
            />
          </Link>
        </div>

        {/* Desktop links */}
        <div className="navbar-links">
          <Link href="/" className="navlinks" aria-label="Αρχική σελίδα" data-aos="fade-up">
            Αρχική
          </Link>
          <Link href="/#services" className="navlinks" aria-label="Σελίδα υπηρεσιών" data-aos="fade-up" data-aos-duration="1200">
            Υπηρεσίες
          </Link>
          <Link href="/#contact" className="navlinks" aria-label="Σελίδα επικοινωνίας" data-aos="fade-up" data-aos-duration="1400">
            Επικοινωνία
          </Link>
          <Link href="/gallery" className="navlinks" aria-label="Σελίδα φωτογραφιών" data-aos="fade-up" data-aos-duration="1600">
            Gallery
          </Link>
          <Link href="/#radevou" className="navlinks" aria-label="Σελίδα ραντεβού" data-aos="fade-up" data-aos-duration="1800">
            Κλείσε Ραντεβού
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-aos="flip-right"
        >
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="Αρχική σελίδα" data-aos="fade-up">
            Αρχική
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} aria-label="Σελίδα υπηρεσιών" data-aos="fade-up" data-aos-duration="1200">
            Υπηρεσίες
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} aria-label="Σελίδα επικοινωνίας"data-aos="fade-up" data-aos-duration="1400">
            Επικοινωνία
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} aria-label="Σελίδα φωτογραφιών" data-aos="fade-up" data-aos-duration="1600">
            Gallery
          </Link>
          <Link
            href="/#radevou"
            className="navlinks"
            onClick={() => setIsOpen(false)}
            aria-label="Σελίδα ραντεβού"
            data-aos-duration="1800" data-aos="fade-up"
          >
            Κλείσε Ραντεβού
          </Link>
        </div>
      )}
    </nav>
  );
}
