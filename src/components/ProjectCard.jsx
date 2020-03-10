/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';


/* MAIN */
const ProjectCard = ({ handleClick, id, name, screencapUrl, description, techs, myRole, features }) => {

  return (
    <div className="project__card flex-row" id={`project${id}`} onClick={handleClick}>
      <div className="flex-column project__card__leftcol">
        <h3 className="project__name">{name}</h3>
        <img src={screencapUrl} alt={`${name} screencap`} className="project__screencap" />
      </div>
      <div className="flex-column project__card__rightcol">

        <h4 className="project__subheadline">
          Technologies Used
        </h4>
        <p className="text--projectinfo">
          {techs.join(', ')}
        </p>

        <h4 className="project__subheadline">
          My Role
        </h4>
        <p className="text--projectinfo">
          {myRole}
        </p>

        <h4 className="project__subheadline">
          Notable Features
        </h4>
        <p className="text--projectinfo">
          {features.join(', ')}
        </p>

        <p className="text--copy project__description">
          {description}
        </p>

      </div>
      <div className="project__card__overlay"></div>
    </div>
  );
}


export default ProjectCard;
