/*
JOSEPH P. PASAOA
NavList Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { joeysResume } from '../helpers/importsRef.js';


/* MAIN */
const NavList = () => {
  const [ delayFinished, setDelayFinished ] = useState(false);
  const [ isDropdownOn, setIsDropdownOn ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 600);
    }
    delay();
  }, []);

  // SCREEN WIDTH RESPONSE SYSTEM: needed to make navbar dropdown on mobile devices disappear on click
  const isClient = typeof window === 'object';
  const checkWidth = useCallback(() => {
    const screenWidth = isClient ? window.innerWidth : undefined;
    return screenWidth <= 768;
  }, [isClient]);

  const [isSmallScreen, setIsSmallScreen] = useState(checkWidth);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    function handleResize() {
      setIsSmallScreen(checkWidth());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient, checkWidth]);
  // END SCREEN WIDTH RESPONSE SYSTEM

  const dropdownToggle = isSmallScreen ? { className: "dropdown-converter" } : false;


  const handleClick = () => {
    setIsDropdownOn(!isDropdownOn);
  }


  return (
    <Fade bottom cascade when={delayFinished}>
      <div {...dropdownToggle}>
        <button className="dropdown-toggle-btn" onClick={handleClick}>{isDropdownOn ? "- navigate" : "+ navigate"}</button>

        <ul className="navlist" style={{ visibility: isSmallScreen === false || isDropdownOn ? "visible" : "hidden" }}>
          <li>
            <NavLink exact to={`/`} className="link-navlist" onClick={handleClick}>
              <div>About Me</div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/projects`} className="link-navlist" onClick={handleClick}>
              <div>Projects</div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/skills`} className="link-navlist" onClick={handleClick}>
              <div>Skills</div>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={`/blog`} className="link-navlist">
              <div>Blog</div>
            </NavLink>
          </li> */}
          {/* <li>
            <a href={joeysResume} target="_blank" rel="noopener noreferrer" className="link-navlist">
              <div>Resume</div>
            </a>
          </li> */}
          <li>
            <a href="https://www.josephpasaoa.com" target="_blank" rel="noopener noreferrer" className="link-navlist" onClick={handleClick}>
              <div>Photography</div>
            </a>
          </li>
          {/* <li>
            <NavLink to={`/siteinfo`} className="link-navlist">
              <div>About This Site</div>
            </NavLink>
          </li> */}
          <li>
            <NavLink to={`/contactme`} className="link-navlist" onClick={handleClick}>
              <div>Contact Me <FontAwesomeIcon icon={["far", "edit"]} className="faicon--iconbar" /></div>
            </NavLink>
          </li>
        </ul>

      </div>
    </Fade>
  );
}


export default NavList;
