import React from "react";
import './style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import About from "./components/About";
import JoinTraining from "./components/JoinTraining";
import OurModel from "./components/OurModel";
import ScheduleConsultation from "./components/ScheduleConsultation";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/jointraining" element={<JoinTraining />} />
        <Route path="/ourmodel" element={<OurModel />} />
        <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
      </Routes>
    </Router>
  );
}
