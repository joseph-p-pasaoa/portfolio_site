/*
JOSEPH P. PASAOA
ProjectsPage Component | Portfolio Site
*/


/* IMPORTS */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/PageHeader';
import ProjectCard from '../components/ProjectCard';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectsPage = ({ history, location }) => {
  const refStageTop = React.createRef();

  useEffect(() => {
    const resetToTop = () => {
      refStageTop.current.scrollIntoView({
            behaviour: 'auto',
            block: 'start',
            inline: 'start',
      });
    }
    resetToTop();
  }, [refStageTop]);

  const handleReturnToTop = () => {
    refStageTop.current.scrollIntoView({
          behaviour: 'smooth',
          block: 'start',
          inline: 'start',
      });
  }


  // PRE-RETURN
  let listProjects = null;
  if (projectsData.length > 0) {
    listProjects = projectsData.map((project, index) => {
        return (
          <ProjectCard
            key={index}
            id={index}
            urlRepo={project.urlRepo}
            urlLive={project.urlLive}
            name={project.name}
            description={project.description}
            role={project.role}
            screencapUrl={project.screencapUrl}
            techs={project.techs}
            features={project.features}
            difficulties={project.difficulties}
            wins={project.wins}
          />
        );
    })
  }


  return (
      <div id="top" className="page page--listprojects" ref={refStageTop}>
        <PageHeader pagename="Projects" />
        {listProjects}
        <Link
          to={() => false}
          className="regular-copy return-to-top-link"
          onClick={(e) => {
              handleReturnToTop();
          }}
        >
          Return to top
        </Link>
      </div>
  );
}


export default ProjectsPage;
