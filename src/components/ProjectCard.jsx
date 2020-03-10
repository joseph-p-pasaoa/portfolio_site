/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';


/* MAIN */
const ProjectCard = ({ name, screencapUrl, urlLive, urlRepo, copyTech, copyRole, copySolution, copyFeats }) => {

  return (
    <div className="project__card flex-row">
      <div className="flex-column project__card__leftcol">
        <h3 className="project__name">{name}</h3>
        <img src={screencapUrl} alt={`${name} screencap`} className="project__screencap" />
      </div>
      <div className="flex-column project__card__rightcol">
        <h4 className="project__subheadline">Technologies Used</h4>
        <p className="text--projectinfo">{copyTech}</p>
        <h4 className="project__subheadline">My Role</h4>
        <p className="text--projectinfo">{copyRole}</p>
        <h4 className="project__subheadline">Solutions</h4>
        <p className="text--projectinfo">{copySolution}</p>
        <h4 className="project__subheadline">Notable Features</h4>
        <p className="text--projectinfo">{copyFeats}</p>
      </div>
      {/* {urlLive}<br />
      {urlRepo}<br /> */}
    </div>
  );
}


export default ProjectCard;
