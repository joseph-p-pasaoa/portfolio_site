/*
JOSEPH P. PASAOA
IconsBar Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import './IconsBar.css';
const { joeysResume } = require('../helpers/importsRef.js');


/* MAIN */
const IconsBar = () => {
  const [ activeIcon, setActiveIcon ] = useState("none");

  const opacitySwitch = {
    none: [0, 0, 0, 0],
    github: [1, 0, 0, 0],
    linkedin: [0, 1, 0, 0],
    contact: [0, 0, 1, 0],
    resume: [0, 0, 0, 1]
  };


  return (
    <>
      <div className="faicon__description">
        <p style={{opacity: opacitySwitch[activeIcon][0]}}>Github</p>
        <p style={{opacity: opacitySwitch[activeIcon][1]}}>LinkedIn</p>
        <p style={{opacity: opacitySwitch[activeIcon][2]}}>Contact Me</p>
        <p style={{opacity: opacitySwitch[activeIcon][3]}}>My Resume</p>
      </div>
      <div className="network-icons flex-row">
        <a
          href="https://github.com/joseph-p-pasaoa"
          className="faicon"
          onMouseOver={() => setActiveIcon("github")}
          onMouseLeave={() => setActiveIcon("none")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "github-square"]} className="faicon--iconbar" />
        </a>
        <a href="https://www.linkedin.com/in/josephpasaoa/" target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("linkedin")} onMouseLeave={() => setActiveIcon("none")} className="faicon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="faicon--iconbar" />
        </a>
        <a href="https://www.linkedin.com/in/josephpasaoa/" target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("contact")} onMouseLeave={() => setActiveIcon("none")} className="faicon">
          <FontAwesomeIcon icon={["fas", "pen-square"]} className="faicon--iconbar faicon--iconbar--contact" />
        </a>
        <a href={joeysResume} target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("resume")} onMouseLeave={() => setActiveIcon("none")} className="faicon faicon__a--resume">
          <FontAwesomeIcon icon={["fas", "file-pdf"]} className="faicon--iconbar" />
        </a>
      </div>
    </>
  );
}


export default IconsBar;
