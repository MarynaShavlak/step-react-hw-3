import './ProjectDetails.css';
import project02Big from './../../img/projects/02-big.jpg';
import { GithubButton } from '../Buttons/GithubBtn';

export const ProjectDetails = () => {
  const link = 'https://github.com';
  return (
    <div className="project-details">
      <h1 className="title-1">Video service</h1>
      <img src={project02Big} alt="" className="project-details__cover" />
      <div className="project-details__desc">
        <p>Skills: React, Node.js, MongoDB</p>
      </div>
      <GithubButton link={link} />
    </div>
  );
};
