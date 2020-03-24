/*
JOSEPH P. PASAOA
IconsBar Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';

const { joeysResume } = require('../helpers/importsRef.js');


/* MAIN */
const IconsBar = () => {
  const [ delayFinished, setDelayFinished ] = useState(false);

  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 0);
    }
    delay();
  }, []);


  return (
    <Fade bottom cascade when={delayFinished}>
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
    </Fade>
  );
}


export default IconsBar;
