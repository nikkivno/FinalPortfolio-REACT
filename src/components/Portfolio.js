import * as React from 'react';
import '../styles/Project.css';
import './Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';



const Portfolio = ({title, imageSrc, githubUrl, websiteUrl}) => {
  console.log(title, imageSrc, githubUrl, websiteUrl);
  return(
    <div>
    <div className='container'>
      <a href={websiteUrl} target='_blank' className='website'><img src={imageSrc} id='image'/></a>
    <div className="overlay">
      <div className='hidden-text'>
        <h1>{title}</h1>
      </div>

      <div className='hidden-text'>
        <a href={githubUrl} target="_blank" className="github"><FontAwesomeIcon icon={faSquareGithub} size="2xl" style={{color: "#36454f",}}/></a>
      </div>    
      </div>
    </div>
    </div>

  );
};

export default Portfolio;

