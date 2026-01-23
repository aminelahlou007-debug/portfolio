import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Bonjour à tous, je suis <span className="purple">Mohammed Amine Lahlou </span>
            du <span className="purple"> Maroc.</span>
            <br />Je suis un développeur Full Stack Javascript.
            <br />
            <br />
            En dehors du codage, j'aime faire d'autres activités!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouer à des jeux
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des articles technologiques
            </li>
            <li className="about-activity">
              <ImPointRight /> Regarder des films et des séries TV
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "Le monde vous récompense pour la valeur fournie, pas le temps dépensé."{' '}
          </p>
          <footer className="blockquote-footer">James Clear</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
