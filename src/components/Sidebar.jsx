/*
JOSEPH P. PASAOA
Sidebar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import './Sidebar.css';


/* COMPONENT & EXPORT */
const Sidebar = () => {

  return (
    <div id="sidebar" className="flex-column">
      <NameBox />
      <IconsBar />
      <ul className="navlist flex-column">
        <li>About</li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}


export default Sidebar;
