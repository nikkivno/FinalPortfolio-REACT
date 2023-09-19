import React from 'react';
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <footer>
            <div className="icons">
                <div id="github">
                    <a href="https://github.com/nikkivno" target="_blank">
                        <FontAwesomeIcon icon={faSquareGithub} size="2xl" style={{color: "#36454f",}} />
                    </a>
                </div>
                <div id="linkedIn">
                    <a href="https://www.linkedin.com/in/nikki-vigneault-69a054279/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" style={{color: "#35454f",}} />    
                    </a>
                </div>
                <div id="instagram">
                    <a href="https://www.instagram.com/nikki.v.reads/" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} size="2xl" style={{color: "#36454f",}} />
                    </a>
                </div>
       
            </div>
            <div>
            <p>This website is property of Nikki Vigneault</p>
            </div>
        </footer>
    );
}

export default Footer; 

