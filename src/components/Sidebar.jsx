/*
JOSEPH P. PASAOA
Sidebar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import NavList from './NavList';


/* MAIN */
const Sidebar = () => {
  const atHome = useRouteMatch({ exact: true, path: "/" });


  const sidebarPos = atHome
    ? { transform: "translateX(4rem)" }
    : { transform: "translateX(0)" };

  return (
    <div className="sidebar" style={sidebarPos}>
      <Fade left when={!atHome}>
        <div className="sidebar__bg"></div>
      </Fade>
      <NameBox />
      <IconsBar />
      <NavList />
    </div>
  );
}


export default Sidebar;
