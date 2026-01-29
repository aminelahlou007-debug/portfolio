import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ReactGA from "react-ga";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);
  useScrollAnimation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const services = [
    "Mobile App",
    "Website Design",
    "Branding",
    "Webflow development",
    "App design",
    "Graphic design",
    "Wordpress"
  ];

  return (
    <Container fluid className="contact-section" id="contact">
      <Container className="contact-container">
        <div className="contact-header scroll-fade-up">
          <div className="contact-pattern"></div>
          
          <h1 className="contact-title">
            Let's work{' '}
            <span className="contact-underline">
              together
              <svg className="contact-underline-svg" height="15" viewBox="0 0 300 15">
                <path d="M5,10 L295,10" stroke="#000" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#000"/>
                  </marker>
                </defs>
              </svg>
            </span>
          </h1>
          <p className="contact-subtitle">
            Got a project in mind? Drop me a message and let's discuss it.
          </p>
        </div>

        <form className="contact-form scroll-fade-up">
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label>Name:*</label>
              <input 
                type="text" 
                placeholder="Hello..." 
                className="contact-input"
              />
            </div>
            <div className="contact-form-group">
              <label>Email:*</label>
              <input 
                type="email" 
                placeholder="Where can i reply" 
                className="contact-input"
              />
            </div>
          </div>

            <label>Company name</label>
            <input 
              type="text" 
              placeholder="Your company or website?" 
              className="contact-input"
            />
          </div>

          {/* Services */}
            <div className="contact-services-list">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`contact-service-btn ${selectedServices.includes(service) ? 'active' : ''}`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
            <div className="contact-submit-wrapper">
              <svg className="contact-arrow-svg" width="40" height="40" viewBox="0 0 40 40">
                <path d="M5,20 L15,10 M15,10 L25,20 M25,20 L35,10" stroke="#000" strokeWidth="3" fill="none"/>
              </svg>
              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Me
              </button>
            </div>
          </div>

          <p className="contact-note">
            I'll get back to you within 24 hours
          </p>
        </form>

        {/* Footer */}
        <div className="contact-footer">
          <div className="contact-links">
            <a href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">Linkdin</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer">Behance</a>
          </div>
          <p>Personal portfolio©2024</p>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
