import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Header />
      <div className="about-section">
        <h1>About Learnofarms</h1>
        <p>
          Welcome to Learnofarms! We revolutionize farming through modern techniques and hi-tech practices...
        </p>
        <p>
          Learnofarms focuses on controlled environment & traditional farming, precise farming, year-round crop production, and market linkage...
        </p>
        <p>
          Join us on a journey of sustainable agriculture and learn how technology and innovation can uplift local farmers...
        </p>
      </div>


      <Footer />
    </>
  );
}