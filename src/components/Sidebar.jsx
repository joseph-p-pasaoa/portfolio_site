/*
JOSEPH P. PASAOA
Sidebar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import NavList from './NavList';
import './Sidebar.css';


/* COMPONENT & EXPORT */
const Sidebar = () => {

  return (
    <div className="sidebar flex-column">
      <NameBox />
      <IconsBar />
      <NavList />
    </div>
  );
}


export default Sidebar;
