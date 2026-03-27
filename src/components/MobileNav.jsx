import React from 'react';

function MobileNav() {
  return (
    <footer className="bottom-nav">
      <ul>
        <li><a href="#home"><i className="fa-solid fa-house"></i></a></li>
        <li><a href="#about"><i className="fa-solid fa-italic"></i></a></li>
        <li><a href="#projects"><i className="fa-solid fa-list-check"></i></a></li>
        <li><a href="#contact"><i className="fa-solid fa-address-book"></i></a></li>
      </ul>
    </footer>
  );
}

export default MobileNav;