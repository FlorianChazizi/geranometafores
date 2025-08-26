"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.css"; 

import logo from '../../public/assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navigation-bar ${isScrolled ? "scrolled" : ""} ${
        isOpen ? "is-open" : ""
      }`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
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
          <Link href="/" className="navlinks" aria-label="Αρχική σελίδα">
            Αρχική
          </Link>
          <Link href="/#services" className="navlinks" aria-label="Σελίδα υπηρεσιών">
            Υπηρεσίες
          </Link>
          <Link href="/#contact" className="navlinks" aria-label="Σελίδα επικοινωνίας">
            Επικοινωνία
          </Link>
          <Link href="/gallery" className="navlinks" aria-label="Σελίδα φωτογραφιών">
            Gallery
          </Link>
          <Link href="/#radevou" className="navlinks contact" aria-label="Σελίδα ραντεβού">
            Κλείσε Ραντεβού
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="hamburger"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="Αρχική σελίδα">
            Αρχική
          </Link>
          <Link href="/#services" onClick={() => setIsOpen(false)} aria-label="Σελίδα υπηρεσιών">
            Υπηρεσίες
          </Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)} aria-label="Σελίδα επικοινωνίας">
            Επικοινωνία
          </Link>
          <Link href="/gallery" onClick={() => setIsOpen(false)} aria-label="Σελίδα φωτογραφιών">
            Gallery
          </Link>
          <Link
            href="/#radevou"
            className="navlinks contact"
            onClick={() => setIsOpen(false)}
            aria-label="Σελίδα ραντεβού"
          >
            Κλείσε Ραντεβού
          </Link>
        </div>
      )}
    </nav>
  );
}
