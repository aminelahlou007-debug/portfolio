import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactGA from "react-ga";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function About() {
  useScrollAnimation();
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="about-header-row">
          <Col md={12} className="about-header-col">
            <div className="about-header-divider">
              <span className="about-header-symbol">✦</span>
            </div>
            <h1 className="about-header-title">
              EXPERIENCE
            </h1>
            <p className="about-header-description">
              There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form.
            </p>
          </Col>
        </Row>

        {/* Experience List */}
        <Row className="about-experience-row">
          <Col md={12}>
            <div className="about-experience-container">
              {/* First Experience - Dark */}
              <div className="about-experience-card about-experience-dark scroll-fade-up">
                <div className="about-experience-number">1</div>
                <div className="about-experience-content">
                  <h3 className="about-experience-title">Micro-interactions Awwwards Team</h3>
                  <p className="about-experience-company">Focus Lab Agency -United State</p>
                </div>
                <div className="about-experience-duration">
                  <p className="about-duration-label">JOB DURATION - 2 YEARS</p>
                </div>
              </div>

              {/* Second Experience */}
              <div className="about-experience-card about-experience-light scroll-fade-up">
                <div className="about-experience-number">2</div>
                <div className="about-experience-content">
                  <h3 className="about-experience-title">Senior UI Designer</h3>
                  <p className="about-experience-company">User-Hub - Bangladesh</p>
                </div>
                <div className="about-experience-duration">
                  <p className="about-duration-label">JOB DURATION - 1 YEAR</p>
                </div>
              </div>

              {/* Third Experience */}
              <div className="about-experience-card about-experience-light scroll-fade-up">
                <div className="about-experience-number">3</div>
                <div className="about-experience-content">
                  <h3 className="about-experience-title">Product Design</h3>
                  <p className="about-experience-company">Zomato Digial Agency- India</p>
                </div>
                <div className="about-experience-duration">
                  <p className="about-duration-label">JOB DURATION - 2 YEARS</p>
                </div>
              </div>

              {/* Fourth Experience */}
              <div className="about-experience-card about-experience-light scroll-fade-up">
                <div className="about-experience-number">4</div>
                <div className="about-experience-content">
                  <h3 className="about-experience-title">Webflow Team Manager</h3>
                  <p className="about-experience-company">Google Team - UK</p>
                </div>
                <div className="about-experience-duration">
                  <p className="about-duration-label">JOB DURATION - 2 YEARS</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
