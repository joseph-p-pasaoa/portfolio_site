/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* MAIN */
const ProjectCard = ({ handleClick, id, name, screencapUrl, shortDesc, shortTechs, myRole, features }) => {

  return (
    <div className="project__reactivebox card--project" id={`project${id}`} onClick={handleClick}>
      <div className="flex-column project__card__leftcol">
        <div className="project__card__expandmsg">click to expand<br />
        <FontAwesomeIcon icon={["fas", "angle-down"]} className="faicon--projectnav" /></div>
        <h3 className="project__name">{name}</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
          alt={`${name} screencap`}
          className="screencap"
          id={id}
        />
      </div>
      <div className="flex-column project__card__rightcol">

        <h4 className="project__subheadline">
          Major Technologies Used
        </h4>
        <p className="text--projectinfo">
          {shortTechs.join(' • ')}
        </p>

        <h4 className="project__subheadline">
          My Role
        </h4>
        <p className="text--projectinfo">
          {myRole ? myRole : "Creator & Sole Developer"}
        </p>

        <h4 className="project__subheadline">
          Notable Features
        </h4>
        <p className="text--projectinfo">
          {features.join(' • ')}
        </p>

        <p className="text--copy project__description">
          {shortDesc}
        </p>

      </div>
    </div>
  );
}


export default ProjectCard;
