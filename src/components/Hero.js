import React, { useState, useEffect } from "react";
import headerImg from "../img/header.jpeg";
import gallery1 from "../img/Crousel/Crouselone.jpeg";
import gallery2 from "../img/Crousel/Crouseltwo.jpeg";
import gallery3 from "../img/Crousel/Crouselthree.jpeg";
import gallery4 from "../img/Crousel/Crouselfour.jpeg";
import gallery5 from "../img/Crousel/Crouselfive.jpeg";
import gallery6 from "../img/Crousel/Crouselsix.jpeg";
import gallery7 from "../img/Crousel/Crouselseven.jpeg";
import gallery8 from "../img/Crousel/coursereight.jpeg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${images[currentIndex]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="container">
        <h1>Learn and Earn Together</h1>
        <p>
          Revolutionizing agriculture through modern polyhouse farming.
          Empowering farmers with hi-tech knowledge and profitable solutions.
        </p>
        <a href="#cta" className="btn btn-fill">
          Start Learning Today
        </a>
      </div>

      {/* Carousel dots */}
      <div className="carousel-dots" style={{ display: "flex", justifyContent: "center", gap: "18px", marginTop: 30, marginBottom: 10 }}>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`carousel-dot${idx === currentIndex ? " active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            tabIndex={0}
            aria-label={`Go to slide ${idx + 1}`}
            role="button"
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: idx === currentIndex ? "#218c4c" : "#fff",
              boxShadow: "0px 1px 6px rgba(40,40,40,0.12)",
              cursor: "pointer",
              display: "inline-block",
              transition: "background-color 0.25s, box-shadow 0.15s"
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}
