/*
JOSEPH P. PASAOA
NavList Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { joeysResume } from '../helpers/importsRef.js';


/* MAIN */
const NavList = () => {

  return (
    <ul className="navlist">
      <li>
        <NavLink exact to={`/`} className="link-navlist">
          <div>About Me</div>
        </NavLink>
      </li>
      <li>
        <NavLink to={`/projects`} className="link-navlist">
          <div>Projects</div>
        </NavLink>
      </li>
      <li>
        <NavLink to={`/skills`} className="link-navlist">
          <div>Skills</div>
        </NavLink>
      </li>
      <li>
        <NavLink to={`/blog`} className="link-navlist">
          <div>Blog</div>
        </NavLink>
      </li>
      <li>
        <a href={joeysResume} target="_blank" rel="noopener noreferrer" className="link-navlist">
          <div>Resume</div>
        </a>
      </li>
      <li>
        <NavLink to={`/contactme`} className="link-navlist">
          <div>Contact Me</div>
        </NavLink>
      </li>
      <li>
        <a href="https://www.josephpasaoa.com" target="_blank" rel="noopener noreferrer" className="link-navlist">
          <div>Photography</div>
        </a>
      </li>
      <li>
        <NavLink to={`/siteinfo`} className="link-navlist">
          <div>Site Info</div>
        </NavLink>
      </li>
    </ul>
  );
}


export default NavList;
