"use client";
import "../styles/showcase.css";
import Image from "next/image";
import Link from "next/link";

import Crane1 from "../../public/assets/crane1.jpg";

export default function Showcase() {
  const images = [
    { src: Crane1, alt: "Γερανός σε ανύψωση φορτίου" },
    { src: Crane1, alt: "Μεταφορά σκαφών με γερανό" },
    { src: Crane1, alt: "Ανέγερση πυλώνα" },
    { src: Crane1, alt: "Μεταφορά βαρέως τύπου" },
  ];

  return (
    <section id="showcase" className="showcase-section">
      <h2>Δείτε τη δουλειά μας</h2>
      <div className="showcase-grid">
        {images.map((img, i) => (
          <div key={i} className="showcase-card">
            <Image
              src={img.src}       // ✅ Pass imported image directly
              alt={img.alt}
              width={400}
              height={300}
              className="showcase-img"
              placeholder="blur"  // optional: adds blur placeholder
            />
          </div>
        ))}
      </div>

      <div className="showcase-btn">
        <Link href="/gallery" className="btn">
          Δείτε Περισσότερα
        </Link>
      </div>
    </section>
  );
}
