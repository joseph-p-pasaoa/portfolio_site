/*
JOSEPH P. PASAOA
ProjectCard Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ImageSlider from './ImageSlider';


/* MAIN */
const ProjectCard = ({
  id,
  urlRepo,
  urlLive,
  name,
  description,
  role,
  screencapUrl,
  techs,
  features,
  difficulties,
  wins
}) => {
  const [ delayFinished, setDelayFinished ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 1100);
    }
    delay();
  }, []);


  return (
    <Fade cascade when={delayFinished}>
      <div className="card--project">

          <div className="cp__toprow">
              <h3 className="card--project__title">{id + 1 + ". "}{name}</h3>
              <h4 className="card--project__role">{role}</h4>
          </div>

          <div className="cp__middlerow text">
              <div className="card--project__images">
                  <img
                    src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
                    alt={`${name} screencap`}
                    className="screencap"
                    id={id}
                  />
              </div>
              <div className="cp__midbox">
                  <div className="card--project__description">{description}</div>
                  <div className="card--project__btns">
                      <a
                        href={urlRepo}
                        className="myButton"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repo
                      </a>
                      <a
                        href={urlLive}
                        className="myButton"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                  </div>
              </div>
          </div>

          <div className="cp__bottomrow text">
              <ul className="card--project__techlist">
                {techs.map((tech, index) => <li key={index}>{tech}</li>)}
              </ul>
              <div className="cp__bottomrow__flex">
                  <h5 className="card--project__subheader">Notable Features</h5>
                  <ul className="project--features">
                    {features.map((tech, index) => <li key={index}><span>{tech}</span></li>)}
                  </ul>
                  <h5 className="card--project__subheader">Difficulties Tackled</h5>
                  <p className="text--copy">{difficulties}</p>

                  <h5 className="card--project__subheader">Accomplishments</h5>
                  <p className="text--copy">{wins}</p>
              </div>
          </div>
      </div>


      {/*
        <div className="project__card__expandmsg">click to expand<br />
          <FontAwesomeIcon icon={["fas", "angle-down"]} className="faicon--projectnav" />
        </div>
      */}
      {/*
        <ImageSlider>
          <div data-src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl} />
        </ImageSlider>
      */}
      {/*
        <img
          src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
          alt={`${name} screencap`}
          className="screencap"
          id={id}
        />
      */}


    </Fade>
  );
}


export default ProjectCard;
