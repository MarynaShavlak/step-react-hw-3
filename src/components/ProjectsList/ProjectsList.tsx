import React, { FC } from 'react';
import './ProjectsList.css';
import { projectsData } from '../../data/projectsData';
import { IProjectItem } from './ProjectItem.types';

const ProjectItem: FC<IProjectItem> = ({ project }) => (
  <li className="project">
    <a href="./project-page.html">
      <img src={project.img} alt="Project img" className="project__img" />
      <h3 className="project__title">{project.title}</h3>
    </a>
  </li>
);

export const ProjectsList = () => {
  return (
    <ul className="projects">
      {projectsData.map(project => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </ul>
  );
};
