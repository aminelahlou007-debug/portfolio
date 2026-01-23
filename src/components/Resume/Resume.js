import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Amine_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Télécharger le CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Expérience</h3>
            <Resumecontent
              title="Développeur Web - OFPPT ISAG / Casablanca"
              date="2024 - Présent"
              content={[
                "Développement d'applications web avec HTML, CSS, JavaScript et React.",
                "Gestion des bases de données et intégration d'API.",
                "Rédaction des cahiers des charges techniques : architecture, base de données.",
                "Design des fonctionnalités, développement en front et en back.",
                "Test et validation des fonctionnalités web.",
                "Conduite des tests fonctionnels et unitaires avec identification des bugs.",
                "Résolution des problèmes de compatibilité navigateur.",
              ]}
            />
            <Resumecontent
              title="Technicien et Assistant du Son - Afrah Lahlou / Casablanca"
              date="Année précédente"
              content={[
                "Formation des utilisateurs à l'utilisation des équipements.",
                "Identification et résolution des problèmes techniques à l'aide de tests et analyses.",
                "Installation des équipements, préparation et paramétrage.",
                "Diagnostic et réparation des pannes sur site.",
                "Installation, configuration et maintenance des équipes et systèmes.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Éducation</h3>
            <Resumecontent
              title="Baccalauréat - École Lycée Mohammed 5"
              date="2 Mars / Casablanca / 2021-2024"
              content={[
                "Baccalauréat en Sciences de la Vie et de la Terre (SVT)",
              ]}
            />

            <h3 className="resume-title">Compétences Principales</h3>
            <Resumecontent
              title=""
              content={[
                `Développement Web: HTML, CSS, JavaScript, React`,
                `Gestion de Projet`,
                `Résolution de Problèmes`,
                `Langages de programmation: JavaScript, HTML, CSS`,
                `Collaboration et Travail en équipe`,
                `Tests et qualité du code`,
                `Veille technologique`,
                `Documentation technique`,
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Télécharger le CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
