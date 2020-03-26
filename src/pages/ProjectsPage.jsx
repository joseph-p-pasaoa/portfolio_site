/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

// import SpinnerDelay from '../components/SpinnerDelay';
import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectsPage = ({ history, location }) => {
  const [ delayFinished, setDelayFinished ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 2000);
    }
    delay();
  }, []);

  useEffect(() => {
    const scrollPlacer = () => {
      if (location.state) {
        const target = document.querySelector(`#project${location.state}`);
        target.scrollIntoView({ block: "center" });
      } else {
        document.querySelector('#top').scrollIntoView();
      }
    }
    scrollPlacer();
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
    // <SpinnerDelay delayTime={1400} delayColor="#262629" delayMsg="loading projects">
      <div id="top" className="page page--listprojects">
        <PageHeader pagename="Projects" />
        <Fade delay={1000} bottom cascade>
          {listProjects}
        </Fade>
      </div>
    // </SpinnerDelay>
  );
}


export default ProjectsPage;
