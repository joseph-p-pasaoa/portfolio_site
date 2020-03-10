/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import ProjectCard from '../components/ProjectCard';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectsPage = () => {

  // PRE-RETURN
  let listProjects = null;
  if (projectsData.length > 0) {
    listProjects = projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            urlLive={project.urlLive}
            urlRepo={project.urlRepo}
            copyTech={project.copyTech}
            copyRole={project.copyRole}
            copySolution={project.copySolution}
            copyFeats={project.copyFeats}
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
