import React from 'react';
import'../styles/AboutMe.css';
import headshot from '../images/avatar.jpg';

function AboutMe() {
    return (
    <article class="flexboxcontainer1">
      <div id="aboutme">
          <h2>About Me</h2>
          <p>Nikki is an aspiring full stack developer with a background in theatre design and production. This history has given her an interest in builidng websites and applications focused on enhancing arts workers experiences through technology.</p>
      </div>
      <div id="headshot-container" >
      <img id="headshot-image" src={headshot} alt="Nikki's Headshot"/>
      </div>
    </article>
    );
}

export default AboutMe;