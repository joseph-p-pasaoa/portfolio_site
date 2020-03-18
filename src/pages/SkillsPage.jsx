/*
JOSEPH P. PASAOA
SkillsPage Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';


/* MAIN */
const SkillsPage = () => {

  return (
    <div className="page page--skills flex-column">
      <p className="fullproject__header" style={{ marginTop: "11px" }}>Development</p>
      <ul>
        <li>Javascript (ES6+)</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PostgreSQL</li>
      </ul>
      <p className="fullproject__header" style={{ marginTop: "11px" }}>Libraries, Frameworks, Runtimes</p>
      <ul>
        <li>React</li>
        <li>React / Redux</li>
        <li>Express</li>
        <li>Node</li>
        <li>PostgreSQL</li>
      </ul>
      <p className="fullproject__header" style={{ marginTop: "11px" }}>Tools</p>
      <ul>
        <li>Git / Github</li>
        <li>Postman</li>
        <li>Chrome DevTools</li>
        <li>PostgreSQL</li>
      </ul>
      <p className="fullproject__header" style={{ marginTop: "11px" }}>Design</p>
      <ul>
        <li>Figma</li>
        <li>Adobe Photoshop, Bridge, Lightroom</li>
        <li>Adobe InDesign</li>
        <li>Wireframing</li>
      </ul>
    </div>
  );
}


export default SkillsPage;
