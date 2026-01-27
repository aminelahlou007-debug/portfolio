import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{color: '#FCC624'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Linux</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{color: '#007ACC'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel style={{color: '#000000'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{color: '#FF6C37'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku style={{color: '#430098'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Heroku</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
