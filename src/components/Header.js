import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="fixed-header">
      <div className="header-container">
        <div className="header-brand">
          <p>it's me</p>
        </div>
        
        <nav className="header-nav">
          <a href="#projects" className="header-card">
            <div className="card-title">My Projects</div>
            <div className="card-subtitle">See all of nice project i have done.</div>
          </a>
          
          <a href="#about" className="header-card">
            <div className="card-title">About Me</div>
            <div className="card-subtitle">Learn about my self what i do</div>
          </a>
          
          <a href="#contact" className="header-card">
            <div className="card-title">Contact me</div>
            <div className="card-subtitle">amine.lahlou007@gmail.com</div>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
