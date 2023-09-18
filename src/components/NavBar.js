import React from 'react';
import '../styles/Navbar.css'

function Navbar() {
    return (
    <nav>
      <ul>
        <li><a href="/">About Me</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;