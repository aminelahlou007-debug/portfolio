import React, {useState} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function NavBar() {
  const [expand, updateExpanded] = useState(false)
  const [navColour, updateNavbar] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true)
    } else {
      updateNavbar(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? 'sticky' : 'navbar'}
    >
      <Container fluid style={{paddingLeft: '2rem', paddingRight: '2rem'}}>
        <Navbar.Brand href="#home">
          <p
            style={{
              color: '#000',
              margin: '0',
              fontWeight: '700',
              letterSpacing: '1px',
              fontSize: '28px',
              textAlign: 'left',
              textDecoration: 'underline',
            }}
          >
            it's me
          </p>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : 'expanded')
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home" style={{display: 'flex', gap: '16px', alignItems: 'flex-start', width: '100%', justifyContent: 'flex-end', flexWrap: 'wrap'}}>
            <a href="#projects" onClick={() => updateExpanded(false)} style={{
              fontSize: '0.9rem',
              color: '#000',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              padding: '16px 20px',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              minWidth: '180px',
              border: '1px solid #e0e0e0',
              borderTop: '3px solid #000'
            }}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '700', fontSize: '1rem'}}>
                My Projects
                <span style={{fontSize: '1rem'}}>↗</span>
              </div>
              <div style={{fontSize: '0.85rem', color: '#666', lineHeight: '1.4'}}>See all of nice project i have done.</div>
            </a>

            <a href="#about" onClick={() => updateExpanded(false)} style={{
              fontSize: '0.9rem',
              color: '#000',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              padding: '16px 20px',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              minWidth: '180px',
              border: '1px solid #e0e0e0',
              borderTop: '3px solid #000'
            }}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '700', fontSize: '1rem'}}>
                About Me
                <span style={{fontSize: '1rem'}}>↗</span>
              </div>
              <div style={{fontSize: '0.85rem', color: '#666', lineHeight: '1.4'}}>Learn about my self what i do</div>
            </a>

            <a href="#contact" onClick={() => updateExpanded(false)} style={{
              fontSize: '0.9rem',
              color: '#000',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              textDecoration: 'none',
              padding: '16px 20px',
              borderRadius: '12px',
              backgroundColor: '#f5f5f5',
              minWidth: '180px',
              border: '1px solid #e0e0e0',
              borderTop: '3px solid #000'
            }}>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight: '700', fontSize: '1rem'}}>
                Contact me
                <span style={{fontSize: '1rem'}}>↗</span>
              </div>
              <div style={{fontSize: '0.85rem', color: '#666', lineHeight: '1.4'}}>aminelahlou007@gmail.com</div>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
