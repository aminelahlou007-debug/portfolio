import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Resume() {
  useScrollAnimation();
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section" id="resume">
      <Container className="resume-main-container">
        {/* Client Feedback Section */}
        <div className="resume-feedback-section">
          {/* Left Content */}
          <div className="resume-feedback-content">
            <p className="resume-feedback-label">CLIENT FEEDBACK</p>
            
            <h2 className="resume-feedback-quote">
              "I just wanted to share a quick note and let you know that you guys do a really good job.
            </h2>

            <div className="resume-feedback-author">
              <p className="resume-author-name">Rohan Sing</p>
              <p className="resume-author-title">Project Manager, Airflow Tech Inc</p>
              
              <div className="resume-svg-container">
                <svg width="80" height="20" viewBox="0 0 80 20" className="resume-svg-icon">
                  <path d="M5,10 Q15,5 25,10" stroke="#000" strokeWidth="2" fill="none"/>
                  <path d="M30,10 Q40,5 50,10" stroke="#000" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <div className="resume-footer-decoration">
              <svg width="60" height="20" viewBox="0 0 60 20" className="resume-svg-decoration">
                <path d="M5,15 Q10,10 15,15 Q20,20 25,15 Q30,10 35,15" stroke="#000" strokeWidth="1.5" fill="none"/>
                <path d="M40,15 Q45,10 50,15 Q55,20 60,15" stroke="#000" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Right Image - Single Image */}
          <div className="resume-feedback-image">
            <img src="/glasses.png" alt="Client" className="resume-client-image" />
          </div>
        </div>

        {/* Stats Section - Image */}
        <div className="resume-stats-section">
          <img src="/stats.png" alt="Statistics" className="resume-stats-image" />
        </div>
      </Container>
    </Container>
  );
}

export default Resume;
