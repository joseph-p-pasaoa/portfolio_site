/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';


/* MAIN */
const ProjectCard = ({ name, urlLive, urlRepo }) => {

  return (
    <div className="project__card flex-column">
      {name}<br />
      {urlLive}<br />
      {urlRepo}<br />
    </div>
  );
}


export default ProjectCard;
