import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ReactGA from "react-ga";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Resume() {
  useScrollAnimation();
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section" id="resume" style={{padding: '80px 40px', backgroundColor: '#fff'}}>
      <Particle />
      <Container style={{maxWidth: '100%', padding: '0'}}>
        {/* Client Feedback Section */}
        <div className="scroll-fade-up" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', marginBottom: '120px'}}>
          {/* Left Content */}
          <div>
            <p style={{fontSize: '0.85em', fontWeight: 'bold', letterSpacing: '2px', color: '#666', marginBottom: '30px'}}>CLIENT FEEDBACK</p>
            
            <h2 style={{fontSize: '3.5em', fontWeight: 'bold', color: '#000', lineHeight: '1.2', marginBottom: '50px'}}>
              "I just wanted to share a quick note and let you know that you guys do a really good job.
            </h2>

            <div style={{marginBottom: '50px'}}>
              <p style={{fontSize: '1.1em', fontWeight: 'bold', color: '#000', margin: '0 0 8px 0'}}>Rohan Sing</p>
              <p style={{fontSize: '0.95em', color: '#666', margin: '0'}}>Project Manager, Airflow Tech Inc</p>
              
              <div style={{marginTop: '20px', display: 'flex', gap: '15px'}}>
                <svg width="80" height="20" viewBox="0 0 80 20" style={{opacity: 0.6}}>
                  <path d="M5,10 Q15,5 25,10" stroke="#000" strokeWidth="2" fill="none"/>
                  <path d="M30,10 Q40,5 50,10" stroke="#000" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>

            <div style={{marginTop: '50px'}}>
              <svg width="60" height="20" viewBox="0 0 60 20" style={{opacity: 0.3}}>
                <path d="M5,15 Q10,10 15,15 Q20,20 25,15 Q30,10 35,15" stroke="#000" strokeWidth="1.5" fill="none"/>
                <path d="M40,15 Q45,10 50,15 Q55,20 60,15" stroke="#000" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>

          {/* Right Image - Single Image */}
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '400px', height: '400px', margin: '0 auto'}}>
            <img src="/glasses.png" alt="Client" style={{width: '300px', height: 'auto', objectFit: 'contain'}} />
          </div>
        </div>

        {/* Stats Section - Image */}
        <div className="scroll-scale" style={{marginTop: '100px', textAlign: 'center'}}>
          <img src="/stats.png" alt="Statistics" style={{maxWidth: '100%', height: 'auto'}} />
        </div>
      </Container>
    </Container>
  );
}

export default Resume;
