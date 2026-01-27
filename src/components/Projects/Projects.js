import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import electroshop from "../../Assets/Projects/electroshop.png";
import wedding from "../../Assets/Projects/wedding.png";
import landingPage from "../../Assets/Projects/LandingPage.png";
import ReactGA from "react-ga";
import useScrollAnimation from "../../hooks/useScrollAnimation";

function Projects() {
  const [expandedProjects, setExpandedProjects] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const projects = [
    {
      title: "ElectroShop",
      category: "WEB DESIGN",
      description: "Site web de gestion de liste de vente pour ElectroShop.",
      image: electroshop,
      link: "https://github.com/aminelahlou007-debug",
      color: "#FF8C00"
    },
    {
      title: "Gestion de Mariages",
      category: "APP DESIGN",
      description: "Site web de gestion de mariages pour administrateurs.",
      image: wedding,
      link: "https://github.com/aminelahlou007-debug",
      color: "#C13584"
    },
    {
      title: "Landing Pages",
      category: "WEB DESIGN",
      description: "Collection de landing pages modernes et responsive.",
      image: landingPage,
      link: "https://github.com/aminelahlou007-debug",
      color: "#0066FF"
    },
    {
      title: "Minimal Agency website for startups business.",
      category: "WEB DESIGN",
      description: "Un site agence minimaliste conçu pour les entreprises en démarrage.",
      image: "/webdesign.png",
      link: "https://github.com/aminelahlou007-debug",
      color: "#000"
    },
    {
      title: "How to run a successful business with your partner",
      category: "BUSINESS",
      description: "Starting a business with your spouse or significant other is an exciting but delicate process.",
      image: "/couple.png",
      link: "https://github.com/aminelahlou007-debug",
      color: "#000"
    }
  ];

  return (
    <Container fluid className="project-section case-study-section" id="projects" style={{padding: '80px 40px', position: 'relative', backgroundColor: '#f8f8f8', minHeight: '100vh'}}>
      <Particle />
      <Container style={{maxWidth: '100%', padding: '0'}}>
        {/* Header */}
        <div className="scroll-fade-up" style={{textAlign: 'center', marginBottom: '80px', position: 'relative'}}>
          <div style={{
            position: 'absolute',
            left: '0',
            top: '-40px',
            width: '120px',
            height: '120px',
            backgroundImage: 'radial-gradient(circle, #ddd 15%, transparent 15%)',
            backgroundSize: '20px 20px',
            opacity: 0.6
          }}></div>
          <h1 style={{fontSize: '4em', fontWeight: 'bold', marginBottom: '20px', color: '#000', letterSpacing: '-2px'}}>
            CASE STUDY
          </h1>
          <p style={{color: '#666', fontSize: '1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6'}}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Projects Display */}
        <div style={{
          display: 'flex',
          gap: '60px',
          alignItems: 'center',
          flexWrap: expandedProjects ? 'wrap' : 'nowrap',
          justifyContent: 'center',
          width: '100%'
        }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-scale"
              style={{
                flex: expandedProjects ? '1 1 calc(100% - 0px)' : index === 0 ? '1 1 calc(100% - 0px)' : '0 0 0',
                minWidth: '900px',
                maxWidth: '900px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25)',
                display: expandedProjects || index === 0 ? 'flex' : 'none',
                flexDirection: 'row',
                transition: 'all 0.6s ease',
                opacity: 1,
                margin: '0 auto'
              }}
            >
              {/* Image/Logo Area - Left */}
              <div style={{
                width: '50%',
                height: '400px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                padding: '40px'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* Content Area - Right */}
              <div style={{
                width: '50%',
                padding: '60px 50px',
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
                  {project.category}
                </span>

                <h3 style={{
                  fontSize: '3em',
                  fontWeight: 'bold',
                  color: '#000',
                  margin: '0',
                  lineHeight: '1.1'
                }}>
                  {project.title}
                </h3>

                <a
                  href={project.link}
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
                    marginTop: '30px',
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
        <div style={{textAlign: 'center', marginTop: '60px'}}>
          <button
            onClick={() => setExpandedProjects(!expandedProjects)}
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
            {expandedProjects ? 'SHOW LESS' : 'READ MORE'}
          </button>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
