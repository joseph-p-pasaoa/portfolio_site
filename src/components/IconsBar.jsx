/*
JOSEPH P. PASAOA
IconsBar Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const { joeysResume } = require('../helpers/importsRef.js');


/* MAIN */
const IconsBar = () => {

  return (
    <div className="iconsbar">
      <a
        href="https://github.com/joseph-p-pasaoa"
        className="link-faicon"
        data-name="Github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fab", "github-square"]} className="faicon--iconbar" />
      </a>
      <a
        href="https://www.linkedin.com/in/josephpasaoa/"
        className="link-faicon"
        data-name="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="faicon--iconbar" />
      </a>
      <a
        href="https://www.linkedin.com/in/josephpasaoa/"
        className="link-faicon"
        data-name="Contact Me"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fas", "pen-square"]} className="faicon--iconbar" />
      </a>
      <a
        href={joeysResume}
        className="link-faicon link-faicon--resume"
        data-name="Resume"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={["fas", "file-pdf"]} className="faicon--iconbar" />
      </a>
    </div>
  );
}


export default IconsBar;
