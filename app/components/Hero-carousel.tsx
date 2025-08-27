"use client";
import Image from "next/image";
// Icon imports
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Image imports
import Banner1 from '../../public/assets/banner1.jpg';
import Banner2 from '../../public/assets/banner2.jpg';
import Banner3 from '../../public/assets/banner3.jpg';
// CSS import
import '../styles/hero-carousel.css';



const slides = [
    {
        image: Banner1,
        title: "Γερανομεταφορές Νίκος",
        subtitle: "Μεταφορές, Ανυψώσεις & Ασφάλεια σε κάθε έργο",
        cta: "Καλέστε μας τώρα",
    },
    {
        image: Banner2,
        title: "Γερανομεταφορές Νίκος",
        subtitle: "Μεταφορές, Ανυψώσεις & Ασφάλεια σε κάθε έργο",
        cta: "Καλέστε μας τώρα",
    },
    {
        image: Banner3,
        title: "Γερανομεταφορές Νίκος",
        subtitle: "Μεταφορές, Ανυψώσεις & Ασφάλεια σε κάθε έργο",
        cta: "Καλέστε μας τώρα",
    }
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section id="home" className="hero-carousel">
            <div className="carousel-container">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <div className="gradient-overlay carousel-image-wrapper" ></div>
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            className="carousel-image"
                            fill
                            priority={index == 0}    // only first slide eager load
                        />                        <div className="carousel-text">
                            <h1>{slide.title}</h1>
                            <p>{slide.subtitle}</p>
                            <div className="carousel-buttons">
                                <a href="tel:+306948379057" className="banner-btn">
                                    {slide.cta}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label="επόμενη φωτογραφία"
                        className={`dot ${index === currentSlide ? 'active' : ''}`
                        }

                    />
                ))}
            </div>

            {/* Arrows */}
            <button onClick={prevSlide} className="arrow left" aria-label="προηγούμενη φωτογραφία">
                <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="arrow right" aria-label="επόμενη φωτογραφία">
                <ChevronRight />
            </button>
        </section>
    );
}