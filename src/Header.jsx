import React from 'react';

function Header({ scrolled }) {
  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <h1><span>S</span>tudent <span>P</span>ortfolio</h1>
      <nav>
        <ul className="desktop">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;