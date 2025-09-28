import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import gallery1 from '../img/Gallary/gallery1.jpeg';
import gallery2 from '../img/Gallary/gallery2.jpeg';
import gallery3 from '../img/Gallary/gallery3.jpeg';
import gallery4 from '../img/Gallary/gallery4.jpeg';
import gallery5 from '../img/Gallary/gallery5.jpeg';
import gallery6 from '../img/Gallary/gallery6.jpeg';
import gallery7 from '../img/Gallary/gallery7.jpeg';
import gallery8 from '../img/Gallary/gallery8.jpeg';
import gallery9 from '../img/Gallary/gallery9.jpeg';
import gallery11 from '../img/Gallary/gallery11.jpeg';
import gallery12 from '../img/Gallary/gallery12.jpeg';
import gallery13 from '../img/Gallary/gallery13.jpeg';
import gallery14 from '../img/Gallary/gallery14.jpeg';
import gallery15 from '../img/Gallary/gallery15.jpeg';
import gallery16 from '../img/Gallary/gallery16.jpeg';

const galleryImages = [
  { id: 1, src: gallery1, alt: "Polyhouse interior" },
  { id: 2, src: gallery2, alt: "Farm fresh vegetables" },
  { id: 3, src: gallery3, alt: "Farmers at work" },
  { id: 4, src: gallery4, alt: "Training session" },
  { id: 5, src: gallery5, alt: "Modern irrigation" },
  { id: 6, src: gallery6, alt: "Success celebration" },
  { id: 7, src: gallery7, alt: "Inside Pictures" },
  { id: 8, src: gallery8, alt: "Unripe Tamoto" },
  { id: 9, src: gallery9, alt: "Ripe Tamoto" },
  { id: 11, src: gallery11, alt: "Poly House" },
  { id: 12, src: gallery12, alt: "Poly house Plant" },
  { id: 13, src: gallery13, alt: "Poly house Stand Plant" },
  { id: 14, src: gallery14, alt: "Red Tamoto" },
  { id: 15, src: gallery15, alt: "Yellow Flower" },
  { id: 16, src: gallery16, alt: "lil Plants" },
];

export default function Gallery() {
  const [modalIdx, setModalIdx] = useState(null);

  const openModal = (idx) => setModalIdx(idx);
  const closeModal = () => setModalIdx(null);
  const prevImg = () => setModalIdx((modalIdx - 1 + galleryImages.length) % galleryImages.length);
  const nextImg = () => setModalIdx((modalIdx + 1) % galleryImages.length);

  return (
    <>
      <Header />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px" }}>
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>
          Learnofarms Gallery
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 14px rgba(0,0,0,0.1)",
                cursor: "pointer",
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => openModal(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.2s",
                }}
              />
            </div>
          ))}
        </div>

        {/* Modal with Prev/Next */}
        {modalIdx !== null && (
          <div
            onClick={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              style={{
                position: "absolute",
                left: "4vw",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "2.4rem",
                background: "rgba(0,0,0,0.3)",
                border: "none",
                borderRadius: "999px",
                color: "#fff",
                padding: "0.38em 0.8em",
                cursor: "pointer",
                zIndex: 1002,
              }}
              aria-label="Previous"
            >&#8592;</button>

            <img
              src={galleryImages[modalIdx].src}
              alt="Full size"
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                borderRadius: "12px",
                boxShadow: "0 6px 60px rgba(0,0,0,0.26)",
                zIndex: 1001,
              }}
              onClick={e => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              style={{
                position: "absolute",
                right: "4vw",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "2.4rem",
                background: "rgba(0,0,0,0.3)",
                border: "none",
                borderRadius: "999px",
                color: "#fff",
                padding: "0.38em 0.8em",
                cursor: "pointer",
                zIndex: 1002,
              }}
              aria-label="Next"
            >&#8594;</button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
