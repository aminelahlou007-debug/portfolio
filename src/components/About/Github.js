import React from 'react'
import {Row} from 'react-bootstrap'

function Github() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
      <h1 className="project-heading" style={{paddingBottom: '20px'}}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <div style={{textAlign: 'center'}}>
        <p>
          GitHub activity calendar is temporarily disabled for compatibility.
        </p>
        <a
          href="https://github.com/aminelahlou007-debug"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          View GitHub Profile
        </a>
      </div>
    </Row>
  )
}

export default Github
