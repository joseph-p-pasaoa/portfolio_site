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
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink to={`/projects`} className="link-navlist">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to={`/skills`} className="link-navlist">
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to={`/blog`} className="link-navlist">
          Blog
        </NavLink>
      </li>
      <li>
        <a href={joeysResume} target="_blank" rel="noopener noreferrer" className="link-navlist">
          Resume
        </a>
      </li>
      <li>
        <NavLink to={`/contactme`} className="link-navlist">
          Contact Me
        </NavLink>
      </li>
      <li>
        <NavLink to={`/photography`} className="link-navlist">
          Photography
        </NavLink>
      </li>
      <li>
        <NavLink to={`/siteinfo`} className="link-navlist">
          About This Site
        </NavLink>
      </li>
    </ul>
  );
}


export default NavList;
