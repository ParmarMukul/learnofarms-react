export default function Footer() {
  return (
    <footer>
      <div className="container foot">
        <div>
          <div className="brand-mark">LEARNOFARMS</div>
          <p>
            Revolutionizing farming through modern techniques and hi-tech
            practices. Empowering farmers with knowledge, training, and profitable
            solutions.
          </p>
          {/* Social icons centered below brand text */}
          <div className="social" style={{ justifyContent: "center", display: "flex", gap: "18px", marginTop: "18px" }}>
            <a href="https://www.linkedin.com/company/learnofarms" aria-label="LinkedIn" style={socialIconStyle}>in</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="#polyhouse-section">Our Model</a></li>
            <li><a href="/jointraining">Training Programs</a></li>
            <li><a href="/gallery">Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Info</h4>
          <ul>
            <li>📞 +91 XXXXXXXXXX</li>
            <li>✉️ info@learnofarms.com</li>
            <li>📍 Learnofarms, Shahpur Road Duhai Ghaziabad</li>
          </ul>
        </div>
      </div>
      <div className="copy">© 2025 LEARNOFARMS. All rights reserved. Learn and Earn Together.</div>
    </footer>
  );
}

// Optional inline styles for social icons (replace with CSS classes if preferred)
const socialIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "48px",
  height: "48px",
  borderRadius: "999px",
  backgroundColor: "#43b555",
  color: "#fff",
  fontWeight: "700",
  fontSize: "1.5rem",
  textDecoration: "none"
};
