import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ReactGA from "react-ga";

function CaseStudies() {
  const [expandedCaseStudies, setExpandedCaseStudies] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const caseStudies = [
    {
      title: "Minimal Agency website for startups business.",
      category: "WEB DESIGN",
      description: "Un site agence minimaliste conçu pour les entreprises en démarrage.",
      image: "/webdesign.png",
      link: "https://github.com/aminelahlou007-debug",
      color: "#000"
    },
    {
      title: "How to run a successful business with your partner (and stay together)",
      category: "WEB DESIGN",
      description: "Starting a business with your spouse or significant other is an exciting but delicate process and requires a great deal of faith.",
      image: "/couple.png",
      link: "https://github.com/aminelahlou007-debug",
      color: "#000"
    },
    {
      title: "Saas web and app design project.",
      category: "WEB DESIGN",
      description: "A data-enrichment platform powered by identity, centered on privacy, integrated everywhere.",
      image: "/webdesign.png",
      link: "https://github.com/aminelahlou007-debug",
      color: "#000"
    }
  ];

  const visibleCaseStudies = expandedCaseStudies ? caseStudies : [caseStudies[0]];

  return (
    <Container fluid className="case-studies-section" id="case-studies" style={{padding: '80px 40px', position: 'relative', backgroundColor: '#f8f8f8', minHeight: '100vh'}}>
      <Particle />
      <Container style={{maxWidth: '100%', padding: '0'}}>
        {/* Header */}
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <h1 style={{fontSize: '4em', fontWeight: 'bold', marginBottom: '20px', color: '#000', letterSpacing: '-2px'}}>
            CASE STUDY
          </h1>
          <p style={{color: '#666', fontSize: '1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Case Studies Display */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '80px',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {visibleCaseStudies.map((caseStudy, index) => (
            <div
              key={index}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
                width: '100%',
                animation: 'fadeIn 0.6s ease-out'
              }}
            >
              <style>{`
                @keyframes fadeIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}</style>

              {/* Image Section */}
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '400px',
                padding: '40px'
              }}>
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Content Section */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '20px'
              }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '8px 18px',
                  borderRadius: '25px',
                  fontSize: '0.75em',
                  fontWeight: 'bold',
                  letterSpacing: '1.5px',
                  width: 'fit-content'
                }}>
                  {caseStudy.category}
                </span>

                <h3 style={{
                  fontSize: '2.5em',
                  fontWeight: 'bold',
                  color: '#000',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  {caseStudy.title}
                </h3>

                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#000',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    marginTop: '20px',
                    borderBottom: '2px solid #000',
                    paddingBottom: '8px',
                    width: 'fit-content',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  See Details
                  <span style={{fontSize: '1.3em'}}>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div style={{textAlign: 'center', marginTop: '80px'}}>
          <button
            onClick={() => setExpandedCaseStudies(!expandedCaseStudies)}
            style={{
              padding: '14px 50px',
              fontSize: '0.95rem',
              fontWeight: 'bold',
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              letterSpacing: '1px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333';
              e.target.style.transform = 'translateX(5px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#000';
              e.target.style.transform = 'translateX(0)';
            }}
          >
            {expandedCaseStudies ? 'SHOW LESS' : 'READ MORE'}
          </button>
        </div>
      </Container>
    </Container>
  );
}

export default CaseStudies;
