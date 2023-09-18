import React from 'react';
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div>
            <FontAwesomeIcon icon={faSquareGitlab} size="2xl" style={{color: "#36454f",}} />
            <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#35454f",}} />
            <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#36454f",}} />
            </div>
            <div>
            <p>This website is property of Nikki Vigneault</p>
            </div>
        </footer>
    );
}

export default Footer; 

