/*
JOSEPH P. PASAOA
SkillsPage Component | Portfolio Site
*/


/* IMPORTS */
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import PageHeader from '../components/PageHeader';

const iconJs = require('../assets/images/icons/js.svg');
const iconHtml = require('../assets/images/icons/html5.png');
const iconCss = require('../assets/images/icons/css3.png');
const iconScss = require('../assets/images/icons/scss.png');
const iconPsql = require('../assets/images/icons/postgresql.png');

const iconReact = require('../assets/images/icons/react.svg');
const iconRedux = require('../assets/images/icons/redux.svg');
const iconRouter = require('../assets/images/icons/react router.png');
const iconExpress = require('../assets/images/icons/express-original.svg');
const iconNode = require('../assets/images/icons/nodejs color.svg');

const iconVSCode = require('../assets/images/icons/vscode.svg');
const iconGit = require('../assets/images/icons/git.png');
const iconGithub = require('../assets/images/icons/github.svg');
const iconChromeDT = require('../assets/images/icons/chrome devtools.png');
const iconFFDeveloper = require('../assets/images/icons/firefox developer.png');
const iconNpm = require('../assets/images/icons/npm.svg');
const iconPostman = require('../assets/images/icons/postman.svg');

const iconFigma = require('../assets/images/icons/figma.png');
const iconPhotoshop = require('../assets/images/icons/photoshop.svg');
const iconDrawio = require('../assets/images/icons/drawio.png');
const iconXD = require('../assets/images/icons/exp design.svg');

// const iconPremierePro = require('../assets/images/icons/premiere pro.svg');
// const iconLightroom = require('../assets/images/icons/lightroom.svg');
// const iconBridge = require('../assets/images/icons/bridge.svg');
// const iconInDesign = require('../assets/images/icons/indesign.svg');

const iconHeroku = require('../assets/images/icons/heroku.svg');
const iconNetlify = require('../assets/images/icons/netlify.png');


/* MAIN */
const SkillsPage = () => {
  const [ delayFinished, setDelayFinished ] = useState(false);
  const refStageTop = React.createRef();


  useEffect(() => {
    const delay = () => {
      setTimeout(() => {
        setDelayFinished(true);
      }, 1300);
    }
    const resetToTop = () => {
      refStageTop.current.scrollIntoView({
            behaviour: 'auto',
            block: 'start',
            inline: 'start',
      });
    }
    delay();
    resetToTop();
  }, [refStageTop]);


  return (
    <div className="page page--skills" ref={refStageTop}>
      <PageHeader pagename="Skills" />
      <Fade bottom cascade when={delayFinished}>

        <ul className="section">
          <li><h4 className="header-section">Development</h4></li>
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
          <li data-skill="Heroku">
            <img
              src={iconHeroku}
              className="icon-skill"
              alt="Heroku"
            />
          </li>
          <li data-skill="Netlify">
            <img
              src={iconNetlify}
              className="icon-skill"
              alt="Netlify"
            />
          </li>
        </ul>

        <ul className="section">
          <li><h4 className="header-section">Frameworks, Libraries, Runtimes</h4></li>
          <li data-skill="ReactJS">
            <img
              src={iconReact}
              className="icon-skill react"
              alt="ReactJS"
            />
          </li>
          <li data-skill="React Redux">
            <img
              src={iconRedux}
              className="icon-skill"
              alt="React Redux"
            />
          </li>
          <li data-skill="React Router">
            <img
              src={iconRouter}
              className="icon-skill"
              alt="React Router"
            />
          </li>
          <li data-skill="ExpressJS">
            <img
              src={iconExpress}
              className="icon-skill"
              alt="ExpressJS"
            />
          </li>
          <li data-skill="NodeJS">
            <img
              src={iconNode}
              className="icon-skill"
              alt="NodeJS"
            />
          </li>
        </ul>

        <ul className="section">
          <li><h4 className="header-section">Tools</h4></li>
          <li data-skill="VS Code">
            <img
              src={iconVSCode}
              className="icon-skill"
              alt="VS Code"
            />
          </li>
          <li data-skill="Github">
            <img
              src={iconGithub}
              className="icon-skill github"
              alt="Github"
            />
          </li>
          <li data-skill="Firefox Developer">
            <img
              src={iconFFDeveloper}
              className="icon-skill"
              alt="Firefox Developer"
            />
          </li>
          <li data-skill="Git">
            <img
              src={iconGit}
              className="icon-skill"
              alt="Git"
            />
          </li>
          <li data-skill="Chrome DevTools">
            <img
              src={iconChromeDT}
              className="icon-skill"
              alt="Chrome DevTools"
            />
          </li>
          <li data-skill="Npm">
            <img
              src={iconNpm}
              className="icon-skill"
              alt="Npm"
            />
          </li>
          <li data-skill="Postman">
            <img
              src={iconPostman}
              className="icon-skill"
              alt="Postman"
            />
          </li>
        </ul>

        <ul className="section">
          <li><h4 className="header-section">Design</h4></li>
          <li data-skill="Figma">
            <img
              src={iconFigma}
              className="icon-skill"
              alt="Figma"
            />
          </li>
          <li data-skill="Diagrams.net (Draw.io)">
            <img
              src={iconDrawio}
              className="icon-skill drawio"
              alt="Diagrams.net (Draw.io)"
            />
          </li>
          <li data-skill="Adobe XD">
            <img
              src={iconXD}
              className="icon-skill"
              alt="Adobe XD"
            />
          </li>
          <li data-skill="Adobe Photoshop">
            <img
              src={iconPhotoshop}
              className="icon-skill"
              alt="Adobe Photoshop"
            />
          </li>
        </ul>

        {/* <ul className="section">
          <li><h4 className="header-section">Create</h4></li>
          <li>Adobe Premiere Pro</li>
          <li data-skill="Adobe Premiere Pro">
            <img
              src={iconPremierePro}
              className="icon-skill"
              alt="Adobe Premiere Pro"
            />
          </li>
          <li data-skill="Adobe Lightroom">
            <img
              src={iconLightroom}
              className="icon-skill"
              alt="Adobe Lightroom"
            />
          </li>
          <li data-skill="Adobe Bridge">
            <img
              src={iconBridge}
              className="icon-skill"
              alt="Adobe Bridge"
            />
          </li>
          <li data-skill="Adobe InDesign">
            <img
              src={iconInDesign}
              className="icon-skill"
              alt="Adobe InDesign"
            />
          </li>
        </ul> */}

        {/* <ul className="section">
          <li><h4 className="header-section">Platforms</h4></li>
          <li data-skill="Heroku">
            <img
              src={iconHeroku}
              className="icon-skill"
              alt="Heroku"
            />
          </li>
          <li data-skill="Netlify">
            <img
              src={iconNetlify}
              className="icon-skill"
              alt="Netlify"
            />
          </li>
        </ul> */}

        {/* <ul className="section">
          <li><h4 className="header-section">Methods</h4></li>
          <li>Git flow</li>
          <li>Pair programming</li>
          <li>Whiteboarding</li>
          <li>Wireframing</li>
        </ul> */}

      </Fade>
    </div>
  );
}


export default SkillsPage;
