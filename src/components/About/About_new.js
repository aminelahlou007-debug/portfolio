import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import ReactGA from "react-ga";

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", marginBottom: "60px" }}>
          <Col md={12} style={{paddingTop: "30px", paddingBottom: "30px", textAlign: "center"}}>
            <div style={{marginBottom: "20px"}}>
              <span style={{fontSize: "24px", color: "#666"}}>✦</span>
            </div>
            <h1 style={{ fontSize: "3em", paddingBottom: "20px", fontWeight: "700", letterSpacing: "2px" }}>
              EXPERIENCE
            </h1>
            <p style={{color: '#666', maxWidth: '700px', margin: '0 auto', fontSize: '0.95rem', lineHeight: '1.6'}}>
              There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form.
            </p>
          </Col>
        </Row>

        {/* Experience List */}
        <Row style={{ marginBottom: "60px" }}>
          <Col md={12}>
            <div style={{maxWidth: '1100px', margin: '0 auto'}}>
              {/* First Experience - Dark */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                padding: '30px 40px',
                backgroundColor: '#1a1a1a',
                color: '#fff',
                marginBottom: '20px',
                borderRadius: '0',
                gap: '30px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>1</div>
                <div>
                  <h3 style={{margin: '0 0 4px 0', fontSize: '1.2em', fontWeight: '700'}}>Micro-interactions Awwwards Team</h3>
                  <p style={{margin: 0, fontSize: '0.9em', color: '#aaa'}}>Focus Lab Agency -United State</p>
                </div>
                <div style={{textAlign: 'right', paddingLeft: '30px', borderLeft: '1px solid #555'}}>
                  <p style={{margin: 0, fontSize: '0.85em', fontWeight: '600'}}>JOB DURATION - 2 YEARS</p>
                </div>
              </div>

              {/* Second Experience */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                padding: '30px 40px',
                backgroundColor: '#fff',
                color: '#222',
                marginBottom: '20px',
                border: '1px solid #ddd',
                borderRadius: '0',
                gap: '30px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#fff'
                }}>2</div>
                <div>
                  <h3 style={{margin: '0 0 4px 0', fontSize: '1.2em', fontWeight: '700'}}>Senior UI Designer</h3>
                  <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>User-Hub - Bangladesh</p>
                </div>
                <div style={{textAlign: 'right', paddingLeft: '30px', borderLeft: '1px solid #ddd'}}>
                  <p style={{margin: 0, fontSize: '0.85em', fontWeight: '600'}}>JOB DURATION - 1 YEAR</p>
                </div>
              </div>

              {/* Third Experience */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                alignItems: 'center',
                padding: '30px 40px',
                backgroundColor: '#fff',
                color: '#222',
                marginBottom: '20px',
                border: '1px solid #ddd',
                borderRadius: '0',
                gap: '30px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#fff'
                }}>3</div>
                <div>
                  <h3 style={{margin: '0 0 4px 0', fontSize: '1.2em', fontWeight: '700'}}>Product Design</h3>
                  <p style={{margin: 0, fontSize: '0.9em', color: '#666'}}>Zomato Digial Agency- India</p>
                </div>
                <div style={{textAlign: 'right', paddingLeft: '30px', borderLeft: '1px solid #ddd'}}>
                  <p style={{margin: 0, fontSize: '0.85em', fontWeight: '600'}}>JOB DURATION - 2 YEARS</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          Ensemble de compétences <strong className="purple">professionnelles </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils</strong> que j'utilise
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
