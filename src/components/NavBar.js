import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    const currentPage = window.location.pathname;
    return (
    <nav>
      <ul>
        <li><a href="/" className={currentPage === '/' ? 'active' : ''}>About Me</a></li>
        <li><a href="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</a></li>
        <li><a href="#">Resume</a></li>
        <li><a href="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;