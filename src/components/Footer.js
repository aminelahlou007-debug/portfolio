import React from 'react'

function Footer() {
  return (
    <div className="footer-categories" style={{
      position: 'fixed',
      bottom: '0',
      width: '100%',
      backgroundColor: '#1a1a1a',
      color: '#999',
      textAlign: 'center',
      padding: '12px 20px',
      fontSize: '0.9rem',
      fontWeight: '500',
      letterSpacing: '1px',
      zIndex: '100',
      borderTop: '1px solid #333'
    }}>
      <span style={{position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '24px', color: '#666'}}>✦</span>
      <span style={{marginRight: '16px'}}>WEB DESIGN</span>
      <span style={{marginRight: '16px'}}>✦</span>
      <span style={{marginRight: '16px'}}>APP DESIGN</span>
      <span style={{marginRight: '16px'}}>✦</span>
      <span style={{marginRight: '16px'}}>DEVELOPMENT</span>
      <span style={{marginRight: '16px'}}>✦</span>
      <span style={{marginRight: '16px'}}>WEB FLOW</span>
      <span style={{marginRight: '16px'}}>✦</span>
      <span style={{marginRight: '16px'}}>BRANDING</span>
      <span style={{position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '24px', color: '#666'}}>✦</span>
    </div>
  )
}

export default Footer
