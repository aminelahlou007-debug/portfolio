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
        <DiReact style={{color: '#61DAFB'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws style={{color: '#FF9900'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>AWS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{color: '#3776AB'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase style={{color: '#FFCA28'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql style={{color: '#E10098'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>GraphQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus style={{color: '#00599C'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{color: '#68A063'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb style={{color: '#13AA52'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript style={{color: '#3178C6'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{color: '#F1502F'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{color: '#F7DF1E'}} />
        <p style={{marginTop: '3px', fontSize: '0.5em', fontWeight: '500'}}>JavaScript</p>
      </Col>
    </Row>
  )
}

export default Techstack
