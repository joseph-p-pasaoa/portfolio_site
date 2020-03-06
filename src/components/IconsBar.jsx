/*
JOSEPH P. PASAOA
IconsBar Component | Portfolio Site
*/


/* EXTERNALS - LOCALS */
import React from 'react';
// import { connect } from 'react-redux';

import './IconsBar.css';
const iconGithub = require('../assets/images/techlogos/GitHub-Mark-120px-plus.png');
const iconLinkedIn = require('../assets/images/techlogos/LI-In-Bug.png');


/* MAIN */
const IconsBar = () => {


  return (
    <div className="network-icons flex-row">
      <a href="https://github.com/joseph-p-pasaoa" target="_blank" rel="noopener noreferrer">
        <img src={iconGithub} alt="Joseph's Github Page" />
      </a>
      <a href="https://www.linkedin.com/in/josephpasaoa/" target="_blank" rel="noopener noreferrer">
        <img src={iconLinkedIn} alt="Joseph's LinkedIn Page" />
      </a>
    </div>
  );
}


export default IconsBar;
