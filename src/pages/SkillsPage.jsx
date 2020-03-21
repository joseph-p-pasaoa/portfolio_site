/*
JOSEPH P. PASAOA
SkillsPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

const iconJs = require('../assets/images/icons/js.svg');
const iconHtml = require('../assets/images/icons/html5.png');
const iconCss = require('../assets/images/icons/css3.png');
const iconScss = require('../assets/images/icons/scss.png');
const iconPsql = require('../assets/images/icons/postgresql.png');


/* MAIN */
const SkillsPage = () => {

  return (
    <div className="page page--skills">
      <ul className="section">
        <li><h3 className="header-section">Development</h3></li>
        <li data-skill="Javascript (ES6+)">
          <img
            src={iconJs}
            className="icon-skill"
            alt="Javascript (ES6+)"
          />
        </li>
        <li data-skill="HTML5">
          <img
            src={iconHtml}
            className="icon-skill"
            alt="HTML5"
          />
        </li>
        <li data-skill="CSS3">
          <img
            src={iconCss}
            className="icon-skill"
            alt="CSS3"
          />
        </li>
        <li data-skill="SCSS">
          <img
            src={iconScss}
            className="icon-skill"
            alt="SCSS"
          />
        </li>
        <li data-skill="PostgreSQL">
          <img
            src={iconPsql}
            className="icon-skill"
            alt="PostgreSQL"
          />
        </li>
      </ul>
      <ul className="section">
        <li><h3 className="header-section">Libraries, Frameworks, Runtimes</h3></li>
        <li>React</li>
        <li>React / Redux</li>
        <li>Express</li>
        <li>Node</li>
      </ul>
      <ul className="section">
        <li><h3 className="header-section">Tools</h3></li>
        <li>Git / Github</li>
        <li>Postman</li>
        <li>Chrome DevTools</li>
      </ul>
      <ul className="section">
        <li><h3 className="header-section">Design</h3></li>
        <li>Figma</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Lightroom</li>
        <li>Adobe Bridge</li>
        <li>Adobe InDesign</li>
        <li>Adobe Premiere Pro</li>
        <li>Wireframing</li>
      </ul>
    </div>
  );
}


export default SkillsPage;
