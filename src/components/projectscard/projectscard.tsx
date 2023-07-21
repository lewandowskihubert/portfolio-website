import React from 'react';
import "./projectscard.css"
import { ProjectsInterface } from '../../types/projects-interface';
import {DiGithubFull} from 'react-icons/di'

interface ProjectCardProps {
  project: ProjectsInterface;
  isImageOnLeft: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isImageOnLeft}) => {
  return (
    <div className={`project-card ${isImageOnLeft ? 'image-on-left' : 'image-on-right'}`}>
    <img src={project.image} alt={project.title} />
    <div className="content">
      <h3 className="title">{project.title}</h3>
      <p className="description">{project.description}</p>
      <ul className="technologies">
        {project.technologies.map((technology) => (
          
          <li key={technology.name}>
             {React.createElement(technology.icon)}
            {technology.name}</li>
        ))}
      </ul>
      <a className="github-link" title='github' href={project.githubLink} target='_blank' rel="noopener noreferrer"><DiGithubFull /></a>
    </div>
  </div>
  )
};

export default ProjectCard;