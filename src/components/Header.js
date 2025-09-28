import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  // Update isDesktop state on window resize
  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth > 900);
      if (window.innerWidth > 900) setMenuOpen(false); // Close menu when switching to desktop
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header">
      <div
        className="nav-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 28px",
        }}
      >
        <div className="logo" style={{ flex: "0 0 auto" }}>
          <Link to="/">
            <img src={logo} alt="Learnofarms logo" />
          </Link>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: isDesktop ? "none" : "inline-flex",
            fontSize: 28,
            background: "none",
            border: "none",
            cursor: "pointer",
            marginRight: 16,
          }}
        >
          ☰
        </button>

        {/* Navigation menu */}
        <nav
          className="menu"
          style={{
            display: isDesktop || menuOpen ? "flex" : "none",
            flexDirection: isDesktop ? "row" : "column",
            position: isDesktop ? "static" : "absolute",
            backgroundColor: isDesktop ? "transparent" : "#fff",
            top: isDesktop ? "auto" : "80px",
            right: isDesktop ? "auto" : "40px",
            padding: isDesktop ? "0" : "20px",
            borderRadius: 8,
            boxShadow: isDesktop ? "none" : "0 4px 8px rgba(0,0,0,0.1)",
            gap: 24,
            zIndex: 1000,
            minWidth: isDesktop ? "auto" : 180,
            flex: "1 1 auto",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link to="/jointraining" onClick={() => setMenuOpen(false)}>
            Training
          </Link>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
          <Link to="/ourmodel" onClick={() => setMenuOpen(false)}>
            Our Model
          </Link>
          <a href="#ctaSection" onClick={() => setMenuOpen(false)}>
            Our Contact
          </a>
        </nav>
      </div>
    </header>
  );
}