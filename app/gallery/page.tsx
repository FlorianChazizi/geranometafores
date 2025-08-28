"use client";
import Image from "next/image";
import "../styles/gallery.css";

import Crane1 from "../../public/assets/crane1.jpg";
import Crane2 from "../../public/assets/crane2.jpg";
import Crane3 from "../../public/assets/crane3.jpg";

export default function GalleryPage() {
  const images = [
    { src: Crane1, alt: "Γερανός σε έργο ανύψωσης" },
    { src: Crane2, alt: "Μεταφορά σκαφών" },
    { src: Crane3, alt: "Εργασίες ανύψωσης πάνελ" },
  ];

  return (
    <section className="gallery-section">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-card">
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={350}
              className="gallery-img"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
