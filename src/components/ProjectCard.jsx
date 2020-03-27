/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


/* MAIN */
const ProjectCard = ({ handleClick, id, urlRepo, urlLive, name, difficulties, wins, screencapUrl, description, techs, role, features }) => {
  const [ delayFinished, setDelayFinished ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 1300);
    }
    delay();
  }, []);


  return (
    <Fade bottom cascade when={delayFinished}>
      <div className="card--project" id={`project${id}`} onClick={handleClick}>
        <h3 className="project-name">{name}</h3>
        <div className="project-role">
          --{role}
        </div>
        <div className="top__card--project">
          {/* <div className="project__card__expandmsg">click to expand<br />
          <FontAwesomeIcon icon={["fas", "angle-down"]} className="faicon--projectnav" /></div> */}
          <div className="intro__card--project textcopy">
            <div className="project-description">
              {description}
            </div>
          </div>
          <div className="images__card--project">
            <img
              src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
              alt={`${name} screencap`}
              className="screencap"
              id={id}
            />
            <img
              src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
              alt={`${name} screencap`}
              className="screencap"
              id={id}
            />
          </div>
        </div>
        <div className="bottom__card--project textcopy">

          <div className="techs__card--project">
            <h4 className="project--subheader">
              Technologies Used
            </h4>
            <ul className="list-project-techs">
              {techs.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
          </div>

          <div className="details__card--project">
            <h4 className="project--subheader">
              Difficulties Tackled
            </h4>
            <p className="text--copy fullproject__text">{difficulties}</p>

            <h4 className="project--subheader">
              Accomplishments
            </h4>
            <p className="text--copy fullproject__text">{wins}</p>

            <h4 className="project--subheader">
              Notable Features
            </h4>
            <ul className="project__list fullproject__features">
              {features.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
            </ul>
          </div>

          <div className="references__card--project">
            <a
              href={urlRepo}
              className="fullproject__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              --Repo
            </a>
            <a
              href={urlLive}
              className="fullproject__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              --Demo
            </a>
          </div>

        </div>
      </div>
    </Fade>
  );
}


export default ProjectCard;
