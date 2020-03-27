/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

// import SpinnerDelay from '../components/SpinnerDelay';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectsPage = ({ history, location }) => {

  // PRE-RETURN
  let listProjects = null;
  if (projectsData.length > 0) {
    listProjects = projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            id={index}
            name={project.name}
            description={project.description}
            screencapUrl={project.screencapUrl}
            techs={project.techs}
            role={project.role}
            difficulties={project.difficulties}
            wins={project.wins}
            features={project.features}
            handleClick={() => history.push(`/projects/${index}`)}
          />
        );
    })
  }


  return (
    // <SpinnerDelay delayTime={1400} delayColor="#262629" delayMsg="loading projects">
      <div id="top" className="page page--listprojects">
        <PageHeader pagename="Projects" />
        {listProjects}
      </div>
    // </SpinnerDelay>
  );
}


export default ProjectsPage;
