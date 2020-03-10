/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import ProjectCard from '../components/ProjectCard';

const projects = require('../data/projectsData.json');


/* MAIN */
const ProjectsPage = () => {

  // PRE-RETURN
  let listProjects = null;
  if (projects.length > 0) {
    listProjects = projects.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            name={project.name}
            urlLive={project["url-live"]}
            urlRepo={project["url-repo"]}
          />
        );
    })
  }

  return (
    <div className="page page--projects flex-column">
      {listProjects}
    </div>
  );
}


export default ProjectsPage;
