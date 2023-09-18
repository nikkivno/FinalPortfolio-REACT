import React from 'react';
import '../styles/Portfolio.css';
import mapbrew from '../images/mapbrewexample.png';
import budgetsense from '../images/budgetexample.png';
import horiseon from '../images/websiteexample.png';

function Portfolio() {
    return (
        <article className="flexboxcontainer2" id="portfolio">
        <div className="flexboxcontainer4">
          <h2>My Work</h2>
        </div>
        <div className="flexboxcontainer6">
          <div id="budget-website">
            <a href="https://nikkivno.github.io/BudgetingWebsite-BootcampProject1/"><img id="budget-website-image" src={budgetsense} alt="Link to BudgetSense Website"/></a>
          <div className="centered"> BudgetSense Webpage</div>
        </div>  
        <div id="mapbrew-website">
          <a href="https://mapbrew-websitee-20a575919a4b.herokuapp.com/login"><img id="mapbrew-website-image" src={mapbrew} alt="Link to Mapbrew Webpage"/></a>
        <div className="centered">Mapbrew Webpage</div>
        </div>
        <div id="horiseon-website">
          <a href="https://nikkivno.github.io/BootcampChallenge1/#social-media-marketing"><img id="horiseon-website-image" src={horiseon} alt="Link to Horiseon Webpage"/></a>
          <div className="centered">Horiseon Webpage</div>
          </div>
          </div>   
    </article>
    );
}

export default Portfolio;

