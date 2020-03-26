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
  const { name, description, urlLive, urlRepo, screencapUrl, techs, myRole, difficulties, wins, features } = project;


  
  return (
    <SpinnerDelay delayTime={800} delayColor="#243237" delayMsg={`loading ${name}`}>

      <div className="page page--projectspot">
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
        <div className="flex-row fullproject__topright">
          <div className="flex-column fullproject__buttoncol">
            <a
              href={urlRepo}
              className="fullproject__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            <a
              href={urlLive}
              className="fullproject__button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          </div>
          <div>
            {/* <div className="fullproject__desc__hr"></div> */}
            <p className="fullproject__description text--copy">{description}<br /><br />
            {myRole
              ? (<><b style={{ color: "#aaa "}}>Group (of 4) Project Role: </b> <strong style={{ fontWeight: "bold" }}>{myRole}</strong></>)
              : (<strong style={{ fontWeight: "bold" }}>Personal Project</strong>)
            }
            </p>
            {/* <div className="fullproject__desc__hr"></div> */}
            {/* <p className="fullproject__header" style={{ color: "red" }}>Group Project</p> */}
          </div>
        </div>
        <div className="project__techlist__box flex-column">
          <p className="fullproject__header">Technologies Used</p>
          <ul className="flex-column project__techlist">
            {techs.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
          </ul>
        </div>
        {/* <div className="flex-columm fullproject__leftcol"></div> */}
        <div className="flex-columm fullproject__rightcol">
          <p className="fullproject__header">Difficulties Tackled</p>
          <p className="text--copy fullproject__text">{difficulties}</p>

          <p className="fullproject__header">Accomplishments</p>
          <p className="text--copy fullproject__text">{wins}</p>

          <p className="fullproject__header">Notable Features</p>
          <ul className="project__list fullproject__features">
            {features.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
          </ul>
        </div>

      </div>

    </SpinnerDelay>
  );
}


export default FullProjectPage;
