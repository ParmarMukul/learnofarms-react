import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import WhyChoose from "./WhyChoose";
import PolyhouseModel from "./PolyhouseModel";
import CTA from "./CTA";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChoose />
        <PolyhouseModel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
