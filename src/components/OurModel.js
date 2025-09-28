import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import polyhouseImg from "../img/polyhouse.jpg";

export default function OurModel() {
  return (
    <>
      <Header />
      <section className="polyhouse-section" id="polyhouse-section">
            <div className="polyhouse-container">
              <h2 className="polyhouse-title">
                Our <span className="highlight-green">Project Model</span>
              </h2>
             <div className="learno-farms-motto">
                       <p>🌱 Healthy Plants , Healthy Future 🌱</p>
                       <p>At LearnoFarms, we believe that a strong beginning leads to a successful harvest.</p>
                     </div>
              <div className="polyhouse-flex">
                <div className="polyhouse-img-col">
                  <img
                    src={polyhouseImg}
                    alt="Interior view of polyhouse with plants"
                    className="polyhouse-img"
                  />
                </div>
                <div className="polyhouse-steps-col">
                  <h3 className="how-title"> The foundation for robust growth and higher yields.</h3>
                  <ul className="steps-list">
                    <li>
                      <span className="step-badge">1</span>
                      <span className="step-label">
                        <strong>Controlled Environment</strong>
                        <br />
                        <span className="step-desc">
                          Temperature, humidity, and light optimized for maximum growth
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="step-badge">2</span>
                      <span className="step-label">
                        <strong>Precise Farming</strong>
                        <br />
                        <span className="step-desc">
                          Schedule fertigation as per crop needs.
                        </span>
                      </span>
                    </li>
                    <li>
                      <span className="step-badge">3</span>
                      <span className="step-label">
                        <strong>Year-Round Production</strong>
                        <br />
                        <span className="step-desc">
                          Grow premium vegetables regardless of weather conditions
                        </span>
                      </span>
                    </li>

                    <li>
                                    <span className="step-badge">4</span>
                                                  <span className="step-label">
                                                    <strong>Strong roots </strong>
                                                    <br />
                                                    <span className="step-desc">
                                                      Better nutrient uptake
                                                    </span>
                                                  </span>
                                               </li>



                                                                           <li>
                                                                                                            <span className="step-badge">5</span>
                                                                                                                                     <span className="step-label">
                                                                                                                                       <strong>Quality nursery </strong>
                                                                                                                                       <br />
                                                                                                                                       <span className="step-desc">
                                                                                                                                         Healthy, disease-free plants ☘️
                                                                                                                                       </span>
                                                                                                                                     </span>
                                                                                                                                   </li>


                                                                                  <span className="step-desc">
                                                                                  By focusing on plant health and providing the right nutrition at the right stage, we ensure that every plant carries the potential to thrive, empowering farmers with sustainable and profitable farming solutions.
                                                                                  </span>
                  </ul>
                </div>
              </div>
            </div>
          </section>
      <Footer />
    </>
  );
}