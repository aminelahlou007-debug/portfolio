import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
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
    <Container fluid className="contact-section" id="contact" style={{padding: '100px 40px', backgroundColor: '#fff', minHeight: '100vh'}}>
      <Particle />
      <Container style={{maxWidth: '800px'}}>
        {/* Header */}
        <div className="scroll-fade-up" style={{marginBottom: '60px', position: 'relative'}}>
          <div style={{
            position: 'absolute',
            right: '0',
            top: '-20px',
            width: '80px',
            height: '80px',
            backgroundImage: 'radial-gradient(circle, #ddd 15%, transparent 15%)',
            backgroundSize: '15px 15px',
            opacity: 0.6
          }}></div>
          
          <h1 style={{fontSize: '3.5em', fontWeight: 'bold', marginBottom: '20px', color: '#000', lineHeight: '1.2'}}>
            Let's work{' '}
            <span style={{position: 'relative'}}>
              together
              <svg style={{position: 'absolute', bottom: '-10px', left: '0', width: '100%'}} height="15" viewBox="0 0 300 15">
                <path d="M5,10 L295,10" stroke="#000" strokeWidth="2" fill="none" markerEnd="url(#arrow)"/>
                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#000"/>
                  </marker>
                </defs>
              </svg>
            </span>
          </h1>
          <p style={{color: '#666', fontSize: '1rem', marginTop: '30px'}}>
            Got a project in mind? Drop me a message and let's discuss it.
          </p>
        </div>

        {/* Form */}
        <form className="scroll-fade-up" style={{marginBottom: '80px'}}>
          {/* Name and Email Row */}
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px'}}>
            <div>
              <label style={{fontSize: '0.95em', fontWeight: '600', marginBottom: '10px', display: 'block'}}>Name:*</label>
              <input 
                type="text" 
                placeholder="Hello..." 
                style={{
                  width: '100%',
                  padding: '15px 0',
                  border: 'none',
                  borderBottom: '1px solid #ddd',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{fontSize: '0.95em', fontWeight: '600', marginBottom: '10px', display: 'block'}}>Email:*</label>
              <input 
                type="email" 
                placeholder="Where can i reply" 
                style={{
                  width: '100%',
                  padding: '15px 0',
                  border: 'none',
                  borderBottom: '1px solid #ddd',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          {/* Company Name */}
          <div style={{marginBottom: '40px'}}>
            <label style={{fontSize: '0.95em', fontWeight: '600', marginBottom: '10px', display: 'block'}}>Company name</label>
            <input 
              type="text" 
              placeholder="Your company or website?" 
              style={{
                width: '100%',
                padding: '15px 0',
                border: 'none',
                borderBottom: '1px solid #ddd',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Services */}
          <div style={{marginBottom: '50px'}}>
            <label style={{fontSize: '0.95em', fontWeight: '600', marginBottom: '20px', display: 'block'}}>What's in your mind?*</label>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px'}}>
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  style={{
                    padding: '12px 24px',
                    borderRadius: '25px',
                    border: selectedServices.includes(service) ? '2px solid #000' : '1px solid #ddd',
                    backgroundColor: selectedServices.includes(service) ? '#000' : '#fff',
                    color: selectedServices.includes(service) ? '#fff' : '#000',
                    fontSize: '0.95em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
            <div style={{flex: 1}}></div>
            <div style={{position: 'relative'}}>
              <svg style={{position: 'absolute', right: '-40px', top: '-20px', transform: 'rotate(-30deg)'}} width="40" height="40" viewBox="0 0 40 40">
                <path d="M5,20 L15,10 M15,10 L25,20 M25,20 L35,10" stroke="#000" strokeWidth="3" fill="none"/>
              </svg>
              <button
                type="submit"
                style={{
                  padding: '15px 50px',
                  borderRadius: '30px',
                  border: 'none',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}
              >
                Send Me
              </button>
            </div>
          </div>

          <p style={{textAlign: 'right', color: '#999', fontSize: '0.9em', marginTop: '20px'}}>
            I'll get back to you within 24 hours
          </p>
        </form>

        {/* Footer */}
        <div style={{borderTop: '1px solid #ddd', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div style={{display: 'flex', gap: '30px'}}>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.95em'}}>Dribbble</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.95em'}}>Linkdin</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.95em'}}>Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" style={{color: '#666', textDecoration: 'none', fontSize: '0.95em'}}>Behance</a>
          </div>
          <p style={{color: '#666', fontSize: '0.9em', margin: 0}}>Personal portfolio©2024</p>
        </div>
      </Container>
    </Container>
  );
}

export default Contact;
