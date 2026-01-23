import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Conçu et développé par Mohammed Amine Lahlou</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Droits d'auteur © {year} MAL</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/aminelahlou007-debug"
                style={{color: '#6b2fb9'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/moahmmed-amine-lahlou-74491b3a1/"
                style={{color: '#6b2fb9'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
