import React, {useState} from 'react';
import Portfolio from './Portfolio';
import'../styles/Project.css';

import {projects} from '../Data';


const Project = () => {
console.log(projects);

return (
  <div>
    {projects.map((project) => (
      <Portfolio
      key={''}
      title={project.title}
      imageSrc={project.imageSrc}
      githubUrl={project.githubUrl}
      websiteUrl={project.websiteUrl}
      />
    ))};
  </div>
);
};

export default Project;

