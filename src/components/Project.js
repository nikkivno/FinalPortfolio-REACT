import React from 'react';
import Portfolio from './Portfolio';
import'../styles/Portfolio.css';


const Project = () => {
  const projects = [
      {
        title: 'Mapbrew',
        imageSrc: './images/mpabrewexample.png',
        websiteUrl: 'https://mapbrew-websitee-20a575919a4b.herokuapp.com/login',
        githubUrl: 'https://github.com/YggdrasilJL/mapbrew-haven',
      },
      // {
      //   title: 'Project 1',
      //   imageSrc: 'project1.jpg',
      //   websiteUrl: 'https://www.example.com/project1',
      //   githubUrl: 'https://github.com/yourusername/project1',
      // },
      // {
      //   title: 'Project 1',
      //   imageSrc: 'project1.jpg',
      //   websiteUrl: 'https://www.example.com/project1',
      //   githubUrl: 'https://github.com/yourusername/project1',
      // },
      // {
      //   title: 'Project 1',
      //   imageSrc: 'project1.jpg',
      //   websiteUrl: 'https://www.example.com/project1',
      //   githubUrl: 'https://github.com/yourusername/project1',
      // },
      // {
      //   title: 'Project 1',
      //   imageSrc: 'project1.jpg',
      //   websiteUrl: 'https://www.example.com/project1',
      //   githubUrl: 'https://github.com/yourusername/project1',
      // },
      // {
      //   title: 'Project 1',
      //   imageSrc: 'project1.jpg',
      //   websiteUrl: 'https://www.example.com/project1',
      //   githubUrl: 'https://github.com/yourusername/project1',
      // },
];

return (
  <div>
    {projects.map((project, index) => (
      <Portfolio
      key={index}
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

