import { Link } from "react-router-dom";

export default function CTA(){
  return (
    <section className="cta-band" id="ctaSection">
      <div className="container">
        <h2>Ready to Transform Your Farming?</h2>
        <p>Join hundreds of successful farmers who have increased their income through our modern techniques and expert guidance.</p>
        <div style={{marginTop:16}}>
          <Link to="/jointraining">
            <button className="cta-btn cta-join">
              Join Training Program
            </button>
          </Link>
          <Link to="/schedule-consultation" className="pill pill-outline" role="button">
            Schedule Consultation
          </Link>

        </div>
        <div className="contact-cards" id="contact">
          <div className="contact">
            <h3 style={{margin:6}}>Call Us Today</h3>
            <div>+91 XXXXX  XXXXX</div>
          </div>
          <div className="contact">
            <h3 style={{margin:6}}>WhatsApp Support</h3>
            <div>Available 24/7</div>
          </div>
          <div className="contact">
            <h3 style={{margin:6}}>Visit Our Farm</h3>
            <div>See live demonstrations</div>
          </div>
        </div>
      </div>
    </section>
  )
}