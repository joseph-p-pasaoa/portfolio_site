/*
JOSEPH P. PASAOA
IconsBar Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './IconsBar.css';
import josephsResume from '../assets/downloads/_Resume_ Joseph P. Pasaoa _Developer.pdf';


/* MAIN */
const IconsBar = () => {
  const [ activeIcon, setActiveIcon ] = useState("none");

  const descriptor = {
    none: { text: "", offset: "14px", color: "transparent" },
    github: { text: "Github", offset: "14px", color: "chartreuse" },
    linkedin: { text: "LinkedIn", offset: "42px", color: "chartreuse" },
    contact: { text: "Contact Me", offset: "72px", color: "chartreuse" },
    resume: { text: "Resume", offset: "170px", color: "chartreuse" }
  };
  // separate p's needed for better ux


  return (
    <>
      <div className="network-icons flex-row">
        <a href="https://github.com/joseph-p-pasaoa" target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("github")} onMouseOut={() => setActiveIcon("none")} className="faicon">
          <FontAwesomeIcon icon={["fab", "github-square"]} className="faicon__svg" />
        </a>
        <a href="https://www.linkedin.com/in/josephpasaoa/" target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("linkedin")} onMouseOut={() => setActiveIcon("none")} className="faicon">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="faicon__svg" />
        </a>
        <a href="https://www.linkedin.com/in/josephpasaoa/" target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("contact")} onMouseOut={() => setActiveIcon("none")} className="faicon">
          <FontAwesomeIcon icon={["fas", "pen-square"]} className="faicon__svg faicon__svg--contact" />
          {/* <FontAwesomeIcon icon={["fas", "paper-plane"]} className="faicon__svg faicon__svg--contact" /> */}
        </a>
        <a href={josephsResume} target="_blank" rel="noopener noreferrer" onMouseOver={() => setActiveIcon("resume")} onMouseOut={() => setActiveIcon("none")} className="faicon faicon__a--resume">
          <FontAwesomeIcon icon={["fas", "file-pdf"]} className="faicon__svg" />
          {/* <FontAwesomeIcon icon={["fas", "list"]} className="faicon__svg faicon__svg--resume" /> */}
        </a>
      </div>
      <p className="faicon__description" style={{left: descriptor[activeIcon].offset, color: descriptor[activeIcon].color}}>
        {descriptor[activeIcon].text}
      </p>
    </>
  );
}


export default IconsBar;
