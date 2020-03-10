/*
JOSEPH P. PASAOA
ProjectSpotPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';

import projectsData from '../data/projectsData';


/* MAIN */
const ProjectSpotPage = (props) => {

  // PRE-RETURN
  const project = projectsData[props.match.params.index];
  console.log(project);

  return (
    <div className="page page--projectspot flex-column">
      <Link to={{ pathname: '/projects', state: props.match.params.index }}>Back</Link>
      ProjectSpotPage
          {/* id={index}
          name={project.name}
          description={project.description}
          // urlLive={project.urlLive}
          // urlRepo={project.urlRepo}
          techs={project.techs}
          myRole={project.myRole}
          // difficulties={project.difficulties}
          // solutions={project.solutions}
          features={project.features}
          handleClick={() => history.push(`/projects/${index}`)}
          // onClick={() => history.push(`/projects/${index}`)} */}
    </div>
  );
}


export default ProjectSpotPage;
