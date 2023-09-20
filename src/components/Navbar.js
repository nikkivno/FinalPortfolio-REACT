import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    const currentPage = window.location.pathname;
    return (
    <nav>
      <ul>
        <li><a href="/" className={currentPage === '/' ? 'active' : ''}>About Me</a></li>
        <li><a href="/portfolio" className={currentPage === '/portfolio' ? 'active' : ''}>Portfolio</a></li>
        <li><a href="https://drive.google.com/file/d/1POl4R78D3k5BsxL3WoNkdB2zGvwzh6Lm/view?usp=sharing" target="_blank">Resume</a></li>
        <li><a href="/contact" className={currentPage === '/contact' ? 'active' : ''}>Contact</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;
