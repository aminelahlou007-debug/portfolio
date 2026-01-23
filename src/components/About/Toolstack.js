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
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{color: '#007ACC'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel style={{color: '#000000'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{color: '#FF6C37'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku style={{color: '#430098'}} />
      </Col>
    </Row>
  );
}

export default Toolstack;
