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
  const { name, description, urlLive, urlRepo, screencapUrl, techs, myRole, difficulties, solutions, features } = project;



  return (
    <div className="page page--projectspot">
      <div className="flex-columm projectspot__leftcol">
        <img
          src={process.env.PUBLIC_URL + "/images/projects/" + screencapUrl}
          alt={`${name} screencap`}
          className="project__screencap"
        />
        <h3 className="project__name">{name}</h3>
        <Link to={{ pathname: '/projects', state: props.match.params.index }}>Back</Link>
      </div>
      <div className="flex-columm projectspot__rightcol">
        ProjectSpotPage
        {/*
        name
        description
        screencapUrl
        urlLive
        urlRepo
        techs
        myRole
        difficulties
        solutions
        features
        */}
      </div>

    </div>
  );
}


export default ProjectSpotPage;
