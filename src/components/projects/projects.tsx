
import ProjectCard from "../projectscard/projectscard";
import "./projects.css";
import { projects } from "../../data/projects-data";
import { useEffect, useState } from "react";

const Projects: React.FC = () => {
  
    
  const [showAllProjects, setShowallProjects] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0,2);

  const toggleAllProjects = () => {
    setShowallProjects((prevShowAllProjects) => !prevShowAllProjects)
  }

useEffect(() => {
    const handleScroll = (): void => {
      const element = document.querySelector('.animated-element');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        setAnimated(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className = {`projects-header animated-element ${animated ? 'animate' : ''}`} >Projects</div>
      <div className="projects-container">
        {displayedProjects.map((project, index) => (
          <div
            className={`project-card-container ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <ProjectCard
              key={project.title}
              project={project}
              isImageOnLeft={index % 2 === 0}
            />
          </div>
        ))}
         <div className="toggle-projects-button"><button onClick={toggleAllProjects}>
        {showAllProjects ? "Show less" : "Show more"}</button></div>
      </div>
     
    </div>
  );
};

export default Projects;
