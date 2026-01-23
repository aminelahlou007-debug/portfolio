import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {SiFirebase, SiTypescript, SiAmazonaws, SiGraphql} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{color: '#00599C'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color: '#F7DF1E'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color: '#68A063'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{color: '#61DAFB'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color: '#13AA52'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{color: '#3776AB'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{color: '#3178C6'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws style={{color: '#FF9900'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color: '#F1502F'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{color: '#FFCA28'}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql style={{color: '#E10098'}} />
      </Col>
    </Row>
  )
}

export default Techstack
