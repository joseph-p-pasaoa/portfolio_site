/*
JOSEPH P. PASAOA
Sidebar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import NavList from './NavList';


/* MAIN */
const Sidebar = () => {

  return (
    <div className="sidebar">
      <NameBox />
      <IconsBar />
      <NavList />
    </div>
  );
}


export default Sidebar;
