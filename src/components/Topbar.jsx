/*
JOSEPH P. PASAOA
Topbar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import NavList from './NavList';


/* MAIN */
const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbar__bg"></div>
      <NameBox />
      <IconsBar />
      <NavList />
    </div>
  );
}


export default Topbar;