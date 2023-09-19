import React from 'react';
import '../styles/Portfolio.css';
import './Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

// import mapbrew from '../images/mapbrewexample.png';
// import budgetsense from '../images/budgetexample.png';
// import horiseon from '../images/websiteexample.png';



const Portfolio = ({title, imageSrc, githubUrl, websiteUrl}) => {
  return(
    <div>
      <div className='title'>
        <h1>{title}</h1>
      </div>
      <div className='projectImage'>
        <img src={imageSrc}/>
      </div>
      <div className='githubRepo'>
        <a href={githubUrl} target="_blank"><FontAwesomeIcon icon={faSquareGithub} size="2xl" style={{color: "#36454f",}}/></a>
      </div>
      <div className='website'>
        <a href={websiteUrl} target='_blank'>{websiteUrl}</a>
      </div>
    </div>

  );
};

// function Portfolio() {
//     return (
//         <article className="flexboxcontainer2" id="portfolio">
//         <div className="flexboxcontainer4">
//           <h2>My Work</h2>
//         </div>
//         <div className="flexboxcontainer6">
//           <div id="budget-website">
//             <a href="https://nikkivno.github.io/BudgetingWebsite-BootcampProject1/"><img id="budget-website-image" src={budgetsense} alt="Link to BudgetSense Website"/></a>
//           <div className="centered"> BudgetSense Webpage</div>
//         </div>  
//         <div id="mapbrew-website">
//           <a href="https://mapbrew-websitee-20a575919a4b.herokuapp.com/login"><img id="mapbrew-website-image" src={mapbrew} alt="Link to Mapbrew Webpage"/></a>
//         <div className="centered">Mapbrew Webpage</div>
//         </div>
//         <div id="horiseon-website">
//           <a href="https://nikkivno.github.io/BootcampChallenge1/#social-media-marketing"><img id="horiseon-website-image" src={horiseon} alt="Link to Horiseon Webpage"/></a>
//           <div className="centered">Horiseon Webpage</div>
//           </div>
//           </div>   
//     </article>
//     );
// }

export default Portfolio;

