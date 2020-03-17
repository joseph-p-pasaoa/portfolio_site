/*
JOSEPH P. PASAOA
FullProjectPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpinnerDelay from '../components/SpinnerDelay';
import projectsData from '../data/projectsData';


/* MAIN */
const FullProjectPage = (props) => {

  // PRE-RETURN
  const project = projectsData[props.match.params.index];
  console.log(project);
  const { name, description, urlLive, urlRepo, screencapUrl, techs, myRole, difficulties, solutions, features } = project;


  
  return (
    <SpinnerDelay delayTime={800} delayColor="#243237" delayMsg={`loading ${name}`}>

      <div className="page page--fullproject">
        <Link
          to={{ pathname: '/projects', state: props.match.params.index }}
          className="project__reactivebox fullproject__backbtn"
        >
          <FontAwesomeIcon icon={["fas", "angle-up"]} className="faicon--projectnav" /><br />
          back to projects
        </Link>

        <h3 className="project__name">{name}</h3>
        <img
          src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
          alt={`${name} screencap`}
          className="project__screencap"
        />
        <p className="fullproject__description text--copy">{description}</p>
        <div className="project__techlist__box flex-column">
          <p className="fullproject__header">Technologies Used</p>
          <ul className="flex-column project__techlist">
            {techs.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
          </ul>
        </div>
        <div className="flex-columm fullproject__leftcol"></div>
        <div className="flex-columm fullproject__rightcol">
          <p className="text--copy">{myRole}</p>
          <p className="text--copy">{difficulties}</p>
          <p className="text--copy">{solutions}</p>
          <a href={urlRepo} target="_blank" rel="noopener noreferrer">Repo</a>
          <a href={urlLive} target="_blank" rel="noopener noreferrer">Live</a>

          <ul className="project__list">
            {features}
          </ul>
        </div>

      </div>

    </SpinnerDelay>
  );
}


export default FullProjectPage;
