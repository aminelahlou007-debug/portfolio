import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
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
    <Container fluid className="project-section case-study-section" id="projects">
      <Container className="projects-container">
        {/* Header */}
        <div className="projects-header scroll-fade-up">
          <div className="projects-header-pattern"></div>
          <h1 className="projects-title">CASE STUDY</h1>
          <p className="projects-subtitle">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Projects Display */}
        <div className={`projects-display ${expandedProjects ? 'expanded' : ''}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card scroll-scale"
              style={{
                display: expandedProjects || index === 0 ? 'flex' : 'none',
              }}
            >
              {/* Image/Logo Area - Left */}
              <div className="project-image-area">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              {/* Content Area - Right */}
              <div className="project-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3 className="project-title-text">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  See Details
                  <span className="project-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="projects-button-container">
          <button
            onClick={() => setExpandedProjects(!expandedProjects)}
            className="projects-expand-btn"
          >
            {expandedProjects ? 'SHOW LESS' : 'READ MORE'}
          </button>
        </div>
      </Container>
    </Container>
  );
}

export default Projects;
