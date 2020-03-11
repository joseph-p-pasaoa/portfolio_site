/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React, { useEffect } from 'react';

import ProjectCard from '../components/ProjectCard';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectsPage = ({ history, location }) => {
  useEffect(() => {
    const autoscroll = () => {
      if (location.state) {
        const target = document.querySelector(`#project${location.state}`);
        target.scrollIntoView();
      } else {
        document.querySelector('#project0').scrollIntoView();
      }
    }
    autoscroll();
  }, [location.state])


  // PRE-RETURN
  let listProjects = null;
  if (projectsData.length > 0) {
    listProjects = projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            id={index}
            name={project.name}
            shortDesc={project.shortDesc}
            screencapUrl={project.screencapUrl}
            shortTechs={project.shortTechs}
            myRole={project.myRole}
            features={project.features}
            handleClick={() => history.push(`/projects/${index}`)}
          />
        );
    })
  }

  return (
    <div className="page page--projects flex-column">
      <h3 className="page__name">Joseph's Projects</h3>
      {listProjects}
    </div>
  );
}


export default ProjectsPage;
