import React from 'react';
import '../styles/Portfolio.css';
import './Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';



const Portfolio = ({projects}) => {
  const {title, imageSrc, githubUrl, websiteUrl} = projects;
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

export default Portfolio;

