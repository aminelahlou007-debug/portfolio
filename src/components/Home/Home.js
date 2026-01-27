import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import waveImg from "../../Assets/wave.png";
import Particle from "../Particle";
import Header from "../Header";
import ReactGA from "react-ga";

function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex);
  };

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <section>
      {/** Inline background to use /hero-bg.jpg from public without css-loader */}
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          position: 'relative',
          // Colorful blob overlays + person image (right-bottom), similar to reference
          backgroundImage: [
            'radial-gradient(circle at 50% -10%, rgba(255, 99, 132, 0.55) 0%, rgba(255, 99, 132, 0) 35%)',
            'radial-gradient(circle at 60% -6%, rgba(54, 162, 235, 0.55) 0%, rgba(54, 162, 235, 0) 40%)',
            'radial-gradient(circle at 40% 0%, rgba(255, 206, 86, 0.5) 0%, rgba(255, 206, 86, 0) 38%)',
            'url(/guy.png)'
          ].join(','),
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
          backgroundPosition: '45% -140px, 62% -110px, 50% -80px, right 120px',
          backgroundSize: '600px 600px, 520px 520px, 460px 460px, 42vw',
        }}
      >
        <Header />
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <div className="hero-brand">c'est moi</div>
              
              <h1 className="hero-greeting">
                <img src={waveImg} alt="wave" className="wave-img" />
              </h1>
              
              <h1 className="hero-main-heading">
                Bonjour! <span className="hero-name-bold">Je suis Amine Lahlou</span>
              </h1>
              
              <div className="hero-title-separator">
                <span className="hero-line"></span>
                <span className="hero-title">Développeur Full Stack</span>
                <span className="hero-diamond">✦</span>
              </div>
              
              <p className="hero-description">
                Bonjour! Je suis Amine. Je suis un <strong>développeur full stack, ingénieur logiciel, développeur web</strong>, passionné par la création d'applications web modernes et de solutions cloud
              </p>
              
              <ul className="hero-checklist">
                <li>
                  <span className="checkmark">✓</span>
                  <span>Créer des technologies web innovantes</span>
                </li>
                <li>
                  <span className="checkmark">✓</span>
                  <span>Frameworks modernes comme React & Next.js</span>
                </li>
                <li>
                  <span className="checkmark">✓</span>
                  <span>Code propre et meilleures pratiques</span>
                </li>
              </ul>
              
              <div className="hero-buttons">
                <a href="#contact" className="hero-btn-primary">Parlons</a>
                <a href="#resume" className="hero-btn-secondary">
                  Télécharger le CV
                  <span className="btn-arrow">↓</span>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <section className="services-section" style={{marginTop: '240px', position: 'relative'}}>
                <div className="services-header">
                  <div>
                    <p className="services-kicker">MES SERVICES ?</p>
                    <h2 className="services-title">CE QUE JE PROPOSE</h2>
                  </div>
                  <p className="services-subtext">
                    Je vous propose des services de conception et développement web professionnels. 
                    Chaque projet est réalisé avec attention au détail et passion pour créer des résultats exceptionnels.
                  </p>
                  <a className="services-btn" href="#contact">TOUS LES SERVICES</a>
                </div>

                {/* Scroll Down Indicator */}
                <div style={{
                  position: 'absolute',
                  left: '-80px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  opacity: 0.6,
                }}>
                  <div style={{
                    width: '1px',
                    height: '40px',
                    backgroundColor: '#000',
                  }}></div>
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 'bold',
                    letterSpacing: '1.5px',
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    color: '#000',
                  }}>
                    SCROLL DOWN
                  </div>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '1px solid #000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    color: '#000',
                  }}>
                    ↓
                  </div>
                </div>

                <div className="services-grid">
                  <div className="service-card dark">
                    <div className="service-icon">✦</div>
                    <h3 className="service-title">CONCEPTION CRÉATIVE UI-UX</h3>
                    {expandedCard === 1 && (
                      <p className="service-description" style={{marginTop: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: 'inherit'}}>
                        Je conçois des interfaces utilisateur modernes et intuitives qui offrent une expérience exceptionnelle. 
                        Mon approche combine esthétique et fonctionnalité pour créer des designs qui captivent et convertissent. 
                        Chaque élément est soigneusement pensé pour garantir une navigation fluide et agréable.
                      </p>
                    )}
                    <a className="service-link" href="#!" onClick={(e) => { e.preventDefault(); toggleCard(1); }} style={{cursor: 'pointer'}}>
                      {expandedCard === 1 ? 'RÉDUIRE' : 'LIRE PLUS'} <span>→</span>
                    </a>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">📺</div>
                    <h3 className="service-title">CONCEPTION GRAPHIQUE VISUELLE</h3>
                    {expandedCard === 2 && (
                      <p className="service-description" style={{marginTop: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: 'inherit'}}>
                        Je crée des designs visuels percutants qui communiquent votre message de manière claire et professionnelle. 
                        De la conception de logos aux supports marketing, j'apporte une touche créative qui renforce votre identité de marque. 
                        Chaque création est unique et adaptée à vos besoins spécifiques.
                      </p>
                    )}
                    <a className="service-link" href="#!" onClick={(e) => { e.preventDefault(); toggleCard(2); }} style={{cursor: 'pointer'}}>
                      {expandedCard === 2 ? 'RÉDUIRE' : 'LIRE PLUS'} <span>→</span>
                    </a>
                  </div>

                  <div className="service-card">
                    <div className="service-icon">⚙️</div>
                    <h3 className="service-title">STRATÉGIE & MARKETING NUMÉRIQUE</h3>
                    {expandedCard === 3 && (
                      <p className="service-description" style={{marginTop: '12px', fontSize: '0.9rem', lineHeight: '1.6', color: 'inherit'}}>
                        J'élabore des stratégies digitales efficaces pour développer votre présence en ligne et atteindre vos objectifs. 
                        Mon expertise en marketing numérique vous aide à optimiser votre visibilité, engager votre audience et générer des résultats mesurables. 
                        Une approche data-driven pour maximiser votre retour sur investissement.
                      </p>
                    )}
                    <a className="service-link" href="#!" onClick={(e) => { e.preventDefault(); toggleCard(3); }} style={{cursor: 'pointer'}}>
                      {expandedCard === 3 ? 'RÉDUIRE' : 'LIRE PLUS'} <span>→</span>
                    </a>
                  </div>
                </div>
              </section>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <div className="hero-categories">
                <span>DESIGN WEB</span>
                <span className="sep">★</span>
                <span>DESIGN D'APPLICATION</span>
                <span className="sep">★</span>
                <span>DÉVELOPPEMENT</span>
                <span className="sep">★</span>
                <span>FLUX WEB</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
