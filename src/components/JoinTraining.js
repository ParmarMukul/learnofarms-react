import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function JoinTraining() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    // Add your form submission logic here (API call, validation, etc)
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="join-training-container">
        <h1 className="join-training-title">Join Learnofarms Training Program</h1>
        <p className="join-training-subtitle">
          Empower yourself with advanced knowledge and skills in modern polyhouse farming.
          Fill the form below to register.
        </p>

        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for joining the training!</h2>
            <p>We will contact you shortly with the training details.</p>
          </div>
        ) : (
          <form className="join-training-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
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
                onChange={handleChange}
                required
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
                onChange={handleChange}
                placeholder="Optional"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Why do you want to join? (Optional)</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your motivation..."
              />
            </div>
            <button type="submit" className="submit-btn">
              Join Training Program
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}