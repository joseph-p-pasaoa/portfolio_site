/*
JOSEPH P. PASAOA
Topbar Component | Portfolio Site
*/


/* IMPORTS */
import React from 'react';
// import { useRouteMatch } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import NameBox from './NameBox';
import IconsBar from  './IconsBar';
import NavList from './NavList';


/* MAIN */
const Topbar = () => {
  // const atHome = useRouteMatch({ exact: true, path: "/" });


  // const topbarPos = atHome
  //   ? { transform: "translateX(4rem)" }
  //   : { transform: "translateX(0)" };

  return (
    <div className="topbar">
      {/* <Fade top when={!atHome}>
        <div className="topbar__bg"></div>
      </Fade> */}
        <div className="topbar__bg"></div>
      <NameBox />
      <IconsBar />
      <NavList />
    </div>
  );
}


export default Topbar;