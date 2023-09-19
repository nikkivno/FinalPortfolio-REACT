import React from 'react';
import'../styles/AboutMe.css';
import headshot from '../images/avatar.jpg';

function AboutMe() {
    return (
    <article class="flexboxcontainer1">
      <div id="aboutme">
          <h2>About Me</h2>
          <p>Nikki is an aspiring full stack developer with a background in theatre design and production. This history has given her an interest in builidng websites and applications focused on enhancing arts workers experiences through technology.<br></br>Along with a background in the performing arts, Nikki has a podcast that she founded and cohosts called Bring Your Own Book wherein each episode a new book is explored or an author is interviewed.</p>
      </div>
      <div id="headshot-container" >
      <img id="headshot-image" src={headshot} alt="Nikki's Headshot"/>
      </div>
    </article>
    );
}

export default AboutMe;