import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";

export default function ScheduleConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ send email using EmailJS
    emailjs
      .send(
        "LearnoFarmsEmailService",   // replace with your EmailJS service ID
        "scheduleConsultation",  // replace with your EmailJS template ID
        formData,            // the data object
        "NtknOStIlttWueZou"    // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("Email failed:", error.text);
          alert("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <>
      <Header />
      <main className="consultation-container">
        <h1 className="consultation-title">Schedule a Consultation</h1>
        <p className="consultation-subtitle">
          Fill out the form to book your personalized consultation session with Learnofarms experts.
        </p>

        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for scheduling!</h2>
            <p>We will contact you soon to confirm your consultation date and time.</p>
          </div>
        ) : (
          <form className="consultation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                required
                onChange={handleChange}
                placeholder="example@mail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                required
                onChange={handleChange}
                placeholder="Mobile number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredDate">Preferred Date *</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preferredTime">Preferred Time *</label>
              <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                required
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                placeholder="Any specific queries or requirements..."
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Schedule Consultation
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}