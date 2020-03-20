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
    <ul className="navlist flex-column">
      <li className="navlist__item">
        <NavLink exact to={`/`} className="navlist__link">
          About Me
        </NavLink>
      </li>
      <li className="navlist__item">
        <NavLink to={`/projects`} className="navlist__link">
          Projects
        </NavLink>
      </li>
      <li className="navlist__item">
        <NavLink to={`/skills`} className="navlist__link">
          Skills
        </NavLink>
      </li>
      <li className="navlist__item">
        <NavLink to={`/blog`} className="navlist__link">
          Blog
        </NavLink>
      </li>
      <li className="navlist__item">
        <a href={joeysResume} target="_blank" rel="noopener noreferrer" className="navlist__link">
          Resume
        </a>
      </li>
      <li className="navlist__item">
        <NavLink to={`/contactme`} className="navlist__link">
          Contact Me
        </NavLink>
      </li>
      <li className="navlist__item">
        <NavLink to={`/photography`} className="navlist__link">
          Photography
        </NavLink>
      </li>
      <li className="navlist__item">
        <NavLink to={`/siteinfo`} className="navlist__link">
          About This Site
        </NavLink>
      </li>
    </ul>
  );
}


export default NavList;
